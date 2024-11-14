import React,{ useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
// import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css'
import InputComponent from '../../Components/Common/InputComponent';
import dateimage from '../../Assets/img/datepicker.png';


const SafeMoney = () => {
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

// goto montly income page
    const gotoMonthlyIncome = ()=> {
        navigate('/monthlyincome');
    }
    //got to cashbook
    const gotoDepositeAndWithdrawl = ()=> {
        navigate('/withdrawbankatm');
    }

        //fetch data from safemoney database
        const [cashRegister, setCashRegister] = useState([]);

        const [editIndex, setEditIndex] = useState(-1);
        const [editedRow, setEditedRow] = useState({ 
            status:'',
            type:'',
            acceptance:'',
            executor:'',
            confirmation_date:'',
            application_date:'',
        });
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setEditedRow({ ...editedRow, [name]: value });
        };
    
        const handleEditClick = (index) => {
            setEditIndex(index);
            setEditedRow(cashRegister[index]); // Populate the input fields with the selected row's data
        };
    
        const handleSaveClick = () => {
            const updatedData = cashRegister.map((row, index) =>
                index === editIndex ? { ...row, ...editedRow } : row
            );
            setCashRegister(updatedData);
            setEditIndex(-1); // Exit edit mode
            setEditedRow({ 
                status:'',
                type:'',
                acceptance:'',
                executor:'',
                confirmation_date:'',
                application_date:'',
            }); // Reset editedRow state
        };
    
        const handleCancelClick = () => {
            setEditIndex(-1);
            setEditedRow({ 
                status:'',
                type:'',
                acceptance:'',
                executor:'',
                confirmation_date:'',
                application_date:'',
            }); // Reset editedRow state
        };
        useEffect( () => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
    
            // console.log(`${wakabaBaseUrl}/sales/getSalesList`);
             axios.get(`${wakabaBaseUrl}/cashregister`)
                .then(response => {
                    console.log(response.data)
                    setCashRegister(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }, []);

    // Current year, month, and day
    const date = new Date();

    // Calculate last month
    const lastMonthDate = new Date(date);
    lastMonthDate.setMonth(lastMonthDate.getMonth() - 1); // Go to the last month

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

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <div className=" flex flex-col items-center justify-center py-3">
                <div className="w-full " >
                    <div className='safe-money flex justify-around'>
                        <div className='safe-money-first flex '>
                            <div className='flex'>
                                <button type="button" onClick={gotoMonthlyIncome}
                                    className="mr-10 px-3  py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] hover:bg-[#524c3b] hover:text-white transition-all duration-300">月次収支報告書一覧</button>
                                <button type="button" onClick={gotoDepositeAndWithdrawl}
                                    className=" mr-3 py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] hover:bg-[#524c3b] hover:text-white transition-all duration-300">入出金申請</button>
                            </div>
                        </div>
                        {/* <div >
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">金庫金  金銭出納帳（入出金履歴)</h2>
                        </div> */}
                        <div className='safe-money-second justify-center mt-2' style={{display:'none'}}>
                            <div className='flex'>
                                <button type="button"
                                    className="mr-10 px-3  py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">月次収支報告書一覧</button>
                                <button type="button"
                                    className=" mr-3 py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">入出金申請</button>
                            </div>
                        </div>
                        <div className='safe-money-third flex justify-around' style={{ display: 'none' }}>
                            <button type="button"
                                className="py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">Purple</button>
                            <button type="button"
                                className="ml-10 py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">Purple</button>
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex justify-center mt-2' >
                        <button className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 h-8 text-[18px] hover:bg-[#524c3b] hover:text-white transition-all duration-300'>今年</button>
                        <button className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px] hover:bg-[#524c3b] hover:text-white transition-all duration-300'>今月</button>
                        <button className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px] hover:bg-[#524c3b] hover:text-white transition-all duration-300'>前月</button>
                        <button className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px] hover:bg-[#524c3b] hover:text-white transition-all duration-300'>今日まで</button>
                    </div>
                    {/*  */}
                    <div className='safe-money-search flex mt-1 justify-center'>
                        <div className='flex justify-center mt-5'>
                            <div className='mr-5'>
                                <select name="status" value={searchParams.status || ''} onChange={handleSearchChange} className="w-40 h-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                    <option value=""></option>
                                    <option value="保留中">保留中</option>
                                    <option value="利用可能">利用可能</option>
                                </select>
                            </div>
                            <div className='mr-5'>
                                <select name="type" value={searchParams.type || ''} onChange={handleSearchChange} className="w-40 h-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                    <option value=""></option>
                                    <option value="銀行ATM引き出し">銀行ATM引き出し</option>
                                </select>
                            </div>
                            <div className='mr-5 flex flex-col justify-center'>
                                <label className="text-[#70685a] font-bold mb-2 block text-center !mb-0">申請日</label>
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
                        </div>
                        <div className='flex justify-center mt-5'>
                            <div className=' text-[#70685a] px-2 mr-5 flex flex-col justify-center'>
                                <label className="text-[#656565] text-[20px] mb-2 block text-center !mb-0">この条件で</label>
                            </div>
                            <div className=' text-[#656565] px-2 mr-2 flex flex-col justify-center'>
                                < button type="button" className="w-20 h-8 px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white text-[15px] bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                                    検索
                                </button>
                            </div>
                            <div className=' text-[#656565] px-2 mr-5 flex flex-col justify-center'>
                                <label className="text-[#656565] mb-2 block text-center !mb-0">(and検索)</label>
                            </div>
                        </div>

                    </div>
                    {/*  Tabe*/}
                    <div className=' pb-20 flex justify-center mt-5' >
                        <div style={{ width: '100%' ,overflow:'auto'}}>
                            <table className=' text-center w-full' style={Table}>
                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th style={Th} >ステータス</th>
                                        <th  style={Th}>種別</th>
                                        <th style={Th} >承諾</th>
                                        <th style={Th} >実行者</th>
                                        <th style={Th} >確定日</th>
                                        <th style={Th} >申請日</th>
                                        <th style={Th} >合計</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(cashRegister && cashRegister.length !==0) && cashRegister.map((Data,Index) => (
                                        <tr key={Data.id}>
                                            <td style={Td}>
                                                {editIndex === Index ?(
                                                    <select name="status" value={editedRow.status || ''} onChange={handleInputChange} className="w-40 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                                        <option value=""></option>
                                                        <option value="保留中">保留中</option>
                                                        <option value="利用可能">利用可能</option>
                                                    </select>
                                                ):(Data.status || '')}
                                            </td>
                                            <td style={Td}>
                                                {editIndex === Index ?(
                                                    <select name="type" value={editedRow.type || ''} onChange={handleInputChange} className="w-40 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                                        <option value=""></option>
                                                        <option value="銀行ATM引き出し">銀行ATM引き出し</option>
                                                    </select>
                                                ):(Data.type || '')}
                                            </td>
                                            <td style={Td}>
                                                {editIndex === Index ?(
                                                    <select name="acceptance" value={editedRow.acceptance || ''} onChange={handleInputChange} className="w-40 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                                        <option value=""></option>
                                                        <option value="不許可">不許可</option>
                                                        <option value="許可">許可</option>
                                                    </select>
                                                ):(Data.acceptance || '')}
                                            </td>
                                            <td style={Td}>
                                                {editIndex === Index ?(
                                                    <select name="executor" value={editedRow.executor || ''} onChange={handleInputChange} className="w-40 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                                        <option value=""></option>
                                                        <option value="qqq">qqq</option>
                                                    </select>
                                                ):(Data.executor || '')}
                                            </td>
                                            <td style={Td}>
                                                {editIndex === Index ?(
                                                    <InputComponent type="date" name='confirmtion_date' value={editedRow.confirmtion_date || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                                ):(Data.confirmtion_date || '')}
                                            </td>
                                            <td style={Td}>
                                                {editIndex === Index ?(
                                                    <InputComponent type="date" name='application_date' value={editedRow.application_date || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                                ):(Data.application_date || '')}
                                            </td>
                                            <td style={Td}>
                                                {editIndex === Index ?(
                                                    <InputComponent type="number" name='total' value={editedRow.total || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                                ):(Data.total || '')}
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

                            </table></div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SafeMoney;