import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import ButtonComponent from '../../../Components/Common/ButtonComponent';
import DateAndTime from '../../../Components/Common/PickData';
import InputComponent from '../../../Components/Common/InputComponent';


const AdminSettingsSuperAdministratorSystemBasicSettings = () => {
    const title = 'タイトルタイトル';


    return (
        <>
            <Titlebar title={title} />
            <DateAndTime />
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '70em' }}>
                    <div className='flex justify-center mt-5' >
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">ス一パー管理者用 管理画面</h2>
                    </div>
                    {/*  */}
                    <div className='flex mt-3 justify-center text-left'>
                        <div className=' text-[#70685a] px-2 mr-10 flex flex-col justify-end'>
                            < button type="button" className="flex align-end w-40 px-3 py-1 font-bold tracking-wide text-[#665b4c] justify-center text-white bg-[#665b4c] hover:bg-blue-700 focus:outline-none">
                                オーナー管理
                            </button>
                        </div>
                        <div className=' text-[#70685a] px-2 ml-10 flex flex-col justify-end'>
                            < button type="button" className="flex align-end w-40 px-3 py-1 font-bold tracking-wide text-[#696b6a] justify-center bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                システム基本設定
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-center'  >
                        <ButtonComponent children={'保存'} className='py-1 mt-5 text-[white] h-8 !px-20 w-max ' />
                    </div>
                    <div className='flex mt-5'>
                        <div style={{ width: '40%' }}>
                            <div>
                                {/* title */}
                                <div className='flex h-11'>
                                    <div className='flex flex-col justify-center'>
                                        <div className='w-3 h-3 bg-[#70685a] '></div>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <div className='text-[#70685a] font-bold ml-3 w-max'>始業関係   強制設定項目</div>
                                    </div>
                                </div>
                                {/* first line */}
                                <div className=' flex pl-10 text-[#70685a] mt-3'>
                                    <div className='flex flex-col justify-center'>
                                        <input type='checkbox'></input> 
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <label className='ml-5'>[新人] ブラインドキータッチ練習</label>
                                    </div>
                                </div>
                                {/* second line */}
                                <div className=' flex pl-10 text-[#70685a] mt-3'>
                                    <div className='flex flex-col justify-center'>
                                        <input type='checkbox'></input> 
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <label className='ml-5'>[新人] ロレックス脱着練習</label>
                                    </div>
                                </div>
                                {/* third line */}
                                <div className=' flex pl-10 text-[#70685a] mt-3'>
                                    <div className='flex flex-col justify-center'>
                                        <input type='checkbox'></input> 
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <label className='ml-5'>[新人] 一人ロープレ</label>
                                    </div>
                                </div>
                            </div>
                            {/* other part */}
                            <div>
                                <div className='flex h-11'>
                                    <div className='flex flex-col justify-center'>
                                        <div className='w-3 h-3 bg-[#70685a] '></div>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <div className='text-[#70685a] font-bold ml-3 w-max'>終業関係 強制設定項目</div>
                                    </div>
                                </div>
                                <div className=' flex pl-10 text-[#70685a] mt-3'>
                                    <div className='flex flex-col justify-center'>
                                        <input type='checkbox'></input> 
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <label className='ml-5'>缶ウォーマー電源OFF 確認しました。</label>
                                    </div>
                                </div>
                                <div className=' flex pl-10 text-[#70685a] mt-3'>
                                    <div className='flex flex-col justify-center'>
                                        <input type='checkbox'></input> 
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <label className='ml-5'>その他オプション的項目</label>
                                    </div>
                                </div>
                                <div className=' flex pl-10 text-[#70685a] mt-3'>
                                    <div className='flex flex-col justify-center'>
                                        <input type='checkbox'></input> 
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <label className='ml-5'>その他オプション的項目</label>
                                    </div>
                                </div>
                                <div className=' flex pl-10 text-[#70685a] mt-3'>
                                    <div className='flex flex-col justify-center'>
                                        <input type='checkbox'></input> 
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <label className='ml-5'>その他オプション的項目</label>
                                    </div>
                                </div>
                                <div className=' flex pl-10 text-[#70685a] mt-3'>
                                    <div className='flex flex-col justify-center'>
                                        <input type='checkbox'></input> 
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <label className='ml-5'>その他オプション的項目</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/*  */}
                        <div style={{ width: '60%' }} >
                            {/* first line */}
                            <div className='flex text-[#70685a] font-bold'>
                                <div className='flex flex-col justify-end pb-2'>
                                    <label className='ml-5'>プランA</label>
                                </div>
                                <div className='ml-5' style={{width:'30%'}}>
                                    <div className='text-center'>
                                        <label className='ml-5'>月額料金</label>
                                    </div>
                                    <div>
                                        <InputComponent className='!w-full'/>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-end pb-2'>
                                        <label className='ml-5'>/月</label>
                                </div>
                                <div className='ml-5' style={{width:'45%'}}>
                                    <div className='text-center'>
                                        <label className='ml-5'>プラン内容メモ</label>
                                    </div>
                                    <div>
                                        <InputComponent className='!w-full'/>
                                    </div>
                                </div>
                            </div>
                            {/* second line */}
                            <div className='flex text-[#70685a] font-bold mt-5'>
                                <div className='flex flex-col justify-end pb-2'>
                                    <label className='ml-5'>プランB</label>
                                </div>
                                <div className='ml-5' style={{width:'30%'}}>
                                    <div>
                                        <InputComponent className='!w-full'/>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-end pb-2'>
                                        <label className='ml-5'>/月</label>
                                </div>
                                <div className='ml-5' style={{width:'45%'}}>
                                    <div>
                                        <InputComponent className='!w-full'/>
                                    </div>
                                </div>
                            </div>
                            {/* third line */}
                            <div className='flex text-[#70685a] font-bold mt-5'>
                                <div className='flex flex-col justify-end pb-2'>
                                    <label className='ml-5'>プランC</label>
                                </div>
                                <div className='ml-5' style={{width:'30%'}}>
                                    <div>
                                        <InputComponent className='!w-full'/>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-end pb-2'>
                                        <label className='ml-5'>/月</label>
                                </div>
                                <div className='ml-5' style={{width:'45%'}}>
                                    <div>
                                        <InputComponent className='!w-full'/>
                                    </div>
                                </div>
                            </div>
                            {/* add btn */}
                            <div className='flex justify-center mt-5'>
                                <button type="button"
                                    className="w-5 h-5 inline-flex items-center font-bold justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="black" className="inline" viewBox="0 0 512 512">
                                        <path
                                            d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                            data-original="#000000" />
                                    </svg>
                                </button>
                            </div>
                            {/* last line */}
                            <div className='flex text-[#70685a] font-bold mt-5'>
                                <div className='flex flex-col justify-end pb-2'>
                                    <label className='ml-5'>催促メール送信時期</label>
                                </div>
                                <div className='flex flex-col justify-end pb-2'>
                                    <label className='ml-10'>期限超過</label>
                                </div>
                                <div className='ml-5' style={{width:'10%'}}>
                                    <div>
                                        <InputComponent className='!w-full'/>
                                    </div>
                                </div>
                                <div className='flex flex-col justify-end pb-2'>
                                        <label className='ml-5'>日目</label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AdminSettingsSuperAdministratorSystemBasicSettings;