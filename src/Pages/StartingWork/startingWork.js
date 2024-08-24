import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import DateAndTime from '../../Components/Common/PickData';


const StartingWork = () => {
    // const title = 'タイトルタイトル';

    // const handleNavigate = () => {
    //     window.location.href = '/todolist'; // Navigate and reload the page
    // };
    //Button color change
    const [button1Active, setButton1Active] = useState(true);
    const [button2Active, setButton2Active] = useState(true);
    const [button3Active, setButton3Active] = useState(false);
    const [button4Active, setButton4Active] = useState(true);
    const [button5Active, setButton5Active] = useState(true);
    const [button6Active, setButton6Active] = useState(false);
    const [button7Active, setButton7Active] = useState(true);
    const [button8Active, setButton8Active] = useState(true);
    const [button9Active, setButton9Active] = useState(false);
    const [button10Active, setButton10Active] = useState(true);
    const [button11Active, setButton11Active] = useState(true);
    const [button12Active, setButton12Active] = useState(true);

    const handleClick = (setButtonActive, isActive) => {
        setButtonActive(!isActive);
      };

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />
            <div className="bg-[trasparent] font-[sans-serif] mt-12">
                <div className=" flex flex-col items-center justify-center px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '80em' }}>
                        <div className=" rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">始業作業</h2>
                            <h2 className="text-[#ff0000] text-center text-2xl font-bold flex justify-center !mt-3">オープン時間の10:00までに、全て完了してください</h2>
                            <form className=" space-y-6 !mt-10">
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                        <button type="button" onClick={() => handleClick(setButton1Active, button1Active)} className={`w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] ${button1Active ? 'bg-[#e87a00]' : 'transparent'}    hover:bg-blue-700 focus:outline-none`}>一致
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
                                        <button type="button" onClick={() => handleClick(setButton2Active, button2Active)} className={`w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] ${button2Active ? 'bg-[#e87a00]' : 'transparent'} hover:bg-blue-700 focus:outline-none`}>送信
                                        </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">2.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">掃除はしましたか？（受付カウンター、バックヤード、床、掃除機、モフモフ、ウェットティッシュ）</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                        <button type="button" onClick={() => handleClick(setButton3Active, button3Active)} className={`w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] ${button3Active ? 'bg-[#e87a00]' : 'transparent'} hover:bg-blue-700 focus:outline-none`}>送信
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
                                        <button type="button" onClick={() => handleClick(setButton4Active, button4Active)} className={`w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] ${button4Active ? 'bg-[#e87a00]' : 'transparent'} hover:bg-blue-700 focus:outline-none`}>送信
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
                                        <button type="button" onClick={() => handleClick(setButton5Active, button5Active)} className={`w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] ${button5Active ? 'bg-[#e87a00]' : 'transparent'} hover:bg-blue-700 focus:outline-none`}>送信
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
                                        <button type="button" onClick={() => handleClick(setButton6Active, button6Active)} className={`w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] ${button6Active ? 'bg-[#e87a00]' : 'transparent'} hover:bg-blue-700 focus:outline-none`}>送信
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
                                        <button type="button" onClick={() => handleClick(setButton7Active, button7Active)} className={`w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] ${button7Active ? 'bg-[#e87a00]' : 'transparent'} hover:bg-blue-700 focus:outline-none`}>送信
                                        </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">7.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">Outlookのメールはチェックしましたか?</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                        <button type="button" onClick={() => handleClick(setButton8Active, button8Active)} className={`w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] ${button8Active ? 'bg-[#e87a00]' : 'transparent'} hover:bg-blue-700 focus:outline-none`}>送信
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
                                        <button type="button" onClick={() => handleClick(setButton9Active, button9Active)} className={`w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] ${button9Active ? 'bg-[#e87a00]' : 'transparent'} hover:bg-blue-700 focus:outline-none1`}>送信
                                        </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">9.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">缶ウォーマー電源ONにしました</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                        <button type="button" onClick={() => handleClick(setButton10Active, button10Active)} className={`w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] ${button10Active ? 'bg-[#e87a00]' : 'transparent'} hover:bg-blue-700 focus:outline-none`}>送信
                                        </button>
                                    </div>
                                    <div style={{ width: '5%' }} className=' px-5 flex align-center justify-center'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-center text-[20px] py-1 !mb-0">10.</label>
                                    </div>
                                    <div style={{ width: '85%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] fold-semiblod mb-1 block text-left text-[20px] mr-10 py-1 !mb-0">【新人】ブラインドキータッチ練習 </label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '10%' }} className='flex align-center justify-end'>
                                        <button type="button" onClick={() => handleClick(setButton11Active, button11Active)} className={`w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] ${button11Active ? 'bg-[#e87a00]' : 'transparent'} hover:bg-blue-700 focus:outline-none`}>送信
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
                                        <button type="button" onClick={() => handleClick(setButton12Active, button12Active)} className={`w-20 px-1 py-1 font-bold tracking-wide rounded-lg justify-end text-[#d1cdca] border border-[#d1cdca] ${button12Active ? 'bg-[#e87a00]' : 'transparent'} hover:bg-blue-700 focus:outline-none`}>送信
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
                                            <button type="button"  className="w-30 px-10 py-1 font-bold tracking-wide rounded-sm justify-center text-[#d1cdca] border border-[#d1cdca] bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                               <Link>報告</Link> 
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