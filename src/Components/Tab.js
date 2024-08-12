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
        // <div>
        //     <div className="font-sans p-4">
        //         <ul className="flex w-max border-b overflow-hidden">
        //             <li id="homeTab"
        //                 className="tab text-[#655b4a] font-bold bg-[#ebe6e0] border border-[#655b4a] text-center text-sm py-1 px-4 rounded-tl-2xl rounded-tr-2xl cursor-pointer">
        //                 Home</li>
        //             <li id="settingTab"
        //                 className="tab text-[#655b4a] font-semibold bg-[#ffffff] border border-[#655b4a] text-center text-sm py-1 px-4 rounded-tl-2xl rounded-tr-2xl cursor-pointer">
        //                 Settings</li>
        //             <li id="profileTab"
        //                 className="tab text-[#655b4a] font-semibold bg-[#ffffff] border border-[#655b4a] text-center text-sm py-1 px-4 rounded-tl-2xl rounded-tr-2xl cursor-pointer">
        //                 Profile</li>
        //         </ul>

        //         <div id="homeContent" className="tab-content max-w-2xl block mt-8">
        //             <h4 className="text-lg font-bold text-gray-600">Home</h4>
        //             <p className="text-sm text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                 Sed auctor auctor arcu, at fermentum dui.
        //                 Maecenas vestibulum a turpis in lacinia.
        //                 Proin aliquam turpis at erat venenatis malesuada.
        //             </p>
        //         </div>
        //         <div id="settingContent" className="tab-content max-w-2xl hidden mt-8">
        //             <h4 className="text-lg font-bold text-gray-600">Setting</h4>
        //             <p className="text-sm text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                 Sed auctor auctor arcu, at fermentum dui.
        //                 Maecenas vestibulum a turpis in lacinia.
        //                 Proin aliquam turpis at erat venenatis malesuada.
        //                 Sed semper, justo vitae consequat fermentum, felis diam posuere ante, sed fermentum quam justo in dui.
        //             </p>
        //         </div>
        //         <div id="profileContent" className="tab-content max-w-2xl hidden mt-8">
        //             <h4 className="text-lg font-bold text-gray-600">Profile</h4>
        //             <p className="text-sm text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //                 Sed auctor auctor arcu, at fermentum dui.
        //                 Maecenas vestibulum a turpis in lacinia.
        //             </p>
        //         </div>
        //     </div>
        // </div>
//==============
// <div className="w-full max-w-md mx-auto">
//     <div className="flex border-b border-gray-300">
//         <button
//             className="w-1/2 py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-tl-lg focus:outline-none active:bg-gray-200"
//             onclick="openTab(event, 'tab1')">Tab 1</button>
//         <button className="w-1/2 py-4 text-center font-medium text-gray-700 bg-gray-100 rounded-tr-lg focus:outline-none"
//             onclick="openTab(event, 'tab2')">Tab 2</button>
//     </div>
//     <div id="tab1" className="tabcontent p-4">
//         <h2 className="text-lg font-bold text-gray-800">Tab 1 Content</h2>
//         <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel enim euismod,
//             imperdiet felis vel, ultrices risus. Sed nec quam id elit fringilla blandit a a risus.</p>
//     </div>
//     <div id="tab2" className="tabcontent p-4 hidden">
//         <h2 className="text-lg font-bold text-gray-800">Tab 2 Content</h2>
//         <p className="mt-2 text-gray-700">Duis lobortis velit tellus, eget luctus tellus facilisis eget. Maecenas non massa
//             varius, molestie lorem eget, molestie nisi. Suspendisse potenti.</p>
//     </div>
// </div>
//=========
<div className="w-full max-w-md mx-auto">
<div className="flex border-b border-[#655b4a] gap-1">
    <button
        className={`w-1/4 py-1 text-center  text-[#655b4a] font-semibold  rounded-tl-xl rounded-tr-xl focus:outline-none border border-[#655b4a] ${activeTab === 'tab1' ? 'bg-[#ebe6e0] border-b-[#ebe6e0]' : ' bg-gray-100'}`} 
        onClick={() => handleTabClick('tab1')}
    >
        Business
    </button>
    <button
        className={`w-1/4 py-1 text-center  text-[#655b4a] font-semibold  rounded-tl-xl rounded-tr-xl focus:outline-none  border border-[#655b4a] ${activeTab === 'tab2' ? 'bg-[#ebe6e0] border-b-[#ebe6e0]' : ' bg-gray-100'}`}
        onClick={() => handleTabClick('tab2')}
    >
        Tab 2
    </button>
    <button
        className={`w-1/4 py-1 text-center font-semibold  text-[#655b4a]  rounded-tl-xl rounded-tr-xl focus:outline-none  border border-[#655b4a] ${activeTab === 'tab3' ? 'bg-[#ebe6e0] border-b-[#ebe6e0]' : ' bg-gray-100'}`}
        onClick={() => handleTabClick('tab3')}
    >
        Chat
    </button>
</div>
<div id="tab1" className={`tabcontent ${activeTab === 'tab1' ? '' : 'hidden'}`}>
    <TabContent1/>
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
