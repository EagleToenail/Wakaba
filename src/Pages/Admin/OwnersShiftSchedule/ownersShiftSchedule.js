import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/PickData';


const OwnersShiftSchedule = () => {
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


            <div className='flex justify-center mt-5' >
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">シフト表(予定)</h2>
            </div>
            {/*  */}
            <div className='flex mt-3 justify-center mt-5'>
                <div className='flex'>
                    <div className=' text-[#70685a] px-2'>
                        <label className="text-[#70685a] text-2xl mb-2 block text-center !mb-0">このシフトで</label>
                    </div>
                    <div className=' text-[#70685a] px-2 mr-5'>
                        < button type="button" className="w-max px-10 py-1 text-[white] text-[20px] font-bold tracking-wide bg-[#a3a1c8] rounded-md justify-center  hover:bg-blue-700 focus:outline-none">
                        周知
                        </button>
                    </div>
                </div>
            </div>
            {/*  Table*/}
            <div className='mt-10 pl-10 pr-10 w-full'>
                {/* first table */}
                <div style={{ width: '100%', overflow: 'auto' }} >
                    <table className='text-center w-full' style={Table}>
                        <thead>
                            <tr>
                                <th width='15%'></th>
                                <th width='5%'></th>
                                <th width='15%'>出勤   退勤  h</th>
                                <th width='15%'>出勤   退勤  h</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td ></td>
                                <td >店舗</td>
                                <td style={Td}>高崎店</td>
                                <td style={Td}>高崎店</td>
                                <td style={Td}></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td >休日</td>
                                <td style={Td}>土日</td>
                                <td style={Td}>火</td>
                                <td style={Td}></td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td >氏名</td>
                                <td style={Td} > 小泉純一郎</td>
                                <td style={Td}>スタッフ02</td>
                                <td style={Td}></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                {/* second table */}
                <div style={{ width: '100%', overflow: 'auto' }} >
                    <table className='text-center w-full' style={Table}>
                        <thead>
                            <tr>
                                <th width='15%'></th>
                                <th width='5%'></th>
                                <th width='15%'></th>
                                <th width='15%'></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={Td}>2024/12/01</td>
                                <td style={Td}>月</td>
                                <td style={Td}>07-19</td>
                                <td style={Td}>09-17</td>
                                <td style={Td}></td>
                            </tr>
                            <tr>
                                <td style={Td}>2024/12/02</td>
                                <td style={Td}>火</td>
                                <td style={Td}>07-19</td>
                                <td style={Td}>休日</td>
                                <td style={Td}></td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>
        </>
    );
};

export default OwnersShiftSchedule;