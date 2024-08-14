import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import InputComponent from '../../Components/Common/InputComponent';



const  Profile = () => {
    const title = 'タイトルタイトル';
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the dropdown
    const handleClick = () => {
        setIsOpen(prevState => !prevState);
    };

    const [text, setText] = useState('');

    // Function to handle changes in the text area
    const handleChange = (event) => {
        setText(event.target.value);}
    
    return (
        <>
            <Titlebar title={title} />
            <h2 className="text-[#70685a] text-center font-bold text-[15px] flex justify-end mt-3" style={{ paddingRight: '1%' }}>2023/12/01(金)&nbsp;&nbsp;21:51</h2>
            <div className="bg-[trasparent] font-[sans-serif] mt-12">
                <div className=" flex flex-col items-center justify-center px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '50em' }}>
                        <div className=" rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">規約スタッフ登録 </h2>
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">(本登録  入カフォーム) </h2>

                            <h2 className="text-[#70685a] text-center text-[10px] flex justify-end">
                                <svg className="w-3 fill-yellow-600" viewBox="0 0 14 13" fill="yellow"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                                important!</h2>
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
                                        <div className="relative font-[sans-serif] w-max mx-auto">
                                            <button type="button" id="dropdownToggle1"
                                                className="px-5 py-2 border border-gray-300 text-[#70685a] outline-none">
                                                アルバイト
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd"
                                                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                        clipRule="evenodd" data-original="#000000" />
                                                </svg>
                                            </button>

                                            <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
                                                <li className='py-3 px-5 text-[#70685a] cursor-pointer'>Dropdown option</li>
                                                <li className='py-3 px-5 text-[#70685a] cursor-pointer'>Cloth set</li>
                                                <li className='py-3 px-5 text-[#70685a] cursor-pointer'>Sales details</li>
                                                <li className='py-3 px-5 text-[#70685a] cursor-pointer'>Marketing</li>
                                            </ul>
                                        </div>
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
                                    <div style={{ width: '15%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="ads" type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                    <div style={{ width: '10%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="Date" type="Date" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                    <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">999才</label>
                                    </div>
                                    <div style={{ width: '10%', flexDirection: 'column', }} className='flex text-right'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right py-1 !mb-0">性別</label>
                                    </div>
                                    <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <div className="relative font-[sans-serif] w-max mx-auto">
                                            <button type="button" id="dropdownToggle2"
                                                className="px-5 py-2 border border-[#70685a] text-[#70685a] outline-none">
                                                Men
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd"
                                                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                        clipRule="evenodd" data-original="#000000" />
                                                </svg>
                                            </button>

                                            <ul id="dropdownMenu" className='text-[#70685a] absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
                                                <li className='py-3 px-5 text-[#70685a] cursor-pointer'>男</li>
                                                <li className='py-3 px-5 text-[#70685a] cursor-pointer'>女性</li>
                                                <li className='py-3 px-5 text-[#70685a] cursor-pointer'>他の</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">本人確認書類</label>
                                    </div>
                                    <div style={{ width: '10%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <button type="button"
                                            className="w-10 h-10 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div style={{ width: '40%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <div className="relative font-[sans-serif] w-full mx-auto">
                                            <button type="button" id="dropdownToggle3"
                                                className="w-[280px] px-5 py-2 border border-[#70685a] text-[#70685a] outline-none">
                                                マイナンバーカード
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd"
                                                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                        clipRule="evenodd" data-original="#000000" />
                                                </svg>
                                            </button>

                                            <ul id="dropdownMenu" className=' text-[#70685a] absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
                                                <li className='py-3 px-5 text-[#70685a] cursor-pointer'>Man</li>
                                                <li className='py-3 px-5 text-[#70685a] cursor-pointer'>Woman</li>
                                                <li className='py-3 px-5 text-[#70685a] cursor-pointer'>other</li>
                                            </ul>
                                        </div>
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
                                        <div className="relative font-[sans-serif] w-full mx-auto">
                                            <button type="button" id="dropdownToggle3"
                                                className="w-full px-5 py-2 border border-[#70685a] text-[#70685a] outline-none">
                                                神奈川県
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd"
                                                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                        clipRule="evenodd" data-original="#000000" />
                                                </svg>
                                            </button>

                                            <ul id="dropdownMenu" className=' text-[#70685a] absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
                                                <li className='py-3 px-5 text-[#70685a] cursor-pointer'>Man</li>
                                                <li className='py-3 px-5 text-[#70685a] cursor-pointer'>Woman</li>
                                                <li className='py-3 px-5 text-[#70685a] cursor-pointer'>other</li>
                                            </ul>
                                        </div>
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
                                        <div className="relative font-[sans-serif] w-full mx-auto">
                                            <button type="button" id="dropdownToggle4" onClick={handleClick}
                                                className="dropdown-menu w-full px-5 py-2 border border-[#70685a] text-[#70685a] text-sm">
                                                配偶者
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd"
                                                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                                        clipRule="evenodd" data-original="#000000" />
                                                </svg>
                                            </button>
                                            {isOpen?
                                            <ul id="dropdownMenu"  className='absolute block shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
                                                <li className='py-3 px-5 text-[#70685a] text-sm cursor-pointer'>Man</li>
                                                <li className='py-3 px-5 text-[#70685a] text-sm cursor-pointer'>Woman</li>
                                                <li className='py-3 px-5 text-[#70685a] text-sm cursor-pointer'>other</li>
                                            </ul>
                                            :<ul id="dropdownMenu"  className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'></ul>}
                                        </div>
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around px-5'>
                                        <button type="button"
                                            className= "py-2 min-w-[160px] text-[#70685a] rounded-full text-sm tracking-wider font-medium outline-none border border-[#70685a] ">誓画像</button>
                                    </div>
                                </div>
                                <h2 className=" text-[#70685a] text-center text-2xl font-bold flex justify-center">スタッフ規約</h2>
                                {/* <textarea placeholder='' rows="6"
                                    className="w-full px-4 text-[#70685a] boder border-[#70685a] focus:bg-transparent text-sm pt-3 outline-[#70685a] ">
                                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                    テキストテキストテキストテキストテキストテキスト
                                    テキストテキストテキストテキスト
                                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                </textarea> */}
                                        <div className="p-4">
                                            {/* Text area */}
                                            <textarea
                                                value={text}
                                                onChange={handleChange}
                                                rows="4"
                                                cols="50"
                                                placeholder="Type something here..."
                                                className="border border-gray-300 rounded p-2 w-full"
                                            />
                                            {/* Display the current value of the text area */}
                                            <div className="mt-2 display-none" style={{visibility:'hidden'}}>
                                                <strong>Current Text:</strong>
                                                <p>{text}</p>
                                            </div>
                                        </div>

                                <div className="flex items-center justify-center !mt-10">
                                    <input id="checkbox1" type="checkbox"
                                        className="w-6 h-6 mr-3 focus:ring-1 focus:ring-offset-slate-200 focus:ring-offset-4 focus:ring-[#007bff]" />
                                    <label htmlFor="checkbox1" className="text-black text-[20px]">規約に同意して </label>
                                </div>











                                <div className='flex justify-between !mt-5' >

                                    <div className="!mt-5 flex" style={{ marginBottom: '10px', width: '70%', paddingLeft: '30%' }}>
                                        <div className='w-full flex justify-center'>
                                            <button type="button" className="w-30 px-5 py-2 font-bold tracking-wide rounded-lg justify-center t bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                                <Link to='/login' className='p-3  '>送信</Link>
                                            </button>
                                        </div>
                                    </div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end" style={{ flexDirection: 'column', width: '30%' }}><u> <Link to='/forgetpassword'>キャンセル</Link></u></label>
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