import React, {   } from 'react';
import Header from '../../Components/Header';
import Navbar from '../../Components/Navbar';
import Toolbar from '../../Components/Toolbar';
import Sidebar from '../../Components/Sidebar';
import MainContainer from '../../Components/MainContainer';

const MainHome = () => {   

    return (
        <>
            <Header/>
            <Navbar/>
            <Toolbar/>
            <div className='h-full'>
                <Sidebar/>
                <MainContainer/>
            </div>

        </>
    );
};

export default MainHome;