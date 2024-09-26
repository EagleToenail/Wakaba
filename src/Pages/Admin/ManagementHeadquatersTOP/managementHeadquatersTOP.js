import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/PickData';


const ManagementHeadqueatersTOP = () => {
    // const title = 'タイトルタイトル';
    const navigate = useNavigate();
    //goto owners list
    const gotoStaffList = ()=> {
        navigate('/admin/managementheadquartersownerlist');
    }
    //goto accounting infromation various number treding data
    const gotoAccountingInfromationVariousNumberTredingData = () =>{
        navigate('/admin/accountinginformationvarioustrenddata');
    }
    //goto accounting infromation various number reference data
    const gotoAccountingInfromationVariousNumberReferenceData = () =>{
        navigate('/admin/accountinginformationvariousreferencedata');
    }
     //goto customer visit rate trend
     const gotoCustomerVisitTrend = () =>{
        navigate('/admin/customervisitratetrend');
    }
     //goto Score tally
     const gotoScoreTally = () =>{
        navigate('/admin/managementhqscorecount');
    }
     //goto comprehensive analysis
     const gotoComprehensiveAnalysis = () =>{
        navigate('/admin/owneranalysiscomprehensiveanalysis');
    }
        //goto ranking function
    const gotoRankingFunction = () =>{
            navigate('/admin/managementhqrankingfunction');
    }
     //goto Purchase Item count
     const gotoPurchaseItemCount = () =>{
        navigate('/admin/managementheadquarterspurchaseitemcount');
    }
    //goto repeat analysis
    const gotoRepeatAnalysis = () =>{
        navigate('/admin/managementheadquartersrepeateranalysis');
    }
    //goto owner mangement screen area analysis
    const gotoOwnerManagementScreenArea = () =>{
        navigate('/admin/owneranalysisareaanalysis');
    }
     //goto staff individual results
     const gotoStaffIndividualResult = () =>{
        navigate('/admin/owneranalysisstaffindividualresults');
    }
        // goto various master lists
     const gotoVariousMasterList=()=>{
        navigate('/admin/managementmastertop');
     }   
    return (
        <>
            {/* <Titlebar title={title} /> */}
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
                                        < button type="button" onClick={gotoStaffList} style={{ width: '40%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                            オーナー 一覧
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
                                        < button type="button" onClick={gotoAccountingInfromationVariousNumberTredingData} style={{ width: '65%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                            店舗毎の経理情報推移
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" onClick={gotoAccountingInfromationVariousNumberReferenceData} style={{ width: '65%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                            店舗毎の経理情報参考データ
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
                                        < button type="button" onClick={gotoCustomerVisitTrend} style={{ width: '45%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                            顧客来店率推移
                                        </button>
                                        < button type="button" onClick={gotoComprehensiveAnalysis} style={{ width: '45%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-5">
                                            総合分析
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" onClick={gotoRankingFunction} style={{ width: '45%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                            ランキング機能
                                        </button>
                                        < button type="button" onClick={gotoStaffIndividualResult} style={{ width: '45%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-5">
                                            スタッフ個人成績
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" onClick={gotoScoreTally} style={{ width: '45%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                            スコア集計
                                        </button>
                                        < button type="button" onClick={gotoOwnerManagementScreenArea} style={{ width: '45%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-5">
                                            エリア分析
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" onClick={gotoPurchaseItemCount} style={{ width: '45%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                            買取商品集計
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button"  onClick={gotoRepeatAnalysis} style={{ width: '45%' }} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
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
                                            < button type="button"  onClick={gotoVariousMasterList} className="w-full mt-5 px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-10">
                                                各種マスター一覧
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