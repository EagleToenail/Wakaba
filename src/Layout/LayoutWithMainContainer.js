import React, { useEffect, useState} from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Toolbar from '../Components/Toolbar';
import Sidebar from '../Components/Sidebar';
import MainContainer from '../Components/MainContainer';
import {Outlet, useLocation } from 'react-router-dom';
import '../Assets/css/LayoutWithMainContainer.css';


const LayoutWithMainContainer = () => {
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


    // Get the full URL
    const pathname = location.pathname; // Just the path
    const parts = pathname.split('/'); // Split the path by "/"
    const destinationURL = parts[1]; // This will give you "invoiceforpurchaseofbrought"

  return (
    <div >
         {showHeaderAndSidebar && <Header />} 
         {showHeaderAndSidebar && <Navbar sendURL = {destinationURL}/>} 
         {showHeaderAndSidebar && <Toolbar />}
         <div className='layout-container'>
            {showHeaderAndSidebar &&<div className='layout-sidebar' style={{width:`${sidebarWidth}px`}}><Sidebar initialState={true}/></div>} 
            <div className='layout-maincontainer'>
                <MainContainer destinationURL={destinationURL}>
                    <Outlet/>
                </MainContainer>
            </div>    
          </div> 
    </div>
  );
};

export default LayoutWithMainContainer;
