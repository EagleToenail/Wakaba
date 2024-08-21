import React from 'react';
import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/nowdateandtime';

const Register = () => {
    const title = 'タイトルタイトル';
    return (
        <>
            <Titlebar title={title} />
            <DateAndTime/>
            <div className="bg-[trasparent] font-[sans-serif] mt-10">
                <div className=" flex flex-col items-center justify-center py-6 px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '50em' }}>
                        <div className="p-8 rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">新規会員登録</h2>
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">（認証メール送信）</h2>
                            <form className="mt-8 space-y-6">
                                <div className='flex'>
                                    <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-5 !mb-0">メ一ルアドレス</label>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-5 !mb-0">パスワード</label>
                                    </div>

                                    <div style={{ width: '80%', paddingRight: '20%'}} className='!mt-0'>
                                        <div className="relative flex items-center">
                                            <input name="username" type="text" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 outline-blue-600" />
                                        </div>
                                        <div className="relative flex items-center mt-5">
                                            <input name="password" type="password" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 outline-blue-600" />
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-[#70685a] text-center text-[15px] font-semibold flex justify-center">このアドレスへ登録確認メールを</h2>
                                <div className='flex justify-between !mt-1' >
                                    
                                    <div className="!mt-0 flex" style={{ marginBottom: '10px',width:'80%',paddingLeft: '20%' }}>
                                        <div className='w-full flex justify-center'>
                                        <button type="button" className="w-30 px-5 py-2 font-bold tracking-wide rounded-lg justify-center text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                            <Link to='/tomoveinputform' className='p-3  '>送信</Link>
                                        </button>
                                        </div>
                                    </div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end" style={{ flexDirection: 'column',width:'20%' }}><u> <Link to='/forgetpassword'>キャンセル</Link></u></label>
                                </div>
                                <h2 className="text-[#70685a] text-center text-[15px] font-semibold flex justify-center">登録確認メール内のURLをクリックして,会員登録を進めてさい</h2>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;