import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function TabContent1() {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
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
        await axios.post(`${wakabaBaseUrl}/todochat/alerts`, { userId: userId })
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
        const userStoreName = localStorage.getItem('storename');
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
        const userStoreName = localStorage.getItem('storename');
        await axios.post(`${wakabaBaseUrl}/onsitepurchasemessages/alerts`, { userId: userId })
            .then(response => {
                const unreadCount = response.data;
                setUnOnSitePurchaseCount(unreadCount.unreadCount);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            <nav className=" top-25 left-0 w-[290px] py-1 font-[sans-serif] overflow-auto">
                <ul>
                    <li className='flex px-3 py-2'>
                        <div
                            className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></div>&nbsp;
                        <div style={{ visibility: unReadTodoCount === 0 ? 'hidden' : '' }}
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
                        {[
                            { path: '/generalchat/allgeneral', label: '一般', count: generalCounts.allgeneral },
                            { path: '/generalchat/allforall', label: '全体周知', count: generalCounts.allforall },
                            { path: '/generalchat/wakabapassword', label: 'WAKABA パスワード', count: generalCounts.wakabapassword },
                            { path: '/generalchat/yahooauction', label: 'ヤフオク', count: generalCounts.yahooauction },
                            { path: '/generalchat/executemeeting', label: '幹部会議連絡', count: generalCounts.executemeeting },
                            { path: '/generalchat/standardout', label: '基準外', count: generalCounts.standardout },
                            { path: '/generalchat/basereport', label: '基者卸報告', count: generalCounts.basereport },
                            { path: '/generalchat/training', label: '研修', count: generalCounts.training },
                            { path: '/generalchat/storecommunication', label: '店舗間連絡', count: generalCounts.storecommunication },
                            { path: '/generalchat/monthlycampaign', label: '月毎のキャンペーン', count: generalCounts.monthlycampaign },
                            { path: '/generalchat/purchaseperformanceblog', label: '買取実績ブ口グ', count: generalCounts.purchaseperformanceblog },
                        ].map(({ path, label, count }, index) => (
                            <li key={index} className='flex py-1'>
                                <button
                                    type="button"
                                    className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium outline-none text-[15px]"
                                />
                                <div
                                    style={{ visibility: count === 0 ? 'hidden' : 'visible' }}
                                    className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600"
                                >
                                    {count}
                                </div>
                                <button
                                    onClick={() => handleNavigation(path)}
                                    className="text-black font-bold text-[15px] block rounded px-1 transition-all"
                                >
                                    {label}
                                </button>
                            </li>
                        ))}
                        <hr className="my-3 mr-1 border-gray-400" />
                    </ul>
                </div>

                <div className="mt-4">
                    <h6 className="text-white font-bold bg-[#655b4a] px-4 py-1 text-[15px]">生駒 {userStoreName}</h6>
                    <ul className="mt-2 px-3">
                        {[
                            { path: "/storechat/allgeneral", label: "一般", count: storeCounts.allgeneral },
                            { path: "/storechat/businesscommunication", label: "業務連絡", count: storeCounts.businesscommunication },
                            { path: "/endofworkreporttoowner", label: "一日の報告", count: 99 }, // Static count for this item
                            { path: "/storechat/approval", label: "決裁", count: storeCounts.approval },
                            { path: "/storechat/wholesalerreport", label: "業者卸報告", count: storeCounts.orderrequest },
                            { path: "/withdrawbankatm", label: "入出金", count: unReadWithdrawBankATMCount },
                            { path: "/storechat/orderrequest", label: "発注依頼", count: storeCounts.standardout },
                            { path: "/withdrawvariouspurchaseapproval", label: "購入依頼と送料支払報告", count: unReadWithdrawVariousCount },
                            { path: "/onsitepurchase", label: "出張買取", count: unReadOnSitePurchaseCount },
                            { path: "/storechat/vendorvisit", label: "業者来訪", count: storeCounts.vendorvisit },
                            { path: "/storechat/shift", label: "シフト", count: storeCounts.shift },
                            { path: "/storechat/businessreporthandover", label: "業務倩報/引継ぎ", count: storeCounts.businessreporthandover },
                            { path: "/storechat/yetanothertashifmeeting", label: "又タシフ会搓", count: storeCounts.yetanothertashifmeeting },
                        ].map((item, index) => (
                            <li key={index} className='flex py-1'>
                                <button
                                    type="button"
                                    className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium outline-none text-[15px]"
                                />
                                <div
                                    style={{ visibility: item.count === 0 ? 'hidden' : 'visible' }}
                                    className="w-6 h-6 inline-flex items-center justify-center text-[12px] font-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600"
                                >
                                    {item.count}
                                </div>
                                <button
                                    onClick={() => handleNavigation(item.path)}
                                    className="text-black font-bold text-[15px] block rounded px-1 transition-all"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        <hr className="my-3 mr-1 border-gray-400" />
                    </ul>
                </div>


            </nav>
        </>
    )
}
