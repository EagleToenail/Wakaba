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


    const [zoom, setZoom] = useState(1); // Initial scale set to 100%

    const handleZoomIn = () => {
      setZoom(prevZoom => Math.min(prevZoom + 0.1, 2)); // Max zoom level of 2
      // setScale((prevScale) => Math.min(prevScale + 10, 300)); // Max scale of 300%
    };
  
    const handleZoomOut = () => {
      setZoom(prevZoom => Math.max(prevZoom - 0.1, 0.5)); // Min zoom level of 0.5
      // setScale((prevScale) => Math.max(prevScale - 10, 100)); // Min scale of 100%
    };

  return (
    <div style={{ transform: `scale(${zoom})`,transition: 'transform 0.3s ease', transformOrigin: 'top left',}}>
    {/* // <div style={{ transform: `scale(${scale / 100})`, transformOrigin: '0 0', transition: 'transform 0.2s' }}> */}
         {showHeaderAndSidebar && <Header zoomout={handleZoomOut} zoomin={handleZoomIn}/>} 
         {showHeaderAndSidebar && <Navbar />} 
         {showHeaderAndSidebar && <Toolbar />}
         <div className='layout-container'>
            {showHeaderAndSidebar &&<div className='layout-sidebar' style={{width:`${sidebarWidth}px`}}><Sidebar /></div>} 
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
