import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/PickData';


const ManagementHeadqueatersTOP = () => {
    const title = 'タイトルタイトル';


    return (
        <>
            <Titlebar title={title} />
            <DateAndTime />

            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '70em' }}>
                    <div className='flex justify-center'>
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">管理画面 TOP</h2>
                    </div>
                    {/*  */}
                    <div className='flex mt-10'>
                        <div className='flex h-11' style={{ width: '10%' }}>
                            <div className='flex flex-col justify-center'>
                                <div className='w-3 h-3 bg-[#70685a] '></div>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <div className='text-[#70685a] font-bold ml-3'>現況 表示</div>
                            </div>
                        </div>
                        <div className='w-full border border-[#70685a] h-40'>

                        </div>
                    </div>
                    {/*  */}
                    <div className='flex mt-5'>
                        <div className='w-1/2'>
                            <div className='flex mt-10'>
                                <div className='flex h-11' style={{ width: '15%' }}>
                                    <div className='flex flex-col justify-center'>
                                        <div className='w-3 h-3 bg-[#70685a] '></div>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <div className='text-[#70685a] text-xl font-bold ml-3'>人員</div>
                                    </div>
                                </div>
                                <div style={{ width: '90%' }}>
                                    <div className=' text-[#70685a]'>
                                        < button type="button" style={{ width: '40%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                            オーナー一覧
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mt-10'>
                                <div className='flex h-11' style={{ width: '15%' }}>
                                    <div className='flex flex-col justify-center'>
                                        <div className='w-3 h-3 bg-[#70685a] '></div>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <div className='text-[#70685a] text-xl font-bold ml-3'>経理</div>
                                    </div>
                                </div>
                                <div style={{ width: '90%' }}>
                                    <div className=' text-[#70685a]'>
                                        < button type="button" style={{ width: '60%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                            店舗每の経理情報推移
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" style={{ width: '60%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                            店舗每の経理情報参考デ夕
                                        </button>
                                    </div>

                                </div>

                            </div>
                            <div className='flex mt-10'>
                                <div className='flex h-11' style={{ width: '15%' }}>
                                    <div className='flex flex-col justify-center'>
                                        <div className='w-3 h-3 bg-[#70685a] '></div>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <div className='text-[#70685a] text-xl font-bold ml-3'>分析</div>
                                    </div>
                                </div>
                                <div style={{ width: '90%' }}>
                                    <div className=' text-[#70685a]'>
                                        < button type="button" style={{ width: '45%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                            顧客未店率推移
                                        </button>
                                        < button type="button" style={{ width: '45%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-5">
                                            総合分析
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" style={{ width: '45%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                            ランキング機能
                                        </button>
                                        < button type="button" style={{ width: '45%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-5">
                                            ス夕シフ個人成績
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" style={{ width: '45%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                            スコア集計
                                        </button>
                                        < button type="button" style={{ width: '45%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-5">
                                            エリア分析
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" style={{ width: '45%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                            買取商品集計
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" style={{ width: '45%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                            リピ一夕一分析
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='w-1/2 '>
                            <div className='flex mt-5 h-full'>
                                <div style={{ width: '100%' }} className='h-full'>
                                    <div className=' text-[#70685a] pt-5 flex'>
                                        <div className='flex h-11 justify-end w-1/2'>
                                            <div className='flex flex-col justify-center'>
                                                <div className='w-3 h-3 bg-[#70685a] '></div>
                                            </div>
                                            <div className='flex flex-col justify-center'>
                                                <div className='text-[#70685a] text-xl font-bold ml-3'>各種設定</div>
                                            </div>
                                        </div>
                                        <div className='mr-10 w-1/2'>
                                            < button type="button" className="w-full px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-10">
                                                各種設定
                                            </button>
                                            < button type="button" className="w-full mt-5 px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-10">
                                                各種設定
                                            </button>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-end mt-60 pt-20'>
                                        <div className=' text-[#70685a] pt-5 flex justify-end' style={{ marginLeft: '20%' }}>
                                            < button type="button" style={{ width: '84%' }} className=" px-10 py-2 text-[#70685a] text-[20px] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                                システム使用料契約設定
                                            </button>
                                        </div>
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

export default ManagementHeadqueatersTOP;