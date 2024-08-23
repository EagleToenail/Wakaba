import React from 'react';
import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
// import InputComponent from '../../../Components/Common/InputComponent';
// import Button from '../../../Components/Common/Button';
import DateAndTime from '../../../Components/Common/nowdateandtime';

const Login = () => {
    const title = 'タイトルタイトル';

    return (
        <>
            <Titlebar title={title} />
            <DateAndTime/>
            <div className="bg-[trasparent] font-[sans-serif] mt-10">
                <div className=" flex flex-col items-center justify-center py-6 px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '50em' }}>
                        <div className="p-8 rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">LOGIN</h2>
                            <form className="mt-8 space-y-6">
                                <div className='flex'>
                                    <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] text-[15px] font-bold mb-2 block text-right mr-5 !mb-0">ID</label>
                                        <label className="text-[#70685a] text-[15px] font-bold mb-2 block text-right mr-5 !mb-0">pass</label>
                                    </div>

                                    <div style={{ width: '80%', paddingRight: '20%'}} className='!mt-0'>
                                        <div className="relative flex items-center">
                                            <input name="username" type="text" required className="w-full text-[#70685a] text-sm border border-gray-300 px-4 py-3 outline-blue-600" />
                                        </div>
                                        <div className="relative flex items-center mt-5">
                                            <input name="password" type="password" required className="w-full text-[#70685a] text-sm border border-gray-300 px-4 py-3 outline-blue-600" />
                                            {/* <InputComponent style={{width:'50%'}}  name="password" type="password"/> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between !mt-1' >
                                    <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end" style={{ flexDirection: 'column',width:'20%' }}><u> <Link to='/forgetpassword'>パスワード忘れ</Link></u></label>
                                    <div className="!mt-4 flex" style={{ marginBottom: '10px',width:'80%',paddingRight: '20%' }}>
                                        <div className='w-full flex justify-center'>
                                        <button type="button" className="w-30 px-5 py-1 font-bold tracking-wide rounded-lg justify-center text-2xl text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                            <Link to='/logintimecard' className='p-3  '>LOGIN</Link>
                                        </button>
                                        {/* <Button style={{height:'20px'}}/> */}
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;