import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css'


const CommemorativeCoinHistoryList = () => {
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
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '90em' }}>
                    <div className='flex justify-around mt-10 '>
                        <div className='flex '  style={{ visibility: 'hidden' }}>
                            <button type="button"
                                className="mr-10  py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">Purple</button>
                        </div>
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">Commemorative coin/banknote exchange history list</h2>
                        <div className='flex justify-around'>
                            <button type="button"
                                className="py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">Purple</button>
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex mt-5 justify-center' >
                        <div className='border border-[#70685a] text-[#70685a] px-2 mr-2'>this year</div>
                        <div className='border border-[#70685a] text-[#70685a] px-2 mr-2'>this monthy</div>
                        <div className='border border-[#70685a] text-[#70685a] px-2 mr-2'>last monthy</div>
                        <div className='border border-[#70685a] text-[#70685a] px-2 mr-2'>today</div>
                    </div>
                    {/*  */}
                    <div className='flex mt-3 justify-center'>
                        <div className='mr-5'>
                            <div className="relative font-[sans-serif] w-full mx-auto">
                                <button type="button" id="dropdownToggle1"
                                    className="dropdown-menu w-full px-5 py-1 border border-[#70685a] text-[#70685a] text-sm bg-white hover:bg-gray-50">
                                    Men
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                                        <path fillRule="evenodd"
                                            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                            clipRule="evenodd" data-original="#000000" />
                                    </svg>
                                </button>
                                <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
                                    <li className='py-3 px-5 hover:bg-gray-50 text-[#70685a] text-sm cursor-pointer'>Man</li>
                                    <li className='py-3 px-5 hover:bg-gray-50 text-[#70685a] text-sm cursor-pointer'>Woman</li>
                                    <li className='py-3 px-5 hover:bg-gray-50 text-[#70685a] text-sm cursor-pointer'>other</li>
                                </ul>
                            </div>
                        </div>
                        <div className='mr-5'>
                            <div className="relative font-[sans-serif] w-full mx-auto">
                                <button type="button" id="dropdownToggle2"
                                    className="dropdown-menu w-full px-5 py-1 border border-[#70685a] text-[#70685a] text-sm bg-white hover:bg-gray-50">
                                    Men
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 inline ml-3" viewBox="0 0 24 24">
                                        <path fillRule="evenodd"
                                            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                                            clipRule="evenodd" data-original="#000000" />
                                    </svg>
                                </button>
                                <ul id="dropdownMenu" className='absolute hidden shadow-[0_8px_19px_-7px_rgba(6,81,237,0.2)] bg-white py-2 z-[1000] min-w-full w-max divide-y max-h-96 overflow-auto'>
                                    <li className='py-3 px-5 hover:bg-gray-50 text-[#70685a] text-sm cursor-pointer'>Man</li>
                                    <li className='py-3 px-5 hover:bg-gray-50 text-[#70685a] text-sm cursor-pointer'>Woman</li>
                                    <li className='py-3 px-5 hover:bg-gray-50 text-[#70685a] text-sm cursor-pointer'>other</li>
                                </ul>
                            </div>
                        </div>
                        <div className='border border-[#70685a] text-[#70685a] px-2 mr-2'>
                            <input type="date" />
                        </div>
                        <div className=' text-[#70685a] px-2 mr-2'>
                            <label className="text-[#70685a] font-bold mb-2 block text-center !mb-0">~</label>
                        </div>
                        <div className='border border-[#70685a] text-[#70685a] px-2 mr-2'>
                            <input type="date" />
                        </div>
                        <div className=' text-[#70685a] px-2 mr-5'>
                            <label className="text-[#70685a] font-bold mb-2 block text-center !mb-0">filter</label>
                        </div>
                        <div className=' text-[#70685a] px-2 mr-2'>
                            < button type="button" className="w-20 px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                                search
                            </button>
                        </div>
                        <div className=' text-[#70685a] px-2 mr-5'>
                            <label className="text-[#70685a] mb-2 block text-center !mb-0">and search</label>
                        </div>
                    </div>
                    {/*  Tabe*/}
                    <div className='pl-20 pr-20 pb-20 flex justify-center mt-10' >
                        <div style={{ width: '80%' }}>
                            <table className=' text-center w-full' style={Table}>
                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th>Last Name</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th width='20%'>Points</th>
                                        <th>Points</th>
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
                                        <td style={Td}>2024.12.31</td>
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
        </>
    );
};

export default CommemorativeCoinHistoryList;