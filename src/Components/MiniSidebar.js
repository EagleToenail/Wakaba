import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import '../Assets/css/scrollbar.css';
import axios from 'axios';

export default function MiniSidebar() {
     const userStoreName = localStorage.getItem('storename');

     useEffect(() => {
  
         fetchGeneralChatAlerts();
         fetchStoreChatAlerts();
         fetchWithdrawVariousAlerts();
         fetchWithdrawBankATMAlerts();
         fetchOnSitePurchaseAlerts();
       // Set up polling
     //   const intervalId = setInterval(() => {
     //     fetchGeneralChatAlerts();
     //     fetchStoreChatAlerts();
     //       fetchTodoAlerts();
     //   }, 1000); // Poll every 1 seconds
     //   return () => clearInterval(intervalId);
     }, []);
     //--------------------------------------
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
    //---------------------------------------WithdrawVariouspurchse alert
    const [unReadWithdrawVariousCount, setUnReadWithdrawVariousCount] = useState(0);
        //fetch message data related user
        const fetchWithdrawVariousAlerts = async () => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
              throw new Error('API base URL is not defined');
            }
      
            const userId = localStorage.getItem('userId');
            const userStoreName = localStorage.getItem('storename');
            await axios.post(`${wakabaBaseUrl}/withdrawvariouspurchaseapproval/alerts`,{userId:userId})
            .then(response => {
                const unreadCount = response.data;
                setUnReadWithdrawVariousCount(unreadCount.unreadCount);
            })
            .catch(error => {
            console.error("There was an error fetching the customer data!", error);
            });
        };
    //---------------------------------------Withdraw Bank Atm alert
    const [unReadWithdrawBankATMCount, setUnReadWithdrawBankATMCount] = useState(0);
        //fetch message data related user
        const fetchWithdrawBankATMAlerts = async () => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
              throw new Error('API base URL is not defined');
            }
      
            const userId = localStorage.getItem('userId');
            const userStoreName = localStorage.getItem('storename');
            await axios.post(`${wakabaBaseUrl}/withdrawbankatmmessage/alerts`,{userId:userId})
            .then(response => {
                const unreadCount = response.data;
                setUnReadWithdrawBankATMCount(unreadCount.unreadCount);
            })
            .catch(error => {
            console.error("There was an error fetching the customer data!", error);
            });
        };
    //---------------------------------------on site purchase alert
    const [unReadOnSitePurchaseCount, setUnOnSitePurchaseCount] = useState(0);
        //fetch message data related user
        const fetchOnSitePurchaseAlerts = async () => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
              throw new Error('API base URL is not defined');
            }
      
            const userId = localStorage.getItem('userId');
            const userStoreName = localStorage.getItem('storename');
            await axios.post(`${wakabaBaseUrl}/onsitepurchasemessages/alerts`,{userId:userId})
            .then(response => {
                const unreadCount = response.data;
                setUnOnSitePurchaseCount(unreadCount.unreadCount);
            })
            .catch(error => {
            console.error("There was an error fetching the customer data!", error);
            });
        };
     return (
          <>
               <div style={{ overflowY: 'scroll', width: '80px', height: '100%' }}>
                    <nav className=" shadow-lg top-100 left-0 py-1 font-[sans-serif] " style={{ position: 'absolute', top: '110px', right: '1px', paddingRight: '2px' }}>
                         <div className="mt-4">
                              <h6 className="text-white font-bold bg-[#655b4a] px-1 text-[15px]">全体</h6>
                              <ul className="mt-2" >
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to='/generalchat/allgeneral'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]">
                                        </Link>
                                        {generalCounts.allgeneral !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.allgeneral}
                                             </button>
                                        )}

                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to='/generalchat/allforall'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]">
                                        </Link>
                                        {generalCounts.allforall !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.allforall}
                                             </button>
                                        )}
                                   </li>
                                   <hr className="my-3  mr-1 border-gray-400" />
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to="/generalchat/wakabapassword"
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]" ></Link>
                                        {generalCounts.wakabapassword !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.wakabapassword}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to='/generalchat/yahooauction'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
                                        {generalCounts.yahooauction !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.yahooauction}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to='/generalchat/executemeeting'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
                                        {generalCounts.executemeeting !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.executemeeting}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to='/generalchat/standardout'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
                                        {generalCounts.standardout !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.standardout}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }} >
                                        <Link type="button" to='/generalchat/basereport'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
                                        {generalCounts.basereport !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.basereport}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to='/generalchat/training'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
                                        {generalCounts.training !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.training}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to='/generalchat/storecommunication'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
                                        {generalCounts.storecommunication !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.storecommunication}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to='/generalchat/monthlycampaign'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
                                        {generalCounts.monthlycampaign !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {generalCounts.monthlycampaign}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to='/generalchat/purchaseperformanceblog'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
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
                                        <Link type="button" to='/storechat/allgeneral'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
                                        {storeCounts.allgeneral !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {storeCounts.allgeneral}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to='/storechat/businesscommunication'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
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
                                        <Link type="button" to='/storechat/approval'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
                                         {storeCounts.approval !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {storeCounts.approval}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to='/storechat/wholesalerreport'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
                                         {storeCounts.orderrequest !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {storeCounts.orderrequest}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to='/withdrawbankatm'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
                                        {unReadWithdrawBankATMCount !== 0 && (
                                        <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                             {unReadWithdrawBankATMCount}
                                        </button>
                                         )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to='/storechat/orderrequest'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
                                        {storeCounts.standardout !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {storeCounts.standardout}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to='/withdrawvariouspurchaseapproval'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
                                        {unReadWithdrawVariousCount !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {unReadWithdrawVariousCount}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to='/onsitepurchase'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
                                        {unReadOnSitePurchaseCount !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {unReadOnSitePurchaseCount}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to='/storechat/vendorvisit'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
                                        {storeCounts.vendorvisit !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {storeCounts.vendorvisit}
                                             </button>
                                        )}
                                   </li>

                                   <hr className="my-3  mr-1 border-gray-400" />

                                   <li className='flex  px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button" to='/storechat/shift'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
                                         {storeCounts.shift !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {storeCounts.shift}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button"  to='/storechat/businessreporthandover'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
                                         {storeCounts.businessreporthandover !== 0 && (
                                             <button type="button" style={{ position: 'absolute', top: '10px', left: '20px' }} className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                                  {storeCounts.businessreporthandover}
                                             </button>
                                        )}
                                   </li>
                                   <li className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                        <Link type="button"  to='/storechat/yetanothertashifmeeting'
                                             className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none active:bg-blue-700 text-[15px]"></Link>
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
