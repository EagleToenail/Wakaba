import React from 'react';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../../Components/Common/Titlebar';
// import ButtonComponent from '../../../Components/Common/ButtonComponent';
// import dateimage from '../../../Assets/img/datepicker.png';
import DateAndTime from '../../../Components/Common/PickData';


const ManagementHeadquartersRepeaterAnalysis = () => {
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
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
    };


    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full ">
                    <div className='flex justify-around' >
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">本部管理画面  リピー夕一分析</h2>
                    </div>
                    <div className='mt-5'>
                        全体
                    </div>
                    <div className='flex'>
                        {/*  Table*/}
                        <div className='flex' style={{width:'30%'}}>
                            <div className='w-full'>
                                <div style={{ width: '100%', overflow: 'auto' }}>
                                    <table className='text-center w-full' style={Table}>
                                        <thead>
                                            <tr>
                                                <td className='bg-[#434343] !text-[white]' style={Td}>合計 </td>
                                                <td width='40%' className='bg-[#434343] !text-[white]' style={Td}> 顧客数</td>
                                                <td width='20%' className='bg-[#434343] !text-[white]' style={Td}>割合 </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td width='40%' style={Td}>合計 </td>
                                                <td width='40%' style={Td} className='text-right'>2654</td>
                                                <td width='20%' style={Td} className='text-right'></td>
                                            </tr>
                                            <tr>
                                                <td width='40%' style={Td}>1回のみ </td>
                                                <td width='40%' style={Td} className='text-right'>2654</td>
                                                <td width='20%' style={Td} className='text-right'>0.00%</td>
                                            </tr>
                                            <tr>
                                                <td width='40%' style={Td}>2回まで利用 </td>
                                                <td width='40%' style={Td} className='text-right'>0</td>
                                                <td width='20%' style={Td} className='text-right'>0.00%</td>
                                            </tr>
                                            <tr>
                                                <td width='40%' style={Td}>3回以上 </td>
                                                <td width='40%' style={Td} className='text-right'>0</td>
                                                <td width='20%' style={Td} className='text-right'>0.00%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div style={{ width: '100%', overflow: 'auto' }} className='mt-8'>
                                    <table className='text-center w-full' style={Table}>
                                        <thead>
                                            <tr>
                                                <td width='40%' className='bg-[#434343] !text-[white]' style={Td}>合計 </td>
                                                <td width='40%' className='bg-[#434343] !text-[white]' style={Td}> 平均利用数</td>
                                                <td width='20%' className='bg-[#434343] !text-[white]' style={Td}>割合 </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td width='40%' style={Td}>平均利用数 </td>
                                                <td width='40%' style={Td} className='text-right'>1.74</td>
                                                <td width='20%' style={Td} className='text-right'></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* {} */}
                        <div style={{width:'70%'}}>
                            <div style={{ width: '100%', overflow: 'auto' }} className='pl-10'>
                                    <table className='text-center w-full' style={Table}>
                                        <thead>
                                            <tr>
                                                <td className='bg-[#a61c00] !text-[white] text-left' style={Td}>補足</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={Td} className='h-[190px] !text-xl'>1.メイン商材:案件で最も買取点数が多かった商材を反映 2.貴金属が含まれる取引数: 案件の中で貴金属が含ま</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                    </div>
                    {/* ---new table--- */}
                    <div className='flex mt-3' style={{width:'40%'}}>
                        <div className='w-full'>
                            <div style={{ width: '100%', overflow: 'auto' }} className='mt-8'>
                                <table className='text-center w-full' style={Table}>
                                    <thead>
                                        <tr>
                                            <td width='30%' className='bg-[#434343] !text-[white]' style={Td}> </td>
                                            <td width='30%' className='bg-[#434343] !text-[white]' style={Td}> 商材</td>
                                            <td width='40%' className='bg-[#434343] !text-[white]' style={Td}>セル </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={Td} className='bg-[#36761f] !text-[white]'>回目取引に含まれる商材 </td>
                                            <td style={Td} >指定なし</td>
                                            <td style={Td} >-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* new table */}
                    <div className='flex mt-3' style={{width:'100%'}}>
                        <div className='w-full'>
                            <div style={{ width: '100%', overflow: 'auto' }} className='mt-8'>
                                <table className='text-center w-full' style={Table}>
                                    <thead>
                                        <tr>
                                            <td className='bg-[#434343] !text-[white]' style={Td}>1回目メイン商材</td>
                                            <td className='bg-[#434343] !text-[white]' style={Td}></td>
                                            <td className='bg-[#434343] !text-[white]' style={Td}>•</td>
                                            <td className='bg-[#434343] !text-[white]' style={Td}>ブ ランド</td>
                                            <td className='bg-[#434343] !text-[white]' style={Td}>時計</td>
                                            <td className='bg-[#434343] !text-[white]' style={Td}>貴金属</td>
                                            <td className='bg-[#434343] !text-[white]' style={Td}>切手</td>
                                            <td className='bg-[#434343] !text-[white]' style={Td}>古銭</td>
                                            <td className='bg-[#434343] !text-[white]' style={Td}>骨董</td>
                                            <td className='bg-[#434343] !text-[white]' style={Td}>香水</td>
                                            <td className='bg-[#434343] !text-[white]' style={Td}>化粧品</td>
                                            <td className='bg-[#434343] !text-[white]' style={Td}>ライター</td>
                                            <td className='bg-[#434343] !text-[white]' style={Td}>鉄道模型</td>
                                            <td className='bg-[#434343] !text-[white]' style={Td}>金劵</td>
                                            <td className='bg-[#434343] !text-[white]' style={Td}>お酒</td>
                                            <td className='bg-[#434343] !text-[white]' style={Td}>カメラ</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={10} style={Td} >1回目利用</td>
                                            <td style={Td} >利用数</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                        </tr>
                                        <tr>
                                            <td style={Td} >切手</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                        </tr>
                                        <tr>
                                            <td style={Td} >古銭</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                        </tr>
                                        <tr>
                                            <td style={Td} >骨董</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                        </tr>
                                        <tr>
                                            <td style={Td} >香水</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                        </tr>
                                        <tr>
                                            <td style={Td} >化粧品</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                        </tr>
                                        <tr>
                                            <td style={Td} >ライター</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                        </tr>
                                        <tr>
                                            <td style={Td} >鉄道模型</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                        </tr>
                                        <tr>
                                            <td style={Td} >金劵</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                        </tr>
                                        <tr>
                                            <td style={Td} >金劵</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
                                            <td style={Td} >0</td>
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

export default ManagementHeadquartersRepeaterAnalysis;