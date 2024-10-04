import React, { useState, useEffect } from 'react';
import { Link ,useNavigate,useParams} from 'react-router-dom';
import axios from 'axios';
// import InputComponent from '../../Components/Common/InputComponent';
// import ButtonComponent from '../../Components/Common/ButtonComponent';
// import LabelComponent from '../../Components/Common/LabelComponent';
import dateimage from '../../Assets/img/datepicker.png';
import DateAndTime from '../../Components/Common/PickData';

// import { useDispatch } from 'react-redux';
// import { setData } from '../../redux/sales/actions';


// THIS PAGE SHOULD HAVE VERTICAL SCROLL BAR : Onishi Comment Aug-22 2024

const SalesSlipUpdate = () => {


    const [salesSlipData, setSalesSlipData] = useState({
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
        shipping_address:'',
        shipping_date:'',
        deposit_date:'',
        // ----yahooacution
        successful_bider:'',
        auction_purchase_price: '',
        auction_bider_name: '',
        auction_bider_katakana_name: '',
        auction_bider_tel: '',
        auction_bider_address: '',
        auction_bider_evaluation: '',
    });

    const { id } = useParams();

    //get sales Data
    useEffect(() => {
        const fetchSalesData = async(categoryOne) => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }

            // console.log(`${wakabaBaseUrl}/sales/getSalesById`);
            await axios.get(`${wakabaBaseUrl}/sales/getSalesById/${id}`)
                .then(response => {
                    // console.log("123",response.data)
                    const salesData = response.data;
                    setSalesSlipData(salesData);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }
        fetchSalesData();
    }, []);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setSalesSlipData({
            ...salesSlipData,
            [e.target.name]: e.target.value,
        });

    };


    const [customers, setCustomers] = useState([]);
    const customerId = salesSlipData.customer_id;
    useEffect(() => {

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // const customerId = salesSlipData.customer_id;
        // console.log('aaa',customerId)
        if(customerId) {
            axios.get(`${wakabaBaseUrl}/customer/getCustomerById/${customerId}`)
            .then(response => {
                // console.log("data", response.data)
                setCustomers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
        }

    }, [customerId]);


    const [error, setError] = useState(null);
    const handlePurchaseSubmit = async () => {
        if(salesSlipData && salesSlipData.product_status === '約定済' || salesSlipData.product_status === 'オークション発送済') {
            setError('このデータにはアクセスできません.');
        } else {
            console.log('success',salesSlipData.product_status)
            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
    
                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }
                await axios.post(`${wakabaBaseUrl}/sales/updateSales`,{id,salesSlipData});
                //console.log('Response:', response.data);
                // Handle successful response here
                navigate('/salesslip'); // Navigate to the profile page after closing the modal
            } catch (error) {
                console.error('Error submitting form:', error);
                // Handle error here
            }
        }

    };
    
    return (
        <>
            <DateAndTime />
            <div className="bg-[trasparent] font-[sans-serif] mt-12">
                <div className=" flex flex-col items-center justify-center px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '50em' }}>
                        <div className=" rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">売上票編集</h2>

                            <div className=" space-y-3 mt-5" >
                                {/* /==========================================/ */}
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">顧客</label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="w-full h-11 text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">{customers.full_name || ''}</label>
                                    </div>
                                </div>
                                {/* new */}
                                {/* <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">来店種別 </label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="visit_type" onChange={handleChange} value={salesSlipData.visit_type || ''} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]"  readOnly/>
                                    </div>
                                </div> */}
                                {/* new */}
                                {/* <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">銘柄・種別 </label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="brand_type" onChange={handleChange} value={salesSlipData.brand_type || ''} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" readOnly/>
                                    </div>
                                </div> */}
                                {/* new */}
                                <div className='flex mt-10'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-11 py-1 !mb-0">日付</label>
                                    </div>

                                    <div style={{ width: '35%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="trading_date" type="text" value={salesSlipData.trading_date || ''}  className="w-full text-[#70685a] border border-[#70685a] px-4 py-1 text-[20px] outline-[#70685a]" readOnly />
                                    </div>
                                    <div style={{ width: '5%', flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                        <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                            <div style={{ position: 'relative' }}>
                                                <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                                <input type="date" id="trading_date" name="trading_date" onChange={handleChange} style={{ position: 'absolute', left: '0', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} readOnly/>
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
                                        <input name="purchase_staff" onChange={handleChange} value={salesSlipData.purchase_staff || ''} type="text"  className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" readOnly/>
                                    </div>
                                </div>

                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">販売店名 </label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="store_name" onChange={handleChange} value={salesSlipData.store_name || ''} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" readOnly/>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">商品種別1 </label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="product_type_one" onChange={handleChange} value={salesSlipData.product_type_one || ''} required className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]" readOnly/>
                                            {/* <option value="" ></option>
                                            {(product1s && product1s.length !== 0) && product1s.map((product,Index) => (
                                                <option key={Index} value={product.category}>{product.category}</option>
                                            ))}
                                        </select> */}
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">商品種別2</label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="product_type_two" onChange={handleChange} value={salesSlipData.product_type_two || ''} required className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]" readOnly/>
                                        {/* <option value="" ></option>
                                            {(product2s && product2s !== 0 ) && product2s.map((product,Index) => (
                                                <option key={Index} value={product.category}>{product.category}</option>
                                            ))}
                                        </select> */}
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">買取額</label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="purchase_price" onChange={handleChange} value={salesSlipData.purchase_price || ''} required type="number" className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" readOnly/>
                                    </div>
                                </div>
                                {(salesSlipData.product_type_one === "貴金属") && (
                                <div>
                                        <div className='flex'>
                                            <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">金種</label>
                                            </div>
                                            <div style={{ width: '45%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <input name="metal_type" onChange={handleChange} value={salesSlipData.metal_type || ''} type="text" className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" readOnly/>
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
                                                <input name="price_per_gram" onChange={handleChange} value={salesSlipData.price_per_gram || ''} type="number" className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" readOnly/>
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
                                        <input name="product" onChange={handleChange} value={salesSlipData.product || ''} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" readOnly/>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">数</label>
                                    </div>
                                    <div style={{ width: '35%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="quantity" onChange={handleChange} value={salesSlipData.quantity || ''} type="number" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" readOnly/>
                                    </div>
                                    {/* <div style={{ width: '35%'}} className='flex justify-center'>
                                            <button name='add_item' type="button" onClick={addItem} className="w-[150px] !px-3 h-11 font-bold text-[white] border border-[#70685a] tracking-wide rounded-lg justify-center t bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                                            アイテム追加
                                            </button>
                                    </div> */}
                                </div>
                                {/* ------------------------- HR -------------------------*/}
                                <hr className="my-5 font-bold  border-gray-400" />
                                {/* --------------------------------yahooAuction---------------------------------- */}
                                {(salesSlipData && salesSlipData.length !== 0 && salesSlipData.shipping_address === 'オークション') &&
                                    <div className='w-full space-y-3'>
                                        {/* new */}
                                        <div className='flex'>
                                            <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">オークション買取額</label>
                                            </div>
                                            <div style={{ width: '60%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <input name="successful_bider" onChange={handleChange} value={salesSlipData.successful_bider || ''} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                            </div>
                                        </div>
                                        {/* new */}
                                        <div className='flex'>
                                            <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">落札額</label>
                                            </div>
                                            <div style={{ width: '60%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <input name="auction_purchase_price" onChange={handleChange} value={salesSlipData.auction_purchase_price || ''} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                            </div>
                                        </div>
                                        {/* new */}
                                        <div className='flex'>
                                            <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">お名前</label>
                                            </div>
                                            <div style={{ width: '60%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <input name="auction_bider_name" onChange={handleChange} value={salesSlipData.auction_bider_name || ''} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                            </div>
                                        </div>
                                        {/* new */}
                                        <div className='flex'>
                                            <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">カナ</label>
                                            </div>
                                            <div style={{ width: '60%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <input name="auction_bider_katakana_name" onChange={handleChange} value={salesSlipData.auction_bider_katakana_name || ''} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                            </div>
                                        </div>
                                        {/* new */}
                                        <div className='flex'>
                                            <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">TEL</label>
                                            </div>
                                            <div style={{ width: '60%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <input name="auction_bider_tel" onChange={handleChange} value={salesSlipData.auction_bider_tel || ''} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                            </div>
                                        </div>
                                        {/* new */}
                                        <div className='flex'>
                                            <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">住所</label>
                                            </div>
                                            <div style={{ width: '60%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <input name="auction_bider_address" onChange={handleChange} value={salesSlipData.auction_bider_address || ''} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                            </div>
                                        </div>
                                        {/* new */}
                                        <div className='flex'>
                                            <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">評価</label>
                                            </div>
                                            <div style={{ width: '60%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <input name="auction_bider_evaluation" onChange={handleChange} value={salesSlipData.auction_bider_evaluation || ''} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                            </div>
                                        </div>
                                    </div>
                                 }
                                {/* ------------------------------------------------------------------------------ */}
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
                                        <input name="shipping_address" onChange={handleChange} value={salesSlipData.shipping_address || ''} required className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]" readOnly/>
                                            {/* <option value="" ></option>
                                            {(categoryVendors && categoryVendors !== 0 ) && categoryVendors.map((vendor,Index) => (
                                                <option key={Index} value={vendor.vendor_name}>{vendor.vendor_name}</option>
                                            ))}
                                        </select> */}
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-11 py-1 !mb-0">卸日</label>
                                    </div>

                                    <div style={{ width: '35%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="shipping_date" type="text" value={salesSlipData.shipping_date || ''} required className="w-full text-[#70685a] border border-[#70685a] px-4 py-1 text-[20px] outline-[#70685a]" readOnly />
                                    </div>
                                    <div style={{ width: '5%', flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                        <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                            <div style={{ position: 'relative' }}>
                                                <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                                <input type="date" name="shipping_date" onChange={handleChange} style={{ position: 'absolute', left: '0', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
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
                                        <input name="deposit_date" type="text" value={salesSlipData.deposit_date || ''} required className="w-full text-[#70685a] border border-[#70685a] px-4 py-1 text-[20px] outline-[#70685a]" readOnly />
                                    </div>
                                    <div style={{ width: '5%', flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                        <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                            <div style={{ position: 'relative' }}>
                                                <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                                <input type="date" id="deposit_date" name="deposit_date" onChange={handleChange} style={{ position: 'absolute', left: '0', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* /==========================================/ */}
                                <div className='flex justify-between !mt-5 pb-5' >

                                    <div className="!mt-5  flex" style={{ marginBottom: '10px', width: '80%', paddingLeft: '20%' }}>
                                        <div className='w-full flex justify-center text-[18px]'>
                                            <button name='sales_create' type="button" onClick={handlePurchaseSubmit} className="w-[200px] !px-3 h-11 font-bold text-[white] tracking-wide rounded-lg justify-center t bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                                顧客に確認する
                                            </button>
                                        </div>
                                    </div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end" style={{ flexDirection: 'column', width: '20%' }}><u> <Link to='/salesslip'>キャンセル</Link></u></label>
                                </div>
                                {error && <div className="text-red-500 flex justify-center">{error}</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SalesSlipUpdate;