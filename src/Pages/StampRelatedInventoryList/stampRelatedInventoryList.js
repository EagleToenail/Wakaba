import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import StampSheet from '../../Assets/img/stampsheet.png'
import LetterPack from '../../Assets/img/letterpack.png'
import StampRose from '../../Assets/img/stamprose.png'
import PostCard from '../../Assets/img/postcard.png'
import LabelComponent from '../../Components/Common/LabelComponent';
import DateAndTime from '../../Components/Common/PickData';


const StampRelatedInventoryList = () => {
    // const title = 'タイトルタイトル';

    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    const Th = {
        whiteSpace: 'nowrap'
    };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace: 'nowrap'
    };
    //dynamic Table operation
    //------------Sheet---------------------------------
    const [sheetRows, setSheetRows] = useState([{
        id: '1',
        stampValue: '¥7',
        numberOfSides: '20',
        sheetValue: '¥100,000',
        numberOfSheets: '1,000',
        totalFaceValue: '¥1,000,000'
    }]);
    const [inputSheetShow, setInputSheetShow] = useState(false);
    const [newSheetRow, setNewSheetRow] = useState({
        stampValue: '',
        numberOfSides: '',
        sheetValue: '',
        numberOfSheets: '',
        totalFaceValue: ''
    });
    const handleSheetChange = (e) => {
        const { name, value } = e.target;
        setNewSheetRow((prevSheetRow) => ({
            ...prevSheetRow,
            [name]: value
        }));
    };
    // Add a new row to the table
    const handleAddSheetRow = () => {
        if (inputSheetShow) {
            setSheetRows((prevSheetRows) => [...prevSheetRows, { ...newSheetRow, id: Date.now() }]);
            setNewSheetRow({
                stampValue: '',
                numberOfSides: '',
                sheetValue: '',
                numberOfSheets: '',
                totalFaceValue: ''
            });
        }
        setInputSheetShow(!inputSheetShow);
    };
    //------------pasting---------------------------------
    const [pastingRows, setPastingRows] = useState([{
        id: '1',
        stampValue: '¥7',
        numberOfSides: '20',
        sheetValue: '¥100,000',
        numberOfSheets: '1,000',
        totalFaceValue: '¥1,000,000'
    }]);
    const [inputPastingShow, setInputPastingShow] = useState(false);
    const [newPastingRow, setNewPastingRow] = useState({
        stampValue: '',
        numberOfSides: '',
        sheetValue: '',
        numberOfSheets: '',
        totalFaceValue: ''
    });
    const handlePastingChange = (e) => {
        const { name, value } = e.target;
        setNewPastingRow((prevPastingRow) => ({
            ...prevPastingRow,
            [name]: value
        }));
    };
    // Add a new row to the table
    const handleAddPastingRow = () => {
        if (inputPastingShow) {
            setPastingRows((prevPastingRows) => [...prevPastingRows, { ...newPastingRow, id: Date.now() }]);
            setNewPastingRow({
                stampValue: '',
                numberOfSides: '',
                sheetValue: '',
                numberOfSheets: '',
                totalFaceValue: ''
            });
        }
        setInputPastingShow(!inputPastingShow);
    };
    //------------Rose---------------------------------
    const [roseRows, setRoseRows] = useState([{
        id: '1',
        stampValue: '¥7',
        numberOfSides: '20',
        sheetValue: '¥100,000',
        numberOfSheets: '1,000',
        totalFaceValue: '¥1,000,000'
    }]);
    const [inputRoseShow, setInputRoseShow] = useState(false);
    const [newRoseRow, setNewRoseRow] = useState({
        stampValue: '',
        numberOfSides: '',
        sheetValue: '',
        numberOfSheets: '',
        totalFaceValue: ''
    });
    const handleRoseChange = (e) => {
        const { name, value } = e.target;
        setNewRoseRow((prevRoseRow) => ({
            ...prevRoseRow,
            [name]: value
        }));
    };
    // Add a new row to the table
    const handleAddRoseRow = () => {
        if (inputRoseShow) {
            setRoseRows((prevRoseRows) => [...prevRoseRows, { ...newRoseRow, id: Date.now() }]);
            setNewRoseRow({
                stampValue: '',
                numberOfSides: '',
                sheetValue: '',
                numberOfSheets: '',
                totalFaceValue: ''
            });
        }
        setInputRoseShow(!inputRoseShow);
    };
    //------------Pack---------------------------------
    const [packRows, setPackRows] = useState([{
        id: '1',
        stampValue: '¥7',
        numberOfSides: '20',
        sheetValue: '¥100,000',
        numberOfSheets: '1,000',
        totalFaceValue: '¥1,000,000'
    }]);
    const [inputPackShow, setInputPackShow] = useState(false);
    const [newPackRow, setNewPackRow] = useState({
        stampValue: '',
        numberOfSides: '',
        sheetValue: '',
        numberOfSheets: '',
        totalFaceValue: ''
    });
    const handlePackChange = (e) => {
        const { name, value } = e.target;
        setNewPackRow((prevPackRow) => ({
            ...prevPackRow,
            [name]: value
        }));
    };
    // Add a new row to the table
    const handleAddPackRow = () => {
        if (inputPackShow) {
            setPackRows((prevPackRows) => [...prevPackRows, { ...newPackRow, id: Date.now() }]);
            setNewPackRow({
                stampValue: '',
                numberOfSides: '',
                sheetValue: '',
                numberOfSheets: '',
                totalFaceValue: ''
            });
        }
        setInputPackShow(!inputPackShow);
    };
    //------------Card---------------------------------
    const [cardRows, setCardRows] = useState([{
        id: '1',
        stampValue: '¥7',
        numberOfSides: '20',
        sheetValue: '¥100,000',
        numberOfSheets: '1,000',
        totalFaceValue: '¥1,000,000'
    }]);
    const [inputCardShow, setInputCardShow] = useState(false);
    const [newCardRow, setNewCardRow] = useState({
        stampValue: '',
        numberOfSides: '',
        sheetValue: '',
        numberOfSheets: '',
        totalFaceValue: ''
    });
    const handleCardChange = (e) => {
        const { name, value } = e.target;
        setNewCardRow((prevCardRow) => ({
            ...prevCardRow,
            [name]: value
        }));
    };
    // Add a new row to the table
    const handleAddCardRow = () => {
        if (inputCardShow) {
            setCardRows((prevCardRows) => [...prevCardRows, { ...newCardRow, id: Date.now() }]);
            setNewCardRow({
                stampValue: '',
                numberOfSides: '',
                sheetValue: '',
                numberOfSheets: '',
                totalFaceValue: ''
            });
        }
        setInputCardShow(!inputCardShow);
    };



    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />
            <div className=" flex flex-col items-center justify-center py-3">
                <div className="w-full " style={{ maxWidth: '100%' }}>
                    <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">日本の切手・ハガキ・レターパック 在庫リスト</h2>
                    <div className='flex justify-evenly mt-5 '>
                        <div>
                            <div className='text-center' style={{visibility:'hidden'}}><LabelComponent value="abc" /></div>
                            <button type="button"
                                className="mr-3  py-1 w-max text-[#70685a] text-[15px] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">
                                入庫申請書を作成
                            </button>
                        </div>
                        <div>
                            <div className='text-center'><LabelComponent value="選択した項目の" /></div>
                            < button type="button" className="w-max px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                出庫申請書を作成
                            </button>
                        </div>
                        <div>
                            <div className='text-center'><LabelComponent value="選択した項目の" /></div>
                            <button type="button"
                                className=" mr-3 py-1 w-max text-[#70685a] text-[15px] rounded-full tracking-wider font-bold outline-none border border-[#70685a] ">
                                買取利率変更申請
                            </button>
                        </div>

                    </div>
                    {/* mainpart */}
                    <div className=' stamp-related-inventory-list flex'>
                        <div className='stamp-related-inventory-list-one mt-10' style={{ width: '25%' }}>
                            {/* first */}
                            <div className='flex justify-center'>
                                <div className='flex'>
                                    <div className='w-10'><img src={StampSheet} alt="aaa"></img></div>
                                    <div className='flex flex-col justify-center'><LabelComponent value="切手シート" className='pl-5 !text-[20px] font-bold' /></div>
                                </div>
                            </div>
                            {/* second */}
                            <div className='flex justify-end w-full'>
                                <div className='mt-5 flex flex-col justify-end' style={{ width: '70%' }}>
                                    <table className=' text-center w-full' style={Table}>
                                        <thead className='sticky top-0 bg-white z-10'>
                                            <tr>
                                                <th ></th>
                                                <th >台紙数合計</th>
                                                <th >額面総額合計</th>
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
                            {/* third */}
                            <div className='mt-5  ml-5 w-full'>
                                <div>
                                    <div>
                                        <table className=' text-center w-full' style={Table}>
                                            <thead className='!h-8'>
                                                <tr>
                                                    <th style={Th} >選択</th>
                                                    <th style={Th} >切手1枚の額面</th>
                                                    <th style={Th} >面数</th>
                                                    <th style={Th}  >シート額面</th>
                                                    <th style={Th} >シート数</th>
                                                    <th style={Th} >額面総額</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {sheetRows.map((row, index) => (
                                                    <tr
                                                        key={row.id}
                                                    // className={index === selectedRowIndex ? 'bg-gray-200' : ''}
                                                    // onClick={() => handleSelectRow(index)}
                                                    >
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                // checked={index === selectedRowIndex}
                                                                readOnly
                                                            />
                                                        </td>
                                                        <td style={Td}>{row.stampValue}</td>
                                                        <td style={Td} >{row.numberOfSides}</td>
                                                        <td style={Td} >{row.sheetValue}</td>
                                                        <td style={Td} >{row.numberOfSheets}</td>
                                                        <td style={Td} >{row.totalFaceValue}</td>
                                                    </tr>
                                                ))}
                                                {inputSheetShow ?
                                                    <tr>
                                                        <td></td>
                                                        <td style={Td}>
                                                            <input
                                                                type="text"
                                                                name="stampValue"
                                                                className='w-full'
                                                                value={newSheetRow.stampValue}
                                                                onChange={handleSheetChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="numberOfSides"
                                                                className='w-full'
                                                                value={newSheetRow.numberOfSides}
                                                                onChange={handleSheetChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="sheetValue"
                                                                className='w-full'
                                                                value={newSheetRow.sheetValue}
                                                                onChange={handleSheetChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="numberOfSheets"
                                                                className='w-full'
                                                                value={newSheetRow.numberOfSheets}
                                                                onChange={handleSheetChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="totalFaceValue"
                                                                className='w-full'
                                                                value={newSheetRow.totalFaceValue}
                                                                onChange={handleSheetChange}

                                                            />
                                                        </td>
                                                    </tr> : ''}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className='flex justify-center mt-2'>
                                        <button type="button" onClick={handleAddSheetRow}
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
                        <div className='stamp-related-inventory-list-one mt-10' style={{ width: '25%' }}>
                            {/* first */}
                            <div className='flex justify-center'>
                                <div className='flex'>
                                    <div className='w-10'><img src={StampSheet} alt="aaa"></img></div>
                                    <div className='flex flex-col justify-center'><LabelComponent value="切手台紙貼り" className='pl-5 !text-[20px] font-bold' /></div>
                                </div>
                            </div>
                            {/* second */}
                            <div className='flex justify-end w-full'>
                                <div className='mt-5 flex flex-col justify-end' style={{ width: '70%' }}>
                                    <table className=' text-center w-full' style={Table}>
                                        <thead className='sticky top-0 bg-white z-10'>
                                            <tr>
                                                <th ></th>
                                                <th >台紙数合計</th>
                                                <th >額面総額合計</th>
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
                            {/* third */}
                            <div className='mt-5  ml-5 w-full'>
                                <div>
                                    <div>
                                        <table className=' text-center w-full' style={Table}>
                                            <thead>
                                                <tr>
                                                    <th style={Th} >選択</th>
                                                    <th style={Th} >切手1枚の額面</th>
                                                    <th style={Th} >面数</th>
                                                    <th style={Th}  >シート額面</th>
                                                    <th style={Th} >シート数</th>
                                                    <th style={Th} >額面総額</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {pastingRows.map((row, index) => (
                                                    <tr
                                                        key={row.id}
                                                    // className={index === selectedRowIndex ? 'bg-gray-200' : ''}
                                                    // onClick={() => handleSelectRow(index)}
                                                    >
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                // checked={index === selectedRowIndex}
                                                                readOnly
                                                            />
                                                        </td>
                                                        <td style={Td}>{row.stampValue}</td>
                                                        <td style={Td} >{row.numberOfSides}</td>
                                                        <td style={Td} >{row.sheetValue}</td>
                                                        <td style={Td} >{row.numberOfSheets}</td>
                                                        <td style={Td} >{row.totalFaceValue}</td>
                                                    </tr>
                                                ))}
                                                {inputPastingShow ?
                                                    <tr>
                                                        <td></td>
                                                        <td style={Td}>
                                                            <input
                                                                type="text"
                                                                name="stampValue"
                                                                className='w-full'
                                                                value={newPastingRow.stampValue}
                                                                onChange={handlePastingChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="numberOfSides"
                                                                className='w-full'
                                                                value={newPastingRow.numberOfSides}
                                                                onChange={handlePastingChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="sheetValue"
                                                                className='w-full'
                                                                value={newPastingRow.sheetValue}
                                                                onChange={handlePastingChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="numberOfSheets"
                                                                className='w-full'
                                                                value={newPastingRow.numberOfSheets}
                                                                onChange={handlePastingChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="totalFaceValue"
                                                                className='w-full'
                                                                value={newPastingRow.totalFaceValue}
                                                                onChange={handlePastingChange}

                                                            />
                                                        </td>
                                                    </tr> : ''}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className='flex justify-center mt-2'>
                                    <button type="button" onClick={handleAddPastingRow}
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

                        <div className='stamp-related-inventory-list-one mt-10' style={{ width: '25%' }}>
                            {/* first */}
                            <div className='flex justify-center'>
                                <div className='flex'>
                                    <div className='w-10'><img src={StampRose} alt="aaa"></img></div>
                                    <div className='flex flex-col justify-center'><LabelComponent value="切手バラ" className='pl-5 !text-[20px] font-bold' /></div>
                                </div>
                            </div>
                            {/* second */}
                            <div className='flex justify-end w-full' >
                                <div className='mt-5 flex flex-col justify-end' style={{ width: '70%' }}>
                                    <table className=' text-center w-full' style={Table}>
                                        <thead>
                                            <tr>
                                                <th ></th>
                                                <th style={Th}>台紙数合計</th>
                                                <th style={Th}>額面総額合計</th>
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
                            {/* third */}
                            <div className='mt-5 ml-5 w-full'>

                                <div>
                                    <div>
                                        <table className=' text-center w-full' style={Table}>
                                            <thead>
                                                <tr>
                                                    <th style={Th} >選択</th>
                                                    <th style={Th}>切手1枚の額面</th>
                                                    <th style={Th}>面数</th>
                                                    <th style={Th} >シート額面</th>
                                                    <th style={Th}>シート数</th>
                                                    <th style={Th}>額面総額</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {roseRows.map((row, index) => (
                                                    <tr
                                                        key={row.id}
                                                    // className={index === selectedRowIndex ? 'bg-gray-200' : ''}
                                                    // onClick={() => handleSelectRow(index)}
                                                    >
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                // checked={index === selectedRowIndex}
                                                                readOnly
                                                            />
                                                        </td>
                                                        <td style={Td}>{row.stampValue}</td>
                                                        <td style={Td} >{row.numberOfSides}</td>
                                                        <td style={Td} >{row.sheetValue}</td>
                                                        <td style={Td} >{row.numberOfSheets}</td>
                                                        <td style={Td} >{row.totalFaceValue}</td>
                                                    </tr>
                                                ))}
                                                {inputRoseShow ?
                                                    <tr>
                                                        <td></td>
                                                        <td style={Td}>
                                                            <input
                                                                type="text"
                                                                name="stampValue"
                                                                className='w-full'
                                                                value={newRoseRow.stampValue}
                                                                onChange={handleRoseChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="numberOfSides"
                                                                className='w-full'
                                                                value={newRoseRow.numberOfSides}
                                                                onChange={handleRoseChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="sheetValue"
                                                                className='w-full'
                                                                value={newRoseRow.sheetValue}
                                                                onChange={handleRoseChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="numberOfSheets"
                                                                className='w-full'
                                                                value={newRoseRow.numberOfSheets}
                                                                onChange={handleRoseChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="totalFaceValue"
                                                                className='w-full'
                                                                value={newRoseRow.totalFaceValue}
                                                                onChange={handleRoseChange}

                                                            />
                                                        </td>
                                                    </tr> : ''}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className='flex justify-center mt-2'>
                                    <button type="button" onClick={handleAddRoseRow}
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
                        <div className='stamp-related-inventory-list-one mt-10' style={{ width: '25%' }}>
                            {/* first */}
                            <div className='flex justify-center'>
                                <div className='flex'>
                                    <div className='w-10'><img src={LetterPack} alt="aaa"></img></div>
                                    <div className='flex flex-col justify-center'><LabelComponent value="レ夕一パック" className='pl-5 !text-[20px] font-bold' /></div>
                                </div>
                            </div>
                            {/* second */}
                            <div className='flex justify-end w-full' >
                                <div className='mt-5 flex flex-col justify-end' style={{ width: '70%' }}>
                                    <table className=' text-center w-full' style={Table}>
                                        <thead>
                                            <tr>
                                                <th ></th>
                                                <th style={Th}>台紙数合計</th>
                                                <th style={Th}>額面総額合計</th>
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
                            {/* third */}
                            <div className='mt-5 ml-5 w-full' >

                                <div>
                                    <div>
                                        <table className=' text-center w-full' style={Table}>
                                            <thead>
                                                <tr>
                                                    <th style={Th} >選択</th>
                                                    <th style={Th}>切手1枚の額面</th>
                                                    <th style={Th}>面数</th>
                                                    <th style={Th} >シート額面</th>
                                                    <th style={Th}>シート数</th>
                                                    <th style={Th}>額面総額</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {packRows.map((row, index) => (
                                                    <tr
                                                        key={row.id}
                                                    // className={index === selectedRowIndex ? 'bg-gray-200' : ''}
                                                    // onClick={() => handleSelectRow(index)}
                                                    >
                                                        <td>
                                                            <input
                                                                type="checkbox"
                                                                // checked={index === selectedRowIndex}
                                                                readOnly
                                                            />
                                                        </td>
                                                        <td style={Td}>{row.stampValue}</td>
                                                        <td style={Td} >{row.numberOfSides}</td>
                                                        <td style={Td} >{row.sheetValue}</td>
                                                        <td style={Td} >{row.numberOfSheets}</td>
                                                        <td style={Td} >{row.totalFaceValue}</td>
                                                    </tr>
                                                ))}
                                                {inputPackShow ?
                                                    <tr>
                                                        <td></td>
                                                        <td style={Td}>
                                                            <input
                                                                type="text"
                                                                name="stampValue"
                                                                className='w-full'
                                                                value={newPackRow.stampValue}
                                                                onChange={handlePackChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="numberOfSides"
                                                                className='w-full'
                                                                value={newPackRow.numberOfSides}
                                                                onChange={handlePackChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="sheetValue"
                                                                className='w-full'
                                                                value={newPackRow.sheetValue}
                                                                onChange={handlePackChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="numberOfSheets"
                                                                className='w-full'
                                                                value={newPackRow.numberOfSheets}
                                                                onChange={handlePackChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="totalFaceValue"
                                                                className='w-full'
                                                                value={newPackRow.totalFaceValue}
                                                                onChange={handlePackChange}

                                                            />
                                                        </td>
                                                    </tr> : ''}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className='flex justify-center mt-2'>
                                    <button type="button" onClick={handleAddPackRow}
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
                                                        <th style={Th}>台紙数合計</th>
                                                        <th style={Th}>額面総額合計</th>
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

                                        <div>
                                            <div>
                                                <table className=' text-center w-full' style={Table}>
                                                    <thead>
                                                        <tr>
                                                            <th style={Th}>選択</th>
                                                            <th style={Th}>切手1枚の額面</th>
                                                            <th style={Th}>面数</th>
                                                            <th style={Th} >シート額面</th>
                                                            <th style={Th}>シート数</th>
                                                            <th style={Th}>額面総額</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        {cardRows.map((row, index) => (
                                                            <tr
                                                                key={row.id}
                                                            // className={index === selectedRowIndex ? 'bg-gray-200' : ''}
                                                            // onClick={() => handleSelectRow(index)}
                                                            >
                                                                <td>
                                                                    <input
                                                                        type="checkbox"
                                                                        // checked={index === selectedRowIndex}
                                                                        readOnly
                                                                    />
                                                                </td>
                                                                <td style={Td}>{row.stampValue}</td>
                                                                <td style={Td} >{row.numberOfSides}</td>
                                                                <td style={Td} >{row.sheetValue}</td>
                                                                <td style={Td} >{row.numberOfSheets}</td>
                                                                <td style={Td} >{row.totalFaceValue}</td>
                                                            </tr>
                                                        ))}
                                                        {inputCardShow ?
                                                            <tr>
                                                                <td></td>
                                                                <td style={Td}>
                                                                    <input
                                                                        type="text"
                                                                        name="stampValue"
                                                                        className='w-full'
                                                                        value={newCardRow.stampValue}
                                                                        onChange={handleCardChange}
                                                                    />
                                                                </td>
                                                                <td style={Td} >
                                                                    <input
                                                                        type="text"
                                                                        name="numberOfSides"
                                                                        className='w-full'
                                                                        value={newCardRow.numberOfSides}
                                                                        onChange={handleCardChange}
                                                                    />
                                                                </td>
                                                                <td style={Td} >
                                                                    <input
                                                                        type="text"
                                                                        name="sheetValue"
                                                                        className='w-full'
                                                                        value={newCardRow.sheetValue}
                                                                        onChange={handleCardChange}
                                                                    />
                                                                </td>
                                                                <td style={Td} >
                                                                    <input
                                                                        type="text"
                                                                        name="numberOfSheets"
                                                                        className='w-full'
                                                                        value={newCardRow.numberOfSheets}
                                                                        onChange={handleCardChange}
                                                                    />
                                                                </td>
                                                                <td style={Td} >
                                                                    <input
                                                                        type="text"
                                                                        name="totalFaceValue"
                                                                        className='w-full'
                                                                        value={newCardRow.totalFaceValue}
                                                                        onChange={handleCardChange}

                                                                    />
                                                                </td>
                                                            </tr> : ''}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className='flex justify-center mt-2'>
                                            <button type="button" onClick={handleAddCardRow}
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
            </div>
        </>
    );
};

export default StampRelatedInventoryList;