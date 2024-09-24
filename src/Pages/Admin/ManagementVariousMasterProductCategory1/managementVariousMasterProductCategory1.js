import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputComponent from '../../../Components/Common/InputComponent';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../../Components/Common/Titlebar';
import ButtonComponent from '../../../Components/Common/ButtonComponent';
import DateAndTime from '../../../Components/Common/PickData';


const ManagementVariousMasterProductCategory1 = () => {
    // const title = 'タイトルタイトル';

    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    const Th = {
        whiteSpace: 'nowrap',
    };
    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
        whiteSpace: 'nowrap',
    };

    const [category, setCategory] = useState([]);
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.get(`${wakabaBaseUrl}/ProductType1s`)
            .then(response => {
                setCategory(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);
    // edit part----------------------------------
    const [editIndex, setEditIndex] = useState(-1);
    const [editedRow, setEditedRow] = useState({
        category: '',
        remarks: ''
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedRow({ ...editedRow, [name]: value });
    };

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditedRow(category[index]); // Populate the input fields with the selected row's data
    };

    const handleSaveClick = () => {
        const updatedData = category.map((row, index) =>
            index === editIndex ? { ...row, ...editedRow } : row
        );
        setCategory(updatedData);
        setEditIndex(-1); // Exit edit mode
        setEditedRow({
            category: '',
            remarks: ''
        }); // Reset editedRow state
    };

    const handleCancelClick = () => {
        setEditIndex(-1);
        setEditedRow({
            category: '',
            remarks: ''
        }); // Reset editedRow state
    };

    //delete one of tatalsaleSlipdata
    const handleDeleteClick = (index) => {
        setCategory(category.filter((_, i) => i !== index));
    };
    // add part--------------
    const [inputSheetShow, setInputSheetShow] = useState(false);
    const [newSheetRow, setNewSheetRow] = useState({
        category: '',
        remarks: '',
    });
    const handleSheetChange = (e) => {
        const { name, value } = e.target;
        setNewSheetRow((prevSheetRow) => ({
            ...prevSheetRow,
            [name]: value
        }));
    };
    const handleAddSheetRow = () => {
        if (inputSheetShow) {
            setCategory((prevCategory) => [...prevCategory, { ...newSheetRow, id: Date.now() }]);
            setNewSheetRow({
                category: '',
                remarks: '',
            });
        }
        setInputSheetShow(!inputSheetShow);
    };

    return (
        <>
            {/* <Titlebar title={title} /> */}
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
                    {/* <div className='flex ml-7'>
                        <ButtonComponent children={'削除'} className='py-1 text-[15px] text-[white] h-8 !px-5 w-max !bg-[#838383]' />
                    </div> */}
                    {/*  Tabe*/}
                    <div className='mt-3 pl-10 pr-10 w-full flex'>
                        <div style={{ width: '100%', overflow: 'auto' }}>
                            <table className='text-center w-full' style={Table}>
                                <thead>
                                    <tr>
                                        {/* <th></th> */}
                                        <th width={'10%'}>ID</th>
                                        <th width={'40%'}>名称</th>
                                        <th width={'40%'}>備考</th>
                                        <th style={Th}>{editIndex === -1 ? '編集する' : 'セーブ'}</th>
                                        <th style={Th} className='whitespace-nowrap pl-3'>{editIndex === -1 ? '削除' : 'キャンセル'}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(category && category.length !== 0) && category.map((data, Index) => (
                                        <tr key={Index}>
                                            {/* <td width={'5%'}><input type='checkbox' /></td> */}
                                            <td width={'10%'} style={Td}>{Index + 1}</td>
                                            <td style={Td}>
                                                {editIndex === Index ? (
                                                    <InputComponent name='category' value={editedRow.category || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                                ) : (data.category || '')}
                                            </td>
                                            <td style={Td}>
                                                {editIndex === Index ? (
                                                    <InputComponent name='remarks' value={editedRow.remarks || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                                ) : (data.remarks || '')}
                                            </td>
                                            <td style={Td}>
                                                {editIndex === Index ? (
                                                    <div>
                                                        <button onClick={() => handleSaveClick(Index)} className='w-7'>
                                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <button onClick={() => handleEditClick(Index)} className='w-7'>
                                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                                                        </button>
                                                    </div>
                                                )}
                                            </td>
                                            <td style={Td}>
                                                {editIndex === Index ? (
                                                    <div>
                                                        <button onClick={() => handleCancelClick(Index)} className='w-7'>
                                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <button onClick={() => handleDeleteClick(Index)} className='w-7'>
                                                            <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                                                        </button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                    {inputSheetShow ?
                                        <tr>
                                            <td></td>
                                            <td style={Td}>
                                                <input
                                                    type="text"
                                                    name="category"
                                                    className='w-full'
                                                    value={newSheetRow.category}
                                                    onChange={handleSheetChange}
                                                />
                                            </td>
                                            <td style={Td} >
                                                <input
                                                    type="text"
                                                    name="remarks"
                                                    className='w-full'
                                                    value={newSheetRow.remarks}
                                                    onChange={handleSheetChange}
                                                />
                                            </td>
                                        </tr> : ''}
                                </tbody>

                            </table>
                            <div className='flex justify-center mt-2'>
                                <button type="button" onClick={handleAddSheetRow}
                                    className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
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
        </>
    );
};

export default ManagementVariousMasterProductCategory1;