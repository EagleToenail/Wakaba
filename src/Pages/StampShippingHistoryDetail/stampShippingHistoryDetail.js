import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
// import StampSheet from '../../Assets/img/stampsheet.png'
// import LetterPack from '../../Assets/img/letterpack.png'
// import StampRose from '../../Assets/img/stamprose.png'
// import PostCard from '../../Assets/img/postcard.png'
// import LabelComponent from '../../Components/Common/LabelComponent';
import InputComponent from '../../Components/Common/InputComponent';
import DateAndTime from '../../Components/Common/PickData';
import axios from 'axios';

const StampShippingDetail = () => {
    // const title = 'タイトルタイトル';
    const { id } = useParams();
    const navigate = useNavigate();
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

    const [inorout, setInOrOut] = useState('');
    const initialHistoryData = (data) => {
        if(data.stamp_ids?.length>0){
            const arrayIds = data.stamp_ids.split(',').map(Number);
            const arrayValues = data.stamp_numbers.split(',').map(Number);
            setInOrOut(data.inorout);
            if( data.stamp_type === '切手シート') {
                fetchSheetData(arrayIds,arrayValues)
            }
            if( data.stamp_type === '切手台紙貼り') {
                fetchPastingData(arrayIds,arrayValues)
            }
            if( data.stamp_type === '切手バラ') {
                fetchRoseData(arrayIds,arrayValues)
            }
            if( data.stamp_type === 'レ夕一パック') {
                fetchPackData(arrayIds,arrayValues)
            }
            if( data.stamp_type === 'ハガキ') {
                fetchCardData(arrayIds,arrayValues)
            }
        }
        // console.log('history',data);
    }
        //fetch history data
    //fetch sheet data
    useEffect(() => {
        const fetchData = async () => {

            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const response = await axios.post(`${wakabaBaseUrl}/stampshippinghistorydetail`,{historyId:id});
            initialHistoryData(response.data);
        };
        fetchData();
    }, [id,initialHistoryData]);
    //dynamic Table operation
    //------------Sheet---------------------------------
    const [sheetRows, setSheetRows] = useState([]);
    const [totalNumberOfSheet1, setTotalNumberofSheet1] = useState('');
    const [totalNumberOfSheet2, setTotalNumberofSheet2] = useState('');
    const [totalFaceValue1, setFaceValue1] = useState('');
    const [totalFaceValue2, setFacevalue2] = useState('');

    //fetch sheet data
    const fetchSheetData = async (ids,values) => {

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        const response = await axios.get(`${wakabaBaseUrl}/stampsheet`);
        initialSheetData(response.data,ids,values);
    };

    // clear other three data 
    const initialSheetData = (sheetData,ids,values) => {
        const objData = sheetData.filter(obj => ids.includes(obj.id));
        const updatedData = objData.map((data,Index) => ({
            ...data,
            numberOfSheets: values[Index],
            totalFaceValue: parseInt(values[Index]) * parseInt(data.sheetValue),
        })); 
        setSheetRows(updatedData);
    }

    //calculate second table
    const calculateSheetTotal = () => {
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
    const [totalNumberOfPasting1, setTotalNumberofPasting1] = useState('');
    const [totalNumberOfPasting2, setTotalNumberofPasting2] = useState('');
    const [totalPastingFaceValue1, setPastingFaceValue1] = useState('');
    const [totalPastingFaceValue2, setPastingFacevalue2] = useState('');

    //fetch sheet data

    const fetchPastingData = async (ids,values) => {

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        const response = await axios.get(`${wakabaBaseUrl}/stamppasting`);
        initialPastingData(response.data,ids,values);
        // console.log('setPastingRows', response.data);
    };
    // clear other three data 
    const initialPastingData = (pastingData,ids,values) => {
        const objData = pastingData.filter(obj => ids.includes(obj.id));
        const updatedData = objData.map((data,Index) => ({
            ...data,
            numberOfMounts: values[Index],
            totalFaceValue: parseInt(values[Index]) * parseInt(data.mountValue),
        })); 
        setPastingRows(updatedData);
        // console.log('updated data',updatedData)
    }

    //calculate second table
    const calculatePastingTotal = () => {
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
    const [totalNumberOfRose1, setTotalNumberofRose1] = useState('');
    const [totalNumberOfRose2, setTotalNumberofRose2] = useState('');
    const [totalRoseFaceValue1, setRoseFaceValue1] = useState('');
    const [totalRoseFaceValue2, setRoseFacevalue2] = useState('');
    //fetch Rose data
    const fetchRoseData = async (ids,values) => {

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        const response = await axios.get(`${wakabaBaseUrl}/stamprose`);
        initialRoseData(response.data,ids,values);
    };
    // clear other three data 
    const initialRoseData = (roseData,ids,values) => {
        const objData = roseData.filter(obj => ids.includes(obj.id));
        const updatedData = objData.map((data,Index) => ({
            ...data,
            numberOfSheets: values[Index],
            totalFaceValue: parseInt(values[Index]) * parseInt(data.stampValue),
        })); 
        setRoseRows(updatedData);
    }
    //      //calculate second table
    const calculateRoseTotal = () => {
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
    const [totalNumberOfPack1, setTotalNumberofPack1] = useState('');
    const [totalNumberOfPack2, setTotalNumberofPack2] = useState('');
    const [totalPackFaceValue1, setPackFaceValue1] = useState('');
    const [totalPackFaceValue2, setPackFacevalue2] = useState('');
    //fetch Pack data
    const fetchPackData = async (ids,values) => {

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        const response = await axios.get(`${wakabaBaseUrl}/stamppack`);
        initialPackData(response.data,ids,values);
    };
    // clear other three data 
    const initialPackData = (packData,ids,values) => {
        const objData = packData.filter(obj => ids.includes(obj.id));
        const updatedData = objData.map((data,Index) => ({
            ...data,
            numberOfSheets: values[Index],
            totalFaceValue: parseInt(values[Index]) * parseInt(data.stampValue),
        })); 
        setPackRows(updatedData);
        // console.log('updated data',updatedData)
    }
    //calculate second table
    const calculatePackTotal = () => {
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
    const [totalNumberOfCard1, setTotalNumberofCard1] = useState('');
    const [totalNumberOfCard2, setTotalNumberofCard2] = useState('');
    const [totalCardFaceValue1, setCardFaceValue1] = useState('');
    const [totalCardFaceValue2, setCardFacevalue2] = useState('');
    //fetch Card data
    const fetchCardData = async (ids,values) => {

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        const response = await axios.get(`${wakabaBaseUrl}/stampcard`);
        initialCardData(response.data,ids,values);
    };
    // clear other three data 
    const initialCardData = (cardData,ids,values) => {
        const objData = cardData.filter(obj => ids.includes(obj.id));
        const updatedData = objData.map((data,Index) => ({
            ...data,
            numberOfSheets: values[Index],
            totalFaceValue: parseInt(values[Index]) * parseInt(data.stampValue),
        })); 
        setCardRows(updatedData);
        // console.log('updated data',updatedData)
    }

    //calculate second table
    const calculateCardTotal = () => {
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
    //-----------------------------cosntrol checkbox--------------------------------
    const [totalNumberOfStamp, setTotalNumberOfStamp] = useState('');
    const [totalStampFaceValue, setTotalStampFaceValue] = useState('');
    const calculateTotalResult =()=>{
        setTotalNumberOfStamp(parseInt(totalNumberOfSheet1) + parseInt(totalNumberOfSheet2) 
         +parseInt(totalNumberOfPasting1) + parseInt(totalNumberOfPasting2)
         +parseInt(totalNumberOfRose1) + parseInt(totalNumberOfRose2)
         +parseInt(totalNumberOfPack1) + parseInt(totalNumberOfPack2)
         +parseInt(totalNumberOfCard1) + parseInt(totalNumberOfCard2)
        );
        setTotalStampFaceValue(parseInt(totalFaceValue1) + parseInt(totalFaceValue2) 
         +parseInt(totalPastingFaceValue1) + parseInt(totalPastingFaceValue2)
         +parseInt(totalRoseFaceValue1) + parseInt(totalRoseFaceValue2)
         +parseInt(totalPackFaceValue1) + parseInt(totalPackFaceValue2)
         +parseInt(totalCardFaceValue1) + parseInt(totalCardFaceValue2)
        );
    }
    useEffect(() => {
        calculateTotalResult();
    }, [totalNumberOfSheet1,totalNumberOfSheet2,totalNumberOfPasting1,totalNumberOfPasting2,totalNumberOfRose1,totalNumberOfRose2,totalNumberOfPack1,totalNumberOfPack2,totalNumberOfCard1,totalNumberOfCard2
        ,totalFaceValue1,totalFaceValue2,totalPastingFaceValue1,totalPastingFaceValue2,totalRoseFaceValue1,totalRoseFaceValue2,totalPackFaceValue1,totalPackFaceValue2,totalCardFaceValue1,totalCardFaceValue2
    ]);
    //-------------------------------------------------   
    // goto before page
    const handleReturn = () => {
        navigate('/stamprelatedreceiptandissuehistory');
    }
    // allow function
    const handleAllow = async() => {
            // console.log('result data', purchaseStampData,customerId)
            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }

                await axios.post(`${wakabaBaseUrl}/stamp/update`, {id,inorout,sheetRows,roseRows,packRows,cardRows})
                .then(response => {
                    navigate('/stamprelatedreceiptandissuehistory');
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                }); // Send newRow data to the server
              } catch (error) {
                console.error('Error adding row:', error);
              }
    }

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

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />
            <div className=" flex flex-col items-center justify-center py-3">
                <div className="w-full " style={{ maxWidth: '100%' }}>
                    <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">日本の切手 ポストカード 手紙 パック 在庫 歴史 詳細</h2>
                    <div className='flex justify-end mt-5 pr-5'>
                        <div>
                            < button type="button" onClick={handleReturn} className="w-max px-5 py-1 font-bold tracking-wide rounded-lg justify-center text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                            戻る
                            </button>
                        </div>
                    </div>
                    {/* mainpart */}
                    <div className="my-6 overflow-y-auto max-h-96">
                            <div className='flex justify-center mt-5' >
                                <div className='w-full'>
                                    <table className=' text-center w-full' style={Table}>
                                        <thead className='sticky top-0 bg-[#ebe6e0] h-8'>
                                            <tr>
                                                <th style={Th}></th>
                                                <th style={Th}>額面(￥)</th>
                                                <th style={Th}>枚数</th>
                                                <th style={Th}>小計(￥)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { sheetRows?.length >0 && sheetRows.map((data, Index) => (
                                                <tr key={Index}>
                                                    <td style={Td}>切手シート</td>
                                                    <td style={Td}>{data.sheetValue || ''}</td>
                                                    <td style={Td}>{data.numberOfSheets || ''}</td>
                                                    <td style={Td}>{data.totalFaceValue || ''}</td>
                                                    {/* <td style={Td}>
                                                        {editIndex === Index ? (
                                                            <InputComponent name='percent' value={editedRow.percent || ''} onChange={handleInputChange} type='number' className='w-full h-8 text-[#70685a]' />
                                                        ) : (data.percent || '')}
                                                    </td> */}
                                                    {/* <td>
                                                        <div className='ml-5 w-5'>
                                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-p79yt4" fill="#70685a" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PercentIcon" tabIndex="-1" title="Percent"><path d="M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4 4 5.57 4 7.5 5.57 11 7.5 11m0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6M4.0025 18.5832 18.59 3.9955l1.4142 1.4143L5.4167 19.9974zM16.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"></path></svg>
                                                        </div>
                                                    </td> */}
                                                </tr>
                                            ))}
                                            { pastingRows?.length >0 && pastingRows.map((data, Index) => (
                                                <tr key={Index}>
                                                    <td style={Td}>切手台紙貼り</td>
                                                    <td style={Td}>{data.mountValue || ''}</td>
                                                    <td style={Td}>{data.numberOfMounts || ''}</td>
                                                    <td style={Td}>{data.totalFaceValue || ''}</td>
                                                </tr>
                                            ))}
                                            { roseRows?.length >0 && roseRows.map((data, Index) => (
                                                <tr key={Index}>
                                                    <td style={Td}>切手バラ</td>
                                                    <td style={Td}>{data.stampValue || ''}</td>
                                                    <td style={Td}>{data.numberOfSheets || ''}</td>
                                                    <td style={Td}>{data.totalFaceValue || ''}</td>
                                                </tr>
                                            ))}
                                            { packRows?.length >0 && packRows.map((data, Index) => (
                                                <tr key={Index}>
                                                    <td style={Td}>レ夕一パック</td>
                                                    <td style={Td}>{data.stampValue || ''}</td>
                                                    <td style={Td}>{data.numberOfSheets || ''}</td>
                                                    <td style={Td}>{data.totalFaceValue || ''}</td>
                                                </tr>
                                            ))}
                                            { cardRows?.length >0 && cardRows.map((data, Index) => (
                                                <tr key={Index}>
                                                    <td style={Td}>ハガキ</td>
                                                    <td style={Td}>{data.stampValue || ''}</td>
                                                    <td style={Td}>{data.numberOfSheets || ''}</td>
                                                    <td style={Td}>{data.totalFaceValue || ''}</td>
                                                </tr>
                                            ))}
                                            <tr className='bg-[#a2d97a]'>
                                                <td style={Td}></td>
                                                <td style={Td}>{''}</td>
                                                <td style={Td}>{totalNumberOfStamp}</td>
                                                <td style={Td}>{totalStampFaceValue}</td>
                                            </tr>
                                            <tr>
                                                <td style={Td}>手数料</td>
                                                <td style={Td}>{''}</td>
                                                <td style={Td}>1枚5円</td>
                                                <td style={Td}>{5 * parseInt(totalNumberOfStamp)}</td>
                                            </tr>
                                            <tr className='bg-[#a2d97a]'>
                                                <td style={Td}>合計金額</td>
                                                <td style={Td}>{''}</td>
                                                <td style={Td}>{''}</td>
                                                <td style={Td}>{parseInt(totalStampFaceValue) - 5 * parseInt(totalNumberOfStamp)}</td>
                                            </tr>
                                            {/* {inorout === '出庫' &&
                                            <tr>
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
                                                <td style={Td}>{parseInt(outBound.letterPack.pack1) * parseInt(outBound.letterPack.pack11)}</td>
                                            </tr>}
                                            {inorout === '出庫' &&
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
                                                <td style={Td}>{parseInt(outBound.letterPack.pack2) * parseInt(outBound.letterPack.pack22)}</td>
                                            </tr>}
                                            {inorout === '出庫' &&
                                            <tr className='bg-[#d9af7a]'>
                                                <td style={Td}>レターパ合計</td>
                                                <td style={Td}>合計枚数</td>
                                                <td style={Td}>{parseInt(outBound.letterPack.pack11) + parseInt(outBound.letterPack.pack22)}</td>
                                                <td style={Td}>{parseInt(outBound.letterPack.pack1) * parseInt(outBound.letterPack.pack11) +
                                                                parseInt(outBound.letterPack.pack2) * parseInt(outBound.letterPack.pack22) }
                                                </td>
                                            </tr>}
                                            {inorout === '出庫' &&
                                            <tr className='bg-[#d9af7a]'>
                                                <td style={Td}>切手お釣り</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td}>{parseInt(totalStampFaceValue) - 5 * parseInt(totalNumberOfStamp) -
                                                                parseInt(outBound.letterPack.pack1) * parseInt(outBound.letterPack.pack11) -
                                                                parseInt(outBound.letterPack.pack2) * parseInt(outBound.letterPack.pack22) }
                                                </td>
                                            </tr>} */}
                                            {/* {inorout === '出庫' &&
                                                <tr>
                                                    <td style={Td}>返金切手</td>
                                                    <td style={Td}>{}</td>
                                                    <td style={Td}>{}</td>
                                                    <td style={Td}>{}</td>
                                                </tr>
                                            }
                                            {inorout === '出庫' &&
                                                <tr>
                                                    <td style={Td}>500円切手</td>
                                                    <td style={Td}>500</td>
                                                    <td style={Td}>
                                                        <InputComponent value={outBound.looseStamps.stamp1 || ''} 
                                                        onChange={e => handleOutBoundChange('looseStamps', 'stamp1',  parseInt(e.target.value))} 
                                                        type='number' className='w-full !h-8 text-[#70685a]' />
                                                    </td>
                                                    <td style={Td}>{500 * parseInt(outBound.looseStamps.stamp1)}</td>
                                                </tr>
                                            }
                                            {inorout === '出庫' &&
                                                <tr>
                                                    <td style={Td}>100円切手</td>
                                                    <td style={Td}>100</td>
                                                    <td style={Td}>
                                                        <InputComponent value={outBound.looseStamps.stamp2 || ''} 
                                                        onChange={e => handleOutBoundChange('looseStamps', 'stamp2',  parseInt(e.target.value))} 
                                                        type='number' className='w-full !h-8 text-[#70685a]' />
                                                    </td>
                                                    <td style={Td}>{100 * parseInt(outBound.looseStamps.stamp2)}</td>
                                                </tr>
                                            }
                                             {inorout === '出庫' &&
                                                <tr>
                                                    <td style={Td}>50円切手</td>
                                                    <td style={Td}>50</td>
                                                    <td style={Td}>
                                                        <InputComponent value={outBound.looseStamps.stamp3 || ''} 
                                                        onChange={e => handleOutBoundChange('looseStamps', 'stamp3',  parseInt(e.target.value))} 
                                                        type='number' className='w-full !h-8 text-[#70685a]' />
                                                    </td>
                                                    <td style={Td}>{50 * parseInt(outBound.looseStamps.stamp3)}</td>
                                                </tr> 
                                            }
                                            {inorout === '出庫' &&
                                                <tr>
                                                    <td style={Td}>20円切手</td>
                                                    <td style={Td}>20</td>
                                                    <td style={Td}>
                                                        <InputComponent value={outBound.looseStamps.stamp4 || ''} 
                                                        onChange={e => handleOutBoundChange('looseStamps', 'stamp4',  parseInt(e.target.value))} 
                                                        type='number' className='w-full !h-8 text-[#70685a]' />
                                                    </td>
                                                    <td style={Td}>{20 * parseInt(outBound.looseStamps.stamp4)}</td>
                                                </tr> 
                                            }
                                            {inorout === '出庫' &&
                                                <tr>
                                                    <td style={Td}>10円切手</td>
                                                    <td style={Td}>10</td>
                                                    <td style={Td}>
                                                        <InputComponent value={outBound.looseStamps.stamp5 || ''} 
                                                        onChange={e => handleOutBoundChange('looseStamps', 'stamp5',  parseInt(e.target.value))} 
                                                        type='number' className='w-full !h-8 text-[#70685a]' />
                                                    </td>
                                                    <td style={Td}>{10 * parseInt(outBound.looseStamps.stamp5)}</td>
                                                </tr>
                                            } 
                                            {inorout === '出庫' &&
                                                <tr>
                                                    <td style={Td}>5円切手</td>
                                                    <td style={Td}>5</td>
                                                    <td style={Td}>
                                                        <InputComponent value={outBound.looseStamps.stamp6 || ''} 
                                                        onChange={e => handleOutBoundChange('looseStamps', 'stamp6',  parseInt(e.target.value))} 
                                                        type='number' className='w-full !h-8 text-[#70685a]' />
                                                    </td>
                                                    <td style={Td}>{5 * parseInt(outBound.looseStamps.stamp6)}</td>
                                                </tr>
                                            } 
                                            {inorout === '出庫' &&
                                                <tr>
                                                    <td style={Td}>1円切手</td>
                                                    <td style={Td}>1</td>
                                                    <td style={Td}>
                                                        <InputComponent value={outBound.looseStamps.stamp7 || ''} 
                                                        onChange={e => handleOutBoundChange('looseStamps', 'stamp7',  parseInt(e.target.value))} 
                                                        type='number' className='w-full !h-8 text-[#70685a]' />
                                                    </td>
                                                    <td style={Td}>{parseInt(outBound.looseStamps.stamp7)}</td>
                                                </tr> 
                                            }
                                            {inorout === '出庫' &&
                                                <tr className='bg-[#d9af7a]'>
                                                    <td style={Td}>合計返金切手</td>
                                                    <td style={Td}>{}</td>
                                                    <td style={Td}>{}</td>
                                                    <td style={Td}>{parseInt(outBound.looseStamps.stamp1) * 500 + parseInt(outBound.looseStamps.stamp2) * 100 +
                                                    parseInt(outBound.looseStamps.stamp3) * 50 + parseInt(outBound.looseStamps.stamp4) * 20 +
                                                    parseInt(outBound.looseStamps.stamp5) * 10 + parseInt(outBound.looseStamps.stamp6) * 5 +
                                                    parseInt(outBound.looseStamps.stamp7)}</td>
                                                </tr>
                                             }
                                             {inorout === '出庫' &&
                                                <tr className='bg-[#d9af7a]'>
                                                    <td style={Td}>残差異</td>
                                                    <td style={Td}>{}</td>
                                                    <td style={Td}>{}</td>
                                                    <td style={Td}>{parseInt(totalStampFaceValue) - 5 * parseInt(totalNumberOfStamp) - 
                                                    (parseInt(outBound.looseStamps.stamp1) * 500 + parseInt(outBound.looseStamps.stamp2) * 100 +
                                                    parseInt(outBound.looseStamps.stamp3) * 50 + parseInt(outBound.looseStamps.stamp4) * 20 +
                                                    parseInt(outBound.looseStamps.stamp5) * 10 + parseInt(outBound.looseStamps.stamp6) * 5 +
                                                    parseInt(outBound.looseStamps.stamp7))}</td>
                                                </tr>
                                            } */}
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>

                    {/* ----apply button------ */}
                    <div className='flex justify-center mt-5'>
                        <div>
                            < button type="button"  onClick={handleAllow} className="w-max px-5 py-1 font-bold tracking-wide rounded-lg justify-center text-white bg-[#655b4a] hover:bg-blue-700 focus:outline-none">
                                承認
                            </button>
                        </div>

                    </div>


                </div>
            </div>
        </>
    );
};

export default StampShippingDetail;