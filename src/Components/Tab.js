import React, { useState } from 'react';
import TabContent1 from './TabContent1';
// import { Link } from 'react-router-dom'
// import '../Assets/css/sidebar.css'

const Tab = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="flex border-b border-[#655b4a] gap-1">
                <button
                    className={`w-1/4 py-1 text-center  text-[#655b4a] font-semibold  rounded-tl-xl rounded-tr-xl focus:outline-none border border-[#655b4a] ${activeTab === 'tab1' ? 'bg-[#ebe6e0] border-b-[#ebe6e0]' : ' bg-gray-100'}`}
                    onClick={() => handleTabClick('tab1')}
                >
                    業務
                </button>
                <button
                    className={`w-1/4 py-1 text-center  text-[#655b4a] font-semibold  rounded-tl-xl rounded-tr-xl focus:outline-none  border border-[#655b4a] ${activeTab === 'tab2' ? 'bg-[#ebe6e0] border-b-[#ebe6e0]' : ' bg-gray-100'}`}
                    onClick={() => handleTabClick('tab2')}
                >
                    新着
                </button>
                <button
                    className={`w-1/4 py-1 text-center font-semibold  text-[#655b4a]  rounded-tl-xl rounded-tr-xl focus:outline-none  border border-[#655b4a] ${activeTab === 'tab3' ? 'bg-[#ebe6e0] border-b-[#ebe6e0]' : ' bg-gray-100'}`}
                    onClick={() => handleTabClick('tab3')}
                >
                    チャット
                </button>
            </div>
            <div id="tab1" className={`tabcontent ${activeTab === 'tab1' ? '' : 'hidden'}`}>
                <TabContent1 />
            </div>
            <div id="tab2" className={`tabcontent ${activeTab === 'tab2' ? '' : 'hidden'}`}>
                <h2 className="text-lg font-bold text-gray-800">Tab 2 Content</h2>
                <p className="mt-2 text-gray-700">Duis lobortis velit tellus, eget luctus tellus facilisis eget. Maecenas non massa
                    varius, molestie lorem eget, molestie nisi. Suspendisse potenti.</p>
            </div>
            <div id="tab3" className={`tabcontent ${activeTab === 'tab3' ? '' : 'hidden'}`}>
                <h2 className="text-lg font-bold text-gray-800">Tab 3 Content</h2>
                <p className="mt-2 text-gray-700">Duis lobortis velit tellus, eget luctus tellus facilisis eget. Maecenas non massa
                    varius, molestie lorem eget, molestie nisi. Suspendisse potenti.</p>
            </div>
        </div>
    );
};

export default Tab;
