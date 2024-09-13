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
import CustomerRegister from './customerregister';

import { useDispatch } from 'react-redux';
import { setData } from '../../redux/sales/actions';

const InvoicePurchaseOfBroughtBlank = () => {

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

    const navigate = useNavigate();

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
        setSalesSlipData({trading_date:new Date().toISOString().split('T')[0], purchase_staff:userData.username, store_name:userData.store_name, customer_id:'id'});
        setTotalSalesSlipData((prevSalesSlipDatas) => [...prevSalesSlipDatas, { ...salesSlipData, id: Date.now(),customer_id:'id' }]);
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
        if(childData){
            const numberOfInvoice = 1;
            const purchaseData = {deadline,numberOfInvoice,totalSalesSlipData};
            console.log('send purchase data',purchaseData);
            updateData(purchaseData);
            navigate('/customerreceipt');
        } else {
            setIsExistCustomerModalOpen(true);
        }
       
    }
    const sendPurchaseData = () => {
        if(childData) {
            const numberOfInvoice = 1;
            const purchaseData = {deadline,numberOfInvoice,totalSalesSlipData};
            console.log('send purchase data from blank',purchaseData);
            updateData(purchaseData);
            navigate('/purchaseinvoiceforbroughtinitems');
        } else {
            setIsExistCustomerModalOpen(true);
        }
       
    }


    const updatecustomerId = (customerId) => {
        console.log('updatecustomerId',customerId)
        const updatedData = totalSalesSlipData.map(data => ({
            ...data,
            customer_id: customerId // Replace with your desired value or logic
          }));
    
          setTotalSalesSlipData(updatedData);
    }
    const [childData, setChildData] = useState(null);//customerId
    // get customer id from childcomponent.
    const handleDataFromChild = (customerId) => {
        updatecustomerId(customerId);
      setChildData(customerId);
      console.log('Data received from child:', customerId);
    };
  
    const [isExistCustomerModalOpen , setIsExistCustomerModalOpen] = useState(false); 
    const onExistCustomerModalClose = () => {
        setIsExistCustomerModalOpen(false);
    }

    const aaa = ()=> {
        updatecustomerId(childData);
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
                                <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 !mb-0 flex">買取計算書No.1</label>
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
                                    <ButtonComponent children="全体撮影" onClick={aaa} className='w-max h-11 !px-5' style={{ border: '1px solid #e87a00', backgroundColor: 'transparent', color: '#e87a00' }} />
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
                        <CustomerRegister onSendData={handleDataFromChild}/>
                    </div>
                </div>

            </div>
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
        {isExistCustomerModalOpen && (
            <div
            className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">

                <div className="my-4 text-center">
                    <h4 className="text-gray-800 text-base font-semibold mt-4">お客様情報を新規登録してください。</h4>

                    <div className="text-center space-x-4 mt-8">
                        <button type="button" onClick={onExistCustomerModalClose}
                            className="px-6 py-2 rounded-lg text-white text-sm bg-red-600 hover:bg-red-700 active:bg-red-600">オーケー</button>
                    </div>
                </div>
            </div>
        </div>
        )}
    </>
    );
};

export default InvoicePurchaseOfBroughtBlank;