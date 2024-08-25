import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../../Components/Common/Titlebar';
import ButtonComponent from '../../../Components/Common/ButtonComponent';
import DateAndTime from '../../../Components/Common/PickData';


const ManagementSettingsSuperAdministratorPaymentList = () => {
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

    //Owner name selected
    const [ownernameselValue, setSelectedOwnernameValue] = useState('');

    const handleOwnerNameSelChange =(event) => {
        setSelectedOwnernameValue(event.target.value);
    }

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />

            <div className='flex justify-center mt-5' >
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">ス一パー管理者用 管理画面</h2>
            </div>
            <div className='flex justify-around mt-5' >
                <div className='flex justify-center'>
                    <select id="ownernamesel" name="ownernamesel"  value={ownernameselValue} onChange={handleOwnerNameSelChange} className="w-full h-8 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                        {/* this select element is for selecting owner name */}
                        <option value="オーナー名" disabled>オーナー名</option>
                        <option value="オーナー1">オーナー1</option>
                        <option value="オーナー2">オーナー2</option>
                        <option value="オーナー3">オーナー3</option>
                    </select>
                    < button type="button" className=" w-40 h-8 px-10 ml-20 rounded-md py-1 font-bold tracking-wide text-[#665b4c] justify-center text-white bg-[#a3a1c9] hover:bg-blue-700 focus:outline-none">
                    表示 
                    </button>
                </div>
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">システム使用料 支払状況</h2>
                {/* hidden part */}
                <div className='flex justify-center' style={{visibility:'hidden'}}>
                    <select id="" name="" className="w-full h-11 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                        <option value="">オーナ名</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value="">
                        </option>
                    </select>
                    < button type="button" className=" w-40 h-11 px-10 ml-20 rounded-md py-1 font-bold tracking-wide text-[#665b4c] justify-center text-white bg-[#a3a1c9] hover:bg-blue-700 focus:outline-none">
                    表示 
                    </button>
                </div>
            </div>

            {/*  Table*/}
            <div className='mt-10 pl-10 pr-10 w-full flex'>
                <div style={{ width: '100%' ,overflow:'auto'}}>
                    <table className='text-center w-full' style={Table}>
                    <thead>
                        <tr>
                            <th className='!text-[#333333]'>ID</th>
                            <th>
                                <ButtonComponent children={'ステータス'} className="!px-3 !py-0 !text-[#333333] bg-[transparent] border border-[#333333] mb-1"/>
                            </th>
                            <th>
                                <ButtonComponent children={'店舗名'} className="!px-3 !py-0 !text-[#333333] bg-[transparent] border border-[#333333] mb-1"/>
                            </th>
                            <th>
                                <ButtonComponent children={'名目'} className="!px-3 !py-0 !text-[#333333] bg-[transparent] border border-[#333333] mb-1"/>
                            </th>
                            <th>
                                <ButtonComponent children={'請求日'} className="!px-3 !py-0 !text-[#333333] bg-[transparent] border border-[#333333] mb-1"/>
                            </th>
                            <th>
                                <ButtonComponent children={'支払予定日'} className="!px-3 !py-0 !text-[#333333] bg-[transparent] border border-[#333333] mb-1"/>
                            </th>
                            <th className='!text-[#333333]'>支払日</th>
                            <th className='!text-[#333333]'> 延滞日数</th>
                            <th className='!text-[#333333]'>
                                <ButtonComponent children={'プラン'} className="!px-3 !py-0 !text-[#333333] bg-[transparent] border border-[#333333] mb-1"/>
                            </th>
                            <th className='!text-[#333333]'>請求額 </th>
                            <th className='!text-[#333333]'>支払額</th>
                            <th className='!text-[#333333]'>差額</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-[#d0eaff]'>
                            <td style={Td} >9999</td>
                            <td style={Td} >支払済み</td>
                            <td style={Td}>高崎店</td>
                            <td style={Td}>2024/10分請求</td>
                            <td style={Td}>2024/10/01</td>
                            <td style={Td}>2024/11/01</td>
                            <td style={Td}>2024/10/02</td>
                            <td style={Td}>0</td>
                            <td style={Td}> 他店舖A</td>
                            <td style={Td}>￥999,999</td>
                            <td style={Td}>￥999,999</td>
                            <td style={Td}>￥0</td>
                        </tr>
                        <tr className='bg-[#ffeedc]'>
                            <td style={Td}>9999</td>
                            <td style={Td}>支払い</td>
                            <td style={Td}> 宮崎イオン店</td>
                            <td style={Td}>2024/10分請求</td>
                            <td style={Td}>2024/10/01</td>
                            <td style={Td}>2024/11/01</td>
                            <td style={Td}></td>
                            <td style={Td}>12</td>
                            <td style={Td}> 他店舖A</td>
                            <td style={Td}>￥999,999</td>
                            <td style={Td}>￥0</td>
                            <td style={Td}>-￥999,999</td>
                        </tr>
                        <tr className='bg-[#ffb8ba]'>
                            <td style={Td}>9999</td>
                            <td style={Td}>支払い(長期)</td>
                            <td style={Td}>宮崎イオン店</td>
                            <td style={Td}>2024/08分請求</td>
                            <td style={Td}>2024/08/01</td>
                            <td style={Td}>2024/08/31</td>
                            <td style={Td}></td>
                            <td style={Td}>72</td>
                            <td style={Td}> 他店舖A</td>
                            <td style={Td}>￥999,999</td>
                            <td style={Td}>￥0</td>
                            <td style={Td}>￥999,999</td>
                        </tr>
                        <tr>
                            <td style={Td}>9999</td>
                            <td style={Td}>請求中</td>
                            <td style={Td}>空港店</td>
                            <td style={Td}>2024/11分請求</td>
                            <td style={Td}>2024/11/01</td>
                            <td style={Td}>2024/11/30</td>
                            <td style={Td}></td>
                            <td style={Td}>0</td>
                            <td style={Td}> 他店舖A</td>
                            <td style={Td}>￥999,999</td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                        </tr>
                        <tr className='bg-[#e4dcff]'>
                            <td style={Td}>9999</td>
                            <td style={Td}>過払い</td>
                            <td style={Td}>県庁内店</td>
                            <td style={Td}>2024/06分請求</td>
                            <td style={Td}>2024/06/01</td>
                            <td style={Td}>2024/06/30</td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}> 他店舖A</td>
                            <td style={Td}>￥999,999</td>
                            <td style={Td}></td>
                            <td style={Td}>￥1</td>
                        </tr>
                        <tr>
                            <td style={Td}>9999</td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}></td>
                            <td style={Td}> </td>
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