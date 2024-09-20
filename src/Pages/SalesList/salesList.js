import {React ,useState,useEffect} from 'react';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import DateAndTime from '../../Components/Common/PickData';
import dateimage from '../../Assets/img/datepicker.png';

import axios from 'axios';

// THIS PAGE SHOULD HAVE A VERTICAL SCROLL BAR


const SalesList = () => {
    // const title = 'タイトルタイトル';

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

    // fetch vendor names
    const [allVendors , setAllVendors] = useState([]);
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        axios.get(`${wakabaBaseUrl}/vendor/getVendorListAll`)
        .then(response => {
            setAllVendors(response.data);
            // console.log('vendrListAll',response.data)
        })
        .catch(error => {
            console.error("There was an error fetching the customer data!", error);
        });
    }, []);

    const [users, setUsers] = useState([]);
    // Fetch user data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.get(`${wakabaBaseUrl}/user/getUserList`)
            .then(response => {
                const data = response.data;
                setUsers(data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);
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

    const [searchParams, setSearchParams] = useState({
        trading_date: '',
        purchase_staff: '',
        shipping_address: '',
        visit_type: '',
        product_type_one: '',
        product_type_two: '',
        shipping_date: '',
        deposite_date: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value
        });
    };
    
    // click search button 
    const searchSalesList = (e) => {
        e.preventDefault();
        console.log('searchValues',searchParams)
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        console.log('url', wakabaBaseUrl);
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        axios.post(`${wakabaBaseUrl}/sales/searchsaleslist`, { params: searchParams })
        .then(response => {
            setSales(response.data);
        })
        .catch(error => {
            console.error("There was an error searching for customers!", error);
        });
    }

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />
            {/* title */}
            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">売上一覧表(スタッフ単位)</h2>
            {/* first letters line  */}
            <div className='flex justify-center'>
                <div className='flex justify-center'>
                    <div className='flex justify-center mt-10 w-full text-[17px] text-[#70685a] font-bold' >
                        <div>
                            <label>単日買取額</label>
                            <div className='text-center mr-10'>
                                <label>¥9,999,999</label>
                            </div>
                        </div>
                        <div>
                            <label>単日買取額</label>
                            <div className='text-center mr-10'>
                                <label>¥9,999,999</label>
                            </div>
                        </div>
                        <div>
                            <label>当月 粗利額</label>
                            <div className='text-center mr-10'>
                                <label>¥9,999,999</label>
                            </div>
                        </div>
                        <div>
                            <label>金庫金合計</label>
                            <div className='text-center mr-10'>
                                <label>¥9,999,999</label>
                            </div>
                        </div>
                        <div>
                            <label>売上表残金</label>
                            <div className='text-center'>
                                <label>¥9,999,999</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* second button line  */}
            <div className='flex justify-center' >
                <div className='flex justify-center' >
                    <div className='sales-list flex justify-center gap-3 mt-5 w-full' >
                        <div className='flex justify-center gap-5'>
                            <div>
                                <div className='text-center text-[#70685a] font-bold mb-2'><label>買取日</label></div>
                                <div className='flex'>
                                    <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="trading_date" type="text"  value={searchParams.trading_date}  required className="w-40 h-11 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                                    </div>
                                    <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                        <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                            <div style={{ position: 'relative' }}>
                                                <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                                <input type="date" name="trading_date" onChange={handleChange} style={{ position: 'absolute', left: '0', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='text-center text-[#70685a] font-bold mb-2'><label>買取担当</label></div>
                                <select name="purchase_staff" value={searchParams.purchase_staff} onChange={handleChange} className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                    <option value="" ></option>
                                    {users && users.map((user, index) => (
                                            <option value={user.username}>{user.username || ''}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <div className='text-center text-[#70685a] font-bold mb-2'><label>卸業者</label></div>
                                <select name="shipping_address" value={searchParams.shipping_address} onChange={handleChange} className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                    <option value="" ></option>
                                    {allVendors && allVendors.map((vendor, index) => (
                                            <option value={vendor.vendor_name}>{vendor.vendor_name || ''}</option>
                                        ))}
                                </select>
                            </div>
                        </div>
                        <div className='flex flex justify-center gap-5'>
                            <div>
                                <div className='text-center text-[#70685a] font-bold mb-2'><label>来店種別1</label></div>
                                <select name="visit_type"  value={searchParams.visit_type} onChange={handleChange} className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                    <option value="" ></option>
                                    <option value="折りたたまれた">折りたたまれた</option>
                                    <option value="店の前で">店の前で</option>
                                    <option value="顧客">顧客</option>
                                    <option value="投稿">投稿</option>
                                    <option value="紹介">紹介</option>
                                    <option value="他の人">他の人</option>
                                </select>
                            </div>
                            <div>
                                <div className='text-center text-[#70685a] font-bold mb-2'><label>来店種別2</label></div>
                                <select name="visit_type"  value={searchParams.visit_type} onChange={handleChange} className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                    <option value="" ></option>
                                    <option value="折りたたまれた">折りたたまれた</option>
                                    <option value="店の前で">店の前で</option>
                                    <option value="顧客">顧客</option>
                                    <option value="投稿">投稿</option>
                                    <option value="紹介">紹介</option>
                                    <option value="他の人">他の人</option>
                                </select>
                            </div>
                            <div>
                                <div className='text-center text-[#70685a] font-bold mb-2'><label>カテゴリ一1</label></div>
                                <select name="product_type_one"  value={searchParams.product_type_one} onChange={handleChange} className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                    <option value="" ></option>
                                    {product1s && product1s.map((product, index) => (
                                            <option value={product.category}>{product.category || ''}</option>
                                        ))}
                                </select>
                            </div>
                            <div>
                                <div className='text-center text-[#70685a] font-bold mb-2'><label>カテゴリ一2</label></div>
                                <select name="product_type_two" value={searchParams.product_type_two} onChange={handleChange} className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                    <option value="" ></option>
                                    {product2s && product2s.map((product, index) => (
                                            <option value={product.category}>{product.category || ''}</option>
                                        ))}
                                </select>
                            </div>
                        </div>
                        <div className='flex flex justify-center gap-5'>

                            <div>
                                <div className='text-center text-[#70685a] font-bold mb-2'><label>卸日</label></div>
                                <div className='flex'>
                                    <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="shipping_date" type="text" value={searchParams.shipping_date} required className="w-40 h-11 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                                    </div>
                                    <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                        <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                            <div style={{ position: 'relative' }}>
                                                <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                                <input type="date"  name="shipping_date"  onChange={handleChange} style={{ width: '40px', height: '30px', position: 'absolute', left: '0', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='text-center text-[#70685a] font-bold mb-2'><label>入金日</label></div>
                                <div className='flex'>
                                    <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="deposite_date" type="text" value={searchParams.deposite_date} required className="w-40 h-11 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                                    </div>
                                    <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                        <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                            <div style={{ position: 'relative' }}>
                                                <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                                <input type="date" name="deposite_date" onChange={handleChange} style={{ width: '40px', height: '30px', position: 'absolute', left: '0', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* third line */}
            <div className='flex justify-center' >
                <div className='flex justify-center' >
                    <div className='flex justify-center mt-5 w-full' >
                        <div className='flex'>
                            <div className='text-center text-[#70685a] font-bold pr-3 pt-2'><label>この条件で</label></div>
                            <ButtonComponent onClick={searchSalesList} children={'検索'} className='bg-[#a3a1c8] text-[#fff] h-11 rounded-lg' />
                            <div className='text-center text-[#70685a] font-bold pl-3 pt-2'><label>(and検索)</label></div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Tabe*/}
            <div className='mt-10 pb-20 w-full flex'>
                <div style={{ overflow: 'auto' }} className='w-full'>
                    <table style={Table}>
                        <thead className='sticky top-0 bg-white z-10'>
                            <tr>
                                <th style={Th}>選択</th>
                                <th style={Th} width='5%'>わかばNo.</th>
                                <th style={Th} width='5%' >買取日</th>
                                <th style={Th} width='5%'>買取担当</th>
                                <th style={Th} width='5%'>お客様</th>
                                <th style={Th} width='5%'>カナ</th>
                                <th style={Th} width='5%'>TEL</th>
                                <th style={Th} width='5%'>住所</th>
                                <th style={Th} width='5%'>来店種別-1</th>
                                <th style={Th} width='5%'>来店種別-2</th>

                                <th style={Th} width='5%'>力テゴリ-1</th>
                                <th style={Th} width='5%'>力テゴリ-2</th>
                                <th style={Th} width='5%'>商品名</th>
                                <th style={Th} width='5%'>画像</th>
                                <th style={Th} width='5%'>個数</th>
                                <th style={Th} width='10%' >金種</th>
                                <th style={Th} >G/額面</th>

                                <th style={Th} width='5%'>買取額</th>
                                <th style={Th} width='10%' >売上</th>
                                <th style={Th} width='10%' >粗利益</th>
                                <th style={Th} width='10%' >卸業者</th>
                                <th style={Th} width='10%' >卸日</th>
                                <th style={Th} width='5%'>入金日</th>
                                <th style={Th} width='5%'>備考</th>
                                {/* <svg className='h-10' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg> */}
                            </tr>

                        </thead>
                        <tbody>
                            {(sales && sales.length !==0) && sales.map((sale,Index) => (
                                <tr key={Index}>
                                    <td ><input type="checkbox"/></td>
                                    <td style={Td}>{sale.id}</td>
                                    <td style={Td}>{sale.trading_date}</td>
                                    <td style={Td}>{sale.purchase_staff}</td>
                                    <td style={Td}>{sale.Customer ? sale.Customer.full_name : 'Name not available'}</td>
                                    <td style={Td}>{sale.Customer ? sale.Customer.katakana_name : 'katakana_name not available'}</td>
                                    <td style={Td}>{sale.Customer ? sale.Customer.phone_number : 'phone_number not available'}</td>
                                    <td style={Td}>{sale.Customer ? sale.Customer.address : 'address not available'}</td>
                                    <td style={Td}>{sale.Customer ? sale.Customer.visit_type : 'visit_type not available'}</td>
                                    <td style={Td}>{'visit_type2'}</td>
                                    <td style={Td}>{sale.product_type_one}</td>
                                    <td style={Td}>{sale.product_type_two}</td>
                                    <td style={Td}>{sale.product_name}</td>
                                    <td style={Td}><ButtonComponent children="1" className='w-max !px-5 rounded-lg' style={{ backgroundColor: '#ebe5e1', color: '#626373' }} /></td>
                                    <td style={Td}>{sale.quantity}</td>
                                    <td style={Td}>{'denomination'}</td>
                                    <td style={Td}>{sale.metal_type}</td>
                                    <td style={Td}>{sale.price_per_gram}</td>
                                    <td style={Td}>{sale.sales_amount}</td>
                                    <td style={Td}>{sale.gross_profit}</td>
                                    <td style={Td}>{sale.shipping_address}</td>
                                    <td style={Td}>{sale.shipping_date}</td>
                                    <td style={Td}>{sale.deposite_date}</td>
                                    <td style={Td}>{sale.remarks}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
};

export default SalesList;