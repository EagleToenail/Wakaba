import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import LabelComponent from '../../Components/Common/LabelComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import InputComponent from '../../Components/Common/InputComponent';
import DateAndTime from '../../Components/Common/PickData';
import axios from 'axios';

const CommemorativeCoinchangeDetail = () => {
    const { id } = useParams();
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

    const initialHistoryData = (data) => {
        const coinIds = data.coinids.split(',').map(Number);
        const coinValues = data.coinvalues.split(',').map(Number);
        const billIds = data.billids.split(',').map(Number);
        const billValues = data.billvalues.split(',').map(Number);
            fetchCoinData(coinIds,coinValues);
            fetchBillData(billIds,billValues);

        setOtherData({
            ...otherData,
            bank_name: data.bank_name,
            exchange_date:data.exchange_date,
            description:data.description
        })
}
    //fetch sheet data
    useEffect(() => {
        const fetchData = async () => {

            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const response = await axios.post(`${wakabaBaseUrl}/coinandbillhistorydetail`,{historyId:id});
            initialHistoryData(response.data);
        };
        fetchData();
    }, [id, initialHistoryData]);
    //dynamic Table operation
    //------------Sheet---------------------------------
    const [coinRows, setCoinRows] = useState([]);
    const [totalNumberOfCoin, setTotalNumberofCoin] = useState('');
    const [totalCoinValue, setTotalCoinValue] = useState('');

    //fetch sheet data
    const fetchCoinData = async (ids,values) => {

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        const response = await axios.get(`${wakabaBaseUrl}/coin`);
        initialCoinData(response.data,ids,values);
    };
    // clear other three data 
    const initialCoinData = (coinData,ids,values) => {
        const objData = coinData.filter(obj => ids.includes(obj.id));
        const updatedData = objData.map((data,Index) => ({
            ...data,
            numberOfCoins: values[Index],
            totalCoinValue: parseInt(data.coinValue) * parseInt( values[Index])
        })); 
        setCoinRows(updatedData);
    }

    //calculate second table
    useEffect(() => {
        const calculateCoinTotal = () => {
            // Calculate the sum
            const totalnumberofCoin = coinRows.reduce((sum, item) => {
                if (item.coinValue) {
                    return parseInt(sum) + parseInt(item.numberOfCoins);
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
        calculateCoinTotal();
    }, [coinRows]);
    //-------------------------------------bill----------------------------------------------
    const [billRows, setBillRows] = useState([]);
    const [totalNumberOfBill, setTotalNumberofBill] = useState('');
    const [totalBillValue, setTotalBillValue] = useState('');

    //fetch sheet data
    const fetchBillData = async (ids,values) => {

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        const response = await axios.get(`${wakabaBaseUrl}/bill`);
        initialBillData(response.data,ids,values);
    };
    // clear other three data 
    const initialBillData = (billData,ids,values) => {
        const objData = billData.filter(obj => ids.includes(obj.id));
        const updatedData = objData.map((data,Index) => ({
            ...data,
            numberOfBills: values[Index],
            totalBillValue: parseInt(data.billValue) * parseInt( values[Index])
        })); 
        setBillRows(updatedData);
    }

    //calculate second table
    useEffect(() => {
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
                                        </div>
                                    </div>
                                    <div className='mt-2 flex flex-col justify-center'><InputComponent readOnly className='w-60 h-10' name='bank_name' value={otherData.bank_name || ''} placeholder={'~~~'}/></div>
                                </div>
                            </div>
                        </div>
                        <div className='commemorative-coin-one flex justify-between gap-5 mt-5 w-[20%]'>
                            <div className='text-xl font-bold text-[#70685a] cursor-pointer pt-2' style={{ visibility: 'hidden' }}>PDF</div>
                            <ButtonComponent children={'戻る'} className='h-11 !text-xl !px-10' />
                            <div className='text-xl font-bold text-[#70685a] cursor-pointer pt-2'>PDF</div>
                        </div>
                        <div className='commemorative-coin-one w-[40%] flex text-left pt-5'>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div>
                            <div className='flex w-full'>
                                <InputComponent name='description' readOnly={true} value={otherData.description || ''} onChange={handleOtherDataChange} placeholder='~~~日に、~~~銀行に、~~円 を両替に持っていきます。' className='!w-full font-bold' />
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
                                                <th >{totalNumberOfCoin || ''}</th>
                                                <th >¥{(parseInt(totalCoinValue || 0)).toLocaleString()}</th>
                                                <th ></th>
                                                <th ></th>
                                            </tr>
                                            <tr>
                                                <th >額面(円) </th>
                                                <th >数</th>
                                                <th >小計1(￥)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {coinRows?.length > 0 && coinRows.map((row, Index) => (
                                                <tr key={Index} >
                                                    <td style={Td}>{row.coinValue || ''}</td>
                                                    <td style={Td}>{row.numberOfCoins || ''}
                                                    </td>
                                                    <td style={Td} className='text-right'>
                                                        {(parseInt(row.totalCoinValue || 0)).toLocaleString()}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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
                                                <th >{totalNumberOfBill || ''}</th>
                                                <th >¥{(parseInt(totalBillValue || 0)).toLocaleString()}</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th >額面 </th>
                                                <th >数</th>
                                                <th >小計1</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {billRows?.length > 0 && billRows.map((row, Index) => (
                                                <tr key={Index} >
                                                    <td style={Td}>
                                                        {row.billValue || ''}
                                                    </td>
                                                    <td style={Td}>
                                                        {row.numberOfBills || ''}
                                                    </td>
                                                    <td style={Td} className='text-right'>
                                                        {(parseInt(row.totalBillValue || 0)).toLocaleString()}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommemorativeCoinchangeDetail;