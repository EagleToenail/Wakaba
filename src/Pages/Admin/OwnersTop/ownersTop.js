import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/PickData';


const OwnersTop = () => {
    const title = 'タイトルタイトル';

    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center',
        fontSize:'15px'
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
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '90em' }}>
                    <div className='flex justify-center'>
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">管理画面TOP</h2>
                    </div>
                    {/*  */}
                    <div className='flex mt-3 justify-around'>
                        <div className=' text-[#70685a] px-2 mr-5' style={{visibility:'hidden'}}>
                            < button type="button" className="w-max px-10 px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                            OOOOOOOOOOO
                            </button>
                        </div>
                        <div className=' text-[#70685a] px-2'>
                            <label className="text-[#70685a] font-bold text-2xl mb-2 block text-center !mb-0">2024年12月度</label>
                        </div>
                        <div className=' text-[#70685a] px-2 mr-5'>
                            < button type="button" className="w-max px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                            総合分析へ
                            </button>
                        </div>
                    </div>
                    {/*  Tabe*/}
                    <div className='flex justify-center mt-10 w-full' >
                        <div className='flex pt-3' style={{ width: '5%' ,overflow:'auto'}}>
                            <div className='flex flex-col justify-center'>
                                <div  className='w-3 h-3 bg-[#70685a] '></div>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <div className='text-[#70685a] font-bold ml-3'>現況 表示</div>
                            </div>
                        </div>
                        <div style={{ width: '95%' }} className='flex'>
                            <div style={{ width: '100%' ,overflow:'auto'}}>
                                <table className=' text-center w-full' style={Table}>
                                <thead>
                                    <tr>
                                        <th>店舗名</th>
                                        <th>来店数</th>
                                        <th>成約数 </th>
                                        <th>不成約数</th>
                                        <th>成約率</th>
                                        <th>お預かり数</th>
                                        <th>買取率 </th>
                                        <th>買取金額合計</th>
                                        <th> 粗利単価</th>
                                        <th>粗利合計</th>
                                        <th>合計率</th>
                                        <th>売上合計</th>
                                        <th>入電数</th>
                                        <th>来店問い合わせ数</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={Td}>OOOOOOOOOOOO</td>
                                        <td style={Td}>9,999,999</td>
                                        <td style={Td}>9,999,999</td>
                                        <td style={Td}>9,999,999</td>
                                        <td style={Td}>9,999,999</td>
                                        <td style={Td}>99,9</td>
                                        <td style={Td}>9,999,999</td>
                                        <td style={Td}>99,9</td>
                                        <td style={Td}>9,999,999</td>
                                        <td style={Td}>9,999,999</td>
                                        <td style={Td}>99,9</td>
                                        <td style={Td}>9,999,999</td>
                                        <td style={Td}>9,999,999</td>
                                        <td style={Td}>9,999,999</td>
                                    </tr>
                                    <tr>
                                        <td>全店舗合計</td>
                                        <td>9,999,999</td>
                                        <td>9,999,999</td>
                                        <td>9,999,999</td>
                                        <td></td>
                                        <td>9,999,999</td>
                                        <td></td>
                                        <td>9,999,999</td>
                                        <td>9,999,999</td>
                                        <td>9,999,999</td>
                                        <td></td>
                                        <td>9,999,999</td>
                                        <td>9,999,999</td>
                                        <td>9,999,999</td>
                                    </tr>
                                    <tr>
                                        <td>全店舗平均</td>
                                        <td>9,999,999</td>
                                        <td>9,999,999</td>
                                        <td>9,999,999</td>
                                        <td>99,9</td>
                                        <td>9,999,999</td>
                                        <td>99,9</td>
                                        <td>9,999,999</td>
                                        <td>9,999,999</td>
                                        <td>9,999,999</td>
                                        <td>99,9</td>
                                        <td>9,999,999</td>
                                        <td>9,999,999</td>
                                        <td>9,999,999</td>
                                    </tr>

                                </tbody>

                                </table>
                            </div>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-1/2'>
                            <div className='flex mt-10 pt-8'>
                                <div className='flex h-11' style={{width:'10%'}}>
                                    <div className='flex flex-col justify-center'>
                                        <div  className='w-3 h-3 bg-[#70685a] '></div>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <div className='text-[#70685a] font-bold ml-3'>人員</div>
                                    </div>
                                </div>
                                <div style={{width:'90%'}}>
                                    <div className=' text-[#70685a]'>
                                        < button type="button" style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                        スタッフ一覧 
                                        </button>
                                        < button type="button" style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-10">
                                        給与計算表
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                        シフト表 
                                        </button>
                                        < button type="button" style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-10">
                                        個人給与明細
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                        出退勤一覧  
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className='flex mt-10'>
                                <div className='flex h-11' style={{width:'10%'}}>
                                    <div className='flex flex-col justify-center'>
                                        <div  className='w-3 h-3 bg-[#70685a] '></div>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <div className='text-[#70685a] font-bold ml-3'>経理</div>
                                    </div>
                                </div>
                                <div style={{width:'90%'}}>
                                    <div className=' text-[#70685a]'>
                                        < button type="button" style={{width:'55%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                        店舗毎の経理情報推移 
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" style={{width:'55%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                        店舗毎の経理情報参考デ夕 
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <div className='flex mt-10'>
                                <div className='flex h-11 pt-8' style={{width:'10%'}}>
                                    <div className='flex flex-col justify-center'>
                                        <div  className='w-3 h-3 bg-[#70685a] '></div>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <div className='text-[#70685a] font-bold ml-3'>分析</div>
                                    </div>
                                </div>
                                <div style={{width:'90%'}}>
                                    <div className=' text-[#70685a] flex'>
                                        <div style={{width:'40%'}} className='pt-8'>
                                            < button type="button" className="w-full px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                            顧客来店率推移
                                            </button>
                                        </div>

                                        <div style={{width:'40%'}}>
                                            <div className='flex justify-center ml-10 w-full h-8 text-[#70685a]'>
                                                <label >(オーナーと共有画面)</label>
                                            </div>
                                            < button type="button"  className="w-full px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-10">
                                            総合分析
                                            </button>
                                        </div>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                        ランキング機能 
                                        </button>
                                        < button type="button" style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-10">
                                        スタッフ個人成績 
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                        スコア集計
                                        </button>
                                        < button type="button" style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-10">
                                        エリア分析
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                        買取商品集計 
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                        リピ一夕一分析 
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5 flex'>
                                        <div className='flex h-11 justify-end' style={{width:'40%'}}>
                                            <div className='flex flex-col justify-center'>
                                                <div  className='w-3 h-3 bg-[#70685a] '></div>
                                            </div>
                                            <div className='flex flex-col justify-center'>
                                                <div className='text-[#70685a] font-bold ml-3'>名種設定</div>
                                            </div>
                                        </div>
                                        < button type="button" style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-10">
                                        各種設定
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5 ml'style={{marginLeft:'20%'}}>
                                        < button type="button" style={{width:'84%'}} className=" px-10 py-2 text-[#70685a] text-[20px] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                        システム使用料契約設定
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </>
    );
};

export default OwnersTop;