import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import StampSheet from '../../Assets/img/stampsheet.png'
import LetterPack from '../../Assets/img/letterpack.png'
import StampRose from '../../Assets/img/stamprose.png'
import PostCard from '../../Assets/img/postcard.png'
import LabelComponent from '../../Components/Common/LabelComponent';
import DateAndTime from '../../Components/Common/PickData';


const StampRelatedInventoryApplicationForm = () => {
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

    const [text, setText] = useState('');

    // Function to handle changes in the text area
    const handleChange = (event) => {
        setText(event.target.value);}

    return (
        <>
            <Titlebar title={title} />
            <DateAndTime/>
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '90em' }}>
                    <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">日本の切手・八ガキ・レターパシク 出庫申請</h2>
                    <div className='flex justify-evenly mt-5 '>
                        <div className='text-center text-[20px]'><u><LabelComponent value="在庫一覽へ戻る" /></u></div>
                        <div>
                            < button type="button" className="w-full px-3 py-3 font-bold tracking-wide rounded-lg justify-center text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                            出庫を申請
                            </button>
                        </div>
                        <div className='text-center text-[20px]'><u><LabelComponent value="キャンセル" /></u></div>

                    </div>
                    <div className='flex mt-5'>
                        <div style={{width:'30%'}}>
                            <div className='text-right'><LabelComponent value="定型文" className='pl-5 !text-[20px] font-bold' /></div>
                            <div className='text-right mt-5'><LabelComponent value="用途/理由他" className='pl-5 !text-[20px] font-bold' /></div>
                        </div>
                        <div style={{width:'40%'}}>
                            <div className='flex flex-col justify-center'><LabelComponent value="OOOOOOOOOOOOOOOO" className='pl-5 !text-[20px]' /></div>
                            <div className="p-4">
                                            {/* Text area */}
                                            <textarea
                                                value={text}
                                                onChange={handleChange}
                                                rows="4"
                                                cols="50"
                                                placeholder=""
                                                className="border border-[#70685a] rounded p-2 w-full"
                                            />
                                            {/* Display the current value of the text area */}
                                            <div className="mt-2 display-none" style={{visibility:'hidden'}}>
                                                <strong>Current Text:</strong>
                                                <p>{text}</p>
                                            </div>
                                        </div>
                        </div>
                    </div>
                    {/* mainpart */}
                    {/* mainpart */}
                    {/* fistline */}
                    <div className='flex'>
                        <div className='mt-10' style={{ width: '25%' }}>
                            <div className='flex justify-center'>
                                <div className='flex'>
                                    <div className='w-10'><img src={StampSheet} alt="aaa"></img></div>
                                    <div className='flex flex-col justify-center'><LabelComponent value="切手シート" className='pl-5 !text-[20px] font-bold' /></div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10' style={{ width: '25%' }}>
                            <div className='flex justify-center'>
                                <div className='flex'>
                                    <div className='w-10'><img src={StampSheet} alt="aaa"></img></div>
                                    <div className='flex flex-col justify-center'><LabelComponent value="切手台紙貼ら" className='pl-5 !text-[20px] font-bold' /></div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10' style={{ width: '25%' }}>
                            <div className='flex justify-center'>
                                <div className='flex'>
                                    <div className='w-10'><img src={StampRose} alt="aaa"></img></div>
                                    <div className='flex flex-col justify-center'><LabelComponent value="切手バラ" className='pl-5 !text-[20px] font-bold' /></div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10' style={{ width: '25%' }}>
                            <div className='flex justify-center'>
                                <div className='flex'>
                                    <div className='w-10'><img src={LetterPack} alt="aaa"></img></div>
                                    <div className='flex flex-col justify-center'><LabelComponent value="レ夕一パツク" className='pl-5 !text-[20px] font-bold' /></div>
                                </div>
                            </div>
                        </div>



                    </div>
                    {/* Secondline */}
                    <div className='flex'>
                        <div className='flex justify-end' style={{ width: '25%' }}>
                            <div className='mt-5 flex flex-col justify-end' style={{ width: '70%' }}>
                                <table className=' text-center w-full' style={Table}>
                                    <thead>
                                        <tr>
                                            <th ></th>
                                            <th>台紙数合計</th>
                                            <th>額面総額合計</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>下記合計</td>
                                            <td style={Td}>1000</td>
                                            <td style={Td}>¥1,000,000</td>
                                        </tr>
                                        <tr>
                                            <td>50円以上</td>
                                            <td style={Td}>1000</td>
                                            <td style={Td}>¥1,000,000</td>
                                        </tr>
                                        <tr>
                                            <td>50円未満</td>
                                            <td style={Td}>1000</td>
                                            <td style={Td}>¥1,000,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='flex justify-end' style={{ width: '25%' }}>
                            <div className='mt-5 flex flex-col justify-end' style={{ width: '70%' }}>
                            <table className=' text-center w-full' style={Table}>
                                    <thead>
                                        <tr>
                                            <th ></th>
                                            <th>台紙数合計</th>
                                            <th>額面総額合計</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>下記合計</td>
                                            <td style={Td}>1000</td>
                                            <td style={Td}>¥1,000,000</td>
                                        </tr>
                                        <tr>
                                            <td>50円以上</td>
                                            <td style={Td}>1000</td>
                                            <td style={Td}>¥1,000,000</td>
                                        </tr>
                                        <tr>
                                            <td>50円未満</td>
                                            <td style={Td}>1000</td>
                                            <td style={Td}>¥1,000,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='flex justify-end' style={{ width: '25%' }}>
                            <div className='mt-5 flex flex-col justify-end' style={{ width: '70%' }}>
                            <table className=' text-center w-full' style={Table}>
                                    <thead>
                                        <tr>
                                            <th ></th>
                                            <th>台紙数合計</th>
                                            <th>額面総額合計</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>下記合計</td>
                                            <td style={Td}>1000</td>
                                            <td style={Td}>¥1,000,000</td>
                                        </tr>
                                        <tr>
                                            <td>50円以上</td>
                                            <td style={Td}>1000</td>
                                            <td style={Td}>¥1,000,000</td>
                                        </tr>
                                        <tr>
                                            <td>50円未満</td>
                                            <td style={Td}>1000</td>
                                            <td style={Td}>¥1,000,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='flex justify-end' style={{ width: '25%' }}>
                            <div className='mt-5 flex flex-col justify-end' style={{ width: '70%' }}>
                            <table className=' text-center w-full' style={Table}>
                                    <thead>
                                        <tr>
                                            <th ></th>
                                            <th>台紙数合計</th>
                                            <th>額面総額合計</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>下記合計</td>
                                            <td style={Td}>1000</td>
                                            <td style={Td}>¥1,000,000</td>
                                        </tr>
                                        <tr>
                                            <td>50円以上</td>
                                            <td style={Td}>1000</td>
                                            <td style={Td}>¥1,000,000</td>
                                        </tr>
                                        <tr>
                                            <td>50円未満</td>
                                            <td style={Td}>1000</td>
                                            <td style={Td}>¥1,000,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* ThirdLine */}
                    <div className='flex'>
                        {/* first table */}
                        <div className='mt-5  ml-5' style={{ width: '25%' }}>
                            <h2 className="text-[#70685a] text-sm font-bold ml-10">切手1枚</h2>
                            <div>
                                <div>
                                    <table className=' text-center w-full' style={Table}>
                                        <thead>
                                            <tr>
                                                <th >選択</th>
                                                <th>の額面</th>
                                                <th>面数</th>
                                                <th >シート額面</th>
                                                <th>シート数</th>
                                                <th>額面総額</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type='checkbox' /></td>
                                                <td style={Td}>¥7</td>
                                                <td style={Td}>20</td>
                                                <td style={Td}>¥100,000</td>
                                                <td style={Td}>1,000</td>
                                                <td style={Td}>¥1,000,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className='flex justify-center mt-2'>
                                    <button type="button"
                                        className="w-5 h-5 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                            <path
                                                d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                data-original="#000000" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* secondtable */}
                        <div className='mt-5  ml-5' style={{ width: '25%' }}>
                            <h2 className="text-[#70685a] text-sm font-bold ml-10">切手1枚</h2>
                            <div>
                                <div>
                                <table className=' text-center w-full' style={Table}>
                                        <thead>
                                            <tr>
                                                <th >選択</th>
                                                <th>の額面</th>
                                                <th>面数</th>
                                                <th >シート額面</th>
                                                <th>シート数</th>
                                                <th>額面総額</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type='checkbox' /></td>
                                                <td style={Td}>¥7</td>
                                                <td style={Td}>20</td>
                                                <td style={Td}>¥100,000</td>
                                                <td style={Td}>1,000</td>
                                                <td style={Td}>¥1,000,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='flex justify-center mt-2'>
                                <button type="button"
                                    className="w-5 h-5 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                        <path
                                            d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                            data-original="#000000" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {/* thirdtable */}
                        <div className='mt-5 ml-5' style={{ width: '25%' }}>
                            <h2 className="text-[#70685a] text-sm font-bold ml-10">切手1枚</h2>
                            <div>
                                <div>
                                <table className=' text-center w-full' style={Table}>
                                        <thead>
                                            <tr>
                                                <th >選択</th>
                                                <th>の額面</th>
                                                <th>面数</th>
                                                <th >シート額面</th>
                                                <th>シート数</th>
                                                <th>額面総額</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type='checkbox' /></td>
                                                <td style={Td}>¥7</td>
                                                <td style={Td}>20</td>
                                                <td style={Td}>¥100,000</td>
                                                <td style={Td}>1,000</td>
                                                <td style={Td}>¥1,000,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='flex justify-center mt-2'>
                                <button type="button"
                                    className="w-5 h-5 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                        <path
                                            d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                            data-original="#000000" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {/* forthtable */}
                        <div className='mt-5 ml-5' style={{ width: '25%' }}>
                            <h2 className="text-[#70685a] text-sm font-bold ml-10">切手1枚</h2>
                            <div>
                                <div>
                                <table className=' text-center w-full' style={Table}>
                                        <thead>
                                            <tr>
                                                <th >選択</th>
                                                <th>の額面</th>
                                                <th>面数</th>
                                                <th >シート額面</th>
                                                <th>シート数</th>
                                                <th>額面総額</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type='checkbox' /></td>
                                                <td style={Td}>¥7</td>
                                                <td style={Td}>20</td>
                                                <td style={Td}>¥100,000</td>
                                                <td style={Td}>1,000</td>
                                                <td style={Td}>¥1,000,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className='flex justify-center mt-2'>
                                <button type="button"
                                    className="w-5 h-5 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                        <path
                                            d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                            data-original="#000000" />
                                    </svg>
                                </button>
                            </div>
                            {/* fifthtable */}
                            <div>
                                <div className='mt-10'>
                                    <div className='flex justify-center'>
                                        <div className='flex'>
                                            <div className='w-10'><img src={PostCard} alt="aaa"></img></div>
                                            <div className='flex flex-col justify-center'><LabelComponent value="ハガキ" className='pl-5 !text-[20px] font-bold' /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end'>
                                    <div className='mt-5 flex flex-col justify-end' style={{ width: '70%' }}>
                                    <table className=' text-center w-full' style={Table}>
                                    <thead>
                                        <tr>
                                            <th ></th>
                                            <th>台紙数合計</th>
                                            <th>額面総額合計</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>下記合計</td>
                                            <td style={Td}>1000</td>
                                            <td style={Td}>¥1,000,000</td>
                                        </tr>
                                        <tr>
                                            <td>50円以上</td>
                                            <td style={Td}>1000</td>
                                            <td style={Td}>¥1,000,000</td>
                                        </tr>
                                        <tr>
                                            <td>50円未満</td>
                                            <td style={Td}>1000</td>
                                            <td style={Td}>¥1,000,000</td>
                                        </tr>
                                    </tbody>
                                </table>
                                    </div>
                                </div>
                                <div className='mt-5 ml-5'>
                                    <h2 className="text-[#70685a] text-sm font-bold ml-10">切手1枚</h2>
                                    <div>
                                        <div>
                                        <table className=' text-center w-full' style={Table}>
                                        <thead>
                                            <tr>
                                                <th >選択</th>
                                                <th>の額面</th>
                                                <th>面数</th>
                                                <th >シート額面</th>
                                                <th>シート数</th>
                                                <th>額面総額</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input type='checkbox' /></td>
                                                <td style={Td}>¥7</td>
                                                <td style={Td}>20</td>
                                                <td style={Td}>¥100,000</td>
                                                <td style={Td}>1,000</td>
                                                <td style={Td}>¥1,000,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                        </div>
                                    </div>
                                    <div className='flex justify-center mt-2'>
                                        <button type="button"
                                            className="w-5 h-5 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default StampRelatedInventoryApplicationForm;