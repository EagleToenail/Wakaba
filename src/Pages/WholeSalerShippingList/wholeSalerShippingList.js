import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css';
import '../../Assets/css/firstTd.css';
import '../../Assets/css/lastTd.css';
import InputComponent from '../../Components/Common/InputComponent';
import LabelComponent from '../../Components/Common/LabelComponent';


const WholeSalerShippingList = () => {
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
        fontSize: '15px'
    };
  
    return (
        <>
            <Titlebar title={title} />
            <div className="bg-[trasparent] font-[sans-serif]">
                <div className='flex justify-center'>
                    <div className="w-full pt-3" style={{ maxWidth: '80em' }}>


                        <div className='flex justify-around mt-10' >
                            <h2 className="text-[#70685a] text-center text-2xl flex justify-center">Whole Saler Shipping List</h2>
                        </div>

                        {/*  */}
                        <div className='flex mt-3 justify-center  pr-40 pl-40'>
                            <div className=' px-2 mr-2 text-center font-bold'>
                                <LabelComponent value={'adf'} />
                                <div><input type="date" /></div>
                            </div>
                            <div className=' text-[#70685a] px-2 mr-2 font-bold'>
                                <div className='text-center'>
                                    <LabelComponent value={'adf'} />
                                </div>
                                <InputComponent style={{ height: '30px',}} />
                            </div>
                            <div className=' text-[#70685a] px-2 mr-2 font-bold'>
                                <div className='text-center'>
                                    <LabelComponent value={'adf'} />
                                </div>
                                <InputComponent style={{ height: '30px',}} />
                            </div>
                            <div className=' text-[#70685a] px-2 mr-2 font-bold'>
                                <div className='text-center'>
                                    <LabelComponent value={'adf'} />
                                </div>
                                <InputComponent style={{ height: '30px',}} />
                            </div>


                            <div className=' text-[#70685a] px-2 mr-5' style={{ display: 'flex', alignItems: 'end' }}>
                                <label className="text-[#70685a] block text-center ">Search with </label>
                            </div>
                            <div className=' text-[#70685a] px-2 mr-2' style={{ display: 'flex', alignItems: 'end' }}>
                                < button type="button" style={{ display: 'flex', alignItem: 'end' }} className="flex align-end w-20 px-3 py-1 font-bold rounded-md tracking-wide justify-center text-white bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                                    LOGIN
                                </button>
                            </div>
                            <div className=' text-[#70685a] px-2 mr-5' style={{ display: 'flex', alignItems: 'end' }}>
                                <label className="text-[#70685a] mb-2 block text-center">and search</label>
                            </div>
                        </div>

                        {/*  Tabe*/}
                        <div className='mt-10 pl-10 pr-10 pb-20 w-full flex'>
                            <table className='text-center w-full' style={Table}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Last Name</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td style={Td}></td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >50</td>
                                        <td style={Td} >
                                            <div className='bg-[#a6a6a6] w-20 h-5'>
                                            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
                                                {/* <svg focusable="false" aria-hidden="true" data-testid="ArrowRightAltIcon" title="ArrowRightAlt"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path></svg> */}
                                            </div>
                                        </td>
                                        <td>50</td>
                                    </tr>
                                   
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WholeSalerShippingList;