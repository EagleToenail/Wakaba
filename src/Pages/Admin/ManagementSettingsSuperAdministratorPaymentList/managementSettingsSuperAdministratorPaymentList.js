import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import ButtonComponent from '../../../Components/Common/ButtonComponent';
import DateAndTime from '../../../Components/Common/PickData';


const ManagementSettingsSuperAdministratorPaymentList = () => {
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
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">ス一パー管理者用 管理画面</h2>
            </div>
            <div className='flex justify-around mt-5' >
                <div className='flex justify-center'>
                    <select id="classification" name="classification" className="w-full h-11 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                        <option value="執行役員">執行役員</option>
                        <option value="社員">社員</option>
                        <option value="契約社員">契約社員</option>
                        <option value="アルバイト">アルバイト
                        </option>
                    </select>
                    < button type="button" className=" w-40 h-11 px-10 rounded-md py-1 font-bold tracking-wide text-[#665b4c] justify-center text-white bg-[#a3a1c9] hover:bg-blue-700 focus:outline-none">
                    表示 
                    </button>
                </div>
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">システム使用 料支払状況</h2>
                <div style={{visibility:'hidden'}}>aaa</div>
            </div>
            {/*  */}
            <div className='flex mt-3 justify-center text-left'>
                <div className=''>
                    < button type="button" className="flex align-end w-40 px-3 py-1 font-bold tracking-wide text-[#665b4c] justify-center text-white bg-[#665b4c] hover:bg-blue-700 focus:outline-none">
                    オーナー管理
                    </button>
                </div>
                <div className=' ml-10 '>
                    < button type="button" className="flex align-end w-40 px-3 py-1 font-bold tracking-wide text-[#656666] justify-center text-white bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                    システム基本設定
                    </button>
                </div>
            </div>
            <div className='flex justify-center mt-5'  >
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">オーナー一覧</h2>
            </div>
            <div className='flex justify-center' style={{width:'10%'}} >
                <ButtonComponent children={'保存'} className='py-1 text-[15px] text-[white] h-8 !px-3 w-max !bg-[#838383]' />
            </div>
            {/*  Table*/}
            <div className='mt-3 pl-10 pr-10 w-full flex'>
                <div style={{ width: '100%' ,overflow:'auto'}}>
                    <table className='text-center w-full' style={Table}>
                    <thead>
                        <tr>
                            <th>削除</th>
                            <th>ID</th>
                            <th> 権限種別</th>
                            <th>オーナー名</th>
                            <th>法人名</th>
                            <th>店舖名</th>
                            <th>経理DATA</th>
                            <th>TEL</th>
                            <th>住所</th>
                            <th>備考</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td ><input type='checkbox' /></td>
                            <td style={Td}>9999</td>
                            <td style={Td}>1店鋪オーナー</td>
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
                            <td style={Td}>999-9999-9999</td>
                            <td style={Td}>OOOOOOOO</td>
                            <td style={Td}>OOOOOOOO</td>
                        </tr>
                        <tr>
                            <td ><input type='checkbox' /></td>
                            <td style={Td}>9999</td>
                            <td style={Td}>多店鋪オーナー</td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                        </tr>
                        <tr>
                            <td ><input type='checkbox' /></td>
                            <td style={Td}>9999</td>
                            <td style={Td}>本部</td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                        </tr>
                        <tr>
                            <td ><input type='checkbox' /></td>
                            <td style={Td}>9999</td>
                            <td style={Td}>SV</td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                        </tr>
                        <tr>
                            <td ><input type='checkbox' /></td>
                            <td style={Td}>9999</td>
                            <td style={Td}>スーパー管理者</td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                        </tr>
                        <tr>
                            <td ><input type='checkbox' /></td>
                            <td style={Td}>9999</td>
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
                            <td ><input type='checkbox' /></td>
                            <td style={Td}>9999</td>
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
                            <td ><input type='checkbox' /></td>
                            <td style={Td}>9999</td>
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
                            <td ><input type='checkbox' /></td>
                            <td style={Td}>9999</td>
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
                            <td ><input type='checkbox' /></td>
                            <td style={Td}>9999</td>
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

export default ManagementSettingsSuperAdministratorPaymentList;