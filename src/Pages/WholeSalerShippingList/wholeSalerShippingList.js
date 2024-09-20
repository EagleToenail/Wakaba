import React, { useState,useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import { useNavigate} from 'react-router-dom';
import '../../Assets/css/showtable.css';
import '../../Assets/css/firstTd.css';
import '../../Assets/css/lastTd.css';

import axios from 'axios';
import { useSelector } from 'react-redux';
import LabelComponent from '../../Components/Common/LabelComponent';
import InputComponent from '../../Components/Common/InputComponent';
import dateimage from '../../Assets/img/datepicker.png';


const WholeSalerShippingList = () => {
    // const title = 'タイトルタイトル';
    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    const Th = {
        whiteSpace:'nowrap',
        paddingLeft:'10px'
    };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace:'nowrap'
    };

    const navigate = useNavigate();

    const data = useSelector(state => state.data);
    const salesDataIds = data.data;
    console.log('salesDataIds',salesDataIds);

    const [wholeSalesPurchase, setWholeSalesPurchase] = useState([]);

    const [editIndex, setEditIndex] = useState(-1);
    const [editedRow, setEditedRow] = useState({ 
        expected_deposite_date: '',
        deposite_date: '',
        final_assessment_amount: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedRow({ ...editedRow, [name]: value });
    };

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditedRow(wholeSalesPurchase[index]); // Populate the input fields with the selected row's data
    };

    const handleSaveClick = () => {
        const updatedData = wholeSalesPurchase.map((row, index) =>
            index === editIndex ? { ...row, ...editedRow } : row
        );
        setWholeSalesPurchase(updatedData);
        setEditIndex(-1); // Exit edit mode
        setEditedRow({ 
            product_status:'',
            shipper: '',
            shipper_manager: '',
            rank: '',
            assessment_date: '',
            product_price: '',
            highest_estimate_price: '',
            highest_estimate_vendor: '',
         }); // Reset editedRow state
    };

    const handleCancelClick = () => {
        setEditIndex(-1);
        setEditedRow({ 
            product_status:'',
            shipper: '',
            shipper_manager: '',
            rank: '',
            assessment_date: '',
            product_price: '',
            highest_estimate_price: '',
            highest_estimate_vendor: '',
         }); // Reset editedRow state
    };


    useEffect(() => {
        const fetchSalesData = async () => {
          if (salesDataIds !== 'Initial Data' && salesDataIds.length !== 0) {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            
            if (!wakabaBaseUrl) {
              throw new Error('API base URL is not defined');
            }
            console.log('getData');
            try {
              // Create an array of promises
              const promises = salesDataIds.map((salesId) =>
                axios.post(`${wakabaBaseUrl}/sales/getSalesById`, { id: salesId })
              );
    
              // Wait for all promises to resolve
              const responses = await Promise.all(promises);
              
              // Extract data from responses and set the state
              const salesData = responses.map(response => response.data);
              setWholeSalesPurchase(salesData);
              // console.log('salesdata========', salesData);
            } catch (error) {
              console.error("There was an error fetching the customer data!", error);
            }
          }
        };
    
        fetchSalesData();
      }, [salesDataIds]);

    const [date, setDate] = useState('');
    const handleDateChange = (event) => {
        setDate(event.target.value); // Update the date state with the selected date
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

    const [searchParams, setSearchParams] = useState({
        shipping_date: '',
        shipping_address: '',
        product_status: '',
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value
        });
    };
    //search function
    const handleSearch = (e) => {
        e.preventDefault();
        console.log('searchValues',searchParams)
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        console.log('url', wakabaBaseUrl);
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        axios.post(`${wakabaBaseUrl}/sales/searchsaleslist`, { params: searchParams })
        .then(response => {
            setWholeSalesPurchase(response.data);
        })
        .catch(error => {
            console.error("There was an error searching for customers!", error);
        });
    }

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <div className="bg-[trasparent] font-[sans-serif]">
                <div className='flex justify-center'>
                    <div className="w-full pt-3">


                        <div className='flex justify-around mt-10' >
                            <h2 className="text-[#70685a] text-center text-2xl flex justify-center">業者卸発送一覧</h2>
                        </div>

                        {/*  */}
                        <div className='whole-saler-shipping flex mt-3 justify-center  pr-40 pl-40'>
                            <div className='flex justify-center mt-5'>
                                <div className=' px-2 mr-2 text-center font-bold'>
                                    <LabelComponent value={'発送日'} className='flex justify-center' />
                                    <div>
                                        <div className='flex'>
                                            <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <input name="shipping_date" type="text" value={searchParams.shipping_date} required className="w-40 h-11 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                                            </div>
                                            <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                                <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                                    <div style={{ position: 'relative' }}>
                                                        <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                                        <input type="date" name="shipping_date" onChange={handleChange} style={{ position: 'absolute', left: '0', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center mt-5'>
                                <div className=' text-[#70685a] px-2 mr-2 font-bold'>
                                    <div className='text-center'>
                                        <LabelComponent value={'卸業者'} className='text-center'/>
                                    </div>
                                    <select name="shipping_address" value={searchParams.shipping_address} onChange={handleChange} className="w-full h-11 text-[#70685a] text-[15px] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                        <option value="" disabled></option>
                                        {allVendors && allVendors.map((vendor, index) => (
                                            <option key={index} value={vendor.vendor_name}>{vendor.vendor_name || ""}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className=' text-[#70685a] px-2 mr-2 font-bold'>
                                    <div className='text-center'>
                                        <LabelComponent value={'ステータス'} className='text-center'/>
                                    </div>
                                    <select name="product_status" value={searchParams.product_status || ''} onChange={handleChange} className="w-full h-11 text-[#70685a] text-[15px] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                        <option value="" disabled></option>
                                        <option value="申請中">申請中</option>
                                        <option value="発送中">発送中</option>
                                        <option value="約定済">約定済</option>
                                        <option value="約定済＋返送依頼">約定済＋返送依頼</option>
                                        <option value="返送依頼">返送依頼</option>
                                        <option value="入金待ち">入金待ち</option>
                                        <option value="入金済">入金済</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex justify-center mt-5'>
                                <div className=' text-[#70685a] px-2 mr-5 flex flex-col justify-end'>
                                    <label className="text-[#70685a] text-[20px] block text-center pb-2">この条件で</label>
                                </div>
                                <div className=' text-[#70685a] px-2 mr-2 flex flex-col justify-end'>
                                    < button type="button" onClick={handleSearch} style={{ display: 'flex', alignItem: 'end' }} className="flex align-end w-20 px-3 py-2 font-bold rounded-md tracking-wide text-[#665b4c] justify-center text-white bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                                        検索
                                    </button>
                                </div>
                                <div className=' text-[#70685a] px-2 mr-5 flex flex-col justify-end'>
                                    <label className="text-[#70685a] mb-2 block text-center pb-13">(and検索)</label>
                                </div>
                            </div>
                        </div>

                        {/*  Tabe*/}
                        <div className='mt-10 pb-20 w-full flex'>
                            <div style={{ width: '100%', overflow: 'auto' }} >
                                <table className='text-center w-full' style={Table}>
                                    <thead>
                                        <tr>
                                            <th style={Th}></th>
                                            <th style={Th}>ステー夕ス</th>
                                            <th style={Th}>卸し先</th>
                                            <th style={Th}>発送日</th>
                                            <th style={Th}>わかばNo.(範囲)</th>
                                            <th style={Th}>仮査定合計額</th>
                                            <th style={Th}>発送者</th>
                                            <th style={Th}>入金予定日</th>
                                            <th style={Th}>入金日</th>
                                            <th style={Th}>本査定合計額</th>
                                            <th style={Th}>送り状</th>
                                            <th style={Th}>買取依頼書</th>
                                            <th style={Th}>{editIndex === -1 ? '編集する' : 'セーブ'}</th>
                                            <th style={Th}>{editIndex === -1 ? '' : 'キャンセル'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(wholeSalesPurchase && wholeSalesPurchase.length !==0) && wholeSalesPurchase.map((saleData,Index) => (
                                            <tr key={Index}>
                                                <td style={Td}>{Index +1}</td>
                                                <td style={Td}>{saleData.product_status || ''}</td>
                                                <td style={Td}>{saleData.shipping_address || ''}</td>
                                                <td style={Td}>{saleData.shipping_date || ''}</td>
                                                <td style={Td}>{saleData.id || ''}</td>
                                                <td style={Td}>{saleData.highest_estimate_price || ''}</td>
                                                <td style={Td}>{saleData.shipper || ''}</td>
                                                <td style={Td}>
                                                    {editIndex === Index ?(
                                                        <InputComponent type="date" name='deposite_date' value={editedRow.deposite_date || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                                    ):(saleData.deposite_date || '')}
                                                </td>
                                                <td style={Td}>
                                                    {editIndex === Index ?(
                                                        <InputComponent type="date" name='expected_deposite_date' value={editedRow.expected_deposite_date || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                                    ):(saleData.expected_deposite_date || '')}
                                                </td>
                                                <td style={Td}>
                                                    {editIndex === Index ?(
                                                        <InputComponent name='final_assessment_amount' value={editedRow.final_assessment_amount ||''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                                    ):(saleData.final_assessment_amount || '')}
                                                </td>
                                                <td style={Td} >  
                                                    <div className='flex justify-center'>
                                                        <div className='bg-[#a6a6a6] w-10 h-5 flex justify-center ml-3 rounded-md'>
                                                            <svg focusable="false" aria-hidden="true" data-testid="ArrowRightAltIcon" fill="#fefefe" className='ml-2' title="ArrowRightAlt"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path></svg>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={Td}>
                                                    <div className='flex justify-center'>
                                                        <div className='w-5 h-3 ml-3 mb-1'>
                                                            <svg className=" " fill='#70685a' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon" title="ContentCopy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"></path></svg>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={Td}>
                                                {editIndex === Index ? (
                                                    <div>
                                                        <button onClick={() => handleSaveClick(Index)} className='w-7'>
                                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                                                        </button>
                                                    </div>
                                                    ) : (
                                                    <div>
                                                        <button onClick={() => handleEditClick(Index)} className='w-7'>
                                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                                                        </button>
                                                    </div>
                                                    )}
                                                </td>
                                                <td>
                                                    {editIndex === Index ? (
                                                    <div>
                                                        <button onClick={() => handleCancelClick(Index)} className='w-7'>
                                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                                        </button>
                                                    </div>
                                                    ) : (''
                                                    )}
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

export default WholeSalerShippingList;