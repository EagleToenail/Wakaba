import React from 'react';
// import { Link } from 'react-router-dom';


const Titlebar = ({title}) => {

    // const handleNavigate = () => {
    //     window.location.href = '/'; // Navigate and reload the page
    //   };
      
    return (

        <header className='flex shadow-md px-4 bg-[#ebe6e0] font-[sans-serif] min-h-[50px] tracking-wide relative z-50'>
            <button  id="toggleOpen" className='flex align-center justify-center pt-3'>
                <svg className="w-7 h-7" fill="#655b4a" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"></path>
                </svg>
                <div className='text-[#655b4a] block font-semibold text-[20px] px-3'>{title}</div>
            </button>

        </header>
    );
};

export default Titlebar;