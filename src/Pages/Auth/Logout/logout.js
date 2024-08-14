import React from 'react';
import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';


const Logout = () => {
    const title = 'タイトルタイトル';
    return (
        <>
            <Titlebar title={title} />
             <h2 className="text-[#70685a] text-center font-bold text-[15px] flex justify-end mt-3" style={{ paddingRight: '1%' }}>2023/12/01(金)&nbsp;&nbsp;21:51</h2>
            <div className="bg-[trasparent] font-[sans-serif] mt-10">
                <div className=" flex flex-col items-center justify-center py-6 px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '50em' }}>
                        <div className="p-8 rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">LOGOUT</h2>
                            <form className="mt-10 space-y-6">
                                <div className='flex'>
                                    <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    </div>

                                    <div style={{ width: '80%', paddingRight: '20%'}} className='!mt-0'>
                                        <div className="relative flex items-center">
                                            <label className="w-full text-[#70685a] text-center font-bold px-4 py-3 outline-blue-600" >このまま口グアウトしてもよろしいですか?</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between !mt-5' >
                                    
                                    <div className="!mt-5 flex" style={{ marginBottom: '10px',width:'80%',paddingLeft: '20%' }}>
                                        <div className='w-full flex justify-center'>
                                        <button type="button" className="w-30 px-5 py-2 font-bold tracking-wide rounded-lg justify-center text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                            <Link to='/login' className='p-3  '>LOGOUT</Link>
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

export default Logout;