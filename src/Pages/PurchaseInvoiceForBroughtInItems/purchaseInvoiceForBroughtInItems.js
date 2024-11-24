import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css';
import '../../Assets/css/firstTd.css';
import axios from 'axios';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import { useSelector } from 'react-redux';
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
        document.body.style.overflow = 'auto';
        return () => {
            document.body.style.overflow = 'hidden';
        };
    }, []);

    const sigCanvas = useRef(null);
    const navigate = useNavigate();

    const data = useSelector(state => state.data);
    const purchaseData = data.invoiceData;
    console.log('purchaseData',purchaseData,data)
    const [purchaseInformation, setPurchaseInformation] = useState({});
    useEffect(() => {
        const fetch = async () => {
            if (purchaseData !== '') {
                setPurchaseInformation(purchaseData);
            }
        }
        fetch();

    }, [purchaseData]);

    // console.log('purchasedata---------',purchaseData);
    // if(data.data !== 'Initial Data') {
    //     clearReduxData();
    // }

    //---------------------------whole hearing data
    // const [nextItems,setNextItems] = useState([]);
    // const [sendDM, setSendDM] = useState([]);

    // const getNextItems = () => {
    //     if (purchaseInformation.totalSalesSlipData?.length > 0) {
    //         const data = purchaseInformation.wholeHearingData;

    //         const labelsFromIndex4To19 = data
    //             .filter(item => item.Index >= 4 && item.Index <= 19) // Filter based on Index
    //             .map(item => item.label); // Map to extract labels
    //         setNextItems(labelsFromIndex4To19);
    //         const labelsFromIndex20To21 = data
    //             .filter(item => item.Index >= 20 && item.Index <= 21) // Filter based on Index
    //             .map(item => item.label); // Map to extract labels
    //         setSendDM(labelsFromIndex20To21);
    //     }
    // }

    // useEffect(() => {
    //     getNextItems();
    // }, [purchaseInformation]); // Recalculate whenever purchaseInformation changes

    // Fetch product1 data
    const [product1s, setProduct1s] = useState([]);
    useEffect(() => {
        const fetchCategory1 = async () => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }

            await axios.get(`${wakabaBaseUrl}/ProductType1s`)
                .then(response => {
                    setProduct1s(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }
        fetchCategory1();
    }, []);

    const [totalQuantity, setTotalQuantity] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [wakabaPoint, setWakabaPoint] = useState('');

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

    //Calculate wakaba point
    const calculateWakabaPoint = () => {
        console.log('ok')
        if (purchaseInformation.totalSalesSlipData?.length > 0) {
            console.log('ok1', product1s)
            const combinedData = purchaseInformation.totalSalesSlipData.map(sale => {
                const matchingPrice = product1s.find(point => point.category === sale.product_type_one);
                console.log('matchingPrice', matchingPrice)
                return {
                    ...sale,
                    wakaba_point: matchingPrice ? matchingPrice.wakaba_point : null, // Add price or null if not found
                };
            });
            console.log('combinedData', combinedData)
            const total = combinedData.reduce((sum, item) => parseFloat(sum) + (parseFloat(parseFloat(item.wakaba_point) * parseFloat(item.quantity)) || 0), 0);
            setWakabaPoint(total);
        }
    }

    const formatQuantityForDisplay = (quantity) => {
        // Convert the number to a string and remove any leading zeros
        return quantity.toString().replace(/^0+/, '');
    };

    useEffect(() => {
        calculateTotalQuantity();
        calculateTotalPrice();
    }, [purchaseInformation]); // Recalculate whenever purchaseInformation changes

    useEffect(() => {
        calculateWakabaPoint();
    }, [purchaseInformation, product1s]); // Recalculate whenever purchaseInformation changes

    const [customer, setCustomer] = useState([]);
    const customerId = purchaseData.id;
    useEffect(() => {
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

    //---------------whole hearing control part---------------
    const [pairs, setPairs] = useState([
        { checked: false, value: '' },
        { checked: false, value: '' },
        { checked: false, value: '' },
        { checked: false, value: '' },
    ]);

    const [additionalCheckboxes, setAdditionalCheckboxes] = useState(Array(22).fill(false));

    // Array of labels corresponding to the additional checkboxes
    const additionalLabels = [
        '以前も利用したことがある',
        '店舗を見て',
        'インターネットを見て',
        '紹介されて',
        'ダイヤモンド',
        '色石',
        'ネックレス',
        '指輪',
        '時計',
        'ブランド品',
        '切手',
        '中国切手',
        '古銭',
        '金券',
        'テレカ',
        'カメラ',
        'スマートフォン',
        '食器',
        'ホビー',
        '楽器',
        '可',
        '不可'
    ];

    const itemLabels = [
        'Item 2 Label', // Label for item2
        'Item 3 Label', // Label for item3
        'Item 4 Label', // Label for item4
        'Item 5 Label'  // Label for item5
    ];

    const handlePairCheckboxChange = (index) => {
        const newPairs = [...pairs];
        newPairs[index].checked = !newPairs[index].checked;
        setPairs(newPairs);
    };

    const handleInputChange = (index, value) => {
        const newPairs = [...pairs];
        newPairs[index].value = value;
        setPairs(newPairs);
    };

    const handleAdditionalCheckboxChange = (index) => {
        const newCheckboxes = [...additionalCheckboxes];
        newCheckboxes[index] = !newCheckboxes[index];
        setAdditionalCheckboxes(newCheckboxes);
    };

    const handleSubmit = () => {
        const updatedCustomer = { ...customer };
        const checkedValues = [];

        // Collect values for each pair
        pairs.forEach((pair, i) => {
            if (pair.checked) {
                checkedValues.push({ label: additionalLabels[i], value: pair.value });

                // Update customer state based on index
                updatedCustomer[`item${i + 2}`] = pair.value; // item2 to item5
            }
        });

        // Collect additional checked checkboxes
        const additionalChecked = [];
        additionalCheckboxes.forEach((isChecked, i) => {
            if (isChecked) {
                additionalChecked.push({ label: additionalLabels[i], index: i + 1 });
            }
        });

        // Set additionalChecked in the customer state
        updatedCustomer.item1 = additionalChecked.map(item => item.label);

        // Finally, set the updated customer state
        setCustomer(updatedCustomer);
    };

    useEffect(() => {
        handleSubmit();
    }, [pairs, additionalCheckboxes]);
    const [wholeHearingData, setWholeHearingData] = useState([]);

    const checkedFunction = (item1, item2, item3, item4, item5) => {
        if (item1?.length > 0) {
            const array = item1.split(',').map(Number);
            setAdditionalCheckboxes(array);
            updateValueAtIndex(0, item2);
            updateValueAtIndex(1, item3);
            updateValueAtIndex(2, item4);
            updateValueAtIndex(3, item5);

            // Collecting the labels and input values
            const checkedLabelsAndValues = [];

            // Add labels and values for additional checkboxes
            array.forEach((index) => {
                if (index < additionalLabels.length) {
                    checkedLabelsAndValues.push({
                        label: additionalLabels[index],
                        checked: true,
                        Index: index
                    });
                }
            });

            const items = [item2, item3, item4, item5];
            console.log(items, 'items')
            items.forEach((item, index) => {
                updateValueAtIndex(index, item); // Update state
                if (item && item !== '') {
                    checkedLabelsAndValues.push({ label: itemLabels[index], value: item });
                }
            });
            // Log or return the checked labels and values
            console.log('Checked Labels and Values:', checkedLabelsAndValues);
            setWholeHearingData(checkedLabelsAndValues);
            return checkedLabelsAndValues;
        }
        return [];
    };

    const updateValueAtIndex = (index, newValue) => {
        setPairs(prevPairs => {
            const newPairs = [...prevPairs];
            newPairs[index] = { ...newPairs[index], checked: true, value: newValue };
            return newPairs;
        });
    };

    // Save function
    const itemsSave = () => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.post(`${wakabaBaseUrl}/customer/createcustomeritem"`, { id: customerId, customer: customer })
            .then(response => {
                console.log('Customer data updated successfully:', response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    };


    //--------------------------------------------------------

    const confirmAgree = async () => {
        // handleSavePageAsPDF();
        itemsSave();
        const dataUrl = sigCanvas.current.toDataURL();
        if (checked === 'agree' && dataUrl != null) {
            const payload = purchaseInformation.totalSalesSlipData;
            console.log('payload', payload)
            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }
                const payload = purchaseInformation.totalSalesSlipData;
                const response = await axios.post(`${wakabaBaseUrl}/purchaseinvoice/confirm`, { dataUrl, payload })
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
                        <div className="w-full pl-5 pr-5">
                            <h2 className="text-[#70685a] text-center font-bold flex justify-end" style={{ paddingRight: '1%'}}><span className='mr-5' style={{display:'none'}}>成約日時</span>&nbsp;{formattedDateTime}</h2>
                            {/* header */}
                            <div className='flex justify-between'>
                                <div className='' style={{ width: '35%' }}>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 !mb-0">買取計算書No.{purchaseInformation.numberOfInvoice || ''}</label>
                                    <div className='flex'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">事業者名</label>
                                        <div>
                                            <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">
                                                <input type='text' className='!h-6 w-40'></input>
                                            </label>
                                            <label className="text-[#70685a] font-bold mb-2 block text-left text-[10px] !mb-0">(登録 **************)</label>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">店舗名</label>
                                        <div>
                                            <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">{purchaseInformation.totalSalesSlipData[0].store_name || ''}</label>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '30%' }}>
                                    <div className='flex justify-center'>
                                        <label className="text-[#70685a] font-bold mb-2 text-2xl block text-left !mb-0">買取計算書</label>
                                    </div>
                                </div>
                                <div style={{ width: '35%' }}>
                                    <div className='flex pt-3 w-full justify-end'>
                                        <div className='w-max flex justify-between'>
                                            <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">接客担当</label>
                                            <label className="w-max text-[#70685a] font-bold mb-2 block text-left !mb-0">{purchaseInformation.totalSalesSlipData[0].purchase_staff || ''}</label>
                                        </div>
                                    </div>
                                    <div className='flex pt-3 w-full justify-end'>
                                        <div className='w-max flex justify-between'>
                                            <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">支払担当</label>
                                            <label className="w-max text-[#70685a] font-bold mb-2 block text-left !mb-0">{purchaseInformation.totalSalesSlipData[0].payment_staff || 'OOO'}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* table */}
                            <div className="w-full flex justify-center">
                                <div className='w-full flex justify-center' style={{ maxWidth: '80em' }}>
                                    <div style={{ width: '65%', overflow: 'auto' }}>
                                        <table className='text-center' style={Table}>
                                            <thead>
                                                <tr>
                                                    <th width='2%'></th>
                                                    <th width='25%'>種別</th>
                                                    <th width='40%'>商品名</th>
                                                    <th>個数</th>
                                                    <th>買取額</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {purchaseInformation.totalSalesSlipData?.length > 0 && purchaseInformation.totalSalesSlipData.map((purchase, Index) => (
                                                    <tr key={Index}>
                                                        <td >{Index + 1}.</td>
                                                        {/* <td style={Td}>
                                                            {purchase.product_type_one === '切手' ? (
                                                                <div className='w-full text-[#70685a] font-bold cursor-pointer' onClick={openModal}>切手</div>
                                                            ) : (purchase.product_type_one || '')}
                                                        </td> */}
                                                        <td style={Td}>{purchase.product_type_one}</td>
                                                        <td style={Td}>{purchase.product_name}</td>
                                                        <td style={Td}>{purchase.quantity}</td>
                                                        <td style={Td} className='text-right'>{(parseInt(purchase.purchase_price || 0)).toLocaleString()}</td>
                                                    </tr>
                                                ))}

                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* total */}
                            <div className="flex justify-center" >
                                <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>
                                    <div style={{ width: '65%' }} className='flex justify-end'>
                                        <div>
                                            
                                            <div className='flex justify-end'>
                                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">買取合計金額</label>
                                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">{formatQuantityForDisplay(totalQuantity)}点</label>
                                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">{(parseInt(formatQuantityForDisplay(totalPrice) || 0).toLocaleString())}円</label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='purchase-confirm-width flex w-full'>
                                <div className='flex purchase-confirm-width-four w-[65%]'>
                                    {/* ------first part------ */}
                                    <div className='purchase-confirm-width-one w-[50%] flex-justify-center mt-1 '>
                                        <div className='purchase-confirm-width-three ml-[10%] w-[80%]'>
                                            <div className='flex'>
                                                <div className='flex w-[60%]'>
                                                    <label className="text-[#70685a] font-bold block text-left mr-3 ">会員番号</label>
                                                    <label className="text-[#70685a]  block text-left ">{customer.id}</label>
                                                </div>
                                                <div className='w-[40%] flex'>
                                                    <label className="text-[#70685a] font-bold block text-left mr-10">VIP</label>
                                                    <label className="text-[#70685a] font-bold block text-left">{customer.gender}</label>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <div className='w-[60%]'>
                                                    <label className="text-[#70685a] font-bold block text-left mr-3 ">お名前</label>
                                                </div>
                                                <div className='w-[40%]'>
                                                    <label className="text-[#70685a]  block text-left ">{customer.full_name}</label>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <div className='w-[60%]'>
                                                    <label className="text-[#70685a] font-bold block text-left mr-3 ">カ夕力ナ名</label>
                                                </div>
                                                <div className='w-[40%] flex'>
                                                    <label className="text-[#70685a]  block text-left ">{customer.katakana_name}</label>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <div className='w-[60%]'>
                                                    <label className="text-[#70685a] font-bold block text-left mr-3 ">生年月日</label>
                                                </div>
                                                <div className='w-[40%] flex'>
                                                    <label className="text-[#70685a]  block text-left ">{customer.birthday}</label>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <div className='w-[60%]'>
                                                    <label className="text-[#70685a] font-bold block text-left mr-3 ">お電話番号</label>
                                                </div>
                                                <div className='w-[40%] flex'>
                                                    <label className="text-[#70685a]  block text-left ">{customer.phone_number}</label>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <div className='w-[60%]'>
                                                    <label className="text-[#70685a] font-bold block text-left mr-3 ">E-mail</label>
                                                </div>
                                                <div className='w-[40%] flex' >
                                                    <label className="text-[#70685a]  block text-left ">{customer.email}</label>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <div className='w-[60%]'>
                                                    <label className="text-[#70685a] font-bold block text-left mr-3 ">ご職業</label>
                                                </div>
                                                <div className='w-[40%] flex'>
                                                    <label className="text-[#70685a]  block text-left ">{customer.opportunity||'ooo'}</label>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <div className='w-[60%]'>
                                                    <label className="text-[#70685a] font-bold block text-left mr-3 ">ご住所</label>
                                                </div>
                                                <div className='w-[40%] flex'>
                                                    <label className="text-[#70685a]  block text-left ">{customer.address}</label>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <div className='w-[60%]'>
                                                    <label className="text-[#70685a] font-bold block text-left mr-3 ">本人確認書類</label>
                                                </div>
                                                <div className='w-[40%] flex'>
                                                    <label className="text-[#70685a]  block text-left ">マイナンバーカード</label>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <div className='w-[60%]'>
                                                    <label className="text-[#70685a] font-bold block text-left mr-3 ">ク一ポンの使用</label>
                                                </div>
                                                <div className='w-[40%] flex'>
                                                    <label className="text-[#70685a]  block text-left ">OOO OOO</label>
                                                </div>
                                            </div>
                                            <div className='flex'>
                                                <div className='w-[60%]'>
                                                    <label className="text-[#70685a] font-bold block text-left mr-3 ">次回のポイント還元額</label>
                                                </div>
                                                <div className='w-[40%] flex'>
                                                    <label className="text-[#70685a]  block text-left ">{wakabaPoint || 0}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* -----Second part------ */}
                                    <div className='purchase-confirm-width-two w-[50%] h-[310px]'>
                                        {/* -------------- */}
                                        <div>
                                            {/* lettes */}
                                            <div className="flex justify-center" >
                                                <div className='flex justify-center' style={{ maxWidth: '80em' }}>

                                                    <div style={{ width: '80%' }} className='flex justify-center'>
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
                                            {/* Area */}
                                            <div className="flex justify-center" >
                                                <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>

                                                    <div className='w-[80%] h-40 flex'>
                                                        <div className='border border-[black] h-full w-full'>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* --------third part-------- */}
                                <div className='purchase-confirm-width-three w-[35%] h-[310px]'>
                                    {/* Text area */}
                                    <div className='w-full flex justify-center'>
                                        <div className="w-full">
                                            {/* Text area */}
                                            <label className="flex text-[#70685a] text-[20px] font-bold block text-left mr-10 py-1">
                                                アンケート
                                            </label>
                                            <div className="px-3 w-full">
                                                <div>
                                                    <div className='flex'>
                                                        <label className="text-[#70685a] text-[16px] block text-left mr-10">Q1</label>
                                                        <label className="text-[#70685a] text-[15px] block text-left mr-10">ご職業</label>
                                                    </div>
                                                    <div className='ml-5 text-[13px]'>
                                                        <div className='flex justify-between'>
                                                            {['自営業', '自由業', '会社員', 'パート・アルバイト', '主婦', '学生', '無色'].map((label, index) => {
                                                                const id = `additional-checkbox-${index}`; // Unique ID for each checkbox
                                                                return (
                                                                    <div className="flex items-center" key={index}>
                                                                        <input
                                                                            type="checkbox"
                                                                            id={id}
                                                                            checked={additionalCheckboxes[index]}
                                                                            onChange={() => handleAdditionalCheckboxChange(index)}
                                                                            className="w-4 h-4 mr-3"
                                                                        />
                                                                        <label htmlFor={id} className="text-[#70685a]">{label}</label>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='sign-part w-full'>
                                                    <div className='sign-width-one'>
                                                        <div className='w-full flex'>
                                                            <label className="text-[#70685a] text-[16px] block text-left mr-10">Q2</label>
                                                            <label className="text-[#70685a] text-[15px] block text-left mr-10">次回お持ちいただくご予定の商品はございますか？</label>
                                                        </div>
                                                        <div className='ml-2 flex text-[13px]'>
                                                            <div className='flex flex-wrap'>
                                                                {[
                                                                    'ダイヤモンド',
                                                                    '色石',
                                                                    'ネックレス',
                                                                    '指輪',
                                                                    '時計',
                                                                    'ブランド品',
                                                                    '切手',
                                                                    '中国切手',
                                                                    '古銭',
                                                                    '金券',
                                                                    'テレカ',
                                                                    'カメラ',
                                                                    'スマートフォン',
                                                                    '食器',
                                                                    'ホビー',
                                                                    '楽器'
                                                                ].map((item, index) => {
                                                                    const checkboxIndex = index + 4; // Adjust the index for additionalCheckboxes
                                                                    const id = `checkbox-${checkboxIndex}`; // Unique ID for each checkbox
                                                                    return (
                                                                        <div className="flex items-center ml-3" key={id}>
                                                                            <input
                                                                                type="checkbox"
                                                                                id={id}
                                                                                className="w-4 h-4 mr-3"
                                                                                checked={additionalCheckboxes[checkboxIndex] || false}
                                                                                onChange={() => handleAdditionalCheckboxChange(checkboxIndex)}
                                                                            />
                                                                            <label htmlFor={id} className="text-[#70685a]">{item}</label>
                                                                        </div>
                                                                    );
                                                                })}

                                                                <div className='flex items-center ml-3'>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="pair-checkbox-3"
                                                                        checked={pairs[3].checked}
                                                                        onChange={() => handlePairCheckboxChange(3)}
                                                                        className="w-4 h-4 mr-3"
                                                                    />
                                                                    <label htmlFor="pair-checkbox-3" className="text-[#70685a] mr-3">その他</label>
                                                                    <InputComponent
                                                                        value={pairs[3].value}
                                                                        onChange={(e) => handleInputChange(3, e.target.value)}
                                                                        disabled={!pairs[3].checked}
                                                                        className="w-[100px] text-[#70685a] mb-2 block text-left mr-10 py-1 !mb-0 !h-8"
                                                                        placeholder={'その他詳細'}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='sign-width-one'>
                                                        <div className='w-full flex'>
                                                            <label className="text-[#70685a] text-[16px] block text-left mr-10">Q3</label>
                                                            <label className="text-[#70685a] text-[15px] block text-left mr-10">DM等、各種ご案内をお送りしてもよろしいですか？</label>
                                                        </div>
                                                        <div className='ml-5'>
                                                            <div className='flex gap-10 text-[13px]'>
                                                                {[
                                                                    { label: '可', index: 20 },
                                                                    { label: '不可', index: 21 }
                                                                ].map(({ label, index }) => {
                                                                    const id = `checkbox-${index}`;
                                                                    return (
                                                                        <div className="flex items-center" key={id}>
                                                                            <input
                                                                                type="checkbox"
                                                                                id={id}
                                                                                className="w-4 h-4 mr-3"
                                                                                checked={additionalCheckboxes[index] || false}
                                                                                onChange={() => handleAdditionalCheckboxChange(index)}
                                                                            />
                                                                            <label htmlFor={id} className="text-[#70685a]">{label}</label>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* check text */}
                            <div className="flex justify-center" >
                                <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>
                                    <div className='flex'>
                                        <div className='flex'>
                                            <input type='checkbox' className='flex flex-col justify-center' name='agree' checked={checked === 'agree'} onChange={() => handleCheckboxChange('agree')} />
                                            <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 mr-30 ml-2 !mb-0 flex flex-col justify-center"> 規約を熟読して了承しました。</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*--------Signature------ */}
                            <div className="flex justify-center" >
                                <div className='w-full pt-1 flex justify-center'>
                                    <div className='sign-part w-full'>
                                        <div className='w-full flex justify-center'>
                                            <label className="text-[#70685a] text-[20px] font-bold block text-left mr-3 mr-30 ml-2 !mb-0">上記の全てを了承した上で、売却に同意してサインいたします。</label>
                                        </div>
                                        <div className='w-full flex justify-between pt-1 gap-10'>
                                            <ButtonComponent style={{visibility:'hidden'}} children={'クリア'} className="bg-[transparent] border border-[#70685a] !text-[#70685a] !px-5 !py-0" onClick={clear} />
                                            <label className="text-[#70685a] font-bold text-[20px] mb-2 block text-left mr-3 mr-30 ml-2 !mb-0"> お客様 サイン</label>
                                            <ButtonComponent children={'クリア'} className="bg-[transparent] border border-[#70685a] !text-[#70685a] !px-5 !py-0" onClick={clear} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Area */}
                            <div className="flex justify-center" >
                                <div className='w-full pt-1 flex justify-center'>

                                    <div className='w-full flex'>
                                        <div className='w-full h-full flex justify-center'>
                                            {checked === 'agree' ?
                                                <SignatureCanvas
                                                    ref={sigCanvas}
                                                    penColor='black'
                                                    canvasProps={{ className: 'w-full h-40 signature-canvas,pt-2 border border-[black]' }}
                                                    backgroundColor='white'
                                                />
                                                : <div className='w-full h-40 signature-canvas,pt-2 border border-[black]'></div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Button */}
                            <div className="flex justify-center pt-1" >
                                <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>
                                    {purchaseInformation.totalSalesSlipData?.length > 0 && (purchaseInformation.totalSalesSlipData[0].product_status === '承認待ち' || purchaseInformation.totalSalesSlipData[0].product_status === '承認された') &&
                                        <ButtonComponent children={'誓約する'} className="!py-2" onClick={confirmAgree} />
                                    }
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