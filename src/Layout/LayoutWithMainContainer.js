import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Toolbar from '../Components/Toolbar';
import Sidebar from '../Components/Sidebar';
import MainContainer from '../Components/MainContainer';
import {Outlet, useLocation } from 'react-router-dom';
// import '../Assets/css/LayoutWithMainContainer.css';

const LayoutWithMainContainer = () => {
  const location = useLocation();
  
//   // Define routes that should not include Header and Sidebar
  const noHeaderSidebarRoutes = ['']; // Add other routes as needed
  
  const showHeaderAndSidebar = !noHeaderSidebarRoutes.includes(location.pathname);

  return (
    <>
         {showHeaderAndSidebar && <Header />} 
         {showHeaderAndSidebar && <Navbar />} 
         {showHeaderAndSidebar && <Toolbar />}
         <div >
            {showHeaderAndSidebar && <Sidebar />} 
                <MainContainer>
                    <Outlet/>
                </MainContainer>
          </div> 
    </>
  );
};

export default LayoutWithMainContainer;
