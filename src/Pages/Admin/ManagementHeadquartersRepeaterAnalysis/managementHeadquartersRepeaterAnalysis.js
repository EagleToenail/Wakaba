import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
// import ButtonComponent from '../../../Components/Common/ButtonComponent';
// import dateimage from '../../../Assets/img/datepicker.png';
import DateAndTime from '../../../Components/Common/PickData';


const ManagementHeadquartersRepeaterAnalysis = () => {
    const title = 'タイトルタイトル';

    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    // const Th = {
    //     border: '1px solid #70685a',
    //     borderCollapse: 'collapse',
    //     color: '#70685a',
    //     fontSize: '15px'
    // };
    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
    };


    return (
        <>
            <Titlebar title={title} />
            <DateAndTime />
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '80em' }}>
                    <div className='flex justify-around mt-5' >
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">本部管理画面  リピー夕一分析</h2>
                    </div>
                    <div className='flex'>
                        {/*  Table*/}
                        <div className='mt-10 pl-10 pr-10 pb-20 flex' style={{width:'30%'}}>
                            <div style={{ width: '100%', overflow: 'auto' }}>
                                <table className='text-center w-full' style={Table}>
                                    <thead>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td width='10%' className='bg-[#434343] !text-[white]' style={Td}>対象店舗</td>
                                            <td colSpan={2} width='20%' style={Td}>%</td>
                                            <td width='40%' ></td>
                                            <td width='30%' ></td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                        {/* {} */}
                        <div style={{width:'70%'}}></div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ManagementHeadquartersRepeaterAnalysis;