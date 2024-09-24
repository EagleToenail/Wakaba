import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputComponent from '../../../Components/Common/InputComponent';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../../Components/Common/Titlebar';
import ButtonComponent from '../../../Components/Common/ButtonComponent';
import DateAndTime from '../../../Components/Common/PickData';
import PieChart from '../../../Components/Chart/PieChart';


const AccountingInformationVariousReferenceData = () => {
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
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">本部管理画面  経理情報 参考データ</h2>
                    </div>
                    {/*  */}
                        {/*  */}
                        <div className='whole-saler-shipping flex mt-3 justify-start  pr-40 pl-10'>
                            <div className='flex justify-center mt-5'>
                                <div className=' text-[#70685a] px-2 mr-2 font-bold'>
                                    <select name="product_status" className="w-[200px] h-11 text-[#70685a] text-[15px] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                        <option disabled >店舗名</option>
                                        <option value="店舗名">店舗名</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex justify-center mt-5'>
                                <div className=' text-[#70685a] px-2 mr-5 flex flex-col justify-center'>
                                    < button type="button" style={{ display: 'flex', alignItem: 'end' }} className="flex align-end w-20 px-3 py-2 font-bold rounded-md tracking-wide text-[#665b4c] justify-center text-white bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                                        表示
                                    </button>
                                </div>
                            </div>
                        </div>
                    {/*  Table*/}
                    <div className='pl-10 pr-10 w-full flex gap-10 mt-2'>
                        <div style={{ width: '70%', overflow: 'auto' }} >
                            <p>2024年1月</p>
                            <table className='text-center w-full' style={Table}>
                                <thead className='h-10'>
                                    <tr className='!text-black'>
                                        {/* <th></th> */}
                                        <th></th>
                                        <th colSpan={2}>買取額</th>
                                        <th colSpan={2}>売上額</th>
                                        <th colSpan={2}>全店平均</th>
                                        <th colSpan={2}>買取率</th>

                                    </tr>
                                    <tr className='!text-black font-bold !bg-[#ebf1de]'>
                                        {/* <th></th> */}
                                        <th style={Th}  className='!text-black'></th>
                                        <th style={Th} className='!text-black'>当店</th>
                                        <th style={Th} className='!text-black'>全店平均</th>
                                        <th style={Th} className='!text-black'>当店</th>
                                        <th style={Th} className='!text-black'>全店平均</th>
                                        <th style={Th} className='!text-black'>当店</th>
                                        <th style={Th} className='!text-black'>全店平均</th>
                                        <th style={Th} className='!text-black'>当店</th>
                                        <th style={Th} className='!text-black'>全店平均</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'>カメラ</td>
                                            <td style={Td}></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                        </tr>
                                        <tr>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'>その他</td>
                                            <td style={Td}></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                        </tr>
                                        <tr>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'>テレカ</td>
                                            <td style={Td}></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                        </tr>
                                        <tr>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'>ブランド</td>
                                            <td style={Td}></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                        </tr>
                                        <tr>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'>貴金属</td>
                                            <td style={Td}></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                        </tr>
                                        <tr>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'>金券</td>
                                            <td style={Td}></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                        </tr>
                                        <tr>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'>携帯</td>
                                            <td style={Td}></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                        </tr>
                                        <tr>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'>古銭</td>
                                            <td style={Td}></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                        </tr>
                                        <tr>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'>酒</td>
                                            <td style={Td}></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                        </tr>
                                        <tr className='h-8'>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td}></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                        </tr>
                                        <tr className='h-8'>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td}></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                        </tr>
                                        <tr>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'>切手</td>
                                            <td style={Td}></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                        </tr>
                                        <tr>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'>通貨</td>
                                            <td style={Td}></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'></td>
                                        </tr>
                                        <tr className='!text-black font-bold !bg-[#c4d79b]'>
                                            <td style={Td} className='!text-black'>総計</td>
                                            <td style={Td}></td>
                                            <td style={Td} className='!text-black'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black'></td>
                                            <td style={Td} ></td>
                                            <td style={Td} className='!text-black'></td>
                                        </tr>
                                </tbody>

                            </table>
                        </div>
                        <div style={{ width: '30%', overflow: 'auto' }} className='mt-6'>
                            {/* ---1 */}
                            <div className='w-full flex justify-center'>
                                <div style={{width:'70%'}}>
                                    <table className='text-center w-full' style={Table}>
                                        <thead className='h-10 ' >
                                            <tr className='!text-black font-bold'>
                                                <th width="100%" colSpan={3}>来店成約種別</th>
                                            </tr>
                                            <tr className='!text-black font-bold !bg-[#ebf1de]'>
                                                <th width='60%' style={Td}> </th>
                                                <th width='20%' style={Td}>当店</th>
                                                <th width='20%' style={Td}>全店</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                <tr>
                                                    <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'>HP</td>
                                                    <td style={Td}></td>
                                                    <td style={Td}></td>

                                                </tr>
                                                <tr>
                                                    <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'>その他/ボステイング</td>
                                                    <td style={Td}></td>
                                                    <td style={Td}></td>
                                                </tr>
                                                <tr>
                                                    <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'>顧客</td>
                                                    <td style={Td}> </td>
                                                    <td style={Td}> </td>
                                                </tr>
                                                <tr>
                                                    <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'> 紹介</td>
                                                    <td style={Td}> </td>
                                                    <td style={Td}> </td>
                                                </tr>
                                                <tr>
                                                    <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'> 折込</td>
                                                    <td style={Td}> </td>
                                                    <td style={Td}> </td>
                                                </tr>
                                                <tr>
                                                    <td style={Td} className='!text-black font-bold !bg-[#ebf1de]'> 店舗前</td>
                                                    <td style={Td}> </td>
                                                    <td style={Td}> </td>
                                                </tr>
                                                <tr>
                                                    <td style={Td} className='!text-black font-bold !bg-[#c4d79b]'> 総計</td>
                                                    <td style={Td}> </td>
                                                    <td style={Td}> </td>
                                                </tr>
                                            </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='flex w-full justify-center'>
                                <PieChart value={[{ value: 10, title: '当店' }, { value: 20, title: 'Title 2' }]}/>
                                <PieChart value={[{ value: 10, title: '全店' }, { value: 20, title: 'Title 2' }]}/>
                            </div>
                            <div className='w-full flex justify-center'>
                                <table className='text-center !w-[50%]' style={Table}>
                                    <thead className='h-8'>
                                        <tr>
                                            <th style={Th} className='!text-black font-bold !bg-[#c4d79b]'>粗利値(予想値バース)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr>
                                                <td style={Td}>￥2,477,506</td>
                                            </tr>
                                        </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountingInformationVariousReferenceData;