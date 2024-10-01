import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import StampSheet from '../../Assets/img/stampsheet.png'
import LetterPack from '../../Assets/img/letterpack.png'
import StampRose from '../../Assets/img/stamprose.png'
import PostCard from '../../Assets/img/postcard.png'
import LabelComponent from '../../Components/Common/LabelComponent';
import InputComponent from '../../Components/Common/InputComponent';
import DateAndTime from '../../Components/Common/PickData';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { setOutboundStamp } from '../../redux/sales/actions';


const StampRelatedInventoryList = () => {
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
        whiteSpace: 'nowrap'
    };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace: 'nowrap'
    };

    const dispatch = useDispatch();

    const updateData = (data) => {
    dispatch(setOutboundStamp(data));
    };

    //dynamic Table operation
    //------------Sheet---------------------------------
    const [sheetRows, setSheetRows] = useState([]);
    const [totalNumberOfSheet1, setTotalNumberofSheet1] = useState('');
    const [totalNumberOfSheet2, setTotalNumberofSheet2] = useState('');
    const [totalFaceValue1, setFaceValue1] = useState('');
    const [totalFaceValue2, setFacevalue2] = useState('');

    //fetch sheet data
    useEffect(() => {
        const fetchData = async () => {

            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const response = await axios.get(`${wakabaBaseUrl}/stampsheet`);
            initialSheetData(response.data);
        };
        fetchData();
    }, []);
    // clear other three data 
    const initialSheetData = (sheetData) => {
        setSheetRows(sheetData);
        // console.log('updated data',updatedData)
    }

    const [inputSheetShow, setInputSheetShow] = useState(false);
    const [newSheetRow, setNewSheetRow] = useState({
        stampValue: '',
        numberOfSides: '',
        sheetValue: '',
        numberOfSheets: '0',
        totalFaceValue: '0'
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
            const calculatedProduct = Number(stampValue) * Number(numberOfSides);
            setNewSheetRow((prev) => ({ ...prev, sheetValue: calculatedProduct }));
            // console.log('multiply', calculatedProduct)
        } else {
            setNewSheetRow((prev) => ({ ...prev, sheetValue: '' }));
        }
    }, [newSheetRow.stampValue, newSheetRow.numberOfSides]);
    // Add a new row to the table
    const handleAddSheetRow = async () => {
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
        numberOfSheets: '',
        totalFaceValue: ''
    });
    const handleSheetInputChange = (e) => {
        const { name, value } = e.target;
        setEditedSheetRow({ ...editedSheetRow, [name]: value });
        if (name === 'numberOfSheets') {
            calculateSheet(value);
        }
    };

    const handleSheetEditClick = (index) => {
        setEditSheetIndex(index);
        setEditedSheetRow(sheetRows[index]); // Populate the input fields with the selected row's data
    };

    const handleSheetSaveClick = async () => {
        const updatedData = sheetRows.map((row, index) =>
            index === editSheetIndex ? { ...row, ...editedSheetRow } : row
        );
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.post(`${wakabaBaseUrl}/stampsheet/update`, editedSheetRow)
                .then(response => {
                    // console.log('success',response.data)
                    // setSheetRows(response.data);
                    initialSheetData(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                }); // Send newRow data to the server
        } catch (error) {
            console.error('Error adding row:', error);
        }
        // setSheetRows(updatedData);
        setEditSheetIndex(-1); // Exit edit mode
        setEditedSheetRow({
            stampValue: '',
            numberOfSides: '',
            sheetValue: '',
            numberOfSheets: '0',
            totalFaceValue: '0'
        }); // Reset editedRow state
    };

    const handleSheetCancelClick = () => {
        setEditSheetIndex(-1);
        setEditedSheetRow({
            stampValue: '',
            numberOfSides: '',
            sheetValue: '',
            numberOfSheets: '',
            totalFaceValue: ''
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
            const calculatedProduct = Number(sheetValue) * Number(numberofsheets);
            setEditedSheetRow((prev) => ({ ...prev, totalFaceValue: calculatedProduct }));
        } else {
            setNewSheetRow((prev) => ({ ...prev, sheetValue: '' }));
        }
    }
    //calculate second table
    const calculateSheetTotal = () => {
        // Calculate the sum
        const totalnumberofsheet1 = sheetRows.reduce((sum, item) => {
            if (item.stampValue >= 50) {
                return parseFloat(sum) + parseFloat(item.numberOfSheets);
            }
            return sum;
        }, 0);
        setTotalNumberofSheet1(totalnumberofsheet1);
        const totalnumberofsheet2 = sheetRows.reduce((sum, item) => {
            if (item.stampValue < 50) {
                return parseFloat(sum) + parseFloat(item.numberOfSheets);
            }
            return sum;
        }, 0);
        // console.log('sum of totalnumberofsheet',totalnumberofsheet2)
        setTotalNumberofSheet2(totalnumberofsheet2);
        const facevalue1 = sheetRows.reduce((sum, item) => {
            if (item.stampValue >= 50) {
                return parseFloat(sum) + parseFloat(item.totalFaceValue);
            }
            return sum;
        }, 0);
        setFaceValue1(facevalue1);
        const facevalue2 = sheetRows.reduce((sum, item) => {
            if (item.stampValue < 50) {
                return parseFloat(sum) + parseFloat(item.totalFaceValue);
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
    useEffect(() => {
        const fetchData = async () => {

            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const response = await axios.get(`${wakabaBaseUrl}/stamppasting`);
            initialPastingData(response.data);
            // console.log('setPastingRows', response.data);
        };
        fetchData();
    }, []);
    // clear other three data 
    const initialPastingData = (pastingData) => {
        setPastingRows(pastingData);
        // console.log('updated data',updatedData)
    }

    const [inputPastingShow, setInputPastingShow] = useState(false);
    const [newPastingRow, setNewPastingRow] = useState({
        stampValue: '',
        mountValue: '',
        numberOfMounts: '0',
        totalFaceValue: '0'
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
            const calculatedProduct = Number(stampValue) * Number(25);
            setNewPastingRow((prev) => ({ ...prev, mountValue: calculatedProduct }));
            // console.log('multiply', calculatedProduct)
        } else {
            setNewPastingRow((prev) => ({ ...prev, mountValue: '' }));
        }
    }, [newPastingRow.stampValue]);
    // Add a new row to the table
    const handleAddPastingRow = async () => {
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
                    totalFaceValue: '0'
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
        totalFaceValue: '0'
    });
    const handlePastingInputChange = (e) => {
        const { name, value } = e.target;
        setEditedPastingRow({ ...editedPastingRow, [name]: value });
        if (name === 'numberOfMounts') {
            calculatePasting(value);
        }
    };

    const handlePastingEditClick = (index) => {
        setEditPastingIndex(index);
        setEditedPastingRow(pastingRows[index]); // Populate the input fields with the selected row's data
    };

    const handlePastingSaveClick = async () => {
        const updatedData = pastingRows.map((row, index) =>
            index === editPastingIndex ? { ...row, ...editedPastingRow } : row
        );
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.post(`${wakabaBaseUrl}/stamppasting/update`, editedPastingRow)
                .then(response => {
                    initialPastingData(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                }); // Send newRow data to the server
        } catch (error) {
            console.error('Error adding row:', error);
        }
        // setPastingRows(updatedData);
        setEditPastingIndex(-1); // Exit edit mode
        setEditedPastingRow({
            stampValue: '',
            mountValue: '',
            numberOfMounts: '0',
            totalFaceValue: '0'
        }); // Reset editedRow state
    };

    const handlePastingCancelClick = () => {
        setEditPastingIndex(-1);
        setEditedPastingRow({
            stampValue: '',
            mountValue: '',
            numberOfMounts: '0',
            totalFaceValue: '0'
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
            const calculatedProduct = Number(mountValue) * Number(numberofmounts);
            setEditedPastingRow((prev) => ({ ...prev, totalFaceValue: calculatedProduct }));
        } else {
            setNewPastingRow((prev) => ({ ...prev, sheetValue: '' }));
        }
    }
    //calculate second table
    const calculatePastingTotal = () => {
        // Calculate the sum
        const totalnumberofsheet1 = pastingRows.reduce((sum, item) => {
            if (item.stampValue >= 50) {
                return parseFloat(sum) + parseFloat(item.numberOfMounts);
            }
            return sum;
        }, 0);
        setTotalNumberofPasting1(totalnumberofsheet1);
        const totalnumberofsheet2 = pastingRows.reduce((sum, item) => {
            if (item.stampValue < 50) {
                return parseFloat(sum) + parseFloat(item.numberOfMounts);
            }
            return sum;
        }, 0);
        // console.log('sum of totalnumberofsheet',totalnumberofsheet2)
        setTotalNumberofPasting2(totalnumberofsheet2);
        const facevalue1 = pastingRows.reduce((sum, item) => {
            if (item.stampValue >= 50) {
                return parseFloat(sum) + parseFloat(item.totalFaceValue);
            }
            return sum;
        }, 0);
        setPastingFaceValue1(facevalue1);
        const facevalue2 = pastingRows.reduce((sum, item) => {
            if (item.stampValue < 50) {
                return parseFloat(sum) + parseFloat(item.totalFaceValue);
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
    const initialRoseData = (roseData) => {
        setRoseRows(roseData);
    }

    const [inputRoseShow, setInputRoseShow] = useState(false);
    const [newRoseRow, setNewRoseRow] = useState({
        stampValue: '',
        numberOfSheets: '0',
        totalFaceValue: '0'
    });
    const handleRoseChange = (e) => {
        const { name, value } = e.target;
        setNewRoseRow((prevRoseRow) => ({
            ...prevRoseRow,
            [name]: value
        }));
    };
    // Add a new row to the table
    const handleAddRoseRow = async () => {
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
        totalFaceValue: '0'
    });
    const handleRoseInputChange = (e) => {
        const { name, value } = e.target;
        setEditedRoseRow({ ...editedRoseRow, [name]: value });
        if (name === 'numberOfSheets') {
            calculateRose(value);
        }
    };

    const handleRoseEditClick = (index) => {
        setEditRoseIndex(index);
        setEditedRoseRow(roseRows[index]); // Populate the input fields with the selected row's data
    };

    const handleRoseSaveClick = async () => {
        const updatedData = roseRows.map((row, index) =>
            index === editRoseIndex ? { ...row, ...editedRoseRow } : row
        );
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.post(`${wakabaBaseUrl}/stamprose/update`, editedRoseRow)
                .then(response => {
                    // console.log('success',response.data)
                    // setSheetRows(response.data);
                    initialRoseData(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                }); // Send newRow data to the server
        } catch (error) {
            console.error('Error adding row:', error);
        }
        //setRoseRows(updatedData);
        setEditRoseIndex(-1); // Exit edit mode
        setEditedRoseRow({
            stampValue: '',
            numberOfSheets: '0',
            totalFaceValue: '0'
        }); // Reset editedRow state
    };

    const handleRoseCancelClick = () => {
        setEditRoseIndex(-1);
        setEditedRoseRow({
            stampValue: '',
            numberOfSheets: '0',
            totalFaceValue: '0'
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
            const calculatedProduct = Number(stampValue) * Number(numberofsheets);
            setEditedRoseRow((prev) => ({ ...prev, totalFaceValue: calculatedProduct }));
        } else {
            setNewRoseRow((prev) => ({ ...prev, stampValue: '' }));
        }
    }
    //      //calculate second table
    const calculateRoseTotal = () => {
        // Calculate the sum
        const totalnumberofrose1 = roseRows.reduce((sum, item) => {
            if (item.stampValue >= 50) {
                return parseFloat(sum) + parseFloat(item.numberOfSheets);
            }
            return sum;
        }, 0);
        setTotalNumberofRose1(totalnumberofrose1);
        const totalnumberofrose2 = roseRows.reduce((sum, item) => {
            if (item.stampValue < 50) {
                return parseFloat(sum) + parseFloat(item.numberOfSheets);
            }
            return sum;
        }, 0);
        setTotalNumberofRose2(totalnumberofrose2);
        const rosefacevalue1 = roseRows.reduce((sum, item) => {
            if (item.stampValue >= 50) {
                return parseFloat(sum) + parseFloat(item.totalFaceValue);
            }
            return sum;
        }, 0);
        setRoseFaceValue1(rosefacevalue1);
        const rosefacevalue2 = roseRows.reduce((sum, item) => {
            if (item.stampValue < 50) {
                return parseFloat(sum) + parseFloat(item.totalFaceValue);
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
    const initialPackData = (packData) => {
        setPackRows(packData);
        // console.log('updated data',updatedData)
    }

    const [inputPackShow, setInputPackShow] = useState(false);
    const [newPackRow, setNewPackRow] = useState({
        type: '',
        stampValue: '',
        numberOfSheets: '0',
        totalFaceValue: '0'
    });
    const handlePackChange = (e) => {
        const { name, value } = e.target;
        setNewPackRow((prevPackRow) => ({
            ...prevPackRow,
            [name]: value
        }));
    };
    // Add a new row to the table
    const handleAddPackRow = async () => {
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
        totalFaceValue: '0'
    });
    const handlePackInputChange = (e) => {
        const { name, value } = e.target;
        setEditedPackRow({ ...editedPackRow, [name]: value });
        if (name === 'numberOfSheets') {
            calculatePack(value);
        }
    };

    const handlePackEditClick = (index) => {
        setEditPackIndex(index);
        setEditedPackRow(packRows[index]); // Populate the input fields with the selected row's data
    };

    const handlePackSaveClick = async () => {
        const updatedData = packRows.map((row, index) =>
            index === editPackIndex ? { ...row, ...editedPackRow } : row
        );
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.post(`${wakabaBaseUrl}/stamppack/update`, editedPackRow)
                .then(response => {
                    // console.log('success',response.data)
                    // setSheetRows(response.data);
                    initialSheetData(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                }); // Send newRow data to the server
        } catch (error) {
            console.error('Error adding row:', error);
        }
        // setPackRows(updatedData);
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
            totalFaceValue: '0'
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
            const calculatedProduct = Number(stampValue) * Number(numberofsheets);
            setEditedPackRow((prev) => ({ ...prev, totalFaceValue: calculatedProduct }));
        } else {
            setNewPackRow((prev) => ({ ...prev, stampValue: '' }));
        }
    }
    //calculate second table
    const calculatePackTotal = () => {
        // Calculate the sum
        const totalnumberofpack1 = packRows.reduce((sum, item) => {
            if (item.stampValue >= 50) {
                return parseFloat(sum) + parseFloat(item.numberOfSheets);
            }
            return sum;
        }, 0);
        setTotalNumberofPack1(totalnumberofpack1);
        const totalnumberofpack2 = packRows.reduce((sum, item) => {
            if (item.stampValue < 50) {
                return parseFloat(sum) + parseFloat(item.numberOfSheets);
            }
            return sum;
        }, 0);
        setTotalNumberofPack2(totalnumberofpack2);
        const packfacevalue1 = packRows.reduce((sum, item) => {
            if (item.stampValue >= 50) {
                return parseFloat(sum) + parseFloat(item.totalFaceValue);
            }
            return sum;
        }, 0);
        setPackFaceValue1(packfacevalue1);
        const packfacevalue2 = packRows.reduce((sum, item) => {
            if (item.stampValue < 50) {
                return parseFloat(sum) + parseFloat(item.totalFaceValue);
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
    const initialCardData = (cardData) => {
        setCardRows(cardData);
        // console.log('updated data',updatedData)
    }
    const [inputCardShow, setInputCardShow] = useState(false);
    const [newCardRow, setNewCardRow] = useState({
        stampValue: '',
        numberOfSheets: '0',
        totalFaceValue: '0'
    });
    const handleCardChange = (e) => {
        const { name, value } = e.target;
        setNewCardRow((prevCardRow) => ({
            ...prevCardRow,
            [name]: value
        }));
    };
    // Add a new row to the table
    const handleAddCardRow = async () => {
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
        totalFaceValue: '0'
    });
    const handleCardInputChange = (e) => {
        const { name, value } = e.target;
        setEditedCardRow({ ...editedCardRow, [name]: value });
        if (name === 'numberOfSheets') {
            calculateCard(value);
        }
    };

    const handleCardEditClick = (index) => {
        setEditCardIndex(index);
        setEditedCardRow(cardRows[index]); // Populate the input fields with the selected row's data
    };

    const handleCardSaveClick = async () => {
        const updatedData = cardRows.map((row, index) =>
            index === editCardIndex ? { ...row, ...editedCardRow } : row
        );
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.post(`${wakabaBaseUrl}/stampcard/update`, editedCardRow)
                .then(response => {
                    // console.log('success',response.data)
                    setCardRows(response.data);
                    initialCardData(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                }); // Send newRow data to the server
        } catch (error) {
            console.error('Error adding row:', error);
        }
        // setCardRows(updatedData);
        setEditCardIndex(-1); // Exit edit mode
        setEditedCardRow({
            stampValue: '',
            numberOfSheets: '0',
            totalFaceValue: '0'
        }); // Reset editedRow state
    };

    const handleCardCancelClick = () => {
        setEditCardIndex(-1);
        setEditedCardRow({
            stampValue: '',
            numberOfSheets: '0',
            totalFaceValue: '0'
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
            const calculatedProduct = Number(stampValue) * Number(numberofsheets);
            setEditedCardRow((prev) => ({ ...prev, totalFaceValue: calculatedProduct }));
        } else {
            setNewPackRow((prev) => ({ ...prev, stampValue: '' }));
        }
    }
    //calculate second table
    const calculateCardTotal = () => {
        // Calculate the sum
        const totalnumberofcard1 = cardRows.reduce((sum, item) => {
            if (item.stampValue >= 50) {
                return parseFloat(sum) + parseFloat(item.numberOfSheets);
            }
            return sum;
        }, 0);
        setTotalNumberofCard1(totalnumberofcard1);
        const totalnumberofcard2 = cardRows.reduce((sum, item) => {
            if (item.stampValue < 50) {
                return parseFloat(sum) + parseFloat(item.numberOfSheets);
            }
            return sum;
        }, 0);
        setTotalNumberofCard2(totalnumberofcard2);
        const cardfacevalue1 = cardRows.reduce((sum, item) => {
            if (item.stampValue >= 50) {
                return parseFloat(sum) + parseFloat(item.totalFaceValue);
            }
            return sum;
        }, 0);
        setCardFaceValue1(cardfacevalue1);
        const cardfacevalue2 = cardRows.reduce((sum, item) => {
            if (item.stampValue < 50) {
                return parseFloat(sum) + parseFloat(item.totalFaceValue);
            }
            return sum;
        }, 0);
        setCardFacevalue2(cardfacevalue2);
    }
    useEffect(() => {
        calculateCardTotal();
    }, [cardRows]);
    //-----------------------------cosntrol checkbox--------------------------------
    //checked event
    const [checkedValues1, setCheckedValues1] = useState([]);
    // Handle checkbox change
    const handleCheckboxChange1 = (event) => {
        const value = event.target.value;
        setCheckedValues1((prevValues) => 
        prevValues.includes(value)
            ? prevValues.filter((v) => v !== value) // Uncheck
            : [...prevValues, value] // Check
        );
    };
    //checked event
    const [checkedValues2, setCheckedValues2] = useState([]);
    // Handle checkbox change
    const handleCheckboxChange2 = (event) => {
        const value = event.target.value;
        setCheckedValues2((prevValues) => 
        prevValues.includes(value)
            ? prevValues.filter((v) => v !== value) // Uncheck
            : [...prevValues, value] // Check
        );
    };
    //checked event
    const [checkedValues3, setCheckedValues3] = useState([]);
    // Handle checkbox change
    const handleCheckboxChange3 = (event) => {
        const value = event.target.value;
        setCheckedValues3((prevValues) => 
        prevValues.includes(value)
            ? prevValues.filter((v) => v !== value) // Uncheck
            : [...prevValues, value] // Check
        );
    };
    //checked event
    const [checkedValues4, setCheckedValues4] = useState([]);
    // Handle checkbox change
    const handleCheckboxChange4 = (event) => {
        const value = event.target.value;
        setCheckedValues4((prevValues) => 
        prevValues.includes(value)
            ? prevValues.filter((v) => v !== value) // Uncheck
            : [...prevValues, value] // Check
        );
    };
    //checked event
    const [checkedValues5, setCheckedValues5] = useState([]);
    // Handle checkbox change
    const handleCheckboxChange5 = (event) => {
        const value = event.target.value;
        setCheckedValues5((prevValues) => 
        prevValues.includes(value)
            ? prevValues.filter((v) => v !== value) // Uncheck
            : [...prevValues, value] // Check
        );
    };
    //-------------------------------------------------   
    // goto stamppurchaseinterestratechange page
    const gotoStampPurchaseIntereStrateChange = () => {
        navigate('/stamppurchaseinterestratechange');
    }
    // goto create inbound application page
    const gotoStampInboundApplication = () => {
        navigate('/stamprelatedinboundapplicationform');
    }
    // goto create outbound application page
    const gotoStampOutboundApplication = () => {
        
        const sendData = {checkedValues1,checkedValues2,checkedValues3,checkedValues4,checkedValues5};
        updateData(sendData);
        navigate('/stamprelatedoutboundapplicationform');
    }
    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />
            <div className=" flex flex-col items-center justify-center py-3">
                <div className="w-full " style={{ maxWidth: '100%' }}>
                    <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">日本の切手・ハガキ・レターパック 在庫リスト</h2>
                    <div className='flex justify-evenly mt-5 '>
                        <div>
                            <div className='text-center' style={{ visibility: 'hidden' }}>abc</div>
                            <button type="button" onClick={gotoStampInboundApplication}
                                className="mr-3  py-1 px-1 w-full text-[#70685a] text-[15px] rounded-full tracking-wider font-bold outline-none border border-[#70685a] hover:bg-[#524c3b] hover:text-white transition-all duration-300">
                                入庫申請書を作成
                            </button>
                        </div>
                        <div>
                            <div className='text-center text-[#70685a]'>選択した項目の</div>
                            < button type="button" onClick={gotoStampOutboundApplication} className="w-max px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                出庫申請書を作成
                            </button>
                        </div>
                        <div>
                            <div className='text-center text-[#70685a]'>選択した項目の</div>
                            <button type="button" onClick={gotoStampPurchaseIntereStrateChange}
                                className=" mr-3 py-1 px-1 w-full text-[#70685a] text-[15px] rounded-full tracking-wider font-bold outline-none border border-[#70685a] hover:bg-[#524c3b] hover:text-white transition-all duration-300">
                                買取利率変更申請
                            </button>
                        </div>

                    </div>
                    {/* mainpart */}
                    <div className=' stamp-related-inventory-list flex gap-5'>
                        {/* -----stamp sheet------ */}
                        <div className='stamp-related-inventory-list-one mt-10 w-full'>
                            {/* first */}
                            <div className='flex justify-center h-11'>
                                <div className='flex'>
                                    <div className='w-10'><img src={StampSheet} alt="aaa"></img></div>
                                    <div className='flex flex-col justify-center'><LabelComponent value="切手シート" className='pl-5 !text-[20px] font-bold' /></div>
                                </div>
                            </div>
                            {/* second */}
                            <div className='flex justify-end w-full h-30'>
                                <div className='mt-5 flex flex-col justify-end' style={{ width: '70%' }}>
                                    <table className=' text-center w-full' style={Table}>
                                        <thead className='bg-white z-10 text-[14px]'>
                                            <tr>
                                                <th ></th>
                                                <th >シート数合計</th>
                                                <th >額面総額合計</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>下記合計</td>
                                                <td style={Td}>{parseFloat(totalNumberOfSheet1) + parseFloat(totalNumberOfSheet2) || ''}</td>
                                                <td style={Td}>{parseFloat(totalFaceValue1) + parseFloat(totalFaceValue2) || ''}</td>
                                            </tr>
                                            <tr>
                                                <td>50円以上</td>
                                                <td style={Td}>{parseFloat(totalNumberOfSheet1) || ''}</td>
                                                <td style={Td}>{parseFloat(totalFaceValue1) || ''}</td>
                                            </tr>
                                            <tr>
                                                <td>50円未満</td>
                                                <td style={Td}>{parseFloat(totalNumberOfSheet2) || ''}</td>
                                                <td style={Td}>{parseFloat(totalFaceValue2) || ''}</td>
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
                                                    <th style={Th} >選択</th>
                                                    <th style={Th} className='pl-1'>切手1枚の額面(￥)</th>
                                                    <th style={Th} className='pl-1 pr-1'>面数</th>
                                                    <th style={Th} className='pl-1 pr-1' >シート額面(￥)</th>
                                                    <th style={Th} className='pr-1'>シート数</th>
                                                    <th style={Th} >額面総額(￥)</th>
                                                    <th style={Th}>{editSheetIndex === -1 ? '編集する' : 'セーブ'}</th>
                                                    <th style={Th} className='whitespace-nowrap pl-3'>{editSheetIndex === -1 ? '削除' : '戻る'}</th>
                                                </tr>
                                            </thead>
                                            <tbody className='!h-8'>

                                                {sheetRows?.length > 0 && sheetRows.map((row, Index) => (
                                                    <tr key={Index} >
                                                        <td> <input type="checkbox" className='!h-6' value={row.id} onChange={handleCheckboxChange1}/></td>
                                                        <td style={Td}>
                                                            {editSheetIndex === Index ? (
                                                                <InputComponent disabled={true} name='stampValue' value={editedSheetRow.stampValue || ''} onChange={handleSheetInputChange} className='w-full h-8 text-[#70685a]' />
                                                            ) : (row.stampValue || '')}
                                                        </td>
                                                        <td style={Td}>
                                                            {editSheetIndex === Index ? (
                                                                <InputComponent disabled={true} name='numberOfSides' value={editedSheetRow.numberOfSides || ''} onChange={handleSheetInputChange} className='w-full h-8 text-[#70685a]' />
                                                            ) : (row.numberOfSides || '')}
                                                        </td>
                                                        <td style={Td}>
                                                            {editSheetIndex === Index ? (
                                                                <InputComponent disabled={true} name='sheetValue' value={editedSheetRow.sheetValue || ''} onChange={handleSheetInputChange} className='w-full h-8 text-[#70685a]' />
                                                            ) : (row.sheetValue || '')}
                                                        </td>
                                                        <td style={Td}>
                                                            {editSheetIndex === Index ? (
                                                                <InputComponent name='numberOfSheets' type='number' value={editedSheetRow.numberOfSheets || ''} onChange={handleSheetInputChange} className='w-20 h-8 text-[#70685a] !border-[red]' />
                                                            ) : (row.numberOfSheets || '')}
                                                        </td>
                                                        <td style={Td}>
                                                            {editSheetIndex === Index ? (
                                                                <InputComponent disabled={true} name='totalFaceValue' value={editedSheetRow.totalFaceValue || ''} onChange={handleSheetInputChange} className='w-full h-8 text-[#70685a]' />
                                                            ) : (row.totalFaceValue || '')}
                                                        </td>
                                                        <td style={Td}>
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
                                                        <td style={Td}>
                                                            {editSheetIndex === Index ? (
                                                                <div>
                                                                    <button onClick={() => handleSheetCancelClick(Index)} className='w-7'>
                                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <button onClick={() => handleSheetDeleteClick(Index)} className='w-7'>
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
                                                                type="number"
                                                                name="stampValue"
                                                                className='w-full border-[red]'
                                                                value={newSheetRow.stampValue || ''}
                                                                onChange={handleSheetChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="number"
                                                                name="numberOfSides"
                                                                className='w-20 border-[red]'
                                                                value={newSheetRow.numberOfSides || ''}
                                                                onChange={handleSheetChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="sheetValue"
                                                                disabled={true}
                                                                className='w-full'
                                                                value={newSheetRow.sheetValue || ''}
                                                                onChange={handleSheetChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="numberOfSheets"
                                                                disabled={true}
                                                                className='w-full'
                                                                value={newSheetRow.numberOfSheets || ''}
                                                                onChange={handleSheetChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="totalFaceValue"
                                                                disabled={true}
                                                                className='w-full'
                                                                value={newSheetRow.totalFaceValue || ''}
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
                        {/* ------stamp mounting past----- */}
                        <div className='stamp-related-inventory-list-one mt-10 w-full'>
                            {/* first */}
                            <div className='flex justify-center h-11'>
                                <div className='flex'>
                                    <div className='w-10'><img src={StampSheet} alt="aaa"></img></div>
                                    <div className='flex flex-col justify-center'><LabelComponent value="切手台紙貼り" className='pl-5 !text-[20px] font-bold' /></div>
                                </div>
                            </div>
                            {/* second */}
                            <div className='flex justify-end w-full h-30'>
                                <div className='mt-5 flex flex-col justify-end' style={{ width: '70%' }}>
                                    <table className=' text-center w-full' style={Table}>
                                        <thead className='bg-white z-10 text-[14px]'>
                                            <tr>
                                                <th ></th>
                                                <th >台紙数合計</th>
                                                <th >額面総額合計</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>下記合計</td>
                                                <td style={Td}>{parseFloat(totalNumberOfPasting1) + parseFloat(totalNumberOfPasting2) || ''}</td>
                                                <td style={Td}>{parseFloat(totalPastingFaceValue1) + parseFloat(totalPastingFaceValue2) || ''}</td>
                                            </tr>
                                            <tr>
                                                <td>50円以上</td>
                                                <td style={Td}>{parseFloat(totalNumberOfPasting1) || ''}</td>
                                                <td style={Td}>{parseFloat(totalPastingFaceValue1) || ''}</td>
                                            </tr>
                                            <tr>
                                                <td>50円未満</td>
                                                <td style={Td}>{parseFloat(totalNumberOfPasting2) || ''}</td>
                                                <td style={Td}>{parseFloat(totalPastingFaceValue2) || ''}</td>
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
                                                    <th style={Th} >選択</th>
                                                    <th style={Th} className='pl-1'>切手1枚の額面</th>
                                                    <th style={Th} className='pl-1 pr-1'>台紙額面</th>
                                                    <th style={Th} className='pr-1'>台紙数</th>
                                                    <th style={Th} >額面総額</th>
                                                    <th style={Th}>{editPastingIndex === -1 ? '編集する' : 'セーブ'}</th>
                                                    <th style={Th} className='whitespace-nowrap pl-3'>{editPastingIndex === -1 ? '削除' : '戻る'}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {pastingRows?.length > 0 && pastingRows.map((row, Index) => (
                                                    <tr key={Index} >
                                                        <td> <input type="checkbox" className='!h-6' value={row.id} onChange={handleCheckboxChange2} /></td>
                                                        <td style={Td}>
                                                            {editPastingIndex === Index ? (
                                                                <InputComponent disabled={true} name='stampValue' value={editedPastingRow.stampValue || ''} onChange={handlePastingInputChange} className='w-full h-8 text-[#70685a]' />
                                                            ) : (row.stampValue || '')}
                                                        </td>
                                                        <td style={Td}>
                                                            {editPastingIndex === Index ? (
                                                                <InputComponent disabled={true} name='mountValue' value={editedPastingRow.mountValue || ''} onChange={handlePastingInputChange} className='w-full h-8 text-[#70685a]' />
                                                            ) : (row.mountValue || '')}
                                                        </td>
                                                        <td style={Td}>
                                                            {editPastingIndex === Index ? (
                                                                <InputComponent name='numberOfMounts' type='number' value={editedPastingRow.numberOfMounts || ''} onChange={handlePastingInputChange} className='w-20 border-[red] h-8 text-[#70685a]' />
                                                            ) : (row.numberOfMounts || '')}
                                                        </td>
                                                        <td style={Td}>
                                                            {editPastingIndex === Index ? (
                                                                <InputComponent disabled={true} name='totalFaceValue' value={editedPastingRow.totalFaceValue || ''} onChange={handlePastingInputChange} className='w-full h-8 text-[#70685a]' />
                                                            ) : (row.totalFaceValue || '')}
                                                        </td>
                                                        <td style={Td}>
                                                            {editPastingIndex === Index ? (
                                                                <div>
                                                                    <button onClick={() => handlePastingSaveClick(Index)} className='w-7'>
                                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <button onClick={() => handlePastingEditClick(Index)} className='w-7'>
                                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </td>
                                                        <td style={Td}>
                                                            {editPastingIndex === Index ? (
                                                                <div>
                                                                    <button onClick={() => handlePastingCancelClick(Index)} className='w-7'>
                                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <button onClick={() => handlePastingDeleteClick(Index)} className='w-7'>
                                                                        <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                                {inputPastingShow ?
                                                    <tr>
                                                        <td></td>
                                                        <td style={Td}>
                                                            <input
                                                                type="number"
                                                                name="stampValue"
                                                                className='w-full border-[red]'
                                                                value={newPastingRow.stampValue || ''}
                                                                onChange={handlePastingChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="mountValue"
                                                                disabled={true}
                                                                className='w-full'
                                                                value={newPastingRow.mountValue || ''}
                                                                onChange={handlePastingChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name=" numberOfMounts"
                                                                disabled={true}
                                                                className='w-full'
                                                                value={newPastingRow.numberOfMounts || ''}
                                                                onChange={handlePastingChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="totalFaceValue"
                                                                disabled={true}
                                                                className='w-full'
                                                                value={newPastingRow.totalFaceValue || ''}
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
                        {/* -----stamp rose------ */}
                        <div className='stamp-related-inventory-list-one mt-10 w-full'>
                            {/* first */}
                            <div className='flex justify-center h-11'>
                                <div className='flex'>
                                    <div className='w-10'><img src={StampRose} alt="aaa"></img></div>
                                    <div className='flex flex-col justify-center'><LabelComponent value="切手バラ" className='pl-5 !text-[20px] font-bold' /></div>
                                </div>
                            </div>
                            {/* second */}
                            <div className='flex justify-end w-full h-30' >
                                <div className='mt-5 flex flex-col justify-end' style={{ width: '70%' }}>
                                    <table className=' text-center w-full text-[14px]' style={Table}>
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
                                                <td style={Td}>{parseFloat(totalNumberOfRose1) + parseFloat(totalNumberOfRose2) || ''}</td>
                                                <td style={Td}>{parseFloat(totalRoseFaceValue1) + parseFloat(totalRoseFaceValue2) || ''}</td>
                                            </tr>
                                            <tr>
                                                <td>50円以上</td>
                                                <td style={Td}>{parseFloat(totalNumberOfRose1) || ''}</td>
                                                <td style={Td}>{parseFloat(totalRoseFaceValue1) || ''}</td>
                                            </tr>
                                            <tr>
                                                <td>50円未満</td>
                                                <td style={Td}>{parseFloat(totalNumberOfRose2) || ''}</td>
                                                <td style={Td}>{parseFloat(totalRoseFaceValue2) || ''}</td>
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
                                                    <th style={Th} >選択</th>
                                                    <th style={Th}>切手1枚の額面(￥)</th>
                                                    <th style={Th}>枚数</th>
                                                    <th style={Th}>額面総額(￥)</th>
                                                    <th style={Th}>{editRoseIndex === -1 ? '編集する' : 'セーブ'}</th>
                                                    <th style={Th} className='whitespace-nowrap pl-3'>{editRoseIndex === -1 ? '削除' : '戻る'}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {roseRows?.length > 0 && roseRows.map((row, Index) => (
                                                    <tr key={Index} >
                                                        <td> <input type="checkbox" className='!h-6' value={row.id} onChange={handleCheckboxChange3}/></td>
                                                        <td style={Td}>
                                                            {editRoseIndex === Index ? (
                                                                <InputComponent disabled={true} name='stampValue' value={editedRoseRow.stampValue || ''} onChange={handleRoseInputChange} className='w-full h-8 text-[#70685a]' />
                                                            ) : (row.stampValue || '')}
                                                        </td>
                                                        <td style={Td}>
                                                            {editRoseIndex === Index ? (
                                                                <InputComponent name='numberOfSheets' type="number" value={editedRoseRow.numberOfSheets || ''} onChange={handleRoseInputChange} className='w-20 h-8 text-[#70685a] border-[red]' />
                                                            ) : (row.numberOfSheets || '')}
                                                        </td>
                                                        <td style={Td}>
                                                            {editRoseIndex === Index ? (
                                                                <InputComponent disabled={true} name='totalFaceValue' value={editedRoseRow.totalFaceValue || ''} onChange={handleRoseInputChange} className='w-full h-8 text-[#70685a]' />
                                                            ) : (row.totalFaceValue || '')}
                                                        </td>
                                                        <td style={Td}>
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
                                                        <td style={Td}>
                                                            {editRoseIndex === Index ? (
                                                                <div>
                                                                    <button onClick={() => handleRoseCancelClick(Index)} className='w-7'>
                                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <button onClick={() => handleRoseDeleteClick(Index)} className='w-7'>
                                                                        <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                                {inputRoseShow ?
                                                    <tr>
                                                        <td></td>
                                                        <td style={Td}>
                                                            <input
                                                                type="number"
                                                                name="stampValue"
                                                                className='w-full border-[red]'
                                                                value={newRoseRow.stampValue || ''}
                                                                onChange={handleRoseChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name=" numberOfSheets"
                                                                disabled={true}
                                                                className='w-20'
                                                                value={newRoseRow.numberOfSheets || ''}
                                                                onChange={handleRoseChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="totalFaceValue"
                                                                disabled={true}
                                                                className='w-full'
                                                                value={newRoseRow.totalFaceValue || ''}
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
                        {/* ------Letter pack----- */}
                        <div className='stamp-related-inventory-list-one mt-10 w-fll mr-10'>
                            {/* first */}
                            <div className='flex justify-center h-11'>
                                <div className='flex'>
                                    <div className='w-10'><img src={LetterPack} alt="aaa"></img></div>
                                    <div className='flex flex-col justify-center'><LabelComponent value="レ夕一パック" className='pl-5 !text-[20px] font-bold' /></div>
                                </div>
                            </div>
                            {/* second */}
                            <div className='flex justify-end w-full h-[120px]' >
                                <div className='mt-5 flex flex-col justify-end' style={{ width: '70%' }}>
                                    <div className='flex flex-col justify-end'>
                                        <table className=' text-center w-full' style={Table}>
                                            <thead className='!h-8 text-[14px]'>
                                                <tr>
                                                    <th ></th>
                                                    <th style={Th}>枚数合計</th>
                                                    <th style={Th}>額面総額合計</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>下記合計</td>
                                                    <td style={Td}>{parseFloat(totalNumberOfPack1) + parseFloat(totalNumberOfPack2) || ''}</td>
                                                    <td style={Td}>{parseFloat(totalPackFaceValue1) + parseFloat(totalPackFaceValue2) || ''}</td>
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
                                                    <th style={Th} >選択</th>
                                                    <th style={Th}>種別</th>
                                                    <th style={Th}>額面(￥)</th>
                                                    <th style={Th} >枚数</th>
                                                    <th style={Th}>額面総額(￥)</th>
                                                    <th style={Th}>{editPackIndex === -1 ? '編集する' : 'セーブ'}</th>
                                                    <th style={Th} className='whitespace-nowrap pl-3'>{editPackIndex === -1 ? '削除' : '戻る'}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {packRows?.length > 0 && packRows.map((row, Index) => (
                                                    <tr key={Index} >
                                                        <td> <input type="checkbox" className='!h-6' value={row.id} onChange={handleCheckboxChange4}/></td>
                                                        <td style={Td}>
                                                            {editPackIndex === Index ? (
                                                                <InputComponent disabled={true} name='type' value={editedPackRow.type || ''} onChange={handlePackInputChange} className='w-full h-8 text-[#70685a]' />
                                                            ) : (row.type || '')}
                                                        </td>
                                                        <td style={Td}>
                                                            {editPackIndex === Index ? (
                                                                <InputComponent disabled={true} name='stampValue' value={editedPackRow.stampValue || ''} onChange={handlePackInputChange} className='w-full h-8 text-[#70685a]' />
                                                            ) : (row.stampValue || '')}
                                                        </td>
                                                        <td style={Td}>
                                                            {editPackIndex === Index ? (
                                                                <InputComponent name='numberOfSheets' type='number' value={editedPackRow.numberOfSheets || ''} onChange={handlePackInputChange} className='w-20 h-8 text-[#70685a] border-[red]' />
                                                            ) : (row.numberOfSheets || '')}
                                                        </td>
                                                        <td style={Td}>
                                                            {editPackIndex === Index ? (
                                                                <InputComponent disabled={true} name='totalFaceValue' value={editedPackRow.totalFaceValue || ''} onChange={handlePackInputChange} className='w-full h-8 text-[#70685a]' />
                                                            ) : (row.totalFaceValue || '')}
                                                        </td>
                                                        <td style={Td}>
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
                                                        <td style={Td}>
                                                            {editPackIndex === Index ? (
                                                                <div>
                                                                    <button onClick={() => handlePackCancelClick(Index)} className='w-7'>
                                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    <button onClick={() => handlePackDeleteClick(Index)} className='w-7'>
                                                                        <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                                {inputPackShow ?
                                                    <tr>
                                                        <td></td>
                                                        <td style={Td}>
                                                            <input
                                                                type="number"
                                                                name="type"
                                                                className='w-20 border-[red]'
                                                                value={newPackRow.type || ''}
                                                                onChange={handlePackChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="number"
                                                                name=" stampValue"
                                                                className='w-20 border-[red]'
                                                                value={newPackRow.stampValue || ''}
                                                                onChange={handlePackChange}
                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="numberOfSheets"
                                                                disabled={true}
                                                                className='w-full'
                                                                value={newPackRow.numberOfSheets || ''}
                                                                onChange={handlePackChange}

                                                            />
                                                        </td>
                                                        <td style={Td} >
                                                            <input
                                                                type="text"
                                                                name="totalFaceValue"
                                                                disabled={true}
                                                                className='w-full'
                                                                value={newPackRow.totalFaceValue || ''}
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
                                {/* Post Card ------------------------------------------------------- */}
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
                                                        <th style={Th}>枚数計</th>
                                                        <th style={Th}>額面総額合計</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>下記合計</td>
                                                        <td style={Td}>{parseFloat(totalNumberOfCard1) + parseFloat(totalNumberOfCard2) || ''}</td>
                                                        <td style={Td}>{parseFloat(totalCardFaceValue1) + parseFloat(totalCardFaceValue2) || ''}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>50円以上</td>
                                                        <td style={Td}>{parseFloat(totalNumberOfCard1) || ''}</td>
                                                        <td style={Td}>{parseFloat(totalCardFaceValue1) || ''}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>50円未満</td>
                                                        <td style={Td}>{parseFloat(totalNumberOfCard2) || ''}</td>
                                                        <td style={Td}>{parseFloat(totalCardFaceValue2) || ''}</td>
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
                                                            <th style={Th}>額面(￥)</th>
                                                            <th style={Th} >枚数</th>
                                                            <th style={Th}>額面総額(￥)</th>
                                                            <th style={Th}>{editCardIndex === -1 ? '編集する' : 'セーブ'}</th>
                                                            <th style={Th} className='whitespace-nowrap pl-3'>{editCardIndex === -1 ? '削除' : '戻る'}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {cardRows?.length > 0 && cardRows.map((row, Index) => (
                                                            <tr key={Index} >
                                                                <td> <input type="checkbox" className='!h-6' value={row.id} onChange={handleCheckboxChange5}/></td>
                                                                <td style={Td}>
                                                                    {editCardIndex === Index ? (
                                                                        <InputComponent disabled={true} name='stampValue' value={editedCardRow.stampValue || ''} onChange={handleCardInputChange} className='w-full h-8 text-[#70685a]' />
                                                                    ) : (row.stampValue || '')}
                                                                </td>
                                                                <td style={Td}>
                                                                    {editCardIndex === Index ? (
                                                                        <InputComponent name='numberOfSheets' type='number' value={editedCardRow.numberOfSheets || ''} onChange={handleCardInputChange} className='w-20 h-8 text-[#70685a] border-[red]' />
                                                                    ) : (row.numberOfSheets || '')}
                                                                </td>
                                                                <td style={Td}>
                                                                    {editCardIndex === Index ? (
                                                                        <InputComponent disabled={true} name='totalFaceValue' value={editedCardRow.totalFaceValue || ''} onChange={handleCardInputChange} className='w-full h-8 text-[#70685a]' />
                                                                    ) : (row.totalFaceValue || '')}
                                                                </td>
                                                                <td style={Td}>
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
                                                                <td style={Td}>
                                                                    {editCardIndex === Index ? (
                                                                        <div>
                                                                            <button onClick={() => handleCardCancelClick(Index)} className='w-7'>
                                                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                                                            </button>
                                                                        </div>
                                                                    ) : (
                                                                        <div>
                                                                            <button onClick={() => handleCardDeleteClick(Index)} className='w-7'>
                                                                                <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                                                                            </button>
                                                                        </div>
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        {inputCardShow ?
                                                            <tr>
                                                                <td></td>
                                                                <td style={Td}>
                                                                    <input
                                                                        type="number"
                                                                        name="stampValue"
                                                                        className='w-20 border-[red]'
                                                                        value={newCardRow.stampValue}
                                                                        onChange={handleCardChange || ''}
                                                                    />
                                                                </td>
                                                                <td style={Td} >
                                                                    <input
                                                                        type="text"
                                                                        name="numberOfSheets"
                                                                        disabled={true}
                                                                        className='w-full'
                                                                        value={newCardRow.numberOfSheets || ''}
                                                                        onChange={handleCardChange}

                                                                    />
                                                                </td>
                                                                <td style={Td} >
                                                                    <input
                                                                        type="text"
                                                                        name="totalFaceValue"
                                                                        disabled={true}
                                                                        className='w-full'
                                                                        value={newCardRow.totalFaceValue || ''}
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