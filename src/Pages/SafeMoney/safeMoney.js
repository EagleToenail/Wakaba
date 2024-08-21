import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css'
import dateimage from '../../Assets/img/datepicker.png';


const SafeMoney = () => {
    const title = 'タイトルタイトル';

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
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
    };

    const [startdate, setStartDate] = useState('');

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value); // Update the date state with the selected date
    };

    const [enddate, setEndDate] = useState('');

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value); // Update the date state with the selected date
    };


    return (
        <>
            <Titlebar title={title} />
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '90em' }}>
                    <div className='flex justify-around mt-10 '>
                        <div className='flex '>
                            <div className='flex'>
                                <button type="button"
                                    className="mr-10 px-3  py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">月次収支報告書一覧</button>
                                <button type="button"
                                    className=" mr-3 py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">入出金申請</button>
                            </div>
                        </div>
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">金庫金  金銭出納帳（入出金履歴)</h2>
                        <div className='flex justify-around' style={{ visibility: 'hidden' }}>
                            <button type="button"
                                className="py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">Purple</button>
                            <button type="button"
                                className="ml-10 py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">Purple</button>
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex justify-center mt-5' >
                        <button className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 h-8 text-[18px]'>今年</button>
                        <button className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px]'>今月</button>
                        <button className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px]'>前月</button>
                        <button className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px]'>今日まで</button>
                    </div>
                    {/*  */}
                    <div className='flex mt-3 justify-center'>
                        <div className='mr-5'>
                            <select id="gender" name="gender" className="w-40 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                <option value="1">ステータス</option>
                                <option value="2">Afghanistan</option>
                                <option value="3">Åland Islands</option>
                                <option value="4">Albania</option>
                            </select>
                        </div>
                        <div className='mr-5'>
                            <select id="gender" name="gender" className="w-40 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                <option value="1">種別</option>
                                <option value="2">Afghanistan</option>
                                <option value="3">Åland Islands</option>
                                <option value="4">Albania</option>
                            </select>
                        </div>
                        <div className='mr-5'>
                            <label className="text-[#70685a] font-bold mb-2 block text-center !mb-0">申請日</label>
                        </div>
                        <div className='flex'>
                            <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                <input name="ads" type="text" value={startdate} required className="w-40 h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                            </div>
                            <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                    <div style={{ position: 'relative' }}>
                                        <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                        <input type="date" id="startdate" name="startdate" value={''} onChange={handleStartDateChange} style={{ position: 'absolute', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' text-[#70685a] px-2 mr-2 flex flex-col justify-center'>
                            <label className="text-[#656565] font-bold mb-2 block text-center text-[20px] !mb-0">~</label>
                        </div>
                        <div className='flex'>
                            <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                <input name="ads" type="text" value={enddate} required className="w-40 h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                            </div>
                            <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                    <div style={{ position: 'relative' }}>
                                        <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                        <input type="date" id="enddate" name="enddate" value={''} onChange={handleEndDateChange} style={{ position: 'absolute', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' text-[#70685a] px-2 mr-5'>
                            <label className="text-[#656565] text-[20px] mb-2 block text-center !mb-0">この条件で</label>
                        </div>
                        <div className=' text-[#656565] px-2 mr-2'>
                            < button type="button" className="w-20 h-8 px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white text-[15px] bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                                検索
                            </button>
                        </div>
                        <div className=' text-[#656565] px-2 mr-5'>
                            <label className="text-[#656565] mb-2 block text-center !mb-0">(and検索)</label>
                        </div>
                    </div>
                    {/*  Tabe*/}
                    <div className='pl-20 pr-20 pb-20 flex justify-center mt-10' >
                        <div style={{ width: '80%' ,overflow:'auto'}}>
                            <table className=' text-center w-full' style={Table}>
                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th>ステータス</th>
                                        <th width='30%'>種別</th>
                                        <th>承諾</th>
                                        <th>実行者</th>
                                        <th>確定日</th>
                                        <th>申請日</th>
                                        <th>合計</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td  style={Td}>99999</td>
                                        <td style={Td}>申請中</td>
                                        <td style={Td}>銀行ATM出金</td>
                                        <td style={Td}>OOOO</td>
                                        <td style={Td}>OOOO</td>
                                        <td style={Td}>2024.12.31</td>
                                        <td style={Td}>2024.12.31</td>
                                        <td style={Td}>+¥9,999,999</td>
                                    </tr>
                                </tbody>

                            </table></div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default SafeMoney;