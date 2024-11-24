import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import LabelComponent from '../../Components/Common/LabelComponent';
import InputComponent from '../../Components/Common/InputComponent';
import DateAndTime from '../../Components/Common/PickData';
import axios from 'axios';
import { useSelector} from 'react-redux';

const StampRelatedOutventoryApplicationFormNew1 = () => {
    // const title = 'タイトルタイトル';
    const navigate = useNavigate();

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
        whiteSpace: 'nowrap'
    };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace: 'nowrap'
    };

    const data = useSelector(state => state.data);
    const stampData = data.outboundStamp;
    // console.log('receive data',stampData)
    //dynamic Table operation
    //------------Sheet---------------------------------
    const [sheetRows, setSheetRows] = useState([]);
    const [totalNumberOfSheet1, setTotalNumberofSheet1 ] = useState('');
    const [totalNumberOfSheet2, setTotalNumberofSheet2 ] = useState('');
    const [totalFaceValue1, setFaceValue1 ] = useState('');
    const [totalFaceValue2, setFacevalue2 ] = useState('');

    //fetch sheet data
    useEffect(() => {
        const fetchData = async () => {
    
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const response = await axios.get(`${wakabaBaseUrl}/stampsheet`);
            initialSheetData(response.data);
            // console.log('setSheetRows',response.data);
        };
        fetchData();
        }, []);
    // clear other three data 
    const initialSheetData =(sheetData) => {
        const idsArray = stampData.checkedValues1;
        if(idsArray?.length>0) {
            const objData = sheetData.filter(obj => idsArray.includes(obj.id.toString()));
            const updatedData = objData.map(data => ({
                ...data,
                numberOfSheets: 0,
                totalFaceValue: 0,
                purchasePrice: 0, // Replace with your desired value or logic
            })); 
            setSheetRows(updatedData);
        }
    }  

    const calculateSheet = (index,data) => {
        if (index !== undefined) {
            const sheetValue = parseInt(data[index].sheetValue) || 0;
            const numberofsheets = parseInt(data[index].numberOfSheets) || 0;
            const calculatedProduct = sheetValue * numberofsheets;
            const updatedRows = data.map((r, i) => 
                i === index ? { ...r, totalFaceValue: calculatedProduct} : r
            );
            setSheetRows(updatedRows);
        }
    };

    //calculate second table
    const calculateSheetTotal = ()=>{
        // Calculate the sum
        const totalnumberofsheet1 = sheetRows.reduce((sum, item) => {
            if (item.stampValue >= 50) { 
                return parseInt(sum) + parseInt(item.numberOfSheets);
            }
            return sum; 
        }, 0);
        setTotalNumberofSheet1(totalnumberofsheet1);
        const totalnumberofsheet2 = sheetRows.reduce((sum, item) => {
            if (item.stampValue < 50) { 
                return parseInt(sum) + parseInt(item.numberOfSheets);
            }
            return sum; 
        }, 0);
        // console.log('sum of totalnumberofsheet',totalnumberofsheet2)
        setTotalNumberofSheet2(totalnumberofsheet2);
        const facevalue1 = sheetRows.reduce((sum, item) => {
            if (item.stampValue >= 50) { 
                return parseInt(sum) + parseInt(item.totalFaceValue);
            }
            return sum; 
        }, 0);
        setFaceValue1(facevalue1);
        const facevalue2 = sheetRows.reduce((sum, item) => {
            if (item.stampValue < 50) { 
                return parseInt(sum) + parseInt(item.totalFaceValue);
            }
            return sum; 
        }, 0);
        setFacevalue2(facevalue2);
    }
    useEffect(() => {
        calculateSheetTotal();
    }, [sheetRows]);
    //------------pasting---------------------------------
    const [pastingRows, setPastingRows] = useState([]);
    const [totalNumberOfPasting1, setTotalNumberofPasting1 ] = useState('');
    const [totalNumberOfPasting2, setTotalNumberofPasting2 ] = useState('');
    const [totalPastingFaceValue1, setPastingFaceValue1 ] = useState('');
    const [totalPastingFaceValue2, setPastingFacevalue2 ] = useState('');

    //fetch sheet data
    useEffect(() => {
        const fetchData = async () => {
    
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const response = await axios.get(`${wakabaBaseUrl}/stamppasting`);
            initialPastingData(response.data);
            //console.log('setPastingRows',response.data);
        };
        fetchData();
        }, []);
    // clear other three data 
    const initialPastingData =(pastingData) => {
        const idsArray = stampData.checkedValues2;
        if(idsArray?.length>0) {
            const objData = pastingData.filter(obj => idsArray.includes(obj.id.toString()));
            const updatedData = objData.map(data => ({
                ...data,
                numberOfMounts: 0,
                totalFaceValue: 0,
                purchasePrice: 0, // Replace with your desired value or logic
            })); 
            setPastingRows(updatedData);
        }
        // console.log('updated data',updatedData)
    } 

    const calculatePasting = (index,data) => {
        if (index !== undefined) {
            const pastingValue = parseInt(data[index].mountValue) || 0;
            const numberOfMounts = parseInt(data[index].numberOfMounts) || 0;
            const calculatedProduct = pastingValue * numberOfMounts;
            const updatedRows = data.map((r, i) => 
                i === index ? { ...r, totalFaceValue: calculatedProduct} : r
            );
            setPastingRows(updatedRows);
        }
    };

    //calculate second table
    const calculatePastingTotal = ()=>{
    // Calculate the sum
        const totalnumberofsheet1 = pastingRows.reduce((sum, item) => {
            if (item.stampValue >= 50) { 
                return parseInt(sum) + parseInt(item.numberOfMounts);
            }
            return sum; 
        }, 0);
        setTotalNumberofPasting1(totalnumberofsheet1);
        const totalnumberofsheet2 = pastingRows.reduce((sum, item) => {
            if (item.stampValue < 50) { 
                return parseInt(sum) + parseInt(item.numberOfMounts);
            }
            return sum; 
        }, 0);
        // console.log('sum of totalnumberofsheet',totalnumberofsheet2)
        setTotalNumberofPasting2(totalnumberofsheet2);
        const facevalue1 = pastingRows.reduce((sum, item) => {
            if (item.stampValue >= 50) { 
                return parseInt(sum) + parseInt(item.totalFaceValue);
            }
            return sum; 
        }, 0);
        setPastingFaceValue1(facevalue1);
        const facevalue2 = pastingRows.reduce((sum, item) => {
            if (item.stampValue < 50) { 
                return parseInt(sum) + parseInt(item.totalFaceValue);
            }
            return sum; 
        }, 0);
        setPastingFacevalue2(facevalue2);
    }
    useEffect(() => {
        calculatePastingTotal();
    }, [pastingRows]);
    //------------Rose---------------------------------
    const [roseRows, setRoseRows] = useState([]);
    const [totalNumberOfRose1, setTotalNumberofRose1 ] = useState('');
    const [totalNumberOfRose2, setTotalNumberofRose2 ] = useState('');
    const [totalRoseFaceValue1, setRoseFaceValue1 ] = useState('');
    const [totalRoseFaceValue2, setRoseFacevalue2 ] = useState('');
    //fetch Rose data
    useEffect(() => {
        const fetchData = async () => {
  
          const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
          if (!wakabaBaseUrl) {
              throw new Error('API base URL is not defined');
          }
            const response = await axios.get(`${wakabaBaseUrl}/stamprose`);
            initialRoseData(response.data);
        };
        fetchData();
      }, []);
    // clear other three data 
    const initialRoseData =(roseData) => {
        const idsArray = stampData.checkedValues3;
        if(idsArray?.length>0) {
            const objData = roseData.filter(obj => idsArray.includes(obj.id.toString()));
            const updatedData = objData.map(data => ({
                ...data,
                numberOfSheets: 0,
                totalFaceValue: 0,
                purchasePrice: 0, // Replace with your desired value or logic
            })); 
            setRoseRows(updatedData);
        }
    }

    const calculateRose = (index,data) => {
        if (index !== undefined) {
            const stampValue = parseInt(data[index].stampValue) || 0;
            const numberofsheets = parseInt(data[index].numberOfSheets) || 0;
            const calculatedProduct = stampValue * numberofsheets;
            const updatedRows = data.map((r, i) => 
                i === index ? { ...r, totalFaceValue: calculatedProduct} : r
            );
            setRoseRows(updatedRows);
        }
    };

    const calculateRoseTotal = ()=>{
        // Calculate the sum
        const totalnumberofrose1 = roseRows.reduce((sum, item) => {
            if (item.stampValue >= 50) { 
                return parseInt(sum) + parseInt(item.numberOfSheets);
            }
            return sum; 
        }, 0);
        setTotalNumberofRose1(totalnumberofrose1);
        const totalnumberofrose2 = roseRows.reduce((sum, item) => {
            if (item.stampValue < 50) { 
                return parseInt(sum) + parseInt(item.numberOfSheets);
            }
            return sum; 
        }, 0);
        setTotalNumberofRose2(totalnumberofrose2);
        const rosefacevalue1 = roseRows.reduce((sum, item) => {
            if (item.stampValue >= 50) { 
                return parseInt(sum) + parseInt(item.totalFaceValue);
            }
            return sum; 
        }, 0);
        setRoseFaceValue1(rosefacevalue1);
        const rosefacevalue2 = roseRows.reduce((sum, item) => {
            if (item.stampValue < 50) { 
                return parseInt(sum) + parseInt(item.totalFaceValue);
            }
            return sum; 
        }, 0);
        setRoseFacevalue2(rosefacevalue2);
    }
    useEffect(() => {
        calculateRoseTotal();
    }, [roseRows]);    
    //------------Pack---------------------------------
    const [packRows, setPackRows] = useState([]);
    const [totalNumberOfPack1, setTotalNumberofPack1 ] = useState('');
    const [totalNumberOfPack2, setTotalNumberofPack2 ] = useState('');
    const [totalPackFaceValue1, setPackFaceValue1 ] = useState('');
    const [totalPackFaceValue2, setPackFacevalue2 ] = useState('');
    //fetch Rose data
    useEffect(() => {
        const fetchData = async () => {
    
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const response = await axios.get(`${wakabaBaseUrl}/stamppack`);
            initialPackData(response.data);
        };
        fetchData();
        }, []);
    // clear other three data 
    const initialPackData =(packData) => {
        const idsArray = stampData.checkedValues4;
        if(idsArray?.length>0) {
            const objData = packData.filter(obj => idsArray.includes(obj.id.toString()));
            const updatedData = objData.map(data => ({
                ...data,
                numberOfSheets: 0,
                totalFaceValue: 0,
                purchasePrice: 0, // Replace with your desired value or logic
            })); 
            setPackRows(updatedData);
        }
    }

    const calculatePack = (index,data) => {
        if (index !== undefined) {
            const stampValue = parseInt(data[index].stampValue) || 0;
            const numberofsheets = parseInt(data[index].numberOfSheets) || 0;
            const calculatedProduct = stampValue * numberofsheets;
            const updatedRows = data.map((r, i) => 
                i === index ? { ...r, totalFaceValue: calculatedProduct} : r
            );
            setPackRows(updatedRows);
        }
    };
    //calculate second table
    const calculatePackTotal = ()=>{
        // Calculate the sum
        const totalnumberofpack1 = packRows.reduce((sum, item) => {
            if (item.stampValue >= 50) { 
                return parseInt(sum) + parseInt(item.numberOfSheets);
            }
            return sum; 
        }, 0);
        setTotalNumberofPack1(totalnumberofpack1);
        const totalnumberofpack2 = packRows.reduce((sum, item) => {
            if (item.stampValue < 50) { 
                return parseInt(sum) + parseInt(item.numberOfSheets);
            }
            return sum; 
        }, 0);
        setTotalNumberofPack2(totalnumberofpack2);
        const packfacevalue1 = packRows.reduce((sum, item) => {
            if (item.stampValue >= 50) { 
                return parseInt(sum) + parseInt(item.totalFaceValue);
            }
            return sum; 
        }, 0);
        setPackFaceValue1(packfacevalue1);
        const packfacevalue2 = packRows.reduce((sum, item) => {
            if (item.stampValue < 50) { 
                return parseInt(sum) + parseInt(item.totalFaceValue);
            }
            return sum; 
        }, 0);
        setPackFacevalue2(packfacevalue2);
    }
    useEffect(() => {
        calculatePackTotal();
    }, [packRows]);
    //------------Card---------------------------------
    const [cardRows, setCardRows] = useState([]);
    const [totalNumberOfCard1, setTotalNumberofCard1 ] = useState('');
    const [totalNumberOfCard2, setTotalNumberofCard2 ] = useState('');
    const [totalCardFaceValue1, setCardFaceValue1 ] = useState('');
    const [totalCardFaceValue2, setCardFacevalue2 ] = useState('');
    //fetch Rose data
    useEffect(() => {
    const fetchData = async () => {

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        const response = await axios.get(`${wakabaBaseUrl}/stampcard`);
        initialCardData(response.data);
    };
    fetchData();
    }, []); 

    // clear other three data 
    const initialCardData =(cardData) => {
        const idsArray = stampData.checkedValues5;
        if(idsArray?.length>0) {
            const objData = cardData.filter(obj => idsArray.includes(obj.id.toString()));
            const updatedData = objData.map(data => ({
                ...data,
                numberOfSheets: 0,
                totalFaceValue: 0,
                purchasePrice: 0, // Replace with your desired value or logic
            })); 
            setCardRows(updatedData);
        }
    }

    const calculateCard = (index,data) => {
        if (index !== undefined) {
            const stampValue = parseInt(data[index].stampValue) || 0;
            const numberofsheets = parseInt(data[index].numberOfSheets) || 0;
            const calculatedProduct = stampValue * numberofsheets;
            const updatedRows = data.map((r, i) => 
                i === index ? { ...r, totalFaceValue: calculatedProduct} : r
            );
            setCardRows(updatedRows);
        }
    };

    //calculate second table
    const calculateCardTotal = ()=>{
        // Calculate the sum
        const totalnumberofcard1 = cardRows.reduce((sum, item) => {
            if (item.stampValue >= 50) { 
                return parseInt(sum) + parseInt(item.numberOfSheets);
            }
            return sum; 
        }, 0);
        setTotalNumberofCard1(totalnumberofcard1);
        const totalnumberofcard2 = cardRows.reduce((sum, item) => {
            if (item.stampValue < 50) { 
                return parseInt(sum) + parseInt(item.numberOfSheets);
            }
            return sum; 
        }, 0);
        setTotalNumberofCard2(totalnumberofcard2);
        const cardfacevalue1 = cardRows.reduce((sum, item) => {
            if (item.stampValue >= 50) { 
                return parseInt(sum) + parseInt(item.totalFaceValue);
            }
            return sum; 
        }, 0);
        setCardFaceValue1(cardfacevalue1);
        const cardfacevalue2 = cardRows.reduce((sum, item) => {
            if (item.stampValue < 50) { 
                return parseInt(sum) + parseInt(item.totalFaceValue);
            }
            return sum; 
        }, 0);
        setCardFacevalue2(cardfacevalue2);
    }
    useEffect(() => {
        calculateCardTotal();
    }, [cardRows]);
    //------------------------------------------------- 

    const [reason, setReason] = useState('');
    const handleReasonChange = (event) => {
        setReason(event.target.value);
    }
    //got to the stamp inventory list page
    const gotoStampsInventoryList = ()=> {
        navigate('/stamprelatedinventorylist')
    }
    const [userData, setUserData] = useState([]);
    const userId = localStorage.getItem('userId');
    useEffect(() => {
  
      const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
  
      if (!wakabaBaseUrl) {
        throw new Error('API base URL is not defined');
      }
  
      axios.post(`${wakabaBaseUrl}/user/getUserById`, { userId })
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the customer data!", error);
        });
    }, [userId]);

    const now = new Date();

    // Format the date as YYYY-MM-DD
    const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Tokyo' };
    const currentDay = new Intl.DateTimeFormat('ja-JP', optionsDate).format(now).replace(/\//g, '-');
    const [totalNumberOfStamp, setTotalNumberOfStamp] = useState('');
    const [totalStampFaceValue, setTotalStampFaceValue] = useState('');
    const calculateTotalResult =()=>{
        setTotalNumberOfStamp(parseInt(totalNumberOfSheet1 || 0) + parseInt(totalNumberOfSheet2 || 0) 
         +parseInt(totalNumberOfPasting1 || 0) + parseInt(totalNumberOfPasting2 || 0)
         +parseInt(totalNumberOfRose1 || 0) + parseInt(totalNumberOfRose2 || 0)
         +parseInt(totalNumberOfPack1 || 0) + parseInt(totalNumberOfPack2 || 0)
         +parseInt(totalNumberOfCard1 || 0) + parseInt(totalNumberOfCard2 || 0)
        );
        setTotalStampFaceValue(parseInt(totalFaceValue1 || 0) + parseInt(totalFaceValue2 || 0) 
         +parseInt(totalPastingFaceValue1 || 0) + parseInt(totalPastingFaceValue2 || 0)
         +parseInt(totalRoseFaceValue1 || 0) + parseInt(totalRoseFaceValue2 || 0)
         +parseInt(totalPackFaceValue1 || 0) + parseInt(totalPackFaceValue2 || 0)
         +parseInt(totalCardFaceValue1 || 0) + parseInt(totalCardFaceValue2 || 0)
        );
    }
    useEffect(() => {
        calculateTotalResult();
    }, [totalNumberOfSheet1,totalNumberOfSheet2,totalNumberOfRose1,totalNumberOfRose2,totalNumberOfPack1,totalNumberOfPack2,totalNumberOfCard1,totalNumberOfCard2
        ,totalFaceValue1,totalFaceValue2,totalRoseFaceValue1,totalRoseFaceValue2,totalPackFaceValue1,totalPackFaceValue2,totalCardFaceValue1,totalCardFaceValue2
    ]);
    //---------------------- send data--------------------
    const sendStampsOutboundData = async() => {  
        const sheetFilteredArray = sheetRows.filter(obj => obj.numberOfSheets !== 0);
        const sheetIds = sheetFilteredArray.map(obj => obj.id);
        const sheetValues = sheetFilteredArray.map(obj => obj.numberOfSheets);

        const pastingFilteredArray = pastingRows.filter(obj => obj.numberOfMounts !== 0);
        const pastingIds = pastingFilteredArray.map(obj => obj.id);
        const pastingValues = pastingFilteredArray.map(obj => obj.numberOfMounts);

        const roseFilteredArray = roseRows.filter(obj => obj.numberOfSheets !== 0);
        const roseIds = roseFilteredArray.map(obj => obj.id);
        const roseValues = roseFilteredArray.map(obj => obj.numberOfSheets);

        const packFilteredArray = packRows.filter(obj => obj.numberOfSheets !== 0);
        const packIds = packFilteredArray.map(obj => obj.id);
        const packValues = packFilteredArray.map(obj => obj.numberOfSheets);

        const cardFilteredArray = cardRows.filter(obj => obj.numberOfSheets !== 0);
        const cardIds = cardFilteredArray.map(obj => obj.id);
        const cardValues = cardFilteredArray.map(obj => obj.numberOfSheets);

        const username = userData.username;

        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const outboundData = {currentDay,username,reason,sheetIds,sheetValues,pastingIds,pastingValues,roseIds,roseValues,packIds,packValues,cardIds,cardValues,
                totalFaceValue1,totalFaceValue2,totalPastingFaceValue1,totalPastingFaceValue2,totalRoseFaceValue1,totalRoseFaceValue2,totalPackFaceValue1,totalPackFaceValue2,totalCardFaceValue1,totalCardFaceValue2,
            }
            // console.log(inboundData)
            await axios.post(`${wakabaBaseUrl}/stampoutbound/create`, outboundData)
                .then(response => {
                    // console.log('success',response.data)
                    navigate('/stamprelatedinventorylist');
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                }); // Send newRow data to the server
        } catch (error) {
            console.error('Error adding row:', error);
        }

    }
//----------------------------------Create Modal--------------------------------------------
const [outBound, setOutBound] = useState({
    letterPack: { pack1: 370, pack2: 520, pack11: 0, pack22: 0 },
    looseStamps: { stamp1: 0, stamp2: 0, stamp3: 0, stamp4: 0, stamp5: 0, stamp6: 0, stamp7: 0 },
  });

  const handleOutBoundChange = (category, item, value) => {
    setOutBound(prevState => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [item]: value,
      },
    }));
  };

  const [isShow, setIsShow] = useState(false);
  const showModal = () => {
    setIsShow(true);
  }
  const onClose = () => {
    setIsShow(false)
  }

//------------------------------------------------------------------------------

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />
            <div className=" flex flex-col items-center justify-center px-4">
                <div className="w-full">
                    <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">日本の切手・ハガキ・レターパック 出庫申請</h2>
                    <div className='flex justify-evenly mt-5 '>
                        <div className='text-center text-[15px]'><u><LabelComponent onClick={gotoStampsInventoryList} className="cursor-pointer" value="在庫一覧へ戻る" /></u></div>
                        <div>
                            < button type="button" onClick={sendStampsOutboundData} className="w-full px-5 py-3 font-bold tracking-wide rounded-lg justify-center text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                            出庫を申請
                            </button>
                        </div>
                        <div className='text-center text-[15px]'><u><LabelComponent className="cursor-pointer" value="キャンセル" /></u></div>

                    </div>
                    <div className='flex mt-5'>
                        <div className='w-[30%]'>
                            <div><LabelComponent value="定型文" className='pl-5 font-bold text-right' /></div>
                            <div className='mt-5'><LabelComponent value="用途/理由他" className='pl-5 font-bold text-right' /></div>
                        </div>
                        <div className='stamp-inbound w-[40%]'>
                            <div className='flex flex-col justify-center'><LabelComponent value="OOOOOOOOOOOOOOOO" className='pl-5 !text-[20px]' /></div>
                            <div className="p-4">
                                {/* Text area */}
                                <textarea
                                    value={reason}
                                    onChange={handleReasonChange}
                                    rows="4"
                                    cols="50"
                                    placeholder=""
                                    className="border border-[#70685a] rounded p-2 w-full"
                                />
                            </div>
                        </div>
                    </div>
                    {/* ================= mainpart ================*/}
                    <div className=' stamp-related-inventory-list w-full flex justify-center'>
                        <div className='w-full flex justify-center' style={{ maxWidth: '50em' }}>
                            <div className='w-full flex gap-5' >
                                <table className=' text-center w-full' style={Table}>
                                    <thead>
                                        <tr>
                                            <th style={Th}></th>
                                            <th style={Th}>額面</th>
                                            <th style={Th}>枚数</th>
                                            <th style={Th}>小計</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { sheetRows?.length >0 && sheetRows.map((data, Index) => (
                                            <tr key={Index}>
                                                <td style={Td}>切手シート</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(data.sheetValue || 0)).toLocaleString()}</td>
                                                <td style={Td} className='w-40'>
                                                    <InputComponent
                                                        name='numberOfSheets'
                                                        type="number"
                                                        value={data.numberOfSheets || ''}
                                                        onChange={(e) => {
                                                            const value = e.target.value;
                                                            const updatedRows = sheetRows.map((r, i) => 
                                                                i === Index ? { ...r, numberOfSheets: value } : r
                                                            );
                                                            setSheetRows(updatedRows);
                                                            calculateSheet(Index,updatedRows);
                                                        }}
                                                        className='w-40 h-8 text-[#70685a]'
                                                    />
                                                </td>
                                                <td style={Td} className='text-right'>￥{(parseInt(data.totalFaceValue || 0)).toLocaleString()}</td>
                                            </tr>
                                        ))}
                                        { pastingRows?.length >0 && pastingRows.map((data, Index) => (
                                            <tr key={Index}>
                                                <td style={Td}>切手台紙貼り</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(data.mountValue || 0)).toLocaleString()}</td>
                                                <td style={Td}>
                                                    <InputComponent
                                                        name='numberOfMounts'
                                                        type="number"
                                                        value={data.numberOfMounts || ''}
                                                        onChange={(e) => {
                                                            const value = e.target.value;
                                                            const updatedRows = pastingRows.map((r, i) => 
                                                                i === Index ? { ...r, numberOfMounts: value } : r
                                                            );
                                                            setPastingRows(updatedRows);
                                                            calculatePasting(Index,updatedRows);
                                                        }}
                                                        className='w-full h-8 text-[#70685a]'
                                                    />
                                                </td>
                                                <td style={Td} className='text-right'>￥{(parseInt(data.totalFaceValue || 0)).toLocaleString()}</td>
                                            </tr>
                                        ))}
                                        { roseRows?.length >0 && roseRows.map((data, Index) => (
                                            <tr key={Index}>
                                                <td style={Td}>切手バラ</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(data.stampValue || 0)).toLocaleString()}</td>
                                                <td style={Td}>
                                                    <InputComponent
                                                        name='numberOfSheets'
                                                        type="number"
                                                        value={data.numberOfSheets || ''}
                                                        onChange={(e) => {
                                                            const value = e.target.value;
                                                            const updatedRows = roseRows.map((r, i) => 
                                                                i === Index ? { ...r, numberOfSheets: value } : r
                                                            );
                                                            setRoseRows(updatedRows);
                                                            calculateRose(Index,updatedRows);
                                                        }}
                                                        className='w-full h-8 text-[#70685a]'
                                                    />
                                                </td>
                                                <td style={Td} className='text-right'>￥{(parseInt(data.totalFaceValue || 0)).toLocaleString()}</td>
                                            </tr>
                                        ))}
                                        { packRows?.length >0 && packRows.map((data, Index) => (
                                            <tr key={Index}>
                                                <td style={Td}>レ夕一パック</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(data.stampValue || 0)).toLocaleString()}</td>
                                                <td style={Td}>
                                                    <InputComponent
                                                        name='numberOfSheets'
                                                        type="number"
                                                        value={data.numberOfSheets || ''}
                                                        onChange={(e) => {
                                                            const value = e.target.value;
                                                            const updatedRows = packRows.map((r, i) => 
                                                                i === Index ? { ...r, numberOfSheets: value } : r
                                                            );
                                                            setPackRows(updatedRows);
                                                            calculatePack(Index,updatedRows);
                                                        }}
                                                        className='w-full h-8 text-[#70685a]'
                                                    />
                                                </td>
                                                <td style={Td} className='text-right'>￥{(parseInt(data.totalFaceValue || 0)).toLocaleString()}</td>
                                            </tr>
                                        ))}
                                        { cardRows?.length >0 && cardRows.map((data, Index) => (
                                            <tr key={Index}>
                                                <td style={Td}>ハガキ</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(data.stampValue || 0)).toLocaleString()}</td>
                                                <td style={Td}>
                                                    <InputComponent
                                                        name='numberOfSheets'
                                                        type="number"
                                                        value={data.numberOfSheets || ''}
                                                        onChange={(e) => {
                                                            const value = e.target.value;
                                                            const updatedRows = cardRows.map((r, i) => 
                                                                i === Index ? { ...r, numberOfSheets: value } : r
                                                            );
                                                            setCardRows(updatedRows);
                                                            calculateCard(Index,updatedRows);
                                                        }}
                                                        className='w-full h-8 text-[#70685a]'
                                                    />
                                                </td>
                                                <td style={Td} className='text-right'>￥{(parseInt(data.totalFaceValue || 0)).toLocaleString()}</td>
                                            </tr>
                                        ))}
                                        <tr className='bg-[#a2d97a]'>
                                            <td style={Td}></td>
                                            <td style={Td}>{''}</td>
                                            <td style={Td}>{totalNumberOfStamp}</td>
                                            <td style={Td} className='text-right'>￥{(parseInt(totalStampFaceValue || 0)).toLocaleString()}</td>
                                        </tr>
                                        <tr>
                                            <td style={Td}>手数料</td>
                                            <td style={Td}>{''}</td>
                                            <td style={Td}>1枚5円</td>
                                            <td style={Td} className='text-right'>￥{(5 * parseInt(totalNumberOfStamp || 0)).toLocaleString()}</td>
                                        </tr>
                                        <tr className='bg-[#a2d97a]'>
                                            <td style={Td}>合計金額</td>
                                            <td style={Td}>{''}</td>
                                            <td style={Td}>{''}</td>
                                            <td style={Td} className='text-right'>￥{(parseInt(totalStampFaceValue || 0) - 5 * parseInt(totalNumberOfStamp || 0)).toLocaleString()}</td>
                                        </tr>
                                        <tr>
                                                <td style={Td}>レ夕一パック</td>
                                                <td style={Td}>
                                                    <InputComponent value={outBound.letterPack.pack2 || ''} 
                                                        onChange={e => handleOutBoundChange('letterPack', 'pack2', parseInt(e.target.value))} 
                                                        type='number' className='w-full !h-8 text-[#70685a]' />
                                                </td>
                                                <td style={Td}>
                                                    <InputComponent value={outBound.letterPack.pack22 || ''} 
                                                    onChange={e => handleOutBoundChange('letterPack', 'pack22', parseInt(e.target.value))} 
                                                    type='number' className='w-full !h-8 text-[#70685a]' />
                                                </td>
                                                <td style={Td} className='text-right'>￥{(parseInt(outBound.letterPack.pack2 || 0) * parseInt(outBound.letterPack.pack22 || 0)).toLocaleString()}</td>
                                            </tr>
                                            <tr className='bg-[#d9af7a]'>
                                                <td style={Td}>レターパ合計</td>
                                                <td style={Td}>合計枚数</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(outBound.letterPack.pack11 || 0) + parseInt(outBound.letterPack.pack22 || 0)).toLocaleString()}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(outBound.letterPack.pack1 || 0) * parseInt(outBound.letterPack.pack11 || 0) +
                                                                parseInt(outBound.letterPack.pack2 || 0) * parseInt(outBound.letterPack.pack22 || 0)).toLocaleString() }
                                                </td>
                                            </tr>
                                            <tr className='bg-[#d9af7a]'>
                                                <td style={Td}>切手お釣り</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(totalStampFaceValue || 0) - 5 * parseInt(totalNumberOfStamp || 0) -
                                                                parseInt(outBound.letterPack.pack1 || 0) * parseInt(outBound.letterPack.pack11 || 0) -
                                                                parseInt(outBound.letterPack.pack2 || 0) * parseInt(outBound.letterPack.pack22 || 0)).toLocaleString() }
                                                </td>
                                            </tr>
                                            {/* ------------------------second table------------------------- */}
                                            <tr className='h-6'>
                                                <td style={Td}>レ夕一パック</td>
                                                <td style={Td}>
                                                    <InputComponent value={outBound.letterPack.pack1 || ''} 
                                                        onChange={e => handleOutBoundChange('letterPack', 'pack1', parseInt(e.target.value))} 
                                                        type='number' className='w-full !h-8 text-[#70685a]' />
                                                </td>
                                                <td style={Td}>
                                                    <InputComponent value={outBound.letterPack.pack11 || ''} 
                                                    onChange={e => handleOutBoundChange('letterPack', 'pack11', parseInt(e.target.value))} 
                                                    type='number' className='w-full !h-8 text-[#70685a]' />
                                                </td>
                                                <td style={Td} className='text-right'>￥{(parseInt(outBound.letterPack.pack1 || 0) * parseInt(outBound.letterPack.pack11 || 0)).toLocaleString()}</td>
                                            </tr>
                                            <tr>
                                                <td style={Td}>レ夕一パック</td>
                                                <td style={Td}>
                                                    <InputComponent value={outBound.letterPack.pack2 || ''} 
                                                        onChange={e => handleOutBoundChange('letterPack', 'pack2', parseInt(e.target.value))} 
                                                        type='number' className='w-full !h-8 text-[#70685a]' />
                                                </td>
                                                <td style={Td}>
                                                    <InputComponent value={outBound.letterPack.pack22 || ''} 
                                                    onChange={e => handleOutBoundChange('letterPack', 'pack22', parseInt(e.target.value))} 
                                                    type='number' className='w-full !h-8 text-[#70685a]' />
                                                </td>
                                                <td style={Td} className='text-right'>￥{(parseInt(outBound.letterPack.pack2 || 0) * parseInt(outBound.letterPack.pack22 || 0)).toLocaleString()}</td>
                                            </tr>
                                            <tr className='bg-[#d9af7a]'>
                                                <td style={Td}>レターパ合計</td>
                                                <td style={Td}>合計枚数</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(outBound.letterPack.pack11) + parseInt(outBound.letterPack.pack22)).toLocaleString()}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(outBound.letterPack.pack1) * parseInt(outBound.letterPack.pack11) +
                                                                parseInt(outBound.letterPack.pack2) * parseInt(outBound.letterPack.pack22)).toLocaleString()}
                                                </td>
                                            </tr>
                                            <tr className='bg-[#d9af7a]'>
                                                <td style={Td}>切手お釣り</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(totalStampFaceValue) - 5 * parseInt(totalNumberOfStamp) -
                                                                parseInt(outBound.letterPack.pack1) * parseInt(outBound.letterPack.pack11) -
                                                                parseInt(outBound.letterPack.pack2) * parseInt(outBound.letterPack.pack22)).toLocaleString() }
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={Td}>返金切手</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td}>{}</td>
                                            </tr>
                                            <tr>
                                                <td style={Td}>500円切手</td>
                                                <td style={Td}>500</td>
                                                <td style={Td}>
                                                    <InputComponent value={outBound.looseStamps.stamp1 || ''} 
                                                    onChange={e => handleOutBoundChange('looseStamps', 'stamp1',  parseInt(e.target.value))} 
                                                    type='number' className='w-full !h-8 text-[#70685a]' />
                                                </td>
                                                <td style={Td} className='text-right'>￥{(500 * parseInt(outBound.looseStamps.stamp1 || 0)).toLocaleString()}</td>
                                            </tr>
                                            <tr>
                                                <td style={Td}>100円切手</td>
                                                <td style={Td}>100</td>
                                                <td style={Td}>
                                                    <InputComponent value={outBound.looseStamps.stamp2 || ''} 
                                                    onChange={e => handleOutBoundChange('looseStamps', 'stamp2',  parseInt(e.target.value))} 
                                                    type='number' className='w-full !h-8 text-[#70685a]' />
                                                </td>
                                                <td style={Td} className='text-right'>￥{(100 * parseInt(outBound.looseStamps.stamp2 || 0)).toLocaleString()}</td>
                                            </tr>
                                            <tr>
                                                <td style={Td}>50円切手</td>
                                                <td style={Td}>50</td>
                                                <td style={Td}>
                                                    <InputComponent value={outBound.looseStamps.stamp3 || ''} 
                                                    onChange={e => handleOutBoundChange('looseStamps', 'stamp3',  parseInt(e.target.value))} 
                                                    type='number' className='w-full !h-8 text-[#70685a]' />
                                                </td>
                                                <td style={Td} className='text-right'>￥{(50 * parseInt(outBound.looseStamps.stamp3 || 0)).toLocaleString()}</td>
                                            </tr>
                                            <tr>
                                                <td style={Td}>20円切手</td>
                                                <td style={Td}>20</td>
                                                <td style={Td}>
                                                    <InputComponent value={outBound.looseStamps.stamp4 || ''} 
                                                    onChange={e => handleOutBoundChange('looseStamps', 'stamp4',  parseInt(e.target.value))} 
                                                    type='number' className='w-full !h-8 text-[#70685a]' />
                                                </td>
                                                <td style={Td} className='text-right'>￥{(20 * parseInt(outBound.looseStamps.stamp4 || 0)).toLocaleString()}</td>
                                            </tr>
                                            <tr>
                                                <td style={Td}>10円切手</td>
                                                <td style={Td}>10</td>
                                                <td style={Td}>
                                                    <InputComponent value={outBound.looseStamps.stamp5 || ''} 
                                                    onChange={e => handleOutBoundChange('looseStamps', 'stamp5',  parseInt(e.target.value))} 
                                                    type='number' className='w-full !h-8 text-[#70685a]' />
                                                </td>
                                                <td style={Td} className='text-right'>￥{(10 * parseInt(outBound.looseStamps.stamp5 || 0)).toLocaleString()}</td>
                                            </tr>
                                            <tr>
                                                <td style={Td}>5円切手</td>
                                                <td style={Td}>5</td>
                                                <td style={Td}>
                                                    <InputComponent value={outBound.looseStamps.stamp6 || ''} 
                                                    onChange={e => handleOutBoundChange('looseStamps', 'stamp6',  parseInt(e.target.value))} 
                                                    type='number' className='w-full !h-8 text-[#70685a]' />
                                                </td>
                                                <td style={Td} className='text-right'>￥{(5 * parseInt(outBound.looseStamps.stamp6 || 0)).toLocaleString()}</td>
                                            </tr>
                                            <tr>
                                                <td style={Td}>1円切手</td>
                                                <td style={Td}>1</td>
                                                <td style={Td}>
                                                    <InputComponent value={outBound.looseStamps.stamp7 || ''} 
                                                    onChange={e => handleOutBoundChange('looseStamps', 'stamp7',  parseInt(e.target.value))} 
                                                    type='number' className='w-full !h-8 text-[#70685a]' />
                                                </td>
                                                <td style={Td} className='text-right'>￥{(parseInt(outBound.looseStamps.stamp7 || 0)).toLocaleString()}</td>
                                            </tr>
                                            <tr className='bg-[#d9af7a]'>
                                                <td style={Td}>合計返金切手</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(outBound.looseStamps.stamp1 || 0) * 500 + parseInt(outBound.looseStamps.stamp2 || 0) * 100 +
                                                parseInt(outBound.looseStamps.stamp3 || 0) * 50 + parseInt(outBound.looseStamps.stamp4 || 0) * 20 +
                                                parseInt(outBound.looseStamps.stamp5 || 0) * 10 + parseInt(outBound.looseStamps.stamp6 || 0) * 5 +
                                                parseInt(outBound.looseStamps.stamp7 || 0)).toLocaleString()}</td>
                                            </tr>
                                            <tr className='bg-[#d9af7a]'>
                                                <td style={Td}>残差異</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(totalStampFaceValue || 0) - 5 * parseInt(totalNumberOfStamp || 0) - 
                                                (parseInt(outBound.looseStamps.stamp1 || 0) * 500 + parseInt(outBound.looseStamps.stamp2 || 0) * 100 +
                                                parseInt(outBound.looseStamps.stamp3 || 0) * 50 + parseInt(outBound.looseStamps.stamp4 || 0) * 20 +
                                                parseInt(outBound.looseStamps.stamp5 || 0) * 10 + parseInt(outBound.looseStamps.stamp6 || 0) * 5 +
                                                parseInt(outBound.looseStamps.stamp7 || 0))).toLocaleString()}</td>
                                            </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                    {/* ========================================== */}
                </div>
            </div>
        </>
    );
};

export default StampRelatedOutventoryApplicationFormNew1;