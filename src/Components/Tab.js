import React, { useState } from 'react';
import TabContent1 from './TabContent1';
import TabContent2 from './TabContent2';
import TabContent3 from '../Pages/Chat/containers/chat/foreground';
import { Link } from 'react-router-dom'
// import '../Assets/css/sidebar.css'

const Tab = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="flex  gap-1 mr-3">
                <button
                    className={`w-1/3  text-center  text-[#655b4a] text-[15px] font-bold  rounded-tl-xl rounded-tr-xl focus:outline-none border border-[#655b4a] ${activeTab === 'tab1' ? 'bg-[#ebe6e0] border-b-[#ebe6e0]' : ' bg-gray-100'}`}
                    onClick={() => handleTabClick('tab1')}
                >
                    業務
                </button>
                <button
                    className={`w-1/3 text-center  text-[#655b4a] text-[15px] font-bold  rounded-tl-xl rounded-tr-xl focus:outline-none  border border-[#655b4a] ${activeTab === 'tab2' ? 'bg-[#ebe6e0] border-b-[#ebe6e0]' : ' bg-gray-100'}`}
                    onClick={() => handleTabClick('tab2')}
                >
                    新着
                </button>
                <button
                    className={`w-1/3 text-center font-bold  text-[#655b4a] text-[15px]  rounded-tl-xl rounded-tr-xl focus:outline-none  border border-[#655b4a] ${activeTab === 'tab3' ? 'bg-[#ebe6e0] border-b-[#ebe6e0]' : ' bg-gray-100'}`}
                    onClick={() => handleTabClick('tab3')}
                >
                   <Link to="/chat">チャット</Link> 
                </button>
            </div>
            <div id="tab1" className={`tabcontent ${activeTab === 'tab1' ? '' : 'hidden'}`}>
                <TabContent1 />
            </div>
            <div id="tab2" className={`tabcontent ${activeTab === 'tab2' ? '' : 'hidden'}`}>
                <TabContent2 />
            </div>
            <div id="tab3" className={`tabcontent ${activeTab === 'tab3' ? '' : 'hidden'}`} style={{height:'100vh',overflow:'auto'}}>
                <TabContent3 />
            </div>
        </div>
    );
};

export default Tab;
