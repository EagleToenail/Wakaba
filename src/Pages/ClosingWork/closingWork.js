import React from 'react';
import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import DateAndTime from '../../Components/Common/PickData';


const  ClosingWork = () => {
    const title = 'タイトルタイトル';
    
    return (
        <>
            <Titlebar title={title} />
            <DateAndTime/>
            <div className="bg-[trasparent] font-[sans-serif] mt-12">
                <div className=" flex flex-col items-center justify-center px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '80em' }}>
                        <div className=" rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">終業作業</h2>
                            <form className=" space-y-6 !mt-10">
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdc9] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">一致
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">1.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">金庫金は、月次収支報告書と一致しましたか?</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex !mt-3'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdc9] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">完了
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">2.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">アウトルシク受信メールチエシク完了しました。</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex !mt-3'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">3.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="flex text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">
                                            <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                            ヤフオク関係
                                        </label>
                                        <label className="flex text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">
                                            <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                             入金催促完了しました。</label>
                                        <label className="flex text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">
                                        <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                             再出品完了しました。</label>
                                        <label className="flex text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">
                                        <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                             ヤフオク出品 &nbsp;&nbsp;&nbsp;&nbsp;佐藤絵&nbsp; 999件&nbsp;&nbsp;&nbsp;&nbsp;高橋&nbsp;999件&nbsp;&nbsp;&nbsp;&nbsp;出品残&nbsp;999件</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex !mt-3'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdc9] bg-[transparent] border border-[#d1cdc9] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">完了
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">4.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">LINE公式アカウントチ工シク&nbsp;&nbsp;朝[済]、&nbsp;朝[済]、&nbsp;夕[済] &nbsp;合計回チ工シクしました。</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex !mt-3'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdc9] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">完了
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">5.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">工アコンoff確認しました。</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex !mt-3'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdc9] border border-[e87a00] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">完了
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">6.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">照明off確認しました。</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex !mt-3'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    <button type="button" className="w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdc9] bg-[transparent] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">完了
                                            </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">7.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">缶ウーマ一電源OFF&nbsp;確認しました。</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex !mt-3'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    {/* <button type="button" className="w-20 px-1 py-2 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">送信
                                            </button> */}
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">8.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">本日の確認事項</label>

                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-center pl-3'>[責任者タスク]</div>
                                                <div  className='text-[20px] text-[#70685a] text-center pr-3 font-bold'>なし</div>
                                            </div>
                                            <div style={{ width: '10%',}} className='text-[20px] text-[#70685a] text-left pr-3'></div>
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    単日買取額</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,999円</div>
                                            </div>
                                            <div style={{ width: '10%',}} className='text-[20px] text-[#70685a] text-left pr-3'></div>
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    単日粗利額</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,999円</div>
                                            </div>
                                            <div style={{ width: '10%',}} className='text-[20px] text-[#70685a] text-left pr-3'></div>
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    当月粗利額</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,999,999円</div>
                                            </div>
                                            <div style={{ width: '10%',}} className='text-[20px] text-[#70685a] text-left pr-3'></div>
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    金庫追加金</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,999,999円</div>
                                            </div>
                                            <div style={{ width: '10%',}} className='text-[20px] text-[#70685a] text-left pr-3'></div>
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    着払い代金</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,999円</div>
                                            </div>
                                           
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    残金</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,999円</div>
                                            </div>  
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    入電</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,999入</div>
                                            </div>
                                            
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    来店数</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999入</div>
                                            </div>
                                            
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    成約数</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999入</div>
                                            </div>
                                            
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    不成約数</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999入</div>
                                            </div>
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    預かOOOO</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999入</div>
                                            </div>
                                            
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    未店問合</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999入</div>
                                            </div>
                                            
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    買取実績、ブログアシプ</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999件</div>
                                            </div>
                                            
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    Instagramアシプ</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999件</div>
                                            </div>
                                            
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    チラシを見て来店されたお客様</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999件</div>
                                            </div>
                                            
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    今月のチラシを見たお客様</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999件</div>
                                            </div>
                                            
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    本日の送料用切手使用金額</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999999円</div>
                                            </div>
                                            
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    切手台紙張っ追加額</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999円</div>
                                            </div>
                                            
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    切手台紙張十バラ残額合計</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999円</div>
                                            </div>
                                            
                                        </div>
                                        <div style={{ width: '60%' }} className='flex align-center'>
                                            <div style={{ width: '80%' }} className='flex justify-between'>
                                                <div  className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                                    本日のアナウンス回数</div>
                                                <div  className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99回</div>
                                            </div>
                                            <div style={{ width: '10%',}} className='text-center text-[20px] text-[#70685a] text-left pr-3!p-0'><u>[詳細]</u></div>
                                        </div>


                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex !mt-3'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                    {/* <button type="button" className="w-20 px-1 py-2 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">送信
                                            </button> */}
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">9.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0 ">次の「一括締め作 業亅を行います</label>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0 flex">
                                                                                        <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                            売上表の締め作業を行います</label>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0 flex">
                                                                                        <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                            売上表などのバシクアシプを行います</label>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0 flex">
                                                                                        <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                            本部(フオーナイシ)に着地報告のメールを送送信します</label>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0 flex">
                                                                                        <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                            「一日の報告」チヤネルに最終報告を送信します</label>
                                    </div>
                                </div>


                                <div className='flex justify-between !mt-5' >

                                    <div className="!mt-5" style={{ marginBottom: '10px', width: '70%', paddingLeft: '30%' }}>
                                        <div className='w-full flex justify-center'>
                                            <button type="button" className="w-30 px-10 py-1 font-bold tracking-wide rounded-lg justify-center text-[#d1cdc9] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                                <Link to='/login' className='p-3  '>一括締めボタン</Link>
                                            </button>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className='flex justify-center '>
                                    <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">(1を完了しないとこのボタンは抻せません(不一致でモ可))</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClosingWork;