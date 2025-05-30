import React, { useEffect, useState} from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Toolbar from '../Components/Toolbar';
import Sidebar from '../Components/Sidebar';
import {useLocation } from 'react-router-dom';
import '../Assets/css/LayoutWithMainContainer.css';
import MainChatPage from '../Pages/Chat/mainChatPage';

const LayoutContainer = () => {
  const location = useLocation();

  const noHeaderSidebarRoutes = ['']; // Add other routes as needed
  
  const showHeaderAndSidebar = !noHeaderSidebarRoutes.includes(location.pathname);


  const [sidebarWidth, setSidebarWidth] = useState(0);

  useEffect(() => {
    const sidebarElement = document.querySelector('.sidebar');

    if (sidebarElement) {
        const handleResize = () => {
            setSidebarWidth(sidebarElement.offsetWidth);
        };
        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(sidebarElement);

        // Initial measurement
        handleResize();

        // Cleanup function to disconnect observer
        return () => resizeObserver.disconnect();
    }

}, [showHeaderAndSidebar]);  // Re-run if sidebar visibility changes

  return (
    <>
         {showHeaderAndSidebar && <Header />} 
         {showHeaderAndSidebar && <Navbar />} 
         {showHeaderAndSidebar && <Toolbar />}
         <div className='layout-container'>
            {showHeaderAndSidebar &&<div className='layout-sidebar' style={{width:`${sidebarWidth}px`}}><Sidebar /></div>} 
            <div className='layout-maincontainer'>
                <MainChatPage/>
            </div>    
          </div> 
    </>
  );
};

export default LayoutContainer;
