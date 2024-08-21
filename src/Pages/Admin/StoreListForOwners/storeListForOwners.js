import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import InputComponent from '../../../Components/Common/InputComponent';
import ButtonComponent from '../../../Components/Common/ButtonComponent';
import LabelComponent from '../../../Components/Common/LabelComponent';
import DateAndTime from '../../../Components/Common/PickData';


const StoreListForOwners = () => {
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
            <DateAndTime/>


            <div className='flex justify-center mt-5' >
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">店舖一覧</h2>
            </div>
            {/*  */}
            <div className='flex mt-3 justify-center text-left'>
                <div className=' text-[#70685a] px-2 mr-2 text-left'>
                    <LabelComponent value={'店舗名'} className='text-left'/>
                    <InputComponent className='w-40 h-8'/>
                </div>
                <div className=' text-[#70685a] px-2 mr-2'>
                    <LabelComponent value={'TEL'} />
                    <InputComponent className='w-40 h-8' />
                </div>
                <div className='text-[#70685a] px-2 mr-2'>
                    <LabelComponent value={'FAX'} />
                    <InputComponent className='w-40 h-8'/>
                </div>
                <div className='text-[#70685a] px-2 mr-2'>
                    <LabelComponent value={'住所'} />
                    <InputComponent className='w-80 h-8'/>
                </div>

                <div className=' text-[#70685a] px-2 mr-5 flex flex-col justify-end'>
                    <label className="text-[#70685a] text-[20px] block text-center pb-2">この条件で</label>
                </div>
                <div className=' text-[#70685a] px-2 mr-2 flex flex-col justify-end'>
                    < button type="button" style={{ display: 'flex', alignItem: 'end' }} className="flex align-end w-20 px-3 py-1 font-bold rounded-md tracking-wide text-[#665b4c] justify-center text-white bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                    検索
                    </button>
                </div>
                <div className=' text-[#70685a] px-2 mr-5 flex flex-col justify-end'>
                    <label className="text-[#70685a] mb-2 block text-center pb-13">(and条件)</label>
                </div>
            </div>
            <div className='flex mt-5 ml-10'>
                <ButtonComponent children={'保存'} className='py-1 text-[15px] text-[white] h-8 !px-3 w-max'/>
            </div>
            {/*  Tabe*/}
            <div className='mt-5 pl-10 pr-10 pb-20 w-full flex'>
                <table className='text-center w-full' style={Table}>
                    <thead>
                        <tr>
                            <th>削除</th>
                            <th>ID</th>
                            <th> 店舗名</th>
                            <th>店長名  </th>
                            <th>経理DATA</th>
                            <th>TEL</th>
                            <th>FAX</th>
                            <th>住所</th>
                            <th>備考</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td ><input  type='checkbox'/></td>
                            <td style={Td}>9999</td>
                            <td style={Td}>宮崎店</td>
                            <td style={Td}>店長</td>
                            <td style={Td}>
                                <div className='flex justify-center'>
                                    <div className='bg-[#a6a6a6] w-10 h-5 flex justify-center ml-3 rounded-md'>
                                        <svg focusable="false" aria-hidden="true" data-testid="ArrowRightAltIcon" fill="#fefefe" className='ml-2' title="ArrowRightAlt"><path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path></svg>
                                    </div>
                                </div>
                            </td>
                            <td style={Td}>OOOO OO</td>
                            <td style={Td}></td>
                            <td style={Td}>999-999-9999</td>
                            <td style={Td}>1900/12/31</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default StoreListForOwners;