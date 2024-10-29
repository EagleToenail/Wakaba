import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import '../Assets/css/scrollbar.css';
import axios from 'axios';

// const Tooltip = ({ text, children }) => {
//      return (
//           <div className="relative inline-block group z-[100]">
//                {children}
//                <div className="absolute hidden bg-gray-700 text-white text-xs rounded py-1 px-2 -top-10 left-1/2 transform -translate-x-1/2 group-hover:block whitespace-nowrap">
//                     {text}
//                </div>
//           </div>
//      );
// };

export default function MiniSidebar() {
     const navigate = useNavigate(); // Use useNavigate instead of useHistory
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
          await axios.post(`${wakabaBaseUrl}/withdrawvariouspurchaseapproval/alerts`, { userId: userId })
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
          await axios.post(`${wakabaBaseUrl}/withdrawbankatmmessage/alerts`, { userId: userId })
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
          await axios.post(`${wakabaBaseUrl}/onsitepurchasemessages/alerts`, { userId: userId })
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
                              <ul className="mt-2">
                                   {[
                                        { to: '/generalchat/allgeneral', count: generalCounts.allgeneral, tooltip: "一般" },
                                        { to: '/generalchat/allforall', count: generalCounts.allforall, tooltip: "全体周知" },
                                        { to: '/generalchat/wakabapassword', count: generalCounts.wakabapassword, tooltip: "Waka Ba Password" },
                                        { to: '/generalchat/yahooauction', count: generalCounts.yahooauction, tooltip: "Yahoo Auction" },
                                        { to: '/generalchat/executemeeting', count: generalCounts.executemeeting, tooltip: "Execute Meeting" },
                                        { to: '/generalchat/standardout', count: generalCounts.standardout, tooltip: "Standard Out" },
                                        { to: '/generalchat/basereport', count: generalCounts.basereport, tooltip: "Base Report" },
                                        { to: '/generalchat/training', count: generalCounts.training, tooltip: "Training" },
                                        { to: '/generalchat/storecommunication', count: generalCounts.storecommunication, tooltip: "Store Communication" },
                                        { to: '/generalchat/monthlycampaign', count: generalCounts.monthlycampaign, tooltip: "Monthly Campaign" },
                                        { to: '/generalchat/purchaseperformanceblog', count: generalCounts.purchaseperformanceblog, tooltip: "Purchase Performance Blog" },
                                   ].map((item, index) => (
                                        <li key={index} className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                             {/* <Tooltip text={item.tooltip}> */}
                                             <button
                                                  type="button"
                                                  onClick={() => navigate(item.to)}
                                                  className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium outline-none active:bg-blue-700 text-[15px]"
                                             />
                                             {/* </Tooltip> */}
                                             {item.count !== 0 && (
                                                  <button
                                                       type="button"
                                                       style={{ position: 'absolute', top: '10px', left: '20px' }}
                                                       className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600"
                                                  >
                                                       {item.count}
                                                  </button>
                                             )}
                                        </li>
                                   ))}
                                   <hr className="my-3 mr-1 border-gray-400" />
                              </ul>
                         </div>

                         <div className="mt-4">
                              <h6 className="text-white font-bold bg-[#655b4a] px-2 text-[15px]">生駒</h6>
                              <ul className="mt-2">
                                   {[
                                        { to: '/storechat/allgeneral', count: storeCounts.allgeneral },
                                        { to: '/storechat/businesscommunication', count: storeCounts.businesscommunication },
                                        { to: '/storechat/approval', count: storeCounts.approval },
                                        { to: '/storechat/wholesalerreport', count: storeCounts.orderrequest },
                                        { to: '/withdrawbankatm', count: unReadWithdrawBankATMCount },
                                        { to: '/storechat/orderrequest', count: storeCounts.standardout },
                                        { to: '/withdrawvariouspurchaseapproval', count: unReadWithdrawVariousCount },
                                        { to: '/onsitepurchase', count: unReadOnSitePurchaseCount },
                                        { to: '/storechat/vendorvisit', count: storeCounts.vendorvisit },
                                        { to: '/storechat/shift', count: storeCounts.shift },
                                        { to: '/storechat/businessreporthandover', count: storeCounts.businessreporthandover },
                                        { to: '/storechat/yetanothertashifmeeting', count: storeCounts.yetanothertashifmeeting },
                                   ].map((item, index) => (
                                        <li key={index} className='flex px-3 mt-3' style={{ position: 'relative' }}>
                                             <button
                                                  type="button"
                                                  onClick={() => navigate(item.to)}
                                                  className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium outline-none active:bg-blue-700 text-[15px]"
                                             />
                                             {item.count !== 0 && (
                                                  <button
                                                       type="button"
                                                       style={{ position: 'absolute', top: '10px', left: '20px' }}
                                                       className="w-4 h-4 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600"
                                                  >
                                                       {item.count}
                                                  </button>
                                             )}
                                        </li>
                                   ))}
                                   <hr className="my-3 mr-1 border-gray-400" />
                              </ul>
                         </div>

                    </nav>
               </div>
          </>
     )
}
