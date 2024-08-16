import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';


const PreciousMetalsPrices = () => {
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
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
    };

    return (
        <>
            <Titlebar title={title} />
            <h2 className="text-[#70685a] text-center text-[15px] flex justify-end mt-3" style={{ paddingRight: '1%' }}>2023/12/01(金)&nbsp;&nbsp;21:51</h2>
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '90em' }}>
                <h2 className="text-[#70685a] text-center text-2xl  flex justify-center">Precious metals market price</h2>
                    {/*  Tabe*/}
                    <div className='pl-20 pr-20 pb-20 flex justify-center mt-10' >
                        <div>
                            <div>
                                <table className=' text-center w-full' style={Table}>
                                    <thead>
                                        <tr>
                                            <th rowSpan={2}>NO</th>
                                            <th colSpan={2}>Last Name</th>
                                            <th colSpan={2}>Points</th>
                                            <th colSpan={2}>Points</th>
                                            <th rowSpan={2}></th>
                                        </tr>
                                        <tr>
                                            <th>price</th>
                                            <th>price</th>
                                            <th>price</th>
                                            <th>price</th>
                                            <th>price</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={Td}>99999</td>
                                            <td style={Td}>Smith</td>
                                            <td style={Td}>50</td>
                                            <td style={Td}>50</td>
                                            <td style={Td}>2024.12.31</td>
                                            <td style={Td}>2024.12.31</td>
                                            <td style={Td}>2024.12.31</td>
                                            <td><div  className='ml-5 w-5'>
                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" fill="#70685a" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z"></path></svg>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table></div>
                            <div className='mt-5'>
                                <table className=' text-center w-full' style={Table}>
                                    <thead>
                                        <tr>
                                            <th>NO</th>
                                            <th>Last Name</th>
                                            <th>Points</th>
                                            <th>Points</th>
                                            <th>Points</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={Td}>99999</td>
                                            <td style={Td}>Smith</td>
                                            <td style={Td}>50</td>
                                            <td style={Td}>2024.12.31</td>
                                            <td><div  className='ml-5 w-5'>
                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" fill="#70685a" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z"></path></svg>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table></div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
};

export default PreciousMetalsPrices;