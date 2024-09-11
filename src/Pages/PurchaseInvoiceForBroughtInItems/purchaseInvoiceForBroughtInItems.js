import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css';
import '../../Assets/css/firstTd.css';
import axios from 'axios';
// import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
// import LabelComponent from '../../Components/Common/LabelComponent';
import { useSelector } from 'react-redux';
import SignatureCanvas from 'react-signature-canvas';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';


const PurchaseInvoiceForBroughtInItems = () => {
    const title = 'タイトルタイトル';
    const sigCanvas = useRef(null);
    const navigate = useNavigate();
    const data = useSelector(state => state.data);
    const purchaseData = data.data;

    const [totalQuantity, setTotalQuantity] = useState('');
    const [totalPrice, setTotalPrice] = useState('');

    // Calculate total quantity
    const calculateTotalQuantity = () => {
        const total = purchaseData.totalSalesSlipData.reduce((sum, item) => parseInt(sum) + (parseInt(item.quantity) || 0), 0);
        setTotalQuantity(total);
    };

    // Calculate total price
    const calculateTotalPrice = () => {
        const total = purchaseData.totalSalesSlipData.reduce((sum, item) => parseFloat(sum) + (parseFloat(parseFloat(item.purchase_price) * parseFloat(item.quantity)) || 0), 0);
        setTotalPrice(total);
    };

    const formatQuantityForDisplay = (quantity) => {
        // Convert the number to a string and remove any leading zeros
        return quantity.toString().replace(/^0+/, '');
    };

    useEffect(() => {
        calculateTotalQuantity();
        calculateTotalPrice();
    }, [purchaseData]); // Recalculate whenever purchaseData changes

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        const customerId = data.data.totalSalesSlipData[0].customer_id;
        if (customerId !== '' && customerId !== null) {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }

            // console.log(`${wakabaBaseUrl}/customer/getCustomerById`);
            axios.get(`${wakabaBaseUrl}/customer/getCustomerById/${customerId}`)
                .then(response => {
                    setCustomer(response.data);
                    console.log('customerdata', response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        } else{
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

    // const Th = {
    //     border: '1px solid #70685a',
    //     borderCollapse: 'collapse',
    //     color: '#70685a',
    //     fontSize: '15px'
    // };
    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
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
    const handleSavePageAsPDF = async () => {
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
        console.log('Signature Data URL:', dataUrl);
        if(checked === 'agree' && dataUrl != null) {
            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }
                const payload = purchaseData.totalSalesSlipData;
                const response = await  axios.post(`${wakabaBaseUrl}/purchaseinvoice`,{dataUrl, payload});
                //console.log('Response:', response.data);
                // Handle successful response here
                navigate('/salesslip'); // Navigate to the profile page after closing the modal
            } catch (error) {
                console.error('Error submitting form:', error);
                // Handle error here
            }
        } else {
            setError('リクエストの処理にエラーが発生しました。もう一度ご確認ください。');//There was an error processing your request. Please check again.
        }

    }
    return (<>
        {purchaseData && (
            <div >
                <Titlebar title={title} />
                <div id='purchaseInvoice' className="bg-[trasparent] font-[sans-serif]">
                    <div className='flex justify-center'>
                        <div className="w-full pt-3 pl-5 pr-5" style={{ maxWidth: '80em' }}>
                            <h2 className="text-[#70685a] text-center font-bold flex justify-end mt-3" style={{ paddingRight: '1%' }}><span className='mr-5'>来店時間</span>&nbsp;{formattedDateTime}</h2>
                            {/* header */}
                            <div className='flex justify-between'>
                                <div className='' style={{ width: '25%' }}>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 !mb-0">買取計算書No.{purchaseData.numberOfInvoice || ''}</label>
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
                                            <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">{data.data.totalSalesSlipData[0].store_name || ''}</label>
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
                                                {purchaseData.totalSalesSlipData.map((purchase, Index) => (
                                                    <tr key={Index}>
                                                        <td >{Index + 1}.</td>
                                                        <td style={Td}>
                                                            {/* <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-1 outline-[#70685a]">
                                                <option value="1">種別</option>
                                                <option value="2">Afg</option>
                                                <option value="3">Åland</option>
                                                <option value="4">Albania</option>
                                            </select> */}
                                                            {purchase.product_type_one}
                                                        </td>
                                                        <td style={Td}>{purchase.product}</td>
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
                                            <input type='checkbox' style={{ marginTop: '5px' }} name='agree' checked={checked === 'agree'} onChange={() => handleCheckboxChange('agree')} />
                                            <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 mr-30 ml-2 !mb-0"> 規約を熟読して了承しました。</label>
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
    </>
    );
};

export default PurchaseInvoiceForBroughtInItems;