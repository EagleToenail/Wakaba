import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import DateAndTime from '../../Components/Common/PickData';


const CustomerReceipt = () => {
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
        fontSize: '15px',
    };

    return (
        <>
            <Titlebar title={title} />
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '90em' }}>
                    <div className='flex justify-around mt-10 '>
                        <div className='flex ' style={{ visibility: 'hidden' }}>
                            <button type="button"
                                className="mr-10  py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">Purple</button>
                        </div>
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">お客様   預かり証   印 刷確認画面</h2>
                        <div className='flex j'>
                            <ButtonComponent children={'印刷'} className='h-11 py-2'/>
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex mt-5 justify-around w-full' >
                        <div className=' text-[#70685a] text-[20px] px-2 mr-2'>
                            <div className='flex font-bold'>
                                    <div>買取計算書No.000000</div>
                            </div>

                        </div>
                        <div className=' text-[#70685a] px-2 mr-2'>
                            <div className='flex'>
                                <div className='text-right font-bold'>
                                    <div>お名前</div>
                                </div>
                                <div className='ml-5 text-left'>
                                    <div>OOOO</div>
                                </div>
                            </div>
                        </div>
                        <div className=' text-[#70685a] px-2 mr-2'>
                            <div className='flex'>
                                <div className='text-right font-bold'>
                                    <div>お電話番号</div>
                                </div>
                                <div className='ml-5 text-left'>
                                    <div>OOOO</div>
                                </div>
                            </div>
                        </div>
                        <div className=' text-[#70685a] px-2 mr-2 w-40'>
                                <DateAndTime/>
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex'>
                        <div style={{ width: '25%' }}>
                            <div className='flex justify-center text-[#70685a]'>
                                <div className='flex jsutify-center'>
                                    <div className='text-right font-bold'>
                                        <div>店舗名</div>
                                    </div>
                                    <div className='ml-5 text-left'>
                                        <div>OOOO</div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center text-[#70685a] '>
                                <div className='flex jsutify-center'>
                                    <div className='text-right font-bold'>
                                        <div>担当</div>
                                    </div>
                                    <div className='ml-5 text-left'>
                                        <div>OOOO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '50%' }}>
                            <div className='flex justify-center pt-3 text-[#70685a] text-[20px] font-bold' >
                                <div className='text-[#70685a]'>下記商品を、令和99年12月30日までお預かり致します</div>
                            </div>
                        </div>
                        <div style={{ width: '25%' }}></div>
                    </div>
                    {/*  Tabe*/}
                    <div className='pl-20 pr-20 pb-20 flex justify-center mt-10' >
                        <div style={{ width: '40%' }}>
                            <table className='text-center w-full' style={Table}>
                                <thead>
                                    <tr>
                                        <th ></th>
                                        <th width='70%'>商品名</th>
                                        <th>個数</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td style={Td}>グッチOOOOOOO</td>
                                        <td style={Td}>1</td>
                                    </tr>
                                    <tr>
                                        <td>2.</td>
                                        <td style={Td}>グッチOOOOOOO</td>
                                        <td style={Td}>1</td>
                                    </tr>
                                    <tr>
                                        <td>3.</td>
                                        <td style={Td}>グッチOOOOOOO</td>
                                        <td style={Td}>1</td>
                                    </tr>
                                    <tr>
                                        <td>4.</td>
                                        <td style={Td}>グッチOOOOOOO</td>
                                        <td style={Td}>1</td>
                                    </tr>
                                    <tr>
                                        <td>5.</td>
                                        <td style={Td}>グッチOOOOOOO</td>
                                        <td style={Td}>1</td>
                                    </tr>
                                    <tr>
                                        <td>6.</td>
                                        <td style={Td}>グッチOOOOOOO</td>
                                        <td style={Td}>1</td>
                                    </tr>
                                    <tr>
                                        <td>6.</td>
                                        <td style={Td}>グッチOOOOOOO</td>
                                        <td style={Td}>1</td>
                                    </tr>
                                    <tr>
                                        <td>7.</td>
                                        <td style={Td}>記念切手OOO</td>
                                        <td style={Td}>120</td>
                                    </tr>
                                    <tr>
                                        <td>8.</td>
                                        <td style={Td}>ティファニーOOOOOOO</td>
                                        <td style={Td}>1</td>
                                    </tr>
                                    <tr>
                                        <td>9.</td>
                                        <td style={Td}>グッチOOOOOOO</td>
                                        <td style={Td}>1</td>
                                    </tr>
                                    <tr>
                                        <td>10.</td>
                                        <td style={Td}>YSL xxxxxxxxxxxxxxx</td>
                                        <td style={Td}>1</td>
                                    </tr>
                                    <tr>
                                        <td>11.</td>
                                        <td style={Td}>YSL xxxxxxxxxxxxxxx</td>
                                        <td style={Td}>1</td>
                                    </tr>
                                    <tr>
                                        <td>12.</td>
                                        <td style={Td}>日本刀 OOOO</td>
                                        <td style={Td}>1</td>
                                    </tr>
                                </tbody>

                            </table>
                            <div className='flex justify-end font-bold text-[#70685a]'>
                                    999点
                            </div>
                            </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerReceipt;