import React from 'react';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css';
import DateAndTime from '../../Components/Common/PickData';


const PurchaseRequest = () => {
    // const title = 'タイトルタイトル';

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
            {/* <Titlebar title={title} /> */}
            <DateAndTime/>
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '90em' }}>
                    <div className='flex justify-around mt-10 '>
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">リサイクルショップへの買取り依頼書 (各ショップ用紙作成元シート)</h2>
                    </div>
                    {/*  */}
                    <div className='flex mt-3 justify-center'>
                        <div className='mr-5 flex flex-col justify-center'>
                            <label className="text-[#70685a] font-bold mb-2 block text-center !mb-0">リサイクルショップ</label>
                        </div>
                        <div className=' text-[#70685a] px-2 ml-10'>
                            <select id="classificatin" name="classificatin" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                <option value=''></option>
                                <option value="2">Afghanistan</option>
                                <option value="3">Åland Islands</option>
                                <option value="4">Albania</option>
                            </select>
                        </div>
                        <div className=' text-[#70685a] px-2 ml-10'>
                            <label className="text-[#70685a] font-bold mb-2 block text-center !mb-0">用伝表を</label>
                        </div>
                        <div className=' text-[#70685a] px-2 mr-5'>
                            < button type="button" className="w-20 px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                            印刷
                            </button>
                        </div>
                    </div>
                    {/*  Tabe*/}
                    <div className='pl-20 pr-20 pb-20 flex justify-center mt-10' >
                        <div style={{ width: '70%' }} className='flex'>

                            <table className=' text-center w-full' style={Table}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>わかばNO.</th>
                                        <th>力テゴリ一1</th>
                                        <th width='30%'>商品各</th>
                                        <th>個数</th>
                                        <th width='20%'>買取金額</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >1</td>
                                        <td style={Td}>999999</td>
                                        <td style={Td}>
                                            <select id="classificatin" name="classificatin" className="w-full text-[#70685a] font-bold px-4 py-2 outline-[#70685a]">
                                                <option value=""></option>
                                                <option value="2">Afghanistan</option>
                                                <option value="3">Åland Islands</option>
                                                <option value="4">Albania</option>
                                            </select>
                                        </td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>9999</td>
                                        <td style={Td}>9</td>
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