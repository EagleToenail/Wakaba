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
        alignItem: 'center'
    };

    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
    };

    //----------
    const [users, setUsers] = useState([]);
    // Fetch user data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        // Fetch the user list
        axios.get(`${wakabaBaseUrl}/user/getUserList`)
            .then(response => {
                const data = response.data;
                setUsers(data);

                // Use map to send POST requests for each user
                const postRequests = data.map(user => {
                    return axios.post(`${wakabaBaseUrl}/workingtime`, { id: user.id })
                        .then(response => {
                            console.log("workingtime", response.data);
                            return response.data; // Return the response data for further use
                        })
                        .catch(error => {
                            console.error("There was an error posting working time!", error);
                        });
                });

                // Wait for all POST requests to finish
                Promise.all(postRequests)
                    .then(workingTimeData => {
                        console.log('workingTimeData', workingTimeData[0].days)
                        console.log(workingTimeData.length);
                        setLength(workingTimeData.length);
                        setWorkingTime(workingTimeData);
                        setDays(workingTimeData[0].days);
                    });
            })
            .catch(error => {
                console.error("There was an error fetching the user data!", error);
            });
    }, []);

    const [workingTime, setWorkingTime] = useState([]);
    const [day, setDays]=useState([]);
    const [length, setLength]=useState(0);
    // useEffect( () => {
    //     getDays();
    //     const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
    //     if (!wakabaBaseUrl) {
    //         throw new Error('API base URL is not defined');
    //     }

    //     // console.log(`${wakabaBaseUrl}/sales/getSalesList`);
    //      axios.get(`${wakabaBaseUrl}/workingtime`)
    //         .then(response => {
    //             console.log("workingtime",response.data)
    //             setWorkingTime(response.data);
    //         })
    //         .catch(error => {
    //             console.error("There was an error fetching the customer data!", error);
    //         });
    // }, []);
    

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
                <div style={{ width: '15%', overflow: 'auto' }} >
                    <table className='text-center w-full' style={Table}>
                        <thead>
                            <tr>
                                <th width='70%'></th>
                                <th width='30%'>店舗</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td ></td>
                                <td >休日</td>
                            </tr>
                            <tr>
                                <td ></td>
                                <td >氏名</td>
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
                                { 
                                    
                                }
                            {/* {(workingTime && workingTime.length !== 0) && workingTime.map((data, index) => ( */}
                                {/* <React.Fragment key={index}> */}
                                    
                                    {/* {data.days.map((day, dayIndex) => (
                                        <tr key={dayIndex}>
                                            <td style={Td}>
                                                {day.day !== '-' ? day.day : '-'}
                                            </td>
                                            <td style={Td}>
                                                {day.dayofweek !== '-' ? day.dayofweek : '-'}
                                            </td>
                                            <td style={Td}>
                                                {day.loginTime !== '-' ? day.loginTime : '-'}
                                            </td>
                                            <td style={Td}>
                                                {day.logoutTime !== '-' ? day.logoutTime : '-'}
                                            </td>
                                        </tr>
                                    ))} */}
                                {/* </React.Fragment> */}
                            {/* ))} */}
                        </tbody>

                    </table>
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