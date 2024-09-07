import React, { useState, useRef, useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import LabelComponent from '../../Components/Common/LabelComponent';
import dateimage from '../../Assets/img/datepicker.png';
import DateAndTime from '../../Components/Common/PickData';


// THIS PAGE SHOULD HAVE VERTICAL SCROLL BAR : Onishi Comment Aug-22 2024

const SalesSlipCreate1 = () => {

    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center',

    };
    const Th = {
        whiteSpace:'nowrap'
    }

    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
        whiteSpace:'nowrap'
    };

    const [salesSlipData, setSalesSlipData] = useState({
        id:'',
        trading_date:'',
        purchase_staff:'',
        customer_id:'',
        visit_type:'',
        brand_type:'',
        store_name:'',
        product_type_one:'',
        product_type_two:'',
        product:'',
        quantity:'',
        metal_type:'',
        price_per_gram:'',
        purchase_price:'',
        sales_amount:'',
        shipping_cost:'',
        wholesale_buyer:'',
        wholesale_date:'',
        payment_date:''
    });
//total data:
    const [totalSalesSlipData,setTotalSalesSlipData] = useState([]);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setSalesSlipData({
            ...salesSlipData,
            [e.target.name]: e.target.value,
        });

    };


    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        console.log(`${wakabaBaseUrl}/customer/getCustomerList`);
        axios.get(`${wakabaBaseUrl}/customer/getCustomerList`)
            .then(response => {
                setCustomers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);

    const [searchParams, setSearchParams] = useState({
        name: '',
        tel: '',
        address: '',
        birthDate: ''
    });
        // Handle input change
    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value
        });
    };

    // Handle search form submission
    const handleSearch = (e) => {
        e.preventDefault();
        console.log('searchParms', searchParams);
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        console.log('url', wakabaBaseUrl);
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        axios.post(`${wakabaBaseUrl}/customer/search`, { params: searchParams })
            .then(response => {
                setCustomers(response.data);
            })
            .catch(error => {
                console.error("There was an error searching for customers!", error);
            });
    };
    const [customerName, setCustomerName] = useState('');
    const selectCustomer = (value) => {
        console.log(value,'fullname')
        setSalesSlipData({customer_id:value});
        setCustomerName(customers[value].full_name);
        console.log(customers[value].full_name,'fullname')
    }

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

    const handleSalesSubmit = async (e) => {
        e.preventDefault();
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const response = await axios.post(`${wakabaBaseUrl}/sales/createSales`,salesSlipData);
            //console.log('Response:', response.data);
            // Handle successful response here
            navigate('/salesslip'); // Navigate to the profile page after closing the modal
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error here
        }
    };
    
    const addItem = () => {
        setTotalSalesSlipData((prevSalesSlipDatas) => [...prevSalesSlipDatas, { ...salesSlipData, id: Date.now() }]);
        setSalesSlipData({
            id:'',
            trading_date:'',
            purchase_staff:'',
            customer_id:'',
            visit_type:'',
            brand_type:'',
            store_name:'',
            product_type_one:'',
            product_type_two:'',
            product:'',
            quantity:'',
            metal_type:'',
            price_per_gram:'',
            purchase_price:'',
            sales_amount:'',
            shipping_cost:'',
            wholesale_buyer:'',
            wholesale_date:'',
            payment_date:''
        });
    }

    return (
        <>
            <DateAndTime />
            <div className="bg-[trasparent] font-[sans-serif] mt-12">
                <div className=" flex flex-col items-center justify-center px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '50em' }}>
                        <div className=" rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">売上伝票作成(1)</h2>
                            {/*==== Customer table =====*/}
                            <div className='flex mt-3 justify-center text-left'>
                                    <form className='flex flex-wrap justify-center' onSubmit={handleSearch}>
                                        <div className='customer-name-tel flex justify-center'>
                                            <div className='flex mt-5'>
                                                <div className=' text-[#70685a] px-2 mr-2 text-left'>
                                                    <LabelComponent value={'氏名'} className='text-left' />
                                                    <InputComponent
                                                        name="name"
                                                        value={searchParams.name}
                                                        onChange={handleSearchChange}
                                                        className="w-[20vh] h-[40px]"
                                                    />
                                                </div>
                                                <div className=' text-[#70685a] px-2 mr-2'>
                                                    <LabelComponent value={'TEL'} />
                                                    <InputComponent
                                                        name="tel"
                                                        value={searchParams.tel}
                                                        onChange={handleSearchChange}
                                                        className="w-[20vh] h-[40px]"
                                                    />
                                                </div>
                                            </div>
                                            <div className='text-[#70685a] px-2 mr-2 mt-5'>
                                                <LabelComponent value={'住所'} />
                                                <InputComponent
                                                    name="address"
                                                    value={searchParams.address}
                                                    onChange={handleSearchChange}
                                                className="w-[40vh] h-[40px]"
                                                />
                                            </div>
                                        </div>

                                        <div className='flex mt-5'>
                                            <div className=' text-[#70685a] px-2 mr-5 flex flex-col justify-end'>
                                                <label className="text-[#70685a] text-[20px] block text-center pb-2">この条件で</label>
                                            </div>
                                            <div className=' text-[#70685a] px-2 mr-2 flex flex-col justify-end'>
                                                <button
                                                    type="submit" 
                                                    style={{ display: 'flex', alignItems: 'end' }}
                                                    className="flex align-end w-20 px-3 py-2 font-bold rounded-md tracking-wide text-[#655b4d] justify-center text-[] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none"
                                                >
                                                    検索
                                                </button>
                                            </div>
                                            <div className=' text-[#70685a] px-2 mr-5 flex flex-col justify-end'>
                                                <label className="text-[#70685a] mb-2 block text-center pb-13">(and条件)</label>
                                            </div>
                                        </div>

                                    </form>
                                </div>

                                <div className='mt-5 pb-20 w-full flex'>
                                    <div style={{ width: '100%', overflow: 'auto' }} >
                                        <table className='text-center w-full' style={Table}>
                                            <thead>
                                                <tr>
                                                    <th style={Th}>ID</th>
                                                    <th style={Th}>氏名</th>
                                                    <th style={Th}>カタカナ名</th>
                                                    <th style={Th}>TEL</th>
                                                    <th  style={Th}className='flex justify-center'>
                                                        <label className='flex flex-col justify-center'>住所詳細</label>
                                                        {/* <svg className='h-10' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight">
                                                            <path d="m10 17 5-5-5-5z"></path>
                                                        </svg> */}
                                                    </th>
                                                    <th style={Th}>契機</th>
                                                    <th style={Th}>ショップ</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {customers.map(customer => (
                                                    <tr key={customer.id} onClick={()=>selectCustomer(customer.id-1)} className='cursor-pointer'>
                                                        <td style={Td}>{customer.id}</td>
                                                        <td style={Td} >{customer.full_name}</td>
                                                        <td style={Td}>{customer.katakana_name}</td>
                                                        <td style={Td}>{customer.phone_number}</td>
                                                        <td style={Td}> {customer.address} </td>
                                                        <td style={Td}>{customer.opportunity}</td>
                                                        <td style={Td}>{customer.shop}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            {/*===== Customer table====== */}

                            <div className=" space-y-6" >
                                {/* /==========================================/ */}
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">顧客</label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="w-full h-11 text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">{customerName}</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">来店種別 </label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="visit_type" onChange={handleChange} value={salesSlipData.visit_type} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">銘柄・種別 </label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="brand_type" onChange={handleChange} value={salesSlipData.brand_type} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex mt-10'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-11 py-1 !mb-0">日付</label>
                                    </div>

                                    <div style={{ width: '35%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="trading_date" type="text" value={salesSlipData.trading_date}  className="w-full text-[#70685a] border border-[#70685a] px-4 py-1 text-[20px] outline-[#70685a]" readOnly />
                                    </div>
                                    <div style={{ width: '5%', flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                        <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                            <div style={{ position: 'relative' }}>
                                                <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                                <input type="date" id="trading_date" name="trading_date" onChange={handleChange} style={{ position: 'absolute', left: '0', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">買取担当 </label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="purchase_staff" onChange={handleChange} value={salesSlipData.purchase_staff} type="text"  className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                </div>

                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">販売店名 </label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="store_name" onChange={handleChange} value={salesSlipData.store_name} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                </div>
                                {/* sales table */}
                                <div className='mt-5 pb-20 w-full flex'>
                                    <div style={{ width: '100%', overflow: 'auto' }} >
                                        <table className='text-center w-full' style={Table}>
                                            <thead>
                                                <tr>
                                                    <th style={Th}>ID</th>
                                                    <th style={Th}>商品種別1</th>
                                                    <th style={Th}>商品種別2</th>
                                                    <th style={Th}>商品</th>
                                                    <th  style={Th}>数</th>
                                                    <th style={Th}>買取額</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {totalSalesSlipData.map((salesData,Index) => (
                                                    <tr key={Index} >
                                                        <td style={Td}>{Index}</td>
                                                        <td style={Td} >{salesData.product_type_one}</td>
                                                        <td style={Td}>{salesData.product_type_two}</td>
                                                        <td style={Td}>{salesData.product}</td>
                                                        <td style={Td}> {salesData.quantity} </td>
                                                        <td style={Td}>{salesData.purchase_price}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">商品種別1 </label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <select id="product_type_one" name="product_type_one" onChange={handleChange} value={salesSlipData.product_type_one} required className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                            <option value="" ></option>
                                            {product1.map((product,Index) => (
                                                <option key={Index} value={product.category}>{product.category}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">商品種別2</label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <select id="product_type_two" name="product_type_two" onChange={handleChange} value={salesSlipData.product_type_two} required className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                        <option value="" ></option>
                                            {product2.map((product,Index) => (
                                                <option key={Index} value={product.category}>{product.category}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">買取額</label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="purchase_price" onChange={handleChange} value={salesSlipData.purchase_price || ''} required type="number" className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                </div>
                                {(salesSlipData.product_type_one == "貴金属") && (
                                <div>
                                        <div className='flex'>
                                            <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">金種</label>
                                            </div>
                                            <div style={{ width: '45%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <input name="metal_type" onChange={handleChange} value={salesSlipData.metal_type} type="text" className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
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
                                                <input name="price_per_gram" onChange={handleChange} value={salesSlipData.price_per_gram} type="number" className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                            </div>
                                            <div style={{ width: '25%', flexDirection: 'column', }} className='ml-5'>
                                                <label className="text-[#70685a] font-bold mb-2 block text-left ml-10 py-1 !mb-0">*(貴金属)</label>
                                            </div>
                                        </div>
                                    </div>
                                 )}
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">商品</label>
                                    </div>
                                    <div style={{ width: '60%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="product" onChange={handleChange} value={salesSlipData.product} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">数</label>
                                    </div>
                                    <div style={{ width: '35%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="quantity" onChange={handleChange} value={salesSlipData.quantity} type="number" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                    <div style={{ width: '35%'}} className='flex justify-center'>
                                            <button name='add_item' type="button" onClick={addItem} className="w-[150px] !px-3 h-11 font-bold text-[white] border border-[#70685a] tracking-wide rounded-lg justify-center t bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                                            アイテム追加
                                            </button>
                                    </div>
                                </div>
                                {/* ------------------------- HR -------------------------*/}
                                <hr className="my-5 font-bold  border-gray-400" />
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">売上額</label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="sales_amount" onChange={handleChange} value={salesSlipData.sales_amount || ''} required type="number" className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">送料 </label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="shipping_cost" onChange={handleChange} value={salesSlipData.shipping_cost || ''} required type="number" className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">卸し先 </label>
                                    </div>
                                    <div style={{ width: '60%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="wholesale_buyer" onChange={handleChange} value={salesSlipData.wholesale_buyer} required type="text" className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-11 py-1 !mb-0">卸日</label>
                                    </div>

                                    <div style={{ width: '35%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="wholesale_date" type="text" value={salesSlipData.wholesale_date} required className="w-full text-[#70685a] border border-[#70685a] px-4 py-1 text-[20px] outline-[#70685a]" readOnly />
                                    </div>
                                    <div style={{ width: '5%', flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                        <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                            <div style={{ position: 'relative' }}>
                                                <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                                <input type="date" id="wholesale_date" name="wholesale_date" onChange={handleChange} style={{ position: 'absolute', left: '0', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-11 py-1 !mb-0">入金日</label>
                                    </div>

                                    <div style={{ width: '35%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="payment_date" type="text" value={salesSlipData.payment_date} required className="w-full text-[#70685a] border border-[#70685a] px-4 py-1 text-[20px] outline-[#70685a]" readOnly />
                                    </div>
                                    <div style={{ width: '5%', flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                        <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                            <div style={{ position: 'relative' }}>
                                                <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                                <input type="date" id="payment_date" name="payment_date" onChange={handleChange} style={{ position: 'absolute', left: '0', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /==========================================/ */}
                                <div className='flex justify-between !mt-5 pb-10' >

                                    <div className="!mt-5  flex" style={{ marginBottom: '10px', width: '80%', paddingLeft: '20%' }}>
                                        <div className='w-full flex justify-center text-[18px]'>
                                            <button name='sales_create' type="button" onClick={handleSalesSubmit} className="w-[200px] !px-3 h-11 font-bold text-[white] tracking-wide rounded-lg justify-center t bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                                {/* <Link to='/logintimecard'>登録する</Link> */}
                                                登録する
                                            </button>
                                        </div>
                                    </div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end" style={{ flexDirection: 'column', width: '20%' }}><u> <Link to='/salesslip'>キャンセル</Link></u></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SalesSlipCreate1;