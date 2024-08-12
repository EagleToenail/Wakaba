import React, { useState } from 'react';
import { Link } from 'react-router-dom'
export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu visibility
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <header className='flex shadow-md  sm:px-3 bg-[#ebe6e0] font-[sans-serif] max-h-[60px] tracking-wide relative z-50'>
      <Link >
        <svg className=" h-10 px-3" fill="#655b4a" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path className='bg-white' fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </Link>
      <div className='flex flex-wrap items-center justify-between w-full'>
        <Link className='text-[#655b4a] block font-semibold text-[20px]'>WAKABA 業務システム&nbsp;<span className='text-[10px]'>ver0.1</span></Link>
        <div id="collapseMenu" style={{ display: isOpen ? 'block' : 'none' }}
          className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
          <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3' onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

          <ul
            className='lg:flex gap-x-14 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li className='max-lg:border-b-0 border-gray-300 max-lg:py-3 px-3'>
              <Link
                className='text-[#655b4a] block font-semibold text-[15px]'>2024/12/01(金)</Link>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
              <Link
                className='text-[#007bff] text-[#655b4a] block font-semibold text-[15px]'>
                {/* <input name="username" type="text" required className="w-10 text-[#655b4a]  text-sm border border-gray-300 rounded-md outline-blue-300" placeholder="印刷" /> */}
                <button type="button"
                    className="px-5  text-[#655b4a] text-sm tracking-wider font-medium outline-none bg-white hover:bg-[#222] active:bg-[#333]">印刷</button>
              </Link>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link
              className='text-[#655b4a] text-gray-500 block font-semibold text-[15px]'>R</Link>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link
              className='text-[#655b4a] text-gray-500 block font-semibold text-[15px]'>P</Link>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link
              className='text-[#655b4a] text-gray-500 block font-semibold text-[15px]'>N</Link>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link
              className='text-[#655b4a] text-gray-500 block font-semibold text-[15px]'>At 99,000</Link>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link
              className='text-[#655b4a] block font-semibold text-[15px]'>Au 99,000</Link>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link
              className='text-[#655b4a] block font-semibold text-[15px]'>PT 99,000</Link>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link
              className='text-[#655b4a] block font-semibold text-[15px]'>
                                <button type="button"
                    className="px-5  text-[black] text-sm tracking-wider font-medium outline-none bg-white hover:bg-[#222] active:bg-[#333]">検索</button>
            </Link>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link
              className='text-[#655b4a] block font-semibold text-[15px]'>User</Link>
            </li>
          </ul>
        </div>

        <div className='flex max-lg:ml-auto space-x-3'>
          <button
            className='px-4 text-sm rounded-full font-bold text-white border-2 border-[#655b4a]  transition-all ease-in-out duration-300 hover:bg-transparent text-[#655b4a]'>ログアウト</button>

          <button id="toggleOpen" className='lg:hidden' onClick={handleClick}>
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* <div className='flex flex-wrap items-center justify-between gap-5 w-full'>

      </div> */}
    </header>
  </> 
  )
}
