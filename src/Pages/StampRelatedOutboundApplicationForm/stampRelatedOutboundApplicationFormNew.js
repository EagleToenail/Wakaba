import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import StampSheet from '../../Assets/img/stampsheet.png'
import LetterPack from '../../Assets/img/letterpack.png'
import StampRose from '../../Assets/img/stamprose.png'
import PostCard from '../../Assets/img/postcard.png'
import LabelComponent from '../../Components/Common/LabelComponent';
import InputComponent from '../../Components/Common/InputComponent';
import DateAndTime from '../../Components/Common/PickData';
import axios from 'axios';

import { useDispatch,useSelector} from 'react-redux';
import { setClearData } from '../../redux/sales/actions';

const StampRelatedOutventoryApplicationFormNew = () => {
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
    const stampData = data.data;
    const dispatch = useDispatch();
    const clearReduxData = () => {
        dispatch(setClearData());
    }
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

    const [inputSheetShow, setInputSheetShow] = useState(false);
    const [newSheetRow, setNewSheetRow] = useState({
        stampValue: '',
        numberOfSides: '',
        sheetValue: '',
        numberOfSheets: '0',
        totalFaceValue: '0',
        purchasePrice: '0',
    });
    const handleSheetChange = (e) => {
        const { name, value } = e.target;
        setNewSheetRow((prevSheetRow) => ({
            ...prevSheetRow,
            [name]: value
        }));
    };
    // multiply
    useEffect(() => {
        // Calculate product when sheetValue and numberOfSides are both filled
        const { stampValue, numberOfSides } = newSheetRow;
        if (stampValue && numberOfSides) {
            const calculatedProduct = parseInt(stampValue) * parseInt(numberOfSides);
            setNewSheetRow((prev) => ({ ...prev, sheetValue: calculatedProduct }));
            // console.log('multiply', calculatedProduct)
        } else {
            setNewSheetRow((prev) => ({ ...prev, sheetValue: '' }));
        }
    }, [newSheetRow.stampValue, newSheetRow.numberOfSides]);
    // Add a new row to the table
    const handleAddSheetRow = async() => {
        if (inputSheetShow) {
            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }
                await axios.post(`${wakabaBaseUrl}/stampsheet/create`, newSheetRow)
                .then(response => {
                    // console.log('success',response.data)
                    setSheetRows(response.data);
                    initialSheetData(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                }); // Send newRow data to the server
                // setSheetRows((prevSheetRows) => [...prevSheetRows, { ...newSheetRow, id: Date.now() }]);
                setNewSheetRow({
                    stampValue: '',
                    numberOfSides: '',
                    sheetValue: '',
                    numberOfSheets: '0',
                    totalFaceValue: '0',
                    purchasePrice: '0',
                });
              } catch (error) {
                console.error('Error adding row:', error);
              }
        }
        setInputSheetShow(!inputSheetShow);
    };
    //edit and delete
    const [editSheetIndex, setEditSheetIndex] = useState(-1);
    const [editedSheetRow, setEditedSheetRow] = useState({
        stampValue: '',
        numberOfSides: '',
        sheetValue: '',
        numberOfSheets: '0',
        totalFaceValue: '0',
        purchasePrice: '0',
    });
    const handleSheetInputChange = (e) => {
        const { name, value } = e.target;
        setEditedSheetRow({ ...editedSheetRow, [name]: value });
        if(name === 'numberOfSheets') {
            calculateSheet(value);
        }
    };

    const handleSheetEditClick = (index) => {
        setEditSheetIndex(index);
        setEditedSheetRow(sheetRows[index]); // Populate the input fields with the selected row's data
    };

    const handleSheetSaveClick = async() => {
        const updatedData = sheetRows.map((row, index) =>
            index === editSheetIndex ? { ...row, ...editedSheetRow } : row
        );
        setSheetRows(updatedData);
        setEditSheetIndex(-1); // Exit edit mode
        setEditedSheetRow({
            stampValue: '',
            numberOfSides: '',
            sheetValue: '',
            numberOfSheets: '0',
            totalFaceValue: '0',
            purchasePrice: '0',
        }); // Reset editedRow state
    };

    const handleSheetCancelClick = () => {
        setEditSheetIndex(-1);
        setEditedSheetRow({
            stampValue: '',
            numberOfSides: '',
            sheetValue: '',
            numberOfSheets: '0',
            totalFaceValue: '0',
            purchasePrice: '0',
        }); // Reset editedRow state
    };

    //delete one of tatalsaleSlipdata
    const handleSheetDeleteClick = (index) => {
        setSheetRows(sheetRows.filter((_, i) => i !== index));
    };
    //calculate
    const calculateSheet = (numberofsheets) => {
        const { sheetValue } = editedSheetRow;
        // console.log('shetValue',sheetValue)
        if (sheetValue) {
            const calculatedProduct = parseInt(sheetValue) * parseInt(numberofsheets);
            setEditedSheetRow((prev) => ({ ...prev, totalFaceValue: calculatedProduct }));           
        } else {
            setNewSheetRow((prev) => ({ ...prev, sheetValue: '' }));
        }
    }
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

    const [inputPastingShow, setInputPastingShow] = useState(false);
    const [newPastingRow, setNewPastingRow] = useState({
        stampValue: '',
        mountValue: '',
        numberOfMounts: '0',
        totalFaceValue: '0',
        purchasePrice: '0',
    });
    const handlePastingChange = (e) => {
        const { name, value } = e.target;
        setNewPastingRow((prevPastingRow) => ({
            ...prevPastingRow,
            [name]: value
        }));
    };
    // multiply
    useEffect(() => {
        // Calculate product when sheetValue and numberOfSides are both filled
        const { stampValue } = newPastingRow;
        if (stampValue) {
            const calculatedProduct = parseInt(stampValue) * parseInt(25);
            setNewPastingRow((prev) => ({ ...prev, mountValue: calculatedProduct }));
            // console.log('multiply', calculatedProduct)
        } else {
            setNewPastingRow((prev) => ({ ...prev, mountValue: '' }));
        }
    }, [newPastingRow.stampValue]);
    // Add a new row to the table
    const handleAddPastingRow = async() => {
        if (inputPastingShow) {
            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }
                await axios.post(`${wakabaBaseUrl}/stamppasting/create`, newPastingRow)
                .then(response => {
                    // console.log('success',response.data)
                    setPastingRows(response.data);
                    initialPastingData(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                }); // Send newRow data to the server
                //setPastingRows((prevPastingRows) => [...prevPastingRows, { ...newPastingRow, id: Date.now() }]);
                setNewPastingRow({
                    stampValue: '',
                    mountValue: '',
                    numberOfMounts: '0',
                    totalFaceValue: '0',
                    purchasePrice: '0',
                });
              } catch (error) {
                console.error('Error adding row:', error);
              }
        }
        setInputPastingShow(!inputPastingShow);
    };
    //edit and delete
    const [editPastingIndex, setEditPastingIndex] = useState(-1);
    const [editedPastingRow, setEditedPastingRow] = useState({
        stampValue: '',
        mountValue: '',
        numberOfMounts: '0',
        totalFaceValue: '0',
        purchasePrice: '0',
    });
    const handlePastingInputChange = (e) => {
        const { name, value } = e.target;
        setEditedPastingRow({ ...editedPastingRow, [name]: value });
        if(name === 'numberOfMounts') {
            calculatePasting(value);
        }
    };

    const handlePastingEditClick = (index) => {
        setEditPastingIndex(index);
        setEditedPastingRow(pastingRows[index]); // Populate the input fields with the selected row's data
    };

    const handlePastingSaveClick = async() => {
        const updatedData = pastingRows.map((row, index) =>
            index === editPastingIndex ? { ...row, ...editedPastingRow } : row
        );
        setPastingRows(updatedData);
        setEditPastingIndex(-1); // Exit edit mode
        setEditedPastingRow({
            stampValue: '',
            mountValue: '',
            numberOfMounts: '0',
            totalFaceValue: '0',
            purchasePrice: '0',
        }); // Reset editedRow state
    };

    const handlePastingCancelClick = () => {
        setEditPastingIndex(-1);
        setEditedPastingRow({
            stampValue: '',
            mountValue: '',
            numberOfMounts: '0',
            totalFaceValue: '0',
            purchasePrice: '0',
        }); // Reset editedRow state
    };

    //delete one of tatalsaleSlipdata
    const handlePastingDeleteClick = (index) => {
        setPastingRows(pastingRows.filter((_, i) => i !== index));
    };
    //calculate
    const calculatePasting = (numberofmounts) => {
        const { mountValue } = editedPastingRow;
        // console.log('shetValue',sheetValue)
        if (mountValue) {
            const calculatedProduct = parseInt(mountValue) * parseInt(numberofmounts);
            setEditedPastingRow((prev) => ({ ...prev, totalFaceValue: calculatedProduct }));           
        } else {
            setNewPastingRow((prev) => ({ ...prev, sheetValue: '' }));
        }
    }
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

    const [inputRoseShow, setInputRoseShow] = useState(false);
    const [newRoseRow, setNewRoseRow] = useState({
        stampValue: '',
        numberOfSheets: '0',
        totalFaceValue: '0',
        purchasePrice: '0'
    });
    const handleRoseChange = (e) => {
        const { name, value } = e.target;
        setNewRoseRow((prevRoseRow) => ({
            ...prevRoseRow,
            [name]: value
        }));
    };
    // Add a new row to the table
    const handleAddRoseRow = async() => {
        if (inputRoseShow) {
            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }
                await axios.post(`${wakabaBaseUrl}/stamprose/create`, newRoseRow)
                .then(response => {
                    // console.log('success',response.data)
                    // setSheetRows(response.data);
                    initialRoseData(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                }); // Send newRow data to the server
                //setRoseRows((prevRoseRows) => [...prevRoseRows, { ...newRoseRow, id: Date.now() }]);
                setNewRoseRow({
                    stampValue: '',
                    numberOfSheets: '0',
                    totalFaceValue: '0',
                    purchasePrice: '0'
                });
              } catch (error) {
                console.error('Error adding row:', error);
              }
        }
        setInputRoseShow(!inputRoseShow);
    };
    //edit and delete
    const [editRoseIndex, setEditRoseIndex] = useState(-1);
    const [editedRoseRow, setEditedRoseRow] = useState({
        stampValue: '',
        numberOfSheets: '0',
        totalFaceValue: '0',
        purchasePrice: '0'
    });
    const handleRoseInputChange = (e) => {
        const { name, value } = e.target;
        setEditedRoseRow({ ...editedRoseRow, [name]: value });
        if(name === 'numberOfSheets') {
            calculateRose(value);
        }
    };

    const handleRoseEditClick = (index) => {
        setEditRoseIndex(index);
        setEditedRoseRow(roseRows[index]); // Populate the input fields with the selected row's data
    };

    const handleRoseSaveClick = async() => {
        const updatedData = roseRows.map((row, index) =>
            index === editRoseIndex ? { ...row, ...editedRoseRow } : row
        );
        setRoseRows(updatedData);
        setEditRoseIndex(-1); // Exit edit mode
        setEditedRoseRow({
            stampValue: '',
            numberOfSheets: '0',
            totalFaceValue: '0',
            purchasePrice: '0'
        }); // Reset editedRow state
    };

    const handleRoseCancelClick = () => {
        setEditRoseIndex(-1);
        setEditedRoseRow({
            stampValue: '',
            numberOfSheets: '0',
            totalFaceValue: '0',
            purchasePrice: '0'
        }); // Reset editedRow state
    };

    //delete one of tatalsaleSlipdata
    const handleRoseDeleteClick = (index) => {
        setRoseRows(roseRows.filter((_, i) => i !== index));
    };
    //calculate
    const calculateRose = (numberofsheets) => {
        const { stampValue } = editedRoseRow;
        if (stampValue) {
            const calculatedProduct = parseInt(stampValue) * parseInt(numberofsheets);
            setEditedRoseRow((prev) => ({ ...prev, totalFaceValue: calculatedProduct }));             
        } else {
            setNewRoseRow((prev) => ({ ...prev, stampValue: '' }));
        }
    }
    //      //calculate second table
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

    const [inputPackShow, setInputPackShow] = useState(false);
    const [newPackRow, setNewPackRow] = useState({
        type: '',
        stampValue: '',
        numberOfSheets: '0',
        totalFaceValue: '0',
        purchasePrice: '0'
    });
    const handlePackChange = (e) => {
        const { name, value } = e.target;
        setNewPackRow((prevPackRow) => ({
            ...prevPackRow,
            [name]: value
        }));
    };
    // Add a new row to the table
    const handleAddPackRow = async() => {
        if (inputPackShow) {
            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }
                await axios.post(`${wakabaBaseUrl}/stamppack/create`, newPackRow)
                .then(response => {
                    // console.log('success',response.data)
                    // setSheetRows(response.data);
                    initialPackData(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                }); // Send newRow data to the server
                //setPackRows((prevPackRows) => [...prevPackRows, { ...newPackRow, id: Date.now() }]);
                setNewPackRow({
                    type: '',
                    stampValue: '',
                    numberOfSheets: '0',
                    totalFaceValue: '0',
                    purchasePrice: '0'
                });
              } catch (error) {
                console.error('Error adding row:', error);
              }
        }
        setInputPackShow(!inputPackShow);
    };
    //edit and delete
    const [editPackIndex, setEditPackIndex] = useState(-1);
    const [editedPackRow, setEditedPackRow] = useState({
        type: '',
        stampValue: '',
        numberOfSheets: '0',
        totalFaceValue: '0',
        purchasePrice: '0'
    });
    const handlePackInputChange = (e) => {
        const { name, value } = e.target;
        setEditedPackRow({ ...editedPackRow, [name]: value });
        if(name === 'numberOfSheets') {
            calculatePack(value);
        }
    };

    const handlePackEditClick = (index) => {
        setEditPackIndex(index);
        setEditedPackRow(packRows[index]); // Populate the input fields with the selected row's data
    };

    const handlePackSaveClick = async() => {
        const updatedData = packRows.map((row, index) =>
            index === editPackIndex ? { ...row, ...editedPackRow } : row
        );
        setPackRows(updatedData);
        setEditPackIndex(-1); // Exit edit mode
        setEditedPackRow({
            type: '',
            stampValue: '',
            numberOfSheets: '0',
            totalFaceValue: '0'
        }); // Reset editedRow state
    };

    const handlePackCancelClick = () => {
        setEditPackIndex(-1);
        setEditedPackRow({
            type: '',
            stampValue: '',
            numberOfSheets: '0',
            totalFaceValue: '0',
            purchasePrice: '0'
        }); // Reset editedRow state
    };

    //delete one of tatalsaleSlipdata
    const handlePackDeleteClick = (index) => {
        setPackRows(packRows.filter((_, i) => i !== index));
    };
    //calculate
    const calculatePack = (numberofsheets) => {
        const { stampValue } = editedPackRow;
        // console.log('shetValue',sheetValue)
        if (stampValue) {
            const calculatedProduct = parseInt(stampValue) * parseInt(numberofsheets);
            setEditedPackRow((prev) => ({ ...prev, totalFaceValue: calculatedProduct }));            
        } else {
            setNewPackRow((prev) => ({ ...prev, stampValue: '' }));
        }
    }
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

    const [inputCardShow, setInputCardShow] = useState(false);
    const [newCardRow, setNewCardRow] = useState({
        stampValue: '',
        numberOfSheets: '0',
        totalFaceValue: '0',
        purchasePrice: '0'
    });
    const handleCardChange = (e) => {
        const { name, value } = e.target;
        setNewCardRow((prevCardRow) => ({
            ...prevCardRow,
            [name]: value
        }));
    };
    // Add a new row to the table
    const handleAddCardRow = async() => {
        if (inputCardShow) {
            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }
                await axios.post(`${wakabaBaseUrl}/stampcard/create`, newCardRow)
                .then(response => {
                    // console.log('success',response.data)
                    setCardRows(response.data);
                    initialCardData(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                }); // Send newRow data to the server
                //setCardRows((prevCardRows) => [...prevCardRows, { ...newCardRow, id: Date.now() }]);
                setNewCardRow({
                    stampValue: '',
                    numberOfSheets: '0',
                    totalFaceValue: '0',
                    purchasePrice: '0'
                });
              } catch (error) {
                console.error('Error adding row:', error);
              }
        }
        setInputCardShow(!inputCardShow);
    };
    //edit and delete
    const [editCardIndex, setEditCardIndex] = useState(-1);
    const [editedCardRow, setEditedCardRow] = useState({
        stampValue: '',
        numberOfSheets: '0',
        totalFaceValue: '0',
        purchasePrice: '0'
    });
    const handleCardInputChange = (e) => {
        const { name, value } = e.target;
        setEditedCardRow({ ...editedCardRow, [name]: value });
        if(name === 'numberOfSheets') {
            calculateCard(value);
        }
    };

    const handleCardEditClick = (index) => {
        setEditCardIndex(index);
        setEditedCardRow(cardRows[index]); // Populate the input fields with the selected row's data
    };

    const handleCardSaveClick = async() => {
        const updatedData = cardRows.map((row, index) =>
            index === editCardIndex ? { ...row, ...editedCardRow } : row
        );
        setCardRows(updatedData);
        setEditCardIndex(-1); // Exit edit mode
        setEditedCardRow({
            stampValue: '',
            numberOfSheets: '0',
            totalFaceValue: '0',
            purchasePrice: '0'
        }); // Reset editedRow state
    };

    const handleCardCancelClick = () => {
        setEditCardIndex(-1);
        setEditedCardRow({
            stampValue: '',
            numberOfSheets: '0',
            totalFaceValue: '0',
            purchasePrice: '0'
        }); // Reset editedRow state
    };

    //delete one of tatalsaleSlipdata
    const handleCardDeleteClick = (index) => {
        setCardRows(cardRows.filter((_, i) => i !== index));
    };
    //calculate
    const calculateCard = (numberofsheets) => {
        const { stampValue } = editedCardRow;
        // console.log('shetValue',sheetValue)
        if (stampValue) {
            const calculatedProduct = parseInt(stampValue) * parseInt(numberofsheets);
            setEditedCardRow((prev) => ({ ...prev, totalFaceValue: calculatedProduct }));            
        } else {
            setNewPackRow((prev) => ({ ...prev, stampValue: '' }));
        }
    }
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
        clearReduxData();
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
        setTotalNumberOfStamp(parseInt(totalNumberOfSheet1) + parseInt(totalNumberOfSheet2) 
         +parseInt(totalNumberOfRose1) + parseInt(totalNumberOfRose2)
         +parseInt(totalNumberOfPack1) + parseInt(totalNumberOfPack2)
         +parseInt(totalNumberOfCard1) + parseInt(totalNumberOfCard2)
        );
        setTotalStampFaceValue(parseInt(totalFaceValue1) + parseInt(totalFaceValue2) 
         +parseInt(totalRoseFaceValue1) + parseInt(totalRoseFaceValue2)
         +parseInt(totalPackFaceValue1) + parseInt(totalPackFaceValue2)
         +parseInt(totalCardFaceValue1) + parseInt(totalCardFaceValue2)
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
                     clearReduxData();
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
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full">
                    <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">日本の切手・ハガキ・レターパック 出庫申請</h2>
                    <div className='flex justify-evenly mt-5 '>
                        <div className='text-center text-[15px]'><u><LabelComponent onClick={gotoStampsInventoryList} className="cursor-pointer" value="在庫一覧へ戻る" /></u></div>
                        <div>
                            < button type="button" onClick={showModal} className="w-full px-5 py-3 font-bold tracking-wide rounded-lg justify-center text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
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
                    <div className=' stamp-related-inventory-list flex gap-5'>

                    </div>
                    {/* ========================================== */}
                </div>
            </div>
            {/* --------------Modal--------------- */}
            {isShow &&
                <div
                    className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                    <div className="w-full max-w-[1000px] bg-white shadow-lg rounded-lg p-6 relative overflow-y-auto">
                        <div className="flex items-center pb-3 border-b border-gray-300">
                            <h3 className="text-gray-800 text-xl font-bold flex-1">ハガキ交換シート</h3>
                            <svg onClick={onClose} xmlns="http://www.w3.org/2000/svg" className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                                viewBox="0 0 320.591 320.591">
                                <path
                                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                    data-original="#000000"></path>
                                <path
                                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                    data-original="#000000"></path>
                            </svg>
                        </div>

                        <div className="my-6 overflow-y-auto max-h-120">
                            <div className='flex justify-center' >
                                <div className='w-full flex gap-5'>
                                    <table className=' text-center w-full' style={Table}>
                                        <thead>
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
                                                <td style={Td}>{parseInt(outBound.letterPack.pack2) * parseInt(outBound.letterPack.pack22)}</td>
                                            </tr>
                                            <tr className='bg-[#d9af7a]'>
                                                <td style={Td}>レターパ合計</td>
                                                <td style={Td}>合計枚数</td>
                                                <td style={Td}>{parseInt(outBound.letterPack.pack11) + parseInt(outBound.letterPack.pack22)}</td>
                                                <td style={Td}>{parseInt(outBound.letterPack.pack1) * parseInt(outBound.letterPack.pack11) +
                                                                parseInt(outBound.letterPack.pack2) * parseInt(outBound.letterPack.pack22) }
                                                </td>
                                            </tr>
                                            <tr className='bg-[#d9af7a]'>
                                                <td style={Td}>切手お釣り</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td}>{parseInt(totalStampFaceValue) - 5 * parseInt(totalNumberOfStamp) -
                                                                parseInt(outBound.letterPack.pack1) * parseInt(outBound.letterPack.pack11) -
                                                                parseInt(outBound.letterPack.pack2) * parseInt(outBound.letterPack.pack22) }
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                    {/* --------Second table------ */}
                                    <table className=' text-center w-full' style={Table}>
                                        <thead>
                                            <tr>
                                                <th style={Th}></th>
                                                <th style={Th}>額面(￥)</th>
                                                <th style={Th}>枚数</th>
                                                <th style={Th}>小計(￥)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
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
                                                <td style={Td}>{parseInt(outBound.letterPack.pack1) * parseInt(outBound.letterPack.pack11)}</td>
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
                                                <td style={Td}>{parseInt(outBound.letterPack.pack2) * parseInt(outBound.letterPack.pack22)}</td>
                                            </tr>
                                            <tr className='bg-[#d9af7a]'>
                                                <td style={Td}>レターパ合計</td>
                                                <td style={Td}>合計枚数</td>
                                                <td style={Td}>{parseInt(outBound.letterPack.pack11) + parseInt(outBound.letterPack.pack22)}</td>
                                                <td style={Td}>{parseInt(outBound.letterPack.pack1) * parseInt(outBound.letterPack.pack11) +
                                                                parseInt(outBound.letterPack.pack2) * parseInt(outBound.letterPack.pack22) }
                                                </td>
                                            </tr>
                                            <tr className='bg-[#d9af7a]'>
                                                <td style={Td}>切手お釣り</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td}>{parseInt(totalStampFaceValue) - 5 * parseInt(totalNumberOfStamp) -
                                                                parseInt(outBound.letterPack.pack1) * parseInt(outBound.letterPack.pack11) -
                                                                parseInt(outBound.letterPack.pack2) * parseInt(outBound.letterPack.pack22) }
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
                                                <td style={Td}>{500 * parseInt(outBound.looseStamps.stamp1)}</td>
                                            </tr>
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
                                            <tr className='bg-[#d9af7a]'>
                                                <td style={Td}>合計返金切手</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td}>{}</td>
                                                <td style={Td}>{parseInt(outBound.looseStamps.stamp1) * 500 + parseInt(outBound.looseStamps.stamp2) * 100 +
                                                parseInt(outBound.looseStamps.stamp3) * 50 + parseInt(outBound.looseStamps.stamp4) * 20 +
                                                parseInt(outBound.looseStamps.stamp5) * 10 + parseInt(outBound.looseStamps.stamp6) * 5 +
                                                parseInt(outBound.looseStamps.stamp7)}</td>
                                            </tr>
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
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-300 pt-6 flex justify-end gap-4">
                            <button type="button" onClick={sendStampsOutboundData}
                                className="px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200">許可</button>
                            <button type="button" onClick={onClose}
                                className="px-4 py-2 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600">閉じる</button>
                        </div>
                    </div>
                </div>
             }    
            {/* ---------------------------------- */}
        </>
    );
};

export default StampRelatedOutventoryApplicationFormNew;