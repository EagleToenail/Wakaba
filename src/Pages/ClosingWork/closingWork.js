import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import DateAndTime from '../../Components/Common/PickData';


const ClosingWork = () => {
    // const title = 'タイトルタイトル';


    //Button color change
    const [button1Active, setButton1Active] = useState(true);
    const [button2Active, setButton2Active] = useState(true);
    const [button4Active, setButton4Active] = useState(false);
    const [button5Active, setButton5Active] = useState(true);
    const [button6Active, setButton6Active] = useState(true);
    const [button7Active, setButton7Active] = useState(false);

    const handleClick = (setButtonActive, isActive) => {
        setButtonActive(!isActive);
        };

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />
            <div className="bg-[trasparent] font-[sans-serif] mt-2">
                <div className=" flex flex-col items-center justify-center px-4">
                    <div className="w-full" style={{ maxWidth: '80em' }}>
                        <div className=" rounded-2xl">
                            {/* <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">終業作業</h2> */}
                            <form className=" space-y-2 !mt-2">
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                        <button type="button" onClick={() => handleClick(setButton1Active, button1Active)} className={`w-20 h-9 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdc9] border border-[#d1cdca] ${button1Active ? 'bg-[#e87a00]' : 'transparent'} hover:bg-blue-700 focus:outline-none`}>一致
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
                                        <button type="button" onClick={() => handleClick(setButton2Active, button2Active)} className={`w-20 h-9 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdc9] border border-[#d1cdca] ${button2Active ? 'bg-[#e87a00]' : 'transparent'} hover:bg-blue-700 focus:outline-none`}>完了
                                        </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">2.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">アウトルック受信メールチェック完了しました。</label>
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
                                                <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                            ヤフオク関係
                                        </label>
                                        <label className="flex text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">
                                            <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                            入金催促完了しました。</label>
                                        <label className="flex text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">
                                            <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                            再出品完了しました。</label>
                                        <label className="flex text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">
                                            <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                            ヤフオク出品 &nbsp;&nbsp;&nbsp;&nbsp;佐藤絵&nbsp; 999件&nbsp;&nbsp;&nbsp;&nbsp;高橋&nbsp;999件&nbsp;&nbsp;&nbsp;&nbsp;出品残&nbsp;999件</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex !mt-3'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                        <button type="button" onClick={() => handleClick(setButton4Active, button4Active)} className={`w-20 h-9 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdc9] border border-[#d1cdc9] ${button4Active ? 'bg-[#e87a00]' : 'transparent'}  hover:bg-blue-700 focus:outline-none`}>完了
                                        </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">4.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">LINE公式アカウントチェック&nbsp;&nbsp;朝[済]、&nbsp;朝[済]、&nbsp;夕[済] &nbsp;合計回チェックしました。</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex !mt-3'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                        <button type="button" onClick={() => handleClick(setButton5Active, button5Active)} className={`w-20 h-9 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdc9] border border-[#d1cdca] ${button5Active ? 'bg-[#e87a00]' : 'transparent'} hover:bg-blue-700 focus:outline-none`}>完了
                                        </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">5.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">エアコンoff確認しました。</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex !mt-3'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                        <button type="button" onClick={() => handleClick(setButton6Active, button6Active)} className={`w-20 h-9 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdc9] border border-[e87a00] ${button6Active ? 'bg-[#e87a00]' : 'transparent'} hover:bg-blue-700 focus:outline-none`}>完了
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
                                        <button type="button" onClick={() => handleClick(setButton7Active, button7Active)} className={`w-20 h-9 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdc9] border border-[#d1cdca] ${button7Active ? 'bg-[#e87a00]' : 'transparent'} hover:bg-blue-700 focus:outline-none`}>完了
                                        </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">7.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">缶ウォーマー電源OFF&nbsp;確認しました。</label>
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

                                        <div style={{ width: '60%' }} className='closing-content flex flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-center pl-3'>[責任者タスク]</div>
                                                <div className='text-[20px] text-[#70685a] text-center pr-3 font-bold'>なし</div>
                                            </div>
                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    単日買取額</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,999円</div>
                                            </div>
                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    単日粗利額</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,999円</div>
                                            </div>
                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    当月粗利額</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,999,999円</div>
                                            </div>
                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    金庫追加金</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,999,999円</div>
                                            </div>
                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    着払い代金</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,999円</div>
                                            </div>

                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    残金</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,999円</div>
                                            </div>
                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    入電</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,999入</div>
                                            </div>

                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    来店数</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999入</div>
                                            </div>

                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    成約数</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999入</div>
                                            </div>

                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    不成約数</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999入</div>
                                            </div>
                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    預かりOOOO</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999入</div>
                                            </div>

                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    来店問合</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999入</div>
                                            </div>

                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    買取実績ブログアップ</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999件</div>
                                            </div>

                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    Instagramアップ</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999件</div>
                                            </div>

                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    チラシを見て来店されたお客様</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999件</div>
                                            </div>

                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    今月のチラシを見たお客様</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999件</div>
                                            </div>

                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    本日の送料用切手使用金額</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999999円</div>
                                            </div>

                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    切手台紙張り追加額</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999円</div>
                                            </div>

                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '100%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    切手台紙張り＋バラ 残額合計</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99,9999円</div>
                                            </div>

                                        </div>
                                        <div style={{ width: '60%' }} className='closing-content flex align-center'>
                                            <div style={{ width: '87%' }} className='flex justify-between'>
                                                <div className=' text-[20px] text-[#70685a] text-left pl-3 flex'>
                                                    <span className='w-1 flex flex-col justify-center mr-3'>
                                                        <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                                    </span>
                                                    本日のアナウンス回数</div>
                                                <div className='text-[20px] text-[#70685a] text-right pr-3 font-bold'>99回</div>
                                            </div>
                                            <div style={{ width: '13%', }} className='text-center text-[20px] text-[#70685a] text-left pr-3!p-0'><u>[詳細]</u></div>
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
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0 ">次の「一括締め作業」を行います</label>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0 flex">
                                            <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                            売上表の締め作業を行います</label>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0 flex">
                                            <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                            売上表などのバックアップを行います</label>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0 flex">
                                            <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                            本部(フォーナイン)に着地報告のメールを送信します</label>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0 flex">
                                            <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                            「一日の報告」チャネルに最終報告を送信します</label>
                                    </div>
                                </div>


                                <div className='flex justify-between !mt-5' >

                                    <div className="!mt-5" style={{ marginBottom: '10px', width: '70%', paddingLeft: '30%' }}>
                                        <div className='w-full flex justify-center'>
                                            <button type="button" className="w-max px-5 py-1 font-bold tracking-wide rounded-lg justify-center text-[#d1cdc9] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                                <Link to='/logouttimecard' className='p-3  '>一括締めボタン</Link>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <div className='flex justify-center '>
                                    <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">(1を完了しないとこのボタンは押せません(不一致でも可))</label>
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