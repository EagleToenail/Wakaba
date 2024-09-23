import React, { useState, useEffect} from 'react';
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

    const [workingTime ,setWorkingTime] = useState([]);
    useEffect( () => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        // console.log(`${wakabaBaseUrl}/sales/getSalesList`);
         axios.get(`${wakabaBaseUrl}/workingtime`)
            .then(response => {
                // console.log(response.data)
                setWorkingTime(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
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
                <div style={{width:'100%',overflow:'auto'}} >
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
                            {(workingTime && workingTime.length !== 0) && workingTime.map((user,Index) => (
                                <td key={Index} style={Td}>{user.store_name}</td>
                            ))}
                        </tr>
                        <tr>
                            <td ></td>
                            <td >休日</td>
                            {(workingTime && workingTime.length !== 0) && workingTime.map((user,Index) => (
                                <td key={Index} style={Td}>土日</td>
                            ))}
                        </tr>
                        <tr>
                            <td ></td>
                            <td >氏名</td>
                            {/* <td style={Td} >小泉純一郎</td>
                            <td style={Td}>スタッフ02</td> */}
                            {(workingTime && workingTime.length !== 0) && workingTime.map((user,Index) => (
                                <td key={Index} style={Td}>{user.full_name}</td>
                            ))}
                        </tr>
                    </tbody>

                    </table>
                </div>
                {/* second table */}
                <div style={{ width: '100%',overflow:'auto'}} >
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
                        { (workingTime && workingTime.length !== 0) && workingTime[0].days.map((day, index) => (
                            <tr key={index}>
                                <td style={Td}>{day.day}</td>
                                <td style={Td}>月</td>
                                <td style={Td}>{day.loginTime}</td>
                                <td style={Td}>{day.logoutTime}</td>
                                <td style={Td}>{day.workingTime}</td>
                            </tr>
                        ))}
                    </tbody>

                    </table>
                </div>
                {/* third table */}
                <div style={{ width: '100%',overflow:'auto'}} >
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


            </div>
        </>
    );
};

export default OwnerAttendanceList;