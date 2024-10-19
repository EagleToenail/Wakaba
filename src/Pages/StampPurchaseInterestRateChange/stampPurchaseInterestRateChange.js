import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import InputComponent from '../../Components/Common/InputComponent';
import '../../Assets/css/showtable.css'
import axios from 'axios';


const StampPurchaseInterestRateChange = () => {
    // const title = 'タイトルタイトル';
    const role = localStorage.getItem('role');

    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    const Th = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px'
    };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
    };

    const [stampRate, setStampRate] = useState([]);
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.get(`${wakabaBaseUrl}/stamprate`)
            .then(response => {
                // console.log('stamp rate',response.data)
                setStampRate(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);
    //edit
    const [editIndex, setEditIndex] = useState(-1);
    const [editedRow, setEditedRow] = useState({
        percent: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedRow({ ...editedRow, [name]: value });
    };

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditedRow(stampRate[index]); // Populate the input fields with the selected row's data
    };

    const handleSaveClick = () => {
        const updatedData = stampRate.map((row, index) =>
            index === editIndex ? { ...row, ...editedRow } : row
        );
        setStampRate(updatedData);
        setEditIndex(-1); // Exit edit mode
        setEditedRow({
            percent: '',
        }); // Reset editedRow state
    };

    const handleCancelClick = () => {
        setEditIndex(-1);
        setEditedRow({
            percent: '',
        }); // Reset editedRow state
    };

    //delete one of tatalsaleSlipdata
    const handleDeleteClick = (index) => {
        setStampRate(stampRate.filter((_, i) => i !== index));
    };

    const sendRateData = () => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.post(`${wakabaBaseUrl}/stamprate/update`,{stampRate})
            .then(response => {
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '90em' }}>
                    <div className='flex justify-center mt-10 '>
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">日本の切手   買取利率  変更申請画面
                        </h2>
                    </div>
                    {/*  Table*/}
                    <div className='flex justify-center mt-10' >
                        <div className='stamp-rate w-[50%]'>
                            <table className=' text-center w-full' style={Table}>
                                <thead>
                                    <tr>
                                        <th>項目</th>
                                        <th>買取利率(%)</th>
                                        <th>{editIndex === -1 ? '編集する' : 'セーブ'}</th>
                                        <th className='whitespace-nowrap pl-3'>{editIndex === -1 ? '' : 'キャンセル'}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { stampRate?.length >0 && stampRate.map((data, Index) => (
                                        <tr key={Index}>
                                            <td style={Td}>{data.category || ''}</td>
                                            <td style={Td}>
                                                {editIndex === Index ? (
                                                    <InputComponent name='percent' value={editedRow.percent || ''} onChange={handleInputChange} type='number' className='w-full h-8 text-[#70685a]' />
                                                ) : (data.percent || '')}
                                            </td>
                                            {/* <td>
                                                <div className='ml-5 w-5'>
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-p79yt4" fill="#70685a" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PercentIcon" tabIndex="-1" title="Percent"><path d="M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4 4 5.57 4 7.5 5.57 11 7.5 11m0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6M4.0025 18.5832 18.59 3.9955l1.4142 1.4143L5.4167 19.9974zM16.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"></path></svg>
                                                </div>
                                            </td> */}
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
                                            <td>
                                                {editIndex === Index ? (
                                                    <div>
                                                        <button onClick={() => handleCancelClick(Index)} className='w-7'>
                                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                                        </button>
                                                    </div>
                                                ) : (''
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table></div>

                    </div>
                    <div className='stamp-rate-one flex'>
                        <div className='stamp-rate-two w-[30%] mt-5'></div>
                        <div className='stamp-rate-two w-[40%] flex justify-center mt-5'>
                            <ButtonComponent onClick={sendRateData} children="申請" className='py-2'/>
                        </div>
                        {role === '2' ? 
                        <div className='stamp-rate-two w-[30%] flex justify-center mt-5'>
                            <ButtonComponent children="変更を許可" className='!bg-[#9bd195] !py-1 !px-5'/>
                        </div>
                        : <div className='stamp-rate-two w-[30%] mt-5'></div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default StampPurchaseInterestRateChange;