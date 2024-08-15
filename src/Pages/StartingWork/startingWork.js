import React from 'react';
import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';



const  StartingWork = () => {
    const title = 'タイトルタイトル';
    
    return (
        <>
            <Titlebar title={title} />
            <h2 className="text-[#70685a] text-center font-bold text-[15px] flex justify-end mt-3" style={{ paddingRight: '1%' }}>2023/12/01(金)&nbsp;&nbsp;21:51</h2>
            <div className="bg-[trasparent] font-[sans-serif] mt-12">
                <div className=" flex flex-col items-center justify-center px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '80em' }}>
                        <div className=" rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">始業作業</h2>
                            <h2 className="text-[#ff0000] text-center text-2xl font-bold flex justify-center !mt-3">オープ時間の10:00までに，全て完了してください</h2>
                            <form className=" space-y-6 !mt-10">
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-2 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">送信
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">1.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">
                                        金庫金は、月次収支報告書とー致しましたか?</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-2 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">送信
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">2.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">掃除はしましたか？（受付カウンター、バシクヤード、床、掃除機、モフモフ,ウェットティッシュ）</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-2 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] bg-[transparent] hover:bg-blue-700 focus:outline-none">送信
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">3.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">観葉植物に水やりしましたか？</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-2 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">送信
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">4.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">ヤフオクで発送しましたか？(ブルーアウト、送り状 、発送連絡)</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-2 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">送信
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">5.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">ヤフオク未入金の催促連絡はしましたか？</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-2 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] bg-[#transparent] hover:bg-blue-700 focus:outline-none">送信
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">6.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">ヤフオク再出品しましたか？</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-2 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">送信
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">7.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">Outlookのメールは千エツクしましたか?</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-2 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">送信
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">8.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">公式LINEはチェックしましたか？</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-2 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] bg-[transparent] hover:bg-blue-700 focus:outline-none">送信
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">9.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">缶ウォーマー電源ONにしますた。</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-2 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">送信
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">10.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">【新人】ブラインドキータシチ練習 </label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-2 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">送信
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">11.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">【新人】ロレックス脱着練習</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-2 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">送信
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">12.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">【新人】ー人ロープレ</label>
                                    </div>
                                </div>


                                <div className='flex justify-between !mt-5' >

                                    <div className="!mt-5 flex" style={{ marginBottom: '10px', width: '70%', paddingLeft: '30%' }}>
                                        <div className='w-full flex justify-center'>
                                            <button type="button" className="w-30 px-5 py-2 font-bold tracking-wide rounded-lg justify-center text-[#d1cdca] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                                <Link to='/login' className='p-3  '>送信</Link>
                                            </button>
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

export default StartingWork;