import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import ButtonComponent from '../../../Components/Common/ButtonComponent';
// import LabelComponent from '../../../Components/Common/LabelComponent';
import DateAndTime from '../../../Components/Common/PickData';


const OwnersPayrollCalculationSheet = () => {
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
                {/* This page should be "オーナー管理画面  給与計算表" */}
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">オーナー管理画面  給与計算表</h2>
            </div>
            {/*  */}
            <div className='flex justify-between'>
                <div className='ml-5 w-60'>
                    <div className='text-center'>
                        <label className='ml-5'>チェックされた行だけを</label>
                    </div>
                    <div className='flex justify-center'>
                        <ButtonComponent children={'オーナーに確認申請'} className='py-1 text-[18px] text-[white] h-8 !px-5 w-max bg-[#9ad196]' />
                    </div>
                </div>
                <div className='ml-5 w-60'>
                    <div className='text-center'>
                        <label className='ml-5'>チェックされた行だけを</label>
                    </div>
                    <div className='flex justify-center'>
                        <ButtonComponent children={'確認'} className='py-1 text-[18px] text-[white] h-8 !px-5 w-max bg-[#9ad196]' />
                    </div>
                </div>
            </div>

            {/*  Table 1*/}
            <div className='mt-3 pl-10 pr-10 w-full flex'>
                <div style={{ width: '90%', overflow: 'auto' }}>
                    <table className='text-center w-full' style={Table}>
                        <thead>
                            <tr>
                                <th width='5%'>選択</th>
                                <th width='10%'>スタッフコード </th>
                                <th width='10%'>店舗名</th>
                                <th width='10%'>性</th>
                                <th width='10%'>名</th>
                                <th width='10%'>基本給</th>
                                {/* this table should have more columns. refer Wire Frame:page44, M06 */}
                                <th width='100%'>他の項目は実装中</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td ><input type='checkbox' /></td>
                                <td style={Td}>9999</td>
                                <td style={Td}></td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>9,999,999</td>
                                <td style={Td}></td>
                            </tr>
                            <tr>
                                <td ><input type='checkbox' /></td>
                                <td style={Td}>9999</td>
                                <td style={Td}></td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>9,999,999</td>
                                <td style={Td}></td>
                            </tr>
                            <tr>
                                <td ><input type='checkbox' /></td>
                                <td style={Td}>9999</td>
                                <td style={Td}></td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>9,999,999</td>
                                <td style={Td}></td>
                            </tr>
                            <tr>
                                <td ><input type='checkbox' /></td>
                                <td style={Td}>9999</td>
                                <td style={Td}></td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>9,999,999</td>
                                <td style={Td}></td>
                            </tr>
                            <tr>
                                <td ><input type='checkbox' /></td>
                                <td style={Td}>9999</td>
                                <td style={Td}></td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>9,999,999</td>
                                <td style={Td}></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
            <div className='flex justify-center mt-5 text-[#70685a]'>
                <label>店舖小計&nbsp;<span>9,999,999</span></label>
            </div>
            {/*  Table 2*/}
            <div className='mt-3 pl-10 pr-10 w-full flex'>
                <div style={{ width: '90%', overflow: 'auto' }}>
                    <table className='text-center w-full' style={Table}>
                        <thead>
                            <tr>
                                <th width='5%'>選択</th>
                                <th width='10%'>スタッフコード </th>
                                <th width='10%'>店舗名</th>
                                <th width='10%'>性</th>
                                <th width='10%'>名</th>
                                <th width='10%'>基本給</th>
                                {/* this table should have more columns. refer Wire Frame:page44, M06 */}
                                <th width='100%'>他の項目は実装中</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td ><input type='checkbox' /></td>
                                <td style={Td}>9999</td>
                                <td style={Td}></td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>9,999,999</td>
                                <td style={Td}></td>
                            </tr>
                            <tr>
                                <td ><input type='checkbox' /></td>
                                <td style={Td}>9999</td>
                                <td style={Td}></td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>9,999,999</td>
                                <td style={Td}></td>
                            </tr>
                            <tr>
                                <td ><input type='checkbox' /></td>
                                <td style={Td}>9999</td>
                                <td style={Td}></td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>9,999,999</td>
                                <td style={Td}></td>
                            </tr>
                            <tr>
                                <td ><input type='checkbox' /></td>
                                <td style={Td}>9999</td>
                                <td style={Td}></td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>9,999,999</td>
                                <td style={Td}></td>
                            </tr>
                            <tr>
                                <td ><input type='checkbox' /></td>
                                <td style={Td}>9999</td>
                                <td style={Td}></td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>9,999,999</td>
                                <td style={Td}></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
            <div className='flex justify-center mt-5 text-[#70685a]'>
                <label>店舖小計&nbsp;<span>9,999,999</span></label>
            </div>
            {/*  Table 3*/}
            <div className='mt-3 pl-10 pr-10 w-full flex'>
                <div style={{ width: '90%', overflow: 'auto' }}>
                    <table className='text-center w-full' style={Table}>
                        <thead>
                            <tr>
                                <th width='5%'>選択</th>
                                <th width='10%'>スタッフコード </th>
                                <th width='10%'>店舗名</th>
                                <th width='10%'>性</th>
                                <th width='10%'>名</th>
                                <th width='10%'>基本給</th>
                                {/* this table should have more columns. refer Wire Frame:page44, M06 */}
                                <th width='100%'>他の項目は実装中</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td ><input type='checkbox' /></td>
                                <td style={Td}>9999</td>
                                <td style={Td}></td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>9,999,999</td>
                                <td style={Td}></td>
                            </tr>
                            <tr>
                                <td ><input type='checkbox' /></td>
                                <td style={Td}>9999</td>
                                <td style={Td}></td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>9,999,999</td>
                                <td style={Td}></td>
                            </tr>
                            <tr>
                                <td ><input type='checkbox' /></td>
                                <td style={Td}>9999</td>
                                <td style={Td}></td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>9,999,999</td>
                                <td style={Td}></td>
                            </tr>
                            <tr>
                                <td ><input type='checkbox' /></td>
                                <td style={Td}>9999</td>
                                <td style={Td}></td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>9,999,999</td>
                                <td style={Td}></td>
                            </tr>
                            <tr>
                                <td ><input type='checkbox' /></td>
                                <td style={Td}>9999</td>
                                <td style={Td}></td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>OOOO</td>
                                <td style={Td}>9,999,999</td>
                                <td style={Td}></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
            <div className='flex justify-center mt-5 text-[#70685a]'>
                <label>店舖小計&nbsp;<span>9,999,999</span></label>
            </div>
        </>
    );
};

export default OwnersPayrollCalculationSheet;