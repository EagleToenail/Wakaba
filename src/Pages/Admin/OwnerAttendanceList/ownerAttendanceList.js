import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/PickData';


const OwnerAttendanceList = () => {
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
                            <td style={Td} >小泉純一郎</td>
                            <td style={Td}>スタッフ02</td>
                            <td style={Td}></td>
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
                        <tr>
                            <td style={Td}>2024/12/01</td>
                            <td style={Td}>月</td>
                            <td style={Td}>07:05</td>
                            <td style={Td}>22:55</td>
                            <td style={Td}>15.8</td>
                            <td style={Td}>12:00</td>
                            <td style={Td}>15:10</td>
                            <td style={Td}>3.2</td>
                            <td style={Td}></td>
                        </tr>
                        <tr>
                            <td style={Td}>2024/12/02</td>
                            <td style={Td}>火</td>
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