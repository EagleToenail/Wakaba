import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
// import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import LabelComponent from '../../Components/Common/LabelComponent';
import axios from 'axios';
import leftArrow from '../../Assets/img/right-arrow.png';
import rightArrow from '../../Assets/img/left-arrow.png';


const ContractorAssementSheet = () => {
    // const title = 'タイトルタイトル';

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

    //   const [isOpen, setIsOpen] = useState(false);
    const [isshow, setIsShow] = useState(true);

    const openSubtable = () => {
        // setIsOpen(true);
        setIsShow(false);
    };

    const closeSubtable = () => {
        // setIsOpen(false);
        setIsShow(true);
    };

    const [visibleTable, setVisibleTable] = useState('貴金属');

        // State to track the value of the active button
        const [activeValue, setActiveValue] = useState('貴金属');
        const buttonValues = ['貴金属', '古銭等', 'バッグ', '時計',
            '財布', 'アクセサリ', '骨董品', '洋酒', 'カメラ','楽器','着物','スマホ/夕ブレット'];

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

        console.log(`${wakabaBaseUrl}/sales/filter`);
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
        //   console.log('preciousMetal',response.data.payload.preciousMetals);
      };
      fetchData();
    }, []);

    const editableRowStyle = { backgroundColor: '#e7e9f1' };
 //------------------------------precious metal--------------------------------------
    const [preciousMetalData, setPreciousMetalData] = useState();

    const [editPreciousMetalId, setEditPreciousMetalId] = useState(null);
    const [newPreciousMetalRow, setNewPreciousMetalRow] = useState({
        shipping_address: '',
        wholesale_date: '',
        number: '',
        product: '',
        quantity: '',
        gold_type: '',
        gross_weight: '',
        purchase_price: '',
        bullion_weight: '',
        book_assessment_net_japan: '',
        line_color_stone_bank: '',
        real_assessment_color_stone_bank: '',
        line_four_nine: '',
        book_assessment_four_nine: '',
        kaimana_assessment_date: '',
        line_kaimana: '',
        original_assessment_kaimana: '',
        online_ssessment_date_quote: ''
    });

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

    const handlePreciousMetalAdd = () => {
        setPreciousMetalData((prevData) => [
        ...prevData,
        { id: Date.now(), ...newPreciousMetalRow }
        ]);
        setNewPreciousMetalRow({
        shipping_address: '',
        wholesale_date: '',
        number: '',
        product: '',
        quantity: '',
        gold_type: '',
        gross_weight: '',
        purchase_price: '',
        bullion_weight: '',
        book_assessment_net_japan: '',
        line_color_stone_bank: '',
        real_assessment_color_stone_bank: '',
        line_four_nine: '',
        book_assessment_four_nine: '',
        kaimana_assessment_date: '',
        line_kaimana: '',
        original_assessment_kaimana: '',
        online_ssessment_date_quote: ''
        });
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
                setNewPreciousMetalRow({
                    shipping_address: '',
                    wholesale_date: '',
                    number: '',
                    product: '',
                    quantity: '',
                    gold_type: '',
                    gross_weight: '',
                    purchase_price: '',
                    bullion_weight: '',
                    book_assessment_net_japan: '',
                    line_color_stone_bank: '',
                    real_assessment_color_stone_bank: '',
                    line_four_nine: '',
                    book_assessment_four_nine: '',
                    kaimana_assessment_date: '',
                    line_kaimana: '',
                    original_assessment_kaimana: '',
                    online_ssessment_date_quote: ''
                });
              } catch (error) {
                console.error('Error adding row:', error);
              }
        }
        setInputPreciousMetalShow(!inputPreciousMetalShow);
    };
 //----------------------------- old Coin--------------------------------------------------------
    const [oldCoinData, setOldCoinData] = useState('');

    const [editOldCoinId, setEditOldCoinId] = useState(null);
    const [newOldCoinRow, setNewOldCoinRow] = useState({
        shipping_date: '',
        number: '',
        product_name: '',
        remarks: '',
        assessment_date: '',
        wataru_shoji: '',
        omiya: '',
        yahoo_auctions: ''
    });

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

    // const handleOldCoinAdd = () => {
    //     setData((prevData) => [
    //     ...prevData,
    //     { id: Date.now(), ...newOldCoinRow }
    //     ]);
    //     setNewOldCoinRow({
    //         shipping_date: '',
    //         number: '',
    //         product_name: '',
    //         remarks: '',
    //         assessment_date: '',
    //         wataru_shoji: '',
    //         omiya: '',
    //         yahoo_auctions: ''
    //     });
    // };

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
                setNewOldCoinRow({
                  shipping_date: '',
                  number: '',
                  product_name: '',
                  remarks: '',
                  assessment_date: '',
                  wataru_shoji: '',
                  omiya: '',
                  yahoo_auctions: ''
                });
              } catch (error) {
                console.error('Error adding row:', error);
              }
        }
        setInputOldCoinShow(!inputOldCoinShow);
    };
 //----------------------------- bags---------------------------------
 const [bagData, setBagData] = useState('');

 const [editBagId, setEditBagId] = useState(null);
 const [newBagRow, setNewBagRow] = useState({
    shipping_address: '',
    shipping_date: '',
    number: '',
    manufacturer: '',
    product_name: '',
    model_number: '',
    rank: '',
    purchase_price: '',
    bb_skype_date: '',
    bb: '',
    ga: '',
    home_com: '',
    kaimana: '',
    four_nine: ''
 });

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
         await axios.post(`${wakabaBaseUrl}/contractorassessments/bagupdate`, bagData.find((row) => row.id === id)); // Update row on the server
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
        await axios.get(`${wakabaBaseUrl}/contractorassessments/bagdelete/${id}`); // Delete row from the server
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
             const response = await axios.post(`${wakabaBaseUrl}/contractorassessments/bagadd`, newBagRow); // Send newRow data to the server
             setBagData((prevData) => [
               ...prevData,
               { id: response.data.id, ...newBagRow } // Assuming server returns the new row with an id
             ]);
             setNewBagRow({
                shipping_address: '',
                shipping_date: '',
                number: '',
                manufacturer: '',
                product_name: '',
                model_number: '',
                rank: '',
                purchase_price: '',
                bb_skype_date: '',
                bb: '',
                ga: '',
                home_com: '',
                kaimana: '',
                four_nine: ''
             });
           } catch (error) {
             console.error('Error adding row:', error);
           }
     }
     setInputBagShow(!inputBagShow);
 };
 //-----------------------------clock---------------------------------
 const [clockData, setClockData] = useState('');

 const [editClockId, setEditClockId] = useState(null);
 const [newClockRow, setNewClockRow] = useState({
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
    bb: '',
    ga: '',
    belmond: '',
    homecom: '',
    kaimana: '',
    four_nine: '',
    yahoo_auction: ''
 });

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
         await axios.post(`${wakabaBaseUrl}/contractorassessments/clockupdate`, clockData.find((row) => row.id === id)); // Update row on the server
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
        await axios.get(`${wakabaBaseUrl}/contractorassessments/clockdelete/${id}`); // Delete row from the server
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
             const response = await axios.post(`${wakabaBaseUrl}/contractorassessments/clockadd`, newClockRow); // Send newRow data to the server
             setClockData((prevData) => [
               ...prevData,
               { id: response.data.id, ...newBagRow } // Assuming server returns the new row with an id
             ]);
             setNewClockRow({
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
                bb: '',
                ga: '',
                belmond: '',
                homecom: '',
                kaimana: '',
                four_nine: '',
                yahoo_auction: ''
             });
           } catch (error) {
             console.error('Error adding row:', error);
           }
     }
     setInputClockShow(!inputClockShow);
 };
//  -----------------------------wallet---------------------------------
const [walletData, setWalletData] = useState('');

const [editWalletId, setEditWalletId] = useState(null);
const [newWalletRow, setNewWalletRow] = useState({
    shipping_address: '',
    shipping_date: '',
    number: '',
    manufacturer: '',
    product_name: '',
    model_number: '',
    rank: '',
    bb_skype_day: '',
    bb: '',
    ga: '',
    girasol: '',
    home_com: '',
    kaimana: '',
    four_nine: ''
});

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
        await axios.post(`${wakabaBaseUrl}/contractorassessments/walletupdate`, walletData.find((row) => row.id === id)); // Update row on the server
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
       await axios.get(`${wakabaBaseUrl}/contractorassessments/walletdelete/${id}`); // Delete row from the server
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
            const response = await axios.post(`${wakabaBaseUrl}/contractorassessments/walletadd`, newWalletRow); // Send newRow data to the server
            setWalletData((prevData) => [
              ...prevData,
              { id: response.data.id, ...newBagRow } // Assuming server returns the new row with an id
            ]);
            setNewWalletRow({
                shipping_address: '',
                shipping_date: '',
                number: '',
                manufacturer: '',
                product_name: '',
                model_number: '',
                rank: '',
                bb_skype_day: '',
                bb: '',
                ga: '',
                girasol: '',
                home_com: '',
                kaimana: '',
                four_nine: ''
            });
          } catch (error) {
            console.error('Error adding row:', error);
          }
    }
    setInputWalletShow(!inputWalletShow);
};
//  ----------------------------- accesseories---------------------------------
const [accesseoriesData, setAccesseoriesData] = useState('');

const [editAccesseoriesId, setEditAccesseoriesId] = useState(null);
const [newAccesseoriesRow, setNewAccesseoriesRow] = useState({
    shipping_address: '',
    shipping_date: '',
    wakaba_number: '',
    manufacturer: '',
    product_details: '',
    model_number: '',
    rank: '',
    bb_skype_day: '',
    bb: '',
    ga: '',
    home_com: '',
    kaimana: '',
    four_nine: ''
});

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
        await axios.post(`${wakabaBaseUrl}/contractorassessments/accesseoriesupdate`, accesseoriesData.find((row) => row.id === id)); // Update row on the server
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
       await axios.get(`${wakabaBaseUrl}/contractorassessments/accesseoriesdelete/${id}`); // Delete row from the server
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
            const response = await axios.post(`${wakabaBaseUrl}/contractorassessments/accesseoriesadd`, newAccesseoriesRow); // Send newRow data to the server
            setAccesseoriesData((prevData) => [
              ...prevData,
              { id: response.data.id, ...newBagRow } // Assuming server returns the new row with an id
            ]);
            setNewAccesseoriesRow({
                shipping_address: '',
                shipping_date: '',
                wakaba_number: '',
                manufacturer: '',
                product_details: '',
                model_number: '',
                rank: '',
                bb_skype_day: '',
                bb: '',
                ga: '',
                home_com: '',
                kaimana: '',
                four_nine: ''
            });
          } catch (error) {
            console.error('Error adding row:', error);
          }
    }
    setInputAccesseoriesShow(!inputAccesseoriesShow);
};
//  ----------------------------- ---------------------------------

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
                                    <ButtonComponent className='!w-[200px] h-11 !bg-[transparent] border border-[#424242] !text-[#424242] !text-2xl !px-0' style={{ marginLeft: '30px' }} >
                                        <Link to="/yahooauction">ヤフオク</Link>
                                    </ButtonComponent>
                                </div>
                                <div className='flex justify-center mt-10 w-full' >
                                    <div>
                                        <ButtonComponent children={'業者への買取依書へ'} className='h-11 !bg-[#9bd195] !text-2xl text-[white] !px-10' />
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
                                    <ButtonComponent children={'スマホ/夕ブレット'} onClick={() => handleButtonClick('スマホ/夕ブレット')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[11] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[11] ? '#424242' : 'transparent'}}/>
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
                                            <th style={Th}>本査定ネットジャパン</th>
                                            <th style={Th}>LINE色石バンク</th>
                                            <th style={Th}>本査定色石バンク</th>
                                            <th style={Th}>LINEフォーナイン</th>
                                            <th style={Th}>本査定フォーナイン</th>
                                            <th style={Th}>カイマナ査定日</th>
                                            <th style={Th}>LINEカイマナ</th>
                                            <th style={Th}>本査定カイマナ</th>
                                            <th style={Th}>LINE査定日相場</th>
                                            <th style={Th}>{editPreciousMetalId === null ? '編集する' : 'セーブ'}</th>
                                            <th style={Th}>{editPreciousMetalId === null ? '削除' : 'キャンセル'}</th>
                                        </tr>
                                    </thead>
        <tbody>
          {preciousMetalData.map((item, index) => (
            <tr key={item.id} style={editPreciousMetalId === item.id ? editableRowStyle : {}}>
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
                                                                
                                <div className='flex justify-center mt-3 mb-3' >
                                        <button type="button" onClick={handleAddPreciousMetalRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button>
                                    </div>
                            </div>
                            {/* Old coin */}
                            <div className='h-[400px]' style={{ width: '100%', overflow: 'auto' , display: visibleTable === '古銭等' ? 'block' : 'none' }} >
                            {data.oldCoins && data.oldCoins.length > 0 ? (
                                <table id="oldcoin" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10 border border-[#524c3b] h-11'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>発送日</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>備考</th>
                                            <th style={Th}>査定日</th>
                                            <th style={Th}>ワタル商事</th>
                                            <th style={Th}>近江屋</th>
                                            <th style={Th}>ヤフオク</th>
                                            <th style={Th}>{editOldCoinId === null ? '編集' : 'セーブ'}</th>
                                            <th style={Th}>{editOldCoinId === null ? '削除' : 'キャンセル'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
          {oldCoinData.map((item, index) => (
            <tr key={item.id} style={editOldCoinId === item.id ? editableRowStyle : {}}>
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
                                <div className='flex justify-center mt-3 mb-3' >
                                        <button type="button" onClick={handleAddOldCoinRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button>
                                    </div>
                            </div>
                            {/* bag */}
                            <div className='h-[400px]' style={{ width: '100%', overflow: 'auto' , display: visibleTable === 'バッグ' ? 'block' : 'none' }} >
                            {data.bags && data.bags.length > 0 ? (
                                <table id="bag" style={Table}>
                                <thead className='h-11 sticky top-0 bg-white z-10'>
                                    <tr>
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
                                        <th style={Th}>BB</th>
                                        <th style={Th}>GA</th>
                                        <th style={Th}>ホームコム</th>
                                        <th style={Th}>カイマナ</th>
                                        <th style={Th}>フォーナイン</th>
                                        <th style={Th}>{editBagId === null ? '編集' : 'セーブ'}</th>
                                        <th style={Th}>{editBagId === null ? '削除' : 'キャンセル'}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
          {bagData.map((item, index) => (
            <tr key={item.id} style={editBagId === item.id ? editableRowStyle : {}}>
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
                                        <button type="button" onClick={handleAddBagRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button>
                                    </div>
                            </div>
                            {/* clock */}
                            <div className='h-[400px]' style={{ width: '100%', overflow: 'auto' , display: visibleTable === '時計' ? 'block' : 'none' }}>
                            {data.clocks && data.clocks.length > 0 ? (
                                <table id="clock" style={Table}>
                                    <thead className='h-11 sticky top-0 bg-white z-10'>
                                        <tr>
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
                                            <th style={Th}>BB</th>
                                            <th style={Th}>GA</th>
                                            <th style={Th}>ベルモンド</th>
                                            <th style={Th}>ホームコム</th>
                                            <th style={Th}>カイマナ</th>
                                            <th style={Th}>フォーナイン</th>
                                            <th style={Th}>ヤフオク</th>
                                            <th style={Th}>{editClockId === null ? '編集' : 'セーブ'}</th>
                                            <th style={Th}>{editClockId === null ? '削除' : 'キャンセル'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
          {clockData.map((item, index) => (
            <tr key={item.id} style={editClockId === item.id ? editableRowStyle : {}}>
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
                                        <button type="button" onClick={handleAddClockRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button>
                                    </div>
                            </div>
                            {/* wallet */}
                            <div className='h-[400px]' style={{ width: '100%', overflow: 'auto' , display: visibleTable === '財布' ? 'block' : 'none' }} >
                            {data.wallets && data.wallets.length > 0 ? (
                                <table id="wallet" style={Table}>
                                    <thead className='h-11 sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>配送先</th>
                                            <th style={Th}>発送日2</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>メーカー</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>型番</th>
                                            <th style={Th}>ランク</th>
                                            <th style={Th}>ＢＢスカイプ日</th>
                                            <th style={Th}>BB</th>
                                            <th style={Th}>GA</th>
                                            <th style={Th}>ベルモンド</th>
                                            <th style={Th}>ホームコム</th>
                                            <th style={Th}>カイマナ</th>
                                            <th style={Th}>フォーナイン</th>
                                            <th style={Th}>{editWalletId === null ? '編集' : 'セーブ'}</th>
                                            <th style={Th}>{editWalletId === null ? '削除' : 'キャンセル'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
          {walletData.map((item, index) => (
            <tr key={item.id} style={editWalletId === item.id ? editableRowStyle : {}}>
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
                                        <button type="button" onClick={handleAddWalletRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button>
                                    </div>
                            </div>
                            {/* accessories */} 
                            <div className='h-[400px]' style={{ width: '100%', overflow: 'auto' , display: visibleTable === 'アクセサリ' ? 'block' : 'none' }} >
                            {data.accessories && data.accessories.length > 0 ? (
                                <table id="accessories" style={Table}>
                                    <thead className='h-11 sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>配送先</th>
                                            <th style={Th}>発送日2</th>
                                            <th style={Th}>わかば番号</th>
                                            <th style={Th}>メーカー</th>
                                            <th style={Th}>商品内容</th>
                                            <th style={Th}>型番</th>
                                            <th style={Th}>ランク</th>
                                            <th style={Th}>BBスカイプ日</th>
                                            <th style={Th}>BB</th>
                                            <th style={Th}>GA</th>
                                            <th style={Th}>ホームコム</th>
                                            <th style={Th}>カイマナ</th>
                                            <th style={Th}>フォーナイン</th>
                                            <th style={Th}>{editAccesseoriesId === null ? '編集' : 'セーブ'}</th>
                                            <th style={Th}>{editAccesseoriesId === null ? '削除' : 'キャンセル'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
          {accesseoriesData.map((item, index) => (
            <tr key={item.id} style={editAccesseoriesId === item.id ? editableRowStyle : {}}>
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
                                        <button type="button" onClick={handleAddAccesseoriesRow}
                                            className="w-7 h-7 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                                <path
                                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                    data-original="#000000" />
                                            </svg>
                                        </button>
                                    </div>
                            </div>
                            {/* camera */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === 'カメラ' ? 'block' : 'none' }} >
                            {data.cameras && data.cameras.length > 0 ? (
                                <table id="camera" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>発送日</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>型番</th>
                                            <th style={Th}>買取額</th>
                                            <th style={Th}>ランク</th>
                                            <th style={Th}>査定日</th>
                                            <th style={Th}>管弦屋</th>
                                            <th style={Th}>ヤフオク卸</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.cameras.map((camera,Index) => (
                                            <tr key={camera.id}>
                                            <td style={Td}>{Index+1}</td>
                                            <td style={Td}>{camera.shipping_date}</td>
                                            <td style={Td}>{camera.number}</td>
                                            <td style={Td}>{camera.product_name}</td>
                                            <td style={Td}>{camera.model_number}</td>
                                            <td style={Td}>{camera.purchase_price}</td>
                                            <td style={Td}>{camera.rank}</td>
                                            <td style={Td}>{camera.assessment_date}</td>
                                            <td style={Td}>{camera.orchestra}</td>
                                            <td style={Td}>{camera.yahoo_auctions_wholesale}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                            {/* Antiques */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === '骨董品' ? 'block' : 'none' }} >
                            {data.antiques && data.antiques.length > 0 ? (
                                <table id="antique" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>配送先</th>
                                            <th style={Th}>発送日2</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>備考</th>
                                            <th style={Th}>査定日</th>
                                            <th style={Th}>ひるねこ</th>
                                            <th style={Th}>アート</th>
                                            <th style={Th}>吉岡美術</th>
                                            <th style={Th}>刀剣佐藤</th>
                                            <th style={Th}>ヤフオク</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.antiques.map((antique,Index) => (
                                            <tr key={antique.id}>
                                            <td style={Td}>{Index+1}</td>
                                            <td style={Td}>{antique.shipping_address}</td>
                                            <td style={Td}>{antique.shipping_date}</td>
                                            <td style={Td}>{antique.number}</td>
                                            <td style={Td}>{antique.product_name}</td>
                                            <td style={Td}>{antique.remarks}</td>
                                            <td style={Td}>{antique.assessment_date}</td>
                                            <td style={Td}>{antique.nap_cat}</td>
                                            <td style={Td}>{antique.art}</td>
                                            <td style={Td}>{antique.yoshioka_art}</td>
                                            <td style={Td}>{antique.sword_sato}</td>
                                            <td style={Td}>{antique.yahoo_auctions}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                            {/* western liquor */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === '洋酒' ? 'block' : 'none' }} >
                            {data.westernLiquors && data.westernLiquors.length > 0 ? (
                                <table id="westernliquor" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
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
                                            <th style={Th}>ヤフオク最高値</th>
                                            <th style={Th}>オークションID</th>
                                            <th style={Th}>ゴールドリカー</th>
                                            <th style={Th}>リンクサス</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data.westernLiquors.map((liquor,Index) => (
                                        <tr key={liquor.id}>
                                        <td style={Td}>{Index+1}</td>
                                        <td style={Td}>{liquor.shipping_address}</td>
                                        <td style={Td}>{liquor.shipping_date}</td>
                                        <td style={Td}>{liquor.wakaba_number}</td>
                                        <td style={Td}>{liquor.kinds}</td>
                                        <td style={Td}>{liquor.brand}</td>
                                        <td style={Td}>{liquor.quantity}</td>
                                        <td style={Td}>{liquor.capacity}</td>
                                        <td style={Td}>{liquor.frequency}</td>
                                        <td style={Td}>{liquor.assessment_date}</td>
                                        <td style={Td}>{liquor.yahoo_auctions_highest_price}</td>
                                        <td style={Td}>{liquor.auction_id}</td>
                                        <td style={Td}>{liquor.gold_liquor}</td>
                                        <td style={Td}>{liquor.linksus}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                            {/* musical instrument */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === '楽器' ? 'block' : 'none' }} >
                            {data.musicalInstruments && data.musicalInstruments.length > 0 ? (
                                <table id="musicalinstrument" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>発送日</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>備考</th>
                                            <th style={Th}>査定日</th>
                                            <th style={Th}>管弦屋</th>
                                            <th style={Th}>ヤフオク卸</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.musicalInstruments.map((instrument,Index) => (
                                            <tr key={instrument.id}>
                                            <td style={Td}>{Index+1}</td>
                                            <td style={Td}>{instrument.shipping_date}</td>
                                            <td style={Td}>{instrument.number}</td>
                                            <td style={Td}>{instrument.product_name}</td>
                                            <td style={Td}>{instrument.remarks}</td>
                                            <td style={Td}>{instrument.assessment_date}</td>
                                            <td style={Td}>{instrument.orchestra}</td>
                                            <td style={Td}>{instrument.yahoo_auctions_wholesale}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                            {/* kimono */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === '着物' ? 'block' : 'none' }} >
                            {data.kimonos && data.kimonos.length > 0 ? (
                                <table id="kimono" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>発送日</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>備考</th>
                                            <th style={Th}>査定日</th>
                                            <th style={Th}>はなもり</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.kimonos.map((kimono,Index) => (
                                            <tr key={kimono.id}>
                                            <td style={Td}>{Index+1}</td>
                                            <td style={Td}>{kimono.shipping_date}</td>
                                            <td style={Td}>{kimono.number}</td>
                                            <td style={Td}>{kimono.product_name}</td>
                                            <td style={Td}>{kimono.remarks}</td>
                                            <td style={Td}>{kimono.assessment_date}</td>
                                            <td style={Td}>{kimono.hanamori}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                            {/* smartphone and tablet */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === 'スマホタブレット' ? 'block' : 'none' }} >
                            {data.smartPhoneAndTablets && data.smartPhoneAndTablets.length > 0 ? (
                                <table id="smartphoneandtablet" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>発送日</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>備考</th>
                                            <th style={Th}>査定日</th>
                                            <th style={Th}>はなもり</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.smartPhoneAndTablets.map((item,Index) => (
                                            <tr key={item.id}>
                                            <td style={Td}>{Index+1}</td>
                                            <td style={Td}>{item.shipping_date}</td>
                                            <td style={Td}>{item.number}</td>
                                            <td style={Td}>{item.product_name}</td>
                                            <td style={Td}>{item.remarks}</td>
                                            <td style={Td}>{item.yahoo_auctions_highest_price}</td>
                                            <td style={Td}>{item.assessment_date}</td>
                                            <td style={Td}>{item.pathtech}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ContractorAssementSheet;