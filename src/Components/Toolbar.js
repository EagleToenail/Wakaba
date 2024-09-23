import React, { useState } from 'react';
import { Link } from 'react-router-dom'
export default function Toolbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [inquiryphoneCount, setInquiryPhoneCount] = useState(1); // initial count is 10
  const [inquiryvisitCount, setInquiryVisitCount] = useState(1); // initial count is 10

  // Function to toggle menu visibility
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const incrementInquiryphoneCount=()=>{
    setInquiryPhoneCount(inquiryphoneCount + 1);
  };
  const decrementInquiryphoneCount=()=>{
    setInquiryPhoneCount(inquiryphoneCount - 1);
  };
  const incrementInquiryVisitCount=()=>{
    setInquiryVisitCount(inquiryvisitCount + 1);

  }
  const decrementInquiryVisitCount=()=>{
    setInquiryVisitCount(inquiryvisitCount - 1);

  }
  return (
    <>
    <header className='flex  sm:px-3 bg-[#ebe6e0] font-[sans-serif] max-h-[50px] tracking-wide relative z-49 justify-end'>
      <div className='flex flex-wrap items-center justify-between gap-5 '>
        <div id="collapseMenu" style={{ display: isOpen ? 'block' : 'none' }}
          className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-49'>
          <button id="toggleClose" className='lg:hidden fixed top-4 right-4 z-[100] rounded-full bg-white p-3' onClick={handleClick}>
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
            className='lg:flex py-1 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            {/* <li className='max-lg:border-b border-gray-300 max-lg:py-4'>
                <Link className='text-[#655b4a] block font-semibold text-[15px]'>
                <button type="button"
                    className=" text-[20px] px-5 py-1 rounded-full text-white text-sm tracking-wider bg-[#655b4a] border border-current outline-none">Au</button>
                        <span>&nbsp;99</span>
                </Link>
            </li> */}
            {/* <li className='max-lg:border-b border-gray-300 max-lg:py-4 '>
                <Link className='text-[#655b4a] block font-semibold text-[15px]'>
                <button type="button"
                        className="text-[#655b4a] px-3 py-1 rounded-lg text-sm tracking-wider font-bold border border-[#655b4a] outline-none bg-transparent">電話問合</button>
                        
                </Link>
            </li> */}
            <li className='max-lg:border-b border-gray-300 max-lg:py-4 ml-5 flex flex-col justify-center'>
                  <button type="button" onClick={decrementInquiryphoneCount}
                      className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-brown-700 active:bg-brown-600">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1hkft75" focusable="false" fill='#655b4a' aria-hidden="true" viewBox="0 0 24 24" data-testid="RemoveOutlinedIcon" title="RemoveOutlined"><path d="M19 13H5v-2h14z"></path></svg>
                  </button>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-4 ml-5 flex flex-col justify-center'>
                <div className='text-[#655b4a] block font-semibold text-[15px] flex flex-col justify-center'>
                <label
                        className="text-[#655b4a] px-3 py-1 rounded-lg text-sm tracking-wider font-bold outline-none bg-transparent">電話問合 : {inquiryphoneCount}</label>
      
                </div>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-4 ml-5 flex flex-col justify-center'>
                <Link className='text-[#655b4a] block font-semibold text-[15px]'>
                    <button type="button" onClick={incrementInquiryphoneCount}
                        className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-brown-700 active:bg-brown-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                            <path
                                d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                data-original="#000000" />
                        </svg>
                    </button>
                </Link>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-4 ml-5 flex flex-col justify-center'>
                  <button type="button" onClick={decrementInquiryVisitCount}
                      className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-brown-700 active:bg-brown-600">
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-1hkft75" focusable="false" fill='#655b4a' aria-hidden="true" viewBox="0 0 24 24" data-testid="RemoveOutlinedIcon" title="RemoveOutlined"><path d="M19 13H5v-2h14z"></path></svg>
                  </button>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-4 ml-5 flex flex-col justify-center'>
                <div className='text-[#655b4a] block font-semibold text-[15px] flex flex-col justify-center'>
                <label
                        className="text-[#655b4a] px-3 py-1 rounded-lg text-sm tracking-wider font-bold outline-none bg-transparent">来店問合 : {inquiryvisitCount}</label>
      
                </div>
            </li>
            <li className='max-lg:border-b border-gray-300 max-lg:py-4 ml-5 flex flex-col justify-center'>
                <Link className='text-[#655b4a] block font-semibold text-[15px]'>
                    <button type="button" onClick={incrementInquiryVisitCount}
                        className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-brown-700 active:bg-brown-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                            <path
                                d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                data-original="#000000" />
                        </svg>
                    </button>
                    <span className='ml-5'>&nbsp;当日の売上: ￥100,000,000</span>
                </Link>
            </li>
          </ul>
        </div>

        <div className='flex max-lg:ml-auto space-x-3'>

          <button id="toggleOpen" className='lg:hidden ' onClick={handleClick}>
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
