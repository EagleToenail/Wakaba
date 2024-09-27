import React, { useState, useEffect } from 'react';
import {Link ,useNavigate} from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
// import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import LabelComponent from '../../Components/Common/LabelComponent';
import axios from 'axios';
import leftArrow from '../../Assets/img/right-arrow.png';
import rightArrow from '../../Assets/img/left-arrow.png';

import { useDispatch } from 'react-redux';
import { setShippingData } from '../../redux/sales/actions';

const ContractorAssementSheet = () => {
    // const title = 'タイトルタイトル';
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center',
    };

    const Th = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace: 'nowrap',
    };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace: 'nowrap',
    };

    const dispatch = useDispatch();

    const updateData = (data) => {
    dispatch(setShippingData(data));
    };

    //checked event
    const [checkedValues, setCheckedValues] = useState([]);
    // Handle checkbox change
    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setCheckedValues((prevValues) => 
        prevValues.includes(value)
            ? prevValues.filter((v) => v !== value) // Uncheck
            : [...prevValues, value] // Check
        );
    };
    const handleSendCheckedValues = () => {
        updateData(checkedValues);
        // console.log('checked values',checkedValues);
        navigate('/purchaserequestformforwholesaler');
    };

    const [visibleTable, setVisibleTable] = useState('貴金属');

        // State to track the value of the active button
        const [activeValue, setActiveValue] = useState('貴金属');
        const buttonValues = ['貴金属', '古銭等', 'バッグ', '時計',
            '財布', 'アクセサリ', '骨董品', '洋酒', 'カメラ','楽器','着物','スマホ夕ブレット'];

    // Function to handle button click
    const handleButtonClick = (tableName) => {
      setVisibleTable(tableName);
      setActiveValue(tableName);
};

    const [data, setData] = useState({
        preciousMetals: [],
        clocks: [],
        bags: [],
        wallets: [],
        accessories: [],
        cameras: [],
        antiques: [],
        westernLiquors: [],
        musicalInstruments: [],
        oldCoins: [],
        kimonos: [],
        smartPhoneAndTablets: []
    });
  
    useEffect(() => {
      const fetchData = async () => {

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        // console.log(`${wakabaBaseUrl}/sales/filter`);
          const response = await axios.get(`${wakabaBaseUrl}/contractorassessments`);
        //   console.log("accessment",response.data.payload)
          setData(response.data.payload || {
            preciousMetals: [],
            clocks: [],
            bags: [],
            wallets: [],
            accessories: [],
            cameras: [],
            antiques: [],
            westernLiquos: [],
            musicalInstruments: [],
            oldCoins: [],
            kimonos: [],
            smartPhoneAndTablets: []
          });

          setPreciousMetalData(response.data.payload.preciousMetals);
          setOldCoinData(response.data.payload.oldCoins);
          setBagData(response.data.payload.bags);
          setClockData(response.data.payload.clocks);
          setWalletData(response.data.payload.wallets);
          setAccesseoriesData(response.data.payload.accessories);
          setCameraData(response.data.payload.cameras);
          setAntiqueData(response.data.payload.antiques);
          setWesternliquorData(response.data.payload.westernLiquors);
          setMusicalinstrumentData(response.data.payload.musicalInstruments)
          setKimonoData(response.data.payload.kimonos);
          setSmartphoneandtabletData(response.data.payload.smartPhoneAndTablets);
        //   console.log('preciousMetal',response.data.payload.preciousMetals);
      };
      fetchData();
    }, []);

    const editableRowStyle = { backgroundColor: '#e7e9f1' };
 //------------------------------precious metal--------------------------------------
    //get  vendor list form vendor table
    const [preciousMetalVendors , setPreciousMetalVendors] = useState([]);
    const [preciousMetalInitialValue , setPreciousMetalInitialValue] = useState([]);
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        const fetchVendors = async () => {
            try {
                const response = await axios.post(`${wakabaBaseUrl}/vendor/getVendorList`, { type: '貴金属' });
                setPreciousMetalVendors(response.data);

                const result = response.data.reduce((acc, { vendor_name }) => {
                    acc[vendor_name] = ''; // Create a key-value pair
                    return acc;
                }, {});

                const previousPreciousMetalRow = {
                    shipping_address: '',
                    wholesale_date: '',
                    number: '',
                    product_name: '',
                    quantity: '',
                    gold_type: '',
                    gross_weight: '',
                    purchase_price: '',
                    bullion_weight: '',
                };

                const updatedPreciousMetalRow = {
                    ...previousPreciousMetalRow,
                    ...result
                };

                setPreciousMetalInitialValue(updatedPreciousMetalRow);
                setNewPreciousMetalRow(updatedPreciousMetalRow); // Ensure this is updated with the correct initial values

            } catch (error) {
                console.error("There was an error fetching the vendor data!", error);
            }
        };
        fetchVendors();
    }, []);

    const [preciousMetalData, setPreciousMetalData] = useState();

    const [editPreciousMetalId, setEditPreciousMetalId] = useState(null);
    const [newPreciousMetalRow, setNewPreciousMetalRow] = useState(preciousMetalInitialValue);
    //console.log('newprciousMetalRow',preciousMetalInitialValue,newPreciousMetalRow)


    const handlePreciousMetalChange = (e, id = null) => {
        const { name, value } = e.target;
        if (id === null) {
            setNewPreciousMetalRow((prev) => ({ ...prev, [name]: value }));
        } else {
            setPreciousMetalData((prevData) =>
            prevData.map((row) =>
            row.id === id ? { ...row, [name]: value } : row
            )
        );
        }
    };

    const handlePreciousMetalEdit = (id) => {
        setEditPreciousMetalId(id);
    };

    const handlePreciousMetalSave = async(id) => {
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.post(`${wakabaBaseUrl}/contractorassessments/preciousmetalupdate`, preciousMetalData.find((row) => row.id === id)); // Update row on the server
            setEditPreciousMetalId(null);
          } catch (error) {
            console.error('Error saving row:', error);
          }
    };

    const handlePreciousMetalCancel = () => {
        setEditPreciousMetalId(null);
    };

    const handlePreciousMetalDelete = async(id) => {
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.get(`${wakabaBaseUrl}/contractorassessments/preciousmetaldelete/${id}`); // Delete row from the server
            setPreciousMetalData((prevData) => prevData.filter((row) => row.id !== id));
          } catch (error) {
            console.error('Error deleting row:', error);
          }
    };
    const [inputPreciousMetalShow, setInputPreciousMetalShow] = useState(false);
    const handleAddPreciousMetalRow = async() => {
        if (inputPreciousMetalShow) {
            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }
                const response = await axios.post(`${wakabaBaseUrl}/contractorassessments/preciousmetaladd`, newPreciousMetalRow); // Send newRow data to the server
                setPreciousMetalData((prevData) => [
                  ...prevData,
                  { id: response.data.id, ...newPreciousMetalRow } // Assuming server returns the new row with an id
                ]);
                setNewPreciousMetalRow(preciousMetalInitialValue);
              } catch (error) {
                console.error('Error adding row:', error);
              }
        }
        setInputPreciousMetalShow(!inputPreciousMetalShow);
    };
 //----------------------------- old Coin--------------------------------------------------------
     //get  vendor list form vendor table
     const [oldCoinVendors , setOldCoinVendors] = useState([]);
     const [oldCoinInitialValue , setOldCoinInitialValue] = useState([]);
     useEffect(() => {
         const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
         if (!wakabaBaseUrl) {
             throw new Error('API base URL is not defined');
         }
         axios.post(`${wakabaBaseUrl}/vendor/getVendorList`,{type:'古銭等'})
         .then(response => {
            //  console.log('vendrListAll',response.data)
            setOldCoinVendors(response.data);
             const result = response.data.reduce((acc, { vendor_name }) => {
               // Create a new key-value pair where the key is the vendor name and the value is an empty string
               acc[vendor_name] = '';
               return acc;
           }, {});
           const oldCoinRow = {
            shipping_date: '',
            number: '',
            product_name: '',
            remarks: '',
            assessment_date: '',
           }
 
           const updatedOldCoinRow = {
             ...oldCoinRow,
             ...result
         };
         setOldCoinInitialValue(updatedOldCoinRow);
         setNewOldCoinRow(updatedOldCoinRow);
         // console.log('result',updatedPreciousMetalRow);
         })
         .catch(error => {
             console.error("There was an error fetching the customer data!", error);
         });
     }, []);

    const [oldCoinData, setOldCoinData] = useState('');

    const [editOldCoinId, setEditOldCoinId] = useState(null);
    const [newOldCoinRow, setNewOldCoinRow] = useState(oldCoinInitialValue);

    const handleOldCoinChange = (e, id = null) => {
        const { name, value } = e.target;
        if (id === null) {
        setNewOldCoinRow((prev) => ({ ...prev, [name]: value }));
        } else {
        setOldCoinData((prevData) =>
            prevData.map((row) =>
            row.id === id ? { ...row, [name]: value } : row
            )
        );
        }
    };

    const handleOldCoinEdit = (id) => {
        setEditOldCoinId(id);
    };

    const handleOldCoinSave = async(id) => {
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.post(`${wakabaBaseUrl}/contractorassessments/oldcoinupdate`, oldCoinData.find((row) => row.id === id)); // Update row on the server
            setEditOldCoinId(null);
          } catch (error) {
            console.error('Error saving row:', error);
          }
    };

    const handleOldCoinCancel = () => {
        setEditOldCoinId(null);
    };

    const handleOldCoinDelete = async(id) => {
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.get(`${wakabaBaseUrl}/contractorassessments/oldcoindelete/${id}`); // Delete row from the server
            setOldCoinData((prevData) => prevData.filter((row) => row.id !== id));
          } catch (error) {
            console.error('Error deleting row:', error);
          }
    };

    const [inputOldCoinShow, setInputOldCoinShow] = useState(false);
    const handleAddOldCoinRow = async() => {
        if (inputOldCoinShow) {
            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }
                const response = await axios.post(`${wakabaBaseUrl}/contractorassessments/oldcoinadd`, newOldCoinRow); // Send newRow data to the server
                setOldCoinData((prevData) => [
                  ...prevData,
                  { id: response.data.id, ...newOldCoinRow } // Assuming server returns the new row with an id
                ]);
                setNewOldCoinRow({oldCoinInitialValue});
              } catch (error) {
                console.error('Error adding row:', error);
              }
        }
        setInputOldCoinShow(!inputOldCoinShow);
    };
 //----------------------------- bags---------------------------------
      //get  vendor list form vendor table
      const [bagVendors , setBagVendors] = useState([]);
      const [bagInitialValue , setBagInitialValue] = useState([]);
      useEffect(() => {
          const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
          if (!wakabaBaseUrl) {
              throw new Error('API base URL is not defined');
          }
          axios.post(`${wakabaBaseUrl}/vendor/getVendorList`,{type:'バッグ'})
          .then(response => {
             //  console.log('vendrListAll',response.data)
             setBagVendors(response.data);
              const result = response.data.reduce((acc, { vendor_name }) => {
                // Create a new key-value pair where the key is the vendor name and the value is an empty string
                acc[vendor_name] = '';
                return acc;
            }, {});
            const bagRow = {
              shipping_address: '',
              shipping_date: '',
              number: '',
              manufacturer: '',
              product_name: '',
              model_number: '',
              rank: '',
              purchase_price: '',
              bb_skype_date: '',
            }
  
            const updatedBagRow = {
              ...bagRow,
              ...result
          };
          setBagInitialValue(updatedBagRow);
          setNewBagRow(updatedBagRow);
          // console.log('result',updatedPreciousMetalRow);
          })
          .catch(error => {
              console.error("There was an error fetching the customer data!", error);
          });
      }, []);

 const [bagData, setBagData] = useState('');
 const [editBagId, setEditBagId] = useState(null);
 const [newBagRow, setNewBagRow] = useState(bagInitialValue);

 const handleBagChange = (e, id = null) => {
     const { name, value } = e.target;
     if (id === null) {
     setNewBagRow((prev) => ({ ...prev, [name]: value }));
     } else {
     setBagData((prevData) =>
         prevData.map((row) =>
         row.id === id ? { ...row, [name]: value } : row
         )
     );
     }
 };

 const handleBagEdit = (id) => {
     setEditBagId(id);
 };

 const handleBagSave = async(id) => {
     try {
         const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
         if (!wakabaBaseUrl) {
             throw new Error('API base URL is not defined');
         }
        //  await axios.post(`${wakabaBaseUrl}/contractorassessments/bagupdate`, bagData.find((row) => row.id === id)); // Update row on the server
         setEditBagId(null);
       } catch (error) {
         console.error('Error saving row:', error);
       }
 };

 const handleBagCancel = () => {
     setEditBagId(null);
 };

 const handleBagDelete = async(id) => {
     try {
         const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
         if (!wakabaBaseUrl) {
             throw new Error('API base URL is not defined');
         }
        // await axios.get(`${wakabaBaseUrl}/contractorassessments/bagdelete/${id}`); // Delete row from the server
         setBagData((prevData) => prevData.filter((row) => row.id !== id));
       } catch (error) {
         console.error('Error deleting row:', error);
       }
 };

 const [inputBagShow, setInputBagShow] = useState(false);
 const handleAddBagRow = async() => {
     if (inputBagShow) {
         try {
             const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
             if (!wakabaBaseUrl) {
                 throw new Error('API base URL is not defined');
             }
            //  const response = await axios.post(`${wakabaBaseUrl}/contractorassessments/bagadd`, newBagRow); // Send newRow data to the server
             setBagData((prevData) => [
               ...prevData,
              //  { id: response.data.id, ...newBagRow } // Assuming server returns the new row with an id
               { id: Date.now(), ...newBagRow } // Assuming server returns the new row with an id
             ]);
             setNewBagRow(bagInitialValue);
           } catch (error) {
             console.error('Error adding row:', error);
           }
     }
     setInputBagShow(!inputBagShow);
 };
 //-----------------------------clock---------------------------------
       //get  vendor list form vendor table
       const [clockVendors , setClockVendors] = useState([]);
       const [clockInitialValue , setClockInitialValue] = useState([]);
       useEffect(() => {
           const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
           if (!wakabaBaseUrl) {
               throw new Error('API base URL is not defined');
           }
           axios.post(`${wakabaBaseUrl}/vendor/getVendorList`,{type:'時計'})
           .then(response => {
              //  console.log('vendrListAll',response.data)
              setClockVendors(response.data);
               const result = response.data.reduce((acc, { vendor_name }) => {
                 // Create a new key-value pair where the key is the vendor name and the value is an empty string
                 acc[vendor_name] = '';
                 return acc;
             }, {});
             const clockRow = {
              shipping_address: '',
              shipping_date: '',
              number: '',
              product: '',
              model_number_one: '',
              model_number_two: '',
              automatic_quartz: '',
              movable: '',
              tester: '',
              box_guarantee: '',
              purchase_price: '',
              skype_date: '',
             }
   
             const updatedClockRow = {
               ...clockRow,
               ...result
           };
           setClockInitialValue(updatedClockRow);
           setNewClockRow(updatedClockRow);
           // console.log('result',updatedPreciousMetalRow);
           })
           .catch(error => {
               console.error("There was an error fetching the customer data!", error);
           });
       }, []);

 const [clockData, setClockData] = useState('');

 const [editClockId, setEditClockId] = useState(null);
 const [newClockRow, setNewClockRow] = useState(clockInitialValue);

 const handleClockChange = (e, id = null) => {
     const { name, value } = e.target;
     if (id === null) {
     setNewClockRow((prev) => ({ ...prev, [name]: value }));
     } else {
     setClockData((prevData) =>
         prevData.map((row) =>
         row.id === id ? { ...row, [name]: value } : row
         )
     );
     }
 };

 const handleClockEdit = (id) => {
     setEditClockId(id);
 };

 const handleClockSave = async(id) => {
     try {
         const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
         if (!wakabaBaseUrl) {
             throw new Error('API base URL is not defined');
         }
        //  await axios.post(`${wakabaBaseUrl}/contractorassessments/clockupdate`, clockData.find((row) => row.id === id)); // Update row on the server
         setEditClockId(null);
       } catch (error) {
         console.error('Error saving row:', error);
       }
 };

 const handleClockCancel = () => {
     setEditClockId(null);
 };

 const handleClockDelete = async(id) => {
     try {
         const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
         if (!wakabaBaseUrl) {
             throw new Error('API base URL is not defined');
         }
        // await axios.get(`${wakabaBaseUrl}/contractorassessments/clockdelete/${id}`); // Delete row from the server
         setClockData((prevData) => prevData.filter((row) => row.id !== id));
       } catch (error) {
         console.error('Error deleting row:', error);
       }
 };

 const [inputClockShow, setInputClockShow] = useState(false);
 const handleAddClockRow = async() => {
     if (inputClockShow) {
         try {
             const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
             if (!wakabaBaseUrl) {
                 throw new Error('API base URL is not defined');
             }
            //  const response = await axios.post(`${wakabaBaseUrl}/contractorassessments/clockadd`, newClockRow); // Send newRow data to the server
             setClockData((prevData) => [
               ...prevData,
              //  { id: response.data.id, ...newBagRow } // Assuming server returns the new row with an id
               { id: Date.now(), ...newBagRow } // Assuming server returns the new row with an id
             ]);
             setNewClockRow(clockInitialValue);
           } catch (error) {
             console.error('Error adding row:', error);
           }
     }
     setInputClockShow(!inputClockShow);
 };
//  -----------------------------wallet---------------------------------
       //get  vendor list form vendor table
       const [walletVendors , setWalletVendors] = useState([]);
       const [walletInitialValue , setWalletInitialValue] = useState([]);
       useEffect(() => {
           const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
           if (!wakabaBaseUrl) {
               throw new Error('API base URL is not defined');
           }
           axios.post(`${wakabaBaseUrl}/vendor/getVendorList`,{type:'財布'})
           .then(response => {
              //  console.log('vendrListAll',response.data)
              setWalletVendors(response.data);
               const result = response.data.reduce((acc, { vendor_name }) => {
                 // Create a new key-value pair where the key is the vendor name and the value is an empty string
                 acc[vendor_name] = '';
                 return acc;
             }, {});
             const walletRow = {
              shipping_address: '',
              shipping_date: '',
              number: '',
              manufacturer: '',
              product_name: '',
              model_number: '',
              rank: '',
              bb_skype_day: '',
             }
   
             const updatedWalletRow = {
               ...walletRow,
               ...result
           };
           setWalletInitialValue(updatedWalletRow);
           setNewWalletRow(updatedWalletRow);
           // console.log('result',updatedPreciousMetalRow);
           })
           .catch(error => {
               console.error("There was an error fetching the customer data!", error);
           });
       }, []);

const [walletData, setWalletData] = useState('');

const [editWalletId, setEditWalletId] = useState(null);
const [newWalletRow, setNewWalletRow] = useState(walletInitialValue);

const handleWalletChange = (e, id = null) => {
    const { name, value } = e.target;
    if (id === null) {
    setNewWalletRow((prev) => ({ ...prev, [name]: value }));
    } else {
    setWalletData((prevData) =>
        prevData.map((row) =>
        row.id === id ? { ...row, [name]: value } : row
        )
    );
    }
};

const handleWalletEdit = (id) => {
    setEditWalletId(id);
};

const handleWalletSave = async(id) => {
    try {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // await axios.post(`${wakabaBaseUrl}/contractorassessments/walletupdate`, walletData.find((row) => row.id === id)); // Update row on the server
        setEditWalletId(null);
      } catch (error) {
        console.error('Error saving row:', error);
      }
};

const handleWalletCancel = () => {
    setEditWalletId(null);
};

const handleWalletDelete = async(id) => {
    try {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
      //  await axios.get(`${wakabaBaseUrl}/contractorassessments/walletdelete/${id}`); // Delete row from the server
        setWalletData((prevData) => prevData.filter((row) => row.id !== id));
      } catch (error) {
        console.error('Error deleting row:', error);
      }
};

const [inputWalletShow, setInputWalletShow] = useState(false);
const handleAddWalletRow = async() => {
    if (inputWalletShow) {
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            // const response = await axios.post(`${wakabaBaseUrl}/contractorassessments/walletadd`, newWalletRow); // Send newRow data to the server
            setWalletData((prevData) => [
              ...prevData,
              // { id: response.data.id, ...newBagRow } // Assuming server returns the new row with an id
              { id: Date.now(), ...newBagRow } // Assuming server returns the new row with an id
            ]);
            setNewWalletRow(walletInitialValue);
          } catch (error) {
            console.error('Error adding row:', error);
          }
    }
    setInputWalletShow(!inputWalletShow);
};
//  ----------------------------- accesseories---------------------------------
       //get  vendor list form vendor table
       const [accessoiresVendors , setAccessoriesVendors] = useState([]);
       const [accessoriesInitialValue , setAccesseoriesInitialValue] = useState([]);
       useEffect(() => {
           const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
           if (!wakabaBaseUrl) {
               throw new Error('API base URL is not defined');
           }
           axios.post(`${wakabaBaseUrl}/vendor/getVendorList`,{type:'アクセサリ'})
           .then(response => {
              //  console.log('vendrListAll',response.data)
              setAccessoriesVendors(response.data);
               const result = response.data.reduce((acc, { vendor_name }) => {
                 // Create a new key-value pair where the key is the vendor name and the value is an empty string
                 acc[vendor_name] = '';
                 return acc;
             }, {});
             const accesseoriesRow = {
              shipping_address: '',
              shipping_date: '',
              wakaba_number: '',
              manufacturer: '',
              product_detail: '',
              model_number: '',
              rank: '',
              bb_skype_day: '',
             }
   
             const updatedAccesseoriesRow = {
               ...accesseoriesRow,
               ...result
           };
           setAccesseoriesInitialValue(updatedAccesseoriesRow);
           setNewAccesseoriesRow(updatedAccesseoriesRow);
           // console.log('result',updatedPreciousMetalRow);
           })
           .catch(error => {
               console.error("There was an error fetching the customer data!", error);
           });
       }, []);

const [accesseoriesData, setAccesseoriesData] = useState('');

const [editAccesseoriesId, setEditAccesseoriesId] = useState(null);
const [newAccesseoriesRow, setNewAccesseoriesRow] = useState(accessoriesInitialValue);

const handleAccesseoriesChange = (e, id = null) => {
    const { name, value } = e.target;
    if (id === null) {
    setNewAccesseoriesRow((prev) => ({ ...prev, [name]: value }));
    } else {
    setAccesseoriesData((prevData) =>
        prevData.map((row) =>
        row.id === id ? { ...row, [name]: value } : row
        )
    );
    }
};

const handleAccesseoriesEdit = (id) => {
    setEditAccesseoriesId(id);
};

const handleAccesseoriesSave = async(id) => {
    try {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // await axios.post(`${wakabaBaseUrl}/contractorassessments/accesseoriesupdate`, accesseoriesData.find((row) => row.id === id)); // Update row on the server
        setEditAccesseoriesId(null);
      } catch (error) {
        console.error('Error saving row:', error);
      }
};

const handleAccesseoriesCancel = () => {
    setEditAccesseoriesId(null);
};

const handleAccesseoriesDelete = async(id) => {
    try {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
      //  await axios.get(`${wakabaBaseUrl}/contractorassessments/accesseoriesdelete/${id}`); // Delete row from the server
        setAccesseoriesData((prevData) => prevData.filter((row) => row.id !== id));
      } catch (error) {
        console.error('Error deleting row:', error);
      }
};

const [inputAccesseoriesShow, setInputAccesseoriesShow] = useState(false);
const handleAddAccesseoriesRow = async() => {
    if (inputAccesseoriesShow) {
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            // const response = await axios.post(`${wakabaBaseUrl}/contractorassessments/accesseoriesadd`, newAccesseoriesRow); // Send newRow data to the server
            setAccesseoriesData((prevData) => [
              ...prevData,
              // { id: response.data.id, ...newBagRow } // Assuming server returns the new row with an id
              { id: Date.now(), ...newBagRow } // Assuming server returns the new row with an id
            ]);
            setNewAccesseoriesRow(accessoriesInitialValue);
          } catch (error) {
            console.error('Error adding row:', error);
          }
    }
    setInputAccesseoriesShow(!inputAccesseoriesShow);
};
//  ----------------------------- camera---------------------------------
       //get  vendor list form vendor table
       const [cameraVendors , setCameraVendors] = useState([]);
       const [cameraInitialValue , setCameraInitialValue] = useState([]);
       useEffect(() => {
           const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
           if (!wakabaBaseUrl) {
               throw new Error('API base URL is not defined');
           }
           axios.post(`${wakabaBaseUrl}/vendor/getVendorList`,{type:'カメラ'})
           .then(response => {
              //  console.log('vendrListAll',response.data)
              setCameraVendors(response.data);
               const result = response.data.reduce((acc, { vendor_name }) => {
                 // Create a new key-value pair where the key is the vendor name and the value is an empty string
                 acc[vendor_name] = '';
                 return acc;
             }, {});
             const cameraRow = {
              shipping_date: '',
              number: '',
              product_name: '',
              model_number: '',
              purchase_price: '',
              rank: '',
              assessment_date: '',
             }
   
             const updatedCameraRow = {
               ...cameraRow,
               ...result
           };
           setCameraInitialValue(updatedCameraRow);
           setNewCameraRow(updatedCameraRow);
           // console.log('result',updatedPreciousMetalRow);
           })
           .catch(error => {
               console.error("There was an error fetching the customer data!", error);
           });
       }, []);

const [cameraData, setCameraData] = useState('');

const [editCameraId, setEditCameraId] = useState(null);
const [newCameraRow, setNewCameraRow] = useState(cameraInitialValue);

const handleCameraChange = (e, id = null) => {
    const { name, value } = e.target;
    if (id === null) {
    setNewCameraRow((prev) => ({ ...prev, [name]: value }));
    } else {
    setCameraData((prevData) =>
        prevData.map((row) =>
        row.id === id ? { ...row, [name]: value } : row
        )
    );
    }
};

const handleCameraEdit = (id) => {
    setEditCameraId(id);
};

const handleCameraSave = async(id) => {
    try {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // await axios.post(`${wakabaBaseUrl}/contractorassessments/cameraupdate`, cameraData.find((row) => row.id === id)); // Update row on the server
        setEditCameraId(null);
      } catch (error) {
        console.error('Error saving row:', error);
      }
};

const handleCameraCancel = () => {
    setEditCameraId(null);
};

const handleCameraDelete = async(id) => {
    try {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
      //  await axios.get(`${wakabaBaseUrl}/contractorassessments/cameradelete/${id}`); // Delete row from the server
        setCameraData((prevData) => prevData.filter((row) => row.id !== id));
      } catch (error) {
        console.error('Error deleting row:', error);
      }
};

const [inputCameraShow, setInputCameraShow] = useState(false);
const handleAddCameraRow = async() => {
    if (inputCameraShow) {
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            // const response = await axios.post(`${wakabaBaseUrl}/contractorassessments/cameraadd`, newCameraRow); // Send newRow data to the server
            setCameraData((prevData) => [
              ...prevData,
              // { id: response.data.id, ...newBagRow } // Assuming server returns the new row with an id
              { id: Date.now(), ...newBagRow } // Assuming server returns the new row with an id
            ]);
            setNewCameraRow(cameraInitialValue);
          } catch (error) {
            console.error('Error adding row:', error);
          }
    }
    setInputCameraShow(!inputCameraShow);
};
//  -----------------------------Antique ---------------------------------
       //get  vendor list form vendor table
       const [antiqueVendors , setAntiqueVendors] = useState([]);
       const [antiqueInitialValue , setAntiqueInitialValue] = useState([]);
       useEffect(() => {
           const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
           if (!wakabaBaseUrl) {
               throw new Error('API base URL is not defined');
           }
           axios.post(`${wakabaBaseUrl}/vendor/getVendorList`,{type:'骨董品'})
           .then(response => {
              //  console.log('vendrListAll',response.data)
              setAntiqueVendors(response.data);
               const result = response.data.reduce((acc, { vendor_name }) => {
                 // Create a new key-value pair where the key is the vendor name and the value is an empty string
                 acc[vendor_name] = '';
                 return acc;
             }, {});
             const antiqueRow = {
              shipping_address: '',
              shipping_date: '',
              number:'',
              product_name: '',
              rank: '',
              assessment_date: '',
             }
   
             const updatedAntiqueRow = {
               ...antiqueRow,
               ...result
           };
           setAntiqueInitialValue(updatedAntiqueRow);
           setNewAntiqueRow(updatedAntiqueRow);
           // console.log('result',updatedPreciousMetalRow);
           })
           .catch(error => {
               console.error("There was an error fetching the customer data!", error);
           });
       }, []);

const [antiqueData, setAntiqueData] = useState('');

const [editAntiqueId, setEditAntiqueId] = useState(null);
const [newAntiqueRow, setNewAntiqueRow] = useState(antiqueInitialValue);

const handleAntiqueChange = (e, id = null) => {
    const { name, value } = e.target;
    if (id === null) {
    setNewAntiqueRow((prev) => ({ ...prev, [name]: value }));
    } else {
    setAntiqueData((prevData) =>
        prevData.map((row) =>
        row.id === id ? { ...row, [name]: value } : row
        )
    );
    }
};

const handleAntiqueEdit = (id) => {
    setEditAntiqueId(id);
};

const handleAntiqueSave = async(id) => {
    try {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // await axios.post(`${wakabaBaseUrl}/contractorassessments/antiqueupdate`, antiqueData.find((row) => row.id === id)); // Update row on the server
        setEditAntiqueId(null);
      } catch (error) {
        console.error('Error saving row:', error);
      }
};

const handleAntiqueCancel = () => {
    setEditAntiqueId(null);
};

const handleAntiqueDelete = async(id) => {
    try {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
      //  await axios.get(`${wakabaBaseUrl}/contractorassessments/antiquedelete/${id}`); // Delete row from the server
        setAntiqueData((prevData) => prevData.filter((row) => row.id !== id));
      } catch (error) {
        console.error('Error deleting row:', error);
      }
};

const [inputAntiqueShow, setInputAntiqueShow] = useState(false);
const handleAddAntiqueRow = async() => {
    if (inputAntiqueShow) {
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            // const response = await axios.post(`${wakabaBaseUrl}/contractorassessments/antiqueadd`, newAntiqueRow); // Send newRow data to the server
            setAntiqueData((prevData) => [
              ...prevData,
              // { id: response.data.id, ...newBagRow } // Assuming server returns the new row with an id
              { id: Date.now(), ...newBagRow } // Assuming server returns the new row with an id
            ]);
            setNewAntiqueRow(antiqueInitialValue);
          } catch (error) {
            console.error('Error adding row:', error);
          }
    }
    setInputAntiqueShow(!inputAntiqueShow);
};
//  -----------------------------westernLiquor ---------------------------------
       //get  vendor list form vendor table
       const [westernLiquorLiquorVendors , setWesternLiquorVendors] = useState([]);
       const [westernLiquorInitialValue , setWesternLiquorInitialValue] = useState([]);
       useEffect(() => {
           const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
           if (!wakabaBaseUrl) {
               throw new Error('API base URL is not defined');
           }
           axios.post(`${wakabaBaseUrl}/vendor/getVendorList`,{type:'洋酒'})
           .then(response => {
              //  console.log('vendrListAll',response.data)
              setWesternLiquorVendors(response.data);
               const result = response.data.reduce((acc, { vendor_name }) => {
                 // Create a new key-value pair where the key is the vendor name and the value is an empty string
                 acc[vendor_name] = '';
                 return acc;
             }, {});
             const waterLiquorRow = {
              shipping_address: '',
              shipping_date: '',
              wakaba_number: '',
              kinds: '',
              brand: '',
              quantity: '',
              capacity: '',
              frequency: '',
              assessment_date: '',
             }
   
             const updatedWaterLiquorRow = {
               ...waterLiquorRow,
               ...result
           };
           setWesternLiquorInitialValue(updatedWaterLiquorRow);
           setNewWesternliquorRow(updatedWaterLiquorRow);
           // console.log('result',updatedPreciousMetalRow);
           })
           .catch(error => {
               console.error("There was an error fetching the customer data!", error);
           });
       }, []);

const [westernliquorData, setWesternliquorData] = useState('');

const [editWesternliquorId, setEditWesternliquorId] = useState(null);
const [newWesternliquorRow, setNewWesternliquorRow] = useState(westernLiquorInitialValue);

const handleWesternliquorChange = (e, id = null) => {
    const { name, value } = e.target;
    if (id === null) {
    setNewWesternliquorRow((prev) => ({ ...prev, [name]: value }));
    } else {
    setWesternliquorData((prevData) =>
        prevData.map((row) =>
        row.id === id ? { ...row, [name]: value } : row
        )
    );
    }
};

const handleWesternliquorEdit = (id) => {
    setEditWesternliquorId(id);
};

const handleWesternliquorSave = async(id) => {
    try {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // await axios.post(`${wakabaBaseUrl}/contractorassessments/westernliquorupdate`, westernliquorData.find((row) => row.id === id)); // Update row on the server
        setEditWesternliquorId(null);
      } catch (error) {
        console.error('Error saving row:', error);
      }
};

const handleWesternliquorCancel = () => {
    setEditWesternliquorId(null);
};

const handleWesternliquorDelete = async(id) => {
    try {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
      //  await axios.get(`${wakabaBaseUrl}/contractorassessments/westernliquordelete/${id}`); // Delete row from the server
        setWesternliquorData((prevData) => prevData.filter((row) => row.id !== id));
      } catch (error) {
        console.error('Error deleting row:', error);
      }
};

const [inputWesternliquorShow, setInputWesternliquorShow] = useState(false);
const handleAddWesternliquorRow = async() => {
    if (inputWesternliquorShow) {
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            // const response = await axios.post(`${wakabaBaseUrl}/contractorassessments/westernliquoradd`, newWesternliquorRow); // Send newRow data to the server
            setWesternliquorData((prevData) => [
              ...prevData,
              // { id: response.data.id, ...newBagRow } // Assuming server returns the new row with an id
              { id: Date.now(), ...newBagRow } // Assuming server returns the new row with an id
            ]);
            setNewWesternliquorRow(westernLiquorInitialValue);
          } catch (error) {
            console.error('Error adding row:', error);
          }
    }
    setInputWesternliquorShow(!inputWesternliquorShow);
};
//  -----------------------------musical instrument---------------------------------
       //get  vendor list form vendor table
       const [musicalInstrumentVendors , setMusicalInstrumentVendors] = useState([]);
       const [musicalInstrumentInitialValue , setMusicalInstrumentInitialValue] = useState([]);
       useEffect(() => {
           const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
           if (!wakabaBaseUrl) {
               throw new Error('API base URL is not defined');
           }
           axios.post(`${wakabaBaseUrl}/vendor/getVendorList`,{type:'楽器'})
           .then(response => {
              //  console.log('vendrListAll',response.data)
              setMusicalInstrumentVendors(response.data);
               const result = response.data.reduce((acc, { vendor_name }) => {
                 // Create a new key-value pair where the key is the vendor name and the value is an empty string
                 acc[vendor_name] = '';
                 return acc;
             }, {});
             const musicalInstrumentRow = {
              shipping_date: '',
              number: '',
              product_name: '',
              remarks: '',
              assessment_date: '',
             }
   
             const updatedMusicalInstrumentRow = {
               ...musicalInstrumentRow,
               ...result
           };
           setMusicalInstrumentInitialValue(updatedMusicalInstrumentRow);
           setNewMusicalinstrumentRow(updatedMusicalInstrumentRow);
           // console.log('result',updatedPreciousMetalRow);
           })
           .catch(error => {
               console.error("There was an error fetching the customer data!", error);
           });
       }, []);

const [musicalinstrumentData, setMusicalinstrumentData] = useState('');

const [editMusicalinstrumentId, setEditMusicalinstrumentId] = useState(null);
const [newMusicalinstrumentRow, setNewMusicalinstrumentRow] = useState(musicalInstrumentInitialValue);

const handleMusicalinstrumentChange = (e, id = null) => {
    const { name, value } = e.target;
    if (id === null) {
    setNewMusicalinstrumentRow((prev) => ({ ...prev, [name]: value }));
    } else {
    setMusicalinstrumentData((prevData) =>
        prevData.map((row) =>
        row.id === id ? { ...row, [name]: value } : row
        )
    );
    }
};

const handleMusicalinstrumentEdit = (id) => {
    setEditMusicalinstrumentId(id);
};

const handleMusicalinstrumentSave = async(id) => {
    try {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // await axios.post(`${wakabaBaseUrl}/contractorassessments/musicalinstrumentupdate`, musicalinstrumentData.find((row) => row.id === id)); // Update row on the server
        setEditMusicalinstrumentId(null);
      } catch (error) {
        console.error('Error saving row:', error);
      }
};

const handleMusicalinstrumentCancel = () => {
    setEditMusicalinstrumentId(null);
};

const handleMusicalinstrumentDelete = async(id) => {
    try {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
      //  await axios.get(`${wakabaBaseUrl}/contractorassessments/musicalinstrumentdelete/${id}`); // Delete row from the server
        setMusicalinstrumentData((prevData) => prevData.filter((row) => row.id !== id));
      } catch (error) {
        console.error('Error deleting row:', error);
      }
};

const [inputMusicalinstrumentShow, setInputMusicalinstrumentShow] = useState(false);
const handleAddMusicalinstrumentRow = async() => {
    if (inputMusicalinstrumentShow) {
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            // const response = await axios.post(`${wakabaBaseUrl}/contractorassessments/musicalinstrumentadd`, newMusicalinstrumentRow); // Send newRow data to the server
            setMusicalinstrumentData((prevData) => [
              ...prevData,
              // { id: response.data.id, ...newBagRow } // Assuming server returns the new row with an id
              { id: Date.now(), ...newBagRow } // Assuming server returns the new row with an id
            ]);
            setNewMusicalinstrumentRow(musicalInstrumentInitialValue);
          } catch (error) {
            console.error('Error adding row:', error);
          }
    }
    setInputMusicalinstrumentShow(!inputMusicalinstrumentShow);
};
//  ---------------------------kimono-----------------------------------
       //get  vendor list form vendor table
       const [kimonoVendors , setKimonoVendors] = useState([]);
       const [kimonoInitialValue , setKimonoInitialValue] = useState([]);
       useEffect(() => {
           const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
           if (!wakabaBaseUrl) {
               throw new Error('API base URL is not defined');
           }
           axios.post(`${wakabaBaseUrl}/vendor/getVendorList`,{type:'着物'})
           .then(response => {
              //  console.log('vendrListAll',response.data)
              setKimonoVendors(response.data);
               const result = response.data.reduce((acc, { vendor_name }) => {
                 // Create a new key-value pair where the key is the vendor name and the value is an empty string
                 acc[vendor_name] = '';
                 return acc;
             }, {});
             const kimonoRow = {
              shipping_date: '',
              number: '',
              product_name: '',
              remarks: '',
              assessment_date: '',
             }
   
             const updatedKimonoRow = {
               ...kimonoRow,
               ...result
           };
           setKimonoInitialValue(updatedKimonoRow);
           setNewKimonoRow(updatedKimonoRow);
           // console.log('result',updatedPreciousMetalRow);
           })
           .catch(error => {
               console.error("There was an error fetching the customer data!", error);
           });
       }, []);

const [kimonoData, setKimonoData] = useState('');

const [editKimonoId, setEditKimonoId] = useState(null);
const [newKimonoRow, setNewKimonoRow] = useState(kimonoInitialValue);

const handleKimonoChange = (e, id = null) => {
    const { name, value } = e.target;
    if (id === null) {
    setNewKimonoRow((prev) => ({ ...prev, [name]: value }));
    } else {
    setKimonoData((prevData) =>
        prevData.map((row) =>
        row.id === id ? { ...row, [name]: value } : row
        )
    );
    }
};

const handleKimonoEdit = (id) => {
    setEditKimonoId(id);
};

const handleKimonoSave = async(id) => {
    try {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // await axios.post(`${wakabaBaseUrl}/contractorassessments/kimonoupdate`, kimonoData.find((row) => row.id === id)); // Update row on the server
        setEditKimonoId(null);
      } catch (error) {
        console.error('Error saving row:', error);
      }
};

const handleKimonoCancel = () => {
    setEditKimonoId(null);
};

const handleKimonoDelete = async(id) => {
    try {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
      //  await axios.get(`${wakabaBaseUrl}/contractorassessments/kimonodelete/${id}`); // Delete row from the server
        setKimonoData((prevData) => prevData.filter((row) => row.id !== id));
      } catch (error) {
        console.error('Error deleting row:', error);
      }
};

const [inputKimonoShow, setInputKimonoShow] = useState(false);
const handleAddKimonoRow = async() => {
    if (inputKimonoShow) {
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            // const response = await axios.post(`${wakabaBaseUrl}/contractorassessments/kimonoadd`, newKimonoRow); // Send newRow data to the server
            setKimonoData((prevData) => [
              ...prevData,
              // { id: response.data.id, ...newBagRow } // Assuming server returns the new row with an id
              { id: Date.now(), ...newBagRow } // Assuming server returns the new row with an id
            ]);
            setNewKimonoRow(kimonoInitialValue);
          } catch (error) {
            console.error('Error adding row:', error);
          }
    }
    setInputKimonoShow(!inputKimonoShow);
};
//  -------------------------------smartphone and tablet-------------------------------
       //get  vendor list form vendor table
       const [smartphoneVendors , setSmartphoneVendors] = useState([]);
       const [smartphoneInitialValue , setSmartphoneInitialValue] = useState([]);
       useEffect(() => {
           const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
           if (!wakabaBaseUrl) {
               throw new Error('API base URL is not defined');
           }
           axios.post(`${wakabaBaseUrl}/vendor/getVendorList`,{type:'スマホ夕ブレット'})
           .then(response => {
              //  console.log('vendrListAll',response.data)
              setSmartphoneVendors(response.data);
               const result = response.data.reduce((acc, { vendor_name }) => {
                 // Create a new key-value pair where the key is the vendor name and the value is an empty string
                 acc[vendor_name] = '';
                 return acc;
             }, {});
             const smartphoneRow = {
              shipping_date: '',
              number: '',
              product_name: '',
              remarks: '',
              yahoo_auctions_highest_price: '',
              assessment_date:'',
             }
   
             const updatedSmartphoneRow = {
               ...smartphoneRow,
               ...result
           };
           setSmartphoneInitialValue(updatedSmartphoneRow);
           setNewSmartphoneandtabletRow(updatedSmartphoneRow);
           // console.log('result',updatedPreciousMetalRow);
           })
           .catch(error => {
               console.error("There was an error fetching the customer data!", error);
           });
       }, []);

const [smartphoneandtabletData, setSmartphoneandtabletData] = useState('');

const [editSmartphoneandtabletId, setEditSmartphoneandtabletId] = useState(null);
const [newSmartphoneandtabletRow, setNewSmartphoneandtabletRow] = useState(smartphoneInitialValue);

const handleSmartphoneandtabletChange = (e, id = null) => {
    const { name, value } = e.target;
    if (id === null) {
    setNewSmartphoneandtabletRow((prev) => ({ ...prev, [name]: value }));
    } else {
    setSmartphoneandtabletData((prevData) =>
        prevData.map((row) =>
        row.id === id ? { ...row, [name]: value } : row
        )
    );
    }
};

const handleSmartphoneandtabletEdit = (id) => {
    setEditSmartphoneandtabletId(id);
};

const handleSmartphoneandtabletSave = async(id) => {
    try {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // await axios.post(`${wakabaBaseUrl}/contractorassessments/smartphoneandtabletupdate`, smartphoneandtabletData.find((row) => row.id === id)); // Update row on the server
        setEditSmartphoneandtabletId(null);
      } catch (error) {
        console.error('Error saving row:', error);
      }
};

const handleSmartphoneandtabletCancel = () => {
    setEditSmartphoneandtabletId(null);
};

const handleSmartphoneandtabletDelete = async(id) => {
    try {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
      //  await axios.get(`${wakabaBaseUrl}/contractorassessments/smartphoneandtabletdelete/${id}`); // Delete row from the server
        setSmartphoneandtabletData((prevData) => prevData.filter((row) => row.id !== id));
      } catch (error) {
        console.error('Error deleting row:', error);
      }
};

const [inputSmartphoneandtabletShow, setInputSmartphoneandtabletShow] = useState(false);
const handleAddSmartphoneandtabletRow = async() => {
    if (inputSmartphoneandtabletShow) {
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            // const response = await axios.post(`${wakabaBaseUrl}/contractorassessments/smartphoneandtabletadd`, newSmartphoneandtabletRow); // Send newRow data to the server
            setSmartphoneandtabletData((prevData) => [
              ...prevData,
              // { id: response.data.id, ...newBagRow } // Assuming server returns the new row with an id
              { id: Date.now(), ...newBagRow } // Assuming server returns the new row with an id
            ]);
            setNewSmartphoneandtabletRow(smartphoneInitialValue);
          } catch (error) {
            console.error('Error adding row:', error);
          }
    }
    setInputSmartphoneandtabletShow(!inputKimonoShow);
};

//  --------------------------------------------------------------

    return (
        <>
            {/* <Titlebar title={title} /> */}
            {/* first button line  */}
            <div className="w-full flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full flex justify-center">
                    <div className='w-full'>
                        <div className='flex justify-center ml-10 ' >
                            <div className='contractor-assessment-sheet flex justify-between w-full '>
                                <div className='flex justify-center mt-10 w-full' >
                                    <ButtonComponent className='!w-[200px] !bg-[transparent] border border-[#424242] !text-[#424242] h-11 !text-2xl !px-0 ' ><Link to="/salesslip">売上表</Link></ButtonComponent>
                                    <ButtonComponent children={'業者査定シート'} className='!w-[350px] h-11 !bg-[#424242] border border-[#424242] !text-2xl !px-0' style={{ marginLeft: '30px' }} />
                                    {/* <ButtonComponent className='!w-[200px] h-11 !bg-[transparent] border border-[#424242] !text-[#424242] !text-2xl !px-0' style={{ marginLeft: '30px' }} >
                                        <Link to="/yahooauction">ヤフオク</Link>
                                    </ButtonComponent> */}
                                </div>
                                <div className='flex justify-center mt-10 w-full' >
                                    <div>
                                        <ButtonComponent onClick={handleSendCheckedValues} children={'業者への買取依書へ'} className='h-11 !bg-[#9bd195] !text-2xl text-[white] !px-10' />
                                        <div className='text-center'>
                                            <LabelComponent value={'行を選択してくだをい'} className="text-center"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* second button line  */}
                        <div className='flex ml-5 justify-center'>
                            <div className='contractor-assessment-sheet-btns flex justify-around  mt-5 w-full' >
                                <div className='flex justify-center gap-5 mt-5'>
                                    {/* <ButtonComponent children={'全て'} className="!px-4  bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg " /> */}
                                    <ButtonComponent children={'貴金属'}  onClick={() => handleButtonClick('貴金属')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[0] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[0] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'古銭等'} onClick={() => handleButtonClick('古銭等')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[1] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[1] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'バッグ'} onClick={() => handleButtonClick('バッグ')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[2] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[2] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'時計'} onClick={() => handleButtonClick('時計')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[3] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[3] ? '#424242' : 'transparent'}}/>
                                </div>
                                <div className='flex justify-center gap-5 mt-5 '>
                                    <ButtonComponent children={'財布'} onClick={() => handleButtonClick('財布')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[4] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[4] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'アクセサリ'} onClick={() => handleButtonClick('アクセサリ')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[5] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[5] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'骨董品'} onClick={() => handleButtonClick('骨董品')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[6] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[6] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'洋酒'} onClick={() => handleButtonClick('洋酒')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[7] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[7] ? '#424242' : 'transparent'}}/>

                                </div>
                                <div className='flex justify-center gap-5 mt-5 '>
                                   
                                    <ButtonComponent children={'カメラ'} onClick={() => handleButtonClick('カメラ')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[8] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[8] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'楽器'} onClick={() => handleButtonClick('楽器')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[9] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[9] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'着物'} onClick={() => handleButtonClick('着物')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[10] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[10] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'スマホ/夕ブレット'} onClick={() => handleButtonClick('スマホ夕ブレット')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[11] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[11] ? '#424242' : 'transparent'}}/>
                                    <select id="classificatin" name="classificatin" onClick={() => handleButtonClick('その他')} className="!px-4 h-8 rounded-lg text-[#70685a] !text-[15px] font-bold border border-[#70685a] py-1 outline-[#70685a]">
                                        <option value="">その他</option>
                                        <option value="2"></option>
                                        <option value="3"> </option>
                                        <option value="4"></option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/*  Tabe*/}
                        <div className='mt-10 pb-20 w-full h-full flex'>
                            {/* precious metal */}
                            <div className='h-[400px]' style={{ width: '100%', overflow: 'auto' , display: visibleTable === '貴金属' ? 'block' : 'none' }} >
                            {data.preciousMetals && data.preciousMetals.length > 0 ? (
                                <table id="" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10 h-11'>
                                        <tr>
                                            <th></th>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>配送先</th>
                                            <th style={Th}>卸日</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品</th>
                                            <th style={Th}>個数</th>
                                            <th style={Th}>金種</th>
                                            <th style={Th}>総重量</th>
                                            <th style={Th}>買取価格</th>
                                            <th style={Th}>地金重さ</th>
                                            {(preciousMetalVendors && preciousMetalVendors.length !== 0) && preciousMetalVendors.map((vendor, index) => (
                                                <th key={index} style={Th}>{vendor.vendor_name}</th>
                                            ))}
                                            <th style={Th}>{editPreciousMetalId === null ? '編集する' : 'セーブ'}</th>
                                            <th style={Th}>{editPreciousMetalId === null ? '削除' : 'キャンセル'}</th>
                                        </tr>
                                    </thead>
        <tbody>
          {(preciousMetalVendors && preciousMetalVendors.length !== 0) && preciousMetalData.map((item, index) => (
            <tr key={item.id} style={editPreciousMetalId === item.id ? editableRowStyle : {}}>
              <td><input type='checkbox' value={item.id} onChange={handleCheckboxChange} className='w-5 mr-3'/></td>
              <td style={Td}>{index + 1}</td>
              {Object.keys(newPreciousMetalRow).map((key) => (
                <td key={key} style={Td}>
                  {editPreciousMetalId === item.id ? (
                    <input
                      type='text'
                      name={key}
                      value={item[key]||''}
                    // value={key}
                      onChange={(e) => handlePreciousMetalChange(e, item.id)}
                      style={editableRowStyle}
                    />
                  ) : (
                    item[key]
                  )}
                </td>
              ))}
              <td style={Td}>
                {editPreciousMetalId === item.id ? (
                  <div>
                    <button onClick={() => handlePreciousMetalSave(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handlePreciousMetalEdit(item.id)} className='w-7'>
                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                    </button>
                  </div>
                )}
              </td>
              <td style={Td}>
                {editPreciousMetalId === item.id ? (
                  <div>
                    <button onClick={handlePreciousMetalCancel} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handlePreciousMetalDelete(item.id)} className='w-7'>
                    <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        { inputPreciousMetalShow ?(
          <tr>
            <td style={Td}></td>
            {Object.keys(newPreciousMetalRow).map((key) => (
            <td key={key} style={Td}>
                <input
                    key={key}
                    type="text"
                    name={key}
                    value={newPreciousMetalRow[key]}
                    onChange={handlePreciousMetalChange}
                    placeholder={key.replace(/_/g, ' ')}
                />
            </td>
            ))}
        </tr>
        ):''}
        </tbody>
                                </table>
                                ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                                                                
                                {/* <div className='flex justify-center mt-3 mb-3' >
                                        <button type="button" onClick={handleAddPreciousMetalRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button>
                                    </div> */}
                            </div>
                            {/* Old coin */}
                            <div className='h-[400px]' style={{ width: '100%', overflow: 'auto' , display: visibleTable === '古銭等' ? 'block' : 'none' }} >
                            {data.oldCoins && data.oldCoins.length > 0 ? (
                                <table id="oldcoin" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10 h-11'>
                                        <tr>
                                            <th></th>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>発送日</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>備考</th>
                                            <th style={Th}>査定日</th>
                                            {(oldCoinVendors && oldCoinVendors.length !== 0) && oldCoinVendors.map((vendor, index) => (
                                                <th key={index} style={Th}>{vendor.vendor_name}</th>
                                            ))}
                                            <th style={Th}>{editOldCoinId === null ? '編集' : 'セーブ'}</th>
                                            <th style={Th}>{editOldCoinId === null ? '削除' : 'キャンセル'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
          {oldCoinData.map((item, index) => (
            <tr key={item.id} style={editOldCoinId === item.id ? editableRowStyle : {}}>
              <td><input type='checkbox' value={item.id} onChange={handleCheckboxChange} className='w-5 mr-3'/></td>
              <td style={Td}>{index + 1}</td>
              {Object.keys(newOldCoinRow).map((key) => (
                <td key={key} style={Td}>
                  {editOldCoinId === item.id ? (
                    <input
                      type="text"
                      name={key}
                      value={item[key]||''}
                    // value={key}
                      onChange={(e) => handleOldCoinChange(e, item.id)}
                      style={editableRowStyle}
                    />
                  ) : (
                    item[key]
                  )}
                </td>
              ))}
              <td style={Td}>
                {editOldCoinId === item.id ? (
                  <div>
                    <button onClick={() => handleOldCoinSave(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleOldCoinEdit(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                    </button>
                  </div>
                )}
              </td>
              <td style={Td}>
                {editOldCoinId === item.id ? (
                  <div>
                    <button onClick={handleOldCoinCancel} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleOldCoinDelete(item.id)} className='w-7'> 
                        <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                        </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          { inputOldCoinShow ?(
          <tr>
            <td style={Td}></td>
            {Object.keys(newOldCoinRow).map((key) => (
            <td key={key} style={Td}>
                <input
                    key={key}
                    type="text"
                    name={key}
                    value={newOldCoinRow[key]}
                    onChange={handleOldCoinChange}
                    placeholder={key.replace(/_/g, ' ')}
                />
            </td>
            ))}
        </tr>
        ):''}
        </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                                {/* <div className='flex justify-center mt-3 mb-3' >
                                        <button type="button" onClick={handleAddOldCoinRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button>
                                    </div> */}
                            </div>
                            {/* bag */}
                            <div className='h-[400px]' style={{ width: '100%', overflow: 'auto' , display: visibleTable === 'バッグ' ? 'block' : 'none' }} >
                            {data.bags && data.bags.length > 0 ? (
                                <table id="bag" style={Table}>
                                <thead className='h-11 sticky top-0 bg-white z-10'>
                                    <tr>
                                        <th></th>
                                        <th style={Th}>NO</th>
                                        <th style={Th}>配送先</th>
                                        <th style={Th}>発送日2</th>
                                        <th style={Th}>番号</th>
                                        <th style={Th}>メーカー</th>
                                        <th style={Th}>商品名</th>
                                        <th style={Th}>型番</th>
                                        <th style={Th}>ランク</th>
                                        <th style={Th}>買取額</th>
                                        <th style={Th}>BBスカイプ日</th>
                                        {(bagVendors && bagVendors.length !== 0) && bagVendors.map((vendor, index) => (
                                                <th key={index} style={Th}>{vendor.vendor_name}</th>
                                            ))}
                                        <th style={Th}>{editBagId === null ? '編集' : 'セーブ'}</th>
                                        <th style={Th}>{editBagId === null ? '削除' : 'キャンセル'}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
          {(bagVendors && bagVendors.length !== 0) && bagData.map((item, index) => (
            <tr key={item.id} style={editBagId === item.id ? editableRowStyle : {}}>
              <td><input type='checkbox' value={item.id} onChange={handleCheckboxChange} className='w-5 mr-3'/></td>
              <td style={Td}>{index + 1}</td>
              {Object.keys(newBagRow).map((key) => (
                <td key={key} style={Td}>
                  {editBagId === item.id ? (
                    <input
                      type="text"
                      name={key}
                      value={item[key]||''}
                    // value={key}
                      onChange={(e) => handleBagChange(e, item.id)}
                      style={editableRowStyle}
                    />
                  ) : (
                    item[key]
                  )}
                </td>
              ))}
              <td style={Td}>
                {editBagId === item.id ? (
                  <div>
                    <button onClick={() => handleBagSave(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleBagEdit(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                    </button>
                  </div>
                )}
              </td>
              <td style={Td}>
                {editBagId === item.id ? (
                  <div>
                    <button onClick={handleBagCancel} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleBagDelete(item.id)} className='w-7'> 
                        <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                        </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          { inputBagShow ?(
          <tr>
            <td style={Td}></td>
            {Object.keys(newBagRow).map((key) => (
            <td key={key} style={Td}>
                <input
                    key={key}
                    type="text"
                    name={key}
                    value={newBagRow[key]}
                    onChange={handleBagChange}
                    placeholder={key.replace(/_/g, ' ')}
                />
            </td>
            ))}
        </tr>
        ):''}
        </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                                                                <div className='flex justify-center mt-3 mb-3' >
                                        {/* <button type="button" onClick={handleAddBagRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button> */}
                                    </div>
                            </div>
                            {/* clock */}
                            <div className='h-[400px]' style={{ width: '100%', overflow: 'auto' , display: visibleTable === '時計' ? 'block' : 'none' }}>
                            {data.clocks && data.clocks.length > 0 ? (
                                <table id="clock" style={Table}>
                                    <thead className='h-11 sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th></th>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>配送先</th>
                                            <th style={Th}>発送日2</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>型番１</th>
                                            <th style={Th}>型番２</th>
                                            <th style={Th}>自動／クォーツ</th>
                                            <th style={Th}>可動／不動</th>
                                            <th style={Th}>テスター</th>
                                            <th style={Th}>箱ギャラ</th>
                                            <th style={Th}>買取額</th>
                                            <th style={Th}>スカイプ日</th>
                                            {(clockVendors && clockVendors.length !== 0) && clockVendors.map((vendor, index) => (
                                                <th key={index} style={Th}>{vendor.vendor_name}</th>
                                            ))}
                                            <th style={Th}>{editClockId === null ? '編集' : 'セーブ'}</th>
                                            <th style={Th}>{editClockId === null ? '削除' : 'キャンセル'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
          {(clockVendors && clockVendors.length !== 0) && clockData.map((item, index) => (
            <tr key={item.id} style={editClockId === item.id ? editableRowStyle : {}}>
              <td><input type='checkbox' value={item.id} onChange={handleCheckboxChange} className='w-5 mr-3'/></td>
              <td style={Td}>{index + 1}</td>
              {Object.keys(newClockRow).map((key) => (
                <td key={key} style={Td}>
                  {editClockId === item.id ? (
                    <input
                      type="text"
                      name={key}
                      value={item[key]||''}
                    // value={key}
                      onChange={(e) => handleClockChange(e, item.id)}
                      style={editableRowStyle}
                    />
                  ) : (
                    item[key]
                  )}
                </td>
              ))}
              <td style={Td}>
                {editClockId === item.id ? (
                  <div>
                    <button onClick={() => handleClockSave(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleClockEdit(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                    </button>
                  </div>
                )}
              </td>
              <td style={Td}>
                {editClockId === item.id ? (
                  <div>
                    <button onClick={handleClockCancel} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleClockDelete(item.id)} className='w-7'> 
                        <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                        </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          { inputClockShow ?(
          <tr>
            <td style={Td}></td>
            {Object.keys(newClockRow).map((key) => (
            <td key={key} style={Td}>
                <input
                    key={key}
                    type="text"
                    name={key}
                    value={newClockRow[key]}
                    onChange={handleClockChange}
                    placeholder={key.replace(/_/g, ' ')}
                />
            </td>
            ))}
        </tr>
        ):''}
        </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                                                                                                <div className='flex justify-center mt-3 mb-3' >
                                        {/* <button type="button" onClick={handleAddClockRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button> */}
                                    </div>
                            </div>
                            {/* wallet */}
                            <div className='h-[400px]' style={{ width: '100%', overflow: 'auto' , display: visibleTable === '財布' ? 'block' : 'none' }} >
                            {data.wallets && data.wallets.length > 0 ? (
                                <table id="wallet" style={Table}>
                                    <thead className='h-11 sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th></th>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>配送先</th>
                                            <th style={Th}>発送日2</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>メーカー</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>型番</th>
                                            <th style={Th}>ランク</th>
                                            <th style={Th}>ＢＢスカイプ日</th>
                                            {(walletVendors && walletVendors.length !== 0) && walletVendors.map((vendor, index) => (
                                                <th key={index} style={Th}>{vendor.vendor_name}</th>
                                            ))}
                                            <th style={Th}>{editWalletId === null ? '編集' : 'セーブ'}</th>
                                            <th style={Th}>{editWalletId === null ? '削除' : 'キャンセル'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
          {(walletVendors && walletVendors.length !== 0) && walletData.map((item, index) => (
            <tr key={item.id} style={editWalletId === item.id ? editableRowStyle : {}}>
              <td><input type='checkbox' value={item.id} onChange={handleCheckboxChange} className='w-5 mr-3'/></td>
              <td style={Td}>{index + 1}</td>
              {Object.keys(newWalletRow).map((key) => (
                <td key={key} style={Td}>
                  {editWalletId === item.id ? (
                    <input
                      type="text"
                      name={key}
                      value={item[key]||''}
                    // value={key}
                      onChange={(e) => handleWalletChange(e, item.id)}
                      style={editableRowStyle}
                    />
                  ) : (
                    item[key]
                  )}
                </td>
              ))}
              <td style={Td}>
                {editWalletId === item.id ? (
                  <div>
                    <button onClick={() => handleWalletSave(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleWalletEdit(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                    </button>
                  </div>
                )}
              </td>
              <td style={Td}>
                {editWalletId === item.id ? (
                  <div>
                    <button onClick={handleWalletCancel} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleWalletDelete(item.id)} className='w-7'> 
                        <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                        </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          { inputWalletShow ?(
          <tr>
            <td style={Td}></td>
            {Object.keys(newWalletRow).map((key) => (
            <td key={key} style={Td}>
                <input
                    key={key}
                    type="text"
                    name={key}
                    value={newWalletRow[key]}
                    onChange={handleWalletChange}
                    placeholder={key.replace(/_/g, ' ')}
                />
            </td>
            ))}
        </tr>
        ):''}
        </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                                    <div className='flex justify-center mt-3 mb-3' >
                                        {/* <button type="button" onClick={handleAddWalletRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button> */}
                                    </div>
                            </div>
                            {/* accessories */} 
                            <div className='h-[400px]' style={{ width: '100%', overflow: 'auto' , display: visibleTable === 'アクセサリ' ? 'block' : 'none' }} >
                            {data.accessories && data.accessories.length > 0 ? (
                                <table id="accessories" style={Table}>
                                    <thead className='h-11 sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th></th>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>配送先</th>
                                            <th style={Th}>発送日2</th>
                                            <th style={Th}>わかば番号</th>
                                            <th style={Th}>メーカー</th>
                                            <th style={Th}>商品内容</th>
                                            <th style={Th}>型番</th>
                                            <th style={Th}>ランク</th>
                                            <th style={Th}>BBスカイプ日</th>
                                            {(accessoiresVendors && accessoiresVendors.length !== 0) && accessoiresVendors.map((vendor, index) => (
                                                <th key={index} style={Th}>{vendor.vendor_name}</th>
                                            ))}
                                            <th style={Th}>{editAccesseoriesId === null ? '編集' : 'セーブ'}</th>
                                            <th style={Th}>{editAccesseoriesId === null ? '削除' : 'キャンセル'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
          {(accessoiresVendors && accessoiresVendors.length !== 0) && accesseoriesData.map((item, index) => (
            <tr key={item.id} style={editAccesseoriesId === item.id ? editableRowStyle : {}}>
              <td><input type='checkbox' value={item.id} onChange={handleCheckboxChange} className='w-5 mr-3'/></td>
              <td style={Td}>{index + 1}</td>
              {Object.keys(newAccesseoriesRow).map((key) => (
                <td key={key} style={Td}>
                  {editAccesseoriesId === item.id ? (
                    <input
                      type="text"
                      name={key}
                      value={item[key]||''}
                    // value={key}
                      onChange={(e) => handleAccesseoriesChange(e, item.id)}
                      style={editableRowStyle}
                    />
                  ) : (
                    item[key]
                  )}
                </td>
              ))}
              <td style={Td}>
                {editAccesseoriesId === item.id ? (
                  <div>
                    <button onClick={() => handleAccesseoriesSave(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleAccesseoriesEdit(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                    </button>
                  </div>
                )}
              </td>
              <td style={Td}>
                {editAccesseoriesId === item.id ? (
                  <div>
                    <button onClick={handleAccesseoriesCancel} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleAccesseoriesDelete(item.id)} className='w-7'> 
                        <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                        </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          { inputAccesseoriesShow ?(
          <tr>
            <td style={Td}></td>
            {Object.keys(newAccesseoriesRow).map((key) => (
            <td key={key} style={Td}>
                <input
                    key={key}
                    type="text"
                    name={key}
                    value={newAccesseoriesRow[key]}
                    onChange={handleAccesseoriesChange}
                    placeholder={key.replace(/_/g, ' ')}
                />
            </td>
            ))}
        </tr>
        ):''}
        </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                                    <div className='flex justify-center mt-3 mb-3' >
                                        {/* <button type="button" onClick={handleAddAccesseoriesRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button> */}
                                    </div>
                            </div>
                            {/* camera */}
                            <div className='h-[400px]' style={{ width: '100%', overflow: 'auto' , display: visibleTable === 'カメラ' ? 'block' : 'none' }} >
                            {data.cameras && data.cameras.length > 0 ? (
                                <table id="camera" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th></th>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>発送日</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>型番</th>
                                            <th style={Th}>買取額</th>
                                            <th style={Th}>ランク</th>
                                            <th style={Th}>査定日</th>
                                            {(cameraVendors && cameraVendors.length !== 0) && cameraVendors.map((vendor, index) => (
                                                <th key={index} style={Th}>{vendor.vendor_name}</th>
                                            ))}
                                            <th style={Th}>{editCameraId === null ? '編集' : 'セーブ'}</th>
                                            <th style={Th}>{editCameraId === null ? '削除' : 'キャンセル'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
          {(cameraVendors && cameraVendors.length !== 0) && cameraData.map((item, index) => (
            <tr key={item.id} style={editCameraId === item.id ? editableRowStyle : {}}>
               <td><input type='checkbox' value={item.id} onChange={handleCheckboxChange} className='w-5 mr-3'/></td>
              <td style={Td}>{index + 1}</td>
              {Object.keys(newCameraRow).map((key) => (
                <td key={key} style={Td}>
                  {editCameraId === item.id ? (
                    <input
                      type="text"
                      name={key}
                      value={item[key]||''}
                    // value={key}
                      onChange={(e) => handleCameraChange(e, item.id)}
                      style={editableRowStyle}
                    />
                  ) : (
                    item[key]
                  )}
                </td>
              ))}
              <td style={Td}>
                {editCameraId === item.id ? (
                  <div>
                    <button onClick={() => handleCameraSave(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleCameraEdit(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                    </button>
                  </div>
                )}
              </td>
              <td style={Td}>
                {editCameraId === item.id ? (
                  <div>
                    <button onClick={handleCameraCancel} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleCameraDelete(item.id)} className='w-7'> 
                        <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                        </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          { inputCameraShow ?(
          <tr>
            <td style={Td}></td>
            {Object.keys(newCameraRow).map((key) => (
            <td key={key} style={Td}>
                <input
                    key={key}
                    type="text"
                    name={key}
                    value={newCameraRow[key]}
                    onChange={handleCameraChange}
                    placeholder={key.replace(/_/g, ' ')}
                />
            </td>
            ))}
        </tr>
        ):''}
        </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                                    <div className='flex justify-center mt-3 mb-3' >
                                        {/* <button type="button" onClick={handleAddCameraRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button> */}
                                    </div>
                            </div>
                            {/* Antiques */}
                            <div className='h-[400px]' style={{ width: '100%', overflow: 'auto' , display: visibleTable === '骨董品' ? 'block' : 'none' }}>
                            {data.antiques && data.antiques.length > 0 ? (
                                <table id="antique" style={Table}>
                                    <thead className='h-11 sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th></th>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>配送先</th>
                                            <th style={Th}>発送日2</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>備考</th>
                                            <th style={Th}>査定日</th>
                                            {(antiqueVendors && antiqueVendors.length !== 0) && antiqueVendors.map((vendor, index) => (
                                                <th key={index} style={Th}>{vendor.vendor_name}</th>
                                            ))}
                                            <th style={Th}>{editAntiqueId === null ? '編集' : 'セーブ'}</th>
                                            <th style={Th}>{editAntiqueId === null ? '削除' : 'キャンセル'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
          {(antiqueVendors && antiqueVendors.length !== 0) && antiqueData.map((item, index) => (
            <tr key={item.id} style={editAntiqueId === item.id ? editableRowStyle : {}}>
              <td><input type='checkbox' value={item.id} onChange={handleCheckboxChange} className='w-5 mr-3'/></td>
              <td style={Td}>{index + 1}</td>
              {Object.keys(newAntiqueRow).map((key) => (
                <td key={key} style={Td}>
                  {editAntiqueId === item.id ? (
                    <input
                      type="text"
                      name={key}
                      value={item[key]||''}
                    // value={key}
                      onChange={(e) => handleAntiqueChange(e, item.id)}
                      style={editableRowStyle}
                    />
                  ) : (
                    item[key]
                  )}
                </td>
              ))}
              <td style={Td}>
                {editAntiqueId === item.id ? (
                  <div>
                    <button onClick={() => handleAntiqueSave(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleAntiqueEdit(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                    </button>
                  </div>
                )}
              </td>
              <td style={Td}>
                {editAntiqueId === item.id ? (
                  <div>
                    <button onClick={handleAntiqueCancel} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleAntiqueDelete(item.id)} className='w-7'> 
                        <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                        </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          { inputAntiqueShow ?(
          <tr>
            <td style={Td}></td>
            {Object.keys(newAntiqueRow).map((key) => (
            <td key={key} style={Td}>
                <input
                    key={key}
                    type="text"
                    name={key}
                    value={newAntiqueRow[key]}
                    onChange={handleAntiqueChange}
                    placeholder={key.replace(/_/g, ' ')}
                />
            </td>
            ))}
        </tr>
        ):''}
        </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                                    <div className='flex justify-center mt-3 mb-3' >
                                        {/* <button type="button" onClick={handleAddAntiqueRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button> */}
                                    </div>
                            </div>
                            {/* western liquor */}
                            <div className='h-[400px]' style={{ width: '100%', overflow: 'auto' , display: visibleTable === '洋酒' ? 'block' : 'none' }}>
                            {data.westernLiquors && data.westernLiquors.length > 0 ? (
                                <table id="westernliquor" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th></th>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>配送先</th>
                                            <th style={Th}>発送日2</th>
                                            <th style={Th}>わかば番号</th>
                                            <th style={Th}>種類</th>
                                            <th style={Th}>銘柄</th>
                                            <th style={Th}>数量</th>
                                            <th style={Th}>容量</th>
                                            <th style={Th}>度数</th>
                                            <th style={Th}>査定日</th>
                                            {(westernLiquorLiquorVendors && westernLiquorLiquorVendors.length !== 0) && westernLiquorLiquorVendors.map((vendor, index) => (
                                                <th key={index} style={Th}>{vendor.vendor_name}</th>
                                            ))}
                                            <th style={Th}>{editWesternliquorId === null ? '編集' : 'セーブ'}</th>
                                            <th style={Th}>{editWesternliquorId === null ? '削除' : 'キャンセル'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
          {(westernLiquorLiquorVendors && westernLiquorLiquorVendors.length !== 0) && westernliquorData.map((item, index) => (
            <tr key={item.id} style={editWesternliquorId === item.id ? editableRowStyle : {}}>
              <td><input type='checkbox' value={item.id} onChange={handleCheckboxChange} className='w-5 mr-3'/></td>
              <td style={Td}>{index + 1}</td>
              {Object.keys(newWesternliquorRow).map((key) => (
                <td key={key} style={Td}>
                  {editWesternliquorId === item.id ? (
                    <input
                      type="text"
                      name={key}
                      value={item[key]||''}
                    // value={key}
                      onChange={(e) => handleWesternliquorChange(e, item.id)}
                      style={editableRowStyle}
                    />
                  ) : (
                    item[key]
                  )}
                </td>
              ))}
              <td style={Td}>
                {editWesternliquorId === item.id ? (
                  <div>
                    <button onClick={() => handleWesternliquorSave(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleWesternliquorEdit(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                    </button>
                  </div>
                )}
              </td>
              <td style={Td}>
                {editWesternliquorId === item.id ? (
                  <div>
                    <button onClick={handleWesternliquorCancel} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleWesternliquorDelete(item.id)} className='w-7'> 
                        <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                        </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          { inputWesternliquorShow ?(
          <tr>
            <td style={Td}></td>
            {Object.keys(newWesternliquorRow).map((key) => (
            <td key={key} style={Td}>
                <input
                    key={key}
                    type="text"
                    name={key}
                    value={newWesternliquorRow[key]}
                    onChange={handleWesternliquorChange}
                    placeholder={key.replace(/_/g, ' ')}
                />
            </td>
            ))}
        </tr>
        ):''}
        </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                                      <div className='flex justify-center mt-3 mb-3' >
                                        {/* <button type="button" onClick={handleAddWesternliquorRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button> */}
                                    </div>
                            </div>
                            {/* musical instrument */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === '楽器' ? 'block' : 'none' }} >
                            {data.musicalInstruments && data.musicalInstruments.length > 0 ? (
                                <table id="musicalinstrument" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th></th>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>発送日</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>備考</th>
                                            <th style={Th}>査定日</th>
                                            {(musicalInstrumentVendors && musicalInstrumentVendors.length !== 0) && musicalInstrumentVendors.map((vendor, index) => (
                                                <th key={index} style={Th}>{vendor.vendor_name}</th>
                                            ))}
                                            <th style={Th}>{editMusicalinstrumentId === null ? '編集' : 'セーブ'}</th>
                                            <th style={Th}>{editMusicalinstrumentId === null ? '削除' : 'キャンセル'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
          {(musicalInstrumentVendors && musicalInstrumentVendors.length !== 0) && musicalinstrumentData.map((item, index) => (
            <tr key={item.id} style={editMusicalinstrumentId === item.id ? editableRowStyle : {}}>
              <td><input type='checkbox' value={item.id} onChange={handleCheckboxChange} className='w-5 mr-3'/></td>
              <td style={Td}>{index + 1}</td>
              {Object.keys(newMusicalinstrumentRow).map((key) => (
                <td key={key} style={Td}>
                  {editMusicalinstrumentId === item.id ? (
                    <input
                      type="text"
                      name={key}
                      value={item[key]||''}
                    // value={key}
                      onChange={(e) => handleMusicalinstrumentChange(e, item.id)}
                      style={editableRowStyle}
                    />
                  ) : (
                    item[key]
                  )}
                </td>
              ))}
              <td style={Td}>
                {editMusicalinstrumentId === item.id ? (
                  <div>
                    <button onClick={() => handleMusicalinstrumentSave(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleMusicalinstrumentEdit(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                    </button>
                  </div>
                )}
              </td>
              <td style={Td}>
                {editMusicalinstrumentId === item.id ? (
                  <div>
                    <button onClick={handleMusicalinstrumentCancel} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleMusicalinstrumentDelete(item.id)} className='w-7'> 
                        <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                        </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          { inputMusicalinstrumentShow ?(
          <tr>
            <td style={Td}></td>
            {Object.keys(newMusicalinstrumentRow).map((key) => (
            <td key={key} style={Td}>
                <input
                    key={key}
                    type="text"
                    name={key}
                    value={newMusicalinstrumentRow[key]}
                    onChange={handleMusicalinstrumentChange}
                    placeholder={key.replace(/_/g, ' ')}
                />
            </td>
            ))}
        </tr>
        ):''}
        </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                                      <div className='flex justify-center mt-3 mb-3' >
                                        {/* <button type="button" onClick={handleAddMusicalinstrumentRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button> */}
                                    </div>
                            </div>
                            {/* kimono */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === '着物' ? 'block' : 'none' }} >
                            {data.kimonos && data.kimonos.length > 0 ? (
                                <table id="kimono" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th></th>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>発送日</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>備考</th>
                                            <th style={Th}>査定日</th>
                                            {(kimonoVendors && kimonoVendors.length !== 0) && kimonoVendors.map((vendor, index) => (
                                                <th key={index} style={Th}>{vendor.vendor_name}</th>
                                            ))}
                                            <th style={Th}>{editKimonoId === null ? '編集' : 'セーブ'}</th>
                                            <th style={Th}>{editKimonoId === null ? '削除' : 'キャンセル'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
          {(kimonoVendors && kimonoVendors.length !== 0) && kimonoData.map((item, index) => (
            <tr key={item.id} style={editKimonoId === item.id ? editableRowStyle : {}}>
              <td><input type='checkbox' value={item.id} onChange={handleCheckboxChange} className='w-5 mr-3'/></td>
              <td style={Td}>{index + 1}</td>
              {Object.keys(newKimonoRow).map((key) => (
                <td key={key} style={Td}>
                  {editKimonoId === item.id ? (
                    <input
                      type="text"
                      name={key}
                      value={item[key]||''}
                    // value={key}
                      onChange={(e) => handleKimonoChange(e, item.id)}
                      style={editableRowStyle}
                    />
                  ) : (
                    item[key]
                  )}
                </td>
              ))}
              <td style={Td}>
                {editKimonoId === item.id ? (
                  <div>
                    <button onClick={() => handleKimonoSave(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleKimonoEdit(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                    </button>
                  </div>
                )}
              </td>
              <td style={Td}>
                {editKimonoId === item.id ? (
                  <div>
                    <button onClick={handleKimonoCancel} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleKimonoDelete(item.id)} className='w-7'> 
                        <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                        </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          { inputKimonoShow ?(
          <tr>
            <td style={Td}></td>
            {Object.keys(newKimonoRow).map((key) => (
            <td key={key} style={Td}>
                <input
                    key={key}
                    type="text"
                    name={key}
                    value={newKimonoRow[key]}
                    onChange={handleKimonoChange}
                    placeholder={key.replace(/_/g, ' ')}
                />
            </td>
            ))}
        </tr>
        ):''}
        </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                                    <div className='flex justify-center mt-3 mb-3' >
                                        {/* <button type="button" onClick={handleAddKimonoRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button> */}
                                    </div>
                            </div>
                            {/* smartphone and tablet */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === 'スマホタブレット' ? 'block' : 'none' }} >
                            {data.smartPhoneAndTablets && data.smartPhoneAndTablets.length > 0 ? (
                                <table id="smartphoneandtablet" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th></th>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>発送日</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>備考</th>
                                            <th style={Th}>査定日</th>
                                            {(smartphoneVendors && smartphoneVendors.length !== 0) && smartphoneVendors.map((vendor, index) => (
                                                <th key={index} style={Th}>{vendor.vendor_name}</th>
                                            ))}
                                            <th style={Th}>{editSmartphoneandtabletId === null ? '編集' : 'セーブ'}</th>
                                            <th style={Th}>{editSmartphoneandtabletId === null ? '削除' : 'キャンセル'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
          {(smartphoneVendors && smartphoneVendors.length !== 0) && smartphoneandtabletData.map((item, index) => (
            <tr key={item.id} style={editSmartphoneandtabletId === item.id ? editableRowStyle : {}}>
              <td><input type='checkbox' value={item.id} onChange={handleCheckboxChange} className='w-5 mr-3'/></td>
              <td style={Td}>{index + 1}</td>
              {Object.keys(newSmartphoneandtabletRow).map((key) => (
                <td key={key} style={Td}>
                  {editSmartphoneandtabletId === item.id ? (
                    <input
                      type="text"
                      name={key}
                      value={item[key]||''}
                    // value={key}
                      onChange={(e) => handleSmartphoneandtabletChange(e, item.id)}
                      style={editableRowStyle}
                    />
                  ) : (
                    item[key]
                  )}
                </td>
              ))}
              <td style={Td}>
                {editSmartphoneandtabletId === item.id ? (
                  <div>
                    <button onClick={() => handleSmartphoneandtabletSave(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleSmartphoneandtabletEdit(item.id)} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                    </button>
                  </div>
                )}
              </td>
              <td style={Td}>
                {editSmartphoneandtabletId === item.id ? (
                  <div>
                    <button onClick={handleSmartphoneandtabletCancel} className='w-7'>
                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button onClick={() => handleSmartphoneandtabletDelete(item.id)} className='w-7'> 
                        <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                        </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          { inputSmartphoneandtabletShow ?(
          <tr>
            <td style={Td}></td>
            {Object.keys(newSmartphoneandtabletRow).map((key) => (
            <td key={key} style={Td}>
                <input
                    key={key}
                    type="text"
                    name={key}
                    value={newSmartphoneandtabletRow[key]}
                    onChange={handleSmartphoneandtabletChange}
                    placeholder={key.replace(/_/g, ' ')}
                />
            </td>
            ))}
        </tr>
        ):''}
        </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                                      <div className='flex justify-center mt-3 mb-3' >
                                        {/* <button type="button" onClick={handleAddSmartphoneandtabletRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button> */}
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ContractorAssementSheet;