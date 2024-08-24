import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/css/showtable.css'
import dateimage from '../../Assets/img/datepicker.png';
import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
// import LabelComponent from '../../Components/Common/LabelComponent';


const CustomerIndividual = () => {
    // const title = 'タイトルタイトル';

       // State to store the current date and time
       const [dateTime, setDateTime] = useState(new Date());

       useEffect(() => {
           // Update the date and time every minute
           const intervalId = setInterval(() => {
               setDateTime(new Date());
           }, 60000); // Update every 60,000 milliseconds (1 minute)
    
           // Clear the interval on component unmount
           return () => clearInterval(intervalId);
       }, []);
    
       // Map of days of the week to Japanese kanji
       const dayKanji = ['日', '月', '火', '水', '木', '金', '土'];
    
       // Format the date and time as YYYY/MM/DD (Kanji) HH:MM
       const formatDateTime = (date) => {
           const year = date.getFullYear();
           const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
           const day = String(date.getDate()).padStart(2, '0');
           const dayOfWeek = date.getDay(); // Get day of week (0: Sunday, 1: Monday, ..., 6: Saturday)
           const hours = String(date.getHours()).padStart(2, '0');
           const minutes = String(date.getMinutes()).padStart(2, '0');
    
           return `${year}/${month}/${day} (${dayKanji[dayOfWeek]}) ${hours}:${minutes}`;
       };
    
       const formattedDateTime = formatDateTime(dateTime);

    // const [text, setText] = useState('');

    // const handleChange = (event) => {
    //     setText(event.target.value);
    // }


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


    // State to store the selected date
    const [date, setDate] = useState('');

    // Handle date change event
    const handleDateChange = (event) => {
        setDate(event.target.value); // Update the date state with the selected date
    };


    return (<>
        <div className="bg-[trasparent] font-[sans-serif]">
            <div className='flex justify-center'>
                <div className="w-full pt-3" style={{ maxWidth: '80em' }}>
                    <div className="w-full pt-3" style={{ maxWidth: '40em' }}>
                        {/* new */}
                        <div className='flex'>
                            <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 !mb-0">来店時間</label>
                            </div>
                            <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                <label className="text-[#70685a] font-bold block text-left mr-10 py-1 !mb-0">{formattedDateTime}</label>
                            </div>
                        </div>
                        {/* new */}
                        <div className='flex'>
                            <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">顧客番号</label>
                            </div>
                            <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 py-1 !mb-0">OOOOOOOOOOOOO</label>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center !mt-0">顧客 個別情報(編集画面)</h2>
                    <div className='w-full flex justify-between mt-10' style={{ marginLeft: '13%' }}>
                        <ButtonComponent children="削除" className='px-5' style={{ backgroundColor: '#838383'}} />
                        <ButtonComponent className='' children="保存" />
                        <ButtonComponent children="出張買取" className='px-5' style={{ border: '1px solid #838383', backgroundColor: 'transparent', color: '#838383',}} />
                        <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end" style={{ flexDirection: 'column', width: '20%' }}><u> <Link to='/forgetpassword'>キャンセル</Link></u></label>
                    </div>
                </div>
            </div>
            <div className=" flex  justify-center ">
                    <div className="w-full pt-3" style={{ maxWidth: '40em' }}>
                            <div className=" rounded-2xl w-full">                            
                                <form className=" space-y-6 pt-10">
                                    {/* new */}
                                    <div className='flex'>
                                        <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">メールアドレス</label>
                                        </div>
                                        <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                            <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 py-1 !mb-0">OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</label>
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

                                        <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                            <input name="ads" type="text" value={date} required className="w-full text-[#70685a] border border-[#70685a] px-4 py-1 text-[20px] outline-[#70685a]" readOnly/>
                                        </div>
                                        <div style={{ width: '5%', flexDirection: 'column', }} className='flex flex-col justify-center ml-3 mr-5'>
                                            <div style={{width:'40px',height:'30px',cursor:'pointer'}}>
                                                <div style={{position: 'relative'}}>
                                                    <img src={dateimage} style={{width:'40px',height:'30px', position: 'absolute',cursor:'pointer'}} alt='calendar'></img>
                                                    <input type="date" id="birthday" name="birthday" onChange={handleDateChange} style={{position: 'absolute',left:'0', width:'40px', height:'30px', background:'transparent', border:'none',opacity:'0',cursor:'pointer'}}/>
                                                    {/* <input type="date" id="birthday" name="birthday" style={{position: 'absolute', width:'30px', height:'30px', background:'transparent', border:'none', opacity:'0'}}/> */}
                                                </div>
                                            </div>
                                        </div>

                                        <div style={{  flexDirection: 'column', }} className='flex align-center justify-around w-max mr-3'>
                                            <label className="text-[#70685a] font-bold mb-2 block text-right py-1 !mb-0">999才</label>
                                        </div>
                                        <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center text-right w-max'>
                                            <label className="text-[#70685a] font-bold mb-2 block text-right py-1 !mb-0 mr-2">性別</label>
                                        </div>
                                        <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center w-max'>
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
                                        <div style={{ width: '35%', flexDirection: 'column',height:'40px',marginRight:'5%' }} className='flex align-center justify-around'>
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
                                                <select id="classificatin1" name="classificatin" className="w-full h-full text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
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
                                        <div style={{ width: '25%', flexDirection: 'column', }} className='flex '>
                                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-11 py-1 !mb-0">生年月日</label>
                                        </div>
                                        <div className='' style={{ width: '75%', flexDirection: 'column', }}>
                                            <textarea
                                                rows="6"
                                                cols="50"
                                                value={text} // Set the value from state
                                                onChange={handleChange} // Handle changes
                                                className='w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]'
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                    </div>
                {/* textarea*/}
                <div className="w-full h-full mt-10 pt-5" style={{ maxWidth: '40em' }}>
                    {/* textarea First*/}
                    <div style={{ width: '100%',}} className='flex'>
                        <div className=" h-full w-full ml-10">
                            {/* Text area */}
                            <div className="border border-[#70685a] rounded px-3 w-full" style={{ height: '400px',overflowX:'scroll',overflowY:'scroll'}}>
                                 <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-10 py-1 !mb-0">Past vist history</label>
                            </div>
                        </div>
                    </div>
                    {/* textarea Second*/}
                    <div style={{ width: '100%',}} className='flex'>
                        <div className=" h-full w-full ml-10 mt-10">
                            {/* Text area */}
                            <div className="border border-[#70685a] rounded px-3 w-full" style={{ height: '367px',overflowX:'scroll',overflowY:'scroll'}}>
                                    <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-10 py-1 !mb-0">Whole hearing</label>
                                <div>
                                    <div className='flex'>
                                            <label className="text-[#70685a] text-[20px] mb-2 block text-left mr-10 py-1">Eleven 1</label>
                                            <label className="text-[#70685a] text-[20px] mb-2 block text-left mr-10 py-1 !mb-0">O O O O O O O O</label>
                                    </div>
                                    <div className='border border-[#70685a] ml-20'>
                                        <label className="text-[#70685a] text-[20px] mb-2 block text-left  mr-10 py-1 !mb-0">O O O O O O O O</label>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex'>
                                            <label className="text-[#70685a] text-[20px] mb-2 block text-left mr-10 py-1">Eleven 2</label>
                                            <label className="text-[#70685a] text-[20px] mb-2 block text-left mr-10 py-1 !mb-0">O O O O O O O O</label>
                                    </div>
                                    <div className='border border-[#70685a] ml-20'>
                                        <label className="text-[#70685a] text-[20px] mb-2 block text-left  mr-10 py-1 !mb-0">O O O O O O O O</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default CustomerIndividual;