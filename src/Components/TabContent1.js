import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';


export default function TabContent1() {

    const userStoreName = localStorage.getItem('storename');

    useEffect(() => {
 
        fetchGeneralChatAlerts();
        fetchStoreChatAlerts();
        fetchTodoAlerts();
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

//------------------general chat----------------
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
        await axios.post(`${wakabaBaseUrl}/generalchat/alerts`,{userId:userId})
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
        await axios.post(`${wakabaBaseUrl}/storechat/alerts`,{userId:userId,storeName:userStoreName})
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

    //---------------------------------------todolist alert
    const [unReadTodoCount, setUnReadTodoCount] = useState(0);
        //fetch message data related user
        const fetchTodoAlerts = async () => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
              throw new Error('API base URL is not defined');
            }
      
            const userId = localStorage.getItem('userId');
            const userStoreName = localStorage.getItem('storename');
            await axios.post(`${wakabaBaseUrl}/todochat/alerts`,{userId:userId})
            .then(response => {
                const unreadCount = response.data;
                setUnReadTodoCount(unreadCount.unreadCount);
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
            <nav className=" top-25 left-0 w-[290px] py-1 font-[sans-serif] overflow-auto">
                <ul>
                    <li className='flex px-3 py-2'>
                        <div 
                            className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></div>&nbsp;
                        <div style={{visibility:unReadTodoCount === 0 ? 'hidden' : ''}}
                            className="w-6 h-6 inline-flex items-center font-bold justify-center text-[12px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                            {unReadTodoCount}
                        </div>
                        <Link
                            className="text-[black] font-bold text-[15px] block rounded px-1" to='/todolist'>
                             TODO
                        </Link>
                    </li>
                </ul>

                <div className="mt-2">
                    <h6 className="text-white font-bold bg-[#655b4a] px-4 py-1 text-[15px]">全体</h6>
                    <ul className="mt-2 px-3">
                        <li className='flex py-1'>
                            <div type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></div>
                            <div style={{visibility:generalCounts.allgeneral === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {generalCounts.allgeneral}
                            </div>
                            <Link to="/generalchat/allgeneral"
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                一般
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                              <div  style={{visibility:generalCounts.allforall === 0 ? 'hidden' : ''}}
                                    className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                    {generalCounts.allforall}
                                </div>
                            <Link to='/generalchat/allforall'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                全体周知
                            </Link>
                        </li>
                        <hr className="my-3  mr-1 border-gray-400" />
                        <li className='flex py-1'>
                            <button type="button"
                                className=" w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div  style={{visibility:generalCounts.wakabapassword === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {generalCounts.wakabapassword}
                            </div>
                            <Link  to='/generalchat/wakabapassword'
                                className="text-black font-semibold  text-[15px] block rounded px-1 transition-all">
                                WAKABA パスワード
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div style={{visibility:generalCounts.yahooauction === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {generalCounts.yahooauction}
                            </div>
                            <Link  to='/generalchat/yahooauction'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                ヤフオク
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div style={{visibility:generalCounts.executemeeting === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {generalCounts.executemeeting}
                            </div>
                            <Link to='/generalchat/executemeeting'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                幹部会議連絡
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div  style={{visibility:generalCounts.standardout === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {generalCounts.standardout}
                            </div>
                            <Link to='/generalchat/standardout'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                基準外
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div style={{visibility:generalCounts.basereport === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {generalCounts.basereport}
                            </div>
                            <Link  to='/generalchat/basereport'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                基者卸報告
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div style={{visibility:generalCounts.training === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {generalCounts.training}
                            </div>
                            <Link  to='/generalchat/training'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                研修
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div style={{visibility:generalCounts.storecommunication === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[#fff] hover:bg-purple-700 active:bg-purple-600">
                                {generalCounts.storecommunication}
                            </div>
                            <Link to='/generalchat/storecommunication'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                店舗間連絡
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div style={{visibility:generalCounts.monthlycampaign === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {generalCounts.monthlycampaign}
                            </div>
                            <Link  to='/generalchat/monthlycampaign'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                月毎のキャンペーン
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                             <div style={{visibility:generalCounts.purchaseperformanceblog === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {generalCounts.purchaseperformanceblog}
                            </div>
                            <Link  to='/generalchat/purchaseperformanceblog'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                買取実績ブ口グ
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h6 className="text-white font-bold bg-[#655b4a] px-4 py-1 text-[15px]">生駒 {userStoreName}</h6>
                    <ul className="mt-2 px-3">
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div  style={{visibility:storeCounts.allgeneral === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {storeCounts.allgeneral}
                            </div>
                            <Link to="/storechat/allgeneral"
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                一般
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div style={{visibility:storeCounts.businesscommunication === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {storeCounts.businesscommunication}
                            </div>
                            <Link to="/storechat/businesscommunication"
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                業務連絡
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div  
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </div>
                            <Link to='/endofworkreporttoowner'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                一日の報告
                            </Link>
                        </li>
                        <hr className="my-3  mr-1 border-gray-400" />
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div  style={{visibility:storeCounts.approval === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {storeCounts.approval}
                            </div>
                            <Link to="/storechat/approval"
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                決裁
                            </Link>
                        </li>                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div style={{visibility:storeCounts.orderrequest === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {storeCounts.orderrequest}
                            </div>
                            <Link to='/storechat/wholesalerreport'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                業者卸報告
                            </Link>
                        </li>                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div style={{visibility:unReadWithdrawBankATMCount === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {unReadWithdrawBankATMCount}
                            </div>
                            <Link to='/withdrawbankatm'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                入出金
                            </Link>
                        </li>                        
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div style={{visibility:storeCounts.standardout === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {storeCounts.standardout}
                            </div>
                            <Link to='/storechat/orderrequest'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                発注依頼
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div style={{visibility:unReadWithdrawVariousCount === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {unReadWithdrawVariousCount}
                            </div>
                            <Link to='/withdrawvariouspurchaseapproval'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                               購入依頼と送料支払報告
                            </Link>
                        </li>     
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div style={{visibility:unReadOnSitePurchaseCount === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {unReadOnSitePurchaseCount}
                            </div>
                            <Link to='/onsitepurchase'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                出張買取
                            </Link>
                        </li>     
                        <li className='flex py-1'>
                            <button type="button"
                                className=" w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div style={{visibility:storeCounts.vendorvisit === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {storeCounts.vendorvisit}
                            </div>
                            <Link to='/storechat/vendorvisit'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                業者来訪
                            </Link>
                        </li> 
                        <hr className="my-3  mr-1 border-gray-400" /> 
                        <li className='flex py-1'>
                            <button type="button"
                                className=" w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div style={{visibility:storeCounts.shift === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {storeCounts.shift}
                            </div>
                            <Link to='/storechat/shift'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                シフト
                            </Link>
                        </li> 
                        <li className='flex py-1'>
                            <button type="button"
                                className=" w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div style={{visibility:storeCounts.businessreporthandover === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {storeCounts.businessreporthandover}
                            </div>
                            <Link to='/storechat/businessreporthandover'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                業務倩報/引継ぎ
                            </Link>
                        </li> 
                        <li className='flex py-1'>
                            <button type="button"
                                className=" w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div style={{visibility:storeCounts.yetanothertashifmeeting === 0 ? 'hidden' : ''}}
                                className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                {storeCounts.yetanothertashifmeeting}
                            </div>
                            <Link to='/storechat/yetanothertashifmeeting'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                又タシフ会搓
                            </Link>
                        </li>    
                    </ul>
                </div>


            </nav>
        </>
    )
}
