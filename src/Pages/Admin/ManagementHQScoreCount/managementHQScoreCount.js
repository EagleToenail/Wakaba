import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
// import ButtonComponent from '../../../Components/Common/ButtonComponent';
// import dateimage from '../../../Assets/img/datepicker.png';
import DateAndTime from '../../../Components/Common/PickData';


const ManagementHQScoreCount = () => {
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


    return (
        <>
            <Titlebar title={title} />
            <DateAndTime/>
            <div className='flex justify-around mt-5' >
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">本部管理画面   スコア集計</h2>
            </div>
            {/*  */}
            <div className='flex mt-10 justify-center text-left'>
                <div className=' text-[#70685a] px-2 mr-10 text-left'>
                    <select id="classification" name="classification" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                        <option value="生駒店">OOOOOOOOO生駒店</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                    </select>
                </div>
                <div className=' text-[#70685a] px-2 ml-10 text-left'>
                    <select id="classification" name="classification" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                    </select>
                </div>

            </div>
            {/*  Tabe*/}
            <div className='mt-10 pl-10 pr-10 pb-20 w-full flex'>
                <table className='text-center w-full' style={Table}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>店舗名</th>
                            <th>1月</th>
                            <th>2月</th>
                            <th>3月</th>
                            <th>4月</th>
                            <th>5月</th>
                            <th>6月</th>
                            <th>7月</th>
                            <th>8月</th>
                            <th>9月</th>
                            <th>10月</th>
                            <th>11月</th>
                            <th>12月</th>
                            <th>合計</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width='2%' style={Td}>(折)</td>
                            <td width='7%'  style={Td}>広告費</td>
                            <td width='7%' style={Td}>9,999,999</td>
                            <td width='7%' style={Td}>9,999,999</td>
                            <td width='7%' style={Td}>9,999,999</td>
                            <td width='7%' style={Td}>9,999,999</td>
                            <td width='7%' style={Td}>9,999,999</td>
                            <td width='7%' style={Td}>9,999,999</td>
                            <td width='7%' style={Td}>9,999,999</td>
                            <td width='7%' style={Td}>9,999,999</td>
                            <td width='7%' style={Td}>9,999,999</td>
                            <td width='7%' style={Td}>9,999,999</td>
                            <td width='7%' style={Td}>9,999,999</td>
                            <td width='7%' style={Td}>9,999,999</td>
                            <td width='7%' style={Td}>9,999,999</td>
                        </tr>
                        <tr>
                            <td width='2%' style={Td}>(折)</td>
                            <td width='7%'  style={Td}>成約数 </td>
                            <td width='7%' style={Td}> </td>
                            <td width='7%' style={Td}> </td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}> </td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}> </td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                            <td width='7%' style={Td}></td>
                        </tr>
                        <tr>
                            <td width='2%' style={Td}>(折)</td>
                            <td width='7%'  style={Td}>粗利益</td>
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
                            <td width='2%' style={Td}>(折)</td>
                            <td width='7%'  style={Td}>1成約広告費</td>
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
                            <td width='2%' style={Td}>(折)</td>
                            <td width='7%'  style={Td}>1成約粗利</td>
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
                            <td width='2%' style={Td}>(折)</td>
                            <td width='7%'  style={Td}> 広告益</td>
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
                            <td width='2%' style={Td}>(折)</td>
                            <td width='7%'  style={Td}> 広告利益率</td>
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
                            <td width='2%' style={Td}>(S)</td>
                            <td width='7%'  style={Td}>広告費</td>
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
                            <td width='2%' style={Td}>(S)</td>
                            <td width='7%'  style={Td}>成約数</td>
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
                            <td width='2%' style={Td}>(S)</td>
                            <td width='7%'  style={Td}>粗利益</td>
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
                            <td width='2%' style={Td}>(S)</td>
                            <td width='7%'  style={Td}>1成約広告費</td>
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
                            <td width='2%' style={Td}>(S)</td>
                            <td width='7%'  style={Td}>1成約粗利</td>
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
                            <td width='2%' style={Td}>(s)</td>
                            <td width='7%'  style={Td}>広告益</td>
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
                            <td width='2%' style={Td}>(S)</td>
                            <td width='7%'  style={Td}>広告利益率</td>
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
                            <td width='2%' style={Td}></td>
                            <td width='7%'  style={Td}>総粗利</td>
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
                            <td width='2%' style={Td}></td>
                            <td width='7%'  style={Td}>単月コスト</td>
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
                            <td width='2%' style={Td}></td>
                            <td width='7%'  style={Td}>管業利益</td>
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
                            <td width='2%' style={Td}></td>
                            <td width='7%'  style={Td}>利益率</td>
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

export default ManagementHQScoreCount;