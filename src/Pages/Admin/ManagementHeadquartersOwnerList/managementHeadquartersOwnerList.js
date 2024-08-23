import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import ButtonComponent from '../../../Components/Common/ButtonComponent';
import DateAndTime from '../../../Components/Common/PickData';


const ManagementHeadquartersOwnerList = () => {
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
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">オーナー一覧</h2>
            </div>
            {/*  */}
            <div className='flex justify-center' style={{width:'10%'}}>
                <ButtonComponent children={'削除'} className='py-1 text-[15px] text-[white] h-8 !px-3 w-max' />
            </div>
            {/*  Table*/}
            <div className='mt-3 pl-10 pr-10 w-full flex'>
                <div style={{ width: '100%' ,overflow:'auto'}}>
                    <table className='text-center w-full' style={Table}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>オーナー名</th>
                            <th>法人名</th>
                            <th> 店舗名</th>
                            <th>経理DATA</th>
                            <th>TEL</th>
                            <th>住所</th>
                            <th>備考</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td ><input type='checkbox'/></td>
                            <td style={Td}>99999</td>
                            <td style={Td}>OOOO OO</td>
                            <td style={Td}>OOOOOOOO</td>
                            <td style={Td}>宮崎店/OO店/</td>
                            <td style={Td}>
                                <div className='flex justify-center'>
                                    <div className='bg-[#a6a6a6] w-10 h-5 flex justify-center ml-3 rounded-md'>
                                        <svg focusable="false" aria-hidden="true" data-testid="ArrowRightAltIcon" fill="#fefefe" className='ml-2' title="ArrowRightAlt"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path></svg>
                                    </div>
                                </div>
                            </td>
                            <td style={Td}>99-9999-9999</td>
                            <td style={Td}>OOOOOOOO</td>
                            <td style={Td}>OOOOOOOO</td>
                        </tr>
                        <tr>
                            <td ><input type='checkbox'/></td>
                            <td style={Td}>99999</td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                        </tr>
                        <tr>
                            <td ><input type='checkbox'/></td>
                            <td style={Td}>99999</td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                        </tr>
                        <tr>
                            <td ><input type='checkbox'/></td>
                            <td style={Td}>99999</td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                        </tr>
                        <tr>
                            <td ><input type='checkbox'/></td>
                            <td style={Td}>99999</td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                        </tr>
                        <tr>
                            <td ><input type='checkbox'/></td>
                            <td style={Td}>99999</td>
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
            {/* <div className='flex justify-center mt-5'>
                <button type="button"
                    className="w-5 h-5 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                        <path
                            d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                            data-original="#000000" />
                    </svg>
                </button>
            </div> */}
        </>
    );
};

export default ManagementHeadquartersOwnerList;