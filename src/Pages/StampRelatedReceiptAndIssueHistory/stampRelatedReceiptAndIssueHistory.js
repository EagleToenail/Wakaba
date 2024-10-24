import React, { useState, useEffect } from 'react';
import { useNavigate, } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css';
import dateimage from '../../Assets/img/datepicker.png';
// import StampSheet from '../../Assets/img/stampsheet.png'
// import LetterPack from '../../Assets/img/letterpack.png'
// import StampRose from '../../Assets/img/stamprose.png'
// import PostCard from '../../Assets/img/postcard.png'
// import LabelComponent from '../../Components/Common/LabelComponent';
// import InputComponent from '../../Components/Common/InputComponent';
import axios from 'axios';


const StampRelatedReceiptAndIssueHistory = () => {
    // const title = 'タイトルタイトル';

    const navigate = useNavigate();
    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    // const Th = {
    //     border: '1px solid #70685a',
    //     borderCollapse: 'collapse',
    //     color: '#70685a',
    //     fontSize: '15px'
    // };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
    };

    const [stampHistory, setStampHistory] = useState([]);
    //fetch sheet data from database
    useEffect(() => {
        const fetchData = async () => {
    
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const response = await axios.get(`${wakabaBaseUrl}/stampshippinghistory`);
            setStampHistory(response.data);
        console.log('stampHistory',response.data);
        };
        fetchData();
        }, []);
        const date = new Date();
    // Convert to Japanese time zone (UTC+9)
    const options = { timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit' };
    const jpDate = new Date(date.toLocaleString('en-US', options));

    // Get year, month, and day in Japanese time zone
    const year = jpDate.getFullYear();
    const month = String(jpDate.getMonth() + 1).padStart(2, '0');
    const day = String(jpDate.getDate()).padStart(2, '0');

    // Calculate last month
    const lastMonthDate = new Date(jpDate);
    lastMonthDate.setMonth(lastMonthDate.getMonth() - 1); // Go to the last month
    const lastYear = lastMonthDate.getFullYear();
    const lastMonth = String(lastMonthDate.getMonth() + 1).padStart(2, '0');

    // Formatted strings
    const yearFormat = `${year}`;                    // Format: Y
    const yearMonthFormat = `${year}-${month}`;      // Format: Y-M
    const yearMonthDayFormat = `${year}-${month}-${day}`; // Format: Y-M-D
    const lastYearMonthFormat = `${lastYear}-${lastMonth}`; // Last month: Y-M

    //fetch data to backend
    const getShippingData = (date) =>{
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        axios.post(`${wakabaBaseUrl}/stampshippinghistory`, {payload:date})
        .then(response => {
                setStampHistory(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching the customer data!", error);
        });
    }
    const getTodayData = ()=> {
        getShippingData(yearMonthDayFormat);
    }
    const getThisMonthData = ()=> {
        getShippingData(yearMonthFormat);
    }
    const getLastMonthData = ()=> {
        getShippingData(lastYearMonthFormat);
    }
    const getThisYearData = ()=> {
        getShippingData(yearFormat);
    }
// set search params
    const [searchParams, setSearchParams] = useState({
        start_date: '',
        end_date: '',
        inorout: '',
        stamp_type: '',
    });

    // Handle input change
    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value
        });
    };

    //search function
    const handleSearch = async(e) => {
        e.preventDefault();
        console.log('searchValues',searchParams)

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        await axios.post(`${wakabaBaseUrl}/stampshippinghistory/search`, { params: searchParams })
        .then(response => {
            setStampHistory(response.data);
        })
        .catch(error => {
            console.error("There was an error searching for customers!", error);
        });
    }
 // ------------------------
    const gotoInboundPage = () => {
        navigate('/stamprelatedinboundapplicationform');
    }  
    const gotoOutboundPage = () => {
        navigate('/stamprelatedinventorylist');
    }  
    const handleDetailClick = (id) => {
        navigate(`/stampshippinghistorydetail/${id}`);
    }
    return (
        <>
            {/* <Titlebar title={title} /> */}
            <div className=" flex flex-col items-center justify-center">
                <div className="w-full ">
                    <div className='stamp-inventory flex justify-around'>
                        <div className='stamp-inventory-one flex justify-around mt-2' style={{ visibility: 'hidden' }}>
                            <button type="button"
                                className="py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">Purple</button>
                            <button type="button"
                                className="ml-10 py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">Purple</button>
                        </div>
                        {/* <div className='mt-2'>
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">日本の切手 ハガキ レターパック  入出庫履歴</h2>
                        </div> */}
                        <div className='stamp-inventory-second flex justify-center mt-2' >
                            <div className='flex'>
                                <button type="button" onClick={gotoInboundPage}
                                    className="mr-10 px-3  py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] hover:bg-[#524c3b] hover:text-white transition-all duration-300">入庫申請</button>
                                <button type="button" onClick={gotoOutboundPage}
                                    className=" mr-3 py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] hover:bg-[#524c3b] hover:text-white transition-all duration-300">出庫申請</button>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex justify-center mt-2' >
                        <button onClick={getThisYearData} className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 h-8 text-[18px] hover:bg-[#524c3b] hover:text-white transition-all duration-300'>今年</button>
                        <button onClick={getThisMonthData}  className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px] hover:bg-[#524c3b] hover:text-white transition-all duration-300'>今月</button>
                        <button onClick={getLastMonthData}  className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px] hover:bg-[#524c3b] hover:text-white transition-all duration-300'>前月</button>
                        <button onClick={getTodayData}  className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px] hover:bg-[#524c3b] hover:text-white transition-all duration-300'>今日まで</button>
                    </div>
                    {/*  */}
                    <div className='safe-money-search flex justify-center'>
                        <div className='flex justify-center mt-2'>
                            <div className='mr-5'>
                                <select name="inorout" value={searchParams.inorout || ''} onChange={handleSearchChange} className="w-40 h-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                    <option value=""></option>
                                    <option value="入庫">入庫</option>
                                    <option value="出庫">出庫</option>
                                </select>
                            </div>
                            <div className='mr-5'>
                                <select name="stamp_type" value={searchParams.stamp_type || ''} onChange={handleSearchChange}   className="w-40 h-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                    <option value=""></option>
                                    <option value="切手シート">切手シート</option>
                                    <option value="切手台紙貼り">切手台紙貼り</option>
                                    <option value="切手バラ">切手バラ</option>
                                    <option value="レ夕一パック">レ夕一パック</option>
                                    <option value="ハガキ">ハガキ</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex justify-center mt-2'>
                            <div className='flex'>
                                <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="start_date" value={searchParams.start_date || ''} type="text"  required className="w-full h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                                </div>
                                <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                    <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                        <div style={{ position: 'relative' }}>
                                            <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                            <input type="date" name="start_date" onChange={handleSearchChange} style={{ position: 'absolute', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' text-[#70685a] px-2 mr-2 flex flex-col justify-center'>
                                <label className="text-[#656565] font-bold mb-2 block text-center text-[20px] !mb-0">~</label>
                            </div>
                            <div className='flex'>
                                <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="end_date" type="text" value={searchParams.end_date || ''} required className="w-full h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                                </div>
                                <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                    <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                        <div style={{ position: 'relative' }}>
                                            <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                            <input type="date" name="end_date" onChange={handleSearchChange}  style={{ position: 'absolute', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-2'>
                            <div className=' text-[#70685a] px-2 mr-5 flex flex-col justify-center'>
                                <label className="text-[#656565] text-[20px] mb-2 block text-center !mb-0">この条件で</label>
                            </div>
                            <div className=' text-[#656565] px-2 mr-2 flex flex-col justify-center'>
                                < button type="button" onClick={handleSearch} className="w-20 h-8 px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white text-[15px] bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                                フィルタリング
                                </button>
                            </div>
                            <div className=' text-[#656565] px-2 mr-5 flex flex-col justify-center'>
                                <label className="text-[#656565] mb-2 block text-center !mb-0">(and検索)</label>
                            </div>
                        </div>

                    </div>


                    {/*  Tabe*/}
                    <div className='w-full pb-20 flex justify-center mt-3' >
                        <div className='w-full' style={{overflow:'auto'}}>
                            <table className=' text-center w-full' style={Table}>
                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th>日付</th>
                                        <th>担当</th>
                                        <th>入出庫</th>
                                        <th>項目</th>
                                        <th>種別</th>
                                        <th>額面総額合計</th>
                                        <th>額面50円以上</th>
                                        <th>額面50円未満</th>
                                        <th>用途/理由他</th>
                                        <th className='w-[50px]'>入出庫申請書</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {stampHistory?.length > 0 && stampHistory.map((history, Index) => (
                                    <tr key={Index}>
                                        <td  style={Td}>{Index + 1}</td>
                                        <td style={Td}>{history.date}</td>
                                        <td style={Td}>{history.in_charge}</td>
                                        <td style={Td}>{history.inorout}</td>
                                        <td style={Td}>{history.stamp_type}</td>
                                        <td style={Td}>{history.stamp_status}</td>
                                        <td style={Td} className='text-right'>￥{(parseInt(history.totalFaceValue || 0)).toLocaleString()}</td>
                                        <td style={Td} className='text-right'>￥{(parseInt(history.five_up_facevalue || 0)).toLocaleString()}</td>
                                        <td style={Td} className='text-right'>￥{(parseInt(history.five_down_facevalue || 0)).toLocaleString()}</td>
                                        <td style={Td}>{history.reason}</td>
                                        <td onClick={() => handleDetailClick(history.id)}>
                                            <div className='flex justify-center'>
                                                    <svg className="w-7 h-7" fill='#70685a' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon" title="ContentCopy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"></path></svg>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>

                            </table></div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default StampRelatedReceiptAndIssueHistory;