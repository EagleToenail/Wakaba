import React from 'react';
import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/nowdateandtime';

const Passwordsetting = () => {
    const title = 'タイトルタイトル';
    return (
        <>
            <Titlebar title={title} />
            <DateAndTime/>
            <div className="bg-[trasparent] font-[sans-serif] mt-10">
                <div className=" flex flex-col items-center justify-center py-6 px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '60em' }}>
                        <div className="p-8 rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">パスワードの設定</h2>
                            <form className="mt-8 space-y-6">
                                <div className='flex'>
                                    <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-5 !mb-0">新しいパスワード</label>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-5 !mb-0">新しいパスワード （繰り返し）</label>
                                    </div>

                                    <div style={{ width: '70%', paddingRight: '30%'}} className='!mt-0'>
                                        <div className="relative flex items-center">
                                            <input name="username" type="text" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 outline-blue-600" />
                                        </div>
                                        <div className="relative flex items-center mt-5">
                                            <input name="password" type="password" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 outline-blue-600" />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between !mt-5' >
                                    
                                    <div className="!mt-5 flex" style={{ marginBottom: '10px',width:'70%',paddingLeft: '30%' }}>
                                        <div className='w-full flex justify-center'>
                                        <button type="button" className="w-30 px-5 py-1 font-bold tracking-wide rounded-lg justify-center text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                            <Link to='/register' className='p-3  '>送信</Link>
                                        </button>
                                        </div>
                                    </div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end" style={{ flexDirection: 'column',width:'30%' }}><u> <Link to='/'>キャンセル</Link></u></label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Passwordsetting;