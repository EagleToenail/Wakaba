import React,{ useState, useEffect } from 'react';
import {Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
// import Titlebar from '../../Components/Common/Titlebar';
import '../../../Assets/css/showtable.css'
import InputComponent from '../../../Components/Common/InputComponent';
import ButtonComponent from '../../../Components/Common/ButtonComponent';
import dateimage from '../../../Assets/img/datepicker.png';
import LineChart from '../../../Components/Chart/LineChart';


const CustomerVisitRateTrend = () => {
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
        whiteSpace:'nowrap'
    };
    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
        whiteSpace:'nowrap'
    };

    //fetch data to backend
    const getCashRegisterData = (date) =>{
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        axios.post(`${wakabaBaseUrl}/cashregister`, {payload:date})
        .then(response => {

        })
        .catch(error => {
            console.error("There was an error fetching the customer data!", error);
        });
    }

    const [searchParams, setSearchParams] = useState({
        status: '',
        type: '',
        startdate:'',
        enddate:'',
    });
    // Handle input change
    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value
        });
    };
    //get data from start date to end date
    const getPeriodCashRegister = () => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        axios.post(`${wakabaBaseUrl}/cashregisterperiod`, {params: searchParams})
        .then(response => {

        })
        .catch(error => {
            console.error("There was an error fetching the customer data!", error);
        });
    }

    const [activeValue, setActiveValue] = useState('');
    // State to track if the select box is active
    const [isSelectActive, setIsSelectActive] = useState(false);
    const buttonValues = ['3カ月以内の再来店率', 'HPから', 'その他ポステイングから', '顧客から', '紹介から'];

    const handleCategory =(value) =>(e) => {
        e.preventDefault();

        // console.log('vlaue',value)
        setActiveValue(value);
        // console.log('activeValue',activeValue)
        setIsSelectActive(false); // Deactivate select box

        // const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        // if (!wakabaBaseUrl) {
        //     throw new Error('API base URL is not defined');
        // }

        // // console.log(`${wakabaBaseUrl}/sales/filter`);
        // axios.post(`${wakabaBaseUrl}/sales/filter`,{ value: value })
        //     .then(response => {
        //         // console.log(response.data)
        //         setSales(response.data);
        //     })
        //     .catch(error => {
        //         console.error("There was an error fetching the customer data!", error);
        //     });
    };

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " >
                    <div className='safe-money flex justify-around mt-10 '>
                        <div >
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">本部管理画面 顧客来店率推移</h2> 
                        </div>
                    </div>
                    {/*  */}
                    <div className='safe-money-search flex mt-3 justify-center'>
                        <div className='flex justify-center mt-5'>
                            <div className='mr-5'>
                                <select name="katakana_name" className="w-40 h-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                    <option value=""></option>
                                    <option value="オーナ一名">オーナ一名</option>
                                </select>
                            </div>
                            <div className='mr-5'>
                                <select name="store_name"  className="w-40 h-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                    <option value=""></option>
                                    <option value="store">Store</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex justify-center mt-5'>
                            <div className='flex'>
                                <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="startdate" type="text" value={searchParams.startdate || ''} required className="w-full h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                                </div>
                                <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                    <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                        <div style={{ position: 'relative' }}>
                                            <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                            <input type="date" name="startdate" onChange={handleSearchChange} style={{ position: 'absolute', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=' text-[#70685a] px-2 mr-2 flex flex-col justify-center'>
                                <label className="text-[#656565] font-bold mb-2 block text-center text-[20px] !mb-0">~</label>
                            </div>
                            <div className='flex'>
                                <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="enddate" type="text" value={searchParams.enddate || ''} required className="w-full h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                                </div>
                                <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                    <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                        <div style={{ position: 'relative' }}>
                                            <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                            <input type="date" name="enddate" onChange={handleSearchChange} style={{ position: 'absolute', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mr-5 ml-5'>
                                <select name="status" value={searchParams.status || ''} onChange={handleSearchChange} className="w-40 h-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                    <option value=""></option>
                                    <option value="2024">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2026">2027</option>
                                    <option value="2026">2028</option>
                                    <option value="2026">2029</option>
                                    <option value="2026">2030</option>
                                    <option value="2026">2031</option>
                                    <option value="2026">2032</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex justify-center ml-5 mt-5'>
                            <div className=' text-[#656565] px-2 mr-2 flex flex-col justify-center'>
                                < button type="button" className="w-20 h-8 px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white text-[15px] bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                                表示
                                </button>
                            </div>
                        </div>

                    </div>
                    {/*  */}
                    <div className='flex justify-center mt-5' >
                        <button onClick={handleCategory('3カ月以内の再来店率')} className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 h-10 text-[18px]' style={{color: activeValue === buttonValues[0] ? 'white' : 'black', backgroundColor: activeValue === buttonValues[0] ? '#424242' : 'transparent'}}>3カ月以内の再来店率</button>
                        <button  onClick={handleCategory('HPから')} className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px]' style={{color: activeValue === buttonValues[1] ? 'white' : 'black', backgroundColor: activeValue === buttonValues[1] ? '#424242' : 'transparent'}}>HPから</button>
                        <button  onClick={handleCategory('その他ポステイングから')} className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px]' style={{color: activeValue === buttonValues[2] ? 'white' : 'black', backgroundColor: activeValue === buttonValues[2] ? '#424242' : 'transparent'}}>その他/ポステイングから</button>
                        <button  onClick={handleCategory('顧客から')} className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px]' style={{color: activeValue === buttonValues[3] ? 'white' : 'black', backgroundColor: activeValue === buttonValues[3] ? '#424242' : 'transparent'}}>顧客から</button>
                        <button  onClick={handleCategory('紹介から')} className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px]' style={{color: activeValue === buttonValues[4] ? 'white' : 'black', backgroundColor: activeValue === buttonValues[4] ? '#424242' : 'transparent'}}>紹介から</button>
                    </div>
                    {/*  chart*/}
                    <div className=' pb-20 flex justify-center mt-10' >
                        <div className='w-full flex justify-center'>
                            <div className='w-[80%]'>
                                <LineChart/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerVisitRateTrend;