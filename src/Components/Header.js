import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import {jwtDecode} from 'jwt-decode';
export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://gold.tanaka.co.jp/retanaka/price/";
    fetch(url)
      .then(response => response.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        const priceTables = doc.querySelectorAll("table.price_table");
        const data = [];

        priceTables.forEach(table => {
          const rows = table.querySelectorAll("tbody tr");
          rows.forEach(row => {
            const cols = row.querySelectorAll("th, td");
            if (cols.length > 1) {
              // const name = cols[0].textContent.trim();
              const price = cols[1].textContent.trim();
              data.push({ price });
            }
          });
        });
        console.log(data[0].price);
        setData(data);
      })
      .catch(error => console.log(error));
  }, []);
  // Function to toggle menu visibility
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
      // Update the date and time every minute
      const intervalId = setInterval(() => {
          const now = new Date();
          const tokyoTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));
          setDateTime(tokyoTime);
      }, 60000); // Update every 60,000 milliseconds (1 minute)

      // Clear the interval on component unmount
      return () => clearInterval(intervalId);
  }, []);

  // Map of days of the week to Japanese kanji
  const dayKanji = ['日', '月', '火', '水', '木', '金', '土'];

  // Format the date and time as YYYY/MM/DD (Kanji) HH:MM
  const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const day = String(date.getDate()).padStart(2, '0');
      const dayOfWeek = date.getDay(); // Get day of week (0: Sunday, 1: Monday, ..., 6: Saturday)

      return `${year}/${month}/${day} (${dayKanji[dayOfWeek]})`;
  };
  const formatTime = (date) => {
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');

      return `${hours}:${minutes}`;
  };

  const formattedDate = formatDate(dateTime);
  const formattedTime = formatTime(dateTime);

  const [userData, setUserData] = useState([]);

  // const token = localStorage.getItem('token');
  // const decodedToken = jwtDecode(token);
  // const userId = decodedToken.userId;
  const userId = localStorage.getItem('userId');
  // console.log('token-----------------',token,decodedToken.username)
  
  useEffect(() => {
    if (!userId) {
      navigate('/');
    }
  }, [userId]);

  useEffect(() => {

    const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

    if (!wakabaBaseUrl) {
      throw new Error('API base URL is not defined');
    }

    axios.post(`${wakabaBaseUrl}/user/getUserById`, { userId })
      .then(response => {
        console.log("data", response.data)
        setUserData(response.data);
        if (!response.data) {
          navigate('/');
        }
      })
      .catch(error => {
        console.error("There was an error fetching the customer data!", error);
      });
  }, [userId]);
//------------------------------auto log out function----------------------------------
const clearStorage = () => {
  localStorage.clear();
  navigate('/');
};

const now = new Date();
const options = { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit', second: '2-digit' };
const jstDate = new Intl.DateTimeFormat('en-US', options).format(now);
const [hours, minutes, seconds] = jstDate.split(':').map(Number);
const midnightJST = new Date();
midnightJST.setHours(24, 0, 0, 0); // Set to midnight (00:00:00)
midnightJST.setMinutes(midnightJST.getMinutes() - 1); // Set to one minute before midnight

// Calculate the time until that moment
let timeUntilOneMinuteBeforeMidnight = midnightJST - now;
// console.log('timeUntilOneMinuteBeforeMidnight',timeUntilOneMinuteBeforeMidnight,midnightJST,now)
if (timeUntilOneMinuteBeforeMidnight < 0) {
  midnightJST.setDate(midnightJST.getDate() + 1); // Move to the next day
  timeUntilOneMinuteBeforeMidnight = midnightJST - now; // Recalculate the time
}
setTimeout(clearStorage, timeUntilOneMinuteBeforeMidnight);

//-------------------------auto save precious metal-----------------------------------
const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Tokyo' };
const currentDay = new Intl.DateTimeFormat('ja-JP', optionsDate).format(now).replace(/\//g, '/');

const desiredKeys = [
  'K24特定品',
  'K24',
  'K22',
  'K20',
  'K18',
  'K15',
  'K14',
  'K12',
  'K10',
  'K9',
  'Pt特定品',
  'Pt1000',
  'Pt950',
  'Pt900',
  'Pt850',
  'Pt800',
  'Pt750',
  'SV'
];
const getData = async(data1) => {
  const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
  if (!wakabaBaseUrl) {
      throw new Error('API base URL is not defined');
  }
  const priceArray = data1.map(item => item.price);
  const resultObject = desiredKeys.reduce((acc, key, index) => {
      acc[key] = priceArray[index];
      return acc;
  }, {});
  resultObject.date = currentDay;
  // console.log('resultObject',resultObject)
  await axios.post(`${wakabaBaseUrl}/preciousmetalprice/autosave`, {payload:resultObject})
      .then(response => {
              // setData(response.data)
      })
      .catch(error => {
          console.error("There was an error fetching the customer data!", error);
      });
};

const getPreciousMetalData = () => {
  const url = "https://gold.tanaka.co.jp/retanaka/price/";
  fetch(url)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const priceTables = doc.querySelectorAll("table.price_table");
      const data = [];

      priceTables.forEach(table => {
        const rows = table.querySelectorAll("tbody tr");
        rows.forEach(row => {
          const cols = row.querySelectorAll("th, td");
          if (cols.length > 1) {
            const name = cols[0].textContent.trim();
            const price = cols[1].textContent.trim();
            data.push({ name, price });
          }
        });
      });
      getData(data);
    })
    .catch(error => console.log(error));
}
setTimeout(getPreciousMetalData, timeUntilOneMinuteBeforeMidnight);

//----------------------go to admin top----------------------------
  const gotoAdminTop = () => {
    if(userData.role_flag==='4'){
      navigate('/admin/managementSettingSuperAdministratorTOP');
    }
    if(userData.role_flag==='3'){
      navigate('/admin/managementheadquaterstop');
    }
    
    if(userData.role_flag==='2'){
      navigate('/admin/ownerstop');
    }
  }
//-----------------------zoom function---------------
  const [zoomLevel, setZoomLevel] = useState(1); // Initial zoom level

  const handleZoomIn = () => {
      const newZoom = zoomLevel + 0.1; // Increase zoom by 10%
      setZoomLevel(newZoom);
      document.body.style.transform = `scale(${newZoom})`;
      document.body.style.transformOrigin = '0 0'; // Set the origin for scaling
  };

  const handleZoomOut = () => {
      const newZoom = zoomLevel > 0.2 ? zoomLevel - 0.1 : zoomLevel; // Decrease zoom by 10% but not below 0.2
      setZoomLevel(newZoom);
      document.body.style.transform = `scale(${newZoom})`;
      document.body.style.transformOrigin = '0 0'; // Set the origin for scaling
  };

  // const handleResetZoom = () => {
  //     setZoomLevel(1);
  //     document.body.style.transform = 'scale(1)'; // Reset to normal zoom
  // };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const handleGoForward = () => {
    navigate(1); // Go forward to the next page
  };

  return (
    <>
      <header className='flex shadow-md  sm:px-3 bg-[#ebe6e0] font-[sans-serif] max-h-[60px] tracking-wide relative z-50'>
        <div className='cursor-pointer' onClick={gotoAdminTop}>
          <svg className=" h-10 px-3" fill="#655b4a" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path className='bg-white' fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </div>
        <div className='flex flex-wrap items-center justify-between w-full'>
          <div className='text-[#655b4a] block font-semibold text-[20px] cursor-pointer'>WAKABA 業務システム&nbsp;<span className='text-[10px]'>ver0.1</span></div>
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
              className='lg:flex  max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
              <li className='max-lg:border-b-0 border-gray-300 max-lg:py-3 px-3'>
                <Link
                  className='text-[#655b4a] block font-semibold text-[15px]'>{formattedDate}&nbsp;{formattedTime}</Link>
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                <Link
                  className='text-[#007bff] text-[#655b4a] block font-semibold text-[15px]'>
                  {/* <input name="username" type="text" required className="w-10 text-[#655b4a]  text-sm border border-gray-300 rounded-md outline-blue-300" placeholder="印刷" /> */}
                  <button type="button"
                    className="px-5  text-[#655b4a] text-sm tracking-wider font-medium outline-none bg-white hover:bg-[#222] active:bg-[#333]">印刷</button>
                </Link>
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                <div onClick={handleRefresh} className='text-[#655b4a] block font-semibold text-[15px] w-5'>
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-p79yt4" fill="#655b4a" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ReplayIcon" title="Replay"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8"></path></svg>
                </div>
              </li>
              <li className='max-lg:border-b border-gray-300  max-lg:py-3 px-3'>
                <div onClick={handleGoBack} className='text-[#655b4a] text-gray-500 block font-semibold text-[15px] w-5'>
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-p79yt4" fill="#655b4a" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowLeftIcon" title="KeyboardArrowLeft"><path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"></path></svg>
                </div>
              </li>
              <li className='max-lg:border-b border-gray-300  max-lg:py-3 px-3'>
                <div onClick={handleGoForward} className='text-[#655b4a] text-gray-500 block font-semibold text-[15px] w-5'>
                  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-p79yt4" fill="#655b4a" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowRightIcon" title="KeyboardArrowRight"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"></path></svg>
                </div>
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                {/* <Link
                className='text-[#655b4a] block font-semibold text-[15px]'>Ag {data[17].price}</Link> */}
                {data?.[0]?.price && (
                  <Link
                    className='text-[#655b4a] block font-semibold text-[15px]'
                  >
                    Au {data[0].price}
                  </Link>
                )}
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                {/* <Link
                className='text-[#655b4a] block font-semibold text-[15px]'>Au {data[0].price} 
                </Link> */}
                {data?.[17]?.price && (
                  <Link
                    className='text-[#655b4a] block font-semibold text-[15px]'
                  >
                    Ag {data[17].price}
                  </Link>
                )}
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
                {/* <Link  className='text-[#655b4a] block font-semibold text-[15px]'>PT {data[10].price}</Link> */}
                {data?.[17]?.price && (
                  <Link
                    className='text-[#655b4a] block font-semibold text-[15px]'
                  >
                    Pt {data[10].price}
                  </Link>
                )}
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link
                className='text-[#655b4a] block font-semibold text-[15px]'>
                <button type="button"
                  className="px-5  text-[black] text-sm tracking-wider font-medium outline-none bg-white hover:bg-[#222] active:bg-[#333]">検索</button>
              </Link>
              </li>
              <li className='max-lg:border-b border-gray-300  max-lg:py-3 px-3'><div onClick={handleZoomIn}
                  className='text-[#655b4a] text-gray-500 block font-semibold text-[15px] w-7'>
                  <svg className="MuiSvgIcon-root jss69" focusable="false" viewBox="0 0 24 24" fill='#655b4a' aria-hidden="true" title="ZoomIn" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="ZoomIn"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></svg>
                </div>
              </li>
              <li className='max-lg:border-b border-gray-300  max-lg:py-3 px-3'><div onClick={handleZoomOut}
                  className='text-[#655b4a] text-gray-500 block font-semibold text-[15px] w-7'>
                  <svg className="MuiSvgIcon-root jss69" focusable="false" viewBox="0 0 24 24" fill='#655b4a' aria-hidden="true" title="ZoomOut" data-ga-event-category="material-icons" data-ga-event-action="click" data-ga-event-label="ZoomOut"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></svg>
                </div>
              </li>
              <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link
                className='text-[#655b4a] block font-semibold text-[15px]'>{userData.username}</Link>
              </li>
            </ul>
          </div>

          <div className='flex max-lg:ml-auto space-x-3'>
            <button
              className='px-4 text-sm rounded-full font-bold border-2 border-[#655b4a]  transition-all ease-in-out duration-300 hover:bg-transparent text-[#655b4a]'><Link to="/logouttimecard">ログアウト</Link></button>

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
