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
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
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
                        className="mr-10  py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">Purple</button>
                    <button type="button"
                        className=" mr-3 py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">Purple</button>
                </div>
                <h2 className="text-[#656565] text-center text-2xl font-bold flex justify-center">Monthly Income</h2>
                <div className='flex justify-around'>
                    <button type="button"
                        className=" py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">Purple</button>
                    <button type="button"
                        className="ml-10 py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">Purple</button>
                </div>
            </div>
            {/*  */}
            <div className='flex mt-5' style={{ paddingLeft: '30%' }}>
                <button className='border border-[#656565] text-[#656565] px-2 mr-2'>this year</button>
                <button className='border border-[#656565] text-[#656565] px-2 mr-2'>this monthy</button>
                <button className='border border-[#656565] text-[#656565] px-2 mr-2'>last monthy</button>
                <button className='border border-[#656565] text-[#656565] px-2 mr-2'>today</button>
            </div>
            {/*  */}
            <div className='flex mt-3 justify-center'>
                <div className='flex'>
                    <div style={{  flexDirection: 'column', }} className='flex align-center justify-around'>
                        <input name="ads" type="text" value={startdate} required className="w-40 text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                    </div>
                    <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                        <div style={{width:'40px',height:'30px',cursor:'pointer'}}>
                            <div style={{position: 'relative'}}>
                                <img src={dateimage} style={{width:'40px',height:'30px', position: 'absolute',cursor:'pointer'}} alt='calendar'></img>
                                <input type="date" id="startdate" name="startdate" onChange={handleStartDateChange} style={{position: 'absolute', width:'40px', height:'30px', background:'transparent', border:'none',opacity:'0',cursor:'pointer'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' text-[#70685a] px-2 mr-2 flex flex-col justify-center'>
                    <label className="text-[#656565] font-bold mb-2 block text-center text-[20px] !mb-0">~</label>
                </div>
                <div className='flex'>
                    <div style={{  flexDirection: 'column', }} className='flex align-center justify-around'>
                        <input name="ads" type="text" value={enddate} required className="w-40 text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                    </div>
                    <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                        <div style={{width:'40px',height:'30px',cursor:'pointer'}}>
                            <div style={{position: 'relative'}}>
                                <img src={dateimage} style={{width:'40px',height:'30px', position: 'absolute',cursor:'pointer'}} alt='calendar'></img>
                                <input type="date" id="enddate" name="enddate" onChange={handleEndDateChange} style={{position: 'absolute', width:'40px', height:'30px', background:'transparent', border:'none',opacity:'0',cursor:'pointer'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' text-[#70685a] px-2 mr-5'>
                    <label className="text-[#656565] font-bold mb-2 block text-center !mb-0">Search with this condition</label>
                </div>
                <div className=' text-[#656565] px-2 mr-2'>
                    < button type="button" className="w-20 px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                        LOGIN
                    </button>
                </div>
                <div className=' text-[#656565] px-2 mr-5'>
                    <label className="text-[#656565] mb-2 block text-center !mb-0">and search</label>
                </div>
            </div>
            {/*  */}
            <div className='flex mt-5'>
                <div className='w-20' style={{ marginLeft: '10%' }}>
                    <div className='text-center text-[#656565] text-[15px] font-bold '>cost</div>
                    <div className='border border-[#656565] text-[#656565] px-2 text-center'>99999yen</div>
                </div>
                <div className='text-center text-[#656565] text-[15px] mr-5 mt-8' style={{ marginLeft: '40%' }}>
                    <label>(asd)</label>
                </div>
                <div className='w-20 mr-10'>
                    <div className='text-center text-[#656565] text-[15px] font-bold'>cost</div>
                    <div className='border border-[#656565] text-[#656565] px-2 text-center'>99999yen</div>
                </div>
                <div className='w-20'>
                    <div className='text-center text-[#656565] text-[15px] font-bold'>cost</div>
                    <div className='border border-[#656565] text-[#656565] px-2 text-center'>99999yen</div>
                </div>
            </div>
            {/*  Tabe*/}
            <div className='pl-10 pr-10 pb-20 w-full flex'>
                <div className='mt-5 w-20 mr-5'>
                    < button type="button" className="w-20 text-[15px] font-bold tracking-wide rounded-md justify-center text-white bg-[#fe5d5c] hover:bg-blue-700 focus:outline-none">
                        LOGIN
                    </button>
                    < button type="button" className="w-20 mt-3 text-[15px] font-bold tracking-wide rounded-md justify-center text-white bg-[#76cc90] hover:bg-blue-700 focus:outline-none">
                        LOGIN
                    </button>
                </div>
                <table className='text-center w-full' style={Table}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={Td}>Jill</td>
                            <td style={Td}>Smith</td>
                            <td style={Td}>50</td>
                            <td style={Td}>50</td>
                            <td style={Td}>50</td>
                            <td style={Td}>50</td>
                            <td style={Td}>50</td>
                            <td style={Td}>50</td>
                            <td style={Td}>50</td>
                            <td style={Td}>50</td>
                            <td style={Td}>50</td>
                            <td style={Td}>50</td>
                            <td style={Td}>50</td>
                            <td style={Td}>50</td>
                            <td style={Td}>50</td>
                            <td style={Td}>50</td>
                            <td style={Td}>50</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default MonthlyIncome;