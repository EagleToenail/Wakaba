import React from 'react';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/PickData';


const OwnersPersonalPaySlipPDF = () => {
    // const title = 'タイトルタイトル';

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />

            {/* This page should have table. Refer Wire Frame:page45 M07
                the items written in pink have to be in table styled on this page. */}
            <div className='flex justify-center mt-5' >
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">個人用  給与明細書</h2>
            </div>

        </>
    );
};

export default OwnersPersonalPaySlipPDF;