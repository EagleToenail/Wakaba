import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css'
import '../../Assets/css/firstTd.css'
import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import dateimage from '../../Assets/img/datepicker.png';
import DateAndTime from '../../Components/Common/PickData';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { setData } from '../../redux/sales/actions';

const InvoicePurchaseOfBrought = () => {
    // const title = 'タイトルタイトル';

    const [deadline, setDeadline] = useState('');

    const handleDateChange = (event) => {
        setDeadline(event.target.value); // Update the date state with the selected date

    };

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
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
        whiteSpace: 'nowrap'
    };

    const [customerPastVisitHistory, setCustomerPastVisitHistory] = useState([{
        visit_date: '',
        applicable: '',
        total_amount: '',
        category: '',
        product_name: '',
        total_sales: '',
        total_gross_profit: '',
        total_purchase_price: ''
    }]);

    const navigate = useNavigate();

    // Fetch customer data
    const { id } = useParams();

    // Fetch customerPastVisitHistory data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        if (id) {
            axios.get(`${wakabaBaseUrl}/customer/customerpastvisithistory/${id}`)
                .then(response => {
                    setCustomerPastVisitHistory(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }

    }, []);

    const [customer, setCustomer] = useState({
        id: '',
        full_name: '',
        katakana_name: '',
        phone_number: '',
        address: '',
        shop: '',
        opportunity: '',
        birthday: '',
        age: '',
        job: '',
        idCard_url: '',
        cardType: '',
        avatar_url: '',
        prefeature: '',
        city: '',
        gender: '',
    });
//fetch customer data
    useEffect(() => {

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        if (id) {
            axios.get(`${wakabaBaseUrl}/customer/getCustomerById/${id}`)
                .then(response => {
                    console.log("data", response.data)
                    setCustomer(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }

    }, [id]);
//fetch user(profile) data

    const userId = localStorage.getItem('userId');
    const [userData, setUserData] = useState([]);
    useEffect(() => {

    const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

    if (!wakabaBaseUrl) {
        throw new Error('API base URL is not defined');
    }

    axios.post(`${wakabaBaseUrl}/profile/getProfileById`, { userId })
        .then(response => {
        const user = response.data;
        // console.log('user profile',user)
        setUserData(response.data);
        if (!response.data) {
            navigate('/');
        }
        })
        .catch(error => {
        console.error("There was an error fetching the customer data!", error);
        });
    }, [userId]);
//fetch salesSlipData
    const [salesSlipData, setSalesSlipData] = useState({
        trading_date: '',
        purchase_staff: '',
        customer_id: '',
        visit_type: '',
        brand_type: '',
        store_name: '',
        product_type_one: '',
        product_type_two: '',
        product: '',
        quantity: '',
        metal_type: '',
        price_per_gram: '',
        purchase_price: '',
        sales_amount: '',
        shipping_cost: '',
        wholesale_buyer: '',
        wholesale_date: '',
        payment_date: ''
    });
    //total data:
    const [totalSalesSlipData, setTotalSalesSlipData] = useState([]);

    const handleChange = (e) => {
        setSalesSlipData({
            ...salesSlipData,
            [e.target.name]: e.target.value,
        });

    };

    const [product1, setProduct1] = useState([]);
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.get(`${wakabaBaseUrl}/ProductType1s`)
            .then(response => {
                setProduct1(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);
    const [product2, setProduct2] = useState([]);
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.get(`${wakabaBaseUrl}/ProductType2s`)
            .then(response => {
                setProduct2(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);

    const addSlesItem = () => {
        setSalesSlipData({trading_date:new Date().toISOString().split('T')[0], purchase_staff:userData.username, store_name:userData.store_name, customer_id:id});
        setTotalSalesSlipData((prevSalesSlipDatas) => [...prevSalesSlipDatas, { ...salesSlipData, id: Date.now(),customer_id:id }]);
        setSalesSlipData({
            trading_date:salesSlipData.trading_date,
            purchase_staff:salesSlipData.purchase_staff,
            customer_id:salesSlipData.customer_id,
            visit_type:salesSlipData.visit_type,
            brand_type:salesSlipData.brand_type,
            store_name:salesSlipData.store_name,
            product_type_one:salesSlipData.product_type_one,
            product_type_two:salesSlipData.product_type_two,
            product:salesSlipData.product,
            quantity:salesSlipData.quantity,
            metal_type:salesSlipData.metal_type,
            price_per_gram:salesSlipData.price_per_gram,
            purchase_price:salesSlipData.purchase_price,
            // sales_amount:'',
            // shipping_cost:'',
            // wholesale_buyer:'',
            // wholesale_date:'',
            // payment_date:''
        });
    }
    //delete one of tatalsaleSlipdata
    const removeSalesItem = (index) => {
        setTotalSalesSlipData(totalSalesSlipData.filter((_, i) => i !== index));
      };

    const dispatch = useDispatch();

    const updateData = (data) => {
    dispatch(setData(data));
    };
    // send data
    const sendPurchaseDataToReceipt = () => {
        const numberOfInvoice = customerPastVisitHistory.length;
        const purchaseData = {deadline,numberOfInvoice,totalSalesSlipData};
        // console.log('send purchase data',purchaseData,id);
        updateData(purchaseData);
        navigate('/customerreceipt');
       
    }
    const sendPurchaseData = () => {
        const numberOfInvoice = customerPastVisitHistory.length;
        const purchaseData = {deadline,numberOfInvoice,totalSalesSlipData};
        // console.log('send purchase data',purchaseData,id);
        updateData(purchaseData);
        navigate('/purchaseinvoiceforbroughtinitems');
       
    }

    return (<>
        {/* <Titlebar title={title} /> */}
        <div className="bg-[trasparent] font-[sans-serif] w-full">
            <div className='flex justify-center w-full'>
                <div className="w-full pt-3">
                    <DateAndTime />
                    <div className="w-full pt-3 flex justify-between" >
                        {/* new */}
                        <div style={{ width: '25%', }} className='flex align-center justify-center'>
                            <div className='flex flex-col justify-center'>
                                <div className='w-3 h-3 bg-[#70685a]'></div>
                            </div>
                            <div className='flex flex-col justify-center ml-2'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 !mb-0 flex">買取計算書No.{customerPastVisitHistory.length}</label>
                            </div>

                        </div>
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center !mt-0">持ち込み商品 買取計算書 (承諾申請画面)</h2>
                        {/* new */}

                        <div style={{ width: '15%', visibility: 'hidden' }} className='flex align-center justify-center'>
                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 !mb-0">asdTWO</label>
                        </div>

                    </div>
                    <div className='flex w-full'>
                        <div className='w-full mt-10 '>
                            <div className='invoice-purchase-brought flex justify-between'>
                                <div className='flex justify-center'>
                                    <div className='flex'>
                                        <label className="text-[#70685a] text-[15px] text-left mr-5 nowrap">期限</label>
                                        <div className='flex'>
                                            <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <input name="deadline" type="text" value={deadline} required className="w-40 h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                                            </div>
                                            <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                                <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                                    <div style={{ position: 'relative' }}>
                                                        <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                                        <input type="date" id="deadline" name="deadline" value={''} onChange={handleDateChange} style={{ position: 'absolute', left: '0', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <label className="text-[#70685a] flex flex-col justify-center font-bold text-left ml-5">で</label>
                                    </div>
                                </div>
                                <div className='invoice-purchase-brought-buttons w-[50%] flex justify-around pr-10'>
                                    <ButtonComponent children="預り証発行" onClick={sendPurchaseDataToReceipt} className='w-max h-11 !px-5' style={{ border: '1px solid #e87a00', backgroundColor: 'transparent', color: '#e87a00' }} />
                                    <ButtonComponent children="全体撮影" className='w-max h-11 !px-5' style={{ border: '1px solid #e87a00', backgroundColor: 'transparent', color: '#e87a00' }} />
                                    <ButtonComponent children="紙書類撮影" className='w-max h-11 !px-5' style={{ border: '1px solid #e87a00', backgroundColor: 'transparent', color: '#e87a00' }} />
                                </div>
                                <div className='invoice-purchase-brought-buttons w-[50%] ml-5 flex justify-between'>
                                    <ButtonComponent children="許可申請" className='w-max h-11 !px-5' style={{ color: 'white', }} />
                                    <ButtonComponent children="全て決済を許可" className='w-max h-11 !px-5' style={{ backgroundColor: '#9bd195', color: 'white', }} />
                                    <div>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right  !mb-0">支払担当 OOOO</label>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right  !mb-0">接客担当 OOOO</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="invoice-purchase-brought flex  justify-center ">
                <div className="w-full pt-3 flex justify-center" >
                    <div className=" rounded-2xl">
                        <form className=" space-y-6">
                            {/* new */}
                            <div className='flex pt-2'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='!mb-0 flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">顧客番号</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-right mr-10 py-2 !mb-0">{customer.id}</label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-3 !mb-0">VIP</label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">お名前</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">{customer.full_name}</label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-3 !mb-0">{customer.gender}</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">カタカナ名</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">{customer.katakana_name}</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">お電話番号</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">{customer.phone_number}</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-11 py-1 !mb-0">生年月日</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">{customer.birthday}</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">ご住所</label>
                                </div>
                                <div style={{ width: '75%', }} className='flex justify-end'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">{customer.address}</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">e-mail</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">test@gmail.com</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">ご職業</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">{customer.job}</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">本人確認書類</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">マイナンバーカ一ド</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">特記事項</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">盗品持ち込みの可能性があるため要注意</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* textarea*/}
                <div className="w-full h-full mt-9 flex justify-center">
                    <div className='w-full'>
                        {/* textarea First*/}
                        <div className='w-full flex justify-center'>
                            <div className=" h-full w-full">
                                {/* Text area */}
                                <div className="border border-[#70685a] rounded px-3 w-full" style={{ height: '300px', overflowX: 'scroll', overflowY: 'scroll' }}>
                                    <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-10 py-1 !mb-0">過去の来店履歴</label>
                                    <div style={{ width: '100%', overflow: 'auto' }} >
                                        <table className='text-center w-full' style={Table}>
                                            <thead>
                                                <tr>
                                                    <th className='whitespace-nowrap text-eclipse' width='5%'>来店回数 </th>
                                                    <th className='whitespace-nowrap' width='5%'></th>
                                                    <th className='whitespace-nowrap' width='5%'></th>
                                                    <th className='whitespace-nowrap' width='5%'></th>
                                                    <th className='whitespace-nowrap' width='5%'></th>
                                                    <th className='whitespace-nowrap' width='10%'>合計</th>
                                                    <th className='whitespace-nowrap' width='5%'>99,999,999</th>
                                                    <th className='whitespace-nowrap' width='5%'>99,999,999</th>
                                                    <th className='whitespace-nowrap' width='5%'>99,999,999</th>
                                                </tr>
                                                <tr>
                                                    <th className='whitespace-nowrap' width='5%'>999</th>
                                                    <th className='whitespace-nowrap' width='5%'>来店日</th>
                                                    <th className='whitespace-nowrap' width='5%'>適用</th>
                                                    <th className='whitespace-nowrap' width='5%'>合計金額</th>
                                                    <th className='whitespace-nowrap' width='5%'>カテゴリ-1</th>
                                                    <th className='whitespace-nowrap' width='5%'>商品名</th>
                                                    <th className='whitespace-nowrap' width='5%'>売上総額</th>
                                                    <th className='whitespace-nowrap' width='5%'>粗利総額</th>
                                                    <th className='whitespace-nowrap' width='5%'>買取総額</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {customerPastVisitHistory.map((pastVisit, Index) => (
                                                    <tr key={Index}>
                                                        <td>
                                                            <div className='flex justify-center'>
                                                                <div>{Index + 1}.</div>
                                                                <div>
                                                                    <svg className="w-5 h-5 ml-1" fill='#70685a' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon" title="ContentCopy">
                                                                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td style={Td}>{pastVisit.visit_date}</td>
                                                        <td style={Td}>{pastVisit.applicable}</td>
                                                        <td style={Td}>{pastVisit.total_amount}</td>
                                                        <td style={Td}>{pastVisit.category}</td>
                                                        <td style={Td}>{pastVisit.product_name}</td>
                                                        <td style={Td}>{pastVisit.total_sales}</td>
                                                        <td style={Td}>{pastVisit.total_gross_profit}</td>
                                                        <td style={Td}>{pastVisit.total_purchase_price}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* textarea Second*/}
                        <div className='w-full flex justify-center'>
                            <div className=" h-full w-full mt-10">
                                {/* Text area */}
                                <div className="border border-[#70685a] rounded px-3 w-full" style={{ height: '305px', overflowX: 'scroll', overflowY: 'scroll' }}>
                                    <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-10 py-1 !mb-0">全体ヒアリング</label>
                                    <div>
                                        <div className='flex'>
                                            <label className="text-[#70685a] text-[20px] mb-2 block text-left mr-10 py-1">項目1</label>
                                            <label className="text-[#70685a] text-[20px] mb-2 block text-left mr-10 py-1 !mb-0">O O O O O O O O</label>
                                        </div>
                                        <div className='ml-20'>
                                            <InputComponent className="w-full text-[#70685a] text-[20px] mb-2 block text-left  mr-10 py-1 !mb-0" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex'>
                                            <label className="text-[#70685a] text-[20px] mb-2 block text-left mr-10 py-1">項目2</label>
                                            <label className="text-[#70685a] text-[20px] mb-2 block text-left mr-10 py-1 !mb-0">O O O O O O O O</label>
                                        </div>
                                        <div className='border border-[#70685a] ml-20'>
                                            <InputComponent className="w-full text-[#70685a] text-[20px] mb-2 block text-left  mr-10 py-1 !mb-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* table */}
            {/* <div className="flex justify-center mt-10">
                <div style={{width:'100%',overflow:'auto'}}>
                    <table className='text-center w-full' style={Table}>
                        <thead>
                            <tr>
                                <th style={Th} width='1%'>選</th>
                                <th style={Th}  width='2%'>商品番号</th>
                                <th style={Th} >ヒアリング</th>
                                <th style={Th} >力テゴリ-1</th>
                                <th style={Th} >画像</th>
                                <th style={Th}  width='10%'>商品名</th>
                                <th style={Th} >個数</th>
                                <th style={Th}  width='10%'>申請の根拠</th>
                                <th style={Th} >利率</th>
                                <th style={Th} >申請額</th>
                                <th style={Th} >最高査定額</th>
                                <th style={Th} >業者</th>
                                <th style={Th} >承諾</th>
                                <th style={Th} >上司指示額</th>
                                <th style={Th} >結果</th>
                                <th style={Th} >買取額</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type='checkbox'/></td>
                                <td style={Td}>99999</td>
                                <td  style={Td}>
                                    <select id="classificatin3" name="classificatin" className="w-full h-full text-[#70685a] font-bold py-2 outline-[#70685a]">
                                        <option value="1">済</option>
                                        <option value="2"></option>
                                        <option value="3">Åland Islands</option>
                                        <option value="4">Albania</option>
                                    </select>
                                </td>
                                <td  style={Td}>
                                <select id="classificatin3" name="classificatin" className="w-full h-full text-[#70685a] font-bold  py-2 outline-[#70685a]">
                                        <option value="1">済</option>
                                        <option value="2"></option>
                                        <option value="3">Åland Islands</option>
                                        <option value="4">Albania</option>
                                    </select>
                                </td>
                                <td  style={Td}>
                                <ButtonComponent children="1" className='w-max !px-5 rounded-lg' style={{  backgroundColor: '#ebe5e1', color: '#626373'}} />
                                </td>
                                <td  style={Td}>
                                    <div className='flex'>
                                        <div className='w-5 h-5 rounded-full bg-[] mr-3'></div>
                                        <div>グッチOOOOOOO</div>
                                    </div>
                                </td>
                                <td  style={Td}>1</td>
                                <td  style={Td}>OOOOOOO</td>
                                <td  style={Td}>100</td>
                                <td  style={Td}>100</td>
                                <td  style={Td}>1</td>
                                <td  style={Td}>
                                        1
                                </td>
                                <td  style={Td}>
                                <select id="classificatin3" name="classificatin" className="w-full h-full text-[#70685a] font-bold  py-2 outline-[#70685a]">
                                        <option value="1">済</option>
                                        <option value="2"></option>
                                        <option value="3">Åland Islands</option>
                                        <option value="4">Albania</option>
                                    </select>
                                </td>
                                <td  style={Td}>
                                </td>
                                <td  style={Td}>
                                <select id="classificatin3" name="classificatin" className="w-full h-full text-[#70685a] font-bold  py-2 outline-[#70685a]">
                                        <option value="1">済</option>
                                        <option value="2"></option>
                                        <option value="3">Åland Islands</option>
                                        <option value="4">Albania</option>
                                    </select>
                                </td>
                                <td  style={Td}>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div> */}
            {/* sales table */}
            <div className='mt-5 pb-20 w-full flex justify-center'>
                <div className='w-full flex justify-center overflow-auto pl-10'>
                    <table className='text-center w-full' style={Table}>
                        <thead>
                            <tr>
                                <th style={Th}>ID</th>
                                <th style={Th}>商品種別1</th>
                                <th style={Th}>商品種別2</th>
                                <th style={Th}>商品</th>
                                <th style={Th}>数</th>
                                <th style={Th}>買取額</th>
                                <th style={Th}>削除</th>
                            </tr>
                        </thead>
                        <tbody>
                            {totalSalesSlipData.map((salesData, Index) => (
                                <tr key={Index} >
                                    <td style={Td}>{Index + 1}</td>
                                    <td style={Td} >{salesData.product_type_one}</td>
                                    <td style={Td}>{salesData.product_type_two}</td>
                                    <td style={Td}>{salesData.product}</td>
                                    <td style={Td}> {salesData.quantity} </td>
                                    <td style={Td}>{salesData.purchase_price}</td>
                                    <td style={Td} className='w-8 bg-transparent hover:bg-[#ebe6e0] transition-all duration-300'>
                                        <div onClick={() => removeSalesItem(Index)} className='w-7'>
                                            <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* new */}
            <div className='flex mt-5'>
                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">商品種別1 </label>
                </div>
                <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                    <select id="product_type_one" name="product_type_one" onChange={handleChange} value={salesSlipData.product_type_one || ''} required className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                        <option value="" ></option>
                        {product1.map((product, Index) => (
                            <option key={Index} value={product.category}>{product.category}</option>
                        ))}
                    </select>
                </div>
            </div>
            {/* new */}
            <div className='flex mt-5 '>
                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">商品種別2</label>
                </div>
                <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                    <select id="product_type_two" name="product_type_two" onChange={handleChange} value={salesSlipData.product_type_two || ''} required className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                        <option value="" ></option>
                        {product2.map((product, Index) => (
                            <option key={Index} value={product.category}>{product.category}</option>
                        ))}
                    </select>
                </div>
            </div>
            {/* new */}
            <div className='flex mt-5'>
                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">買取額</label>
                </div>
                <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                    <input name="purchase_price" onChange={handleChange} value={salesSlipData.purchase_price || ''} required type="number" className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                </div>
            </div>
            {(salesSlipData.product_type_one === "貴金属") && (
                <div>
                    <div className='flex mt-5'>
                        <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">金種</label>
                        </div>
                        <div style={{ width: '45%', flexDirection: 'column', }} className='flex align-center justify-around'>
                            <input name="metal_type" onChange={handleChange} value={salesSlipData.metal_type || ''} type="text" className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                        </div>
                        <div style={{ width: '25%', flexDirection: 'column', }} className='ml-5'>
                            <label className="text-[#70685a] font-bold mb-2 block text-left ml-10 py-1 !mb-0">*(貴金属)</label>
                        </div>
                    </div>

                    <div className='flex mt-5'>
                        <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">g/額面</label>
                        </div>
                        <div style={{ width: '45%', flexDirection: 'column', }} className='flex align-center justify-around'>
                            <input name="price_per_gram" onChange={handleChange} value={salesSlipData.price_per_gram || ''} type="number" className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                        </div>
                        <div style={{ width: '25%', flexDirection: 'column', }} className='ml-5'>
                            <label className="text-[#70685a] font-bold mb-2 block text-left ml-10 py-1 !mb-0">*(貴金属)</label>
                        </div>
                    </div>
                </div>
            )}
            {/* new */}
            <div className='flex mt-5'>
                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">商品</label>
                </div>
                <div style={{ width: '60%', flexDirection: 'column', }} className='flex align-center justify-around'>
                    <input name="product" onChange={handleChange} value={salesSlipData.product || ''} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                </div>
            </div>
            {/* new */}
            <div className='flex mt-5'>
                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">数</label>
                </div>
                <div style={{ width: '35%', flexDirection: 'column', }} className='flex align-center justify-around'>
                    <input name="quantity" onChange={handleChange} value={salesSlipData.quantity || ''} type="number" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                </div>
                <div style={{ width: '35%' }} className='flex justify-center'>
                    <button type="button" onClick={addSlesItem} className="w-[150px] !px-3 h-11 font-bold text-[white] border border-[#70685a] tracking-wide rounded-lg justify-center t bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                        アイテム追加
                    </button>
                </div>
            </div>
            {/* result */}
            <div className="flex justify-center">
                <div className='w-full pt-3 pb-20' style={{ maxWidth: '80em' }}>
                    <div className='flex flex-col justify-center pt-3 w-full'>
                        <div className='invoice-purchase-brought flex justify-center pt-3 '>
                            <div className='invoice-purchase-brought-one flex justify-center w-[50%]'>
                                <input type='checkbox' className='mr-3' />
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-10 pt-2" >LINEお友達登録したか？</label>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5 pt-2" >ノベルティーを何を渡したか？</label>
                            </div>
                            <div className='invoice-purchase-brought-one flex justify-center w-[40%]'>
                                <select id="classificatin3" name="classificatin" className="w-40 h-11 mr-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                    <option value="1">ティッシュボックス</option>
                                    <option value="2">Afghanistan</option>
                                    <option value="3">Åland Islands</option>
                                    <option value="4">Albania</option>
                                </select>
                                <InputComponent className='w-20 h-11 ' />
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 pt-2 ml-5" >To</label>
                                <button type="button"
                                    className="!w-10 h-10 ml-5 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                        <path
                                            d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                            data-original="#000000" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='invoice-purchase-brought flex justify-center pt-3'>
                        <div className='invoice-purchase-brought-one flex justify-center w-[50%]'>
                            <input type='checkbox' className='mr-3' />
                            <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-10 pt-2" >Google口コミしたか？</label>
                            <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5 pt-2" >ク一ポンのご利用はあったか？</label>
                        </div>
                        <div className='invoice-purchase-brought-one flex justify-center w-[40%]'>
                            <select id="classificatin3" name="classificatin" className="w-40 h-11 mr-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                <option value="1">なし</option>
                                <option value="2">Afghanistan</option>
                                <option value="3">Åland Islands</option>
                                <option value="4">Albania</option>
                            </select>
                            <InputComponent className='w-20 h-11' />
                            <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 pt-2 ml-5" >To</label>
                            <button style={{ visibility: 'hidden' }} type="button"
                                className="!w-10 h-10 ml-5 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                    <path
                                        d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                        data-original="#000000" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-center pt-10'>
                        <button type="button" onClick={sendPurchaseData}
                            className="mr-10  py-1 min-w-[160px] text-[#e87a00] text-[20px] rounded-full tracking-wider font-bold outline-none border border-[2px] border-[#e87a00] ">お客様へ提示</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default InvoicePurchaseOfBrought;