import React , {useState,useEffect,useRef} from 'react';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css';
import axios from 'axios';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import DateAndTime from '../../Components/Common/PickData';
import { useSelector } from 'react-redux';


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

    const data = useSelector(state => state.data);
    const purchaseData = data.data;

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        const customerId = purchaseData.totalSalesSlipData[0].customer_id;
        // console.log('redux data', customerId)
        if(customerId !== '' && customerId !==null){
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }

            // console.log(`${wakabaBaseUrl}/customer/getCustomerById`);
            axios.get(`${wakabaBaseUrl}/customer/getCustomerById/${customerId}`)
                .then(response => {
                    setCustomer(response.data);
                    // console.log('customerdata',response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
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

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '90em' }}>
                    <div className='customer-receipt flex justify-around mt-5 '>
                        <div className='flex mt-5' style={{ visibility: 'hidden' }}>
                            <button type="button"
                                className="mr-10  py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">Purple</button>
                        </div>
                        <h2 className="mt-5 text-[#70685a] text-center text-2xl font-bold flex justify-center">お客様   預かり証   印 刷確認画面</h2>
                        <div className='flex justify-center mt-5'>
                            <ButtonComponent children={'印刷'} className='h-11 py-2' />
                        </div>
                    </div>
                    {/*  */}
                    <div className='customer-receipt-one flex mt-5 justify-center gap-5 w-full' >
                        <div className='flex justify-center'>
                            <div className=' text-[#70685a] text-[20px] px-2 mr-2'>
                                <div className='flex font-bold'>
                                    <div>買取計算書No.{purchaseData.numberOfInvoice}</div>
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
                    <div className='customer-receipt-three flex'>
                        <div className='customer-receipt-four' style={{ width: '25%' }}>
                            <div className='flex justify-center text-[#70685a] ml-5'>
                                <div className='flex jsutify-center'>
                                    <div className='text-right font-bold'>
                                        <div>店舗名</div>
                                    </div>
                                    <div className='ml-5 text-left'>
                                        <div>{purchaseData.totalSalesSlipData[0].store_name}</div>
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
                        <div className='customer-receipt-deadline' style={{ width: '50%' }}>
                            <div className='flex justify-center pt-3 text-[#70685a] text-[20px] font-bold' >
                                <div className='text-[#70685a]'>下記商品を、令和99年12月30日までお預かり致します</div>
                            </div>
                        </div>
                        <div className='customer-receipt-two' style={{ width: '25%' }}></div>
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
                                    {purchaseData.totalSalesSlipData.map((data,Index)=>(
                                        <tr key={Index}>
                                            <td>{Index+1}.</td>
                                            <td style={Td}>{data.product}</td>
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