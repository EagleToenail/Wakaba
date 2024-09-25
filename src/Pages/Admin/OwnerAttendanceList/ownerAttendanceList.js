import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../../Components/Common/Titlebar';
import axios from 'axios';
import DateAndTime from '../../../Components/Common/PickData';

const OwnerAttendanceList = () => {
    // const title = 'タイトルタイトル';

    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center',
        whiteSpace: 'nowrap'
    };

    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
        whiteSpace: 'nowrap'
    };

    //----------
    const [workingTimes, setWorkingTimes] = useState([]);
    const [nameAndStore,setNameAndStore] = useState([]);

    const getUserNameAndStroeName = (workingTimes) => {
        const workingEntries = workingTimes[0].entries;
        const userNames = workingEntries.map(entry => entry.user);
        console.log('userNames',userNames);
        const splitUserEntries = userNames.map(entry => {
            const [fullName, storeName] = entry.split('-').map(part => part.trim());
            return { fullName, storeName };
        });
        console.log('splitUserEntries',splitUserEntries);
        setNameAndStore(splitUserEntries);
    }

    useEffect(() => {
        const fetchWorkingTimes = async () => {
            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }
               await axios.get(`${wakabaBaseUrl}/workingtime`)
                    .then(response => {
                        console.log("workingtime", response.data);
                        setWorkingTimes(response.data);
                        getUserNameAndStroeName(response.data);
                    })
                    .catch(error => {
                        console.error("There was an error posting working time!", error);
                    });
            } catch (error) {
                console.error('Error fetching working times:', error);
            }
        };

        fetchWorkingTimes();
    }, []);

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />


            <div className='flex justify-center mt-5' >
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">出退勤一覧(月次) = 夕イムカード全員分</h2>
            </div>
            {/*  Table*/}
            <div className='mt-10 pl-10 pr-10 w-full'>
                {/* first table */}
                {/* <th width='15%'>出勤   退勤  h</th>
                    <th width='15%'>出勤   退勤  h</th> */}
                <div className='w-full flex'>
                    {/* <div style={{ width: '15%', overflow: 'auto' }} >
                        <table>
                            <thead>
                                <tr>
                                    <th width='80%'></th>
                                    <th width='20%'>店舗</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td>休日</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>氏名</td>
                                </tr>
                                {workingTimes.map(day => (
                                    <tr key={day.date}>
                                        <td style={Td}>{day.date}</td>
                                        <td style={Td}></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> */}
                    <div style={{ width: '100%', overflow: 'auto' }} >
                    <table style={Table}>
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        {nameAndStore.map((data,Index)=>(
                            <React.Fragment key={Index}>
                                <td >出勤</td>
                                <td >退勤</td>
                                <td >h</td>
                            </React.Fragment>
                        ))}
                    </tr>
                    <tr>
                        <td></td>
                        <td>店舗</td>
                        {nameAndStore.map((data,Index)=>(
                            <td key={Index} style={Td} colSpan={3}>{data.storeName}</td>
                        ))}
                    </tr>
                    <tr>
                        <td></td>
                        <td>休日</td>
                        {nameAndStore.map((data,Index)=>(
                            <td key={Index} style={Td} colSpan={3}>土</td>
                        ))}
                    </tr>
                    <tr>
                        <td></td>
                        <td>氏名</td>
                        {nameAndStore.map((data,Index)=>(
                            <td key={Index} style={Td} colSpan={3}>{data.fullName}</td>
                        ))}
                    </tr>
                    {workingTimes.map(day => (
                        <tr key={day.date}>
                            <td style={Td}>{day.date}</td>
                            <td style={Td}>{day.dayOfWeek}</td>
                            {day.entries.map((entry, index) => (
                                <React.Fragment key={index}>
                                    {/* <td>{entry.user}</td> */}
                                    <td style={Td}>{entry.loginTime}</td>
                                    <td style={Td}>{entry.logoutTime}</td>
                                    <td style={Td}>{entry.workingTime}</td>
                                </React.Fragment>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
                    </div>

                </div>

            </div>
            {/* table */}
            <div style={{ width: '100%', overflow: 'auto' }} >
                <table className='text-center w-full' style={Table}>
                    <thead>
                        <tr>
                            <th width='15%'></th>
                            <th width='5%'></th>
                            <th width='5%'></th>
                            <th width='5%'></th>
                            <th width='5%'></th>
                            <th width='5%'></th>
                            <th width='5%'></th>
                            <th width='5%'></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={Td}>交通費往復</td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                        </tr>
                        <tr>
                            <td style={Td}>給与額面合計</td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                        </tr>
                        <tr>
                            <td style={Td}>立替金合計</td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default OwnerAttendanceList;