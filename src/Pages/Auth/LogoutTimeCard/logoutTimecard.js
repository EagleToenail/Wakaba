import React from 'react';
import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/PickData';


const LoginTimeCard = () => {
    const title = 'タイトルタイトル';
    return (
        <>
            <Titlebar title={title} />
            <DateAndTime/>
            <div className="bg-[trasparent] font-[sans-serif] mt-10">
                <div className=" flex flex-col items-center justify-center py-6 px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '80em' }}>
                        <div className="p-8 rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">ログイン時のタイムカード 機能</h2>
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center mt-10">退勤のタイムカードを打刻して良いですか?</h2>
                            <form className="mt-10 space-y-6">
                                <div className='flex justify-center !mt-5' >
                                    
                                    <div className="!mt-5 flex" style={{ marginBottom: '10px',width:'80%',paddingLeft: '20%' }}>
                                        <div className='w-full flex justify-between'>
                                        <button type="button" className="w-[280px] px-5 py-2 font-bold tracking-wide rounded-lg justify-center text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                            <Link to='/login' className='p-3  '>打刻してログイン</Link>
                                        </button>
                                        <button type="button" className="w-[280px] px-5 py-2 font-bold tracking-wide rounded-lg justify-center border border-[#70685a] text-[#70685a] bg-[white] hover:bg-blue-700 focus:outline-none">
                                            <Link to='/' className='p-3  '>打刻せずにしてログイン</Link>
                                        </button>
                                        </div>
                                    </div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end align-end" style={{ flexDirection: 'column',width:'20%' }}><u className='flex justify-center'> <Link to='/todolist'>キャンセル</Link></u></label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginTimeCard;