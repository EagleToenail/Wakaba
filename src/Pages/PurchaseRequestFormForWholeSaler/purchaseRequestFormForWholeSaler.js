import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import LabelComponent from '../../Components/Common/LabelComponent';


const PurchaseRequestFormForWholeSaler = () => {
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

    return (
        <>
            <Titlebar title={title} />

            <div className='flex justify-around mt-10' >
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">卸への買取り依頼書(各業者用紙作成元シート)</h2>
            </div>

            {/*  */}
            <div className='flex mt-10 justify-center pr-40 pl-40'>
                <div className=' text-[#70685a] px-2 mr-2 font-bold flex'>
                    <div className='text-center flex flex-col justify-center'>
                        <LabelComponent value={'卸業者'} className='w-max' />
                    </div>
                    <select id="classificatin" name="classificatin" className="w-full h-11 text-[#70685a] text-[15px] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                        <option value="1">〇〇貴金属卸 株式会社</option>
                        <option value="2">Afghanistan</option>
                        <option value="3">Åland Islands</option>
                        <option value="4">Albania</option>
                    </select>
                </div>
                <div className=' text-[#70685a] px-2 mr-5 flex flex-col justify-end'>
                    <label className="text-[#70685a] text-[20px] block text-center pb-2">用伝表を</label>
                </div>
                <div className=' text-[#70685a] px-2 mr-2 flex flex-col justify-end'>
                    < button type="button" style={{ display: 'flex', alignItem: 'end' }} className="flex align-end w-20 px-3 py-2 font-bold rounded-md tracking-wide text-[#665b4c] justify-center text-white bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                        作成
                    </button>
                </div>
            </div>

            {/*  Tabe*/}
            <div className='mt-10 pl-10 pr-10 pb-20 w-full flex'>
                <div style={{ width: '100%', overflow: 'auto' }} >
                    <table className='text-center w-full' style={Table}>
                        <thead>
                            <tr>
                                <th></th>
                                <th >ステー夕ス</th>
                                <th >発送予定者</th>
                                <th >発送担当者</th>
                                <th>わかばNo.</th>
                                <th>カテゴリ一1</th>
                                <th>カテゴリ一2</th>
                                <th>ブランド名</th>
                                <th>商品名</th>
                                <th>型番</th>
                                <th>備考(金種／詳細仕様他)</th>
                                <th>RANK</th>
                                <th >画像</th>
                                <th>個数</th>
                                <th >仮査定日</th>
                                <th>仮査定額</th>
                                <th>他社 最高査定額</th>
                                <th >最高査定額業者</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td style={Td}>
                                    <select id="classificatin" name="classificatin" className="w-full h-11 text-[#70685a] text-[15px] font-bold  px-4 py-1 outline-[#70685a]">
                                        <option value="1">発送許可申請中</option>
                                        <option value="2">Afghanistan</option>
                                        <option value="3">Åland Islands</option>
                                        <option value="4">Albania</option>
                                    </select>
                                </td>
                                <td style={Td}>2024/12/31</td>
                                <td style={Td}>
                                <select id="classificatin" name="classificatin" className="w-full h-11 text-[#70685a] text-[15px] font-bold  px-4 py-1 outline-[#70685a]">
                                        <option value="1">OOO</option>
                                        <option value="2">Afghanistan</option>
                                        <option value="3">Åland Islands</option>
                                        <option value="4">Albania</option>
                                    </select>
                                </td>
                                <td style={Td}>9999</td>
                                <td style={Td}>
                                <select id="classificatin" name="classificatin" className="w-full h-11 text-[#70685a] text-[15px] font-bold  px-4 py-1 outline-[#70685a]">
                                        <option value="1">ジュエリー</option>
                                        <option value="2">Afghanistan</option>
                                        <option value="3">Åland Islands</option>
                                        <option value="4">Albania</option>
                                    </select>
                                </td>
                                <td style={Td}>
                                <select id="classificatin" name="classificatin" className="w-full h-11 text-[#70685a] text-[15px] font-bold  px-4 py-1 outline-[#70685a]">
                                        <option value="1">OOOO</option>
                                        <option value="2">Afghanistan</option>
                                        <option value="3">Åland Islands</option>
                                        <option value="4">Albania</option>
                                    </select>
                                </td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>
                                グッチOOOOOOOO
                                </td>
                                <td style={Td}>OOO</td>
                                <td style={Td}></td>
                                <td style={Td}></td>
                                <td style={Td}>
                                    <ButtonComponent children="1" className='w-max !px-5 rounded-lg' style={{  backgroundColor: '#ebe5e1', color: '#626373'}} />
                                </td>
                                <td style={Td}>1</td>
                                <td style={Td}>2024/12/31</td>
                                <td style={Td}>90,000</td>
                                <td style={Td}>90,000</td>
                                <td style={Td}>OOO</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
};

export default PurchaseRequestFormForWholeSaler;