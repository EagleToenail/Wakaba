import {React ,useState,useEffect} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import DateAndTime from '../../Components/Common/PickData';
import dateimage from '../../Assets/img/datepicker.png';

import axios from 'axios';

// THIS PAGE SHOULD HAVE A VERTICAL SCROLL BAR


const InvoiceForPurchaseList = () => {
    // const title = 'タイトルタイトル';
    const navigate = useNavigate();
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

    const userStoreName = localStorage.getItem('storename');
    const userId = localStorage.getItem('userId');

    const [purchaseInvoice, setPurchaseInvoice] = useState([]);
    // Fetch sales data
    useEffect( () => {
        const fetchInvoiceList = async() => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.post(`${wakabaBaseUrl}/purchaseinvoice/getinvoicelist`,{userId:userId,userStoreName:userStoreName})
                .then(response => {
                    // console.log(response.data)
                    setPurchaseInvoice(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }
        fetchInvoiceList();
    }, []);

    //no new customer
    const gotoCustomer = () => {
            navigate('/customerlist')
    }
    //new customer
    const gotoRegisterCustomer =()=> {
        navigate('/invoiceforpurchaseofbroughtblank');
    }

    //goto invoice for purchase detail page
    const gotoInvoiceForPurchaseDetail = (id) => {
        navigate(`/invoiceforpurchasedetail/${id}`)
    }

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />
            {/* title */}
            {/* <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">購入の請求書</h2> */}

            {/* third line */}
            <div className='flex justify-center' >
                <div className='flex justify-center' >
                    <div className='flex justify-center mt-2 w-full' >
                        <div className='flex gap-20'>
                            <ButtonComponent  children={'古い顧客'} onClick={gotoCustomer} className='!bg-[#9bd195] text-[#fff] h-11 rounded-lg' />
                            <ButtonComponent  children={'新しい顧客'} onClick={gotoRegisterCustomer} className='!bg-[#a3a1c8] text-[#fff] h-11 rounded-lg' />
                        </div>
                    </div>
                </div>
            </div>

            {/*  Tabe*/}
            <div className='mt-3 pb-20 w-full flex justify-center' >
                <div style={{ overflow: 'auto',maxWidth:'50em' }} className='w-full'>
                    <table style={Table}>
                        <thead className='sticky top-0 bg-white z-10'>
                            <tr>
                                <th style={Th} width='5%'>NO</th>
                                <th style={Th} width='5%'>買取計算書</th>
                                <th style={Th} width='5%' >買取日</th>
                                <th style={Th} width='5%'>買取担当</th>
                                <th style={Th} width='5%'>お客様</th>   
                                <th style={Th} width='5%'>ステータス</th>   
                                <th width='1%'></th>   
                            </tr>

                        </thead>
                        <tbody>
                            {(purchaseInvoice && purchaseInvoice.length !==0) && purchaseInvoice.map((data,Index) => (
                                <tr key={Index}>
                                    <td style={Td}>{Index + 1}</td>
                                    <td style={Td}>{data.invoiceID}</td>
                                    <td style={Td}>{data.trading_date}</td>
                                    <td style={Td}>{data.purchase_staff}</td>
                                    <td style={Td}>{data.Customer ? data.Customer.full_name : ''}</td>
                                    {data.product_status === '査定中' && 
                                        <td style={Td}>下書き</td>
                                    }
                                    {data.product_status === 'お預かり' && 
                                        <td style={Td}>下書き</td>
                                    }
                                    {data.product_status === '承認待ち' && 
                                        <td style={Td} className='bg-[yellow]'>承認待ち</td>
                                    }
                                    {
                                        (data.product_status !== '査定中' && data.product_status !== 'お預かり' && data.product_status !== '承認待ち') && (
                                            <td style={Td} className='bg-[#9bd195]'>承認済み</td>
                                        )
                                    }
                                    <td>
                                        <div className='flex justify-center'>
                                            <button className='w-7  h-7 ml-3 mb-1' onClick={()=>gotoInvoiceForPurchaseDetail(data.id)}>
                                                <svg className=" " fill='#70685a' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon" title="ContentCopy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"></path></svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
};

export default InvoiceForPurchaseList;