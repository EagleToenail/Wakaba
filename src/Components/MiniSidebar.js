import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
import '../Assets/css/scrollbar.css';
import axios from 'axios';

export default function MiniSidebar() {
     const [generalCounts, setGeneralCounts] = useState({
          allgeneral: 0,
          allforall: 0,
          wakabapassword: 0,
          yahooauction: 0,
          executemeeting: 0,
          standardout: 0,
          basereport: 0,
          training: 0,
          storecommunication: 0,
          monthlycampaign: 0,
          purchaseperformanceblog: 0,
     });
     //fetch message data related user
     const fetchGeneralChatAlerts = async () => {
          const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
          if (!wakabaBaseUrl) {
               throw new Error('API base URL is not defined');
          }

          const userId = localStorage.getItem('userId');
          await axios.post(`${wakabaBaseUrl}/generalchat/alerts`, { userId: userId })
               .then(response => {
                    const threadName = response.data;
                    //  console.log("all threads",threadName)
                    const newCounts = {
                         allgeneral: threadName.filter(item => item.thread_name === 'allgeneral').length,
                         allforall: threadName.filter(item => item.thread_name === 'allforall').length,
                         wakabapassword: threadName.filter(item => item.thread_name === 'wakabapassword').length,
                         yahooauction: threadName.filter(item => item.thread_name === 'yahooauction').length,
                         executemeeting: threadName.filter(item => item.thread_name === 'executemeeting').length,
                         standardout: threadName.filter(item => item.thread_name === 'standardout').length,
                         basereport: threadName.filter(item => item.thread_name === 'basereport').length,
                         training: threadName.filter(item => item.thread_name === 'training').length,
                         storecommunication: threadName.filter(item => item.thread_name === 'storecommunication').length,
                         monthlycampaign: threadName.filter(item => item.thread_name === 'monthlycampaign').length,
                         purchaseperformanceblog: threadName.filter(item => item.thread_name === 'purchaseperformanceblog').length,
                    };

                    setGeneralCounts(newCounts);
               })
               .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
               });
     };

     useEffect(() => {

          fetchGeneralChatAlerts();
          // Set up polling
          //   const intervalId = setInterval(() => {
          //     fetchGeneralChatAlerts();
          //   }, 1000); // Poll every 1 seconds
          //   return () => clearInterval(intervalId);
     }, []);

     //---------------------------------------------------store chat------------------

     const [storeCounts, setStoreCounts] = useState({
          allgeneral: 0,
          businesscommunication: 0,
          approval: 0,
          wholesalerreport: 0,
          orderrequest: 0,
          standardout: 0,
          vendorvisit: 0,
          shift: 0,
          businessreporthandover: 0,
          yetanothertashifmeeting: 0,
     });
     //fetch message data related user
     const fetchStoreChatAlerts = async () => {
          const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
          if (!wakabaBaseUrl) {
               throw new Error('API base URL is not defined');
          }

          const userId = localStorage.getItem('userId');
          const userStoreName = localStorage.getItem('storename');
          await axios.post(`${wakabaBaseUrl}/storechat/alerts`, { userId: userId, storeName: userStoreName })
               .then(response => {
                    const threadName = response.data;
                    const newCounts = {
                         allgeneral: threadName.filter(item => item.thread_name === 'allgeneral').length,
                         businesscommunication: threadName.filter(item => item.thread_name === 'businesscommunication').length,
                         approval: threadName.filter(item => item.thread_name === 'approval').length,
                         wholesalerreport: threadName.filter(item => item.thread_name === 'wholesalerreport').length,
                         orderrequest: threadName.filter(item => item.thread_name === 'orderrequest').length,
                         standardout: threadName.filter(item => item.thread_name === 'standardout').length,
                         vendorvisit: threadName.filter(item => item.thread_name === 'vendorvisit').length,
                         shift: threadName.filter(item => item.thread_name === 'shift').length,
                         businessreporthandover: threadName.filter(item => item.thread_name === 'businessreporthandover').length,
                         yetanothertashifmeeting: threadName.filter(item => item.thread_name === 'yetanothertashifmeeting').length,
                    };

                    setStoreCounts(newCounts);
               })
               .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
               });
     };

     useEffect(() => {

          fetchStoreChatAlerts();
          // Set up polling
          //   const intervalId = setInterval(() => {
          //     fetchStoreChatAlerts();
          //   }, 1000); // Poll every 1 seconds
          //   return () => clearInterval(intervalId);
     }, []);
     return (
          <>
               <div style={{ overflowY: 'scroll', width: '80px', height: '100%' }}>
                    <nav className=" shadow-lg top-100 left-0 py-1 font-[sans-serif] " style={{ position: 'absolute', top: '110px', right: '1px', paddingRight: '2px' }}>
                         <div className="mt-4">
                              <h6 className="text-white font-bold bg-[#655b4a] px-1 text-[15px]">全体</h6>
                              <ul className="mt-2" >
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                        {generalCounts.allgeneral !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.allgeneral}
                                             </button>
                                        )}

                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                        {generalCounts.allforall !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.allforall}
                                             </button>
                                        )}
                                   </li>
                                   <hr className="my-3  mr-1 border-gray-400" />
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]" ></button>
                                        {generalCounts.wakabapassword !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.wakabapassword}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                        {generalCounts.yahooauction !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.yahooauction}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                        {generalCounts.executemeeting !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.executemeeting}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                        {generalCounts.standardout !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.standardout}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }} >
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                        {generalCounts.basereport !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.basereport}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                        {generalCounts.training !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.training}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                        {generalCounts.storecommunication !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.storecommunication}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                        {generalCounts.monthlycampaign !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.monthlycampaign}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                        {generalCounts.purchaseperformanceblog !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.purchaseperformanceblog}
                                             </button>
                                        )}
                                   </li>
                              </ul>
                         </div>

                         <div className="mt-4">
                              <h6 className="text-white font-bold bg-[#655b4a] px-2 text-[15px]">生駒</h6>
                              <ul className="mt-2">
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                        {storeCounts.allgeneral !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {storeCounts.allgeneral}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                         {storeCounts.businesscommunication !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {storeCounts.businesscommunication}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                        <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                             99
                                        </button>
                                   </li>

                                   <hr className="my-3  mr-1 border-gray-400" />

                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                         {storeCounts.approval !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {storeCounts.approval}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                         {storeCounts.orderrequest !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {storeCounts.orderrequest}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                        <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                             99
                                        </button>
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                        {storeCounts.standardout !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {storeCounts.standardout}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                        <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                             99
                                        </button>
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                        <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                             99
                                        </button>
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                        {storeCounts.vendorvisit !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {storeCounts.vendorvisit}
                                             </button>
                                        )}
                                   </li>

                                   <hr className="my-3  mr-1 border-gray-400" />

                                   <li className='flex  px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                         {storeCounts.shift !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {storeCounts.shift}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                         {storeCounts.businessreporthandover !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {storeCounts.businessreporthandover}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <button type="button"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></button>
                                       {storeCounts.yetanothertashifmeeting !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {storeCounts.yetanothertashifmeeting}
                                             </button>
                                        )}
                                   </li>
                              </ul>
                         </div>

                    </nav>
               </div>
          </>
     )
}
