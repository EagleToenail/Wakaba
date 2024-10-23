import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Navbar({sendURL}) {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // Function to toggle menu visibility
  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  const [activeIndex, setActiveIndex] = useState(null);

  const handleLinkClick = (index,route) => {
      setActiveIndex(index);
      navigate(route);
  };

  const currentURL = sendURL;
  console.log('currentURl',currentURL)
   const changeURL = () => {
    switch (currentURL) {
      case 'startingwork':
        setActiveIndex(0);
            break;
      case 'invoiceforpurchaselist':
        setActiveIndex(1);
        break;
      case 'salesslip':
        setActiveIndex(2);
        break;
      case 'vendorassessmentsheet':
        setActiveIndex(3);
        break;
      case 'wholesalershippinglist':
        setActiveIndex(4);
        break;
      case 'monthlyincome':
        setActiveIndex(5);
        break;
      case 'safemoney':
        setActiveIndex(6);
        break;
      case 'stamprelatedinventorylist':
        setActiveIndex(7);
        break;
      case 'stamprelatedreceiptandissuehistory':
        setActiveIndex(8);
        break;
      case 'commemorativecoinhistorylist':
        setActiveIndex(9);
        break;
      case 'customerlist':
        setActiveIndex(10);
        break;
      case '#':
        setActiveIndex(11);
        break;
      case 'closingwork':
        setActiveIndex(12);
        break;
      default:
        setActiveIndex(null);
        break;
    }
   }

  useEffect(()=> {
    changeURL();
  },[currentURL])

  return (
    <>
      <header className='flex shadow-md  sm:px-3 bg-[#524c3b] font-[sans-serif] max-h-[60px] tracking-wide relative z-50 justify-end'>
        <div className='flex flex-wrap items-center justify-between gap-5 '>
          <div id="collapseMenu" style={{ display: isOpen ? 'block' : 'none' }}
            className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
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

            <ul className='lg:flex py-2 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            {[
                { label: '始業', route: '/startingwork' },
                { label: '買取計算', route: '/invoiceforpurchaselist' },
                { label: '商品一覧', route: '/salesslip' },
                { label: '業者査定シート', route: '/vendorassessmentsheet' },
                { label: '業者卸発送一覧', route: '/wholesalershippinglist' },
                { label: '月次収支報告書', route: '/monthlyincome' },
                { label: '金入庫出金履歴', route: '/safemoney' },
                { label: '切手在庫', route: '/stamprelatedinventorylist' },
                { label: '切手発送一覧', route: '/stamprelatedreceiptandissuehistory' },
                { label: '記念硬貨/お札', route: '/commemorativecoinhistorylist' },
                { label: '顧客一覧', route: '/customerlist' },
                { label: 'WAKABA', route: '#' },
                { label: '終業', route: '/closingwork' },
            ].map((item, index) => (
                <li key={index} className='max-lg:border-b border-gray-300 max-lg:py-4 px-2'>
                    <button
                        type="button"
                        onClick={() => handleLinkClick(index, item.route)}
                        className={`block font-semibold text-[#655b4a] text-[15px] inline-block whitespace-nowrap overflow-hidden text-ellipsis px-5 text-sm tracking-wider outline-none bg-white ${
                            activeIndex === index ? '!bg-[#222] text-white' : 'hover:bg-[#222] active:bg-[#333]'
                        }`}
                    >
                        {item.label}
                    </button>
                </li>
            ))}
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
