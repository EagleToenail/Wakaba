import React from 'react';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
// import StampSheet from '../../Assets/img/stampsheet.png'
// import LetterPack from '../../Assets/img/letterpack.png'
// import StampRose from '../../Assets/img/stamprose.png'
// import PostCard from '../../Assets/img/postcard.png'
import LabelComponent from '../../Components/Common/LabelComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import InputComponent from '../../Components/Common/InputComponent';
import DateAndTime from '../../Components/Common/PickData';


const CommemorativeCoinExchange = () => {
    // const title = 'タイトルタイトル';

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
            {/* <Titlebar title={title} /> */}
            <DateAndTime/>
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '90em' }}>
                    <h2 className="text-[#70685a] text-center text-[20px] font-bold flex justify-center">記念硬貨/お札   両替依頼書   新規作成</h2>
                    <div className=' ml-10'>
                        <div style={{width:'30%'}}>
                            <div className='flex ml-12' style={{width:'30%'}}>
                                <div className='text-right font-bold text-[#70685a]'>
                                    <div>担当</div>
                                </div>
                                <div className='ml-5 text-left text-[#70685a]' >
                                    <div>OOOO</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex'>
                        <div style={{width:'30%'}}>
                            <div className='flex ml-10'>
                                <div className='text-right font-bold text-[#70685a]'>
                                    <div className='mt-1'>TEL</div>
                                    <div className='mt-1'>実行予定日</div>
                                    <div className='mt-1'>銀行名</div>
                                </div>
                                <div className='ml-5 text-left text-[#70685a]'>
                                    <div className='mt-1'>OOOO</div>
                                    <div className='mt-1'><InputComponent style={{ width: '100px', height: '30px' }} /></div>
                                    <div className='mt-1'><InputComponent style={{ width: '200px', height: '30px' }} /></div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center mt-5' style={{width:'40%'}}><ButtonComponent children={'Print'} className='h-11'/></div>
                        <div style={{width:'30%'}}></div>
                    </div>
                    <div className='flex justify-center'>
                        <div>
                            <div className='flex w-full'>
                                <LabelComponent value="~~~日に、~~~銀行に、~~円 を両替に持っていきます。" style={{ fontWeight: 'bold' }} />
                            </div>
                        </div>
                    </div>
                    {/* second */}
                    <div className='flex justify-center mt-2a'>
                        <div className='flex'>
                            <div className='text-right font-bold text-[#70685a]'>
                                <div>合計枚数 </div>
                            </div>
                            <div className='ml-5 text-left text-[#70685a]' >
                                <div>OOOO</div>
                            </div>
                        </div>
                        <div className='flex ml-12'>
                            <div className='text-right font-bold text-[#70685a]'>
                                <div>合計金額</div>
                            </div>
                            <div className='ml-5 text-left text-[#70685a]' >
                                <div>OOOO</div>
                            </div>
                        </div>
                    </div>
                    {/* Table data */}
                    {/* mainpart */}
                    {/* fistline */}
                    <div className='flex'>
                        <div className='mt-5 w-1/2 ml-20'>
                            <div className='flex'>
                                <div className='flex justify-center w-full'>
                                    <div className='flex'>
                                        <div className='w-10 flex flex-col justify-center'><div className='w-10 h-10 rounded-full bg-[#70685a]'></div></div>
                                        <div className='flex flex-col justify-center'><LabelComponent value="硬貸" className='pl-5 !text-[20px] font-bold' /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10 w-1/2 ml-10'>
                            <div className='flex'>
                                <div className='flex justify-center w-full'>
                                    <div className='flex'>
                                        <div className='w-10 flex flex-col justify-center'><div className='w-10 h-7 bg-[#70685a]'></div></div>
                                        <div className='flex flex-col justify-center'><LabelComponent value="お札" className='pl-5 !text-[20px] font-bold' /></div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                    {/* Secondline */}
                    <div className='flex'>
                        <div className='flex justify-center w-1/2 ml-20'>
                            <div className='mt-5' style={{ width: '70%' }}>
                                <table className=' text-center w-full' style={Table}>
                                    <thead>
                                    <tr>
                                            <th >小計3</th>
                                            <th >100,000</th>
                                            <th >¥100,000,000</th>
                                        </tr>
                                        <tr>
                                            <th >額面 </th>
                                            <th >数</th>
                                            <th >小計1</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={Td}>10,000円</td>
                                            <td style={Td}>100,000</td>
                                            <td style={Td}>¥100,000,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='flex justify-center mt-2'>
                                <button type="button"
                                    className="w-5 h-5 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                        <path
                                            d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                            data-original="#000000" />
                                    </svg>
                                </button>
                            </div>
                            </div>
                        </div>
                        <div className='flex justify-center w-1/2 ml-10  mr-10' >
                            <div className='mt-5' style={{ width: '70%' }}>
                            <table className=' text-center w-full' style={Table}>
                                    <thead>
                                    <tr>
                                            <th >小計3</th>
                                            <th >100,000</th>
                                            <th >¥100,000,000</th>
                                        </tr>
                                        <tr>
                                            <th >額面 </th>
                                            <th >数</th>
                                            <th >小計1</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={Td}>10,000円</td>
                                            <td style={Td}>100,000</td>
                                            <td style={Td}>¥100,000,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='flex justify-center mt-2'>
                                <button type="button"
                                    className="w-5 h-5 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                        <path
                                            d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                            data-original="#000000" />
                                    </svg>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CommemorativeCoinExchange;