import {React, useState , useEffect} from 'react';
import {Link ,useNavigate} from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css';
import dateimage from '../../Assets/img/datepicker.png';
import InputComponent from '../../Components/Common/InputComponent';

import axios from 'axios';

const MonthlyIncome = () => {
    // const title = 'タイトルタイトル';
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center',

    };
    const Th = {
        whiteSpace:'nowrap',
        paddingLeft:'10px'
    };
    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
        whiteSpace:'nowrap'
    };

    const [startdate, setStartDate] = useState('');

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value); // Update the date state with the selected date
    };

    const [enddate, setEndDate] = useState('');

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value); // Update the date state with the selected date
    };

    //got to cashbook
    const gotoCashBook = ()=> {
        navigate('/safemoney');
    }
    //got to cashbook
    const gotoDepositeAndWithdrawl = ()=> {
        navigate('/withdrawbankatm');
    }

    //fetch data from safemoney database
    const [monthlyIncome, setMonthlyIncome] = useState([]);

    const [editIndex, setEditIndex] = useState(-1);
    const [editedRow, setEditedRow] = useState({ 
        total_withdrawal:'',
        total_purchase_price: '',
        safe_deposite_extra:'',
        ten_thousand: '',
        five_thousand: '',
        one_thousand: '',
        five_hundred: '',
        one_hundred: '',
        fifty: '',
        ten: '',
        five: '',
        one: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedRow({ ...editedRow, [name]: value });
    };

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditedRow(monthlyIncome[index]); // Populate the input fields with the selected row's data
    };

    const handleSaveClick = () => {
        const updatedData = monthlyIncome.map((row, index) =>
            index === editIndex ? { ...row, ...editedRow } : row
        );
        setMonthlyIncome(updatedData);
        setEditIndex(-1); // Exit edit mode
        setEditedRow({ 
            total_withdrawal:'',
            total_purchase_price: '',
            safe_deposite_extra:'',
            ten_thousand: '',
            five_thousand: '',
            one_thousand: '',
            five_hundred: '',
            one_hundred: '',
            fifty: '',
            ten: '',
            five: '',
            one: '',
        }); // Reset editedRow state
        sendMonthlyIncomeData();
    };

    const handleCancelClick = () => {
        setEditIndex(-1);
        setEditedRow({ 
            total_withdrawal:'',
            total_purchase_price: '',
            safe_deposite_extra:'',
            ten_thousand: '',
            five_thousand: '',
            one_thousand: '',
            five_hundred: '',
            one_hundred: '',
            fifty: '',
            ten: '',
            five: '',
            one: '',
        }); // Reset editedRow state
    };

    const [userData, setUserData] = useState([]);
    const userId = localStorage.getItem('userId');
    if (!userId) {
      navigate('/');
    }
    useEffect(() => {
  
      const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
  
      if (!wakabaBaseUrl) {
        throw new Error('API base URL is not defined');
      }
  
      axios.post(`${wakabaBaseUrl}/user/getUserById`, { userId })
        .then(response => {
          console.log("dataMonthly", response.data.store_name)
          setUserData(response.data);
          getMonthlyData(response.data.store_name);
          if (!response.data) {
            navigate('/');
          }
        })
        .catch(error => {
          console.error("There was an error fetching the customer data!", error);
        });
    }, [userId]);
  const getMonthlyData = (storename) => {
    // useEffect( () => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        const storeName = storename;
         axios.post(`${wakabaBaseUrl}/monthlyincome`,{storeName})
            .then(response => {
                // console.log(response.data)
                setMonthlyIncome(response.data);
                console.log('monthy income',response.data)
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    // }, []);
    }
//send data to backend
    const sendMonthlyIncomeData = () =>{
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        console.log('monthlyIncome',monthlyIncome);
        axios.post(`${wakabaBaseUrl}/monthlyincome/update`, {payload:monthlyIncome})
        .then(response => {
            setMonthlyIncome(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching the customer data!", error);
        });
    }
//fetch data to backend
    const getMonthlyIncomeData = (date) =>{
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        axios.post(`${wakabaBaseUrl}/monthlyincomefordate`, {payload:date, storeName:userData.store_name})
        .then(response => {
            setMonthlyIncome(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching the customer data!", error);
        });
    }

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


    const getTodayData = ()=> {
        getMonthlyIncomeData(yearMonthDayFormat);
    }
    const getThisMonthData = ()=> {
        getMonthlyIncomeData(yearMonthFormat);
    }
    const getLastMonthData = ()=> {
        getMonthlyIncomeData(lastYearMonthFormat);
    }
    const getThisYearData = ()=> {
        getMonthlyIncomeData(yearFormat);
    }
    //get data from start date to end date
    const getPeriodMontlyIncome = () => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        axios.post(`${wakabaBaseUrl}/monthlyincomeperiod`, {start:startdate,end:enddate , storeName:userData.store_name})
        .then(response => {
            setMonthlyIncome(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching the customer data!", error);
        });
    }

    return (
        <>
            {/* <Titlebar title={title} /> */}
                <div className='monthly-income flex justify-around mt-2'>
                    <div className='monthly-income-first flex'>
                        <button type="button" onClick={()=>getThisMonthData()}
                            className="mr-10  py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] hover:bg-[#524c3b] hover:text-white transition-all duration-300">当月分表示</button>
                        <button type="button" onClick={()=>getTodayData()}
                            className=" mr-3 py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] hover:bg-[#524c3b] hover:text-white transition-all duration-300">本日分表示</button>
                    </div>
                    {/* <div className='flex justify-center'>
                        <h2 className="text-[#656565] text-center text-2xl font-bold flex justify-center">月次収支報告書&nbsp;一覧</h2>
                    </div> */}
                    <div className='monthly-income-second flex justify-around' style={{display:'none'}}>
                        <button type="button" 
                            className="  py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">当月分表示</button>
                        <button type="button" 
                            className="ml-10 py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">本日分表示</button>
                    </div>
                    <div className='flex justify-around'>
                        <button type="button" onClick={gotoCashBook}
                            className=" py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] hover:bg-[#524c3b] hover:text-white transition-all duration-300">金銭出納帳</button>
                        <button type="button" onClick={gotoDepositeAndWithdrawl}
                            className="ml-10 py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] hover:bg-[#524c3b] hover:text-white transition-all duration-300">入出金申請</button>
                    </div>
                </div>
                {/*  */}
                <div className='flex justify-center mt-2'>
                    <button onClick={()=>getThisYearData()} className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 h-8 text-[18px] cursor-pointer hover:bg-[#524c3b] hover:text-white transition-all duration-300'>今年</button>
                    <button onClick={()=>getLastMonthData()} className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px] cursor-pointer hover:bg-[#524c3b] hover:text-white transition-all duration-300'>今月</button>
                    <button onClick={()=>getThisMonthData()} className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px] cursor-pointer hover:bg-[#524c3b] hover:text-white transition-all duration-300'>前月</button>
                    <button onClick={()=>getTodayData()} className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px] cursor-pointer hover:bg-[#524c3b] hover:text-white transition-all duration-300'>今日まで</button>
                </div>
                {/*  */}
                <div className='monthly-income-date flex justify-center'>
                    <div className='flex justify-center mt-3'>
                        <div className='flex'>
                            <div style={{  flexDirection: 'column', }} className='flex align-center justify-around'>
                                <input name="ads" type="text" value={startdate} required className="w-full h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly/>
                            </div>
                            <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                <div style={{width:'40px',height:'30px',cursor:'pointer'}}>
                                    <div style={{position: 'relative'}}>
                                        <img src={dateimage} style={{width:'40px',height:'30px', position: 'absolute',cursor:'pointer'}} alt='calendar'></img>
                                        <input type="date" id="startdate" name="startdate" onChange={handleStartDateChange} style={{position: 'absolute',left:'0', width:'40px', height:'30px', background:'transparent', border:'none',opacity:'0',cursor:'pointer'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' text-[#70685a] px-2 mr-2 flex flex-col justify-center'>
                            <label className="text-[#656565] font-bold mb-2 block text-center text-[20px] !mb-0">~</label>
                        </div>
                        <div className='flex'>
                            <div style={{  flexDirection: 'column', }} className='flex align-center justify-around'>
                                <input name="ads" type="text" value={enddate} required className="w-full h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]"readOnly/>
                            </div>
                            <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                <div style={{width:'40px',height:'30px',cursor:'pointer'}}>
                                    <div style={{position: 'relative'}}>
                                        <img src={dateimage} style={{width:'40px',height:'30px', position: 'absolute',cursor:'pointer'}} alt='calendar'></img>
                                        <input type="date" id="enddate" name="enddate" value={''} onChange={handleEndDateChange} style={{position: 'absolute',left:'0', width:'40px', height:'30px', background:'transparent', border:'none',opacity:'0',cursor:'pointer'}}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-3'>
                        <div className=' text-[#70685a] px-2 mr-5'>
                            <label className="text-[#656565] text-[20px] mb-2 block text-center !mb-0">この条件で</label>
                        </div>
                        <div className=' text-[#656565] px-2 mr-2'>
                            < button type="button" onClick={()=>getPeriodMontlyIncome()} className="w-20 h-8 px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white text-[15px] bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                            検索
                            </button>
                        </div>
                        <div className=' text-[#656565] px-2 mr-5'>
                            <label className="text-[#656565] mb-2 block text-center !mb-0">(and検索)</label>
                        </div>
                    </div>

                </div>
                {/*  */}
                <div className='flex mt-3'>
                    <div className='w-max' style={{ marginLeft: '10%' }}>
                        <div className='text-center text-[#656565] text-[15px] font-bold '>前月末金庫残</div>
                        <div className='border border-[#6e6e7c] text-[#6e6e7c] px-2 text-center'>¥9,999,999</div>
                    </div>
                    <div className='monthly-income-toptable text-center text-[#656565] text-[15px] mr-5 mt-4 flex flex-col justify-center' style={{ marginLeft: '40%' }}>
                        <label>(枚数)</label>
                    </div>
                    <div className='w-max mr-10'>
                        <div className='text-center text-[#656565] text-[15px] font-bold'>当月末金庫残</div>
                        <div className='border border-[#6e6e7c] text-[#6e6e7c] px-2 text-center'>¥9,999,999</div>
                    </div>
                    <div className='w-max'>
                        <div className='text-center text-[#656565] text-[15px] font-bold'>金庫残差異</div>
                        <div className='border border-[#6e6e7c] text-[#6e6e7c] px-2 text-center'>¥9,999,999</div>
                    </div>
                </div>
                {/*  Tabe*/}
                <div className=' pb-20 flex' >
                    <div className='mt-11 w-20 mr-5'>
                        < button type="button" className="w-20 text-[15px] font-bold tracking-wide rounded-md justify-center text-white bg-[#fe5d5c] hover:bg-blue-700 focus:outline-none">
                        不一致
                        </button>
                        < button type="button" className="w-20 mt-3 text-[15px] font-bold tracking-wide rounded-md justify-center text-white bg-[#76cc90] hover:bg-blue-700 focus:outline-none">
                        一致
                        </button>
                    </div>
                    <div style={{width:'100%',overflow:'auto'}} >
                    <table className='text-center w-max mt-2' style={Table}>
                        <thead>
                            <tr>
                                <th style={Th}>日付</th>
                                <th style={Th}>その日の出金合計</th>
                                <th style={Th}>買取金額合計</th>
                                <th style={Th}>経費合計</th>
                                <th style={Th}>金庫追加金</th>
                                <th style={Th}>一万円札</th>
                                <th style={Th}>五千円札</th>
                                <th style={Th}>千円札</th>
                                <th style={Th}>500円</th>
                                <th style={Th}>100円</th>
                                <th style={Th}>50円</th>
                                <th style={Th}>10円</th>
                                <th style={Th}>5円</th>
                                <th style={Th}>1円</th>
                                <th style={Th}>合計金額</th>
                                <th style={Th}>売上表残金</th>
                                <th style={Th}>売上表差異</th>
                                <th style={Th}>{editIndex === -1 ? '編集する' : 'セーブ'}</th>
                                <th className='whitespace-nowrap pl-3'>{editIndex === -1 ? '' : 'キャンセル'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {monthlyIncome?.length>0 && monthlyIncome.map((Data,Index) => (
                                <tr key={Data.id}>
                                    <td style={Td}>{Data.date || ''}</td>
                                    <td style={Td} className='text-right'>
                                        {editIndex === Index ?(
                                            <InputComponent type="number" name='total_withdrawal' value={editedRow.total_withdrawal || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):((Data.total_withdrawal !== null && Data.total_withdrawal !== '') ? Data.total_withdrawal.toLocaleString() : '' || '')}
                                    </td>
                                    <td style={Td} className='text-right'>
                                        {editIndex === Index ?(
                                            <InputComponent type="number" name='total_purchase_price' value={editedRow.total_purchase_price || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):((Data.total_withdrawal !== null && Data.total_withdrawal !== '') ? Data.total_purchase_price.toLocaleString() : '' || '')}
                                    </td>
                                    <td style={Td} className='text-right'>
                                        {parseInt(Data.total_purchase_price || '') - parseInt(Data.total_purchase_price || '') || ''}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent type="number" name='safe_deposite_extra' value={editedRow.safe_deposite_extra || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):((Data.safe_deposite_extra !== null && Data.safe_deposite_extra !== '') ? Data.safe_deposite_extra : '' || '')}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent type="number" name='ten_thousand' value={editedRow.ten_thousand || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(Data.ten_thousand || '')}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent type="number" name='five_thousand' value={editedRow.five_thousand || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(Data.five_thousand || '')}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent type="number" name='one_thousand' value={editedRow.one_thousand || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(Data.one_thousand || '')}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent type="number" name='five_hundred' value={editedRow.five_hundred || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(Data.five_hundred || '')}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent type="number" name='one_hundred' value={editedRow.one_hundred|| ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(Data.one_hundred|| '')}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent type="number" name='fifty' value={editedRow.fifty|| ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(Data.fifty|| '')}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent type="number" name='ten' value={editedRow.ten|| ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(Data.ten || '')}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent type="number" name='five' value={editedRow.five || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(Data.five || '')}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent type="number" name='one' value={editedRow.one || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(Data.one || '')}
                                    </td>
                                    <td style={Td}>{10000*parseInt(Data.ten_thousand)
                                                + 5000*parseInt(Data.five_thousand)
                                                + 1000*parseInt(Data.one_thousand)
                                                + 500*parseInt(Data.five_hundred)
                                                + 100*parseInt(Data.one_hundred)
                                                + 50*parseInt(Data.fifty)
                                                + 10*parseInt(Data.ten)
                                                + 5*parseInt(Data.five)
                                                + 1*parseInt(Data.one)
                                                || ''}
                                    </td>
                                    <td style={Td}>{Data.sales_balance}</td>
                                    <td style={Td}>{Data.sales_variance}</td>
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
                                        // <div>
                                        //     <button className='w-7'>
                                        //     <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                                        //     </button>
                                        // </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    </div>

                </div>
        </>
    );
};

export default MonthlyIncome;