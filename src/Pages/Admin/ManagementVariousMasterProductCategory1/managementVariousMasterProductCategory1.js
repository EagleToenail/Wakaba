import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import ButtonComponent from '../../../Components/Common/ButtonComponent';
import DateAndTime from '../../../Components/Common/PickData';


const ManagementVariousMasterProductCategory1 = () => {
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
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '50em' }}>

                    <div className='flex justify-center mt-5' >
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">本部管理画面  各種マス夕一  一覧</h2>
                    </div>
                    {/*  */}
                    <div className='flex mt-5 justify-center text-left'>
                        <div className=' text-[#70685a] px-2 mr-5 text-2xl font-bold flex flex-col justify-end'>
                            <label className="text-[#70685a] mb-2 block text-center pb-13">商品力テゴリ一1</label>
                        </div>
                    </div>
                    <div className='flex ml-7'>
                        <ButtonComponent children={'保存'} className='py-1 text-[15px] text-[white] h-8 !px-5 w-max !bg-[#838383]' />
                    </div>
                    {/*  Tabe*/}
                    <div className='mt-3 pl-10 pr-10 w-full flex'>
                    <div style={{ width: '100%' ,overflow:'auto'}}>
                        <table className='text-center w-full' style={Table}>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th width={'10%'}>ID</th>
                                    <th width={'40%'}>名称</th>
                                    <th width={'40%'}>備考</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width={'5%'}><input type='checkbox' /></td>
                                    <td width={'10%'} style={Td}>9999</td>
                                    <td style={Td}>貴金属</td>
                                    <td style={Td}></td>
                                </tr>
                                <tr>
                                    <td width={'5%'}><input type='checkbox' /></td>
                                    <td width={'10%'} style={Td}>9999</td>
                                    <td style={Td}>ブランド</td>
                                    <td style={Td}></td>
                                </tr>
                                <tr>
                                    <td width={'5%'}><input type='checkbox' /></td>
                                    <td width={'10%'} style={Td}>9999</td>
                                    <td style={Td}>バツグ</td>
                                    <td style={Td}></td>
                                </tr>
                                <tr>
                                    <td width={'5%'}><input type='checkbox' /></td>
                                    <td width={'10%'} style={Td}>9999</td>
                                    <td style={Td}>時計</td>
                                    <td style={Td}></td>
                                </tr>
                                <tr>
                                    <td width={'5%'}><input type='checkbox' /></td>
                                    <td width={'10%'} style={Td}>9999</td>
                                    <td style={Td}>財布</td>
                                    <td style={Td}></td>
                                </tr>
                                <tr>
                                    <td width={'5%'}><input type='checkbox' /></td>
                                    <td width={'10%'} style={Td}>9999</td>
                                    <td style={Td}>その他アクセサリ</td>
                                    <td style={Td}></td>
                                </tr>
                                <tr>
                                    <td width={'5%'}><input type='checkbox' /></td>
                                    <td width={'10%'} style={Td}>9999</td>
                                    <td style={Td}>骨董品</td>
                                    <td style={Td}></td>
                                </tr>
                                <tr>
                                    <td width={'5%'}><input type='checkbox' /></td>
                                    <td width={'10%'} style={Td}>9999</td>
                                    <td style={Td}>洋酒</td>
                                    <td style={Td}></td>
                                </tr>
                                <tr>
                                    <td width={'5%'}><input type='checkbox' /></td>
                                    <td width={'10%'} style={Td}>9999</td>
                                    <td style={Td}>カメラ</td>
                                    <td style={Td}></td>
                                </tr>
                                <tr>
                                    <td width={'5%'}><input type='checkbox' /></td>
                                    <td width={'10%'} style={Td}>9999</td>
                                    <td style={Td}>楽器</td>
                                    <td style={Td}></td>
                                </tr>
                                <tr>
                                    <td width={'5%'}><input type='checkbox' /></td>
                                    <td width={'10%'} style={Td}>9999</td>
                                    <td style={Td}> スマホノ夕ブしシト</td>
                                    <td style={Td}></td>
                                </tr>
                                <tr>
                                    <td width={'5%'}><input type='checkbox' /></td>
                                    <td width={'10%'} style={Td}>9999</td>
                                    <td style={Td}> </td>
                                    <td style={Td}></td>
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

export default ManagementVariousMasterProductCategory1;