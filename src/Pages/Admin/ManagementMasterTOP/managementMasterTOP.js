import React from 'react';
import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/PickData';


const  ManagementMasterTOP = () => {
    const title = 'タイトルタイトル';

    
    return (
        <>
            <Titlebar title={title} />
            <DateAndTime/>
            <div className="bg-[trasparent] font-[sans-serif] mt-5">
                <div className=" flex flex-col items-center justify-center px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '70em' }}>
                        <div className=" rounded-2xl">
                            <div className='flex justify-center'>
                                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">本部管理画面  各種マス夕一 一覧</h2>
                            </div>
                            <div className='flex justify-center'>
                                <div className='mt-5'>
                                    <div className='mt-5'>
                                        <button name='ProductCategory1' type="button" className="w-80 px-10 py-1 font-bold text-[#656564] tracking-wide text-2xl justify-center t bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                        商品カテゴリー1
                                        </button>
                                    </div>
                                    <div className='mt-2'>
                                        <button name='ProductCategory2' type="button" className="w-80 px-10 py-1 font-bold text-[#656564] tracking-wide text-2xl justify-center t bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                        商品カテゴリー2
                                        </button>
                                    </div>
                                    <div className='mt-2'>
                                        <button name='ProductCategory3' type="button" className="w-80 px-10 py-1 font-bold text-[#656564] tracking-wide text-2xl justify-center t bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                        商品カテゴリー3
                                        </button>
                                    </div>
                                    <div className='mt-2'>
                                        <button name='ProductCategory4' type="button" className="w-80 px-10 py-1 font-bold text-[#656564] tracking-wide text-2xl justify-center t bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                        商品カテゴリー4
                                        </button>
                                    </div>
                                    <div className='mt-2'>
                                        <button name='brandName' type="button" className="w-80 px-10 py-1 font-bold text-[#656564] tracking-wide text-2xl justify-center t bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                        ブランド名
                                        </button>
                                    </div>

                                </div>
                                <div className='mt-5 ml-20'>
                                    <div className='mt-5'>
                                        <button name='Wholesaler' type="button" className="w-60 px-10 py-1 font-bold text-[#656564] tracking-wide text-2xl justify-center t bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                        卸先業者
                                        </button>
                                    </div>
                                    <div className='mt-2' style={{visibility:'hidden'}}>
                                        <button name='register' type="button" className="w-60 px-10 py-1 font-bold text-[#656564] tracking-wide text-2xl justify-center t bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                        asd
                                        </button>
                                    </div>
                                    <div className='mt-2'>
                                        <button name='visitType' type="button" className="w-60 px-10 py-1 font-bold text-[#656564] tracking-wide text-2xl justify-center t bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                        来店種別
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

export default ManagementMasterTOP;