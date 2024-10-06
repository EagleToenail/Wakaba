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

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />
            {/* title */}
            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">購入の請求書</h2>

            {/* third line */}
            <div className='flex justify-center' >
                <div className='flex justify-center' >
                    <div className='flex justify-center mt-5 w-full' >
                        <div className='flex gap-20'>
                            <ButtonComponent  children={'古い顧客'} onClick={gotoCustomer} className='!bg-[#9bd195] text-[#fff] h-11 rounded-lg' />
                            <ButtonComponent  children={'新しい顧客'} onClick={gotoRegisterCustomer} className='!bg-[#a3a1c8] text-[#fff] h-11 rounded-lg' />
                        </div>
                    </div>
                </div>
            </div>

            {/*  Tabe*/}
            <div className='mt-10 pb-20 w-full flex justify-center' >
                <div style={{ overflow: 'auto',maxWidth:'50em' }} className='w-full'>
                    <table style={Table}>
                        <thead className='sticky top-0 bg-white z-10'>
                            <tr>
                                <th style={Th} width='5%'>ID</th>
                                <th style={Th} width='5%' >買取日</th>
                                <th style={Th} width='5%'>買取担当</th>
                                <th style={Th} width='5%'>お客様</th>   
                            </tr>

                        </thead>
                        <tbody>
                            {(purchaseInvoice && purchaseInvoice.length !==0) && purchaseInvoice.map((data,Index) => (
                                <tr key={Index}>
                                    <td style={Td}>{data.invoice_ids}</td>
                                    <td style={Td}>{data.trading_date}</td>
                                    <td style={Td}>{data.purchase_staff}</td>
                                    <td style={Td}>{data.Customer ? data.Customer.full_name : 'Name not available'}</td>
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