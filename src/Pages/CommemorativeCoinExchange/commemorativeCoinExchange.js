import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LabelComponent from '../../Components/Common/LabelComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import InputComponent from '../../Components/Common/InputComponent';
import DateAndTime from '../../Components/Common/PickData';
import dateimage from '../../Assets/img/datepicker.png';
import axios from 'axios';

const CommemorativeCoinExchange = () => {
    // const title = 'タイトルタイトル';
    const navigate = useNavigate();
    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px'
    };
    //dynamic Table operation
    //------------Sheet---------------------------------
    const [coinRows, setCoinRows] = useState([]);
    const [totalNumberOfCoin, setTotalNumberofCoin] = useState('');
    const [totalCoinValue, setTotalCoinValue] = useState('');

    //fetch sheet data
    useEffect(() => {
        const fetchData = async () => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const response = await axios.get(`${wakabaBaseUrl}/coin`);
            initialCoinData(response.data);
        };
        fetchData();
    }, []);
    // clear other three data 
    const initialCoinData = (coinData) => {
        const updatedData = coinData.map(data => ({
            ...data,
            numberOfCoins: 0,
            totalCoinValue: 0,
            newNumberOfCoins: data.numberOfCoins
        }));
        setCoinRows(updatedData);
        console.log('updated data', updatedData)
    }

    const [inputCoinShow, setInputCoinShow] = useState(false);
    const [newCoinRow, setNewCoinRow] = useState({
        coinValue: '',
        numberOfCoins: '0',
        totalCoinValue: '0'
    });
    const handleCoinChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target.name)
        setNewCoinRow((prevCoinRow) => ({
            ...prevCoinRow,
            [name]: value
        }));
    };
    // Add a new row to the table
    const handleAddCoinRow = async () => {
        if (inputCoinShow) {
            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }
                await axios.post(`${wakabaBaseUrl}/coin/create`, newCoinRow)
                    .then(response => {
                        // console.log('success',response.data)
                        initialCoinData(response.data);
                    })
                    .catch(error => {
                        console.error("There was an error fetching the customer data!", error);
                    }); // Send newRow data to the server
                // setCoinRows((prevcoinRows) => [...prevcoinRows, { ...newCoinRow, id: Date.now() }]);
                setNewCoinRow({
                    coinValue: '',
                    numberOfCoins: '0',
                    totalCoinValue: '0'
                });
            } catch (error) {
                console.error('Error adding row:', error);
            }
        }
        setInputCoinShow(!inputCoinShow);
    };
    //edit and delete
    const [editCoinIndex, setEditCoinIndex] = useState(-1);
    const [editedCoinRow, setEditedCoinRow] = useState({
        coinValue: '',
        numberOfCoins: '0',
        totalCoinValue: '0',
    });
    const handleCoinInputChange = (e) => {
        const { name, value } = e.target;
        setEditedCoinRow({ ...editedCoinRow, [name]: value });
        if (name === 'numberOfCoins') {
            calculateCoin(value);
        }
    };

    const handleCoinEditClick = (index) => {
        setEditCoinIndex(index);
        setEditedCoinRow(coinRows[index]); // Populate the input fields with the selected row's data
    };

    const handleCoinSaveClick = async () => {
        const updatedData = coinRows.map((row, index) =>
            index === editCoinIndex ? { ...row, ...editedCoinRow } : row
        );
        setCoinRows(updatedData);
        setEditCoinIndex(-1); // Exit edit mode
        setEditedCoinRow({
            coinValue: '',
            numberOfCoins: '0',
            totalCoinValue: '0'
        }); // Reset editedRow state
    };

    const handleCoinCancelClick = () => {
        setEditCoinIndex(-1);
        setEditedCoinRow({
            coinValue: '',
            numberOfCoins: '0',
            totalCoinValue: '0'
        }); // Reset editedRow state
    };

    //delete one of tatalsaleSlipdata
    // const handleCoinDeleteClick = (index) => {
    //     setCoinRows(coinRows.filter((_, i) => i !== index));
    // };
    //calculate
    const calculateCoin = (numberofcoins) => {
        const { coinValue } = editedCoinRow;
        // console.log('shetValue',sheetValue)
        if (coinValue) {
            const calculatedProduct = parseInt(coinValue) * parseInt(numberofcoins);
            setEditedCoinRow((prev) => ({ ...prev, totalCoinValue: calculatedProduct }));
        } else {
            setNewCoinRow((prev) => ({ ...prev, coinValue: '' }));
        }
    }
    //new version
    const calculateCoin1 = (index, data) => {
        if (index !== undefined) {
            const coinValue = parseInt(data[index].coinValue) || 0;
            const numberOfCoins = parseInt(data[index].numberOfCoins) || 0;
            const calculatedProduct = coinValue * numberOfCoins;
            const updatedRows = data.map((r, i) =>
                i === index ? { ...r, totalCoinValue: calculatedProduct } : r
            );
            setCoinRows(updatedRows);
        }
    };
    //calculate second table
    const calculateCoinTotal = () => {
        // Calculate the sum
        const totalnumberofCoin = coinRows.reduce((sum, item) => {
            if (item.coinValue) {
                return parseInt(sum) + parseInt(item.numberOfCoins) || 0;
            }
            return sum;
        }, 0);
        setTotalNumberofCoin(totalnumberofCoin);
        const facevalue1 = coinRows.reduce((sum, item) => {
            if (item.coinValue) {
                return parseInt(sum) + parseInt(item.totalCoinValue);
            }
            return sum;
        }, 0);
        setTotalCoinValue(facevalue1);
    }
    useEffect(() => {
        calculateCoinTotal();
    }, [coinRows]);
    //-------------------------------------bill----------------------------------------------
    const [billRows, setBillRows] = useState([]);
    const [totalNumberOfBill, setTotalNumberofBill] = useState('');
    const [totalBillValue, setTotalBillValue] = useState('');

    //fetch sheet data
    useEffect(() => {
        const fetchData = async () => {

            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const response = await axios.get(`${wakabaBaseUrl}/bill`);
            initialBillData(response.data);
        };
        fetchData();
    }, []);
    // clear other three data 
    const initialBillData = (BillData) => {
        const updatedData = BillData.map(data => ({
            ...data,
            numberOfBills: 0,
            totalBillValue: 0,
            newNumberOfBills: data.numberOfBills
        }));
        setBillRows(updatedData);
        // console.log('updated data',updatedData)
    }

    const [inputBillShow, setInputBillShow] = useState(false);
    const [newBillRow, setNewBillRow] = useState({
        billValue: '',
        numberOfBills: '0',
        totalBillValue: '0'
    });
    const handleBillChange = (e) => {
        const { name, value } = e.target;
        setNewBillRow((prevBillRow) => ({
            ...prevBillRow,
            [name]: value
        }));
    };
    // Add a new row to the table
    const handleAddBillRow = async () => {
        if (inputBillShow) {
            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }
                await axios.post(`${wakabaBaseUrl}/bill/create`, newBillRow)
                    .then(response => {
                        // console.log('success',response.data)
                        initialBillData(response.data);
                    })
                    .catch(error => {
                        console.error("There was an error fetching the customer data!", error);
                    }); // Send newRow data to the server
                // setBillRows((prevBillRows) => [...prevBillRows, { ...newBillRow, id: Date.now() }]);
                setNewBillRow({
                    billValue: '',
                    numberOfBills: '0',
                    totalBillValue: '0'
                });
            } catch (error) {
                console.error('Error adding row:', error);
            }
        }
        setInputBillShow(!inputBillShow);
    };
    //edit and delete
    const [editBillIndex, setEditBillIndex] = useState(-1);
    const [editedBillRow, setEditedBillRow] = useState({
        billValue: '',
        numberOfBills: '0',
        totalBillValue: '0'
    });
    const handleBillInputChange = (e) => {
        const { name, value } = e.target;
        console.log('aaa', name)
        setEditedBillRow({ ...editedBillRow, [name]: value });
        if (name === 'numberOfBills') {
            calculateBill(value);
        }
    };

    const handleBillEditClick = (index) => {
        setEditBillIndex(index);
        setEditedBillRow(billRows[index]); // Populate the input fields with the selected row's data
    };

    const handleBillSaveClick = async () => {
        const updatedData = billRows.map((row, index) =>
            index === editBillIndex ? { ...row, ...editedBillRow } : row
        );
        setBillRows(updatedData);
        setEditBillIndex(-1); // Exit edit mode
        setEditedBillRow({
            billValue: '',
            numberOfBills: '0',
            totalBillValue: '0'
        }); // Reset editedRow state
    };

    const handleBillCancelClick = () => {
        setEditBillIndex(-1);
        setEditedBillRow({
            billValue: '',
            numberOfBills: '0',
            totalBillValue: '0'
        }); // Reset editedRow state
    };

    //delete one of tatalsaleSlipdata
    const handleBillDeleteClick = (index) => {
        setBillRows(billRows.filter((_, i) => i !== index));
    };
    //calculate
    const calculateBill = (numberofBills) => {
        const { billValue } = editedBillRow;
        // console.log('shetValue',sheetValue)
        if (billValue) {
            const calculatedProduct = parseInt(billValue) * parseInt(numberofBills);
            setEditedBillRow((prev) => ({ ...prev, totalBillValue: calculatedProduct }));
        } else {
            setNewBillRow((prev) => ({ ...prev, billValue: '' }));
        }
    }
    //new version
    const calculateBill1 = (index, data) => {
        if (index !== undefined) {
            const billValue = parseInt(data[index].billValue) || 0;
            const numberOfBills = parseInt(data[index].numberOfBills) || 0;
            const calculatedProduct = billValue * numberOfBills;
            const updatedRows = data.map((r, i) =>
                i === index ? { ...r, totalBillValue: calculatedProduct } : r
            );
            setBillRows(updatedRows);
        }
    };
    //calculate second table
    const calculateBillTotal = () => {
        // Calculate the sum
        const totalnumberofBill = billRows.reduce((sum, item) => {
            if (item.billValue) {
                return parseInt(sum) + parseInt(item.numberOfBills);
            }
            return sum;
        }, 0);
        setTotalNumberofBill(totalnumberofBill);
        const facevalue1 = billRows.reduce((sum, item) => {
            if (item.billValue) {
                return parseInt(sum) + parseInt(item.totalBillValue);
            }
            return sum;
        }, 0);
        setTotalBillValue(facevalue1);
    }
    useEffect(() => {
        calculateBillTotal();
    }, [billRows]);
    //-----------------------------------------------------------------------------------
    const [userData, setUserData] = useState([]);
    const userId = localStorage.getItem('userId');
    useEffect(() => {

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.post(`${wakabaBaseUrl}/profiledata`, { userId })
            .then(response => {
                setUserData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, [userId]);

    const now = new Date();

    // Format the date as YYYY-MM-DD
    const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Tokyo' };
    const currentDay = new Intl.DateTimeFormat('ja-JP', optionsDate).format(now).replace(/\//g, '-');

    const [otherData, setOtherData] = useState({
        exchange_date: '',
        bank_name: '',
        description: ''
    });
    const handleOtherDataChange = (e) => {
        const { name, value } = e.target;
        setOtherData((prevOtherData) => ({
            ...prevOtherData,
            [name]: value
        }));
    };

    const sendCoinAndBillData = async () => {
        const coinFilteredArray = coinRows.filter(obj => obj.numberOfCoins !== 0);
        const coinids = coinFilteredArray.map(obj => obj.id);
        const coinvalues = coinFilteredArray.map(obj => obj.numberOfCoins);

        const billFilteredArray = billRows.filter(obj => obj.numberOfBills !== 0);
        const billids = billFilteredArray.map(obj => obj.id);
        const billvalues = billFilteredArray.map(obj => obj.numberOfBills);

        const staff_name = userData.username;
        const phone = userData.phone;
        const bank_name = otherData.bank_name;
        const application_date = currentDay;
        const exchange_date = otherData.exchange_date;
        const description = otherData.description;
        const total_coin_values = totalCoinValue;
        const total_bill_values = totalBillValue;

        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const coinAndBillData = {
                staff_name, phone, application_date, bank_name, exchange_date, total_coin_values, total_bill_values,
                description, coinids, coinvalues, billids, billvalues
            }
            await axios.post(`${wakabaBaseUrl}/coinandbillexchange/create`, coinAndBillData)
                .then(response => {
                    // console.log('success',response.data)
                    navigate('/commemorativecoinhistorylist');
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                }); // Send newRow data to the server
        } catch (error) {
            console.error('Error adding row:', error);
        }
    }
    //-----------------------------------------------------------------------------------
    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full">
                    <h2 className="text-[#70685a] text-center text-[20px] font-bold flex justify-center">記念硬貨/お札   両替依頼書   新規作成</h2>
                    <div className='commemorative-coin w-full flex'>
                        <div className='commemorative-coin-one flex w-[40%] mt-5'>
                            <div className='flex ml-10'>
                                <div className='text-right font-bold text-[#70685a] w-40'>
                                    <div className='h-8 flex flex-col justify-center'>担当</div>
                                    <div className='h-8 flex flex-col justify-center'>TEL</div>
                                    <div className='h-10 flex flex-col justify-center'>実行予定日</div>
                                    <div className='mt-2 h-10 flex flex-col justify-center'>銀行名</div>
                                </div>
                                <div className='ml-5 text-left text-[#70685a]'>
                                    <div className='h-8 flex flex-col justify-center'>{userData.username || '000-000-0000'}</div>
                                    <div className='h-8 flex flex-col justify-center'>{userData.phone || '000-000-0000'}</div>
                                    <div className='flex flex-col justify-center'>
                                        <div className='flex'>
                                            <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <input name="exchange_date" value={otherData.exchange_date || '~~~'} type="text" required className="w-[170px] h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                                            </div>
                                            <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                                <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                                    <div style={{ position: 'relative' }}>
                                                        <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                                        <input type="date" name="exchange_date" onChange={handleOtherDataChange} style={{ position: 'absolute', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-2 flex flex-col justify-center'><InputComponent className='w-60 h-10' name='bank_name' value={otherData.bank_name || ''} placeholder={'~~~'} onChange={handleOtherDataChange} /></div>
                                </div>
                            </div>
                        </div>
                        <div className='commemorative-coin-one flex justify-between gap-5 mt-5 w-[20%]'>
                            <div className='text-xl font-bold text-[#70685a] cursor-pointer pt-2' style={{ visibility: 'hidden' }}>PDF</div>
                            <ButtonComponent children={'Print'} className='h-11 !text-xl !px-10' onClick={sendCoinAndBillData} />
                            <div className='text-xl font-bold text-[#70685a] cursor-pointer pt-2'>PDF</div>
                        </div>
                        <div className='commemorative-coin-one w-[40%] flex text-left pt-5'>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div>
                            <div className='flex w-full'>
                                <label className='!w-full font-bold text-[18px] text-[#70685a]' >
                                    <span className='text-[20px]'>{otherData.exchange_date || '~~~'}</span>日に、<span className='text-[20px]'>{otherData.bank_name || '~~~'}</span>銀行に、<span className='text-[20px]'>{parseInt(totalCoinValue) + parseInt(totalBillValue) || '~~~'}</span>円 を両替に持っていきます。
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* second */}
                    <div className='flex justify-center mt-5'>
                        <div className='flex'>
                            <div className='text-right font-bold text-[#70685a]'>
                                <div>合計枚数 </div>
                            </div>
                            <div className='ml-5 text-left text-[#70685a]' >
                                <div>{parseInt(totalNumberOfCoin) + parseInt(totalNumberOfBill)}</div>
                            </div>
                        </div>
                        <div className='flex ml-12'>
                            <div className='text-right font-bold text-[#70685a]'>
                                <div>合計金額</div>
                            </div>
                            <div className='ml-5 text-left text-[#70685a]' >
                                <div>¥{(parseInt(totalCoinValue || 0) + parseInt(totalBillValue || 0)).toLocaleString()}</div>
                            </div>
                        </div>
                    </div>
                    {/* Table data */}

                    {/* Secondline */}
                    <div className='flex justify-center'>
                        <div className='coin-bill w-[70%] flex gap-10 justify-center'>
                            <div className='coin-bill-one flex justify-center w-1/2'>

                                <div className='mt-3 w-full'>
                                    <div className='flex justify-center w-full'>
                                        <div className='flex'>
                                            <div className='w-10 flex flex-col justify-center'><div className='w-10 h-10 rounded-full bg-[#70685a]'></div></div>
                                            <div className='flex flex-col justify-center'><LabelComponent value="硬貸" className='pl-5 !text-[20px] font-bold' /></div>
                                        </div>
                                    </div>
                                    <table className=' text-center w-full mt-3' style={Table}>
                                        <thead>
                                            <tr>
                                                <th >小計3</th>
                                                <th ></th>
                                                <th >{totalNumberOfCoin}</th>
                                                <th >¥{(parseInt(totalCoinValue || 0)).toLocaleString()}</th>
                                                <th ></th>
                                                <th ></th>
                                            </tr>
                                            <tr>
                                                <th >額面(円) </th>
                                                <th >在庫数</th>
                                                <th >数</th>
                                                <th >小計1(￥)</th>
                                                {/* <th >{editCoinIndex === -1 ? '編集する' : 'セーブ'}</th>
                                                <th className='whitespace-nowrap pl-3'>{editCoinIndex === -1 ? '' : '戻る'}</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {coinRows?.length > 0 && coinRows.map((row, Index) => (
                                                <tr key={Index} style={{ display: 'none' }}>
                                                    <td style={Td} className='text-right'>{(parseInt(row.coinValue || 0)).toLocaleString()}</td>
                                                    <td style={Td}>
                                                        {row.newNumberOfCoins || ''}
                                                    </td>
                                                    <td style={Td}>
                                                        {editCoinIndex === Index ? (
                                                            <InputComponent name='numberOfCoins' type="number" value={editedCoinRow.numberOfCoins || ''} onChange={handleCoinInputChange} className='!w-[100px] h-8 text-[#70685a] border-[red]' />
                                                        ) : (row.numberOfCoins || '')}
                                                    </td>
                                                    <td style={Td} className='text-right'>{(parseInt(row.totalCoinValue || 0)).toLocaleString()}</td>
                                                    <td style={Td}>
                                                        {editCoinIndex === Index ? (
                                                            <div>
                                                                <button onClick={() => handleCoinSaveClick(Index)} className='w-7'>
                                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                <button onClick={() => handleCoinEditClick(Index)} className='w-7'>
                                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                                                                </button>
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td>
                                                        {editCoinIndex === Index ? (
                                                            <div>
                                                                <button onClick={() => handleCoinCancelClick(Index)} className='w-7'>
                                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                                                </button>
                                                            </div>
                                                        ) : (''
                                                            // <div>
                                                            //     <button onClick={() => handleCoinDeleteClick(Index)} className='w-7'>
                                                            //         <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                                                            //     </button>
                                                            // </div>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                            {coinRows?.length > 0 && coinRows.map((row, index) => (
                                                <tr key={index}>
                                                    <td style={Td}>{row.coinValue || ''}</td>
                                                    <td style={Td}>{row.newNumberOfCoins || ''}</td>
                                                    <td style={Td} className='w-40'>
                                                        <InputComponent
                                                            name='numberOfCoins'
                                                            type="number"
                                                            value={row.numberOfCoins || ''}
                                                            onChange={(e) => {
                                                                const value = e.target.value;
                                                                const updatedRows = coinRows.map((r, i) =>
                                                                    i === index ? { ...r, numberOfCoins: value } : r
                                                                );
                                                                setCoinRows(updatedRows);
                                                                calculateCoin1(index, updatedRows);
                                                            }}
                                                            className='w-40 h-8 text-[#70685a]'
                                                        />
                                                    </td>
                                                    <td style={Td}>{row.totalCoinValue || ''}</td>
                                                </tr>
                                            ))}
                                            {inputCoinShow ?
                                                <tr>
                                                    <td style={Td}>
                                                        <input
                                                            type="number"
                                                            name="coinValue"
                                                            className='w-full border-[red]'
                                                            value={newCoinRow.coinValue || ''}
                                                            onChange={handleCoinChange}
                                                        />
                                                    </td>
                                                    <td style={Td} >
                                                        <input
                                                            type="text"
                                                            name=" numberOfCoins"
                                                            disabled={true}
                                                            className='w-20'
                                                            value={newCoinRow.numberOfCoins || ''}
                                                            onChange={handleCoinChange}
                                                        />
                                                    </td>
                                                    <td style={Td} >
                                                        <input
                                                            type="text"
                                                            name="totalCoinValue"
                                                            disabled={true}
                                                            className='w-full'
                                                            value={newCoinRow.totalCoinValue || ''}
                                                            onChange={handleCoinChange}

                                                        />
                                                    </td>
                                                </tr> : ''}
                                        </tbody>
                                    </table>
                                    <div className='flex justify-center mt-2'>
                                        <button type="button" onClick={handleAddCoinRow}
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
                            <div className='coin-bill-one flex justify-center w-1/2' >
                                <div className='mt-3 w-full'>
                                    <div className='flex justify-center w-full'>
                                        <div className='flex'>
                                            <div className='w-10 flex flex-col justify-center'><div className='w-10 h-7 bg-[#70685a]'></div></div>
                                            <div className='flex flex-col justify-center'><LabelComponent value="お札" className='pl-5 !text-[20px] font-bold' /></div>
                                        </div>
                                    </div>
                                    <table className=' text-center w-full mt-3' style={Table}>
                                        <thead>
                                            <tr>
                                                <th >小計3</th>
                                                <th ></th>
                                                <th >{totalNumberOfBill}</th>
                                                <th >¥{(parseInt(totalBillValue || 0)).toLocaleString()}</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th >額面 </th>
                                                <th >在庫数</th>
                                                <th >数</th>
                                                <th >小計1</th>
                                                <th style={{display:'none'}}>{editBillIndex === -1 ? '編集する' : 'セーブ'}</th>
                                                <th style={{display:'none'}} className='whitespace-nowrap pl-3'>{editBillIndex === -1 ? '' : '戻る'}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {billRows?.length > 0 && billRows.map((row, Index) => (
                                                <tr key={Index} style={{ display: 'none' }}>
                                                    <td style={Td} className='text-right'>
                                                        {(parseInt(row.billValue || 0)).toLocaleString()}
                                                    </td>
                                                    <td style={Td}>
                                                        {row.newNumberOfBills || ''}
                                                    </td>
                                                    <td style={Td}>
                                                        {editBillIndex === Index ? (
                                                            <InputComponent name='numberOfBills' type="number" value={editedBillRow.numberOfBills || ''} onChange={handleBillInputChange} className='w-full h-8 text-[#70685a] border-[red]' />
                                                        ) : (row.numberOfBills || '')}
                                                    </td>
                                                    <td style={Td} className='text-right'>
                                                        {(parseInt(row.totalBillValue || 0)).toLocaleString()}
                                                    </td>
                                                    <td style={{display:'none'}}>
                                                        {editBillIndex === Index ? (
                                                            <div>
                                                                <button onClick={() => handleBillSaveClick(Index)} className='w-7'>
                                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                <button onClick={() => handleBillEditClick(Index)} className='w-7'>
                                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                                                                </button>
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td style={{display:'none'}}>
                                                        {editBillIndex === Index ? (
                                                            <div>
                                                                <button onClick={() => handleBillCancelClick(Index)} className='w-7'>
                                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                                                </button>
                                                            </div>
                                                        ) : (''
                                                            // <div>
                                                            //     <button onClick={() => handleBillDeleteClick(Index)} className='w-7'>
                                                            //         <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                                                            //     </button>
                                                            // </div>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                            {billRows?.length > 0 && billRows.map((row, index) => (
                                                <tr key={index}>
                                                    <td style={Td}>{row.billValue || ''}</td>
                                                    <td style={Td}>{row.newNumberOfBills || ''}</td>
                                                    <td style={Td} className='w-40'>
                                                        <InputComponent
                                                            name='numberOfBills'
                                                            type="number"
                                                            value={row.numberOfBills || ''}
                                                            onChange={(e) => {
                                                                const value = e.target.value;
                                                                const updatedRows = billRows.map((r, i) =>
                                                                    i === index ? { ...r, numberOfBills: value } : r
                                                                );
                                                                setBillRows(updatedRows);
                                                                calculateBill1(index, updatedRows);
                                                            }}
                                                            className='w-40 h-8 text-[#70685a]'
                                                        />
                                                    </td>
                                                    <td style={Td}>{row.totalBillValue || ''}</td>
                                                </tr>
                                            ))}
                                            {inputBillShow ?
                                                <tr>
                                                    <td style={Td}>
                                                        <input
                                                            type="number"
                                                            name="billValue"
                                                            className='w-full border-[red]'
                                                            value={newBillRow.billValue || ''}
                                                            onChange={handleBillChange}
                                                        />
                                                    </td>
                                                    <td style={Td} >
                                                        <input
                                                            type="text"
                                                            name=" numberOfBills"
                                                            disabled={true}
                                                            className='w-20'
                                                            value={newBillRow.numberOfBills || ''}
                                                            onChange={handleBillChange}
                                                        />
                                                    </td>
                                                    <td style={Td} >
                                                        <input
                                                            type="text"
                                                            name="totalBillValue"
                                                            disabled={true}
                                                            className='w-full'
                                                            value={newBillRow.totalBillValue || ''}
                                                            onChange={handleBillChange}

                                                        />
                                                    </td>
                                                </tr> : ''}
                                        </tbody>
                                    </table>
                                    <div className='flex justify-center mt-2'>
                                        <button type="button" onClick={handleAddBillRow}
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

export default CommemorativeCoinExchange;
