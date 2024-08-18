import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import InputComponent from '../../Components/Common/InputComponent';
import dateimage from '../../Assets/img/datepicker.png';
import DateAndTime from '../../Components/Common/PickData';


const  Profile = () => {
    const title = 'タイトルタイトル';

    const [text, setText] = useState(
        `テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト`
    );

    // Handle change in the textarea
    const handleChange = (event) => {
        setText(event.target.value);
    };

    
    return (
        <>
            <Titlebar title={title} />
            <DateAndTime/>
            <div className="bg-[trasparent] font-[sans-serif] mt-12">
                <div className=" flex flex-col items-center justify-center px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '50em' }}>
                        <div className=" rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">規約スタッフ登録 </h2>
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">(本登録  入カフォーム) </h2>
                            <div className='flex flex justify-end'>
                                <h2 className='text-[red] flex text-[15px] flex-col justify-center'>*</h2>
                                <h2 className="text-[#70685a] text-center text-[10px] flex flex-col justify-center">&nbsp;important!</h2>
                            </div>
                            
                            <form className=" space-y-6">
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">メールアドレス</label>
                                    </div>
                                    <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 py-1 !mb-0">OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">パスワード</label>
                                    </div>
                                    <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 py-2 !mb-0">OOOOOOOOOOOOOOOOOOOOOO</label>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='!mb-0 flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">店舗名</label>
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-2 !mb-0">OOOOOOOOOOOOO</label>
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-3 !mb-0">種別</label>
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <select id="classificatin" name="classificatin" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                            <option value="1">アルバイト</option>
                                            <option value="2">Afghanistan</option>
                                            <option value="3">Åland Islands</option>
                                            <option value="4">Albania</option>
                                        </select>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">お名前</label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="ads" type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">カタカナ名</label>
                                    </div>
                                    <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="ads" type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">お電話番号</label>
                                    </div>
                                    <div style={{ width: '35%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <InputComponent type='text' required/>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-11 py-1 !mb-0">生年月日</label>
                                    </div>
                                    <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="ads" type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                    <div style={{ width: '5%', flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                        <div style={{width:'40px',height:'30px',cursor:'pointer'}}>
                                            <div style={{position: 'relative'}}>
                                                <img src={dateimage} style={{width:'40px',height:'30px', position: 'absolute',cursor:'pointer'}} alt='calendar'></img>
                                                <input type="date" id="birthday" name="birthday" style={{position: 'absolute', width:'40px', height:'30px', background:'transparent', border:'none',opacity:'0'}}/>
                                                {/* <input type="date" id="birthday" name="birthday" style={{position: 'absolute', width:'30px', height:'30px', background:'transparent', border:'none', opacity:'0'}}/> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ width: '15%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">999才</label>
                                    </div>
                                    <div style={{ width: '15%', flexDirection: 'column', }} className='flex flex-col justify-center text-right'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right py-1 !mb-0 mr-3">性別</label>
                                    </div>
                                    <div style={{ width: '15%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <select id="gender" name="gender" className="w-40 text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                            <option value="1">男</option>
                                            <option value="2">Afghanistan</option>
                                            <option value="3">Åland Islands</option>
                                            <option value="4">Albania</option>
                                        </select>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">本人確認書類</label>
                                    </div>
                                    <div style={{ width: '10%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <button type="button"
                                            className="w-9 h-9 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="black" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div style={{ width: '40%', flexDirection: 'column',height:'40px',marginRight:'5%' }} className='flex align-center justify-around'>
                                        <select id="classificatin" name="classificatin" className="w-full h-full text-[#70685a] text-[15px] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                            <option value="1">アルバイト</option>
                                            <option value="2">Afghanistan</option>
                                            <option value="3">Åland Islands</option>
                                            <option value="4">Albania</option>
                                        </select>
                                    </div>
                                    <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <button type="button"
                                            className= "py-2 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-medium outline-none border border-[#70685a] ">画像と情報表示</button>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">都道府県</label>
                                    </div>
                                    <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                            <select id="classificatin1" name="classificatin" className="w-full h-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                                <option value="1">神奈川県</option>
                                                <option value="2">Afghanistan</option>
                                                <option value="3">Åland Islands</option>
                                                <option value="4">Albania</option>
                                            </select>
                                    </div>
                                    <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">市町村</label>
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="ads" type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">住所詳細</label>
                                    </div>
                                    <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="ads" type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">書類</label>
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <button type="button"
                                            className= " py-2 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-medium outline-none border border-[#70685a] ">履歴書</button>
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around px-5'>
                                        <button type="button"
                                            className= " py-2 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-medium outline-none border border-[#70685a] ">職務糸歴書</button>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">身分保証人</label>
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                            <select id="classificatin3" name="classificatin" className="w-full h-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                                <option value="1">配偶者</option>
                                                <option value="2">Afghanistan</option>
                                                <option value="3">Åland Islands</option>
                                                <option value="4">Albania</option>
                                            </select>
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around px-5'>
                                        <button type="button"
                                            className= "py-2 min-w-[160px] text-[#70685a] rounded-full text-sm tracking-wider font-medium outline-none border border-[#70685a] ">誓画像</button>
                                    </div>
                                </div>
                                <h2 className=" text-[#70685a] text-center text-2xl font-bold flex justify-center">スタッフ規約</h2>
                                    <div className='w-full'>
                                        <textarea
                                            rows="6"
                                            cols="50"
                                            value={text} // Set the value from state
                                            onChange={handleChange} // Handle changes
                                            className='w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]'
                                        />
                                    </div>
                                <div className="flex items-center justify-center !mt-10">
                                    <input id="checkbox1" type="checkbox"
                                        className="w-6 h-6 mr-3 focus:ring-1 focus:ring-offset-slate-200 focus:ring-offset-4 focus:ring-[#007bff]" />
                                    <label htmlFor="checkbox1" className="text-black text-[20px]">規約に同意して </label>
                                </div>


                                <div className='flex justify-between !mt-5' >

                                    <div className="!mt-5 flex" style={{ marginBottom: '10px', width: '80%', paddingLeft: '20%' }}>
                                        <div className='w-full flex justify-center'>
                                            <button name='register' type="button" className="w-30 px-20 py-1 font-bold text-[white] tracking-wide rounded-lg justify-center t bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                                <Link to='/login'>登録する</Link>
                                            </button>
                                        </div>
                                    </div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end" style={{ flexDirection: 'column', width: '20%' }}><u> <Link to='/forgetpassword'>キャンセル</Link></u></label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;