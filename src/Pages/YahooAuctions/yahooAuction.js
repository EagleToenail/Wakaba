import React from 'react';
import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
// import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
// import LabelComponent from '../../Components/Common/LabelComponent';


const YahooAuction = () => {
    // const title = 'タイトルタイトル';

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
        fontSize: '15px',
        whiteSpace:'nowrap',
        padding:'5px'
    };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace:'nowrap'
    };


    return (
        <>
            {/* <Titlebar title={title} /> */}
            {/* first button line  */}
            <div className='flex justify-between ml-10'>
                <div className='flex justify-center mt-10 w-full' >
                    <ButtonComponent className='bg-[transparent] border border-[#424242] !text-[#424242] h-11 !text-2xl  !w-[200px] !px-0' ><Link to="/salesslip">売上表</Link></ButtonComponent>
                    <ButtonComponent className='h-11 bg-[transparent] border border-[#424242] !text-[#424242] text-2xl !w-[200px] !px-0'  style={{ marginLeft: '30px' }} >
                        <Link to="/contractorassessmentsheet">業者査定シート</Link>
                    </ButtonComponent>
                    <ButtonComponent children={'ヤフオク'} className='h-11 !bg-[#424242] border border-[#424242] !text-[white] text-2xl !w-[200px] !px-0' style={{ marginLeft: '30px' }} />
                </div>
            </div>

            <div className='flex justify-center mt-10 '>
                <label className='flex flex-center'>(売上額と同い)</label>
            </div>

            {/*  Tabe*/}
            <div className='pb-20 w-full flex'>
                <div style={{ width: '100%', overflow: 'auto' }} >
                    <table style={Table}>
                        <thead>
                            <tr>
                                <th style={Th} rowSpan={2}>ヤフオク商品ID</th>
                                <th width='5%' style={Th} rowSpan={2}>わかばNo.</th>
                                <th width='5%' style={Th} rowSpan={2}>カテゴリ-1</th>
                                <th width='5%' style={Th} rowSpan={2}>カテゴリ-2</th>
                                <th width='5%' style={Th} rowSpan={2}>カテゴリ-3</th>
                                <th width='5%' style={Th} rowSpan={2}>カテゴリ-4</th>
                                <th width='5%' style={Th} rowSpan={2}>画像</th>
                                <th width='5%' style={Th} rowSpan={2}>商品名</th>

                                <th style={Th} rowSpan={2}>買取額</th>
                                <th style={Th} rowSpan={2}>オークション買取額</th>
                                <th style={Th} rowSpan={2}>落札額</th>
                                <th style={Th} rowSpan={2}>租利額</th>

                                <th width='10%' className='px-3 w-max' style={Th} rowSpan={2} ><div style={{ border: '1px solid black', borderRadius: '5px', }}>ステー夕ス</div></th>
                                <th width='10%' className='px-2 w-max' style={Th} rowSpan={2} ><div style={{ border: '1px solid black', borderRadius: '5px', }}>入金日</div></th>
                                <th width='10%' className='px-2 w-max' style={Th} rowSpan={2} ><div style={{ border: '1px solid black', borderRadius: '5px', }}>発送日</div></th>

                                <th style={Th} colSpan={6}>落札者情報</th>

                            </tr>

                            <tr>
                                <th style={Th} >ヤフオクID</th>
                                <th style={Th}>お名前</th>
                                <th style={Th} >カナ</th>
                                <th style={Th}>TEL</th>
                                <th style={Th} >住所</th>
                                <th width='10%' style={Th} >評価</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={Td}>9999</td>
                                <td style={Td}>9999</td>
                                <td style={Td}>
                                    <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                        <option value="1">宛先の名前</option>
                                        <option value="2">Afghanistan</option>
                                        <option value="3">Åland Islands</option>
                                        <option value="4">Albania</option>
                                    </select>
                                </td>
                                <td style={Td}>
                                    <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                        <option value="1">宛先の名前</option>
                                        <option value="2">Afghanistan</option>
                                        <option value="3">Åland Islands</option>
                                        <option value="4">Albania</option>
                                    </select>
                                </td>
                                <td style={Td}>
                                    <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                        <option value="1">宛先の名前</option>
                                        <option value="2">Afghanistan</option>
                                        <option value="3">Åland Islands</option>
                                        <option value="4">Albania</option>
                                    </select>
                                </td>
                                <td style={Td}>
                                    <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                        <option value="1">宛先の名前</option>
                                        <option value="2">Afghanistan</option>
                                        <option value="3">Åland Islands</option>
                                        <option value="4">Albania</option>
                                    </select>
                                </td>
                                <td style={Td}><ButtonComponent children="1" className='w-max !px-5 rounded-lg' style={{ backgroundColor: '#ebe5e1', color: '#626373' }} /></td>
                                <td style={Td}>グッチOOOO</td>
                                <td style={Td}>100</td>
                                <td style={Td}>90,000</td>
                                <td style={Td}>100</td>

                                <td style={Td}>
                                    <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                        <option value="1">宛先の名前</option>
                                        <option value="2">Afghanistan</option>
                                        <option value="3">Åland Islands</option>
                                        <option value="4">Albania</option>
                                    </select>
                                </td>
                                <td style={Td}>
                                    <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                        <option value="1">宛先の名前</option>
                                        <option value="2">Afghanistan</option>
                                        <option value="3">Åland Islands</option>
                                        <option value="4">Albania</option>
                                    </select>
                                </td>
                                <td style={Td}>2024/12/30</td>
                                <td style={Td}>2024/12/30</td>
                                <td style={Td}>0000</td>
                                <td style={Td}>伊集院純一郎</td>
                                <td style={Td}>OOOOOOOOO</td>
                                <td style={Td}>090-0000-0000</td>
                                <td style={Td}>OOOOOOOOO</td>
                                <td style={Td}>50</td>
                            </tr>

                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
};

export default YahooAuction;