import React,{useState} from 'react';
import Titlebar from '../../../Components/Common/Titlebar';
import InputComponent from '../../../Components/Common/InputComponent';
import dateimage from '../../../Assets/img/datepicker.png';
import DateAndTime from '../../../Components/Common/PickData';


const  OwnerStaffIndividual = () => {
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


    // State to store the selected date
    const [date, setDate] = useState('');

    // Handle date change event
    const handleDateChange = (event) => {
        setDate(event.target.value); // Update the date state with the selected date
    };

    
    return (
        <>
            <Titlebar title={title} />
            <DateAndTime/>
            <div className="bg-[trasparent] font-[sans-serif] mt-5">
                <div className=" flex flex-col items-center justify-center px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '70em' }}>
                        <div className=" rounded-2xl">
                            <div className='flex justify-around'>
                                <div className='flex font-bold'>
                                        <label className='text-[#70685a] font-bold'>スタッフ番号</label>
                                        <label className='text-[#70685a] font-bold ml-5'>OOOOOOOO</label>
                                </div>
                                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">スタッフ個別情報 </h2>
                                <div style={{visibility:'hidden'}}>
                                    <label className='text-[#70685a] font-bold'>スタッフ番号</label>
                                    <label className='text-[#70685a] font-bold ml-5'>OOOOOOOO</label>
                                </div>
                            </div>
                            <div className='flex justify-around mt-5'>
                                <button name='register' type="button" className="w-max px-10 py-1 font-bold text-[white] tracking-wide text-2xl rounded-lg justify-center t bg-[#838383] hover:bg-blue-700 focus:outline-none">
                                削除
                                </button>
                                <button name='register' type="button" className="w-max px-20 py-1 font-bold text-[white] tracking-wide text-2xl rounded-lg justify-center t bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                保存
                                </button>
                                <button name='register' type="button" className="w-max px-10 py-1 font-bold text-[#665b4b] tracking-wide text-2xl rounded-lg justify-center t bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                新規スタッフ登銀
                                </button>
                            </div>
                            <form className=" space-y-6 mt-5" style={{ maxWidth: '50em' }}>
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
                                        <select id="classification" name="classification" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                            <option value="執行役員">執行役員</option>
                                            <option value="社員">社員</option>
                                            <option value="契約社員">契約社員</option>
                                            <option value="アルバイト" selected>アルバイト
                                            </option>
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
                                        <input name="ads" type="text" value={date} required className="w-full text-[#70685a] border border-[#70685a] px-4 py-1 text-[20px] outline-[#70685a]" readOnly/>
                                    </div>
                                    <div style={{ width: '5%', flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                        <div style={{width:'40px',height:'30px',cursor:'pointer'}}>
                                            <div style={{position: 'relative'}}>
                                                <img src={dateimage} style={{width:'40px',height:'30px', position: 'absolute',cursor:'pointer'}} alt='calendar'></img>
                                                <input type="date" id="birthday" name="birthday" onChange={handleDateChange} style={{position: 'absolute',left:'0', width:'40px', height:'30px', background:'transparent', border:'none',opacity:'0',cursor:'pointer'}}/>
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
                                            <option value="man">男</option>
                                            <option value="woman">女</option>
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
                                        <select id="document" name="document" className="w-full h-full text-[#70685a] text-[15px] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                            <option value="運転免許証">運転免許証</option>
                                            <option value="運転経歴証明書">運転経歴証明書</option>
                                            <option value="旅券（パスポート)">旅券（パスポート)</option>
                                            <option value="個人番号カード（マイナンバーカード）在留カード・特別永住者証明書">個人番号カード（マイナンバーカード）在留カード・特別永住者証明書</option>
                                            <option value="各種福祉手帳（身体障害者手帳等）">各種福祉手帳（身体障害者手帳等）</option>
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
                                            <option value="Hokkaido">北海道</option>
                                                <option value="Aomori">青森県</option>
                                                <option value="Iwate">岩手県</option>
                                                <option value="Miyagi">宮城県</option>
                                                <option value="Akita">秋田県</option>
                                                <option value="Yamagata">山形県</option>
                                                <option value="Fukushima">福島県</option>
                                                <option value="Ibaraki">茨城県</option>
                                                <option value="Tochigi">栃木県</option>
                                                <option value="Gunma">群馬県</option>
                                                <option value="Saitama">埼玉県</option>
                                                <option value="Chiba">千葉県</option>
                                                <option value="Tokyo">東京都</option>
                                                <option value="Kanagawa">神奈川県</option>
                                                <option value="Niigata">新潟県</option>
                                                <option value="Toyama">富山県</option>
                                                <option value="Ishikawa">石川県</option>
                                                <option value="Fukui">福井県</option>
                                                <option value="Yamanashi">山梨県</option>
                                                <option value="Nagano">長野県</option>
                                                <option value="Gifu">岐阜県</option>
                                                <option value="Shizuoka">静岡県</option>
                                                <option value="Aichi">愛知県</option>
                                                <option value="Mie">三重県</option>
                                                <option value="Shiga">滋賀県</option>
                                                <option value="Kyoto">京都府</option>
                                                <option value="Osaka">大阪府</option>
                                                <option value="Hyogo">兵庫県</option>
                                                <option value="Nara">奈良県</option>
                                                <option value="Wakayama">和歌山県</option>
                                                <option value="Tottori">鳥取県</option>
                                                <option value="Shimane">島根県</option>
                                                <option value="Okayama">岡山県</option>
                                                <option value="Hiroshima">広島県</option>
                                                <option value="Yamaguchi">山口県</option>
                                                <option value="Tokushima">徳島県</option>
                                                <option value="Kagawa">香川県</option>
                                                <option value="Ehime">愛媛県</option>
                                                <option value="Kochi">高知県</option>
                                                <option value="Fukuoka">福岡県</option>
                                                <option value="Saga">佐賀県</option>
                                                <option value="Nagasaki">長崎県</option>
                                                <option value="Kumamoto">熊本県</option>
                                                <option value="Oita">大分県</option>
                                                <option value="Miyazaki">宮崎県</option>
                                                <option value="Kagoshima">鹿児島県</option>
                                                <option value="Okinawa">沖縄県</option>
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
                                            className= " py-2 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-medium outline-none border border-[#70685a] ">職務経歴書</button>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">身分保証人</label>
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                            <select id="guarantor" name="guarantor" className="w-full h-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                                <option value="配偶者">配偶者</option>
                                                <option value="子供">子供</option>
                                                <option value="親">親</option>
                                                <option value="親戚">親戚</option>
                                                <option value="友人">友人</option>
                                            </select>
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around px-5'>
                                        <button type="button"
                                            className= "py-2 min-w-[160px] text-[#70685a] rounded-full text-sm tracking-wider font-medium outline-none border border-[#70685a] ">誓約書画像</button>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div style={{ width: '25%',}}>
                                         <h2 className=" text-[#70685a] text-right font-bold flex justify-center">特記事頂</h2>
                                    </div>
                                    <div style={{ width: '75%',}}>
                                        <div className='w-full'>
                                                <textarea
                                                    rows="6"
                                                    cols="50"
                                                    value={text} // Set the value from state
                                                    onChange={handleChange} // Handle changes
                                                    className='w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]'
                                                />
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

export default OwnerStaffIndividual;