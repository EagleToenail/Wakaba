import React from 'react';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../../Components/Common/Titlebar';
import ButtonComponent from '../../../Components/Common/ButtonComponent';
import DateAndTime from '../../../Components/Common/PickData';
import InputComponent from '../../../Components/Common/InputComponent';


const ManagementSettingsForOwners = () => {
    // const title = 'タイトルタイトル';


    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '70em' }}>
                    <div className='flex justify-center mt-5' >
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">オーナー用 管理画面 各種設定</h2>
                    </div>
                    <div className='flex justify-center'  >
                        <ButtonComponent children={'保存'} className='py-1 mt-10 text-[white] text-2xl h-11 !px-20 w-max ' />
                    </div>
                    <div className='flex mt-5'>
                        <div className='w-1/2'>
                            <div>
                                {/* title */}
                                <div className='flex h-11'>
                                    <div className='flex flex-col justify-center'>
                                        <div className='w-3 h-3 bg-[#70685a] '></div>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <div className='text-[#70685a] font-bold ml-3 w-max'>始業関係   表示項目</div>
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
                            <div className='mt-5'>
                                <div className='flex h-11'>
                                    <div className='flex flex-col justify-center'>
                                        <div className='w-3 h-3 bg-[#70685a] '></div>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <div className='text-[#70685a] font-bold ml-3 w-max'>終業関係 表示項目</div>
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
                                        <label className='ml-5'>エアコンoff確認しました。</label>
                                    </div>
                                </div>
                                <div className=' flex pl-10 text-[#70685a] mt-3'>
                                    <div className='flex flex-col justify-center'>
                                        <input type='checkbox'></input>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <label className='ml-5'>照明off確認しました。</label>
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
                        <div className='w-1/2' >
                            <div>
                                {/* title */}
                                <div className='flex h-11'>
                                    <div className='flex flex-col justify-center'>
                                        <div className='w-3 h-3 bg-[#70685a] '></div>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <div className='text-[#70685a] font-bold ml-3 w-max'>リサイクルショップ登録</div>
                                    </div>
                                </div>

                                {/* first line */}
                                <div className='flex text-[#70685a] font-bold'>
                                    <div className='flex flex-col justify-end pb-2'>
                                        <label className='ml-5'>01 リサイクルショップ</label>
                                    </div>
                                    <div className='ml-5' style={{ width: '50%' }}>
                                        <div>
                                            <InputComponent className='!w-full h-8' />
                                        </div>
                                    </div>
                                </div>
                                {/* second line */}
                                <div className='flex text-[#70685a] font-bold mt-2'>
                                    <div className='flex flex-col justify-end pb-2'>
                                        <label className='ml-5'>02 リサイクルショップ</label>
                                    </div>
                                    <div className='ml-5' style={{ width: '50%' }}>
                                        <div>
                                            <InputComponent className='!w-full h-8' />
                                        </div>
                                    </div>
                                </div>
                                {/* third line */}
                                <div className='flex text-[#70685a] font-bold mt-2'>
                                    <div className='flex flex-col justify-end pb-2'>
                                        <label className='ml-5'>03 リサイクルショップ</label>
                                    </div>
                                    <div className='ml-5' style={{ width: '50%' }}>
                                        <div>
                                            <InputComponent className='!w-full h-8' />
                                        </div>
                                    </div>
                                </div>
                                {/* add btn */}
                                <div className='flex justify-center mt-2'>
                                    <button type="button"
                                        className="w-5 h-5 inline-flex items-center font-bold justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="black" className="inline" viewBox="0 0 512 512">
                                            <path
                                                d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                data-original="#000000" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            {/* second part */}
                            <div>
                                {/* title */}
                                <div className='flex h-11'>
                                    <div className='flex flex-col justify-center'>
                                        <div className='w-3 h-3 bg-[#70685a] '></div>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <div className='text-[#70685a] font-bold ml-3 w-max'>ヤフオク関係情報</div>
                                    </div>
                                </div>

                                {/* first line */}
                                <div className='flex text-[#70685a] font-bold'>
                                    <div className='flex flex-col justify-end pb-2'>
                                        <label className='ml-5 w-max'>01</label>
                                    </div>
                                    <div className='flex'>
                                        <div className='ml-5' style={{ width: '40%' }}>
                                            <div className='text-center'>
                                                <label className='ml-5'>ヤフオクID</label>
                                            </div>
                                            <div>
                                                <InputComponent className='!w-full h-8' />
                                            </div>
                                        </div>
                                        <div className='ml-5' style={{ width: '40%' }}>
                                            <div className='text-center'>
                                                <label className='ml-5'>パスワード</label>
                                            </div>
                                            <div>
                                                <InputComponent className='!w-full h-8' />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* second line */}
                                <div className='flex text-[#70685a] font-bold mt-2'>
                                    <div className='flex flex-col justify-end pb-2'>
                                        <label className='ml-5 w-max'>02</label>
                                    </div>
                                    <div className='flex'>
                                        <div className='ml-5' style={{ width: '40%' }}>
                                            <div>
                                                <InputComponent className='!w-full h-8' />
                                            </div>
                                        </div>
                                        <div className='ml-5' style={{ width: '40%' }}>
                                            <div>
                                                <InputComponent className='!w-full h-8' />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* third line */}
                                <div className='flex text-[#70685a] font-bold mt-2'>
                                    <div className='flex flex-col justify-end pb-2'>
                                        <label className='ml-5 w-max'>03</label>
                                    </div>
                                    <div className='flex'>
                                        <div className='ml-5' style={{ width: '40%' }}>
                                            <div>
                                                <InputComponent className='!w-full h-8' />
                                            </div>
                                        </div>
                                        <div className='ml-5' style={{ width: '40%' }}>
                                            <div>
                                                <InputComponent className='!w-full h-8' />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* add btn */}
                                <div className='flex justify-center mt-2'>
                                    <button type="button"
                                        className="w-5 h-5 inline-flex items-center font-bold justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="black" className="inline" viewBox="0 0 512 512">
                                            <path
                                                d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                data-original="#000000" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Third part */}
                    <div className='mt-5'>
                        {/* title */}
                        <div className='flex h-11'>
                            <div className='flex flex-col justify-center'>
                                <div className='w-3 h-3 bg-[#70685a] '></div>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <div className='text-[#70685a] font-bold ml-3 w-max'>近隣の銀行関係情報</div>
                            </div>
                        </div>
                        {/* first line */}
                        <div className='flex text-[#70685a] font-bold'>
                            <div className='flex flex-col justify-end pb-2'>
                                <label className='ml-5 w-max'>01</label>
                            </div>
                            <div className='flex'>
                                <div className='ml-5' style={{ width: '40%' }}>
                                    <div className='text-center'>
                                        <label className='ml-5'>銀行名</label>
                                    </div>
                                    <div>
                                        <InputComponent className='!w-full h-8' />
                                    </div>
                                </div>
                                <div className='ml-5' style={{ width: '40%' }}>
                                    <div className='text-center'>
                                        <label className='ml-5'>支店</label>
                                    </div>
                                    <div>
                                        <InputComponent className='!w-full h-8' />
                                    </div>
                                </div>
                                <div className='ml-5' style={{ width: '20%' }}>
                                    <div className='text-center'>
                                        <label className='ml-5'>種別 </label>
                                    </div>
                                    <div>
                                        <InputComponent className='!w-full h-8' />
                                    </div>
                                </div>
                                <div className='ml-5' style={{ width: '40%' }}>
                                    <div className='text-center'>
                                        <label className='ml-5'>口座番号</label>
                                    </div>
                                    <div>
                                        <InputComponent className='!w-full h-8' />
                                    </div>
                                </div>
                                <div className='ml-5' style={{ width: '40%' }}>
                                    <div className='text-center'>
                                        <label className='ml-5'>名義人</label>
                                    </div>
                                    <div>
                                        <InputComponent className='!w-full h-8' />
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* second line */}
                        <div className='flex text-[#70685a] font-bold mt-2'>
                            <div className='flex flex-col justify-end pb-2'>
                                <label className='ml-5 w-max'>02</label>
                            </div>
                            <div className='flex'>
                                <div className='ml-5' style={{ width: '40%' }}>
                                    <div>
                                        <InputComponent className='!w-full h-8' />
                                    </div>
                                </div>
                                <div className='ml-5' style={{ width: '40%' }}>
                                    <div>
                                        <InputComponent className='!w-full h-8' />
                                    </div>
                                </div>
                                <div className='ml-5' style={{ width: '20%' }}>
                                    <div>
                                        <InputComponent className='!w-full h-8' />
                                    </div>
                                </div>
                                <div className='ml-5' style={{ width: '40%' }}>
                                    <div>
                                        <InputComponent className='!w-full h-8' />
                                    </div>
                                </div>
                                <div className='ml-5' style={{ width: '40%' }}>
                                    <div>
                                        <InputComponent className='!w-full h-8' />
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* third line */}
                        <div className='flex text-[#70685a] font-bold mt-2'>
                            <div className='flex flex-col justify-end pb-2'>
                                <label className='ml-5 w-max'>03</label>
                            </div>
                            <div className='flex'>
                                <div className='ml-5' style={{ width: '40%' }}>
                                    <div>
                                        <InputComponent className='!w-full h-8' />
                                    </div>
                                </div>
                                <div className='ml-5' style={{ width: '40%' }}>
                                    <div>
                                        <InputComponent className='!w-full h-8' />
                                    </div>
                                </div>
                                <div className='ml-5' style={{ width: '20%' }}>
                                    <div>
                                        <InputComponent className='!w-full h-8' />
                                    </div>
                                </div>
                                <div className='ml-5' style={{ width: '40%' }}>
                                    <div>
                                        <InputComponent className='!w-full h-8' />
                                    </div>
                                </div>
                                <div className='ml-5' style={{ width: '40%' }}>
                                    <div>
                                        <InputComponent className='!w-full h-8' />
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* add btn */}
                        <div className='flex justify-center mt-2'>
                            <button type="button"
                                className="w-5 h-5 inline-flex items-center font-bold justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="black" className="inline" viewBox="0 0 512 512">
                                    <path
                                        d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                        data-original="#000000" />
                                </svg>
                            </button>
                        </div>

                    </div>


                </div>
            </div>

        </>
    );
};

export default ManagementSettingsForOwners;