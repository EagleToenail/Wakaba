import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import DateAndTime from '../../Components/Common/PickData';
import dateimage from '../../Assets/img/datepicker.png';

// THIS PAGE SHOULD HAVE A VERTICAL SCROLL BAR


const SalesList = () => {
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

    // Handle date change event
    const handleDateChange = (event) => {
        setDate(event.target.value); // Update the date state with the selected date
    };


    return (
        <>
            <Titlebar title={title} />
            <DateAndTime />
            {/* title */}
            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center mt-10">売上一覧表(スタッフ単位)</h2>
            {/* first letters line  */}
            <div className='flex justify-center'>
                <div className='flex justify-center' style={{ width: '40%' }}>
                    <div className='flex justify-center mt-10 w-full text-[17px] text-[#70685a] font-bold' >
                        <div>
                            <label>単日買取額</label>
                            <div className='text-center mr-10'>
                                <label>¥9,999,999</label>
                            </div>
                        </div>
                        <div>
                            <label>単日買取額</label>
                            <div className='text-center mr-10'>
                                <label>¥9,999,999</label>
                            </div>
                        </div>
                        <div>
                            <label>当月 粗利額</label>
                            <div className='text-center mr-10'>
                                <label>¥9,999,999</label>
                            </div>
                        </div>
                        <div>
                            <label>金庫金合計</label>
                            <div className='text-center mr-10'>
                                <label>¥9,999,999</label>
                            </div>
                        </div>
                        <div>
                            <label>売上表残金</label>
                            <div className='text-center mr-10'>
                                <label>¥9,999,999</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* second button line  */}
            <div className='flex justify-center' >
                <div className='flex justify-center' >
                    <div className='flex justify-center gap-3 mt-5 w-full' >
                        <div>
                            <div className='text-center text-[#70685a] font-bold mb-2'><label>買取日</label></div>
                            <div className='flex'>
                                <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="ads" type="text" value={date} required className="w-40 h-11 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                                </div>
                                <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                    <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                        <div style={{ position: 'relative' }}>
                                            <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                            <input type="date" id="date" name="date" value={''} onChange={handleDateChange} style={{ position: 'absolute', left: '0', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='text-center text-[#70685a] font-bold mb-2'><label>買取担当</label></div>
                            <select id="classificatin" name="classificatin" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                <option value="1">アルバイト</option>
                                <option value="2">Afghanistan</option>
                                <option value="3">Åland Islands</option>
                                <option value="4">Albania</option>
                            </select>
                        </div>
                        <div>
                            <div className='text-center text-[#70685a] font-bold mb-2'><label>来店種別1</label></div>
                            <select id="classificatin" name="classificatin" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                <option value="1">アルバイト</option>
                                <option value="2">Afghanistan</option>
                                <option value="3">Åland Islands</option>
                                <option value="4">Albania</option>
                            </select>
                        </div>
                        <div>
                            <div className='text-center text-[#70685a] font-bold mb-2'><label>来店種別2</label></div>
                            <select id="classificatin" name="classificatin" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                <option value="1">アルバイト</option>
                                <option value="2">Afghanistan</option>
                                <option value="3">Åland Islands</option>
                                <option value="4">Albania</option>
                            </select>
                        </div>
                        <div>
                            <div className='text-center text-[#70685a] font-bold mb-2'><label>カテゴリ一1</label></div>
                            <select id="classificatin" name="classificatin" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                <option value="1">アルバイト</option>
                                <option value="2">Afghanistan</option>
                                <option value="3">Åland Islands</option>
                                <option value="4">Albania</option>
                            </select>
                        </div>
                        <div>
                            <div className='text-center text-[#70685a] font-bold mb-2'><label>カテゴリ一2</label></div>
                            <select id="classificatin" name="classificatin" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                <option value="1">アルバイト</option>
                                <option value="2">Afghanistan</option>
                                <option value="3">Åland Islands</option>
                                <option value="4">Albania</option>
                            </select>
                        </div>
                        <div>
                            <div className='text-center text-[#70685a] font-bold mb-2'><label>卸業者</label></div>
                            <select id="classificatin" name="classificatin" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                <option value="1">アルバイト</option>
                                <option value="2">Afghanistan</option>
                                <option value="3">Åland Islands</option>
                                <option value="4">Albania</option>
                            </select>
                        </div>
                        <div>
                            <div className='text-center text-[#70685a] font-bold mb-2'><label>卸日</label></div>
                                                        <div className='flex'>
                                <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="ads" type="text" value={date} required className="w-40 h-11 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                                </div>
                                <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                    <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                        <div style={{ position: 'relative' }}>
                                            <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                            <input type="date" id="date" name="date" value={''} onChange={handleDateChange} style={{ position: 'absolute', left: '0', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='text-center font-bold mb-2'><label>入金日</label></div>
                                                        <div className='flex'>
                                <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="ads" type="text" value={date} required className="w-40 h-11 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                                </div>
                                <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                    <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                        <div style={{ position: 'relative' }}>
                                            <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                            <input type="date" id="date" name="date" value={''} onChange={handleDateChange} style={{ position: 'absolute', left: '0', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* third line */}
            <div className='flex justify-center' >
                <div className='flex justify-center' >
                    <div className='flex justify-center mt-5 w-full' >
                        <div className='flex'>
                            <div className='text-center text-[#70685a] font-bold pr-3 pt-2'><label>この条件で</label></div>
                            <ButtonComponent children={'検索'} className='bg-[#a3a1c8] text-[#fff] h-11 rounded-lg' />
                            <div className='text-center text-[#70685a] font-bold pl-3 pt-2'><label>(and検索)</label></div>
                        </div>
                    </div>
                </div>
            </div>

            {/*  Tabe*/}
            <div className='mt-10 pl-10 pr-10 pb-20 w-full flex'>
            <div style={{overflow:'auto'}}  className='w-full'>
                <table style={Table}>
                    <thead>
                        <tr>
                            <th>選択</th>
                            <th width='5%'>わかばNo.</th>
                            <th width='5%' >買取日<svg className='h-10'  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th>
                            <th width='5%'>買取担当</th>
                            <th width='5%'>お客様</th>
                            <th width='5%'>カナ<svg className='h-10'  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th>
                            <th width='5%'>TEL<svg className='h-10'  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th>
                            <th width='5%'>住所<svg className='h-10'  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th>
                            <th width='5%'>来店種別-1</th>
                            <th width='5%'>2</th>

                            <th width='5%'>力テゴリ-1</th>
                            <th width='5%'>2</th>
                            <th width='5%'>商品名<svg className='h-10'  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th>
                            <th width='5%'>画像</th>
                            <th width='5%'>個数</th>
                            <th width='10%' >金種</th>
                            <th >G/額面</th>

                            <th width='5%'>買取額</th>
                            <th width='10%' >売上</th>
                            <th width='10%' >粗利益</th>
                            <th width='10%' >卸業者<svg className='h-10'  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th>
                            <th width='10%' >卸日</th>
                            <th width='5%'>入金日</th>
                            <th width='5%'>備考<svg className='h-10'  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox"></input></td>
                            <td style={Td}>99999</td>
                            <td style={Td}>12/31</td>
                            <td style={Td}>木戸</td>
                            <td style={Td}>伊集院純一郎</td>
                            <td style={Td}>イジュウインジュンイチロウ</td>
                            <td style={Td}>090</td>
                            <td style={Td}>神奈川</td>
                            <td style={Td}>OOOOO</td>
                            <td style={Td}>OOO</td>
                            <td style={Td}>ジュエリー</td>
                            <td style={Td}>OOOO</td>
                            <td style={Td}>グッチOOO</td>
                            <td style={Td}><ButtonComponent children="1" className='w-max !px-5 rounded-lg' style={{  backgroundColor: '#ebe5e1', color: '#626373'}} /></td>
                            <td style={Td}>1</td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}>100</td>
                            <td style={Td}>100</td>
                            <td style={Td}>100</td>
                            <td style={Td}>OOOO</td>
                            <td style={Td}>12/31</td>
                            <td style={Td}>12/31</td>
                            <td style={Td}>0000</td>
                        </tr>

                    </tbody>

                </table>
            </div>
            </div>
        </>
    );
};

export default SalesList;