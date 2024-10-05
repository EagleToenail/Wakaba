import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css';
import '../../Assets/css/firstTd.css';
import axios from 'axios';
// import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
// import LabelComponent from '../../Components/Common/LabelComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setClearData } from '../../redux/sales/actions';
import SignatureCanvas from 'react-signature-canvas';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';


import StampSheet from '../../Assets/img/stampsheet.png'
import LetterPack from '../../Assets/img/letterpack.png'
import StampRose from '../../Assets/img/stamprose.png'
import PostCard from '../../Assets/img/postcard.png'
import LabelComponent from '../../Components/Common/LabelComponent';
import InputComponent from '../../Components/Common/InputComponent';


const PurchaseInvoiceForBroughtInItems = () => {
    const title = 'タイトルタイトル';

    useEffect(() => {
        // Set overflow to hidden when the component mounts
        document.body.style.overflow = 'auto';

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'hidden';
        };
    }, []);

    const sigCanvas = useRef(null);
    const navigate = useNavigate();

    const data = useSelector(state => state.data);
    const purchaseData = data.data;
    const dispatch = useDispatch();
    const clearReduxData = () => {
        dispatch(setClearData());
    }
    const [purchaseInformation, setPurchaseInformation] = useState({});
    useEffect(() => {
        const fetch = async () => {
            if (data.data !== 'Initial Data') {
                setPurchaseInformation(purchaseData);
                clearReduxData();
            }
        }
        fetch();

    }, [data.data]);

    console.log('purchasedata---------',purchaseData);
    // if(data.data !== 'Initial Data') {
    //     clearReduxData();
    // }

    const [totalQuantity, setTotalQuantity] = useState('');
    const [totalPrice, setTotalPrice] = useState('');

    // Calculate total quantity
    const calculateTotalQuantity = () => {
        if (purchaseInformation.totalSalesSlipData?.length > 0) {
            const total = purchaseInformation.totalSalesSlipData.reduce((sum, item) => parseInt(sum) + (parseInt(item.quantity) || 0), 0);
            setTotalQuantity(total);
        }

    };

    // Calculate total price
    const calculateTotalPrice = () => {
        if (purchaseInformation.totalSalesSlipData?.length > 0) {
            const total = purchaseInformation.totalSalesSlipData.reduce((sum, item) => parseFloat(sum) + (parseFloat(parseFloat(item.purchase_price) * parseFloat(item.quantity)) || 0), 0);
            setTotalPrice(total);
        }
    };

    const formatQuantityForDisplay = (quantity) => {
        // Convert the number to a string and remove any leading zeros
        return quantity.toString().replace(/^0+/, '');
    };

    useEffect(() => {
        calculateTotalQuantity();
        calculateTotalPrice();
    }, [purchaseInformation]); // Recalculate whenever purchaseInformation changes

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        const customerId = purchaseData.id;
        if (customerId !== '' && customerId !== null) {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }

            // console.log(`${wakabaBaseUrl}/customer/getCustomerById`);
            axios.get(`${wakabaBaseUrl}/customer/getCustomerById/${customerId}`)
                .then(response => {
                    setCustomer(response.data);
                    // console.log('customerdata', response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/salesslip');
        }
    }, []);

    useEffect(() => {
        // Set overflow to hidden when the component mounts
        document.body.style.overflow = 'auto';

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'hidden';
        };
    }, []);

    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    const Th = {
        whiteSpace: 'nowrap'
    };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace: 'nowrap'
    };

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        // Update the date and time every minute
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 60000); // Update every 60,000 milliseconds (1 minute)

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Map of days of the week to Japanese kanji
    const dayKanji = ['日', '月', '火', '水', '木', '金', '土'];

    // Format the date and time as YYYY/MM/DD (Kanji) HH:MM
    const formatDateTime = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(date.getDate()).padStart(2, '0');
        const dayOfWeek = date.getDay(); // Get day of week (0: Sunday, 1: Monday, ..., 6: Saturday)
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${year}/${month}/${day} (${dayKanji[dayOfWeek]}) ${hours}:${minutes}`;
    };

    const formattedDateTime = formatDateTime(dateTime);

    const [checked, setChecked] = useState(null);
    const handleCheckboxChange = (value) => {
        setChecked(checked === value ? null : value);
    };

    const clear = () => sigCanvas.current.clear();//clear signature
    const [error, setError] = useState(null);

    //create pdf
    const handleSavePageAsPDF = async (e) => {
        const element = document.getElementById('purchaseInvoice');
        if (!element) {
            console.error('Element not found');
            return;
        }

        try {
            // Capture the content of the element
            const canvas = await html2canvas(element, {
                scale: 2, // Higher scale for better resolution
                useCORS: true // Handle CORS for external resources
            });

            const imgData = canvas.toDataURL('image/png');

            // Create a PDF with dimensions matching the captured image
            const imgWidth = canvas.width * 0.75 / 96 * 25.4; // Convert pixels to mm
            const imgHeight = canvas.height * 0.75 / 96 * 25.4; // Convert pixels to mm

            // Create a new jsPDF instance
            const pdf = new jsPDF({
                orientation: imgWidth > imgHeight ? 'l' : 'p', // Landscape or Portrait
                unit: 'mm',
                format: [imgWidth, imgHeight] // Set PDF format to the dimensions of the captured content
            });

            // Add image to PDF
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            // Save the PDF to the user's device
            const pdfBlob = pdf.output('blob');
            const url = URL.createObjectURL(pdfBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'page-content.pdf';
            link.click();
            URL.revokeObjectURL(url);

        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    const confirmAgree = async () => {
        handleSavePageAsPDF();
        const dataUrl = sigCanvas.current.toDataURL();
        if (checked === 'agree' && dataUrl != null) {
           
            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }
                const payload = purchaseInformation.totalSalesSlipData;
                const response = await axios.post(`${wakabaBaseUrl}/purchaseinvoice`, { dataUrl, payload })
                .then(response => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    navigate('/salesslip');
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
            } catch (error) {
                console.error('Error submitting form:', error);
                // Handle error here
            }
        } else {
            setError('リクエストの処理にエラーが発生しました。もう一度ご確認ください。');//There was an error processing your request. Please check again.
        }

    }
    //show modal
    const [showStampModal, setShowStampModal] = useState(false);
    const closeModal = () => {
        setShowStampModal(false);
    }
    const openModal = () => {
        setShowStampModal(true);
    }
    return (<>
        {purchaseInformation.totalSalesSlipData?.length > 0 && (
            <div >
                <Titlebar title={title} />
                <div id='purchaseInvoice' className="bg-[trasparent] font-[sans-serif]">
                    <div className='flex justify-center'>
                        <div className="w-full pt-3 pl-5 pr-5" style={{ maxWidth: '80em' }}>
                            <h2 className="text-[#70685a] text-center font-bold flex justify-end mt-3" style={{ paddingRight: '1%' }}><span className='mr-5'>来店時間</span>&nbsp;{formattedDateTime}</h2>
                            {/* header */}
                            <div className='flex justify-between'>
                                <div className='' style={{ width: '25%' }}>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 !mb-0">買取計算書No.{purchaseInformation.numberOfInvoice || ''}</label>
                                    <div className='flex'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">事業者名</label>
                                        <div>
                                            <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">OOOO OOOO OOOOOO</label>
                                            <label className="text-[#70685a] font-bold mb-2 block text-left text-[13px] !mb-0">(登録 **************)</label>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">店舗名</label>
                                        <div>
                                            <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">{purchaseInformation.totalSalesSlipData[0].store_name || ''}</label>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '50%' }}>
                                    <div className='flex justify-center'>
                                        <label className="text-[#70685a] font-bold mb-2 text-2xl block text-left !mb-0">持ち込み商品 買取計算書</label>
                                    </div>
                                </div>
                                <div style={{ width: '25%' }}>
                                    <div className='flex pt-3 w-full justify-end'>
                                        <label className="w-[70%] text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">接客担当</label>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">OOOO</label>
                                    </div>
                                    <div className='flex w-full justify-end'>
                                        <label className="w-[70%] text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">支払担当</label>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">OOOO</label>
                                    </div>
                                    <div className='flex w-full justify-end'>
                                        <label className=" w-[70%] text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">次回の現金還元額</label>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">OOOO</label>
                                    </div>
                                </div>
                            </div>
                            {/* first line */}
                            <div className='flex mt-10'>
                                <div style={{ width: '20%' }}>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">会員番号</label>
                                </div>
                                <div style={{ width: '80%' }} className='flex justify-between'>
                                    <label className="text-[#70685a]  mb-2 block text-left !mb-0">{customer.id}</label>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">VIP</label>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">{customer.gender}</label>
                                    <div className='flex'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">お名前</label>
                                        <label className="text-[#70685a]  mb-2 block text-left !mb-0">{customer.full_name}</label>
                                    </div>
                                    <div className='flex'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">カ夕力ナ名</label>
                                        <label className="text-[#70685a]  mb-2 block text-left !mb-0">{customer.katakana_name}</label>
                                    </div>
                                    <div className='flex'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">生年月日</label>
                                        <label className="text-[#70685a]  mb-2 block text-left !mb-0 mr-10">{customer.birthday}</label>
                                    </div>
                                </div>
                            </div>
                            {/* second line */}
                            <div className='flex mt-1'>
                                <div style={{ width: '20%' }}>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">お電話番号</label>
                                </div>
                                <div style={{ width: '60%' }} className='flex justify-between'>
                                    <label className="text-[#70685a]  mb-2 block text-left !mb-0">{customer.phone_number}</label>
                                    <div className='flex'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">e-mail</label>
                                        <label className="text-[#70685a]  mb-2 block text-left !mb-0 ">OOOO OOO</label>
                                    </div>
                                    <div className='flex'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">ご職業</label>
                                        <label className="text-[#70685a]  mb-2 block text-left !mb-0">{customer.opportunity}</label>
                                    </div>
                                </div>
                            </div>
                            {/* third line */}
                            <div className='flex mt-1'>
                                <div style={{ width: '20%' }}>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">ご住所</label>
                                </div>
                                <div style={{ width: '60%' }} className='flex justify-between'>
                                    <label className="text-[#70685a]  mb-2 block text-left !mb-0">{customer.address}</label>
                                </div>
                            </div>
                            {/* forth line */}
                            <div className='flex mt-1'>
                                <div style={{ width: '20%' }}>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">本人確認書類</label>
                                </div>
                                <div style={{ width: '60%' }} className='flex justify-between'>
                                    <label className="text-[#70685a]  mb-2 block text-left !mb-0">マイナンバーカード</label>
                                    <div className='flex'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">ク一ポンの使用</label>
                                        <label className="text-[#70685a]  mb-2 block text-left !mb-0 ">OOOO OOO</label>
                                    </div>
                                </div>
                            </div>
                            {/* fifth line */}
                            <div className='flex mt-1'>
                                <div style={{ width: '20%' }}>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">次回のポイント還元額</label>
                                </div>
                                <label className="text-[#70685a]  mb-2 block text-left !mb-0 ">OOOO OOO</label>
                            </div>
                            {/* table */}
                            <div className="flex justify-center">
                                <div className='w-full pt-5 flex justify-center' style={{ maxWidth: '80em' }}>
                                    <div style={{ width: '65%', overflow: 'auto' }}>
                                        <table className='text-center' style={Table}>
                                            <thead>
                                                <tr>
                                                    <th width='2%'></th>
                                                    <th width='25%'>カテゴリ一1</th>
                                                    <th width='40%'>商品名</th>
                                                    <th>個数</th>
                                                    <th>買取額</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {purchaseInformation.totalSalesSlipData?.length > 0 && purchaseInformation.totalSalesSlipData.map((purchase, Index) => (
                                                    <tr key={Index}>
                                                        <td >{Index + 1}.</td>
                                                        <td style={Td}>
                                                            {purchase.product_type_one === '切手' ? (
                                                                <div className='w-full text-[#70685a] font-bold cursor-pointer' onClick={openModal}>切手</div>
                                                            ) : (purchase.product_type_one || '')}
                                                        </td>
                                                        <td style={Td}>{purchase.product_name}</td>
                                                        <td style={Td}>{purchase.quantity}</td>
                                                        <td style={Td}>{purchase.purchase_price}</td>
                                                    </tr>
                                                ))}

                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* total */}
                            <div className="flex justify-center" >
                                <div className='w-full pt-5 flex justify-center' style={{ maxWidth: '80em' }}>

                                    <div style={{ width: '65%' }} className='flex justify-end'>
                                        <div>
                                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">買取合計金額</label>
                                            <div className='flex justify-end'>
                                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">{formatQuantityForDisplay(totalQuantity)}点</label>
                                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">{formatQuantityForDisplay(totalPrice)}円</label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* lettes */}
                            <div className="flex justify-center" >
                                <div className='w-full pt-5 flex justify-center' style={{ maxWidth: '80em' }}>

                                    <div style={{ width: '50%' }} className='flex justify-center'>
                                        <div>
                                            <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 !mb-0 flex">
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                    <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                </span>
                                                売却後は、商品に対して一切の返却申し立てを行いません。</label>
                                            <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 !mb-0 flex">
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                    <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                </span>
                                                売却商品は全て本物です。売却後貴社基準外商品と判明した場合は、即座に返金いたします。</label>
                                            <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 !mb-0 flex">
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                    <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                </span>
                                                個人情報の取扱にいて、了承いしました。</label>
                                            <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 !mb-0 flex">
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                    <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                </span>
                                                私は反社会勢力ではないことを表明し、確約いたします。</label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* check text */}
                            <div className="flex justify-center" >
                                <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>

                                    <div style={{ width: '55%', paddingLeft: '6.3%' }} className='flex'>
                                        {/* <div className='flex'>
                                    <input type='checkbox' style={{ marginTop: '5px' }} name='disagree'  checked={checked === 'disagree'}  onChange={() => handleCheckboxChange('disagree')}/>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 mr-30 ml-2 !mb-0"> 私は適格請求書業者ではありません。</label>
                                </div> */}

                                    </div>
                                </div>
                            </div>
                            {/* Area */}
                            <div className="flex justify-center" >
                                <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>

                                    <div style={{ width: '39%', height: '150px' }} className='flex'>
                                        <div className='border border-[black] h-wull w-full'>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* check text */}
                            <div className="flex justify-center" >
                                <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>

                                    <div style={{ width: '55%', paddingLeft: '6.3%' }} className='flex'>
                                        <div className='flex'>
                                            <input type='checkbox' className='flex flex-col justify-center'  name='agree' checked={checked === 'agree'} onChange={() => handleCheckboxChange('agree')} />
                                            <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 mr-30 ml-2 !mb-0 flex flex-col justify-center"> 規約を熟読して了承しました。</label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* text */}
                            <div className="flex justify-center" >
                                <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>
                                    <div>
                                        <div className='flex justify-center'>
                                            <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-3 pt-1 mr-30 ml-2 !mb-0">上記の全てを了承した上で、売却に同意してサインいたします。</label>
                                        </div>
                                        <div className='flex justify-center pt-2 gap-10'>
                                            <label className="text-[#70685a] font-bold text-[20px] mb-2 block text-left mr-3 pt-1 mr-30 ml-2 !mb-0"> お客様 サイン</label>
                                            <ButtonComponent children={'クリア'} className="bg-[transparent] border border-[#70685a] !text-[#70685a] !px-5 !py-0" onClick={clear} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* Area */}
                            <div className="flex justify-center" >
                                <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>

                                    <div style={{ width: '70%', height: '200px' }} className='flex'>
                                        <div className='w-full h-full flex justify-center'>
                                            <SignatureCanvas
                                                ref={sigCanvas}
                                                penColor='black'
                                                canvasProps={{ width: 500, height: 200, className: 'signature-canvas,pt-2 border border-[black]' }}
                                                backgroundColor='white'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Button */}
                            <div className="flex justify-center pt-5 mb-10" >
                                <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>
                                    <ButtonComponent children={'買取を了承します'} className="!py-2" onClick={confirmAgree} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )}
        {error && <div className="text-red-500 flex justify-center pb-20">{error}</div>}
        {/* --Modal-- */}
        {showStampModal &&
            <div
                className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                <div className="w-full max-w-full h-full bg-white shadow-lg rounded-lg p-8 relative overflow-y-auto">
                    <div className="flex items-center pb-3 border-b border-gray-300">
                        <h3 className="text-blue-600 text-xl font-bold flex-1"></h3>
                        <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                            viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </div>

                    <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">日本の切手 買取 印刷確認画面</h2>
                    <div className='mt-8'>
                        {/* ------------------------ */}
                        <div className=" flex flex-col items-center justify-center py-3 px-4">
                            <div className="w-full ">
                                {/* totoal data */}
                                <div className='flex justify-around mt-5'>
                                    <div className='flex'>
                                        <LabelComponent value="枚数合計" className='w-full font-bold text-right pr-3' />
                                        <InputComponent value={purchaseData.stamps.totalNumberOfStamp || ''} className='w-full h-10' disabled={true} />
                                    </div>
                                    <div className='flex'>
                                        <LabelComponent value="額面総額合計(￥)" className='w-full font-bold text-right pr-3' />
                                        <InputComponent value={purchaseData.stamps.totalStampFaceValue || ''} className='w-full h-10' disabled={true} />
                                    </div>
                                    <div className='flex'>
                                        <LabelComponent value="買取額合計(￥)" className='w-full font-bold text-right pr-3' />
                                        <InputComponent value={purchaseData.stamps.totalStampPurchasePrice || ''} className='w-full h-10' disabled={true} />
                                    </div>

                                </div>
                                {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
                                {/* mainpart */}
                                <div className='w-full stamp-related-inventory-list flex gap-5'>
                                    {/* ---------------------stamp sheet-------------------------- */}
                                    <div className='stamp-related-inventory-list-one mt-5 mb-10 w-1/3'>
                                        {/* first */}
                                        <div className='flex justify-center h-20 w-full'>
                                            <div className='flex w-full justify-center'>
                                                <div className='flex'>
                                                    <div className='w-10 flex flex-col justify-center'><img src={StampSheet} alt="aaa"></img></div>
                                                    <div className='flex flex-col justify-center'><LabelComponent value="切手シート" className='pl-5 !text-[20px] font-bold' /></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* second */}
                                        <div className='flex justify-end w-full h-30 w-full'>
                                            <div className='mt-5 flex flex-col justify-end' style={{ width: '80%' }}>
                                                <table className=' text-center w-full' style={Table}>
                                                    <thead className='sticky top-0 bg-white z-10 text-[14px]'>
                                                        <tr>
                                                            <th ></th>
                                                            <th >シート数合計</th>
                                                            <th >額面総額合計(￥)</th>
                                                            <th >買取額合計(￥)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>下記合計</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalNumberOfSheet1) + parseFloat(purchaseData.stamps.totalNumberOfSheet2) || ''}</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalFaceValue1) + parseFloat(purchaseData.stamps.totalFaceValue2) || ''}</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalPurchaseOfSheet1) + parseFloat(purchaseData.stamps.totalPurchaseOfSheet2) || ''}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>50円以上</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalNumberOfSheet1) || ''}</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalFaceValue1) || ''}</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalPurchaseOfSheet1) || ''}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>50円未満</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalNumberOfSheet2) || ''}</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalFaceValue2) || ''}</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalPurchaseOfSheet2) || ''}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* third */}
                                        <div className='mt-5 mr-5 w-full'>
                                            <div>
                                                <div>
                                                    <table className=' text-center w-full' style={Table}>
                                                        <thead className='!h-8 text-[14px]'>
                                                            <tr>
                                                                <th style={Th} className='pl-1'>切手1枚の額面(￥)</th>
                                                                <th style={Th} className='pl-1 pr-1'>面数</th>
                                                                <th style={Th}  >シート額面(￥)</th>
                                                                <th style={Th} className='pl-1 pr-1'>シート数</th>
                                                                <th style={Th} >額面総額(￥)</th>
                                                                <th style={Th} className='pl-1 pr-1'>買取額(￥)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className='!h-8'>

                                                            {purchaseData.stamps.sheetRows?.length > 0 && purchaseData.stamps.sheetRows.map((row, Index) => (
                                                                <tr key={Index} className='!h-6'>
                                                                    <td style={Td}>{row.stampValue || ''}</td>
                                                                    <td style={Td}>{row.numberOfSides || ''}</td>
                                                                    <td style={Td}>{row.sheetValue || ''}</td>
                                                                    <td style={Td}>
                                                                        {row.numberOfSheets || ''}
                                                                    </td>
                                                                    <td style={Td}>
                                                                        {row.totalFaceValue || ''}
                                                                    </td>
                                                                    <td style={Td}>
                                                                        {row.purchasePrice || ''}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* --------------------stamp rose------------------- */}
                                    <div className='stamp-related-inventory-list-one mt-5 w-1/3'>
                                        {/* first */}
                                        <div className='flex justify-center h-20 w-full'>
                                            <div className='flex w-full justify-center'>
                                                <div className='flex'>
                                                    <div className='w-10 flex flex-col justify-center'><img src={StampRose} alt="aaa"></img></div>
                                                    <div className='flex flex-col justify-center'><LabelComponent value="切手バラ" className='pl-5 !text-[20px] font-bold' /></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* second */}
                                        <div className='flex justify-end w-full h-30 mt-2' >
                                            <div className='mt-5 flex flex-col justify-end' style={{ width: '80%' }}>
                                                <table className=' text-center w-full text-[14px]' style={Table}>
                                                    <thead>
                                                        <tr>
                                                            <th ></th>
                                                            <th style={Th}>台紙数合計</th>
                                                            <th style={Th}>額面総額合計(￥)</th>
                                                            <th style={Th}>買取額合計(￥)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>下記合計</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalNumberOfRose1) + parseFloat(purchaseData.stamps.totalNumberOfRose2) || ''}</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalRoseFaceValue1) + parseFloat(purchaseData.stamps.totalRoseFaceValue2) || ''}</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalPurchaseOfRose1) + parseFloat(purchaseData.stamps.totalPurchaseOfRose2) || ''}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>50円以上</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalNumberOfRose1) || ''}</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalRoseFaceValue1) || ''}</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalPurchaseOfRose1) || ''}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>50円未満</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalNumberOfRose2) || ''}</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalRoseFaceValue2) || ''}</td>
                                                            <td style={Td}>{parseFloat(purchaseData.stamps.totalPurchaseOfRose2) || ''}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* third */}
                                        <div className='mt-5 w-full'>
                                            <div>
                                                <div>
                                                    <table className=' text-center w-full' style={Table}>
                                                        <thead className='!h-8 text-[14px]'>
                                                            <tr>
                                                                <th style={Th}>切手1枚の額面(￥)</th>
                                                                <th style={Th}>枚数</th>
                                                                <th style={Th}>額面総額(￥)</th>
                                                                <th style={Th}>買取額(￥)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {purchaseData.stamps.roseRows?.length > 0 && purchaseData.stamps.roseRows.map((row, Index) => (
                                                                <tr key={Index} className='!h-6'>
                                                                    <td style={Td}>
                                                                        {row.stampValue || ''}
                                                                    </td>
                                                                    <td style={Td}>
                                                                        {row.numberOfSheets || ''}
                                                                    </td>
                                                                    <td style={Td}>
                                                                        {row.totalFaceValue || ''}
                                                                    </td>
                                                                    <td style={Td}>
                                                                        {row.purchasePrice || ''}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ----------------------Letter pack--------------- */}
                                    <div className='stamp-related-inventory-list-one mt-5 w-1/3 ml-5'>
                                        {/* first */}
                                        <div className='flex justify-center h-20 mb-2'>
                                            <div className='flex w-full justify-center'>
                                                <div className='flex'>
                                                    <div className='w-10 flex flex-col justify-center'><img src={LetterPack} alt="aaa"></img></div>
                                                    <div className='flex flex-col justify-center'><LabelComponent value="レ夕一パック" className='pl-5 !text-[20px] font-bold whitespace-nowrap' /></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* second */}
                                        <div className='flex justify-end w-full h-[120px]' >
                                            <div className='mt-5 flex flex-col justify-end' style={{ width: '80%' }}>
                                                <div className='flex flex-col justify-end'>
                                                    <table className=' text-center w-full' style={Table}>
                                                        <thead className='!h-8 text-[14px]'>
                                                            <tr>
                                                                <th ></th>
                                                                <th style={Th}>枚数合計</th>
                                                                <th style={Th}>額面総額合計(￥)</th>
                                                                <th style={Th}>買取額合計(￥)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>下記合計</td>
                                                                <td style={Td}>{parseFloat(purchaseData.stamps.totalNumberOfPack1) + parseFloat(purchaseData.stamps.totalNumberOfPack2) || ''}</td>
                                                                <td style={Td}>{parseFloat(purchaseData.stamps.totalPackFaceValue1) + parseFloat(purchaseData.stamps.totalPackFaceValue2) || ''}</td>
                                                                <td style={Td}>{parseFloat(purchaseData.stamps.totalPurchaseOfPack1) + parseFloat(purchaseData.stamps.totalPurchaseOfPack2) || ''}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        {/* third */}
                                        <div className='mt-5 w-full' >
                                            <div>
                                                <div>
                                                    <table className=' text-center w-full' style={Table}>
                                                        <thead className='!h-8 text-[14px]'>
                                                            <tr>
                                                                <th style={Th} className='p1-1 pr-1 !w-20'>種別</th>
                                                                <th style={Th} >額面(￥)</th>
                                                                <th style={Th} className='pl-1 pr-1'>枚数</th>
                                                                <th style={Th} >額面総額(￥)</th>
                                                                <th style={Th} className='pr-1'>買取額(￥)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {purchaseData.stamps.packRows?.length > 0 && purchaseData.stamps.packRows.map((row, Index) => (
                                                                <tr key={Index} className='!h-6'>
                                                                    <td style={Td} >
                                                                        <div className='w-20'>
                                                                            {row.type || ''}
                                                                        </div>
                                                                    </td>
                                                                    <td style={Td} >
                                                                        <div className='w-20'>
                                                                            {row.stampValue || ''}
                                                                        </div>
                                                                    </td>
                                                                    <td style={Td}>
                                                                        {row.numberOfSheets || ''}
                                                                    </td>
                                                                    <td style={Td}>
                                                                        {row.totalFaceValue || ''}
                                                                    </td>
                                                                    <td style={Td}>
                                                                        {row.purchasePrice || ''}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* -----------------------------------------------------Postcard------------------------------------------ */}
                                            <div>
                                                <div className='mt-10'>
                                                    <div className='flex justify-center'>
                                                        <div className='flex w-full justify-center'>
                                                            <div className='flex'>
                                                                <div className='w-10 flex flex-col justify-center'><img src={PostCard} alt="aaa"></img></div>
                                                                <div className='flex flex-col justify-center'><LabelComponent value="ハガキ" className='pl-5 !text-[20px] font-bold' /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex justify-end'>
                                                    <div className='mt-5 flex flex-col justify-end' style={{ width: '70%' }}>
                                                        <table className=' text-center w-full' style={Table}>
                                                            <thead className='text-[14px]'>
                                                                <tr>
                                                                    <th></th>
                                                                    <th style={Th}>枚数計</th>
                                                                    <th style={Th}>額面総額合計(￥)</th>
                                                                    <th style={Th}>買取額合計(￥)</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>下記合計</td>
                                                                    <td style={Td}>{parseFloat(purchaseData.stamps.totalNumberOfCard1) + parseFloat(purchaseData.stamps.totalNumberOfCard2) || ''}</td>
                                                                    <td style={Td}>{parseFloat(purchaseData.stamps.totalCardFaceValue1) + parseFloat(purchaseData.stamps.totalCardFaceValue2) || ''}</td>
                                                                    <td style={Td}>{parseFloat(purchaseData.stamps.totalPurchaseOfCard1) + parseFloat(purchaseData.stamps.totalPurchaseOfCard2) || ''}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>50円以上</td>
                                                                    <td style={Td}>{parseFloat(purchaseData.stamps.totalNumberOfCard1) || ''}</td>
                                                                    <td style={Td}>{parseFloat(purchaseData.stamps.totalCardFaceValue1) || ''}</td>
                                                                    <td style={Td}>{parseFloat(purchaseData.stamps.totalPurchaseOfCard1) || ''}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>50円未満</td>
                                                                    <td style={Td}>{parseFloat(purchaseData.stamps.totalNumberOfCard2) || ''}</td>
                                                                    <td style={Td}>{parseFloat(purchaseData.stamps.totalCardFaceValue2) || ''}</td>
                                                                    <td style={Td}>{parseFloat(purchaseData.stamps.totalPurchaseOfCard2) || ''}</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className='mt-5 ml-5'>

                                                    <div>
                                                        <div>
                                                            <table className=' text-center w-full' style={Table}>
                                                                <thead className='text-[14px]'>
                                                                    <tr>
                                                                        <th style={Th} className='pl-1 pr-1'>額面(￥)</th>
                                                                        <th style={Th} className='w-20' >枚数</th>
                                                                        <th style={Th} className='pl-1 pr-1'>額面総額(￥)</th>
                                                                        <th style={Th} className='pl-1 pr-1'>買取額(￥)</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {purchaseData.stamps.cardRows?.length > 0 && purchaseData.stamps.cardRows.map((row, Index) => (
                                                                        <tr key={Index} >
                                                                            <td style={Td}>
                                                                                {row.stampValue || ''}
                                                                            </td>
                                                                            <td style={Td}>
                                                                                {row.numberOfSheets || ''}
                                                                            </td>
                                                                            <td style={Td}>
                                                                                {row.totalFaceValue || ''}
                                                                            </td>
                                                                            <td style={Td}>
                                                                                {row.purchasePrice || ''}
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ------------------------ */}
                        <div className="flex justify-end gap-4 !mt-8  border-t border-gray-300">
                            {/* <button type="button"
                            className="px-6 py-3 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300">Cancel</button> */}
                            <button type="button" onClick={closeModal}
                                className="px-6 py-3 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700">閉じる</button>
                        </div>
                    </div>
                </div>
            </div>
        }

    </>
    );
};

export default PurchaseInvoiceForBroughtInItems;