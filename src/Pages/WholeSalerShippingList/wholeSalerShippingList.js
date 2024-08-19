import React,{useState ,} from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css';
import '../../Assets/css/firstTd.css';
import '../../Assets/css/lastTd.css';

import LabelComponent from '../../Components/Common/LabelComponent';
import dateimage from '../../Assets/img/datepicker.png';


const WholeSalerShippingList = () => {
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
        fontSize: '15px'
    };

    const [date, setDate] = useState('');

    const handleDateChange = (event) => {
        setDate(event.target.value); // Update the date state with the selected date
    };
  
    return (
        <>
            <Titlebar title={title} />
            <div className="bg-[trasparent] font-[sans-serif]">
                <div className='flex justify-center'>
                    <div className="w-full pt-3" style={{ maxWidth: '80em' }}>


                        <div className='flex justify-around mt-10' >
                            <h2 className="text-[#70685a] text-center text-2xl flex justify-center">業者卸発送一覧</h2>
                        </div>

                        {/*  */}
                        <div className='flex mt-3 justify-center  pr-40 pl-40'>
                            <div className=' px-2 mr-2 text-center font-bold'>
                                <LabelComponent value={'発送日'} className='flex justify-center'/>
                                <div>
                                <div className='flex'>
                        <div style={{  flexDirection: 'column', }} className='flex align-center justify-around'>
                            <input name="ads" type="text" value={date} required className="w-40 h-11 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]"readOnly/>
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
                            </div>
                            <div className=' text-[#70685a] px-2 mr-2 font-bold'>
                                <div className='text-center'>
                                    <LabelComponent value={'卸業者'} />
                                </div>
                                <select id="classificatin" name="classificatin" className="w-full h-11 text-[#70685a] text-[15px] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                            <option value="1">アルバイト</option>
                                            <option value="2">Afghanistan</option>
                                            <option value="3">Åland Islands</option>
                                            <option value="4">Albania</option>
                                        </select>
                            </div>
                            <div className=' text-[#70685a] px-2 mr-2 font-bold'>
                                <div className='text-center'>
                                    <LabelComponent value={'adf'} />
                                </div>
                                <select id="classificatin" name="classificatin" className="w-full h-11 text-[#70685a] text-[15px] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                            <option value="1">アルバイト</option>
                                            <option value="2">Afghanistan</option>
                                            <option value="3">Åland Islands</option>
                                            <option value="4">Albania</option>
                                        </select>
                            </div>

                            <div className=' text-[#70685a] px-2 mr-5 flex flex-col justify-end'>
                    <label className="text-[#70685a] text-[20px] block text-center pb-2">この条件で</label>
                </div>
                <div className=' text-[#70685a] px-2 mr-2 flex flex-col justify-end'>
                    < button type="button" style={{ display: 'flex', alignItem: 'end' }} className="flex align-end w-20 px-3 py-2 font-bold rounded-md tracking-wide text-[#665b4c] justify-center text-white bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                    検索
                    </button>
                </div>
                <div className=' text-[#70685a] px-2 mr-5 flex flex-col justify-end'>
                    <label className="text-[#70685a] mb-2 block text-center pb-13">(and検索)</label>
                </div>
                        </div>

                        {/*  Tabe*/}
                        <div className='mt-10 pl-10 pr-10 pb-20 w-full flex'>
                            <table className='text-center w-full' style={Table}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>ステー夕ス</th>
                                        <th>卸し先</th>
                                        <th>発送日</th>
                                        <th>わかはNo.(範囲)</th>
                                        <th>仮査定合計額</th>
                                        <th>発送者</th>
                                        <th>入金予定日</th>
                                        <th>入金日</th>
                                        <th>本査定合計額</th>
                                        <th>送ら状</th>
                                        <th>依買取依頼書</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td style={Td}>OOOO</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >
                                            <div className='bg-[#a6a6a6] w-10 h-5 flex justify-center ml-3'>
                                                <svg focusable="false" aria-hidden="true" data-testid="ArrowRightAltIcon" fill="#fefefe" className='ml-2' title="ArrowRightAlt"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path></svg>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='w-5 h-3 ml-3 mb-1'>
                                                <svg className="" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon" title="ContentCopy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"></path></svg>
                                            </div>
                                            
                                        </td>
                                    </tr>
                                   
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WholeSalerShippingList;