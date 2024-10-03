import React,{ useState, useEffect } from 'react';
import {Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { setShippingData } from '../../redux/sales/actions';

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

    const dispatch = useDispatch();

    const updateData = (data) => {
    dispatch(setShippingData(data));
    };

    const [sales, setSales] = useState([]);
    // Fetch sales data
    useEffect( () => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // console.log(`${wakabaBaseUrl}/sales/getSalesList`);
         axios.get(`${wakabaBaseUrl}/sales/getSalesList`)
            .then(response => {
                // console.log(response.data)
                setSales(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);

    const handleCategory = async(value) => {
        setShowYahoo(false);
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // console.log(`${wakabaBaseUrl}/sales/filter`);
        await axios.post(`${wakabaBaseUrl}/sales/filter`,{ value: value })
            .then(response => {
                console.log(response.data)
                setSales(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    };

    const handleSalesEditClick = (id) => {
        navigate(`/salesslipupdate/${id}`); // Use navigate for routing
    };

    //checked event
    const [checkedValues, setCheckedValues] = useState([]);
    // Handle checkbox change
    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setCheckedValues((prevValues) => 
        prevValues.includes(value)
            ? prevValues.filter((v) => v !== value) // Uncheck
            : [...prevValues, value] // Check
        );
    };
    const handleSendCheckedValues = () => {
        updateData(checkedValues);
        // console.log('checked values',checkedValues);
        if(checkedValues && checkedValues.length !==0){
            navigate('/purchaserequestformforwholesaler');
        }

    };
    //go to disposal permission
    const sendToDisposalPermission = () => {
        // updateData(checkedValues);
        // navigate('/applicationfordisposalpermission');
    }

    //filter yahoo auction
    const handleYahooAuction =()=> {
        setShowYahoo(true);
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        // console.log(`${wakabaBaseUrl}/sales/filter`);
        axios.post(`${wakabaBaseUrl}/sales/vendorfilter`,{ value: 'オークション' })
            .then(response => {
                // console.log(response.data)
                setSales(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
        });
    }

    const [showYahoo,setShowYahoo] = useState(false);
     //  -------------------------------select box-------------------------------
     const [product1s, setProduct1s] = useState([]);
     // Fetch product1 data
     useEffect(() => {
         const fetchCategory1 = async () => {
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
         }
         fetchCategory1();
     }, []);
 
     const [category1, setCategory1] = useState('1');
 
     const handleCategory1Change = (e, productList) => {
         const selectedCategory = e.target.value; // Get the selected category
         const selectedResult = productList.find(product => product.category === selectedCategory);//need id
         setCategory1(selectedCategory);
         handleCategory(selectedCategory);
     };

    return (
        <>
            {/* <Titlebar title={title} /> */}
            {/* first button line  */}
            <div className="w-full flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full flex justify-center">
                    <div className='w-full'>
                        <div className='sales-slip-top-button flex justify-center'>
                            <div className='sales-slip-next-button1 flex mt-5 w-1/3' >
                                <div className='flex justify-center'>
                                    <div>
                                        <button onClick={handleSendCheckedValues} 
                                                 className='h-10 px-5 text-2xl font-bold rounded-md bg-[#9bd195] text-[white] hover:bg-[#524c3b] hover:text-white transition-all duration-300'>
                                             業者への買取依書へ
                                        </button>
                                        <div className='flex justify-center'>
                                            <LabelComponent value={'行を選択してください'} />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center ml-20'>
                                    <div className=''>
                                        <button onClick={sendToDisposalPermission} className='h-10  px-5 text-2xl font-bold rounded-md bg-[#9bd195] text-[white] hover:bg-[#524c3b] hover:text-white transition-all duration-300' >
                                            廃棄申請
                                        </button>
                                        <div className='flex justify-center'>
                                            <LabelComponent value={'行を選択してください'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='sales-slip-next-button2 flex mt-5 w-1/2' >
                                <ButtonComponent children={'売上表'} className='!px-5 text-2xl ml-5 ' style={{ backgroundColor: '#424242', height: '40px' }} />
                                <button className='h-10 ml-10 px-5 text-2xl font-bold rounded-md border border-[#424242] bg-[transparent] text-[#424242] hover:bg-[#524c3b] hover:text-white transition-all duration-300' >
                                    <Link to='/vendorassessmentsheet'>業者査定シート</Link></button>
                                <button onClick={handleYahooAuction} className='h-10 ml-10 px-5 text-2xl font-bold rounded-md border border-[#424242] bg-[transparent] text-[#424242] hover:bg-[#524c3b] hover:text-white transition-all duration-300 ' 
                                            style={{backgroundColor:showYahoo === true ? '#424242' : 'transparent', color:showYahoo === true ? 'white' : 'black'}} >
                                     オークション
                                </button>
                            </div>
                        </div>

                        {/* second selectbox line  */}
                        <div className='w-full flex justify-center mt-5'>
                            <select name="category1" value={category1} onChange={(e) => handleCategory1Change(e, product1s)} className='w-max h-11 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]' >
                                <option value="" disabled>商品タイプ1</option>
                                {product1s.map((option, index) => (
                                    <option key={option.id} value={option.category || ''}>
                                        {option.category || ''}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        {/*  Tabe*/}
                        <div className='mt-10 pb-20 w-full flex'>
                            <div style={{ width: '100%', overflow: 'auto' }} >
                                <table style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th rowSpan={2} className='px-2'></th>
                                            <th rowSpan={2} className='px-2'>番号</th>
                                            <th  className='px-2' style={Th} rowSpan={2}>日付</th>
                                            <th className='px-2' style={Th} rowSpan={2}>買取担当.</th>

                                            <th style={Th} colSpan={4}>個人情報</th>

                                            <th  style={Th} rowSpan={2} >来店種別 </th>
                                            <th  style={Th} rowSpan={2} >銘柄・種別 </th>
                                            <th  style={Th} rowSpan={2} >販売店名</th>
                                            <th  style={Th} rowSpan={2} >ステータス</th>
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
                                            {showYahoo ? (
                                                <th style={Th} rowSpan={2} >オークション</th>
                                            ):(
                                                <th style={Th} rowSpan={2} >卸し先</th>
                                            )}
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
                                                <td className='flex flex-col justify-center'><input type='checkbox' value={sale.id} onChange={handleCheckboxChange} className='w-5'/></td>
                                                <td>{Index + 1}</td>
                                                <td style={Td}>{sale.trading_date}</td>
                                                <td style={Td}>{sale.purchase_staff}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.full_name : 'Name not available'}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.katakana_name : 'katakana_name not available'}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.phone_number : 'phone_number not available'}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.address : 'address not available'}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.visit_type : 'visit_type not available'}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.brand_type : 'brand_type not available'}</td>
                                                <td style={Td}>{sale.store_name}</td>
                                                <td style={Td}>{sale.product_status}</td>
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
                                                <td style={Td}>{sale.shipping_address}</td>
                                                <td style={Td}>{sale.shipping_date}</td>
                                                <td style={Td}>{sale.deposit_date}</td>
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
        </>
    );
};

export default SalesSlip;