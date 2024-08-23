import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import InputComponent from '../../../Components/Common/InputComponent';
import ButtonComponent from '../../../Components/Common/ButtonComponent';
import LabelComponent from '../../../Components/Common/LabelComponent';
import dateimage from '../../../Assets/img/datepicker.png';
import DateAndTime from '../../../Components/Common/PickData';


const ManagementHQRankingFunction = () => {
    const title = 'タイトルタイトル';

    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    const Th = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px'
    };
    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
    };

    // State to store the selected date
    const [date, setDate] = useState('');

    // Handle date change event
    const handleDateChange = (event) => {
        setDate(event.target.value); // Update the date state with the selected date
    };


    return (
        <>
            <Titlebar title={title} />
            <DateAndTime/>
            <div className='flex justify-around mt-5' >
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">本部管理画面  名種ランキング</h2>
            </div>
            {/*  */}
            <div className='flex mt-10 justify-center text-left'>
                <div className=' text-[#70685a] px-2 mr-2 text-left'>
                    <ButtonComponent children={'当月'} className='w-20 h-8 !px-5 rounded-sm !text-[#70685a] border border-[#70685a] bg-[transparent]'/>
                </div>
                <div className=' text-[#70685a] px-2 mr-2'>
                    <ButtonComponent children={'先月'} className='w-20 h-8 !px-5 rounded-sm !text-[#70685a] border border-[#70685a] bg-[transparent]' />
                </div>

                <div className=' px-2 mr-2 !text-center'>
                    <div className='flex'>
                        <div style={{  flexDirection: 'column', }} className='flex align-center justify-around'>
                            <input name="ads" type="text" value={date} required className="w-40 h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly/>
                        </div>
                        <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                            <div style={{width:'40px',height:'30px',cursor:'pointer'}}>
                                <div style={{position: 'relative'}}>
                                    <img src={dateimage} style={{width:'40px',height:'30px', position: 'absolute',cursor:'pointer'}} alt='calendar'></img>
                                    <input type="date" id="date" name="date" value={''} onChange={handleDateChange} style={{position: 'absolute',left:'0', width:'40px', height:'30px', background:'transparent', border:'none',opacity:'0',cursor:'pointer'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' text-[#70685a] px-2 mr-2 flex flex-col justify-end'>
                    <label className="text-[#70685a] text-[20px] block text-center pb-2">~</label>
                </div>
                <div className=' px-2 mr-2 !text-center'>
                    <div className='flex'>
                        <div style={{  flexDirection: 'column', }} className='flex align-center justify-around'>
                            <input name="ads" type="text" value={date} required className="w-40 h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly/>
                        </div>
                        <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                            <div style={{width:'40px',height:'30px',cursor:'pointer'}}>
                                <div style={{position: 'relative'}}>
                                    <img src={dateimage} style={{width:'40px',height:'30px', position: 'absolute',cursor:'pointer'}} alt='calendar'></img>
                                    <input type="date" id="date" name="date" value={''} onChange={handleDateChange} style={{position: 'absolute',left:'0', width:'40px', height:'30px', background:'transparent', border:'none',opacity:'0',cursor:'pointer'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-[#70685a] px-2 mr-2'>
                    <ButtonComponent children={'今年'} className='w-20 h-8 !px-5 rounded-sm !text-[#70685a] border border-[#70685a] bg-[transparent]'/>
                </div>
                <div className='text-[#70685a] px-2 mr-2'>
                    <ButtonComponent children={'去年'} className='w-20 h-8 !px-5 rounded-sm !text-[#70685a] border border-[#70685a] bg-[transparent]'/>
                </div>
                <div className=' text-[#70685a] px-2 mr-2 text-left'>
                    <select id="classification" name="classification" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                    </select>
                </div>
                <div className=' text-[#70685a] px-2 mr-2 '>
                    < button type="button" style={{ display: 'flex', alignItem: 'end' }} className="flex align-end w-20 px-3 py-1 font-bold rounded-md tracking-wide text-[#665b4c] justify-center text-white !bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                    表示
                    </button>
                </div>
            </div>
            {/*  Tabe*/}
            <div className='mt-10 pl-10 pr-10 pb-20 w-full flex'>
                <table className='text-center w-full' style={Table}>
                    <thead>
                        <tr>
                            <th></th>
                            <th style={Th} colSpan={2}>粗利</th>
                            <th style={Th} colSpan={2}>来店数</th>
                            <th style={Th} colSpan={2}> 成約数 </th>
                            <th style={Th} colSpan={2}>成約率</th>
                            <th style={Th} colSpan={2}> 貴金属 粗 利合計</th>
                            <th style={Th} colSpan={2}> ブランド粗利合計</th>
                            <th style={Th} colSpan={2}>腕時 計粗利合計</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width='2%' style={Td}>1</td>
                            <td width='7%'  style={Td}>OOOOO店</td>
                            <td width='7%' style={Td}>￥9,999,999</td>
                            <td width='7%' style={Td}>OOOOO店</td>
                            <td width='7%' style={Td}>￥9,999,999</td>
                            <td width='7%' style={Td}>OOOOO店</td>
                            <td width='7%' style={Td}>99.9%</td>
                            <td width='7%' style={Td}>OOOOO店</td>
                            <td width='7%' style={Td}>￥9,999,999</td>
                            <td width='7%' style={Td}>OOOOO店</td>
                            <td width='7%' style={Td}>￥9,999,999</td>
                            <td width='7%' style={Td}>OOOOO店</td>
                            <td width='7%' style={Td}>￥9,999,999</td>
                            <td width='7%' style={Td}>OOOOOO店</td>
                            <td width='7%' style={Td}>￥9,999,999</td>
                        </tr>
                        <tr>
                            <td width='2%' style={Td}>2</td>
                            <td width='7%'  style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                        </tr>
                        <tr>
                            <td width='2%' style={Td}>3</td>
                            <td width='7%'  style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                        </tr>
                        <tr>
                            <td width='2%' style={Td}>4</td>
                            <td width='7%'  style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                        </tr>
                        <tr>
                            <td width='2%' style={Td}>5</td>
                            <td width='7%'  style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default ManagementHQRankingFunction;