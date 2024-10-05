import React , {useState,useEffect,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css';
import axios from 'axios';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import DateAndTime from '../../Components/Common/PickData';
import dateimage from '../../Assets/img/datepicker.png';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import {useDispatch, useSelector } from 'react-redux';
import { setClearData } from '../../redux/sales/actions';


const CustomerReceipt = () => {
    // const title = 'タイトルタイトル';
    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    const Th = {
        white:'nowrap'
    };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace:'nowrap'
    };
    const navigate = useNavigate();
    const data = useSelector(state => state.data);
    const purchaseData = data.data;
    const customerId = purchaseData.id;
    console.log('purchase data',purchaseData)

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        // console.log('redux data', customerId)
        if(customerId !== '' && customerId !==null){
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            console.log('received data',purchaseData)
            // console.log(`${wakabaBaseUrl}/customer/getCustomerById`);
            axios.get(`${wakabaBaseUrl}/customer/getCustomerById/${customerId}`)
                .then(response => {
                    setCustomer(response.data);
                    // console.log('customerdata',response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        } else {
            navigate('/salesslip');
        }
    }, []);


    const [totalQuantity, setTotalQuantity] = useState('');
    // Calculate total quantity
    const calculateTotalQuantity = () => {
        const total = purchaseData.totalSalesSlipData.reduce((sum, item) => parseInt(sum) + (parseInt(item.quantity) || 0), 0);
        setTotalQuantity(total);
    };
    useEffect(() => {
        calculateTotalQuantity();
      }, [purchaseData]); // Recalculate whenever purchaseData changes
  // Function to extract year, month, and day
  const extractDateParts = (dateStr) => {
    const [year, month, day] = dateStr.split('-');
    return { year, month, day };
  };

  // Extract the date parts
  const [timeline, setTimeline] = useState('');

  const handleDateChange = (event) => {
      setTimeline(event.target.value); // Update the date state with the selected date

  };
  const { year, month, day } = extractDateParts(timeline);


    //create pdf
    const handleSavePageAsPDF = async (e) => {
    const element = document.getElementById('purchaserecipt');
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
    //---------------------
    const dispatch = useDispatch();
    const clearReduxData = () => {
        dispatch(setClearData());
    }
    const clickConfirm = () => {
        handleSavePageAsPDF();
        clearReduxData();
        navigate(`/invoiceforpurchaseofbrought/${customerId}`);
    }

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <div id='purchaserecipt' className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '90em' }}>
                    <div className='customer-receipt flex justify-around mt-5 '>
                        <div className='flex mt-5' style={{ visibility: 'hidden' }}>
                            <button type="button"
                                className="mr-10  py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">Purple</button>
                        </div>
                        <h2 className="mt-5 text-[#70685a] text-center text-2xl font-bold flex justify-center">お客様   預かり証   印 刷確認画面</h2>
                        <div className='flex justify-center mt-5'>
                            <ButtonComponent onClick={clickConfirm} children={'印刷'} className='h-11 py-2' />
                        </div>
                    </div>
                    {/*  */}
                    <div className='customer-receipt-one flex mt-5 justify-center gap-5 w-full' >
                        <div className='flex justify-center'>
                            <div className=' text-[#70685a] text-[20px] px-2 mr-2'>
                                <div className='flex font-bold'>
                                    <div>買取計算書No.{purchaseData.numberOfInvoice || ''}</div>
                                </div>

                            </div>
                            <div className=' text-[#70685a] px-2 mr-2 pt-2'>
                                <div className='flex'>
                                    <div className='text-right font-bold'>
                                        <div>お名前</div>
                                    </div>
                                    <div className='ml-5 text-left'>
                                        <div>{customer.full_name}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                            <div className=' text-[#70685a] px-2 mr-2 pt-2'>
                                <div className='flex'>
                                    <div className='text-right font-bold '>
                                        <div>お電話番号</div>
                                    </div>
                                    <div className='ml-5 text-left'>
                                        <div>{customer.phone_number}</div>
                                    </div>
                                </div>
                            </div>
                            <div className=' text-[#70685a] mr-2 w-[250px]'>
                                <DateAndTime />
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className='customer-receipt-three flex '>
                        <div className='customer-receipt-four mt-5' style={{ width: '25%' }}>
                            <div className='flex justify-center text-[#70685a] ml-5'>
                                <div className='flex jsutify-center'>
                                    <div className='text-right font-bold'>
                                        <div>店舗名</div>
                                    </div>
                                    <div className='ml-5 text-left'>
                                        <div>{purchaseData.totalSalesSlipData?.lenght >0 && purchaseData.totalSalesSlipData[0].store_name || 'OOO'}</div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center text-[#70685a] ml-5'>
                                <div className='flex jsutify-center'>
                                    <div className='text-right font-bold'>
                                        <div>担当</div>
                                    </div>
                                    <div className='ml-5 text-left'>
                                        <div>OOOO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='customer-receipt-deadline mt-5' style={{ width: '50%' }}>
                            <div className='flex justify-center text-[#70685a] text-[20px] font-bold' >
                                <div className='text-[#70685a]'>下記商品を、{year||''}年{month||''}月{day||''}日までお預かり致します</div>
                            </div>
                        </div>
                        <div className='customer-receipt-two mt-5' style={{ width: '25%' }}>
                            <div className='flex'>
                                <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="timeline" type="text" value={timeline || ''} required className="w-40 h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                                </div>
                                <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                    <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                        <div style={{ position: 'relative' }}>
                                            <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                            <input type="date" name="timeline" onChange={handleDateChange} style={{ position: 'absolute', left: '0', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  Tabe*/}
                    <div className=' pb-20 flex justify-center mt-10' >
                        <div className='customer-receipt-one' style={{ width: '40%' }}>
                            <table className='text-center w-full' style={Table}>
                                <thead>
                                    <tr>
                                        <th ></th>
                                        <th style={Th} width='70%'>商品名</th>
                                        <th style={Th}>個数</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {purchaseData.totalSalesSlipData?.length >0 && purchaseData.totalSalesSlipData.map((data,Index)=>(
                                        <tr key={Index}>
                                            <td>{Index+1}.</td>
                                            <td style={Td}>{data.product_name}</td>
                                            <td style={Td}>{data.quantity}</td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                            <div className='flex justify-end font-bold text-[#70685a]'>
                                {totalQuantity}点
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerReceipt;