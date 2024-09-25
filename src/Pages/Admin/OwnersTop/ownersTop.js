import React, { useState, useEffect,useRef } from 'react';
import { Link, useNavigate, useParams ,useLocation} from 'react-router-dom';
// import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/PickData';

const OwnersTop = () => {
    // const title = 'タイトルタイトル';
    const navigate = useNavigate();
    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center',
        fontSize:'15px'
    };

    const Th = {
        whiteSpace:'nowrap'
    };
    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
        whiteSpace:'nowrap'
    };
    const date = new Date();
    const year = date.getFullYear(); // Gets the current year (e.g., 2024)
    const month = date.getMonth() + 1; // Gets the current month (0-11, so add 1)

    //goto staff list
    const gotoStaffList = ()=> {
        navigate('/admin/ownersstafflist');
    }
    //goto payroll 
    const gotoPayroll = () =>{
        navigate('/admin/ownerspayrollcalculationsheet');
    }
    //goto shiftschedule 
    const gotoShiftSchedule = () =>{
        navigate('/admin/ownersshiftschedule');
    }
    //goto personalPayslip
    const gotoPersonalPaySlip = () =>{
        navigate('/admin/ownerspersonalpayslippdf');
    }
    //goto attendence list
    const gotoAttendenceList = () =>{
        navigate('/admin/ownerattendancelist');
    }
    //goto comprehensive analysis
    const gotoComprehensiveAnalysis = () =>{
        navigate('/admin/owneranalysiscomprehensiveanalysis');
    }
    //goto staff individual results
    const gotoStaffIndividualResult = () =>{
        navigate('/admin/owneranalysisstaffindividualresults');
    }
    //goto owner mangement screen area analysis
    const gotoOwnerManagementScreenArea = () =>{
        navigate('/admin/owneranalysisareaanalysis');
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
    //goto ranking function
    const gotoRankingFunction = () =>{
        navigate('/admin/managementhqrankingfunction');
    }
    //goto Score tally
    const gotoScoreTally = () =>{
        navigate('/admin/managementhqscorecount');
    }
    //goto Purchase Item count
    const gotoPurchaseItemCount = () =>{
        navigate('/admin/managementheadquarterspurchaseitemcount');
    }
    //goto repeat analysis
    const gotoRepeatAnalysis = () =>{
        navigate('/admin/managementheadquartersrepeateranalysis');
    }

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime/>
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full ">
                    <div className='flex justify-center'>
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">管理画面TOP</h2>
                    </div>
                    {/*  */}
                    <div className='flex mt-3 justify-around'>
                        <div className='owner-top text-[#70685a] px-2 mr-5' style={{visibility:'hidden'}}>
                            < button type="button" className="w-max px-10 px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                            OOOOOOOOOOO
                            </button>
                        </div>
                        <div className=' text-[#70685a] px-2'>
                            <label className="w-max text-[#70685a] font-bold text-2xl mb-2 block text-center !mb-0">{year}年{month}月度</label>
                        </div>
                        <div className=' text-[#70685a] px-2 mr-5'>
                            < button type="button" onClick={gotoComprehensiveAnalysis} className="w-max px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                            総合分析へ
                            </button>
                        </div>
                    </div>
                    {/*  Tabe*/}
                    <div className='flex justify-center mt-5 w-full' >
                        <div className='flex w-[5%]'>
                            <div className='flex flex-col justify-start pt-1'>
                                <div  className='w-3 h-3 bg-[#70685a] '></div>
                            </div>
                            <div className='flex flex-col justify-start'>
                                <div className='w-full text-[#70685a] font-bold ml-3'>現況</div>
                                <div className='w-full text-[#70685a] font-bold ml-3'>表示</div>
                            </div>
                        </div>
                        <div style={{ width: '95%' }} className='flex'>
                            <div style={{ width: '100%' ,overflow:'auto'}}>
                                <table className=' text-center w-full' style={Table}>
                                <thead>
                                    <tr>
                                        <th style={Td}>店舗名</th>
                                        <th style={Td}>来店数</th>
                                        <th style={Td}>成約数 </th>
                                        <th style={Td}>不成約数</th>
                                        <th style={Td}>成約率</th>
                                        <th style={Td}>お預かり数</th>
                                        <th style={Td}>買取率 </th>
                                        <th style={Td}>買取金額合計</th>
                                        <th style={Td}> 粗利単価</th>
                                        <th style={Td}>粗利合計</th>
                                        <th style={Td}>合計率</th>
                                        <th style={Td}>売上合計</th>
                                        <th style={Td}>入電数</th>
                                        <th style={Td}>来店問い合わせ数</th>

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

                    <div className='flex owner-top-one w-full'>
                        <div className='owner-top-two w-1/2'>
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
                                        < button type="button" onClick={gotoStaffList}  style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                        スタッフ一覧 
                                        </button>
                                        < button type="button" onClick={gotoPayroll} style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-10">
                                        給与計算表
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" onClick={gotoShiftSchedule} style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                        シフト表 
                                        </button>
                                        < button type="button" onClick={gotoPersonalPaySlip} style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-10">
                                        個人給与明細
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" onClick={gotoAttendenceList} style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
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
                                        < button type="button" onClick={gotoAccountingInfromationVariousNumberTredingData} style={{width:'55%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                        店舗毎の経理情報推移 
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" onClick={gotoAccountingInfromationVariousNumberReferenceData} style={{width:'55%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                        店舗毎の経理情報参考デ夕 
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='owner-top-two w-1/2'>
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
                                            < button type="button" onClick={gotoCustomerVisitTrend} className="w-full px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                            顧客来店率推移
                                            </button>
                                        </div>

                                        <div style={{width:'40%'}}>
                                            <div className='flex justify-center ml-10 w-full h-8 text-[#70685a]'>
                                                <label >(オーナーと共有画面)</label>
                                            </div>
                                            < button type="button" onClick={gotoComprehensiveAnalysis}  className="w-full px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-10">
                                            総合分析
                                            </button>
                                        </div>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" onClick={gotoRankingFunction} style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                        ランキング機能 
                                        </button>
                                        < button type="button" onClick={gotoStaffIndividualResult} style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-10">
                                        スタッフ個人成績 
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" onClick={gotoScoreTally} style={{width:'40%'}}  className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                        スコア集計
                                        </button>
                                        < button type="button" onClick={gotoOwnerManagementScreenArea} style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none ml-10">
                                        エリア分析
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" onClick={gotoPurchaseItemCount} style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
                                        買取商品集計 
                                        </button>
                                    </div>
                                    <div className=' text-[#70685a] pt-5'>
                                        < button type="button" onClick={gotoRepeatAnalysis} style={{width:'40%'}} className=" px-10 py-1 text-[#70685a] font-bold tracking-wide border border-[#70685a] justify-center  hover:bg-blue-700 focus:outline-none">
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