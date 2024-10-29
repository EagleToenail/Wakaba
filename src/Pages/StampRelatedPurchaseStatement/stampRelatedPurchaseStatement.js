import React, { useState, useEffect } from 'react';
import {useNavigate, useParams,useLocation  } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import StampSheet from '../../Assets/img/stampsheet.png'
import LetterPack from '../../Assets/img/letterpack.png'
import StampRose from '../../Assets/img/stamprose.png'
import PostCard from '../../Assets/img/postcard.png'
import LabelComponent from '../../Components/Common/LabelComponent';
import InputComponent from '../../Components/Common/InputComponent';
// import DateAndTime from '../../Components/Common/PickData';
import axios from 'axios';
import { useDispatch } from 'react-redux';
// import { setClearData } from '../../redux/sales/actions';
import { setStampsData } from '../../redux/sales/actions';


const StampRelatedPurchaseStatement = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
    const queryParams = new URLSearchParams(location.search);
    const invoiceId = queryParams.get('invoiceID');
    // Fetch customer data
    const { id } = useParams();
    const customerId = id;


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

    // const userStoreName = localStorage.getItem('storename');
    const userId = localStorage.getItem('userId');
    // const role = localStorage.getItem('role');

    const [customer, setCustomer] = useState({});

    const fetchCustomerData = async (customerID) => {
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        if (customerID) {
            await axios.get(`${wakabaBaseUrl}/customer/getCustomerById/${customerID}`)
                .then(response => {
                    setCustomer(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }
    }
    useEffect(() => {
        fetchCustomerData(customerId);
    }, [customerId]);

    const [userData, setUserData] = useState([]);
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

    const [stampRate, setStampRate] = useState([]);
    //fetch data
    useEffect(() => {
        const fetchData = async () => {
    
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const response = await axios.get(`${wakabaBaseUrl}/stamprate`);
            // console.log('stampRate',response.data);
            setStampRate(response.data);
            // console.log('stampRate',response.data);
        };
        fetchData();
        }, []);
    //dynamic Table operation
    //------------Sheet---------------------------------
    const [sheetRows, setSheetRows] = useState([]);

    const [totalNumberOfSheet1, setTotalNumberofSheet1 ] = useState('');
    const [totalNumberOfSheet2, setTotalNumberofSheet2 ] = useState('');
    const [totalFaceValue1, setFaceValue1 ] = useState('');
    const [totalFaceValue2, setFacevalue2 ] = useState('');

    const [totalPurchaseOfSheet1, setTotalPurchaseOfSheet1] = useState('');
    const [totalPurchaseOfSheet2, setTotalPurchaseOfSheet2] = useState('');
    //fetch sheet data
    useEffect(() => {
        const fetchData = async () => {
  
          const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
          if (!wakabaBaseUrl) {
              throw new Error('API base URL is not defined');
          }
            const response = await axios.get(`${wakabaBaseUrl}/stampsheet`);
            initialSheetData(response.data);
        //   console.log('setSheetRows',response.data);
        };
        fetchData();
      }, []);

    // clear other three data 
    const initialSheetData =(sheetData) => {
        const updatedData = sheetData.map(data => ({
            ...data,
            numberOfSheets: 0,
            totalFaceValue: 0,
            purchasePrice: 0, // Replace with your desired value or logic
        })); 
        setSheetRows(updatedData);
        // console.log('updated data',updatedData)
    }

    const [inputSheetShow, setInputSheetShow] = useState(false);
    const [newSheetRow, setNewSheetRow] = useState({
        stampValue: '',
        numberOfSides: '',
        sheetValue: '',
        numberOfSheets: '0',
        totalFaceValue: '0',
        purchasePrice: '0'
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
    }, [newSheetRow,newSheetRow.stampValue, newSheetRow.numberOfSides]);

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
                    // setSheetRows(response.data);
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
                    purchasePrice: '0'
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
        purchasePrice: '0'
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
        calculateSheetTotal();
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
            purchasePrice: '0'
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
            purchasePrice: '0'
        }); // Reset editedRow state
    };

    //calculate
    const calculateSheet = (numberofsheets) => {
        const { sheetValue } = editedSheetRow;
        // console.log('shetValue',sheetValue)
        if (sheetValue) {
            const calculatedProduct = parseInt(sheetValue) * parseInt(numberofsheets);
            setEditedSheetRow((prev) => ({ ...prev, totalFaceValue: calculatedProduct }));
            const caluclatePruchase =  parseInt(parseInt(calculatedProduct) * (1 - (stampRate[0].percent)/100));
            setEditedSheetRow((prev) => ({ ...prev, purchasePrice: caluclatePruchase }));
            // console.log('multiply---------', calculatedProduct,caluclatePruchase)              
        } else {
            setNewSheetRow((prev) => ({ ...prev, sheetValue: '' }));
        }
    }
    //newcalculatesheet
    const calculateSheetNew = (index,data) => {
        if (index !== undefined) {
            const sheetValue = parseInt(data[index].sheetValue) || 0;
            const numberofsheets = parseInt(data[index].numberOfSheets) || 0;
            const calculatedProduct = sheetValue * numberofsheets;
            const caluclatePruchase =  parseInt(parseInt(calculatedProduct) * (1 - (stampRate[0].percent)/100));
            const updatedRows = data.map((r, i) => 
                i === index ? { ...r, totalFaceValue: calculatedProduct,purchasePrice: caluclatePruchase} : r
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
            const purchaseprice1 = sheetRows.reduce((sum, item) => {
                if (item.stampValue >= 50) { 
                    return parseInt(sum) + parseInt(item.purchasePrice);
                }
                return sum; 
            }, 0);
            setTotalPurchaseOfSheet1(purchaseprice1);
            const purchaseprice2 = sheetRows.reduce((sum, item) => {
                if (item.stampValue < 50) { 
                    return parseInt(sum) + parseInt(item.purchasePrice);
                }
                return sum; 
            }, 0);
            setTotalPurchaseOfSheet2(purchaseprice2);
     }
    useEffect(() => {
        calculateSheetTotal();
    }, [sheetRows]);
    //------------Rose---------------------------------
    const [roseRows, setRoseRows] = useState([]);
    const [totalNumberOfRose1, setTotalNumberofRose1 ] = useState('');
    const [totalNumberOfRose2, setTotalNumberofRose2 ] = useState('');
    const [totalRoseFaceValue1, setRoseFaceValue1 ] = useState('');
    const [totalRoseFaceValue2, setRoseFacevalue2 ] = useState('');

    const [totalPurchaseOfRose1, setTotalPurchaseOfRose1] = useState('');
    const [totalPurchaseOfRose2, setTotalPurchaseOfRose2] = useState('');
    //fetch Rose data
    useEffect(() => {
        const fetchData = async () => {
  
          const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
          if (!wakabaBaseUrl) {
              throw new Error('API base URL is not defined');
          }
            const response = await axios.get(`${wakabaBaseUrl}/stamprose`);
            initialRoseData(response.data);
        //   console.log('setRoseRows',response.data);
        };
        fetchData();
      }, []);
          // clear other three data 
    const initialRoseData =(roseData) => {
        const updatedData = roseData.map(data => ({
            ...data,
            numberOfSheets: 0,
            totalFaceValue: 0,
            purchasePrice: 0, // Replace with your desired value or logic
        })); 
        setRoseRows(updatedData);
        // console.log('updated Rose data',updatedData)
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

    const handleRoseSaveClick = () => {
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
    // const handleRoseDeleteClick = (index) => {
    //     setRoseRows(roseRows.filter((_, i) => i !== index));
    // };
    //calculate
    const calculateRose = (numberofsheets) => {
        const { stampValue } = editedRoseRow;
        // console.log('shetValue',sheetValue)
        if (stampValue) {
            const calculatedProduct = parseInt(stampValue) * parseInt(numberofsheets);
            setEditedRoseRow((prev) => ({ ...prev, totalFaceValue: calculatedProduct }));
            const caluclatePruchase =  parseInt(parseInt(calculatedProduct) * (1 - parseInt(stampRate[2].percent)/100));
            setEditedRoseRow((prev) => ({ ...prev, purchasePrice: caluclatePruchase }));
            // console.log('multiply---------', calculatedProduct,caluclatePruchase)              
        } else {
            setNewRoseRow((prev) => ({ ...prev, stampValue: '' }));
        }
    }
    //calculateRoseNew
    const calculateRoseNew = (index,data) => {
        if (index !== undefined) {
            const stampValue = parseInt(data[index].stampValue) || 0;
            const numberofsheets = parseInt(data[index].numberOfSheets) || 0;
            const calculatedProduct = stampValue * numberofsheets;
            const caluclatePruchase =  parseInt(parseInt(calculatedProduct) * (1 - parseInt(stampRate[2].percent)/100));
            const updatedRows = data.map((r, i) => 
                i === index ? { ...r, totalFaceValue: calculatedProduct, purchasePrice: caluclatePruchase} : r
            );
            setRoseRows(updatedRows);
        }
    };
       //calculate second table
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
            const rosepurchaseprice1 = roseRows.reduce((sum, item) => {
                if (item.stampValue >= 50) { 
                    return parseInt(sum) + parseInt(item.purchasePrice);
                }
                return sum; 
            }, 0);
            setTotalPurchaseOfRose1(rosepurchaseprice1);
            const rosepurchaseprice2 = roseRows.reduce((sum, item) => {
                if (item.stampValue < 50) { 
                    return parseInt(sum) + parseInt(item.purchasePrice);
                }
                return sum; 
            }, 0);
            setTotalPurchaseOfRose2(rosepurchaseprice2);
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

    const [totalPurchaseOfPack1, setTotalPurchaseOfPack1] = useState('');
    const [totalPurchaseOfPack2, setTotalPurchaseOfPack2] = useState('');
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
        const updatedData = packData.map(data => ({
            ...data,
            numberOfSheets: 0,
            totalFaceValue: 0,
            purchasePrice: 0, // Replace with your desired value or logic
        })); 
        setPackRows(updatedData);
        // console.log('updated data',updatedData)
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

    const handlePackSaveClick = () => {
        const updatedData = packRows.map((row, index) =>
            index === editPackIndex ? { ...row, ...editedPackRow } : row
        );
        setPackRows(updatedData);
        setEditPackIndex(-1); // Exit edit mode
        setEditedPackRow({
            type: '',
            stampValue: '',
            numberOfSheets: '0',
            totalFaceValue: '0',
            purchasePrice: '0'
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
    // const handlePackDeleteClick = (index) => {
    //     setPackRows(packRows.filter((_, i) => i !== index));
    // };
    //calculate
    const calculatePack = (numberofsheets) => {
        const { stampValue } = editedPackRow;
        // console.log('shetValue',sheetValue)
        if (stampValue) {
            const calculatedProduct = parseInt(stampValue) * parseInt(numberofsheets);
            setEditedPackRow((prev) => ({ ...prev, totalFaceValue: calculatedProduct }));
            const caluclatePruchase =  parseInt(parseInt(calculatedProduct) * (1 - parseInt(stampRate[2].percent)/100));
            setEditedPackRow((prev) => ({ ...prev, purchasePrice: caluclatePruchase }));
            // console.log('multiply---------', calculatedProduct,caluclatePruchase)              
        } else {
            setNewPackRow((prev) => ({ ...prev, stampValue: '' }));
        }
    }
    //calculatePackNew
    const calculatePackNew = (index,data) => {
        if (index !== undefined) {
            const stampValue = parseInt(data[index].stampValue) || 0;
            const numberofsheets = parseInt(data[index].numberOfSheets) || 0;
            const calculatedProduct = stampValue * numberofsheets;
            const caluclatePruchase =  parseInt(parseInt(calculatedProduct) * (1 - parseInt(stampRate[2].percent)/100));
            const updatedRows = data.map((r, i) => 
                i === index ? { ...r, totalFaceValue: calculatedProduct,purchasePrice: caluclatePruchase} : r
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
            const packpurchaseprice1 = packRows.reduce((sum, item) => {
                if (item.stampValue >= 50) { 
                    return parseInt(sum) + parseInt(item.purchasePrice);
                }
                return sum; 
            }, 0);
            setTotalPurchaseOfPack1(packpurchaseprice1);
            const packpurchaseprice2 = packRows.reduce((sum, item) => {
                if (item.stampValue < 50) { 
                    return parseInt(sum) + parseInt(item.purchasePrice);
                }
                return sum; 
            }, 0);
            setTotalPurchaseOfPack2(packpurchaseprice2);
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

    const [totalPurchaseOfCard1, setTotalPurchaseOfCard1] = useState('');
    const [totalPurchaseOfCard2, setTotalPurchaseOfCard2] = useState('');
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
        const updatedData = cardData.map(data => ({
            ...data,
            numberOfSheets: 0,
            totalFaceValue: 0,
            purchasePrice: 0, // Replace with your desired value or logic
        })); 
        setCardRows(updatedData);
        // console.log('updated data',updatedData)
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
    // const handleAddCardRow = async() => {
    //     if (inputCardShow) {
    //         try {
    //             const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
    //             if (!wakabaBaseUrl) {
    //                 throw new Error('API base URL is not defined');
    //             }
    //             await axios.post(`${wakabaBaseUrl}/stampcard/create`, newCardRow)
    //             .then(response => {
    //                 // console.log('success',response.data)
    //                 // setSheetRows(response.data);
    //                 initialCardData(response.data);
    //             })
    //             .catch(error => {
    //                 console.error("There was an error fetching the customer data!", error);
    //             }); // Send newRow data to the server
    //             //setCardRows((prevCardRows) => [...prevCardRows, { ...newCardRow, id: Date.now() }]);
    //             setNewCardRow({
    //                 stampValue: '',
    //                 numberOfSheets: '0',
    //                 totalFaceValue: '0',
    //                 purchasePrice: '0'
    //             });
    //           } catch (error) {
    //             console.error('Error adding row:', error);
    //           }
    //     }
    //     setInputCardShow(!inputCardShow);
    // };
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

    const handleCardSaveClick = () => {
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
    // const handleCardDeleteClick = (index) => {
    //     setCardRows(cardRows.filter((_, i) => i !== index));
    // };
    //calculate
    const calculateCard = (numberofsheets) => {
        const { stampValue } = editedCardRow;
        // console.log('shetValue',sheetValue)
        if (stampValue) {
            const calculatedProduct = parseInt(stampValue) * parseInt(numberofsheets);
            setEditedCardRow((prev) => ({ ...prev, totalFaceValue: calculatedProduct }));
            const caluclatePruchase =  parseInt(parseInt(calculatedProduct) * (1 - parseInt(stampRate[3].percent)/100));
            setEditedCardRow((prev) => ({ ...prev, purchasePrice: caluclatePruchase }));
            // console.log('multiply---------', calculatedProduct,caluclatePruchase)              
        } else {
            setNewPackRow((prev) => ({ ...prev, stampValue: '' }));
        }
    }
    //calculateCardNew
    const calculateCardNew = (index,data) => {
        if (index !== undefined) {
            const stampValue = parseInt(data[index].stampValue) || 0;
            const numberofsheets = parseInt(data[index].numberOfSheets) || 0;
            const calculatedProduct = stampValue * numberofsheets;
            const caluclatePruchase =  parseInt(parseInt(calculatedProduct) * (1 - parseInt(stampRate[3].percent)/100));
            const updatedRows = data.map((r, i) => 
                i === index ? { ...r, totalFaceValue: calculatedProduct,purchasePrice: caluclatePruchase} : r
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
                const cardpurchaseprice1 = cardRows.reduce((sum, item) => {
                    if (item.stampValue >= 50) { 
                        return parseInt(sum) + parseInt(item.purchasePrice);
                    }
                    return sum; 
                }, 0);
                setTotalPurchaseOfCard1(cardpurchaseprice1);
                const cardpurchaseprice2 = cardRows.reduce((sum, item) => {
                    if (item.stampValue < 50) { 
                        return parseInt(sum) + parseInt(item.purchasePrice);
                    }
                    return sum; 
                }, 0);
                setTotalPurchaseOfCard2(cardpurchaseprice2);
         }
        useEffect(() => {
            calculateCardTotal();
        }, [cardRows]);
    //-------------------------Total Calculation------------------------------------
    const [totalNumberOfStamp, setTotalNumberOfStamp] = useState('');
    const [totalStampFaceValue, setTotalStampFaceValue] = useState('');
    const [totalStampPurchasePrice, setTotalStampPurchasePrice] = useState('');
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
        setTotalStampPurchasePrice((parseInt(totalPurchaseOfSheet1) + parseInt(totalPurchaseOfSheet2) 
         +parseInt(totalPurchaseOfRose1) + parseInt(totalPurchaseOfRose2)
         +parseInt(totalPurchaseOfPack1) + parseInt(totalPurchaseOfPack2)
         +parseInt(totalPurchaseOfCard1) + parseInt(totalPurchaseOfCard2))
        );
    }
    useEffect(() => {
        calculateTotalResult();
    }, [totalNumberOfSheet1,totalNumberOfSheet2,totalNumberOfRose1,totalNumberOfRose2,totalNumberOfPack1,totalNumberOfPack2,totalNumberOfCard1,totalNumberOfCard2
        ,totalFaceValue1,totalFaceValue2,totalRoseFaceValue1,totalRoseFaceValue2,totalPackFaceValue1,totalPackFaceValue2,totalCardFaceValue1,totalCardFaceValue2
        ,totalPurchaseOfSheet1,totalPurchaseOfSheet2,totalPurchaseOfRose1,totalPurchaseOfRose2,totalPurchaseOfPack1,totalPurchaseOfPack2,totalPurchaseOfCard1,totalPurchaseOfCard2
    ]);
    //-------------------------------------send data and save-------------------------------------------

    const dispatch = useDispatch();
    const updateData = (data) => {
        dispatch(setStampsData(data));
    };

    const now = new Date();

    // Format the date as YYYY-MM-DD
    const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Tokyo' };
    const currentDay = new Intl.DateTimeFormat('ja-JP', optionsDate).format(now).replace(/\//g, '-');

    const sendStampData = async() => {
        const purchaseStampData = {sheetRows,roseRows,packRows,cardRows,
            totalNumberOfSheet1,totalNumberOfSheet2,totalNumberOfRose1,totalNumberOfRose2,totalNumberOfPack1,totalNumberOfPack2,totalNumberOfCard1,totalNumberOfCard2,
            totalFaceValue1,totalFaceValue2,totalRoseFaceValue1,totalRoseFaceValue2,totalPackFaceValue1,totalPackFaceValue2,totalCardFaceValue1,totalCardFaceValue2,
            totalPurchaseOfSheet1,totalPurchaseOfSheet2,totalPurchaseOfRose1,totalPurchaseOfRose2,totalPurchaseOfPack1,totalPurchaseOfPack2,totalPurchaseOfCard1,totalPurchaseOfCard2,
            totalNumberOfStamp,totalStampFaceValue,totalStampPurchasePrice}
        updateData(purchaseStampData);

        const sheetFilteredArray = sheetRows.filter(obj => obj.numberOfSheets !== 0);
        const sheetIds = sheetFilteredArray.map(obj => obj.id);
        const sheetValues = sheetFilteredArray.map(obj => obj.numberOfSheets);

        const roseFilteredArray = roseRows.filter(obj => obj.numberOfSheets !== 0);
        const roseIds = roseFilteredArray.map(obj => obj.id);
        const roseValues = roseFilteredArray.map(obj => obj.numberOfSheets);

        const packFilteredArray = packRows.filter(obj => obj.numberOfSheets !== 0);
        const packIds = packFilteredArray.map(obj => obj.id);
        const packValues = packFilteredArray.map(obj => obj.numberOfSheets);

        const cardFilteredArray = cardRows.filter(obj => obj.numberOfSheets !== 0);
        const cardIds = cardFilteredArray.map(obj => obj.id);
        const cardValues = cardFilteredArray.map(obj => obj.numberOfSheets);
        
        console.log('result data', purchaseStampData,customerId)
        if(customerId !== 'Initial Data') {
            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                } 
                const username = userData.full_name;
                const storeName = userData.store_name;
                const invoiceID = invoiceId;
                const stampData = {currentDay,customerId,invoiceID,username,storeName,userId, stampRate,
                    sheetIds,sheetValues,roseIds,roseValues,packIds,packValues,cardIds,cardValues,
                    totalNumberOfSheet1,totalNumberOfSheet2,totalNumberOfRose1,totalNumberOfRose2,totalNumberOfPack1,totalNumberOfPack2,totalNumberOfCard1,totalNumberOfCard2,
                    totalFaceValue1,totalFaceValue2,totalRoseFaceValue1,totalRoseFaceValue2,totalPackFaceValue1,totalPackFaceValue2,totalCardFaceValue1,totalCardFaceValue2,
                    totalPurchaseOfSheet1,totalPurchaseOfSheet2,totalPurchaseOfRose1,totalPurchaseOfRose2,totalPurchaseOfPack1,totalPurchaseOfPack2,totalPurchaseOfCard1,totalPurchaseOfCard2,
                }
                console.log('stampData',stampData)
                await axios.post(`${wakabaBaseUrl}/purchaseinvoice/stamps`, stampData)
                .then(response => {
                    gotoInvoicePurchase();
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                }); // Send newRow data to the server
              } catch (error) {
                console.error('Error adding row:', error);
              }
        }

    }
//------------------------------------
    // return stamp inventory list page
    const gotoInvoicePurchase = () => {
        if(customer && customer.customer_status === 'beforecreating') {
            navigate(`/invoiceforpurchaseofbroughtblank`);
        }else {
            navigate(`/invoiceforpurchaseofbrought/${customerId}`);
        }
    }
    // goto stamp purchase interest starage change
    const gotoStampPurchaseInterestChange = () => {
        navigate('/stamppurchaseinterestratechange');
    }

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <h2 className="text-[#70685a] text-center font-bold text-[15px] flex justify-end mt-3" style={{ paddingRight: '1%' }}>2023/12/01(金)&nbsp;&nbsp;21:51</h2>
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full ">
                    <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">日本の切手・ハガキ・レ夕一パック 買取計算書</h2>
                    <div className='stamp-purchase flex justify-evenly '>
                        <div className='w-full flex justify-center mt-5'>
                            <button type="button" onClick={gotoInvoicePurchase}
                                className=" py-1 min-w-[160px] text-[#70685a] text-[15px] rounded-full font-bold outline-none border border-[#70685a] hover:bg-[#524c3b] hover:text-white transition-all duration-300">
                                買取計算書へ戻る
                            </button>
                        </div>
                        <div className='w-full flex justify-center mt-5'>
                            < button type="button"  onClick={sendStampData}
                                className="w-40 px-3 py-2 font-bold rounded-lg justify-center text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                保存
                            </button>
                        </div>
                        <div className='w-full flex justify-center mt-5'>
                            <button type="button" onClick={gotoStampPurchaseInterestChange}
                                className=" py-1 min-w-[160px] text-[#70685a] text-[15px] rounded-full font-bold outline-none border border-[#70685a] hover:bg-[#524c3b] hover:text-white transition-all duration-300">
                                買取利率変更申請
                            </button>
                        </div>
                    </div>
                    {/* totoal data */}
                    <div className='flex justify-around mt-5'>
                        <div className='flex'>
                            <LabelComponent value="枚数合計" className='w-full font-bold text-right pr-3' />
                            <InputComponent value={totalNumberOfStamp || ''} className='w-full h-10' disabled={true}/>
                        </div>
                        <div className='flex'>
                            <LabelComponent value="額面総額合計(￥)"  className='w-full font-bold text-right pr-3'/>
                            <InputComponent value={totalStampFaceValue || ''} className='w-full h-10' disabled={true}/>
                        </div>
                        <div className='flex'>
                            <LabelComponent value="買取額合計(￥)" className='w-full font-bold text-right pr-3' />
                            <InputComponent value={totalStampPurchasePrice || ''} className='w-full h-10' disabled={true}/>
                        </div>

                    </div>
                    {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
                    {/* mainpart */}
                    <div className=' stamp-related-inventory-list flex gap-5'>
                        {/* ---------------------stamp sheet-------------------------- */}
                        <div className='stamp-related-inventory-list-one mt-5 mb-10 w-full'>
                            {/* first */}
                            <div className='flex justify-center h-20 w-full'>
                                <div className='flex w-full'>
                                    <div className='flex justify-end w-1/2'>
                                        <div className='flex'>
                                            <div className='w-10 flex flex-col justify-center'><img src={StampSheet} alt="aaa"></img></div>
                                            <div className='flex flex-col justify-center'><LabelComponent value="切手シート" className='pl-5 !text-[20px] font-bold' /></div>
                                        </div>
                                    </div>
                                    <div className='flex justify-end w-1/2'>
                                        <div>
                                            <div className='text-center flex justify-center'>
                                                <LabelComponent value="買取利率(%)" className='text-center flex justify-center' style={{ width: '100px', fontWeight: 'bold' }} />
                                            </div>
                                            <InputComponent  value={(stampRate?.length>0 && stampRate[0].percent) || ''}  type="number" style={{ width: '100px', height: '30px' }} disabled={true}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* second */}
                            <div className='flex justify-end w-full h-30 w-full'>
                                <div className='mt-5 flex flex-col justify-end' style={{ width: '70%' }}>
                                    <table className=' text-center w-full' style={Table}>
                                        <thead className='bg-white z-10 text-[14px]'>
                                            <tr>
                                                <th ></th>
                                                <th >シート数合計</th>
                                                <th >額面総額合計</th>
                                                <th >買取額合計</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>下記合計</td>
                                                <td style={Td}>{parseInt(totalNumberOfSheet1) + parseInt(totalNumberOfSheet2) || ''}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(totalFaceValue1 || 0) + parseInt(totalFaceValue2 || 0)).toLocaleString()}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(totalPurchaseOfSheet1 || 0) + parseInt(totalPurchaseOfSheet2 || 0)).toLocaleString()}</td>
                                            </tr>
                                            <tr>
                                                <td>50円以上</td>
                                                <td style={Td}>{parseInt(totalNumberOfSheet1) || ''}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(totalFaceValue1 || 0)).toLocaleString()}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(totalPurchaseOfSheet1 || 0)).toLocaleString()}</td>
                                            </tr>
                                            <tr>
                                                <td>50円未満</td>
                                                <td style={Td}>{parseInt(totalNumberOfSheet2) || ''}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(totalFaceValue2 || 0)).toLocaleString()}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(totalPurchaseOfSheet2 || 0)).toLocaleString()}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* third */}
                            <div className='mt-5 mr-5 w-full'>
                                <div>
                                    <div>
                                        <table className=' text-center w-full' style={Table}>
                                            <thead className='!h-8 text-[14px]'>
                                                <tr>
                                                    <th style={Th} className='pl-1'>切手1枚の額面</th>
                                                    <th style={Th} className='pl-1 pr-1'>面数</th>
                                                    <th style={Th}  >シート額面</th>
                                                    <th style={Th} className='pl-1 pr-1'>シート数</th>
                                                    <th style={Th} >額面総額</th>
                                                    <th style={Th} className='pl-1 pr-1'>買取額</th>
                                                    {/* <th style={Th} >{editSheetIndex === -1 ? '編集する' : 'セーブ'}</th>
                                                    <th className='whitespace-nowrap pl-3' style={{display:'none'}}>{editSheetIndex === -1 ? '' : '戻る'}</th> */}
                                                </tr>
                                            </thead>
                                            <tbody className='!h-8'>
                                                {sheetRows?.length > 0 && sheetRows.map((row, Index) => (
                                                    <tr key={Index}  className='!h-6'>
                                                        <td style={Td} className='text-right'>
                                                            ￥{(parseInt(row.stampValue || 0)).toLocaleString()}
                                                        </td>
                                                        <td style={Td}>
                                                            {(parseInt(row.numberOfSides || 0)).toLocaleString()}
                                                        </td>
                                                        <td style={Td} className='text-right'>
                                                            ￥{(parseFloat(row.sheetValue || 0)).toLocaleString()}
                                                        </td>
                                                        {/* <td style={Td}>
                                                            {editSheetIndex === Index ? (
                                                                <InputComponent type='number' name='numberOfSheets' value={editedSheetRow.numberOfSheets || ''} onChange={handleSheetInputChange} className='!w-20 h-8 text-[#70685a] !border-[red]' />
                                                            ) : (parseInt(row.numberOfSheets || 0))}
                                                        </td> */}
                                                        <td style={Td} className='w-40'>
                                                            <InputComponent
                                                                name='numberOfSheets'
                                                                type="number"
                                                                value={row.numberOfSheets || ''}
                                                                onChange={(e) => {
                                                                    const value = e.target.value;
                                                                    const updatedRows = sheetRows.map((r, i) => 
                                                                        i === Index ? { ...r, numberOfSheets: value } : r
                                                                    );
                                                                    setSheetRows(updatedRows);
                                                                    calculateSheetNew(Index,updatedRows);
                                                                }}
                                                                className='w-40 h-8 text-[#70685a]'
                                                            />
                                                        </td>
                                                        <td style={Td} className='text-right'>
                                                            ￥{(parseInt(row.totalFaceValue || 0)).toLocaleString()}
                                                        </td>
                                                        <td style={Td} className='text-right'>
                                                            ￥{(parseInt(row.purchasePrice || 0)).toLocaleString()}
                                                        </td>
                                                        <td style={{display:'none'}}>
                                                            {editSheetIndex === Index ? (
                                                                <div>
                                                                    <button onClick={() => handleSheetSaveClick(Index)} className='w-7'>
                                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <button onClick={() => handleSheetEditClick(Index)} className='w-7'>
                                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </td>
                                                        <td style={{display:'none'}}>
                                                            {editSheetIndex === Index ? (
                                                                <div>
                                                                    <button onClick={() => handleSheetCancelClick(Index)} className='w-7'>
                                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            ) : (''
                                                                // <div>
                                                                //     <button onClick={() => handleSheetDeleteClick(Index)} className='w-7'>
                                                                //         <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                                                                //     </button>
                                                                // </div>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                                {inputSheetShow ?
                                                    <tr>
                                                        <td style={Td}>
                                                            <input
                                                                type="number"
                                                                name="stampValue"
                                                                className='w-full !border-[red]'
                                                                value={newSheetRow.stampValue || ''}
                                                                onChange={handleSheetChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="number"
                                                                name="numberOfSides"
                                                                className='w-20 !border-[red] '
                                                                value={newSheetRow.numberOfSides || ''}
                                                                onChange={handleSheetChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="sheetValue"
                                                                className='w-full'
                                                                disabled={true}
                                                                value={newSheetRow.sheetValue || ''}
                                                                onChange={handleSheetChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="numberOfSheets"
                                                                className='w-full'
                                                                disabled={true}
                                                                value={newSheetRow.numberOfSheets || ''}
                                                                onChange={handleSheetChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="totalFaceValue"
                                                                className='w-full'
                                                                disabled={true}
                                                                value={newSheetRow.totalFaceValue || ''}
                                                                onChange={handleSheetChange}

                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="purchasePrice"
                                                                className='w-full'
                                                                disabled={true}
                                                                value={newSheetRow.purchasePrice || ''}
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
                        {/* --------------------stamp rose------------------- */}
                        <div className='stamp-related-inventory-list-one mt-5 w-full'>
                            {/* first */}
                            <div className='flex justify-center h-20 w-full'>
                                <div className='flex w-full'>
                                    <div className='flex justify-end w-1/2'>
                                        <div className='flex'>
                                            <div className='w-10 flex flex-col justify-center'><img src={StampRose} alt="aaa"></img></div>
                                            <div className='flex flex-col justify-center'><LabelComponent value="切手バラ" className='pl-5 !text-[20px] font-bold' /></div>
                                        </div>
                                    </div>
                                    <div className='flex justify-end w-1/2'>
                                        <div>
                                            <div>
                                                <LabelComponent value="買取利率(%)" className='text-center flex justify-center' style={{ width: '100px', fontWeight: 'bold' }} />
                                            </div>
                                            <InputComponent value={(stampRate?.length>0 && stampRate[1].percent) || ''} type='number' style={{ width: '100px', height: '30px' }} disabled={true}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* second */}
                            <div className='flex justify-end w-full h-30 mt-2' >
                                <div className='mt-5 flex flex-col justify-end' style={{ width: '70%' }}>
                                    <table className=' text-center w-full text-[14px]' style={Table}>
                                        <thead>
                                            <tr>
                                                <th ></th>
                                                <th style={Th}>台紙数合計</th>
                                                <th style={Th}>額面総額合計</th>
                                                <th style={Th}>買取額合計</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>下記合計</td>
                                                <td style={Td}>{parseInt(totalNumberOfRose1) + parseInt(totalNumberOfRose2) || ''}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(totalRoseFaceValue1 || 0) + parseInt(totalRoseFaceValue2 || 0)).toLocaleString()}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(totalPurchaseOfRose1 || 0) + parseInt(totalPurchaseOfRose2 || 0)).toLocaleString()}</td>
                                            </tr>
                                            <tr>
                                                <td>50円以上</td>
                                                <td style={Td}>{parseInt(totalNumberOfRose1) || ''}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(totalRoseFaceValue1 || 0)).toLocaleString()}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(totalPurchaseOfRose1 || 0)).toLocaleString()}</td>
                                            </tr>
                                            <tr>
                                                <td>50円未満</td>
                                                <td style={Td}>{parseInt(totalNumberOfRose2) || ''}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(totalRoseFaceValue2 || 0)).toLocaleString()}</td>
                                                <td style={Td} className='text-right'>￥{(parseInt(totalPurchaseOfRose2 || 0)).toLocaleString()}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* third */}
                            <div className='mt-5 w-full'>
                                <div>
                                    <div>
                                        <table className=' text-center w-full' style={Table}>
                                            <thead className='!h-8 text-[14px]'>
                                                <tr>
                                                    <th style={Th}>切手1枚の額面</th>
                                                    <th style={Th}>枚数</th>
                                                    <th style={Th}>額面総額</th>
                                                    <th style={Th}>買取額</th>
                                                    <th style={{display:'none'}}>{editRoseIndex === -1 ? '編集する' : 'セーブ'}</th>
                                                    <th style={{display:'none'}} className='whitespace-nowrap pl-3'>{editRoseIndex === -1 ? '' : '戻る'}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {roseRows?.length > 0 && roseRows.map((row, Index) => (
                                                    <tr key={Index} className='!h-6'>
                                                        <td style={Td} className='text-right'>
                                                            ￥{(parseInt(row.stampValue || 0)).toLocaleString()}
                                                        </td>
                                                        {/* <td style={Td}>
                                                            {editRoseIndex === Index ? (
                                                                <InputComponent type='number' name='numberOfSheets' value={editedRoseRow.numberOfSheets || ''} onChange={handleRoseInputChange} className='w-full h-8 text-[#70685a] !border-[red]' />
                                                            ) : (row.numberOfSheets || '')}
                                                        </td> */}
                                                        <td style={Td} className='w-40'>
                                                            <InputComponent
                                                                name='numberOfSheets'
                                                                type="number"
                                                                value={row.numberOfSheets || ''}
                                                                onChange={(e) => {
                                                                    const value = e.target.value;
                                                                    const updatedRows = roseRows.map((r, i) => 
                                                                        i === Index ? { ...r, numberOfSheets: value } : r
                                                                    );
                                                                    setRoseRows(updatedRows);
                                                                    calculateRoseNew(Index,updatedRows);
                                                                }}
                                                                className='w-40 h-8 text-[#70685a]'
                                                            />
                                                        </td>
                                                        <td style={Td} className='text-right'>
                                                            ￥{(parseInt(row.totalFaceValue || 0)).toLocaleString()}
                                                        </td>
                                                        <td style={Td} className='text-right'>
                                                            ￥{(parseInt(row.purchasePrice || 0)).toLocaleString()}
                                                        </td>
                                                        <td style={{display:'none'}}>
                                                            {editRoseIndex === Index ? (
                                                                <div>
                                                                    <button onClick={() => handleRoseSaveClick(Index)} className='w-7'>
                                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <button onClick={() => handleRoseEditClick(Index)} className='w-7'>
                                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </td>
                                                        <td style={{display:'none'}}>
                                                            {editRoseIndex === Index ? (
                                                                <div>
                                                                    <button onClick={() => handleRoseCancelClick(Index)} className='w-7'>
                                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            ) : (''
                                                                // <div>
                                                                //     <button onClick={() => handleRoseDeleteClick(Index)} className='w-7'>
                                                                //         <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                                                                //     </button>
                                                                // </div>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                                {inputRoseShow ?
                                                    <tr>
                                                        <td style={Td}>
                                                            <input
                                                                type="number"
                                                                name="stampValue"
                                                                className='w-full !border-[red]'
                                                                value={newRoseRow.stampValue || ''}
                                                                onChange={handleRoseChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name=" numberOfSheets"
                                                                className='w-full'
                                                                disabled={true}
                                                                value={newRoseRow.numberOfSheets || ''}
                                                                onChange={handleRoseChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="totalFaceValue"
                                                                className='w-full'
                                                                disabled={true}
                                                                value={newRoseRow.totalFaceValue || ''}
                                                                onChange={handleRoseChange}

                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="purchasePrice"
                                                                className='w-full'
                                                                disabled={true}
                                                                value={newRoseRow.purchasePrice || ''}
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
                        {/* ----------------------Letter pack--------------- */}
                        <div className='stamp-related-inventory-list-one mt-5 w-fll ml-5 '>
                            {/* first */}
                            <div className='flex justify-center h-30 mb-2'>
                                <div className='flex w-full'>
                                    <div className='flex justify-end w-1/2'>
                                        <div className='flex'>
                                            <div className='w-10 flex flex-col justify-center'><img src={LetterPack} alt="aaa"></img></div>
                                            <div className='flex flex-col justify-center'><LabelComponent value="レ夕一パック" className='pl-5 !text-[20px] font-bold whitespace-nowrap' /></div>
                                        </div>
                                    </div>
                                    <div className='flex justify-end w-1/2'>
                                        <div>
                                            <div className='text-center flex justify-center'>
                                                <LabelComponent value="買取利率(%)" style={{ width: '100px', fontWeight: 'bold' }} />
                                            </div>
                                            <InputComponent value={(stampRate?.length>0 && stampRate[2].percent) || ''} tylpe='number' style={{ width: '100px', height: '30px' }} disabled={true}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* second */}
                            <div className='flex justify-end w-full h-[120px]' >
                                <div className='mt-5 flex flex-col justify-end' style={{ width: '80%' }}>
                                    <div className='flex flex-col justify-end'>
                                        <table className=' text-center w-full' style={Table}>
                                            <thead className='!h-8 text-[14px]'>
                                                <tr>
                                                    <th ></th>
                                                    <th style={Th}>枚数合計</th>
                                                    <th style={Th}>額面総額合計</th>
                                                    <th style={Th}>買取額合計</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>下記合計</td>
                                                    <td style={Td}>{parseInt(totalNumberOfPack1) + parseInt(totalNumberOfPack2) || ''}</td>
                                                    <td style={Td} className='text-right'>￥{(parseInt(totalPackFaceValue1 || 0) + parseInt(totalPackFaceValue2 || 0)).toLocaleString()}</td>
                                                    <td style={Td} className='text-right'>￥{(parseInt(totalPurchaseOfPack1 || 0) + parseInt(totalPurchaseOfPack2 || 0)).toLocaleString()}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* third */}
                            <div className='mt-5 w-full' >
                                <div>
                                    <div>
                                        <table className=' text-center w-full' style={Table}>
                                            <thead className='!h-8 text-[14px]'>
                                                <tr>
                                                    <th style={Th} className='p1-1 pr-1 !w-20'>種別</th>
                                                    <th style={Th} >額面</th>
                                                    <th style={Th} className='pl-1 pr-1'>枚数</th>
                                                    <th style={Th} >額面総額</th>
                                                    <th style={Th} className='pr-1'>買取額</th>
                                                    <th style={{display:'none'}}>{editPackIndex === -1 ? '編集する' : 'セーブ'}</th>
                                                    <th style={{display:'none'}} className='whitespace-nowrap pl-3'>{editPackIndex === -1 ? '' : '戻る'}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {packRows?.length > 0 && packRows.map((row, Index) => (
                                                    <tr key={Index} className='!h-6'>
                                                        <td style={Td} >
                                                            <div className='w-20'>
                                                                {row.type || ''}
                                                            </div>
                                                        </td>
                                                        <td style={Td} >
                                                            <div className='w-20 text-right'>
                                                                ￥{(parseInt(row.stampValue || 0)).toLocaleString()}
                                                            </div>
                                                        </td>
                                                        {/* <td style={Td}>
                                                            {editPackIndex === Index ? (
                                                                <InputComponent type="number" name='numberOfSheets' value={editedPackRow.numberOfSheets || ''} onChange={handlePackInputChange} className='w-20 h-8 text-[#70685a] !border-[red]' />
                                                            ) : (row.numberOfSheets || '')}
                                                        </td> */}
                                                        <td style={Td}>
                                                            <InputComponent
                                                                name='numberOfSheets'
                                                                type="number"
                                                                value={row.numberOfSheets || ''}
                                                                onChange={(e) => {
                                                                    const value = e.target.value;
                                                                    const updatedRows = packRows.map((r, i) => 
                                                                        i === Index ? { ...r, numberOfSheets: value } : r
                                                                    );
                                                                    setPackRows(updatedRows);
                                                                    calculatePackNew(Index,updatedRows);
                                                                }}
                                                                className='w-40 h-8 text-[#70685a]'
                                                            />
                                                        </td>
                                                        <td style={Td} className='text-right'>
                                                            ￥{(parseInt(row.totalFaceValue || 0)).toLocaleString()}
                                                        </td>
                                                        <td style={Td} className='text-right'>
                                                            ￥{(parseInt(row.purchasePrice || 0)).toLocaleString()}
                                                        </td>
                                                        <td style={{display:'none'}}>
                                                            {editPackIndex === Index ? (
                                                                <div>
                                                                    <button onClick={() => handlePackSaveClick(Index)} className='w-7'>
                                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <button onClick={() => handlePackEditClick(Index)} className='w-7'>
                                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </td>
                                                        <td style={{display:'none'}}>
                                                            {editPackIndex === Index ? (
                                                                <div>
                                                                    <button onClick={() => handlePackCancelClick(Index)} className='w-7'>
                                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            ) : (''
                                                                // <div>
                                                                //     <button onClick={() => handlePackDeleteClick(Index)} className='w-7'>
                                                                //         <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                                                                //     </button>
                                                                // </div>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                                {inputPackShow ?
                                                    <tr>
                                                        <td style={Td}>
                                                            <input
                                                                type="text"
                                                                name="type"
                                                                className='!w-20 !border-[red]'
                                                                value={newPackRow.type || ''}
                                                                onChange={handlePackChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="stampValue"
                                                                className='!w-20 !border-[red]'
                                                                value={newPackRow.stampValue || ''}
                                                                onChange={handlePackChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="numberOfSheets"
                                                                className='w-full'
                                                                disabled={true}
                                                                value={newPackRow.numberOfSheets || ''}
                                                                onChange={handlePackChange}

                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="totalFaceValue"
                                                                className='w-full'
                                                                disabled={true}
                                                                value={newPackRow.totalFaceValue || ''}
                                                                onChange={handlePackChange}

                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="purchasePrice"
                                                                className='w-full'
                                                                disabled={true}
                                                                value={newPackRow.purchasePrice || ''}
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
                                {/* -----------------------------------------------------Postcard------------------------------------------ */}
                                <div>
                                    <div className='mt-10'>
                                        <div className='flex justify-center'>
                                            <div className='flex w-full'>
                                                <div className='flex justify-end w-1/2'>
                                                    <div className='flex'>
                                                        <div className='w-10 flex flex-col justify-center'><img src={PostCard} alt="aaa"></img></div>
                                                        <div className='flex flex-col justify-center'><LabelComponent value="ハガキ" className='pl-5 !text-[20px] font-bold' /></div>
                                                    </div>
                                                </div>
                                                <div className='flex justify-end w-1/2'>
                                                    <div>
                                                        <div >
                                                            <LabelComponent value="買取利率(%)" className='text-center flex justify-center' style={{ width: '100px', fontWeight: 'bold' }} />
                                                        </div>
                                                        <InputComponent value={(stampRate?.length>0 && stampRate[3].percent) || ''} type='number' style={{ width: '100px', height: '30px' }} disabled={true}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-end'>
                                        <div className='mt-5 flex flex-col justify-end' style={{ width: '80%' }}>
                                            <table className=' text-center w-full' style={Table}>
                                                <thead className='text-[14px]'>
                                                    <tr>
                                                        <th></th>
                                                        <th style={Th}>枚数計</th>
                                                        <th style={Th}>額面総額合計</th>
                                                        <th style={Th}>買取額合計</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>下記合計</td>
                                                        <td style={Td}>{parseInt(totalNumberOfCard1) + parseInt(totalNumberOfCard2) || ''}</td>
                                                        <td style={Td} className='text-right'>￥{(parseInt(totalCardFaceValue1 || 0) + parseInt(totalCardFaceValue2 || 0)).toLocaleString()}</td>
                                                        <td style={Td} className='text-right'>￥{(parseInt(totalPurchaseOfCard1 || 0) + parseInt(totalPurchaseOfCard2 || 0)).toLocaleString()}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>50円以上</td>
                                                        <td style={Td}>{parseInt(totalNumberOfCard1) || ''}</td>
                                                        <td style={Td} className='text-right'>￥{(parseInt(totalCardFaceValue1 || 0)).toLocaleString()}</td>
                                                        <td style={Td} className='text-right'>￥{(parseInt(totalPurchaseOfCard1 || 0)).toLocaleString()}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>50円未満</td>
                                                        <td style={Td}>{parseInt(totalNumberOfCard2) || ''}</td>
                                                        <td style={Td} className='text-right'>￥{(parseInt(totalCardFaceValue2 || 0)).toLocaleString()}</td>
                                                        <td style={Td} className='text-right'>￥{(parseInt(totalPurchaseOfCard2 || 0)).toLocaleString()}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className='mt-5 ml-5'>

                                        <div>
                                            <div>
                                                <table className=' text-center w-full' style={Table}>
                                                    <thead className='text-[14px]'>
                                                        <tr>
                                                            <th style={Th} className='pl-1 pr-1'>額面</th>
                                                            <th style={Th} className='w-20' >枚数</th>
                                                            <th style={Th} className='pl-1 pr-1'>額面総額</th>
                                                            <th style={Th} className='pl-1 pr-1'>買取額</th>
                                                            <th style={{display:'none'}}>{editCardIndex === -1 ? '編集する' : 'セーブ'}</th>
                                                            <th style={{display:'none'}} className='whitespace-nowrap pl-3'>{editCardIndex === -1 ? '' : '戻る'}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {cardRows?.length > 0 && cardRows.map((row, Index) => (
                                                            <tr key={Index} >
                                                                <td style={Td} className='text-right'>
                                                                    ￥{(parseInt(row.stampValue || 0)).toLocaleString()}
                                                                </td>
                                                                {/* <td style={Td}>
                                                                    {editCardIndex === Index ? (
                                                                        <InputComponent type='number' name='numberOfSheets' value={editedCardRow.numberOfSheets || ''} onChange={handleCardInputChange} className='w-20 h-8 text-[#70685a] !border-[red]' />
                                                                    ) : (row.numberOfSheets || '')}
                                                                </td> */}
                                                                <td style={Td}>
                                                                    <InputComponent
                                                                        name='numberOfSheets'
                                                                        type="number"
                                                                        value={row.numberOfSheets || ''}
                                                                        onChange={(e) => {
                                                                            const value = e.target.value;
                                                                            const updatedRows = cardRows.map((r, i) => 
                                                                                i === Index ? { ...r, numberOfSheets: value } : r
                                                                            );
                                                                            setCardRows(updatedRows);
                                                                            calculateCardNew(Index,updatedRows);
                                                                        }}
                                                                        className='w-40 h-8 text-[#70685a]'
                                                                    />
                                                                </td>
                                                                <td style={Td} className='text-right'>
                                                                    ￥{(parseInt(row.totalFaceValue || 0)).toLocaleString()}
                                                                </td>
                                                                <td style={Td} className='text-right'>
                                                                    ￥{(parseInt(row.purchasePrice || 0)).toLocaleString()}
                                                                </td>
                                                                <td style={{display:'none'}}>
                                                                    {editCardIndex === Index ? (
                                                                        <div>
                                                                            <button onClick={() => handleCardSaveClick(Index)} className='w-7'>
                                                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                                                                            </button>
                                                                        </div>
                                                                    ) : (
                                                                        <div>
                                                                            <button onClick={() => handleCardEditClick(Index)} className='w-7'>
                                                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                                                                            </button>
                                                                        </div>
                                                                    )}
                                                                </td>
                                                                <td style={{display:'none'}}>
                                                                    {editCardIndex === Index ? (
                                                                        <div>
                                                                            <button onClick={() => handleCardCancelClick(Index)} className='w-7'>
                                                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                                                            </button>
                                                                        </div>
                                                                    ) : (''
                                                                        // <div>
                                                                        //     <button onClick={() => handleCardDeleteClick(Index)} className='w-7'>
                                                                        //         <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                                                                        //     </button>
                                                                        // </div>
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        {inputCardShow ?
                                                            <tr>
                                                                <td style={Td}>
                                                                    <input
                                                                        type="number"
                                                                        name="stampValue"
                                                                        className='w-full !border-[red]'
                                                                        value={newCardRow.stampValue}
                                                                        onChange={handleCardChange || ''}
                                                                    />
                                                                </td>
                                                                <td style={Td} >
                                                                    <input
                                                                        type="text"
                                                                        name="numberOfSheets"
                                                                        className='w-full'
                                                                        disabled={true}
                                                                        value={newCardRow.numberOfSheets || ''}
                                                                        onChange={handleCardChange}

                                                                    />
                                                                </td>
                                                                <td style={Td} >
                                                                    <input
                                                                        type="text"
                                                                        name="totalFaceValue"
                                                                        className='w-full'
                                                                        disabled={true}
                                                                        value={newCardRow.totalFaceValue || ''}
                                                                        onChange={handleCardChange}

                                                                    />
                                                                </td>
                                                                <td style={Td} >
                                                                    <input
                                                                        type="text"
                                                                        name="purchasePrice"
                                                                        className='w-full'
                                                                        disabled={true}
                                                                        value={newCardRow.purchasePrice || ''}
                                                                        onChange={handleCardChange}

                                                                    />
                                                                </td>
                                                            </tr> : ''}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* <div className='flex justify-center mt-2'>
                                            <button type="button" onClick={handleAddCardRow}
                                                className="w-5 h-5 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                    <path
                                                        d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                        data-original="#000000" />
                                                </svg>
                                            </button>
                                        </div> */}
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

export default StampRelatedPurchaseStatement;