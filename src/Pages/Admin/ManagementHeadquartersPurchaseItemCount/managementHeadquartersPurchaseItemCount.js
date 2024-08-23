import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
// import ButtonComponent from '../../../Components/Common/ButtonComponent';
// import dateimage from '../../../Assets/img/datepicker.png';
import DateAndTime from '../../../Components/Common/PickData';


const ManagementHeadquartersPurchaseItemCount = () => {
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
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '80em' }}>
                    <div className='flex justify-around mt-5' >
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">本部管理画面  買取商品  集計</h2>
                    </div>
                    {/*  Table*/}
                    <div className='mt-10 pl-10 pr-10 pb-20 w-full flex'>
                        <div style={{ width: '100%', overflow: 'auto' }}>
                            <table className='text-center w-full' style={Table}>
                                <thead>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td width='10%' className='bg-[#434343] !text-[white]' style={Td}>対象店舗</td>
                                        <td colSpan={2} width='20%' style={Td}>%</td>
                                        <td width='40%' ></td>
                                        <td width='30%' ></td>
                                    </tr>
                                    <tr>
                                        <td width='10%' className='bg-[#434343] !text-[white]' style={Td}>集計期間</td>
                                        <td width='10%' style={Td}>2024-01-01</td>
                                        <td width='10%' style={Td}>2024-04-16</td>
                                        <td width='40%' ></td>
                                        <td width='30%' ></td>
                                    </tr>
                                    <tr>
                                        <td width='10%' className='bg-[#434343] !text-[white]' style={Td}>媒体 </td>
                                        <td colSpan={2} width='30%' style={Td}>%</td>
                                        <td width='40%' ></td>
                                        <td width='30%' ></td>
                                    </tr>
                                    <tr>
                                        <td width='10%' className='bg-[#434343] !text-[white]' style={Td}>性別</td>
                                        <td colSpan={2} width='20%' style={Td}>%</td>
                                        <td width='40%' ></td>
                                        <td width='30%' ></td>
                                    </tr>
                                    <tr>
                                        <td width='10%' className='bg-[#434343] !text-[white]' style={Td}>年齢</td>
                                        <td width='10%' style={Td}>0歳以上</td>
                                        <td width='10%' style={Td}>90歳以下</td>
                                        <td width='40%' ></td>
                                        <td width='30%' ></td>
                                    </tr>
                                    <tr>
                                        <td width='10%' className='bg-[#434343] !text-[white]' style={Td}>item_category_1</td>
                                        <td colSpan={2} width='0%' style={Td}>%</td>
                                        <td width='40%' ></td>
                                        <td width='30%' ></td>
                                    </tr>
                                    <tr>
                                        <td width='10%' className='bg-[#434343] !text-[white]' style={Td}>item_category_2</td>
                                        <td colSpan={2} width='20%' style={Td}>%</td>
                                        <td width='40%' ></td>
                                        <td width='30%' ></td>
                                    </tr>
                                    <tr>
                                        <td width='10%' className='bg-[#434343] !text-[white]' style={Td}>item_name</td>
                                        <td colSpan={3} width='60%' className='text-left' style={Td}>%</td>
                                        <td width='30%' className='bg-[#434343] !text-[white]' style={Td}></td>
                                    </tr>

                                </tbody>

                            </table>
                            <table className='text-center w-full' style={Table}>
                                <thead>
                                </thead>
                                <tbody style={{overflow:'hidden'}}>
                                    <tr>
                                        <td colSpan={4} width='70%' className='bg-[#434343] !text-[white]' style={Td}></td>
                                        <td width='10%' style={Td}>17,137</td>
                                        <td width='10%' style={Td}>￥187,341,062</td>
                                        <td width='10%' style={Td}>￥10,932</td>
                                    </tr>
                                    <tr className='h-11 bg-[#434343] !text-[white]'>
                                        <td width='10%' className='!text-[white]' style={Td}>item_category_1</td>
                                        <td width='10%' className='!text-[white]' style={Td}>item_category_2</td>
                                        <td width='10%' className='!text-[white]' style={Td}>item_category_3</td>
                                        <td width='40%' className='!text-[white]' style={Td}>item_name</td>
                                        <td width='10%' className='!text-[white]' style={Td}>sum contract</td>
                                        <td width='10%' className='!text-[white]' style={Td}>sum profit</td>
                                        <td width='10%' className='!text-[white]' style={Td}>quotien(sum profisum)</td>
                                    </tr>
                                    <tr className='bg-[#fff2cc]'>
                                        <td width='10%' className='text-left' >テレカ</td>
                                        <td width='10%' className='text-left'>50度数</td>
                                        <td width='10%' className='text-left'></td>
                                        <td width='40%' className='text-left'>テレカ/50度数</td>
                                        <td width='10%' className='text-right'>557</td>
                                        <td width='10%' className='text-right'>￥1,579,490</td>
                                        <td width='10%' className='text-right'>￥2,836</td>
                                    </tr>
                                    <tr>
                                        <td width='10%' className='text-left'>その他 </td>
                                        <td width='10%' className='text-left'>その他</td>
                                        <td width='10%' className='text-left'>一式</td>
                                        <td width='40%' className='text-left'>その他/その他一式</td>
                                        <td width='10%' className='text-right'>527</td>
                                        <td width='10%' className='text-right'>￥825,639</td>
                                        <td width='10%' className='text-right'>￥1,567</td>
                                    </tr>
                                    <tr className='bg-[#fff2cc]'>
                                        <td width='10%' className='text-left'>貴金属</td>
                                        <td width='10%' className='text-left'>貴金属一式</td>
                                        <td width='10%' className='text-left'></td>
                                        <td width='40%' className='text-left'>貴金属/貴金属一式/K18</td>
                                        <td width='10%' className='text-right'>486</td>
                                        <td width='10%' className='text-right'>￥31,906,675</td>
                                        <td width='10%' className='text-right'>￥65,652</td>
                                    </tr>
                                    <tr>
                                        <td width='10%' className='text-left'>古銭</td>
                                        <td width='10%' className='text-left'>硬貨</td>
                                        <td width='10%' className='text-left'>プレミア銀貨(100円硬貨)</td>
                                        <td width='40%' className='text-left'>古銭/硬貨/プレミア銀貨(100円硬貨)</td>
                                        <td width='10%' className='text-right'>384</td>
                                        <td width='10%' className='text-right'>￥1,008,132</td>
                                        <td width='10%' className='text-right'>￥2,625</td>
                                    </tr>
                                    <tr className='bg-[#fff2cc]'>
                                        <td width='10%' className='text-left'>切手</td>
                                        <td width='10%' className='text-left'>切手一式</td>
                                        <td width='10%' className='text-left'></td>
                                        <td width='40%' className='text-left'>切手/切手一式</td>
                                        <td width='10%' className='text-right'>353</td>
                                        <td width='10%' className='text-right'>￥3,804,544</td>
                                        <td width='10%' className='text-right'>￥10,778</td>
                                    </tr>
                                    <tr>
                                        <td width='10%' className='text-left'>貴金属</td>
                                        <td width='10%' className='text-left'>リング</td>
                                        <td width='10%' className='text-left'></td>
                                        <td width='40%' className='text-left'>貴金属/リング/K18</td>
                                        <td width='10%' className='text-right'>348</td>
                                        <td width='10%' className='text-right'>￥4,626,420</td>
                                        <td width='10%' className='text-right'>￥13,294</td>
                                    </tr>
                                    <tr className='bg-[#fff2cc]'>
                                        <td width='10%' className='text-left'>金券</td>
                                        <td width='10%' className='text-left'>信販系ギフト券</td>
                                        <td width='10%' className='text-left'> JCBギフトカード(新券)1000円</td>
                                        <td width='40%' className='text-left'>金券/信販系ギフト券/JCBギフトカード(新券)1000円</td>
                                        <td width='10%' className='text-right'>348</td>
                                        <td width='10%' className='text-right'>￥376,163</td>
                                        <td width='10%' className='text-right'>￥1,081</td>
                                    </tr>
                                    <tr>
                                        <td width='10%' className='text-left'>貴金属</td>
                                        <td width='10%' className='text-left'>ネシクレス</td>
                                        <td width='10%' className='text-left'></td>
                                        <td width='40%' className='text-left'>貴金属/ネシクレス/K18</td>
                                        <td width='10%' className='text-right'>340</td>
                                        <td width='10%' className='text-right'>￥10,153,151</td>
                                        <td width='10%' className='text-right'>￥29,862</td>
                                    </tr>
                                    <tr>
                                        <td width='10%' className='text-left'>金券</td>
                                        <td width='10%' className='text-left'>百貨店の商品券</td>
                                        <td width='10%' className='text-left'>ギ全国百貨店共通券 1000円</td>
                                        <td width='40%' className='text-left'>金券/百貨店の商品券/ギ全国百貨店共通券 1000円</td>
                                        <td width='10%' className='text-right'>242</td>
                                        <td width='10%' className='text-right'>￥192,278</td>
                                        <td width='10%' className='text-right'>￥795</td>
                                    </tr>
                                    <tr>
                                        <td width='10%' className='text-left'>テレカ</td>
                                        <td width='10%' className='text-left'>105度数</td>
                                        <td width='10%' className='text-left'></td>
                                        <td width='40%' className='text-left'>テレカ/105度数</td>
                                        <td width='10%' className='text-right'>228</td>
                                        <td width='10%' className='text-right'>￥370,790</td>
                                        <td width='10%' className='text-right'>￥1,626</td>
                                    </tr>
                                    <tr>
                                        <td width='10%' className='text-left'>古銭</td>
                                        <td width='10%' className='text-left'>古銭一式</td>
                                        <td width='10%' className='text-left'>その他</td>
                                        <td width='40%' className='text-left'>古銭/古銭一式/その他</td>
                                        <td width='10%' className='text-right'>192</td>
                                        <td width='10%' className='text-right'>￥361,518</td>
                                        <td width='10%' className='text-right'>￥1,883</td>
                                    </tr>
                                    <tr className='bg-[#fff2cc]'>
                                        <td width='10%' className='text-left'>古銭</td>
                                        <td width='10%' className='text-left'>古銭一式</td>
                                        <td width='10%' className='text-left'>外国コイン</td>
                                        <td width='40%' className='text-left'>古銭/古銭一式/外国コイン</td>
                                        <td width='10%' className='text-right'>162</td>
                                        <td width='10%' className='text-right'>￥74,814</td>
                                        <td width='10%' className='text-right'>￥462</td>
                                    </tr>


                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManagementHeadquartersPurchaseItemCount;