import React, { useState, useEffect,useRef } from 'react';
import { Link, useNavigate, useParams ,useLocation} from 'react-router-dom';
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

import leftArrow from '../../Assets/img/right-arrow.png';
import rightArrow from '../../Assets/img/left-arrow.png';

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
        whiteSpace: 'nowrap',
        paddingLeft:'10px',
        paddingRight:'10px'
    };
    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
        whiteSpace: 'nowrap',
        height:'30px'
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
        email:'',
        idCard_url: '',
        cardType: '',
        avatar_url: '',
        prefeature: '',
        city: '',
        gender: '',
        item1:'',
        item2:'',
        item3:'',
        line_friend:'',
        google_review:'',
        novelty_item:'',
        novelty_item_number:'',
        cupon_item:'',
        cupon_item_number:'',
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

    const handleCustomerChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value,
        });
    };
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
        number:'',
        purchase_staff: '',
        customer_id:'',
        store_name:'',
        hearing:'',
        product_type_one: '',
        product_type_two: '',
        product_type_three: '',
        product_type_four: '',

        product_photo:'',
        product_name: '',
        quantity: '',
        reason_application:'',
        interest_rate:'',
        product_price:'',
        highest_estimate_vendor:'',
        highest_estimate_price:'',
        number_of_vendor:'',
        supervisor_direction:'',
        purchase_result:'',

        purchase_price: '',

        本査定ネットジャパン: '',
        LINE色石バンク: '',
        本査定色石バンク: '',
        LINEフォーナイン: '',
        本査定フォーナイン: '',
        カイマナ査定日: '',
        LINEカイマナ: '',
        本査定カイマナ: '',
        LINE査定日相場: '',
        ワタル商事: '',
        近江屋: '',
        ヤフオク: '',//yahoo auction
        BB: '',
        GA: '',
        ベルモンド: '',
        ホームコム: '',
        カイマナ: '',
        フォーナイン: '',
        ひるねこ: '',
        アート: '',
        吉岡美術: '',
        刀剣佐藤: '',
        ゴールドリカー: '',
        リンクサス: '',
        管弦屋: '',
        はなもり: '',
        バステック: '',

    });
    //total data:
    const [totalSalesSlipData, setTotalSalesSlipData] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);

    const handleChange = (e) => {
        setSalesSlipData({
            ...salesSlipData,
            [e.target.name]: e.target.value,
        });
        if(e.target.name == 'product_type_one') {
            getVendorList(e.target.value);
        }
    };
    // search selectbox product1================

    const [product1s, setProduct1s] = useState([]);
    // Fetch product1 data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.get(`${wakabaBaseUrl}/ProductType1s`)
            .then(response => {
                setProduct1s(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);

    //get  vendor list form vendor table
    const [vendors , setVendors] = useState([]);
    const [allVendors , setAllVendors] = useState([]);

    const getVendorList = async(type) => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        axios.post(`${wakabaBaseUrl}/vendor/getVendorList`,{type:type})
        .then(response => {
            setVendors(response.data);
            console.log('vendrList',response.data)
        })
        .catch(error => {
            console.error("There was an error fetching the customer data!", error);
        });
    }

    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        axios.get(`${wakabaBaseUrl}/vendor/getVendorListAll`)
        .then(response => {
            setAllVendors(response.data);
            console.log('vendrListAll',response.data)
        })
        .catch(error => {
            console.error("There was an error fetching the customer data!", error);
        });
    }, []);
    // search selectbox product3================

    const [product3s, setProduct3s] = useState([]);
    // Fetch product1 data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.get(`${wakabaBaseUrl}/ProductType3s`)
            .then(response => {
                setProduct3s(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);
    // Filter the options based on the query
    // search selectbox product2================

    const [product4s, setProduct4s] = useState([]);
    // Fetch product1 data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.get(`${wakabaBaseUrl}/ProductType4s`)
            .then(response => {
                setProduct4s(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);
    // Filter the options based on the query
    // search selectbox product2================

    const [product2s, setProduct2s] = useState([]);
    // Fetch product1 data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.get(`${wakabaBaseUrl}/ProductType2s`)
            .then(response => {
                setProduct2s(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);
    // Filter the options based on the query


    const [showInputPurchase , setShowInputPurchase] = useState(false);
    const addSlesItem = () => {

        if(showInputPurchase){
            console.log('purchase data',salesSlipData);
            // setSalesSlipData({trading_date:new Date().toISOString().split('T')[0], purchase_staff:userData.username, store_name:userData.store_name,customer_id:id});
            setTotalSalesSlipData((prevSalesSlipDatas) => [...prevSalesSlipDatas, { ...salesSlipData, id: Date.now(), trading_date:new Date().toISOString().split('T')[0], purchase_staff:userData.username, store_name:userData.store_name, customer_id:id ,product_photo:''}]);
            setSalesSlipData({
                trading_date:salesSlipData.trading_date,
                number:'',
                purchase_staff:salesSlipData.purchase_staff,
                customer_id:salesSlipData.customer_id,
                store_name:salesSlipData.store_name,
                hearing:salesSlipData.hearing,
                product_type_one:'',
                product_type_two:'',
                product_type_three:'',
                product_type_four:'',
    
                product_photo:'',
                product_name: '',
                quantity: '',
                reason_application:'',
                interest_rate:'',
                product_price:'',
                highest_estimate_vendor: '',
                highest_estimate_price: '',
                number_of_vendor: '',
                supervisor_direction: '',
                purchase_result:'',
        
                purchase_price: '',

                本査定ネットジャパン: '',
                LINE色石バンク: '',
                本査定色石バンク: '',
                LINEフォーナイン: '',
                本査定フォーナイン: '',
                カイマナ査定日: '',
                LINEカイマナ: '',
                本査定カイマナ: '',
                LINE査定日相場: '',
                ワタル商事: '',
                近江屋: '',
                ヤフオク: '',//yahoo auction
                BB: '',
                GA: '',
                ベルモンド: '',
                ホームコム: '',
                カイマナ: '',
                フォーナイン: '',
                ひるねこ: '',
                アート: '',
                吉岡美術: '',
                刀剣佐藤: '',
                ゴールドリカー: '',
                リンクサス: '',
                管弦屋: '',
                はなもり: '',
                バステック: '',
            });
            console.log('purchase data1',totalSalesSlipData);
            calculateTotalQuantity();
            console.log('ok1');
            calculateTotalPrice();
            console.log('ok2');
            setShowInputPurchase(false);
        } else{

            calculateTotalQuantity();
            calculateTotalPrice();

            setShowInputPurchase(true);
        }
        
    }
    //Edit one of tatalsalesSlipdata
    const editSalesItem = (index) => {
        setShowInputPurchase(!showInputPurchase);
        setEditIndex(index);
        setSalesSlipData(totalSalesSlipData[index]); // Populate the input fields with the selected row's data

    };
    //Save one of tatalsalesSlipdata
    const saveSalesItem = () => {
        setShowInputPurchase(!showInputPurchase);
        const updatedData = totalSalesSlipData.map((row, index) =>
            index === editIndex ? { ...row, ...salesSlipData } : row
        );
        setTotalSalesSlipData(updatedData);
        setEditIndex(-1); // Exit edit mode
        setSalesSlipData({
            trading_date: '',
            purchase_staff: '',
            customer_id:'',
            store_name:'',
            hearing:'',
            product_type_one: '',
            product_type_two: '',
            product_type_three: '',
            product_type_four: '',
    
            product_photo:'',
            product_name: '',
            quantity: '',
            reason_application:'',
            interest_rate:'',
            product_price:'',
            highest_estimate_vendor:'',
            highest_estimate_price:'',
            number_of_vendor:'',
            supervisor_direction:'',
            purchase_result:'',
    
            purchase_price: '',
    
            本査定ネットジャパン: '',
            LINE色石バンク: '',
            本査定色石バンク: '',
            LINEフォーナイン: '',
            本査定フォーナイン: '',
            カイマナ査定日: '',
            LINEカイマナ: '',
            本査定カイマナ: '',
            LINE査定日相場: '',
            ワタル商事: '',
            近江屋: '',
            ヤフオク: '',//yahoo auction
            BB: '',
            GA: '',
            ベルモンド: '',
            ホームコム: '',
            カイマナ: '',
            フォーナイン: '',
            ひるねこ: '',
            アート: '',
            吉岡美術: '',
            刀剣佐藤: '',
            ゴールドリカー: '',
            リンクサス: '',
            管弦屋: '',
            はなもり: '',
            バステック: '',
        }); // Reset editedRow state

    };
    //Cancel one of tatalsalesSlipdata
    const cancelSalesItem = () => {
        setShowInputPurchase(!showInputPurchase);
        setEditIndex(-1);
        setSalesSlipData({
            trading_date: '',
            purchase_staff: '',
            customer_id:'',
            store_name:'',
            hearing:'',
            product_type_one: '',
            product_type_two: '',
            product_type_three: '',
            product_type_four: '',
    
            product_photo:'',
            product_name: '',
            quantity: '',
            reason_application:'',
            interest_rate:'',
            product_price:'',
            highest_estimate_vendor:'',
            highest_estimate_price:'',
            number_of_vendor:'',
            supervisor_direction:'',
            purchase_result:'',
    
            purchase_price: '',
    
            本査定ネットジャパン: '',
            LINE色石バンク: '',
            本査定色石バンク: '',
            LINEフォーナイン: '',
            本査定フォーナイン: '',
            カイマナ査定日: '',
            LINEカイマナ: '',
            本査定カイマナ: '',
            LINE査定日相場: '',
            ワタル商事: '',
            近江屋: '',
            ヤフオク: '',//yahoo auction
            BB: '',
            GA: '',
            ベルモンド: '',
            ホームコム: '',
            カイマナ: '',
            フォーナイン: '',
            ひるねこ: '',
            アート: '',
            吉岡美術: '',
            刀剣佐藤: '',
            ゴールドリカー: '',
            リンクサス: '',
            管弦屋: '',
            はなもり: '',
            バステック: '',
        }); 

    };
    //delete one of tatalsaleSlipdata
    const removeSalesItem = (index) => {
        setTotalSalesSlipData(totalSalesSlipData.filter((_, i) => i !== index));

        calculateTotalQuantity();
        calculateTotalPrice();

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
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        //send customer item data
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        const customerId = customer.id;
        const item1 = customer.item1;
        const item2 = customer.item2;
        const item3 = customer.item3;
        axios.post(`${wakabaBaseUrl}/customer/customerItem`,{customerId,item1,item2,item3})
            .then(response => {
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
        //---------
        const numberOfInvoice = customerPastVisitHistory.length;

        if(totalSalesSlipData.length !=0 && totalSalesSlipData!=null){
            const purchaseData = {deadline,numberOfInvoice,totalSalesSlipData};
            console.log('send purchase data',purchaseData,id);
            updateData(purchaseData);
            navigate('/purchaseinvoiceforbroughtinitems');
        }

    }

    //   const [isOpen, setIsOpen] = useState(false);
    const [isshow, setIsShow] = useState(false);

    const openSubtable = () => {
        // setIsOpen(true);
        setIsShow(false);
    };

    const closeSubtable = () => {
        // setIsOpen(false);
        setIsShow(true);
    };
    //   const [isOpen, setIsOpen] = useState(false);
    const [isvendorshow, setIsVendorShow] = useState(false);

    const openVendortable = () => {
        // setIsOpen(true);
        setIsVendorShow(false);
    };

    const closeVendortable = () => {
        // setIsOpen(false);
        setIsVendorShow(true);
    };

    // file upload
    const [sendFile, setSendFile] = useState(null);
    const sendInputRef = useRef(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Create a URL for the file to display as a preview
            const fileURL = URL.createObjectURL(file);
        }
        setSendFile(event.target.files[0]);
        setSalesSlipData({
            ...salesSlipData,
            ['product_photo']: file,
        });
    };

    const handleButtonClick = (sendInputRef) => {
        sendInputRef.current.click();
    };
     
    const [novelty_items , setNoveltyItems] = useState([]);
    const [cupon_items , setCuponItems] = useState([]);

    const [totalQuantity, setTotalQuantity] = useState('');
    const [totalPrice, setTotalPrice] = useState('');

    // Calculate total quantity
    const calculateTotalQuantity = () => {
        const total = totalSalesSlipData.reduce((sum, item) => parseInt(sum) + (parseInt(item.quantity) || 0), 0);
        setTotalQuantity(total);
    };

    // Calculate total price
    const calculateTotalPrice = () => {
        const total = totalSalesSlipData.reduce((sum, item) => parseFloat(sum) + (parseFloat(parseFloat(item.purchase_price) * parseFloat(item.quantity)) || 0), 0);
        setTotalPrice(total);
    };

    useEffect(() => {
        calculateTotalQuantity();
        calculateTotalPrice();
    }, [totalSalesSlipData]);

    const [totalSales , setTotalSales] = useState('');
    const [totalPurchasePrice , setTotalPurchasePrice] = useState('');
    const [totalGrossProfit , setTotalGrossProfit] = useState('');
    // calculate total sales
    const calculateTotalSales = () => {
        const total = customerPastVisitHistory.reduce((sum, item) => parseInt(sum) + (parseInt(item.total_sales) || 0), 0);
        setTotalSales(total);
    };

    // Calculate total purchase price
    const calculateTotalpurchasePrice = () => {
        const total = customerPastVisitHistory.reduce((sum, item) => parseInt(sum) + (parseInt(item.total_purchase_price) || 0), 0);
        setTotalPurchasePrice(total);
    };

    // Calculate total purchase price
    const calculateTotalGrossProfit = () => {
        const total = customerPastVisitHistory.reduce((sum, item) => parseInt(sum) + (parseInt(item.total_gross_profit) || 0), 0);
        setTotalGrossProfit(total);
    };

    useEffect(() => {
        calculateTotalSales();
        calculateTotalpurchasePrice();
        calculateTotalGrossProfit();
    }, [customerPastVisitHistory]);

    //click all clear button
    const allClear = ()=> {
        setTotalSalesSlipData([]);
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
                                                <input name="deadlinevalue" type="text" value={deadline || ''} required className="w-40 h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                                            </div>
                                            <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                                <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                                    <div style={{ position: 'relative' }}>
                                                        <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                                        <input type="date" name="deadline" onChange={handleDateChange} style={{ position: 'absolute', left: '0', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
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
                        <form className=" space-y-3">
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
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">{customer.email}</label>
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
                                    {  customerPastVisitHistory.length !== 0?
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
                                                    <th className='whitespace-nowrap' width='5%'>{totalSales}</th>
                                                    <th className='whitespace-nowrap' width='5%'>{totalGrossProfit}</th>
                                                    <th className='whitespace-nowrap' width='5%'>{totalPurchasePrice}</th>
                                                </tr>
                                                <tr>
                                                    <th className='whitespace-nowrap' width='5%'>{customerPastVisitHistory.length}</th>
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
                                    :<div className='flex justify-center'>
                                    <label className="text-[#70685a] text-[18px] mb-2 block text-left mr-10 py-1">この顧客の訪問履歴は見つかりませんでした。</label>
                                </div>}
                                </div>

                            </div>
                        </div>
                        {/* textarea Second*/}
                        <div className='w-full flex justify-center'>
                            <div className=" h-full w-full mt-5">
                                {/* Text area */}
                                <div className="border border-[#70685a] rounded px-3 w-full" style={{ height: '315px',overflow:'auto'}}>
                                    <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-10 py-1 !mb-0">全体ヒアリング</label>
                                    <div>
                                        <div className='flex'>
                                            <label className="text-[#70685a] text-[18px] mb-2 block text-left mr-10 py-1">項目1</label>
                                            <label className="text-[#70685a] text-[18px] mb-2 block text-left mr-10 py-1 !mb-0">何を見てご来店いただきましたか？</label>
                                        </div>
                                        <div className='ml-20'>
                                            {/* <InputComponent value={customer.item1 || ''} name='item1' onChange={handleCustomerChange} className="w-full text-[#70685a] text-[18px] mb-2 block text-left  mr-10 py-1 !mb-0 !h-10" /> */}
                                            <div className='flex gap-10'>
                                                <div class="flex items-center">
                                                    <input id="checkbox1" type="checkbox"
                                                        class="w-4 h-4 mr-3" />
                                                    <label for="checkbox1" class="text-[#70685a]"> 以前も利用したことがある</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="checkbox2" type="checkbox"
                                                        class="w-4 h-4 mr-3" />
                                                    <label for="checkbox2" class="text-[#70685a]">店舗を見て</label>
                                                </div>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="checkbox3" type="checkbox"
                                                    class="w-4 h-4 mr-3" />
                                                <label for="checkbox3" class="text-[#70685a] mr-3"> 店舗以外の看板・広告を見て</label>
                                                <InputComponent className="w-40 text-[#70685a] mb-2 block text-left  mr-10 py-1 !mb-0 !h-8" placeholder={'広告を見た場所'}/>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="checkbox4" type="checkbox"
                                                    class="w-4 h-4 mr-3" />
                                                <label for="checkbox4" class="text-[#70685a] mr-3">折込チラシを見て</label>
                                                <InputComponent className="w-40 text-[#70685a] mb-2 block text-left  mr-10 py-1 !mb-0 !h-8" placeholder={'新聞銘柄'}/>
                                            </div>
                                            <div className='flex gap-10'>
                                                <div class="flex items-center">
                                                    <input id="checkbox5" type="checkbox"
                                                        class="w-4 h-4 mr-3" />
                                                    <label for="checkbox5" class="text-[#70685a]">インターネットを見て</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="checkbox6" type="checkbox"
                                                        class="w-4 h-4 mr-3" />
                                                    <label for="checkbox6" class="text-[#70685a]"> 紹介されて</label>
                                                </div>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="checkbox7" type="checkbox"
                                                    class="w-4 h-4 mr-3" />
                                                <label for="checkbox7" class="text-[#70685a] mr-3">その他</label>
                                                <InputComponent className="w-40 text-[#70685a] mb-2 block text-left  mr-10 py-1 !mb-0 !h-8" placeholder={'その他詳細'}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex'>
                                            <label className="text-[#70685a] text-[18px] mb-2 block text-left mr-10 py-1">項目2</label>
                                            <label className="text-[#70685a] text-[18px] mb-2 block text-left mr-10 py-1 !mb-0">次回お持ちいただくご予定の商品はございますか？</label>
                                        </div>
                                        <div className=' ml-20'>
                                            {/* <InputComponent value={customer.item2 || ''} name='item2' onChange={handleCustomerChange} className="w-full text-[#70685a] text-[18px] mb-2 block text-left  mr-10 py-1 !mb-0 !h-10" /> */}
                                            <div className='flex gap-10'>
                                                <div class="flex items-center">
                                                    <input id="checkbox8" type="checkbox" class="w-4 h-4 mr-3" />
                                                    <label for="checkbox8" class="text-[#70685a]">ダイヤモンド</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="checkbox9" type="checkbox"  class="w-4 h-4 mr-3" />
                                                    <label for="checkbox9" class="text-[#70685a]">色石</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="checkbox10" type="checkbox"  class="w-4 h-4 mr-3" />
                                                    <label for="checkbox10" class="text-[#70685a]">ネックレス</label>
                                                </div>
                                            </div>
                                            <div className='flex gap-10'>
                                                <div class="flex items-center">
                                                    <input id="checkbox11" type="checkbox" class="w-4 h-4 mr-3" />
                                                    <label for="checkbox11" class="text-[#70685a]">指輪</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="checkbox12" type="checkbox"  class="w-4 h-4 mr-3" />
                                                    <label for="checkbox12" class="text-[#70685a]">時計</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="checkbox13" type="checkbox"  class="w-4 h-4 mr-3" />
                                                    <label for="checkbox13" class="text-[#70685a]">ブランド品</label>
                                                </div>
                                            </div>
                                            <div className='flex gap-10'>
                                                <div class="flex items-center">
                                                    <input id="checkbox14" type="checkbox" class="w-4 h-4 mr-3" />
                                                    <label for="checkbox15" class="text-[#70685a]">切手</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="checkbox6" type="checkbox"  class="w-4 h-4 mr-3" />
                                                    <label for="checkbox16" class="text-[#70685a]">中国切手</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="checkbox17" type="checkbox"  class="w-4 h-4 mr-3" />
                                                    <label for="checkbox17" class="text-[#70685a]">古銭</label>
                                                </div>
                                            </div>
                                            <div className='flex gap-10'>
                                                <div class="flex items-center">
                                                    <input id="checkbox18" type="checkbox"  class="w-4 h-4 mr-3" />
                                                    <label for="checkbox18" class="text-[#70685a]">金券</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="checkbox19" type="checkbox"  class="w-4 h-4 mr-3" />
                                                    <label for="checkbox19" class="text-[#70685a]">テレカ</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="checkbox20" type="checkbox"   class="w-4 h-4 mr-3" />
                                                    <label for="checkbox20" class="text-[#70685a]">カメラ</label>
                                                </div>
                                            </div>
                                            <div className='flex gap-10'>
                                                <div class="flex items-center">
                                                    <input id="checkbox21" type="checkbox" class="w-4 h-4 mr-3" />
                                                    <label for="checkbox21" class="text-[#70685a]">スマートフォン</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="checkbox22" type="checkbox" class="w-4 h-4 mr-3" />
                                                    <label for="checkbox22" class="text-[#70685a]">食器</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="checkbox23" type="checkbox" class="w-4 h-4 mr-3" />
                                                    <label for="checkbox23" class="text-[#70685a]">ホビー</label>
                                                </div>
                                            </div>
                                            <div className='flex gap-10'>
                                                <div class="flex items-center">
                                                    <input id="checkbox24" type="checkbox" class="w-4 h-4 mr-3" />
                                                    <label for="checkbox24" class="text-[#70685a]">楽器</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="checkbox25" type="checkbox" class="w-4 h-4 mr-3" />
                                                    <label for="checkbox25" class="text-[#70685a] mr-3">その他</label>
                                                    <InputComponent className="w-40 text-[#70685a] mb-2 block text-left  mr-10 py-1 !mb-0 !h-8" placeholder={'その他詳細'}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='flex'>
                                            <label className="text-[#70685a] text-[18px] mb-2 block text-left mr-10 py-1">項目3</label>
                                            <label className="text-[#70685a] text-[18px] mb-2 block text-left mr-10 py-1 !mb-0">(各種ご案内)の送付は  可/不可</label>
                                        </div>
                                        <div className='ml-20  mb-10'>
                                            {/* <InputComponent value={customer.item3 || ''} name='item3' onChange={handleCustomerChange} className="w-full text-[#70685a] text-[18px] mb-2 block text-left  mr-10 py-1 !mb-0 !h-10" /> */}
                                            <div className='flex gap-10'>
                                                <div class="flex items-center">
                                                    <input id="checkbox26" type="checkbox" class="w-4 h-4 mr-3" />
                                                    <label for="checkbox26" class="text-[#70685a]">可</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="checkbox27" type="checkbox" class="w-4 h-4 mr-3" />
                                                    <label for="checkbox27" class="text-[#70685a]">不可</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-end mt-3'>
                <button type="button" onClick={() => allClear()}
                    className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-[#70685a] outline-none bg-transparent hover:bg-[#524c3b] text-[#70685a] hover:text-white transition-all duration-300">
                        すべてクリア
                </button>
            </div>
            {/* table */}
            <div className="flex justify-center mt-2">
                <div className='' style={{width:'100%'}}>
                    <table className='text-center w-full' style={Table}>
                        <thead className='sticky top-0 bg-white z-10 h-11'>
                            <tr>
                                <th style={Th} width='1%'>選択</th>
                                <th style={Th}  width='2%'>商品番号</th>
                                <th style={Th} >ヒアリング</th>
                                <th style={Th} >
                                    力テゴリ-1
                                    {isshow ? <button><img src={rightArrow} className='h-4' alt='' onClick={openSubtable} ></img></button> : <button><img src={leftArrow} className='h-4' alt='' onClick={closeSubtable}></img></button>}
                                    </th>
                                {isshow ? <th style={Th} >力テゴリ-2</th> : <th style={{ display: 'none' }}></th>}
                                {isshow ? <th style={Th} >力テゴリ-3</th> : <th style={{ display: 'none' }}></th>}
                                {isshow ? <th style={Th} >力テゴリ-4</th> : <th style={{ display: 'none' }}></th>}
                                <th style={Th} >画像</th>
                                <th style={Th}  width='10%'>商品名</th>
                                <th style={Th} >個数</th>
                                <th style={Th}  width='10%'>申請の根拠</th>
                                <th style={Th} >利率(%)</th>
                                <th style={Th} >申請額</th>
                                <th style={Th} >最高査定業者</th>
                                <th style={Th} >最高査定額</th>
                                <th style={Th} >
                                    業者
                                    {isvendorshow ? <button><img src={rightArrow} className='h-4' alt='' onClick={openVendortable} ></img></button> : <button><img src={leftArrow} className='h-4' alt='' onClick={closeVendortable}></img></button>}
                                </th>
                                {isvendorshow && allVendors.map((vendor, index) => (
                                    <th key={index} style={Th}>{vendor.vendor_name}</th>
                                ))}
                                <th style={Th} >上司指示額</th>
                                <th style={Th} >結果</th>
                                <th style={Th} >買取額</th>
                                <th style={Th}>編集</th>
                                <th style={Th}>削除</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  style={{display:'none'}}>
                                    <td><input type='checkbox' name='checkbox1'/></td>
                                    <td style={Td}>qqq</td>
                                    <td style={Td}>qqq</td>
                                    <td style={Td} >qqq</td>
                                    {isshow ? <td style={Td} >qq</td> :<td style={{display:'none'}}></td>}
                                    {isshow ? <td style={Td} >qq</td> :<td style={{display:'none'}}></td>}
                                    {isshow ? <td style={Td} >aa</td> :<td style={{display:'none'}}></td>}
                                    <td style={Td}>
                                        aa
                                    </td>
                                    <td style={Td}>aa</td>
                                    <td style={Td}> aa </td>
                                    <td style={Td}> aa </td>
                                    <td style={Td}> aa </td>
                                    <td style={Td}> aa </td>
                                    <td style={Td}> aa </td>
                                    <td style={Td}> aa</td>
                                    <td style={Td}>aa</td>
                                    {isvendorshow && allVendors.map((vendor, index) => (
                                        <td key={index} style={Td}>aa</td>
                                    ))}
                                    <td style={Td}>aa</td>
                                    <td style={Td}>aa</td>
                                    <td style={Td}>aa</td>
                                    <td style={Td} className='w-8 bg-transparent hover:bg-[#ebe6e0] transition-all duration-300'>
                                        <div  className='w-7 ml-2'>
                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                                        </div>
                                    </td>
                                    <td style={Td} className='w-8 bg-transparent hover:bg-[#ebe6e0] transition-all duration-300'>
                                        <div  className='w-7 ml-2'>
                                            <svg  focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                                        </div>
                                    </td>
                            </tr>
                            {( totalSalesSlipData && totalSalesSlipData.length !==0) && totalSalesSlipData.map((salesData, Index) => (
                                <tr key={Index} >
                                    <td><input type='checkbox' name='checkbox1'/></td>
                                    <td style={Td}>{salesData.number || ''}</td>
                                    <td style={Td}>{salesData.hearing || ''}</td>
                                    <td style={Td} >{salesData.product_type_one}</td>
                                    {isshow ? <td style={Td} >{salesData.product_type_two || ''}</td> :<td style={{display:'none'}}></td>}
                                    {isshow ? <td style={Td} >{salesData.product_type_three || ''}</td> :<td style={{display:'none'}}></td>}
                                    {isshow ? <td style={Td} >{salesData.product_type_four || ''}</td> :<td style={{display:'none'}}></td>}
                                    <td style={Td}>
                                        {salesData.product_photo != '' ? <ButtonComponent children="写真" name='photo' className='w-max !px-5 rounded-lg' style={{  backgroundColor: '#ebe5e1', color: '#626373'}} /> : 'ファイルなし'}
                                    </td>
                                    <td style={Td}>{salesData.product_name || ''}</td>
                                    <td style={Td}> {salesData.quantity || ''} </td>
                                    <td style={Td}> {salesData.reason_application || ''} </td>
                                    <td style={Td}> {salesData.interest_rate || ''} </td>
                                    <td style={Td}> {salesData.product_price || ''} </td>
                                    <td style={Td}> {salesData.highest_estimate_vendor || ''} </td>
                                    <td style={Td}> {salesData.highest_estimate_price || ''} </td>
                                    <td style={Td}>{salesData.number_of_vendor || ''}</td>
                                    {isvendorshow && allVendors.map((vendor, index) => (
                                        <td key={index} style={Td}> {salesData[vendor.vendor_name] || ''} </td>
                                    ))}
                                    <td style={Td}>{salesData.supervisor_direction || ''}</td>
                                    <td style={Td}>{salesData.purchase_result || ''}</td>
                                    <td style={Td}>{salesData.purchase_price || ''}</td>
                                    <td style={Td} className='w-8 bg-transparent hover:bg-[#ebe6e0] transition-all duration-300'>
                                        <div onClick={() => editSalesItem(Index)} className='w-7 ml-2'>
                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                                        </div>
                                    </td>
                                    <td style={Td} className='w-8 bg-transparent hover:bg-[#ebe6e0] transition-all duration-300'>
                                        <div onClick={() => removeSalesItem(Index)} className='w-7 ml-2'>
                                            <svg  focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                                        </div>
                                    </td>
                                </tr>
                             ))} 
                        </tbody>

                    </table>
                    {showInputPurchase ?
                        <table className='text-center w-full mt-10' style={Table}>
                            <thead className='sticky top-0 bg-white z-10 h-11'>
                                <tr>
                                    <th  style={{whiteSpace:'nowrap',paddingLeft:'10px',paddingRight:'10px',visibility:'hidden'}}>選択</th>
                                    <th style={Th}  width='2%'>商品番号</th>
                                    <th style={Th} >ヒアリング</th>
                                    <th style={Th} >
                                        力テゴリ-1
                                        {isshow ? <button><img src={rightArrow} className='h-4' alt='' onClick={openSubtable} ></img></button> : <button><img src={leftArrow} className='h-4' alt='' onClick={closeSubtable}></img></button>}
                                        </th>
                                    {isshow ? <th style={Th} >力テゴリ-2</th> : <th style={{ display: 'none' }}></th>}
                                    {isshow ? <th style={Th} >力テゴリ-3</th> : <th style={{ display: 'none' }}></th>}
                                    {isshow ? <th style={Th} >力テゴリ-4</th> : <th style={{ display: 'none' }}></th>}
                                    <th style={Th} >画像</th>
                                    <th style={Th}  width='10%'>商品名</th>
                                    <th style={Th} >個数</th>
                                    <th style={Th}  width='10%'>申請の根拠</th>
                                    <th style={Th} >利率(%)</th>
                                    <th style={Th} >申請額</th>
                                    <th style={Th} >最高査定業者</th>
                                    <th style={Th} >最高査定額</th>
                                    <th style={Th} >
                                        業者
                                        {isvendorshow ? <button><img src={rightArrow} className='h-4' alt='' onClick={openVendortable} ></img></button> : <button><img src={leftArrow} className='h-4' alt='' onClick={closeVendortable}></img></button>}
                                    </th>
                                    {isvendorshow && vendors.map((vendor, index) => (
                                        <th key={index} style={Th}>{vendor.vendor_name}</th>
                                    ))}
                                    <th style={Th} >上司指示額</th>
                                    <th style={Th} >結果</th>
                                    <th style={Th} >買取額</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='!h-8'>
                                    <td style={{visibility:'hidden'}}>as</td>
                                    <td style={Td}>
                                        <InputComponent name='number' onChange={handleChange} value={salesSlipData.number || ''} className='w-full h-8 text-[#70685a]' />
                                    </td>
                                    <td style={Td} className='!w-[20px]'>
                                        <select  name="hearing"  value={salesSlipData.hearing || ''} onChange={(e) => setSalesSlipData({hearing:e.target.value})} className="w-full h-8 text-[#70685a] font-bold outline-[#70685a]">
                                            <option value="" disabled></option>
                                            <option value="済">済</option>
                                        </select>
                                    </td>
                                    <td style={Td}>
                                        <input
                                            list="product1s"
                                            id="product_type_one"
                                            name="product_type_one"
                                            value={salesSlipData.product_type_one || ''}
                                            onChange={handleChange}
                                            className='h-8 w-full'
                                        />
                                        <datalist id="product1s">
                                            {product1s.map((option, index) => (
                                                <option key={index} value={option.category || ''} />
                                            ))}
                                        </datalist>
                                    </td>
                                    {isshow ?<td style={Td}>
                                        <input
                                            list="product2s"
                                            id="product_type_two"
                                            name="product_type_two"
                                            value={salesSlipData.product_type_two ||''}
                                            onChange={handleChange}
                                            className='h-8 w-full'
                                        />
                                        <datalist id="product2s">
                                            {product2s.map((option, index) => (
                                                <option key={index} value={option.category || ''} />
                                            ))}
                                        </datalist>
                                    </td> : <td style={{display:'none'}}></td>}
                                    {isshow ?<td style={Td}>
                                        <input
                                            list="product3s"
                                            id="product_type_three"
                                            name="product_type_three"
                                            value={salesSlipData.product_type_three|| ''}
                                            onChange={handleChange}
                                            className='h-8 w-full'
                                        />
                                        <datalist id="product3s">
                                            {product3s.map((option, index) => (
                                                <option key={index} value={option.category || ''} />
                                            ))}
                                        </datalist>
                                    </td> : <td style={{display:'none'}}></td>}
                                    {isshow ?<td style={Td}>
                                        <input
                                            list="product4s"
                                            id="product_type_four"
                                            name="product_type_four"
                                            value={salesSlipData.product_type_four || ''}
                                            onChange={handleChange}
                                            className='h-8 w-full'
                                        />
                                        <datalist id="product4s">
                                            {product4s.map((option, index) => (
                                                <option key={index} value={option.category || ''} />
                                            ))}
                                        </datalist>
                                    </td> : <td style={{display:'none'}}></td>}
                                    <td style={Td}>
                                        <div style={{ flexDirection: 'column', }} className='flex justify-center'>
                                            <div className='flex justify-center py-1'>
                                                < button type="button" onClick={() => handleButtonClick(sendInputRef)} className="w-20 flex justify-center font-blod rounded-lg text-[#70685a] text-[18px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                                        <svg className="w-7 h-7 flex justify-center " focusable="false" aria-hidden="true" fill='#524c3b' viewBox="0 0 24 24" data-testid="FileUploadOutlinedIcon" title="FileUploadOutlined"><path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5z"></path></svg>
                                                </button>
                                                <input type="file" name="fileUrl" ref={sendInputRef} style={{ display: 'none' }} onChange={(e) => handleFileChange(e)} />
                                            </div>
                                        </div>
                                    </td>
                                    <td style={Td}>
                                        <InputComponent name='product_name' onChange={handleChange} value={salesSlipData.product_name || ''} className='w-full h-8 text-[#70685a]' />
                                    </td>
                                    <td style={Td}>
                                        <InputComponent name='quantity' type='number' onChange={handleChange} value={salesSlipData.quantity || ''} className='w-full h-8 text-[#70685a]' />
                                    </td>
                                    <td style={Td}>
                                        <InputComponent name='reason_application' onChange={handleChange} value={salesSlipData.reason_application || ''} className='w-full h-8 text-[#70685a]' />
                                    </td>
                                    <td style={Td}>
                                        <InputComponent name='interest_rate' type='number' onChange={handleChange} value={salesSlipData.interest_rate || ''} className='w-full h-8 text-[#70685a]' />
                                    </td>
                                    <td style={Td}>
                                        <InputComponent name='product_price' type='number' onChange={handleChange} value={salesSlipData.product_price || ''} className='w-full h-8 text-[#70685a]' />
                                    </td>
                                    <td style={Td}>
                                        <InputComponent name='highest_estimate_vendor' onChange={handleChange} value={salesSlipData.highest_estimate_vendor || ''} className='w-full h-8 text-[#70685a]' />
                                    </td>
                                    <td style={Td}>
                                        <InputComponent name='highest_estimate_price' type='number' onChange={handleChange} value={salesSlipData.highest_estimate_price || ''} className='w-full h-8 text-[#70685a]' />
                                    </td>
                                    <td style={Td}>
                                        <InputComponent name='number_of_vendor' type='number' onChange={handleChange} value={salesSlipData.number_of_vendor || ''} className='w-full h-8 text-[#70685a]' />
                                    </td>
                                    {isvendorshow && vendors.map((vendor, index) => (
                                        <td style={Td} key={index}>
                                            <InputComponent name={vendor.vendor_name} onChange={handleChange} value={salesSlipData[vendor.vendor_name] || ''} className='w-full h-8 text-[#70685a] border border-[red]' />
                                        </td>
                                    ))}
                                    <td style={Td}>
                                        <InputComponent name='supervisor_direction' onChange={handleChange} value={salesSlipData.supervisor_direction || ''} className='w-full h-8 text-[#70685a]' />
                                    </td>
                                    <td style={Td}>
                                        <select  name="purchase_result"  value={salesSlipData.purchase_result || ''} onChange={handleChange} className="w-full h-8 text-[#70685a] font-bold border border-[#70685a] outline-[#70685a]">
                                            <option value="" disabled></option>
                                            <option value="賛成">賛成</option>
                                            <option value="反対">反対</option>
                                        </select>
                                    </td>
                                    <td style={Td}>
                                        <div className='w-full flex justify-center'>
                                            <InputComponent name='purchase_price' onChange={handleChange} type='number' value={salesSlipData.purchase_price || ''} className='w-full h-8 text-[#70685a]' />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    :''}
                    <div className='flex justify-center gap-10 mt-5'>
                     {editIndex === -1 ? (
                        <div className='flex justify-center mb-3' >
                            <button type="button" onClick={()=>addSlesItem()}
                                className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                    <path
                                        d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                        data-original="#000000" />
                                </svg>
                            </button>
                        </div>
                        ) : (
                            <div className='flex gap-20'>
                            <button className='w-[70px]  whitespace-nowrap font-bold text-[#70685a] border border-[#70685a] text-[18px]'  onClick={saveSalesItem}>
                                保存
                            </button>
                            <button className='w-[120px] whitespace-nowrap font-bold text-[#70685a] border border-[#70685a] text-[18px]' onClick={cancelSalesItem}> 
                                キャンセル
                            </button>
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <div className='flex justify-between'>
                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0" style={{visibility:'hidden'}}>Total purchase price 999,999,999 yen</label>
                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">買取点数&nbsp;{totalQuantity || ''}点</label>
                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">買取合計&nbsp;&nbsp;{totalPrice || ''}円</label>
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
                                <input
                                list="novelty_items"
                                id="novelty_item"
                                name="novelty_item"
                                value={customer.novelty_item|| ''}
                                onChange={handleCustomerChange}
                                className='w-40 h-11 mr-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]'
                            />
                            <datalist id="novelty_items">
                                <option value={'ティッシュボックス'} />
                                {novelty_items.map((option, index) => (
                                    <option key={index} value={option || ''} />
                                ))}
                            </datalist>
                                <InputComponent type='number' className='w-20 h-11 ' />
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
                            <input type='checkbox' name='google_review' className='mr-3' />
                            <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-10 pt-2" >Google口コミしたか？</label>
                            <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5 pt-2" >ク一ポンのご利用はあったか？</label>
                        </div>
                        <div className='invoice-purchase-brought-one flex justify-center w-[40%]'>
                            <input
                                list="cupon_items"
                                id="cupon_item"
                                name="cupon_item"
                                value={customer.cupon_item|| ''}
                                onChange={handleCustomerChange}
                                className='w-40 h-11 mr-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]'
                            />
                            <datalist id="cupon_items">
                                <option value={'なし'} />
                                {cupon_items.map((option, index) => (
                                    <option key={index} value={option || ''} />
                                ))}
                            </datalist>
                            <InputComponent type='number' className='w-20 h-11' />
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