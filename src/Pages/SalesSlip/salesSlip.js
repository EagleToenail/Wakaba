import React,{ useState, useEffect } from 'react';
import {Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
// import Titlebar from '../../Components/Common/Titlebar';
// import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import LabelComponent from '../../Components/Common/LabelComponent';


const SalesSlip = () => {
    // const title = 'タイトルタイトル';
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    const Th = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace:'nowrap'
    };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace:'nowrap'
    };

    const [sales, setSales] = useState([]);
    // Fetch customer data
    useEffect( () => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        // console.log(`${wakabaBaseUrl}/sales/getSalesList`);
         axios.get(`${wakabaBaseUrl}/sales/getSalesList`)
            .then(response => {
                console.log(response.data)
                setSales(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);

    // State to track the value of the active button
    const [activeValue, setActiveValue] = useState('');
    // State to track if the select box is active
    const [isSelectActive, setIsSelectActive] = useState(false);
    const buttonValues = ['', '貴金属', 'ブランド', 'バッグ', '時計',
        '財布', 'アクセサリ', '骨董品', '洋酒', 'カメラ','楽器','スマホ/夕ブレット'];

    const handleCategory =(value) =>(e) => {
        e.preventDefault();

        // console.log('vlaue',value)
        setActiveValue(value);
        // console.log('activeValue',activeValue)
        setIsSelectActive(false); // Deactivate select box

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        // console.log(`${wakabaBaseUrl}/sales/filter`);
        axios.post(`${wakabaBaseUrl}/sales/filter`,{ value: value })
            .then(response => {
                // console.log(response.data)
                setSales(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    };
    const onChangeCategory=(e) => {
        e.preventDefault();
        // console.log("afdaf",e.target.value)
        setActiveValue(null); // Deactivate all buttons
        setIsSelectActive(true);

        const value = e.target.value;
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        // console.log(`${wakabaBaseUrl}/sales/filter`);
        axios.post(`${wakabaBaseUrl}/sales/filter`,{ value: value })
            .then(response => {
                // console.log(response.data)
                setSales(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    };

    const handleSalesEditClick = (id) => {
        navigate(`/salesslipupdate/${id}`); // Use navigate for routing
    };

    const [isCreateModalOpen , setIsCreateModalOpen] = useState(false);

    const openCreateCheckModal = () => {
        setIsCreateModalOpen(true);
    }
    const gotoCustomer = () => {
        setIsCreateModalOpen(false);
            navigate('/customerlist')
    }
    const gotoRegisterCustomer =()=> {
        setIsCreateModalOpen(false);
        navigate('/invoiceforpurchaseofbroughtblank');
    }

    return (
        <>
            {/* <Titlebar title={title} /> */}
            {/* first button line  */}
            <div className="w-full flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full flex justify-center">
                    <div className='w-full'>
                        <div className='sales-slip-top-button flex justify-between'>
                            <div className='sales-slip-next-button1 flex mt-5 w-1/2' >
                                <div className='flex justify-center'>
                                    <div>
                                        <ButtonComponent className='!px-5 text-2xl w-max' style={{ backgroundColor: '#9bd195', height: '40px' }} >
                                            <Link to="/purchasetorshop">リサイクルショップへの買取依頼書へ</Link>
                                        </ButtonComponent>
                                        <div className='flex justify-center'>
                                            <LabelComponent value={'行を選択してください'} />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className=''>
                                        <ButtonComponent className='!px-5 text-2xl ml-5' style={{ backgroundColor: '#9bd195', height: '40px' }} >
                                            <Link>廃棄申請</Link>
                                        </ButtonComponent>
                                        <div className='flex justify-centerb w-max ml-5'>
                                            <LabelComponent value={'行を選択してください'} />
                                        </div>
                                    </div>
                                    <div>
                                        <ButtonComponent children={'買取計算書'} onClick={openCreateCheckModal} className='!px-5 text-2xl' style={{ height: '40px' }} ></ButtonComponent>
                                    </div>
                                </div>
                            </div>
                            <div className='sales-slip-next-button2 flex mt-5 w-1/2' >
                                <ButtonComponent children={'売上表'} className='!px-5 text-2xl ml-5' style={{ backgroundColor: '#424242', height: '40px' }} />
                                <ButtonComponent children={'業者査定シート'} className='!px-5 text-2xl'  style={{ backgroundColor: 'transparent', border: '1px solid #424242', color: '#424242', marginLeft: '30px', height: '40px' }} >
                                    <Link to='/contractorassessmentsheet'>業者査定シート</Link></ButtonComponent>
                                <ButtonComponent children={'ヤフオク'} className='!px-5 text-2xl ' style={{ backgroundColor: 'transparent', border: '1px solid #424242', color: '#424242', marginLeft: '30px', height: '40px' }} >
                                    <Link to='/yahooauction'>ヤフオク</Link>
                                </ButtonComponent>
                            </div>
                        </div>

                        {/* second button line  */}
                        {/* This buttons doesn't have borders and background-color */}
                        <div className='flex' >
                            <div className='sales-slip-filters flex justify-center w-full' >
                                <div className='sales-slip-filters-btns flex justify-center w-1/3 gap-5 mt-5'>
                                    <ButtonComponent children={'全て'} onClick={handleCategory('')}  className="!px-3  bg-[transparent] border border-[#424242] text-[#70685a] h-8 rounded-lg !w-max"  style={{color: activeValue === buttonValues[0] ? 'white' : 'black', backgroundColor: activeValue === '' ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'貴金属'} onClick={handleCategory('貴金属')} className="!px-3 bg-[transparent] border border-[#424242] text-[#70685a] h-8 rounded-lg !w-max" style={{color: activeValue === buttonValues[1] ? 'white' : 'black', backgroundColor: activeValue === buttonValues[1] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'古銭等'} onClick={handleCategory('古銭等')} className="!px-3 bg-[transparent] border border-[#424242] text-[#70685a] h-8 rounded-lg !w-max" style={{color: activeValue === buttonValues[2] ? 'white' : 'black', backgroundColor: activeValue === buttonValues[2] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'バッグ'} onClick={handleCategory('バッグ')} className="!px-3 bg-[transparent] border border-[#424242] text-[#70685a] h-8 rounded-lg !w-max" style={{color: activeValue === buttonValues[3] ? 'white' : 'black', backgroundColor: activeValue === buttonValues[3] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'時計'} onClick={handleCategory('時計')} className="!px-3 bg-[transparent] border border-[#424242] text-[#70685a] h-8 rounded-lg !w-max" style={{color: activeValue === buttonValues[4] ? 'white' : 'black', backgroundColor: activeValue === buttonValues[4] ? '#424242' : 'transparent'}}/>
                                </div>
                                <div className='sales-slip-filters-btns flex justify-center w-1/3 gap-5 mt-5 ml-5'>
                                    <ButtonComponent children={'財布'} onClick={handleCategory('財布')} className="!px-3 bg-[transparent] border border-[#424242] text-[#70685a] h-8 rounded-lg !w-max" style={{color: activeValue === buttonValues[5] ? 'white' : 'black', backgroundColor: activeValue === buttonValues[5] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'アクセサリ'} onClick={handleCategory('アクセサリ')} className="!px-3 bg-[transparent] border border-[#424242] text-[#70685a] h-8 rounded-lg !w-max" style={{color: activeValue === buttonValues[6] ? 'white' : 'black', backgroundColor: activeValue === buttonValues[6] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'骨董品'} onClick={handleCategory('骨董品')} className="!px-3 bg-[transparent] border border-[#424242] text-[#70685a] h-8 rounded-lg !w-max" style={{color: activeValue === buttonValues[7] ? 'white' : 'black', backgroundColor: activeValue === buttonValues[7] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'洋酒'} onClick={handleCategory('洋酒')} className="!px-3 bg-[transparent] border border-[#424242] text-[#70685a] h-8 rounded-lg !w-max" style={{color: activeValue === buttonValues[8] ? 'white' : 'black', backgroundColor: activeValue === buttonValues[8] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'カメラ'} onClick={handleCategory('カメラ')} className="!px-3 bg-[transparent] border border-[#424242] text-[#70685a] h-8 rounded-lg !w-max" style={{color: activeValue === buttonValues[9] ? 'white' : 'black', backgroundColor: activeValue === buttonValues[9] ? '#424242' : 'transparent'}}/>
                                </div>
                                <div className='sales-slip-filters-btns flex justify-center w-1/3 gap-5 mt-5 ml-5'>
                                    <ButtonComponent children={'楽器'} onClick={handleCategory('楽器')} className="!px-3 bg-[transparent] border border-[#424242] text-[#70685a] h-8 rounded-lg !w-max" style={{color: activeValue === buttonValues[10] ? 'white' : 'black', backgroundColor: activeValue === buttonValues[10] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'スマホ/夕ブレット'} onClick={handleCategory('スマホ/夕ブレット')} className="!px-5 bg-[transparent] border border-[#424242] text-[#70685a] h-8 rounded-lg !w-max" style={{color: activeValue === buttonValues[11] ? 'white' : 'black', backgroundColor: activeValue === buttonValues[11] ? '#424242' : 'transparent'}}/>
                                    <select id="classificatin" onChange={onChangeCategory}  name="classificatin" className="!w-max h-8 rounded-lg text-[#70685a] text-[15px] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]" style={{color: isSelectActive ? 'white' : 'black', backgroundColor: isSelectActive ? '#424242' : 'transparent'}}>
                                        <option value="その他">その他</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value=" Islands">Islands</option>
                                        <option value="Albania">Albania</option>
                                    </select>
                                </div> 
                            </div>
                        </div>

                        {/*  Tabe*/}
                        <div className='mt-10 pb-20 w-full flex'>
                            <div style={{ width: '100%', overflow: 'auto' }} >
                                <table style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th rowSpan={2} className='px-2'>番号</th>
                                            <th  className='px-2' style={Th} rowSpan={2}>日付</th>
                                            <th className='px-2' style={Th} rowSpan={2}>買取担当.</th>

                                            <th style={Th} colSpan={4}>個人情報</th>

                                            <th  style={Th} rowSpan={2} >来店種別 </th>
                                            <th  style={Th} rowSpan={2} >銘柄・種別 </th>
                                            <th  style={Th} rowSpan={2} >販売店名</th>
                                            <th style={Th} rowSpan={2} >商品種別1 </th>
                                            <th style={Th} rowSpan={2} >商品種別2</th>
                                            <th style={Th} rowSpan={2} >商品</th>
                                            <th style={Th} rowSpan={2} >数 </th>
                                            <th style={Th} rowSpan={2} >金種</th>
                                            <th style={Th} rowSpan={2} >g/額面</th>
                                            <th style={Th} rowSpan={2} >買取額</th>
                                            <th style={Th} rowSpan={2} >売上額 </th>
                                            <th style={Th} rowSpan={2} >送料</th>
                                            <th style={Th} rowSpan={2} >粗利益</th>
                                            <th style={Th} rowSpan={2} >卸し先</th>
                                            <th style={Th} rowSpan={2} >卸日</th>
                                            <th style={Th} rowSpan={2} >入金日</th>
                                            <th rowSpan={2} ></th>
                                        </tr>
                                        <tr>
                                            <th style={Th}className='px-2'>顧客名</th>
                                            <th style={Th}className='px-2' >ヨミガナ</th>
                                            <th style={Th} className='px-2'>電話番号 </th>
                                            <th style={Th} className='px-2'>住所 </th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sales.map((sale,Index) => (
                                            <tr key={sale.id}>
                                                <td>{Index+1}</td>
                                                <td style={Td}>{sale.trading_date}</td>
                                                <td style={Td}>{sale.purchase_staff}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.full_name : 'Name not available'}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.katakana_name : 'katakana_name not available'}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.phone_number : 'phone_number not available'}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.address : 'address not available'}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.visit_type : 'visit_type not available'}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.brand_type : 'brand_type not available'}</td>
                                                <td style={Td}>{sale.store_name}</td>
                                                <td style={Td}>{sale.product_type_one}</td>
                                                <td style={Td}>{sale.product_type_two}</td>
                                                <td style={Td}>{sale.product_name}</td>
                                                <td style={Td}>{sale.quantity}</td>
                                                <td style={Td}>{sale.metal_type}</td>
                                                <td style={Td}>{sale.price_per_gram}</td>
                                                <td style={Td}>{sale.purchase_price}</td>
                                                <td style={Td}>{sale.sales_amount}</td>
                                                <td style={Td}>{sale.shipping_cost}</td>
                                                <td style={Td}>{sale.gross_profit}</td>
                                                <td style={Td}>{sale.wholesale_buyer}</td>
                                                <td style={Td}>{sale.wholesale_date}</td>
                                                <td style={Td}>{sale.payment_date}</td>
                                                <td  onClick={() => handleSalesEditClick(sale.id)}>
                                                    <svg className="w-5 h-5 ml-5" fill='#70685a' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon" title="ContentCopy">
                                                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"></path>
                                                    </svg>
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
            {isCreateModalOpen && (
            <div
            className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">

                <div className="my-4 text-center">
                    <h4 className="text-gray-800 text-base font-semibold mt-4">新規来店ですか?</h4>

                    <div className="text-center space-x-4 mt-8">
                        <button type="button" onClick={gotoRegisterCustomer}
                            className="px-6 py-2 rounded-lg text-white text-sm bg-red-600 hover:bg-red-700 active:bg-red-600">はい</button>
                        <button type="button" onClick={gotoCustomer}
                            className="px-4 py-2 rounded-lg text-gray-800 text-sm bg-gray-200 hover:bg-gray-300 active:bg-gray-200">いいえ</button>
                    </div>
                </div>
            </div>
        </div>
        )}
        </>
    );
};

export default SalesSlip;