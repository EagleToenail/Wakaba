import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css';
import dateimage from '../../Assets/img/datepicker.png';



const MonthlyIncome = () => {
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
                <div className='flex justify-around mt-10'>
                    <div className='flex'>
                        <button type="button"
                            className="mr-10  py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">当月分表示</button>
                        <button type="button"
                            className=" mr-3 py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">本日分表示</button>
                    </div>
                    <h2 className="text-[#656565] text-center text-2xl font-bold flex justify-center">月次収支報告書&nbsp;一覧</h2>
                    <div className='flex justify-around'>
                        <button type="button"
                            className=" py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">金銭出納帳</button>
                        <button type="button"
                            className="ml-10 py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">入出金申請</button>
                    </div>
                </div>
                {/*  */}
                <div className='flex mt-5' style={{ paddingLeft: '30%' }}>
                    <button className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 h-8 text-[18px]'>今年</button>
                    <button className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px]'>今月</button>
                    <button className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px]'>前月</button>
                    <button className='border border-[#6e6e7c] text-[#6e6e7c] px-2 mr-3 text-[18px]'>今日まで</button>
                </div>
                {/*  */}
                <div className='flex mt-3 justify-center'>
                    <div className='flex'>
                        <div style={{  flexDirection: 'column', }} className='flex align-center justify-around'>
                            <input name="ads" type="text" value={startdate} required className="w-40 h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly/>
                        </div>
                        <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                            <div style={{width:'40px',height:'30px',cursor:'pointer'}}>
                                <div style={{position: 'relative'}}>
                                    <img src={dateimage} style={{width:'40px',height:'30px', position: 'absolute',cursor:'pointer'}} alt='calendar'></img>
                                    <input type="date" id="startdate" name="startdate" value={''} onChange={handleStartDateChange} style={{position: 'absolute',left:'0', width:'40px', height:'30px', background:'transparent', border:'none',opacity:'0',cursor:'pointer'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' text-[#70685a] px-2 mr-2 flex flex-col justify-center'>
                        <label className="text-[#656565] font-bold mb-2 block text-center text-[20px] !mb-0">~</label>
                    </div>
                    <div className='flex'>
                        <div style={{  flexDirection: 'column', }} className='flex align-center justify-around'>
                            <input name="ads" type="text" value={enddate} required className="w-40 h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]"readOnly/>
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
                {/*  */}
                <div className='flex mt-5'>
                    <div className='w-max' style={{ marginLeft: '10%' }}>
                        <div className='text-center text-[#656565] text-[15px] font-bold '>前月末金庫残</div>
                        <div className='border border-[#6e6e7c] text-[#6e6e7c] px-2 text-center'>¥9,999,999</div>
                    </div>
                    <div className='text-center text-[#656565] text-[15px] mr-5 mt-8' style={{ marginLeft: '40%' }}>
                        <label>(asd)</label>
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
                <div className='pl-10 pr-10 pb-20 flex' >
                    <div className='mt-5 w-20 mr-5'>
                        < button type="button" className="w-20 text-[15px] font-bold tracking-wide rounded-md justify-center text-white bg-[#fe5d5c] hover:bg-blue-700 focus:outline-none">
                        不一致
                        </button>
                        < button type="button" className="w-20 mt-3 text-[15px] font-bold tracking-wide rounded-md justify-center text-white bg-[#76cc90] hover:bg-blue-700 focus:outline-none">
                        一致
                        </button>
                    </div>
                    <div style={{width:'100%',overflow:'auto'}} >
                    <table className='text-center w-max' style={Table}>
                        <thead>
                            <tr>
                                <th>日付</th>
                                <th>その日の出金合計</th>
                                <th>買取金額合計</th>
                                <th>経費合計</th>
                                <th>金庫追加金</th>
                                <th>一万円札</th>
                                <th>五千円札</th>
                                <th>千円札</th>
                                <th>500円</th>
                                <th>100円</th>
                                <th>50円</th>
                                <th>10円</th>
                                <th>5円</th>
                                <th>1円</th>
                                <th>合計金額</th>
                                <th>売上表残金</th>
                                <th>売上表差異</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={Td}>¥9,999,999</td>
                                <td style={Td}>¥9,999,999</td>
                                <td style={Td}>¥9,999,999</td>
                                <td style={Td}>¥9,999,999</td>
                                <td style={Td}>¥9,999,999</td>
                                <td style={Td}>¥9,999,999</td>
                                <td style={Td}>¥9,999,999</td>
                                <td style={Td}>¥9,999,999</td>
                                <td style={Td}>¥9,999,999</td>
                                <td style={Td}>¥9,999,999</td>
                                <td style={Td}>¥9,999,999</td>
                                <td style={Td}>¥9,999,999</td>
                                <td style={Td}>¥9,999,999</td>
                                <td style={Td}>¥9,999,999</td>
                                <td style={Td}>¥9,999,999</td>
                                <td style={Td}>¥9,999,999</td>
                                <td style={Td}>5¥9,999,9990</td>
                            </tr>
                        </tbody>

                    </table>
                    </div>

                </div>
        </>
    );
};

export default MonthlyIncome;