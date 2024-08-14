import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/table.css';
import InputComponent from '../../Components/Common/InputComponent';


const PurchaseRequest = () => {
    const title = 'タイトルタイトル';
    return (
        <>
            <Titlebar title={title} />
            <h2 className="text-[#70685a] text-center font-bold text-[15px] flex justify-end mt-3" style={{ paddingRight: '1%' }}>2023/12/01(金)&nbsp;&nbsp;21:51</h2>
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '90em' }}>
                    <div className='flex justify-around mt-10 '>
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">PurchaseRequest from for recycle shops(sheets created by each shopo)</h2>
                    </div>
                    {/*  */}
                    <div className='flex mt-3 justify-center'>
                        <div className='mr-5'>
                            <label className="text-[#70685a] font-bold mb-2 block text-center !mb-0">shop</label>
                        </div>
                        <div className=' text-[#70685a] px-2 ml-10'>
                            <InputComponent/>
                        </div>
                        <div className=' text-[#70685a] px-2 ml-10'>
                            <label className="text-[#70685a] font-bold mb-2 block text-center !mb-0">Search </label>
                        </div>
                        <div className=' text-[#70685a] px-2 mr-5'>
                            < button type="button" className="w-20 px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                                LOGIN
                            </button>
                        </div>
                    </div>
                    {/*  Tabe*/}
                    <div className='pl-20 pr-20 pb-20 flex justify-center mt-10' >
                        <div style={{ width: '80%' }} className='flex'>

                            <table className=' text-center w-full'>
                                <thead>
                                    <tr>
                                        <th className='order'>NO</th>
                                        <th>No</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                        <th>Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >1</td>
                                        <td>999999</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>2024.12.31</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td>999999</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>2024.12.31</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td>999999</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>2024.12.31</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td>999999</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>2024.12.31</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td>999999</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>2024.12.31</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td>999999</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>2024.12.31</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td>999999</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>2024.12.31</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td>999999</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>2024.12.31</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td>999999</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>2024.12.31</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td>999999</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>2024.12.31</td>
                                    </tr>
                                    <tr>
                                        <td >1</td>
                                        <td>999999</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>2024.12.31</td>
                                    </tr>
                                    <tr>
                                        <td >12</td>
                                        <td>999999</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>50</td>
                                        <td>2024.12.31</td>
                                    </tr>

                                </tbody>

                            </table></div>

                    </div>
                    </div>
                </div>
        </>
    );
};

export default PurchaseRequest;