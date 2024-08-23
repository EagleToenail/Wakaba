import React from 'react';
import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/nowdateandtime';


const ManagementHeadquartersContractPlanSetting = () => {
    const title = 'タイトルタイトル';
    return (
        <>
            <Titlebar title={title} />
            <DateAndTime/>
            <div className="bg-[trasparent] font-[sans-serif] mt-2">
                <div className=" flex flex-col items-center justify-center py-6 px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '50em' }}>
                        <div className="p-8 rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">契約プラン&nbsp;設定/変更</h2>
                            <form className="mt-20 space-y-6">
                                <div className='flex justify-center'>
                                    <div>
                                        {/* first line */}
                                        <div className='flex text-[#70685a] text-[18px]'>
                                            <dv className='flex flex-col justify-end'>
                                                <div>
                                                    <input type='radio' name='planset' className='mr-5'/>
                                                    <label>プランA</label>
                                                </div>
                                            </dv>
                                            <div className='font-bold ml-10'>
                                                <div className='flex justify-center'>
                                                    <label>月額料金</label>
                                                </div>
                                                <div>
                                                    <label>￥10,000/月</label>
                                                </div>
                                            </div>
                                            <div className='ml-10'>
                                                <div className='flex justify-center'>
                                                    <label>プラン概要</label>
                                                </div>
                                                <div>
                                                    <label>OOOOOOOOOOOOOOOOOOOO</label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* second line */}
                                        <div className='flex text-[#70685a] text-[18px] mt-5'>
                                            <dv className='flex flex-col justify-end'>
                                                <div>
                                                    <input type='radio' name='planset' className='mr-5'/>
                                                    <label>プランB</label>
                                                </div>
                                            </dv>
                                            <div className='font-bold ml-10'>
                                                <div>
                                                    <label>￥10,000/月</label>
                                                </div>
                                            </div>
                                            <div className='ml-10'>
                                                <div>
                                                    <label>OOOOOOOOOOOOOOOOOOOO</label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* third line */}
                                        <div className='flex text-[#70685a] text-[18px] mt-5'>
                                            <dv className='flex flex-col justify-end'>
                                                <div>
                                                    <input type='radio' name='planset' className='mr-5'/>
                                                    <label>プランC</label>
                                                </div>
                                            </dv>
                                            <div className='font-bold ml-10'>
                                                <div>
                                                    <label>￥10,000/月</label>
                                                </div>
                                            </div>
                                            <div className='ml-10'>
                                                <div>
                                                    <label>OOOOOOOOOOOOOOOOOOOO</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex justify-between !mt-10' >
                                    
                                    <div className="!mt-5 flex" style={{ marginBottom: '10px',width:'80%',paddingLeft: '20%' }}>
                                        <div className='w-full flex justify-center'>
                                        <button type="button" className="w-30 px-5 py-1 font-bold tracking-wide rounded-lg justify-center text-2xl text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                            <Link to='/' className='p-3  '>設定して支払方法設定へ</Link>
                                        </button>
                                        </div>
                                    </div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end" style={{ flexDirection: 'column',width:'20%' }}><u> <Link to='/forgetpassword'>キャンセル</Link></u></label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManagementHeadquartersContractPlanSetting;