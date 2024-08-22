import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import LabelComponent from '../../../Components/Common/LabelComponent';
import ButtonComponent from '../../../Components/Common/ButtonComponent';
import DateAndTime from '../../../Components/Common/PickData';


const OwnerAnalysisComprehensiveAnalysis = () => {
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
            <DateAndTime />


            <div className='flex justify-around mt-5' >
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">オーナー管理画面&nbsp;&nbsp;    総合分析</h2>
            </div>
            {/*  */}
            <div className='flex mt-3 justify-center text-left'>
                <div className=' text-[#70685a] px-2 mr-2 text-left'> 
                    <ButtonComponent children={'当月'} className='w-20 !px-5 !rounded-sm  !bg-[#70685a]' />
                    <div className='flex justify-center text-center'>
                        <LabelComponent value={'12月'} className='text-left' />
                    </div>
                   
                </div>

                <div className=' text-[#70685a] px-2 mr-2 text-left'> 
                    <ButtonComponent children={'先生'} className='w-20 !px-5 !rounded-sm !bg-[transparent] !text-[#70685a] border !border-[#70685a]' />                
                </div>
                <div className=' text-[#70685a] px-2 mr-2 text-left'> 
                    <ButtonComponent children={'今年'} className='w-20 !px-5 !rounded-sm !bg-[transparent] !text-[#70685a] border !border-[#70685a]' />                
                </div>
                <div className=' text-[#70685a] px-2 mr-2 text-left'> 
                    <ButtonComponent children={'当月'} className='w-20 !px-5 !rounded-sm !bg-[transparent] !text-[#70685a] border !border-[#70685a]' />                
                </div>
                <div className=' text-[#70685a] px-2 mr-2 text-left'>
                    <select id="classification" name="classification" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                        <option value="執行役員">2024年</option>
                        <option value="社員">社員</option>
                        <option value="契約社員">契約社員</option>
                        <option value="アルバイト">アルバイト
                        </option>
                    </select>
                </div>
                <div className=' text-[#70685a] px-2 mr-2 text-left'>
                    <select id="classification" name="classification" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                        <option value="執行役員">12月</option>
                        <option value="社員">社員</option>
                        <option value="契約社員">契約社員</option>
                        <option value="アルバイト">アルバイト
                        </option>
                    </select>
                </div>
                <div className=' text-[#70685a] px-2 mr-2 text-left'>
                    <select id="classification" name="classification" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                        <option value="執行役員">2024年</option>
                        <option value="社員">社員</option>
                        <option value="契約社員">契約社員</option>
                        <option value="アルバイト">アルバイト
                        </option>
                    </select>
                </div>
                <div className=' text-[#70685a] px-2 mr-2 text-left'>
                    <select id="classification" name="classification" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                        <option value="執行役員">12月</option>
                        <option value="社員">社員</option>
                        <option value="契約社員">契約社員</option>
                        <option value="アルバイト">アルバイト
                        </option>
                    </select>
                </div>

            </div>
            {/*  Table*/}
            <div className='mt-10 pl-10 pr-10 pb-20 w-full flex'>
                <table className='text-center w-full' style={Table}>
                    <thead>
                        <tr>
                            <th>店鋪名</th>
                            <th>来店数</th>
                            <th>成約数</th>
                            <th>不成約数 </th>
                            <th>成約率</th>
                            <th> 買取率</th>
                            <th>買取金額合計</th>
                            <th>租利単価 </th>
                            <th> 租利合計</th>
                            <th> 租利率</th>
                            <th>入電数</th>
                            <th>来店問い合わ せ数</th>
                            <th>お預から数</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={Td}>OOOOOO生駒店</td>
                            <td style={Td}>9,999,999</td>
                            <td style={Td}>9,999,999</td>
                            <td style={Td}>9,999,999</td>
                            <td style={Td}>99,9</td>                                                               
                            <td style={Td}>99.9</td>
                            <td style={Td}>99,999,999</td>
                            <td style={Td}>99,999,999</td>
                            <td style={Td}>99,999,999</td>
                            <td style={Td}>99,9</td>
                            <td style={Td}>999,999</td>
                            <td style={Td}>999,999</td>
                            <td style={Td}>9,999,999</td>
                        </tr>
                        <tr>
                            <td >全店舗合計</td>
                            <td >9,999,999</td>
                            <td >9,999,999</td>
                            <td >9,999,999</td>
                            <td ></td>                                                               
                            <td ></td>
                            <td >99,999,999</td>
                            <td >99,999,999</td>
                            <td >99,999,999</td>
                            <td ></td>
                            <td >999,999</td>
                            <td >999,999</td>
                            <td >9,999,999</td>
                        </tr>
                        <tr>
                            <td >平均</td>
                            <td >9,999,999</td>
                            <td >9,999,999</td>
                            <td >9,999,999</td>
                            <td >99,9</td>                                                               
                            <td >99.9</td>
                            <td >99,999,999</td>
                            <td >99,999,999</td>
                            <td >99,999,999</td>
                            <td >99,9</td>
                            <td >999,999</td>
                            <td >999,999</td>
                            <td >9,999,999</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default OwnerAnalysisComprehensiveAnalysis;