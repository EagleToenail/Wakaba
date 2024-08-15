import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/css/table.css'
import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
// import LabelComponent from '../../Components/Common/LabelComponent';


const CustomerIndividual = () => {
    // const title = 'タイトルタイトル';

    // const [isOpen, setIsOpen] = useState(false);

    // const handleClick = () => {
    //     setIsOpen(prevState => !prevState);
    // };

    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }


    return (<>
        <div className="bg-[trasparent] font-[sans-serif]">
            <div className='flex justify-center'>
                <div className="w-full pt-3" style={{ maxWidth: '80em' }}>
                    <div className="w-full pt-3" style={{ maxWidth: '40em' }}>
                        {/* new */}
                        <div className='flex'>
                            <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 !mb-0">TWO</label>
                            </div>
                            <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                <label className="text-[#70685a] font-bold block text-left mr-10 py-1 !mb-0">TWO</label>
                            </div>
                        </div>
                        {/* new */}
                        <div className='flex'>
                            <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">TWO</label>
                            </div>
                            <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 py-1 !mb-0">TWO</label>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center !mt-0">Customer specific</h2>
                    <div className='w-full flex justify-between mt-10' style={{ marginLeft: '13%' }}>
                        <ButtonComponent children="abc" style={{ backgroundColor: '#838383', width: '80px' }} />
                        <ButtonComponent className='' children="abc" style={{ width: '200px' }} />
                        <ButtonComponent children="abcdef" style={{ border: '1px solid #838383', backgroundColor: 'transparent', color: '#838383', width: '180px' }} />
                        <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end" style={{ flexDirection: 'column', width: '20%' }}><u> <Link to='/forgetpassword'>キャンセル</Link></u></label>
                    </div>
                </div>
            </div>
            <div className=" flex  justify-center ">
                <div className="w-full pt-3" style={{ maxWidth: '40em' }}>
                    <div className=" rounded-2xl">
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
                                <div style={{ width: '25%', flexDirection: 'column', }} className='!mb-0 flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">新しいパスワード</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-2 !mb-0">OOOOOOOOOOOOO</label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-3 !mb-0">VIP</label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <div className="relative font-[sans-serif] w-max mx-auto">
                                        <button type="button" id="dropdownToggle1"
                                            className="px-5 py-2 border border-gray-300 text-[#70685a] outline-none">
                                            Dropdown menu
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
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">TWO</label>
                                </div>
                                <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="ads" type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">THREE</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="ads" type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">FOUR</label>
                                </div>
                                <div style={{ width: '35%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <InputComponent type='text' required />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-11 py-1 !mb-0">Five</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <InputComponent type="text" required />
                                </div>
                                {/* <div style={{ width: '10%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="Date" type="Date" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div> */}
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr- py-1 !mb-0">eight</label>
                                </div>
                                <div style={{ width: '10%', flexDirection: 'column', }} className='flex text-right'>
                                    <label className="text-[#70685a] font-bold  block text-right py-1 mt-2">Gender</label>
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
                                            <li className='py-3 px-5 text-[#70685a] cursor-pointer'>Man</li>
                                            <li className='py-3 px-5 text-[#70685a] cursor-pointer'>Woman</li>
                                            <li className='py-3 px-5 text-[#70685a] cursor-pointer'>other</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">nine</label>
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
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around mr-10'>
                                    <div className="relative font-[sans-serif]">
                                        <button type="button" id="dropdownToggle3"
                                            className=" w-full py-1 border border-[#70685a] text-[#70685a] outline-none">
                                            Men
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
                                <div style={{ width: '30%', }} className='flex justify-end'>
                                    <button type="button"
                                        className="py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-medium outline-none border border-[#70685a] ">Purple</button>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">ten</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <div className="relative font-[sans-serif] w-full mx-auto">
                                        <button type="button" id="dropdownToggle3"
                                            className="w-full px-5 py-2 border border-[#70685a] text-[#70685a] outline-none">
                                            Men
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
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">TEN</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <InputComponent type="text" required />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">Eleven</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <InputComponent />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex '>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">Tweven</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <div className="p-1">
                                        {/* Text area */}
                                        <textarea
                                            value={text}
                                            onChange={handleChange}
                                            rows="4"
                                            cols="50"
                                            placeholder="Type something here..."
                                            className="border border-black rounded p-2 w-full"
                                        />
                                        {/* Display the current value of the text area */}
                                        <div className="mt-2 display-none border border-black" style={{ visibility: 'hidden' }}>
                                            <strong>Current Text:</strong>
                                            <p>{text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* textarea*/}
                <div className="w-full h-full mt-9" style={{ maxWidth: '40em' }}>
                    {/* textarea First*/}
                    <div style={{ width: '100%',}} className='flex'>
                        <div className=" h-full w-full ml-10">
                            {/* Text area */}
                            <div className="border border-[#70685a] rounded px-3 w-full" style={{ height: '300px',overflowX:'scroll',overflowY:'scroll'}}>
                                 <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-10 py-1 !mb-0">Past vist history</label>
                            </div>
                        </div>
                    </div>
                    {/* textarea Second*/}
                    <div style={{ width: '100%',}} className='flex'>
                        <div className=" h-full w-full ml-10 mt-10">
                            {/* Text area */}
                            <div className="border border-[#70685a] rounded px-3 w-full" style={{ height: '305px',overflowX:'scroll',overflowY:'scroll'}}>
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