import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputComponent from '../../../Components/Common/InputComponent';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../../Components/Common/Titlebar';
import ButtonComponent from '../../../Components/Common/ButtonComponent';
import DateAndTime from '../../../Components/Common/PickData';
import DoughnutChart from '../../../Components/Chart/DoughnutChart';
import ColumnChart from '../../../Components/Chart/ColumnChart';


const ManagementHeadquarterAnalysisAndOthers = () => {
    // const title = 'タイトルタイトル';

    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    const Th = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
        whiteSpace: 'nowrap',
    };
    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
        whiteSpace: 'nowrap',
        textAlign:'left'
    };
    const Td1 = {
        // border: '1px solid #6e6e7c',
        // borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
        whiteSpace: 'nowrap',
        textAlign:'left'
    };

    // const [category, setCategory] = useState([]);
    // useEffect(() => {
    //     const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
    //     if (!wakabaBaseUrl) {
    //         throw new Error('API base URL is not defined');
    //     }

    //     axios.get(`${wakabaBaseUrl}/ProductType1s`)
    //         .then(response => {
    //             setCategory(response.data);
    //         })
    //         .catch(error => {
    //             console.error("There was an error fetching the customer data!", error);
    //         });
    // }, []);


    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full">
                    <div className='w-full flex justify-center'>
                        <div className='w-[30%] flex'>
                            <table className='text-center !w-[50%]' style={Table}>
                                <thead className='h-8'>
                                    <tr>
                                        <td style={Td} className='!text-black font-bold '>店舗名</td>
                                        <td style={Td} className='!text-black font-bold flex'>
                                            <div className='w-10'>
                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1hkft75" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownOutlinedIcon" title="ArrowDropDownOutlined"><path d="m7 10 5 5 5-5z"></path></svg>
                                            </div>
                                            <div className='flex flex-col justify-center'>
                                                金体or店舗指定
                                            </div>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={Td} className='!text-black font-bold '>集計期間</td>
                                        <td style={Td} className='!text-black font-bold  flex'>
                                        <div className='w-10'>
                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1hkft75" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownOutlinedIcon" title="ArrowDropDownOutlined"><path d="m7 10 5 5 5-5z"></path></svg>
                                            </div>
                                            <div className='flex flex-col justify-center'>
                                            任意期間指定
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={Td} className='!text-black font-bold '>件数</td>
                                        <td style={Td} className='!text-black font-bold '>以下の件数合計(付番の最後)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='flex justify-center w-[40%]' >
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">本部管理画面  分析その他</h2>
                        </div>
                        <div className='w-[30%]'></div>
                    </div>
                    {/* doughnut chart */}
                    <div className='w-full flex'>
                        <div className='w-1/2 flex'>
                            <DoughnutChart title={'媒体別シエア率'}/>
                            <DoughnutChart title={'カテゴリ別シエア率'}/>
                        </div>
                        <div className='w-1/2 flex justify-center'>
                            <div className='w-[70%]'>
                                <ColumnChart/>
                                <table className='text-left ml-7' style={Table}>
                                    <thead className='h-8'>
                                        <tr>
                                            <td style={Td1} className='!text-black font-bold' width='13%'>20件</td>
                                            <td style={Td1} className='!text-black font-bold ' width='10%'>15件</td>
                                            <td style={Td1} className='!text-black font-bold ' width='13%'>13件</td>
                                            <td style={Td1} className='!text-black font-bold ' width='13%'>50件</td>
                                            <td style={Td1} className='!text-black font-bold ' width='12%'>2件</td>
                                            <td style={Td1} className='!text-black font-bold ' width='12%'>30件</td>
                                            <td style={Td1} className='!text-black font-bold ' width='12%'>20件</td>
                                            <td style={Td1} className='!text-black font-bold '>60件</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={Td1} className='!text-black font-bold '>250万円</td>
                                            <td style={Td1} className='!text-black font-bold '>230万円</td>
                                            <td style={Td1} className='!text-black font-bold '>200万円</td>
                                            <td style={Td1} className='!text-black font-bold '>100万円</td>
                                            <td style={Td1} className='!text-black font-bold '>50万円</td>
                                            <td style={Td1} className='!text-black font-bold '>80万円</td>
                                            <td style={Td1} className='!text-black font-bold '>50万円</td>
                                            <td style={Td1} className='!text-black font-bold '>30万円</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='text-center text-xl mt-2 font-smbold'>
                                     粗利構成
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ==== */}
                    <div className='w-full flex justify-end pr-10'>
                            <table className='text-center !w-[20%]' style={Table}>
                                <thead className='h-8'>
                                    <tr>
                                        <td style={Td} className='!text-black font-bold '>買取額合計</td>
                                        <td style={Td} className='!text-black font-bold'>卸額合計 </td>
                                        <td style={Td} className='!text-black font-bold'>粗利合計</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={Td} className='!text-black font-bold '>￥224,000</td>
                                        <td style={Td} className='!text-black font-bold '>￥312,200</td>
                                        <td style={Td} className='!text-black font-bold '>￥88,200</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    {/*  Table*/}
                    <div className='pl-10 pr-10 w-full flex gap-10 mt-3'>
                        <div style={{ width: '100%', overflow: 'auto' }} >
                            <table className='text-center w-full' style={Table}>
                                <thead className='h-10'>
                                    <tr className='!text-black font-bold'>
                                        {/* <th></th> */}
                                        <th  className='!text-black'>付番</th>
                                        <th className='!text-black'>日付</th>
                                        <th className='!text-black'>媒体</th>
                                        <th className='!text-black'>性別</th>
                                        <th className='!text-black'>年齢</th>
                                        <th className='!text-black'>カテゴリA</th>
                                        <th className='!text-black'>カテゴリB</th>
                                        <th className='!text-black'>名前</th>
                                        <th className='!text-black'>買取客</th>
                                        <th className='!text-black'>卸額</th>
                                        <th className='!text-black'>粗利</th>
                                    </tr>
                                    <tr>
                                        <td colSpan="11">
                                            <hr className="border-t border-gray-300 my-1" />
                                            <hr className="border-t border-gray-300 my-1" />
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>

                            </table>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default ManagementHeadquarterAnalysisAndOthers;