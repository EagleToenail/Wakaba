import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputComponent from '../../../Components/Common/InputComponent';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../../Components/Common/Titlebar';
import ButtonComponent from '../../../Components/Common/ButtonComponent';
import DateAndTime from '../../../Components/Common/PickData';
import LineChart1 from '../../../Components/Chart/LineChart1';


const AccountingInformationVariousTrendData = () => {
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
                <div className="w-full ">

                    <div className='flex justify-center' >
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">本部管理画面  OOOOO店 経理情報 各種数値推移データ</h2>
                    </div>
                    {/*  */}
                    <div className='flex justify-start text-left'>
                        <div className=' text-[#70685a] px-2 mr-5 text-xl font-bold flex flex-col justify-end'>
                            <label className="text-[black] mb-2 block text-center pb-5"><u>各種数値推移データ</u></label>
                        </div>
                    </div>
                    {/*  Tabe*/}
                    <div className='pl-10 pr-10 w-full flex'>
                        <div style={{ width: '100%', overflow: 'auto' }}>
                            <table className='text-center w-full' style={Table}>
                                <thead className='h-10'>
                                    <tr>
                                        {/* <th></th> */}
                                        <th className='text-black'>O店推移</th>
                                        <th width='7%' style={Th} className='!text-black font-bold !bg-[#ebf1de]'>2024年1月</th>
                                        <th width='7%' style={Th} className='!text-black font-bold !bg-[#ebf1de]'>2024年2月</th>
                                        <th width='7%' style={Th} className='!text-black font-bold !bg-[#ebf1de]'>2024年3月</th>
                                        <th width='7%' style={Th} className='!text-black font-bold !bg-[#ebf1de]'>2024年4月</th>
                                        <th width='7%' style={Th} className='!text-black font-bold !bg-[#ebf1de]'>2024年5月</th>
                                        <th width='7%' style={Th} className='!text-black font-bold !bg-[#ebf1de]'>2024年6月</th>
                                        <th width='7%' style={Th} className='!text-black font-bold !bg-[#ebf1de]'>2024年7月</th>
                                        <th width='7%' style={Th} className='!text-black font-bold !bg-[#ebf1de]'>2024年8月</th>
                                        <th width='7%' style={Th} className='!text-black font-bold !bg-[#ebf1de]'>2024年9月</th>
                                        <th width='7%' style={Th} className='!text-black font-bold !bg-[#ebf1de]'>2024年10月</th>
                                        <th width='7%' style={Th} className='!text-black font-bold !bg-[#ebf1de]'>2024年11月</th>
                                        <th width='7%' style={Th} className='!text-black font-bold !bg-[#ebf1de]'>2024年12月</th>
                                        <th width='7%' style={Th} className='!text-black font-bold !bg-[#c4d79b]'>平均</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td className='text-black'>実績</td>
                                            <td style={Td}></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} >#DIV/0!</td>
                                        </tr>
                                        <tr>
                                            <td className='text-black'>予想租利</td>
                                            <td style={Td}></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} >#DIV/0!</td>
                                        </tr>
                                        <tr>
                                            <td className='text-black'>来店数</td>
                                            <td style={Td}></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} >#DIV/0!</td>
                                        </tr>
                                        <tr>
                                            <td className='text-black'>成約数</td>
                                            <td style={Td}></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} >#DIV/0!</td>
                                        </tr>
                                        <tr>
                                            <td className='text-black'>成約率</td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' >#DIV/0!</td>
                                        </tr>
                                        <tr>
                                            <td className='text-black'>租利1件単価</td>
                                            <td style={Td} className='!bg-[#f2dcdb]'></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' ></td>
                                            <td style={Td} className='!bg-[#f2dcdb]' >#DIV/0!</td>
                                        </tr>
                                        <tr>
                                            <td className='text-black'>折込部数</td>
                                            <td style={Td}></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} >0</td>
                                        </tr>
                                        <tr>
                                            <td className='text-black'>折込デザイン</td>
                                            <td style={Td}></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} >#DIV/0!</td>
                                        </tr>
                                </tbody>

                            </table>
                            {/* ---1 */}
                            <table className='text-center w-full' style={Table}>
                                <thead className='h-10'>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td className='font-bold text-black'>実績</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>#DIV/0!</td>
                                        </tr>
                                        <tr>
                                            <td className='text-black'>全店アべレ一ジ</td>
                                            <td style={Td}></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} >#DIV/0!</td>
                                        </tr>
                                </tbody>
                            </table>
                            {/* ---2 */}
                            <table className='text-center w-full' style={Table}>
                                <thead className='h-10'>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td className='font-bold text-black'>租利予想</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>#DIV/0!</td>
                                        </tr>
                                        <tr>
                                            <td className='text-black'>全店アべレ一ジ</td>
                                            <td style={Td}></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} >#DIV/0!</td>
                                        </tr>
                                </tbody>
                            </table>
                            {/* ---3 */}
                            <table className='text-center w-full' style={Table}>
                                <thead className='h-10'>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td className='font-bold text-black'>来店数 </td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>#DIV/0!</td>
                                        </tr>
                                        <tr>
                                            <td className='text-black'>全店アべレ一ジ</td>
                                            <td style={Td}></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} >#DIV/0!</td>
                                        </tr>
                                </tbody>
                            </table>
                            {/* ---4 */}
                            <table className='text-center w-full' style={Table}>
                                <thead className='h-10'>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td className='font-bold text-black'>成約数</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>#DIV/0!</td>
                                        </tr>
                                        <tr>
                                            <td className='text-black'>全店アべレ一ジ</td>
                                            <td style={Td}></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} >#DIV/0!</td>
                                        </tr>
                                </tbody>
                            </table>
                            {/* ---5 */}
                            <table className='text-center w-full' style={Table}>
                                <thead className='h-10'>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td className='font-bold text-black'>租利 1件単価</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>0</td>
                                            <td width='7%' style={Td}>#DIV/0!</td>
                                        </tr>
                                        <tr>
                                            <td className='text-black'>全店アべレ一ジ</td>
                                            <td style={Td}></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} ></td>
                                            <td style={Td} >#DIV/0!</td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='w-full mt-5'>
                        <div className='flex justify-center gap-10'>
                            <LineChart1 title={'実績比較'} subtitle1={'O店'} subtitle2={'参考ア べレ一ジ'}/>
                            <LineChart1 title={'粗利予想比較'} subtitle1={'O店'} subtitle2={'参考ア べレ一ジ'}/>
                        </div>
                        <div className='flex justify-center gap-10 mt-5'>
                            <LineChart1 title={'来店数比較'} subtitle1={'O店'} subtitle2={'参考ア べレ一ジ'}/>
                            <LineChart1 title={'成約数比較'} subtitle1={'O店'} subtitle2={'参考ア べレ一ジ'}/>
                            <LineChart1 title={'粗利単価比較'} subtitle1={'O店'} subtitle2={'参考ア べレ一ジ'}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountingInformationVariousTrendData;