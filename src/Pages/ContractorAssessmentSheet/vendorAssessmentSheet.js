import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { setShippingData } from '../../redux/sales/actions';

import leftArrow from '../../Assets/img/right-arrow.png';
import rightArrow from '../../Assets/img/left-arrow.png';

// import Titlebar from '../../Components/Common/Titlebar';
import InputComponent from '../../Components/Common/InputComponent';
import LabelComponent from '../../Components/Common/LabelComponent';
import ImageShowModal from '../../Components/Modal/ImageShowModal';

const VendorAssementSheet = () => {
    // const title = 'タイトルタイトル';
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;

    const Table = {
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItems: 'center',
        borderCollapse: 'collapse', // Ensures borders collapse properly
        padding: '3px'
    };

    const Th = {
        border: '1px solid #70685a',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace: 'nowrap',
    };

    const Td = {
        border: '1px solid #70685a',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace: 'nowrap',
    };

    const dispatch = useDispatch();

    const updateData = (data) => {
        dispatch(setShippingData(data));
    };

    const [sales, setSales] = useState([]);
    // Fetch sales data
    useEffect(() => {
        handleCategory('貴金属');
    }, []);

    const [users, setUsers] = useState([]);
    // Fetch user data
    useEffect(() => {
        const fetchUser = async () => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }

            await axios.get(`${wakabaBaseUrl}/user/getUserList`)
                .then(response => {
                    const data = response.data;
                    setUsers(data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }
        fetchUser();
    }, []);
    const handleCategory = async (value) => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // console.log(`${wakabaBaseUrl}/sales/filter`);
        await axios.post(`${wakabaBaseUrl}/sales/filter`, { value: value })
            .then(response => {
                const salesData = response.data;
                if (salesData?.length > 0) {
                    const updatedData111 = salesData.map((data, Index) => ({
                        ...data,
                        estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                        // comment: JSON.parse(data.comment),
                    }));
                    setSales(updatedData111);
                } else {
                    setSales([]);
                }
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
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
    //send shipping data
    const handleSendCheckedValues = () => {
        updateData(checkedValues);
        // console.log('checked values',checkedValues);
        if (checkedValues && checkedValues.length !== 0) {
            navigate('/purchaserequestformforwholesaler');
        }

    };
    //  -------------------------------select box-------------------------------
    const [product1s, setProduct1s] = useState([]);
    // const product1s = ['貴金属','古銭等','バッグ','時計','財布','アクセサリ一','骨董品','洋酒','カメラ','楽器','着物','スマホ・タブレット'];
    // Fetch product1 data
    useEffect(() => {
        const fetchCategory1 = async () => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }

            axios.get(`${wakabaBaseUrl}/ProductType1s1`)
                .then(response => {
                    setProduct1s(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }
        fetchCategory1();
    }, []);

    const [category1, setCategory1] = useState('貴金属');

    const handleCategory1Change = (e, productList) => {
        const selectedCategory = e.target.value; // Get the selected category
        const selectedResult = productList.find(product => product.category === selectedCategory);//need id
        getVendorList(selectedResult.id);
        setCategory1(selectedCategory);
        handleCategory(selectedCategory);
    };
    //-----------------------------------item detail---------------------------------------
    const [isDetailShow, setIsDetailShow] = useState(false);
    const openItemDetailShow = () => {
        setIsDetailShow(!isDetailShow)
    }
    //--------------------show  product photo---------------------
    const [showProductImage, setShowProductImage] = useState(false);
    const [itemImagePreview, setItemImagePreview] = useState(`${wakabaBaseUrl}/uploads/product/`);
    const openProductImageModal = (link) => {
        setShowProductImage(true);
        setItemImagePreview(`${wakabaBaseUrl}/uploads/product/${link}`);
    }
    const closeProductImageModal = () => {
        setShowProductImage(false);
    }
    //----------------------estimate------------------------------
    //get  vendor list form vendor table
    const [vendors, setVendors] = useState([]);
    // const [allVendors, setAllVendors] = useState([]);

    const getVendorList = async (id) => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        await axios.post(`${wakabaBaseUrl}/vendor/getVendorList`, { id: id })
            .then(response => {
                setVendors(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }
    useEffect(() => {
        getVendorList(1);
    }, []);
    // useEffect(() => {
    //     const fetchAllVendor = async () => {
    //         const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
    //         if (!wakabaBaseUrl) {
    //             throw new Error('API base URL is not defined');
    //         }
    //         await axios.get(`${wakabaBaseUrl}/vendor/getVendorListAll`)
    //             .then(response => {
    //                 setAllVendors(response.data);
    //                 // console.log('vendrListAll',response.data)
    //             })
    //             .catch(error => {
    //                 console.error("There was an error fetching the customer data!", error);
    //             });
    //     }
    //     fetchAllVendor();

    // }, [sales]);

    //--------------------------filter function----------------------------------
    const now = new Date();
    // Format the date as YYYY-MM-DD
    const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Tokyo' };
    const formattedDate = new Intl.DateTimeFormat('ja-JP', optionsDate).format(now).replace(/\//g, '-');
    // Split the formatted date to get year and month
    const [currentyear, currentmonth] = formattedDate.split('-').map(part => part.trim());

    const [isDateOpen1, setIsDateOpen1] = useState(false);
    const [isDateOpen2, setIsDateOpen2] = useState(false);
    const [isDateOpen3, setIsDateOpen3] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState('');
    const [year1, setYear1] = useState('');
    const [month1, setMonth1] = useState('');
    const [day1, setDay1] = useState('');
    const [startDate1, setStartDate1] = useState('');
    const [endDate1, setEndDate1] = useState('');

    const toggleDateDropdown1 = () => {
        if (isDateOpen1) {
            setYear1('');
            setMonth1('');
            setDay1('');
            setStartDate1('');
            setEndDate1('');
        }
        setIsDateOpen1((prev) => !prev);
    };
    const toggleDateDropdown2 = () => {
        if (isDateOpen2) {
            setYear1('');
            setMonth1('');
            setDay1('');
            setStartDate1('');
            setEndDate1('');
        }
        setIsDateOpen2((prev) => !prev);
    };
    const toggleDateDropdown3 = () => {
        if (isDateOpen3) {
            setYear1('');
            setMonth1('');
            setDay1('');
            setStartDate1('');
            setEndDate1('');
        }
        setIsDateOpen3((prev) => !prev);
    };

    const handleDateOptionChange1 = (option) => {
        setSelectedOption1(option);
        // Reset other values when a new option is selected
    };


    // filter by date
    const handleDateFilter = async (data, type) => {
        const searchdate = data;
        // console.log(type,date)
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        await axios.post(`${wakabaBaseUrl}/sales/filterDate`, { type: type, date: searchdate,cat1:category1})
            .then(response => {
                const salesData = response.data;
                if (salesData?.length > 0) {
                    const updatedData111 = salesData.map((data, Index) => ({
                        ...data,
                        estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                        comment: JSON.parse(data.comment),
                    }));
                    setSales(updatedData111);
                } else {
                    setSales([]);
                }
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }
    // filter by start date and end date
    const handleTerminalDateFilter = async (start, end, type) => {
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        await axios.post(`${wakabaBaseUrl}/sales/filterDateTerminal`, { type: type, startDate: start, endDate: end,cat1:category1 })
            .then(response => {
                const salesData = response.data;
                if (salesData?.length > 0) {
                    const updatedData111 = salesData.map((data, Index) => ({
                        ...data,
                        estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                        comment: JSON.parse(data.comment),
                    }));
                    setSales(updatedData111);
                } else {
                    setSales([]);
                }
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }
    const handleDateSearchClick = (type) => {
        if (selectedOption1 === 'year1') {
            const data = `${year1}`;
            handleDateFilter(data, type);
            setMonth1('');
            setDay1('');
            setStartDate1('');
            setEndDate1('');
        }
        if (selectedOption1 === 'month1') {
            const data = `${currentyear}-${month1}`;
            handleDateFilter(data, type);
            setYear1(currentyear);
            setDay1('');
            setStartDate1('');
            setEndDate1('');
        }
        if (selectedOption1 === 'day1') {
            const data = `${currentyear}-${currentmonth}-${day1}`;
            handleDateFilter(data, type);
            setYear1(currentyear);
            setMonth1(currentmonth);
            setStartDate1('');
            setEndDate1('');
        }
        if (selectedOption1 === 'period1') {
            handleTerminalDateFilter(startDate1, endDate1, type);
            setYear1('');
            setMonth1('');
            setDay1('');
        }
    }
    //filter by staff
    const [isUserOpen, setIsUserOpen] = useState(false);
    const [searchUserTerm, setSearchUserTerm] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);

    const toggleUserDropdown = () => {
        setIsUserOpen(!isUserOpen);
    };

    const handleUserCheckboxChange = (user) => {
        setSelectedUsers((prev) =>
            prev.includes(user) ? prev.filter((u) => u !== user) : [...prev, user]
        );
    };

    const filteredUsers = users?.length > 0 ? users.filter((user) => user.full_name.toLowerCase().includes(searchUserTerm.toLowerCase())) : [];

    useEffect(() => {
        const searchStaffInformation = async () => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            console.log(category1, 'category1');
            await axios.post(`${wakabaBaseUrl}/sales/getSalesListByCategory1`, { cat1: category1 })
                .then(response => {
                    const salesData = response.data;
                    if (salesData?.length > 0) {
                        const updatedData111 = salesData.map((data, Index) => ({
                            ...data,
                            estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                            comment: JSON.parse(data.comment),
                        }));
                        if (selectedUsers?.length > 0) {
                            const filteredSales = updatedData111.filter(sale =>
                                selectedUsers.includes(sale.purchase_staff)
                            );
                            setSales(filteredSales);
                        } else {
                            setSales(updatedData111);
                        }
                    }
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }
        searchStaffInformation();
    }, [selectedUsers]);
    //filter by state
    const productStatuses = ['査定中', 'お預かり', '承認待ち', '承認された', '買取済', '発送中', '約定済', 'オークション出品済', 'オークション発送済', '廃棄', '基準外', '返品・返金'];
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatuses, setSelectedStatuses] = useState([]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleStatusCheckboxChange = (status) => {
        setSelectedStatuses((prev) =>
            prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
        );
    };

    const filteredStatuses = productStatuses.filter((status) =>
        status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const searchStatusInformation = async () => {
            // const clientsToFind = ["Client A", "Client C"];
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            // console.log(`${wakabaBaseUrl}/sales/getSalesList`);
            await axios.post(`${wakabaBaseUrl}/sales/getSalesListByCategory1`, { cat1: category1 })
                .then(response => {
                    const salesData = response.data;
                    if (salesData?.length > 0) {
                        const updatedData111 = salesData.map((data, Index) => ({
                            ...data,
                            estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                            comment: JSON.parse(data.comment),
                        }));
                        if (selectedStatuses?.length > 0) {
                            const filteredSales = updatedData111.filter(sale =>
                                selectedStatuses.includes(sale.product_status)
                            );
                            setSales(filteredSales);
                        } else {
                            setSales(updatedData111);
                        }
    
                    }
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }
        searchStatusInformation();
    }, [selectedStatuses]);
    //--------------------------------------hanlde edit some value in sales Slip-------------------------------------
    const [product2s, setProduct2s] = useState([]);
    // Fetch product1 data
    const fetchProduct2 = (id) => {
        // useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.post(`${wakabaBaseUrl}/ProductType2sfilter`, { id: id })
            .then(response => {
                setProduct2s(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
        // }, []);
    }
    const [product3s, setProduct3s] = useState([]);
    // Fetch product1 data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.get(`${wakabaBaseUrl}/ProductType3s`)
            .then(response => {
                setProduct3s(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);
    // Filter the options based on the query
    // search selectbox product2================

    const [product4s, setProduct4s] = useState([]);
    // Fetch product1 data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.get(`${wakabaBaseUrl}/ProductType4s`)
            .then(response => {
                setProduct4s(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);

    const handleValueChange = async (id, index, e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log('id,name,value',id,index,name,value);
        if (name === 'product_type_one') {
            const selectedResult = product1s.find(product => product.category === value);
            fetchProduct2(selectedResult.id);
        }

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // console.log(`${wakabaBaseUrl}/sales/getSalesList`);
        await axios.post(`${wakabaBaseUrl}/sales/eidtSales`, { id: id, name: name, value: value, cat1: category1 })
            .then(response => {
                const salesData = response.data;
                if (salesData?.length > 0) {
                    const updatedData111 = salesData.map((data, Index) => ({
                        ...data,
                        estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                        // comment: JSON.parse(data.comment),
                    }));
                    setSales(updatedData111);
                }
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    };
    const handleProduct2Select = (index) => {
        const categoryone = sales[index].product_type_one;
        // console.log('categoryone',categoryone,index);
        if (categoryone) {
            const selectedResult = product1s.find(product => product.category === categoryone);
            fetchProduct2(selectedResult.id);
        }

    }
    //-----------------------open and close vendor -----------------------------------
    const [isvendorshow, setIsVendorShow] = useState(false);

    const openVendortable = () => {
        setIsVendorShow(false);
    };

    const closeVendortable = () => {
        setIsVendorShow(true);
    };

    const [booleanArray, setBooleanArray] = useState(new Array(30).fill(false));
    const toggleBoolean = (index) => {
        if (index >= 0 && index < 30) {
            // console.log('index', index, booleanArray[index]);
            const newArray = [...booleanArray];
            newArray[index] = !newArray[index];
            setBooleanArray(newArray); // Update the state
        }
    };
    //---------------------------------------------------------------------------------------------------------------
    //goto salesslip
    const gotoSalesSlip = () => {
        navigate('/salesslip');
    }
    //-----------------show all detail and close all detail---------------------------
    const showall = () => {
        setBooleanArray(new Array(30).fill(true));
    }
    const closeall = () => {
        setBooleanArray(new Array(30).fill(false));
    }
     
    return (
        <>
            {/* <Titlebar title={title} /> */}
            {/* first button line  */}
            <div className="w-full flex flex-col items-center justify-center py-3">
                <div className="w-full flex justify-center">
                    <div className='w-full'>
                        <div className='flex justify-center ml-10 ' >
                            <div className='contractor-assessment-sheet flex justify-between w-full'>
                                <div className='flex justify-center mt-2 w-full gap-10' >
                                    <button onClick={gotoSalesSlip} className='w-[200px] font-bold bg-[transparent] rounded-md border border-[#424242] text-[#424242] h-11 !text-2xl !px-0 hover:bg-[#524c3b] hover:text-white transition-all duration-300' >売上表</button>
                                    <button className='w-max h-11 bg-[#424242] text-[#fff] rounded-md border border-[#424242] text-2xl px-3' >
                                        業者査定シート
                                    </button>
                                    {/* second selectbox line  */}
                                    <div className='w-max flex justify-center'>
                                        <select name="category1" value={category1} onChange={(e) => handleCategory1Change(e, product1s)} className='w-max h-11 text-[#70685a] font-bold border border-[#70685a] rounded-md px-4 py-1 outline-[#70685a]' >
                                            {/* <option value="" disabled>商品タイプ1</option> */}
                                            {product1s.map((option, index) => (
                                                <option key={option.id} value={option.category || ''}>
                                                    {option.category || ''}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className='flex justify-center mt-2 w-full gap-3' >
                                    <div>
                                        <button onClick={handleSendCheckedValues} className='h-11 font-bold rounded-md bg-[#9bd195] text-2xl text-[white] !px-10 hover:bg-[#524c3b] hover:text-white transition-all duration-300' >業者への買取依書へ</button>
                                        <div className='text-center'>
                                            <LabelComponent value={'行を選択してくだをい'} className="text-center" />
                                        </div>
                                    </div>
                                    <button onClick={showall} className='w-[130px] font-bold bg-[transparent] rounded-md border border-[#424242] text-[#424242] h-11 !text-xl !px-0 hover:bg-[#524c3b] hover:text-white transition-all duration-300' >すべて表示</button>
                                    <button onClick={closeall} className='w-[130px] font-bold bg-[transparent] rounded-md border border-[#424242] text-[#424242] h-11 !text-xl !px-0 hover:bg-[#524c3b] hover:text-white transition-all duration-300' >すべて閉じる</button>
                                </div>
                            </div>
                        </div>


                        {/*  Tabe*/}
                        <div className='mt-3 w-full flex'>
                            <div className='w-full h-[600px]'>
                                <table style={Table} className='pb-5'>
                                    <thead className='sticky top-0 bg-[white] z-10'>
                                        <tr>
                                            <th rowSpan={2} className='px-2'></th>
                                            <th rowSpan={2} style={Th} className='px-2'>ID</th>
                                            <th rowSpan={2} style={Th} className='px-1'>
                                                {/* -----------dropdown--------- */}
                                                <div className="relative">
                                                    <button
                                                        onClick={toggleDropdown}
                                                        className="inline-flex items-center px-4 py-1 text-sm font-bold text-center text-[#626373] bg-[#ebe5e1] border border-[#70685a] rounded-lg hover:bg-[#524c3b] hover:text-white transition-all duration-300"
                                                    >
                                                        ステータス
                                                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                        </svg>
                                                    </button>

                                                    {isOpen && (
                                                        <div className="absolute z-10 bg-white rounded-lg shadow w-50">
                                                            <div className="p-3">
                                                                <label htmlFor="input-group-search" className="sr-only">Search</label>
                                                                <div className="relative">
                                                                    <input
                                                                        type="text"
                                                                        id="input-group-search"
                                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                                        placeholder="検索..."
                                                                        value={searchTerm}
                                                                        onChange={(e) => setSearchTerm(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700">
                                                                {filteredStatuses.map((status) => (
                                                                    <li key={status}>
                                                                        <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                                                            <input
                                                                                id={`checkbox-${status}`}
                                                                                type="checkbox"
                                                                                checked={selectedStatuses.includes(status)}
                                                                                onChange={() => handleStatusCheckboxChange(status)}
                                                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                                            />
                                                                            <label htmlFor={`checkbox-${status}`} className="w-full ms-2 text-sm font-medium text-gray-900">{status}</label>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                                {/* ---------------------------- */}
                                            </th>
                                            <th className='px-1' style={Th} rowSpan={2}>
                                                <div className="relative">
                                                    <button
                                                        onClick={toggleUserDropdown}
                                                        className="inline-flex items-center px-4 py-1 text-sm font-bold text-center text-[#626373] bg-[#ebe5e1] border border-[#70685a] rounded-lg hover:bg-[#524c3b] hover:text-white transition-all duration-300"
                                                    >
                                                        買取担当
                                                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                        </svg>
                                                    </button>

                                                    {isUserOpen && (
                                                        <div className="absolute z-10 bg-white rounded-lg shadow w-40">
                                                            <div className="p-3">
                                                                <label htmlFor="input-group-search" className="sr-only">Search</label>
                                                                <div className="relative">
                                                                    <input
                                                                        type="text"
                                                                        id="input-group-search"
                                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                                        placeholder="検索..."
                                                                        value={searchTerm}
                                                                        onChange={(e) => setSearchUserTerm(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700">
                                                                {filteredUsers.map((user) => (
                                                                    <li key={user.id}>
                                                                        <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                                                            <input
                                                                                id={`checkbox-${user.full_name}`}
                                                                                type="checkbox"
                                                                                checked={selectedUsers.includes(user.full_name)}
                                                                                onChange={() => handleUserCheckboxChange(user.full_name)}
                                                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                                            />
                                                                            <label htmlFor={`checkbox-${user.full_name}`} className="w-full ms-2 text-sm font-medium text-gray-900">{user.full_name}</label>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </th>
                                            <th className='px-1' style={Th} rowSpan={2}>
                                                <div className="relative">
                                                    <button
                                                        onClick={toggleDateDropdown1}
                                                        className="inline-flex items-center px-4 py-1 text-sm font-bold text-center text-[#626373] bg-[#ebe5e1] border border-[#70685a] rounded-lg hover:bg-[#524c3b] hover:text-white transition-all duration-300"
                                                    >
                                                        買取日
                                                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                        </svg>
                                                    </button>

                                                    {isDateOpen1 && (
                                                        <div className="absolute z-10 bg-white rounded-lg shadow w-100">
                                                            <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700">
                                                                <li>
                                                                    <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                                                        <input
                                                                            id='year1'
                                                                            type="radio"
                                                                            name="dateOption1"
                                                                            checked={selectedOption1 === 'year1'}
                                                                            onChange={() => handleDateOptionChange1('year1')}
                                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                                        />
                                                                        <label htmlFor='year1' className="w-max mr-2 ms-2 text-sm font-medium text-gray-900">
                                                                            年指定
                                                                        </label>
                                                                        <InputComponent name='year1' value={year1} onChange={(e) => setYear1(e.target.value)} type='number' className="w-[100px] text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" placeholder={'2024'} />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                                                        <input
                                                                            id='month1'
                                                                            type="radio"
                                                                            name="dateOption1"
                                                                            checked={selectedOption1 === 'month1'}
                                                                            onChange={() => handleDateOptionChange1('month1')}
                                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                                        />
                                                                        <label htmlFor='month1' className="w-max mr-2 ms-2 text-sm font-medium text-gray-900">
                                                                            月指定
                                                                        </label>
                                                                        <InputComponent name='month1' value={month1} onChange={(e) => setMonth1(e.target.value)} type='number' className="w-20 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" placeholder={'01'} />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                                                        <input
                                                                            id='day1'
                                                                            type="radio"
                                                                            name="dateOption1"
                                                                            checked={selectedOption1 === 'day1'}
                                                                            onChange={() => handleDateOptionChange1('day1')}
                                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                                        />
                                                                        <label htmlFor='day1' className="w-max mr-2 ms-2 text-sm font-medium text-gray-900">
                                                                            日指定
                                                                        </label>
                                                                        <InputComponent name='day1' value={day1} onChange={(e) => setDay1(e.target.value)} type='number' className="w-20 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" placeholder={'01'} />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                                                        <input
                                                                            id='period1'
                                                                            type="radio"
                                                                            name="dateOption1"
                                                                            checked={selectedOption1 === 'period1'}
                                                                            onChange={() => handleDateOptionChange1('period1')}
                                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                                        />
                                                                        <label htmlFor='period1' className="w-full ms-2 text-sm font-medium text-gray-900">
                                                                            期間指定
                                                                        </label>

                                                                        <InputComponent name='startDate1' value={startDate1} onChange={(e) => setStartDate1(e.target.value)} type='date' placeholder={'10/15/2024'} className="w-40 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" />
                                                                        <label htmlFor='period' className="w-full ms-2 text-sm font-medium text-gray-900">
                                                                            ~
                                                                        </label>
                                                                        <InputComponent name='endDate1' value={endDate1} onChange={(e) => setEndDate1(e.target.value)} type='date' placeholder={'10/15/2024'} className="w-40 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="w-full flex items-center p-2 rounded hover:bg-gray-100">
                                                                        <div className='w-full text-[#656565] px-2 mr-2 flex justify-center'>
                                                                            < button type="button" onClick={() => handleDateSearchClick('買取日')} className="w-20 h-8 px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white text-[15px] bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                                                                                検索
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </th>
                                            <th className='px-1' style={Th} rowSpan={2}>
                                                <div className="relative">
                                                    <button
                                                        onClick={toggleDateDropdown2}
                                                        className="inline-flex items-center px-4 py-1 text-sm font-bold text-center text-[#626373] bg-[#ebe5e1] border border-[#70685a] rounded-lg hover:bg-[#524c3b] hover:text-white transition-all duration-300"
                                                    >
                                                        卸日
                                                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                        </svg>
                                                    </button>

                                                    {isDateOpen2 && (
                                                        <div className="absolute z-10 bg-white rounded-lg shadow w-100">
                                                            <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700">
                                                                <li>
                                                                    <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                                                        <input
                                                                            id='year1'
                                                                            type="radio"
                                                                            name="dateOption1"
                                                                            checked={selectedOption1 === 'year1'}
                                                                            onChange={() => handleDateOptionChange1('year1')}
                                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                                        />
                                                                        <label htmlFor='year1' className="w-max mr-2 ms-2 text-sm font-medium text-gray-900">
                                                                            年指定
                                                                        </label>
                                                                        <InputComponent name='year1' value={year1} onChange={(e) => setYear1(e.target.value)} type='number' className="w-[100px] text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" placeholder={'2024'} />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                                                        <input
                                                                            id='month1'
                                                                            type="radio"
                                                                            name="dateOption1"
                                                                            checked={selectedOption1 === 'month1'}
                                                                            onChange={() => handleDateOptionChange1('month1')}
                                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                                        />
                                                                        <label htmlFor='month1' className="w-max mr-2 ms-2 text-sm font-medium text-gray-900">
                                                                            月指定
                                                                        </label>
                                                                        <InputComponent name='month1' value={month1} onChange={(e) => setMonth1(e.target.value)} type='number' className="w-20 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" placeholder={'01'} />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                                                        <input
                                                                            id='day1'
                                                                            type="radio"
                                                                            name="dateOption1"
                                                                            checked={selectedOption1 === 'day1'}
                                                                            onChange={() => handleDateOptionChange1('day1')}
                                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                                        />
                                                                        <label htmlFor='day1' className="w-max mr-2 ms-2 text-sm font-medium text-gray-900">
                                                                            日指定
                                                                        </label>
                                                                        <InputComponent name='day1' value={day1} onChange={(e) => setDay1(e.target.value)} type='number' className="w-20 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" placeholder={'01'} />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                                                        <input
                                                                            id='period1'
                                                                            type="radio"
                                                                            name="dateOption1"
                                                                            checked={selectedOption1 === 'period1'}
                                                                            onChange={() => handleDateOptionChange1('period1')}
                                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                                        />
                                                                        <label htmlFor='period1' className="w-full ms-2 text-sm font-medium text-gray-900">
                                                                            期間指定
                                                                        </label>

                                                                        <InputComponent name='startDate1' value={startDate1} onChange={(e) => setStartDate1(e.target.value)} type='date' placeholder={'10/15/2024'} className="w-40 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" />
                                                                        <label htmlFor='period' className="w-full ms-2 text-sm font-medium text-gray-900">
                                                                            ~
                                                                        </label>
                                                                        <InputComponent name='endDate1' value={endDate1} onChange={(e) => setEndDate1(e.target.value)} type='date' placeholder={'10/15/2024'} className="w-40 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="w-full flex items-center p-2 rounded hover:bg-gray-100">
                                                                        <div className='w-full text-[#656565] px-2 mr-2 flex justify-center'>
                                                                            < button type="button" onClick={() => handleDateSearchClick('卸日')} className="w-20 h-8 px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white text-[15px] bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                                                                                検索
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </th>
                                            <th className='px-1' style={Th} rowSpan={2}>
                                                <div className="relative">
                                                    <button
                                                        onClick={toggleDateDropdown3}
                                                        className="inline-flex items-center px-4 py-1 text-sm font-bold text-center text-[#626373] bg-[#ebe5e1] border border-[#70685a] rounded-lg hover:bg-[#524c3b] hover:text-white transition-all duration-300"
                                                    >
                                                        入金日
                                                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                                        </svg>
                                                    </button>

                                                    {isDateOpen3 && (
                                                        <div className="absolute z-10 bg-white rounded-lg shadow w-100">
                                                            <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700">
                                                                <li>
                                                                    <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                                                        <input
                                                                            id='year1'
                                                                            type="radio"
                                                                            name="dateOption1"
                                                                            checked={selectedOption1 === 'year1'}
                                                                            onChange={() => handleDateOptionChange1('year1')}
                                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                                        />
                                                                        <label htmlFor='year1' className="w-max mr-2 ms-2 text-sm font-medium text-gray-900">
                                                                            年指定
                                                                        </label>
                                                                        <InputComponent name='year1' value={year1} onChange={(e) => setYear1(e.target.value)} type='number' className="w-[100px] text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" placeholder={'2024'} />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                                                        <input
                                                                            id='month1'
                                                                            type="radio"
                                                                            name="dateOption1"
                                                                            checked={selectedOption1 === 'month1'}
                                                                            onChange={() => handleDateOptionChange1('month1')}
                                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                                        />
                                                                        <label htmlFor='month1' className="w-max mr-2 ms-2 text-sm font-medium text-gray-900">
                                                                            月指定
                                                                        </label>
                                                                        <InputComponent name='month1' value={month1} onChange={(e) => setMonth1(e.target.value)} type='number' className="w-20 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" placeholder={'01'} />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                                                        <input
                                                                            id='day1'
                                                                            type="radio"
                                                                            name="dateOption1"
                                                                            checked={selectedOption1 === 'day1'}
                                                                            onChange={() => handleDateOptionChange1('day1')}
                                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                                        />
                                                                        <label htmlFor='day1' className="w-max mr-2 ms-2 text-sm font-medium text-gray-900">
                                                                            日指定
                                                                        </label>
                                                                        <InputComponent name='day1' value={day1} onChange={(e) => setDay1(e.target.value)} type='number' className="w-20 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" placeholder={'01'} />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="flex items-center p-2 rounded hover:bg-gray-100">
                                                                        <input
                                                                            id='period1'
                                                                            type="radio"
                                                                            name="dateOption1"
                                                                            checked={selectedOption1 === 'period1'}
                                                                            onChange={() => handleDateOptionChange1('period1')}
                                                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                                                                        />
                                                                        <label htmlFor='period1' className="w-full ms-2 text-sm font-medium text-gray-900">
                                                                            期間指定
                                                                        </label>

                                                                        <InputComponent name='startDate1' value={startDate1} onChange={(e) => setStartDate1(e.target.value)} type='date' placeholder={'10/15/2024'} className="w-40 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" />
                                                                        <label htmlFor='period' className="w-full ms-2 text-sm font-medium text-gray-900">
                                                                            ~
                                                                        </label>
                                                                        <InputComponent name='endDate1' value={endDate1} onChange={(e) => setEndDate1(e.target.value)} type='date' placeholder={'10/15/2024'} className="w-40 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" />
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="w-full flex items-center p-2 rounded hover:bg-gray-100">
                                                                        <div className='w-full text-[#656565] px-2 mr-2 flex justify-center'>
                                                                            < button type="button" onClick={() => handleDateSearchClick('入金日')} className="w-20 h-8 px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white text-[15px] bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                                                                                検索
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </th>
                                            {/* <th style={Th}>
                                                <div className='w-full flex justify-center'>
                                                    <div className='flex justify-center'>
                                                        カテゴリ1
                                                        <div className='flex flex-col justify-center'>
                                                            {isCatShow ? <button ><img src={rightArrow} className='h-5' alt='' onClick={openCattable} ></img></button> : <button><img src={leftArrow} className='h-5' alt='' onClick={closeCattable}></img></button>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </th> */}
                                            <th style={Th} rowSpan={2}> 
                                                <div className='flex justify-center'>
                                                    カテゴリ2
                                                    <div className='flex flex-col justify-center'>
                                                        {isDetailShow ? <button><img src={rightArrow} className='h-4' alt='' onClick={openItemDetailShow} ></img></button> : <button><img src={leftArrow} className='h-4' alt='' onClick={openItemDetailShow}></img></button>}
                                                    </div>
                                                </div>
                                            </th>
                                            {isDetailShow ? 
                                                <th style={Th} rowSpan={2}>カテゴリ3</th> : <th style={{ display: 'none' }}></th>}
                                            {isDetailShow ? 
                                                <th style={Th} rowSpan={2}>カテゴリ4</th> : <th style={{ display: 'none' }}></th>}
                                            <th style={Th} rowSpan={2} >画像</th>
                                            <th rowSpan={2} style={Th} className='px-1'>わかばNo</th>
                                            <th style={Th} rowSpan={2} >
                                                <div className='flex justify-center'>
                                                    商品名
                                                </div>
                                            </th>
                                            <th style={Th} rowSpan={2}>個数</th> 
                                            {category1 === '貴金属' ? 
                                                <th style={Th} rowSpan={2}>金種</th> : <th style={{ display: 'none' }}></th>}
                                            {category1 === '貴金属' ? 
                                                <th style={Th} rowSpan={2}>総重量</th> : <th style={{ display: 'none' }}></th>}
                                            {category1 === '貴金属' ? 
                                                <th style={Th} rowSpan={2}>地金重さ</th> : <th style={{ display: 'none' }}></th>}
                                            {(category1 === '時計' || category1 === 'バッグ'
                                                || category1 === '財布' || category1 === 'アクセサリー' || category1 === 'カメラ') ? 
                                                <th style={Th} rowSpan={2}>型番 </th> : <th style={{ display: 'none' }}></th>}
                                            {(category1 === '時計' || category1 === 'バッグ' || category1 === 'アクセサリー'
                                                || category1 === '財布' || category1 === 'カメラ' || category1 === '楽器' || category1 === 'スマホ・タブレット') ? 
                                                <th style={Th} rowSpan={2}>シリアル</th> : <th style={{ display: 'none' }}></th>}
                                            {category1 === '時計' ? 
                                                <th style={Th} rowSpan={2}>駆動方式</th> : <th style={{ display: 'none' }}></th>}
                                            {category1 === '時計' ? 
                                                <th style={Th} rowSpan={2}>可動 </th> : <th style={{ display: 'none' }}></th>}
                                            {category1 === '時計' ? 
                                                <th style={Th} rowSpan={2}>テスター</th> : <th style={{ display: 'none' }}></th>}
                                            {category1 === '時計' ? 
                                                <th style={Th} rowSpan={2}>箱ギャラ</th> : <th style={{ display: 'none' }}></th>}
                                            {(category1 === '時計' || category1 === 'アクセサリー' || category1 === 'カメラ' || category1 === 'バッグ' || category1 === '財布') ? 
                                                <th style={Th} rowSpan={2}>ランク</th> : <th style={{ display: 'none' }}></th>}
                                            {category1 === '洋酒' ? 
                                                <th style={Th} rowSpan={2}>銘柄</th> : <th style={{ display: 'none' }}></th>}
                                            {category1 === '洋酒' ? 
                                                <th style={Th} rowSpan={2}>容量</th> : <th style={{ display: 'none' }}></th>}
                                            {category1 === '洋酒' ? 
                                                <th style={Th} rowSpan={2}>度数</th> : <th style={{ display: 'none' }}></th>}
                                            <th style={Th} rowSpan={2}>備考</th>
                                            <th style={Th} rowSpan={2} ><span className='!px-1'>買取額</span></th>
                                            <th style={Th} rowSpan={2} ><span className='!px-1'>最高査定額</span></th>
                                            <th style={Th} rowSpan={2} ><span className='!px-1'>最高査定業者</span></th>
                                            {/* <th style={Th} rowSpan={2} ><span className='!px-1'>その他の査定額</span></th> */}
                                            <th style={Th} rowSpan={2} ><span className='!px-1'>真贋</span></th>
                                            <th style={Th} rowSpan={2}>
                                                <div>
                                                    {isvendorshow ? <button className='!w-10 flex justify-center'><img src={rightArrow} className='h-5 w-10' alt='' onClick={openVendortable} ></img></button> : <button className='!w-10 flex justify-center'><img src={leftArrow} className='h-5 w-10' alt='' onClick={closeVendortable}></img></button>}
                                                </div>
                                            </th>
                                            {(isvendorshow && vendors?.length > 0) && vendors.map((vendor, index) => (
                                                <th key={vendor.id} style={Th} colSpan={booleanArray[index] ? 4 : 1} className='relative w-max group mx-auto'>
                                                    <div className='w-full flex justify-center px-6 tracking-wider'>
                                                        <div className='flex justify-center'>
                                                            {booleanArray[index] ?
                                                                <div className='w-max'>{vendor.vendor_name}</div>
                                                                : <div className='w-[60px] truncate'>{vendor.vendor_name}</div>
                                                            }
                                                            <div className='flex flex-col justify-center'>
                                                                <button className='flex flex-col justify-center' >
                                                                    <img src={booleanArray[index] ? rightArrow : leftArrow} className='h-4' alt='' onClick={() => toggleBoolean(index)} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="absolute shadow-lg hidden group-hover:block bg-[#333] text-white font-semibold px-3 py-[6px] text-[13px] right-0 left-0 mx-auto w-max -top-10 rounded before:w-4 before:h-4 before:rotate-45 before:bg-[#333] before:absolute before:z-[-1] before:-bottom-1 before:left-0  before:right-0 before:mx-auto">
                                                        {vendor.vendor_name}
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                        <tr>
                                            {(isvendorshow && vendors?.length > 0) && vendors.map((vendor, index) => (
                                                <>
                                                    {booleanArray[index] ? (
                                                        <>
                                                            <th key={`expected-date-${index}`} style={Th} className='px-2'>仮査定日</th>
                                                            <th key={`assessment-amount-${index}`} style={Th} className='px-2'>仮査定額</th>
                                                            <th key={`actual-date-${index}`} style={Th} className='px-2'>本査定日</th>
                                                            <th key={`actual-amount-${index}`} style={Th} className='px-2'>本査定額</th>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <th key={`hidden-th-1-${index}`} style={{ display: 'none' }}></th>
                                                            <th key={`hidden-th-2-${index}`} style={{ display: 'none' }}></th>
                                                            <th key={`hidden-th-3-${index}`} style={{ display: 'none' }}></th>
                                                            <th key={`actual-amount-${index}`} style={Th} className='px-2'>本査定額</th>
                                                        </>
                                                    )}

                                                </>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sales.map((sale, Index) => (
                                            <tr key={sale.id}>
                                                <td className='flex items-center h-6 pt-4'>
                                                    <input
                                                        type='checkbox'
                                                        disabled={sale.product_status !== '買取済'}
                                                        value={sale.id}
                                                        onChange={handleCheckboxChange}
                                                        className='w-5'
                                                    />
                                                </td>
                                                <td style={Td}>{sale.id || ''}</td>
                                                {role !== '1' ? 
                                                    <td style={Td}>
                                                        <select name='product_status' value={sale.product_status || ''} onChange={(e) => handleValueChange(sale.id, Index, e)} className="w-[120px] h-8 text-[#70685a] font-bold px-4 py-1 outline-[#70685a]">
                                                            <option value="査定中">査定中</option>
                                                            <option value="お預かり">お預かり</option>
                                                            <option value="承認待ち">承認待ち</option>
                                                            <option value="承認された">承認された</option>
                                                            <option value="買取済">買取済</option>
                                                            <option value="発送中">発送中</option>
                                                            <option value="約定済">約定済</option>
                                                            <option value="オークション出品済">オークション出品済</option>
                                                            <option value="オークション発送済">オークション発送済</option>
                                                            <option value="廃棄">廃棄</option>
                                                            <option value="基準外">基準外</option>
                                                            <option value="返品・返金">返品・返金</option>
                                                        </select>
                                                    </td>
                                                : <td style={Td}>{sale.product_status || ''}</td>}
                                                {role !== '1' ? 
                                                    <td style={Td}>
                                                        <select name='purchase_staff' value={sale.purchase_staff || ''} onChange={(e) => handleValueChange(sale.id, Index, e)} className="w-[120px] h-8 text-[#70685a] font-bold px-4 py-1 outline-[#70685a]">
                                                            {users.length > 0 && users.map((user, index) => (
                                                                <option key={user.id} value={user.full_name}>{user.full_name || ''}</option>
                                                            ))}
                                                        </select>
                                                    </td>
                                                : <td style={Td}>{sale.purchase_staff || ''}</td>}
                                                <td style={Td}>{sale.trading_date || ''}</td>
                                                <td style={Td}>{sale.shipping_date || ''}</td>
                                                <td style={Td}>{sale.deposit_date || ''}</td>
                                                {/* <td style={Td}>
                                                    <select name='product_type_one' value={sale.product_type_one || ''} onChange={(e) => handleValueChange(sale.id, Index, e)} className="w-[100px] h-8 text-[#70685a] font-bold px-4 py-1 outline-[#70685a]">
                                                        <option value=''></option>
                                                        {product1s.length > 0 && product1s.map((type, index) => (
                                                            <option key={type.id} value={type.category}>{type.category || ''}</option>
                                                        ))}
                                                    </select>
                                                </td> */}
                                                {role !== '1' ? 
                                                    <td style={Td}>
                                                        <select name='product_type_two' value={sale.product_type_two || ''} onChange={(e) => handleValueChange(sale.id, Index, e)} onClick={() => handleProduct2Select(Index)} className="w-[80px] h-8 text-[#70685a] font-bold px-4 py-1 outline-[#70685a]">
                                                            <option value=''></option>
                                                            {product2s.length > 0 && product2s.map((type, index) => (
                                                                <option key={type.id} value={type.category}>{type.category || ''}</option>
                                                            ))}
                                                        </select>
                                                    </td>
                                                : <td style={Td}>{sale.product_type_two || ''}</td>}
                                                {isDetailShow ? role !== '1' ? 
                                                    <td style={Td}>
                                                        <select name='product_type_three' value={sale.product_type_three || ''} onChange={(e) => handleValueChange(sale.id, Index, e)} className="w-[80px] h-8 text-[#70685a] font-bold px-4 py-1 outline-[#70685a]">
                                                            <option value=''></option>
                                                            {product3s.length > 0 && product3s.map((type, index) => (
                                                                <option key={type.id} value={type.category}>{type.category || ''}</option>
                                                            ))}
                                                        </select>
                                                    </td>
                                                : <td style={Td}>{sale.product_type_three || ''}</td>
                                                : <td style={{display:'none'}}></td>}
                                                {isDetailShow ? role !== '1' ? 
                                                    <td style={Td}>
                                                        <select name='product_type_four' value={sale.product_type_four || ''} onChange={(e) => handleValueChange(sale.id, Index, e)} className="w-[80px] h-8 text-[#70685a] font-bold px-4 py-1 outline-[#70685a]">
                                                            <option value=''></option>
                                                            {product4s.length > 0 && product4s.map((type, index) => (
                                                                <option key={type.id} value={type.category}>{type.category || ''}</option>
                                                            ))}
                                                        </select>
                                                    </td>
                                                : <td style={Td}>{sale.product_type_four || ''}</td>
                                                : <td style={{display:'none'}}></td>}
                                                <td style={Td}>
                                                    {sale.product_photo !== '' ?
                                                        <button onClick={() => openProductImageModal(sale.product_photo)} name='photo' className='w-max'>
                                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeMedium svg-icon css-kry165 w-7" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhotoOutlinedIcon" title="PhotoOutlined"><path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4.86 8.86-3 3.87L9 13.14 6 17h12z"></path></svg>
                                                        </button>
                                                        : ''}
                                                </td>
                                                <td style={Td}>{sale.wakaba_number || ''}</td>
                                                <td style={Td}>{sale.product_name || ''}</td>
                                                <td style={Td} >{sale.quantity || ''}</td>
                                                {category1 === '貴金属' ? 
                                                    <td style={Td} >{sale.gold_type || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {category1 === '貴金属' ?
                                                     <td style={Td} >{sale.gross_weight || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {category1 === '貴金属' ?
                                                     <td style={Td} >{sale.price_gram || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {(category1 === '時計' || category1 === 'バッグ' || category1 === 'アクセサリー'
                                                    || category1 === '財布' || category1 === 'カメラ' || category1 === '楽器' || category1 === 'スマホタブレット') ?  
                                                    <td style={Td} >{sale.serial_number || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {(category1 === '時計' || category1 === 'バッグ'
                                                    || category1 === '財布' || category1 === 'アクセサリー' || category1 === 'カメラ') ? 
                                                    <td style={Td} >{sale.model_number_one || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {category1 === '時計' ?
                                                     <td style={Td} >{sale.action_type || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {category1 === '時計' ?
                                                     <td style={Td} >{sale.movable || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {category1 === '時計' ? 
                                                    <td style={Td} >{sale.tester || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {category1 === '時計' ? 
                                                    <td style={Td} >{sale.box_guarantee || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {(category1 === '時計' || category1 === 'アクセサリー' || category1 === 'カメラ'  || category1 === 'バッグ' || category1 === '財布') ? 
                                                     <td style={Td} >{sale.rank || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {category1 === '洋酒' ?
                                                     <td style={Td} >{sale.brand || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {category1 === '洋酒' ?
                                                     <td style={Td} >{sale.capacity || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {category1 === '洋酒'?
                                                     <td style={Td} >{sale.percent || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                <td style={Td} >{sale.notes || ''}</td>
                                                <td style={Td} className='text-right'>{(sale.purchase_price || '').toLocaleString()}</td>
                                                {sale.highest_estimate_price && sale.highest_estimate_price !== '' ?
                                                    <td style={Td} className='text-right'>
                                                        {(sale.highest_estimate_price || 0).toLocaleString()}
                                                    </td>
                                                    : <td style={Td}></td>
                                                }
                                                <td style={Td}>{sale.highest_estimate_vendor || ''}</td>
                                                <td style={Td} className='w-5'>
                                                    {sale.fixed_checkout === 'real' ?
                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeMedium svg-icon css-kry165" fill='#626373' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FiberManualRecordOutlinedIcon" title="FiberManualRecordOutlined"><path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8"></path></svg>
                                                        : <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeMedium svg-icon css-kry165" fill='#626373' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseOutlinedIcon" title="CloseOutlined"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                                                    }
                                                </td>
                                                <td style={Td} className='w-10'>{sale.number_of_vendor || ''}</td>
                                                {(isvendorshow && vendors?.length > 0) && vendors.map((vendor, index) => (
                                                    <>
                                                        {booleanArray[index] ? (
                                                            <>
                                                                <td key={`expected-deposit-date-${index}`} style={Td} className='px-2'>{sale.assessment_date || ''}</td>
                                                                <td key={`assessment-amount-${index}`} style={Td} className='px-2 text-right'>{(sale.estimate_wholesaler[vendor.vendor_name] || 0).toLocaleString()}</td>
                                                                <td key={`deposit-date-${index}`} style={Td} className='px-2'>{sale.deposit_date || ''}</td>
                                                                <td key={`sales-amount-${index}`} style={Td} className='px-2 text-right'>{(sale.sales_amount || 0).toLocaleString()}</td>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <td key={`hidden-td-1-${index}`} style={{ display: 'none' }}></td>
                                                                <td key={`hidden-td-2-${index}`} style={{ display: 'none' }}></td>
                                                                <td key={`hidden-td-3-${index}`} style={{ display: 'none' }}></td>
                                                                <td key={`sales-amount-${index}`} style={Td} className='px-2 text-right'>{(sale.sales_amount || 0).toLocaleString()}</td>
                                                            </>
                                                        )}
                                                    </>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* ---------show product photo-------- */}
            {showProductImage && <ImageShowModal itemsImagePreview={itemImagePreview} onClose={closeProductImageModal} />}
        </>
    );
};

export default VendorAssementSheet;