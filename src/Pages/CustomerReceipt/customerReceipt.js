import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css';
import ButtonComponent from '../../Components/Common/ButtonComponent';


const CustomerReceipt = () => {
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
                        <div className='flex ' style={{ visibility: 'hidden' }}>
                            <button type="button"
                                className="mr-10  py-1 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">Purple</button>
                        </div>
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">Customer Receipt printing confirmation</h2>
                        <div className='flex j'>
                            <ButtonComponent children={'Printing'} style={{ width: '200px' }} />
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex mt-5 justify-around' >
                        <div className=' text-[#70685a] text-[20px] px-2 mr-2'>
                            <div className='flex font-bold'>
                                    <div>Purchase Invoice</div>
                            </div>

                        </div>
                        <div className=' text-[#70685a] px-2 mr-2'>
                            <div className='flex'>
                                <div className='text-right font-bold'>
                                    <div>Store name</div>
                                </div>
                                <div className='ml-5 text-left'>
                                    <div>OOOO</div>
                                </div>
                            </div>
                        </div>
                        <div className=' text-[#70685a] px-2 mr-2'>
                            <div className='flex'>
                                <div className='text-right font-bold'>
                                    <div>Store name</div>
                                </div>
                                <div className='ml-5 text-left'>
                                    <div>OOOO</div>
                                </div>
                            </div>
                        </div>
                        <div className=' text-[#70685a] px-2 mr-2'>
                            <div className='flex'>
                                <div>2023/12/01(金)</div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex'>
                        <div style={{ width: '25%' }}>
                            <div className='flex justify-center text-[#70685a]'>
                                <div className='flex jsutify-center'>
                                    <div className='text-right font-bold'>
                                        <div>Store name</div>
                                    </div>
                                    <div className='ml-5 text-left'>
                                        <div>OOOO</div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center text-[#70685a] '>
                                <div className='flex jsutify-center'>
                                    <div className='text-right font-bold'>
                                        <div>Store name</div>
                                    </div>
                                    <div className='ml-5 text-left'>
                                        <div>OOOO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '50%' }}>
                            <div className='flex justify-center pt-3 text-[#70685a] text-[20px] font-bold' >
                                <div className='text-[#70685a]'>sdfasdfasfdasfdasfsdf</div>
                            </div>
                        </div>
                        <div style={{ width: '25%' }}></div>
                    </div>
                    {/*  Tabe*/}
                    <div className='pl-20 pr-20 pb-20 flex justify-center mt-10' >
                        <div style={{ width: '40%' }}>
                            <table className='text-center w-full' style={Table}>
                                <thead>
                                    <tr>
                                        <th ></th>
                                        <th width='70%'>Points</th>
                                        <th>Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td style={Td}>Smith</td>
                                        <td style={Td}>50</td>
                                    </tr>
                                </tbody>

                            </table>
                            <div className='flex justify-end'>
                                    999a
                            </div>
                            </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomerReceipt;