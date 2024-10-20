import React,{ useState, useEffect } from 'react';
import {Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { setRShopShippingData } from '../../redux/sales/actions';

import leftArrow from '../../Assets/img/right-arrow.png';
import rightArrow from '../../Assets/img/left-arrow.png';

// import Titlebar from '../../Components/Common/Titlebar';
import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import LabelComponent from '../../Components/Common/LabelComponent';
import ImageShowModal from '../../Components/Modal/ImageShowModal';


const SalesSlip = () => {
    // const title = 'タイトルタイトル';
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

    const Table = {
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItems: 'center',
        borderCollapse: 'collapse', // Ensures borders collapse properly
    };
    
    const Th = {
        border: '1px solid #70685a',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace: 'nowrap',
        backgroundColor: '#ffffff', // Header background color
        position: 'sticky', // Fix header on scroll
        top: 0, // Position at the top
        zIndex: 10, // Ensure header appears above other content
    };
    
    const Td = {
        border: '1px solid #70685a',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace: 'nowrap',
    };

    const dispatch = useDispatch();

    const updateData = (data) => {
    dispatch(setRShopShippingData(data));
    };

    const [sales, setSales] = useState([]);
    // Fetch sales data
    useEffect( () => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // console.log(`${wakabaBaseUrl}/sales/getSalesList`);
         axios.get(`${wakabaBaseUrl}/sales/getSalesList`)
            .then(response => {
                const salesData = response.data;
                if(salesData?.length>0) {
                    const updatedData111 = salesData.map((data,Index) => ({
                        ...data,
                        estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                        comment: JSON.parse(data.comment),
                    })); 
                    setSales(updatedData111);
                }
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);

    const [users, setUsers] = useState([]);
    // Fetch user data
    useEffect(() => {
        const fetchUser = async() => {
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
    const handleCategory = async(value) => {
        setShowYahoo(false);
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // console.log(`${wakabaBaseUrl}/sales/filter`);
        await axios.post(`${wakabaBaseUrl}/sales/filter`,{ value: value })
            .then(response => {
                const salesData = response.data;
                if(salesData?.length>0) {
                    const updatedData111 = salesData.map((data,Index) => ({
                        ...data,
                        estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                        comment: JSON.parse(data.comment),
                    })); 
                    setSales(updatedData111);
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
    const handleSendCheckedValues = () => {
        updateData(checkedValues);
        // console.log('checked values',checkedValues);
        if(checkedValues && checkedValues.length !==0){
            navigate('/purchaserequest');
        }

    };
    //go to disposal permission
    const sendToDisposalPermission = () => {
        // updateData(checkedValues);
        // navigate('/applicationfordisposalpermission');
    }

    //filter yahoo auction
    const handleYahooAuction =()=> {
        setShowYahoo(true);
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        // console.log(`${wakabaBaseUrl}/sales/filter`);
        axios.post(`${wakabaBaseUrl}/sales/vendorfilter`,{ value: 'オークション' })
            .then(response => {
                // console.log(response.data)
                setSales(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
        });
    }

    const [showYahoo,setShowYahoo] = useState(false);
     //  -------------------------------select box-------------------------------
     const [product1s, setProduct1s] = useState([]);
     // Fetch product1 data
     useEffect(() => {
         const fetchCategory1 = async () => {
             const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
             if (!wakabaBaseUrl) {
                 throw new Error('API base URL is not defined');
             }
 
             axios.get(`${wakabaBaseUrl}/ProductType1s`)
                 .then(response => {
                     setProduct1s(response.data);
                 })
                 .catch(error => {
                     console.error("There was an error fetching the customer data!", error);
                 });
         }
         fetchCategory1();
     }, []);
 
     const [category1, setCategory1] = useState('');
 
     const handleCategory1Change = (e, productList) => {
         const selectedCategory = e.target.value; // Get the selected category
         const selectedResult = productList.find(product => product.category === selectedCategory);//need id
         setCategory1(selectedCategory);
         handleCategory(selectedCategory);
     };
   // show subtd 
   const [isshow, setIsShow] = useState(false);

   const openSubtable = () => {
       setIsShow(false);
   };
   const closeSubtable = () => {
       setIsShow(true);
   };  
    //--------------------shwo all -----------------
    const showAll = () => {
        handleCategory('');
        setCategory1('');
    }
    //-----------------------------------item detail---------------------------------------
    const [isDetailShow ,setIsDetailShow] = useState(false);
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
    const [allVendors, setAllVendors] = useState([]);

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
        const fetchAllVendor = async() =>{
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.get(`${wakabaBaseUrl}/vendor/getVendorListAll`)
                .then(response => {
                    setAllVendors(response.data);
                    // console.log('vendrListAll',response.data)
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }
        fetchAllVendor();

    }, [sales]);

    const [estimateValues, setEstimateValues] = useState({});

    const [showEstimate, setShowEstimate] = useState(false);
    const openEstimate = (index) => {
        setShowEstimate(true);
        
        //setShowInputPurchase(!showInputPurchase);
        // setEditIndex(index);
        console.log('selectedtotalSalesData',sales[index])
        // setSalesSlipData(sales[index]); // Populate the input fields with the selected row's data
        setEstimateValues(sales[index].estimate_wholesaler);
        if(sales[index].product_type_one){
            const selectedResult = product1s.find(product => product.category === sales[index].product_type_one);
            console.log('selectedResult',selectedResult)
            getVendorList(selectedResult.id);
        }
            
    }

    const saveEstimate = () => {
        setShowEstimate(false);
    }
//--------------------------filter function----------------------------------
    const now = new Date();
    // Format the date as YYYY-MM-DD
    const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Tokyo' };
    const formattedDate = new Intl.DateTimeFormat('ja-JP', optionsDate).format(now).replace(/\//g, '-');
    // Split the formatted date to get year and month
    const [currentyear, currentmonth,currentday] = formattedDate.split('-').map(part => part.trim());

    const [showDateFilter, setShowDateFilter] = useState(false)
    const [selectedDateType, setSelectedDateType] = useState('');
    const [year, setYear] = useState(currentyear);
    const [month, setMonth] = useState(currentmonth);
    const [day, setDay] = useState(currentday);
    const [startDate, setStartDate] = useState(formattedDate);
    const [endDate, setEndDate] = useState(formattedDate);

    const openShowFilterModal = (type) => {
        setSelectedDateType(type);
        setShowDateFilter(true);
    };

    const closeShowFilterModal = () => {
        setShowDateFilter(false);
    }
    // filter by date
    const handleDateFilter = async(type) => {
        setShowDateFilter(false);
        const date = `${year}-${month}-${day}`;
        // console.log(type,date)
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        await axios.post(`${wakabaBaseUrl}/sales/filterDate`,{ type: type,date:date })
            .then(response => {
                const salesData = response.data;
                if(salesData?.length>0) {
                    const updatedData111 = salesData.map((data,Index) => ({
                        ...data,
                        estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                        comment: JSON.parse(data.comment),
                    })); 
                    setSales(updatedData111);
                }
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }
    // filter by start date and end date
    const handleTerminalDateFilter = async(type) => {
        setShowDateFilter(false);
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        await axios.post(`${wakabaBaseUrl}/sales/filterDateTerminal`,{ type: type,startDate:startDate,endDate:endDate })
            .then(response => {
                const salesData = response.data;
                if(salesData?.length>0) {
                    const updatedData111 = salesData.map((data,Index) => ({
                        ...data,
                        estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                        comment: JSON.parse(data.comment),
                    })); 
                    setSales(updatedData111);
                }
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }
    //filter by staff
    const [showStaffFilter, setShowStaffFilter] = useState(false);
    const closeShowStaffFilterModal = () => {
        setShowStaffFilter(false);
    }
    const openShowStaffFilterModal = () => {
        setShowStaffFilter(true);
    }
    
    const [searchQuery, setSearchQuery] = useState('');
    const filteredUsers = users?.filter(user =>
        user.full_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const [selectedUsers, setSelectedUsers] = useState([]);

    const handleUserCheckboxChange = (user) => {
        setSelectedUsers((prevSelected) => {
        if (prevSelected.includes(user.full_name)) {
            return prevSelected.filter(name => name !== user.full_name);
        } else {
            return [...prevSelected, user.full_name];
        }
        });
    };

    const searchStaffInformation = async() => {
        setShowStaffFilter(false);
        // const clientsToFind = ["Client A", "Client C"];
        console.log('selected users',selectedUsers)
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        console.log(category1,'category1');
        await axios.post(`${wakabaBaseUrl}/sales/getSalesListByCategory1`,{cat1:category1})
        .then(response => {
            const salesData = response.data;
            if(salesData?.length>0) {
                const updatedData111 = salesData.map((data,Index) => ({
                    ...data,
                    estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                    comment: JSON.parse(data.comment),
                })); 
                const filteredSales = updatedData111.filter(sale => 
                    selectedUsers.includes(sale.purchase_staff)
                );
                setSales(filteredSales);
            }
        })
        .catch(error => {
            console.error("There was an error fetching the customer data!", error);
        });
    }
    //filter by state
    const filteredStatus = ['査定中','お預かり','承認待ち','承認された','買取済','発送中','約定済','オークション出品済','オークション発送済','廃棄','基準外','返品・返金'];
    const [showStatusFilter, setShowStatusFilter] = useState(false);
    const closeShowStatusFilterModal = () => {
        setShowStatusFilter(false);
    }
    const openShowStatusFilterModal = () => {
        setShowStatusFilter(true);
    }

    const [selectedStatus, setSelectedStatus] = useState([]);

    const handleStatusCheckboxChange = (status) => {
        setSelectedStatus((prevSelected) => {
        if (prevSelected.includes(status)) {
            return prevSelected.filter(name => name !== status);
        } else {
            return [...prevSelected, status];
        }
        });
    };

    const searchStatusInformation = async() => {
        setShowStatusFilter(false);
        // const clientsToFind = ["Client A", "Client C"];
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // console.log(`${wakabaBaseUrl}/sales/getSalesList`);
        await axios.post(`${wakabaBaseUrl}/sales/getSalesListByCategory1`,{cat1:category1})
        .then(response => {
            const salesData = response.data;
            if(salesData?.length>0) {
                const updatedData111 = salesData.map((data,Index) => ({
                    ...data,
                    estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                    comment: JSON.parse(data.comment),
                })); 
                const filteredSales = updatedData111.filter(sale => 
                    selectedStatus.includes(sale.product_status)
                );
                setSales(filteredSales);
            }
        })
        .catch(error => {
            console.error("There was an error fetching the customer data!", error);
        });
    }
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

    const handleValueChange = async(id,index,e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log('id,name,value',id,index,name,value);
        if(name === 'product_type_one') {
            const selectedResult = product1s.find(product => product.category === value);
            fetchProduct2(selectedResult.id);
        }

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // console.log(`${wakabaBaseUrl}/sales/getSalesList`);
        await axios.post(`${wakabaBaseUrl}/sales/eidtSales`,{id:id,name:name,value:value,cat1:category1})
        .then(response => {
            const salesData = response.data;
            if(salesData?.length>0) {
                const updatedData111 = salesData.map((data,Index) => ({
                    ...data,
                    estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                    comment: JSON.parse(data.comment),
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
        if(categoryone) {
            const selectedResult = product1s.find(product => product.category === categoryone);
            fetchProduct2(selectedResult.id);
        }

    }
//-----------------------------------------------------drop down----------------------------------------------------------
    // const [isOpen, setIsOpen] = useState(false);
    // const [searchTerm, setSearchTerm] = useState('');
    // const [selectedUsers1, setSelectedUsers1] = useState([]);

    // const users1 = [
    // 'Bonnie Green',
    // 'Jese Leos',
    // 'Michael Gough',
    // 'Robert Wall',
    // 'Joseph Mcfall',
    // 'Leslie Livingston',
    // 'Roberta Casas',
    // ];

    // const toggleDropdown = () => setIsOpen(!isOpen);

    // const handleCheckboxChange1 = (user) => {
    // setSelectedUsers1((prev) =>
    //     prev.includes(user) ? prev.filter((u) => u !== user) : [...prev, user]
    // );
    // };

    // const filteredUsers1 = users1.filter((user) =>
    //     user.toLowerCase().includes(searchTerm.toLowerCase())
    // );
//------------------------------------------------------------------------------------------------------------------------
    return (
        <>
            {/* <Titlebar title={title} /> */}
            {/* first button line  */}
            <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full flex justify-center">
                    <div className='w-full'>
                        <div className='sales-slip-top-button flex justify-center gap-10'>
                            <div className='sales-slip-next-button1 flex mt-2 w-max'>
                                <div className='flex justify-center'>
                                    <div>
                                        <button onClick={handleSendCheckedValues} 
                                            className='w-max h-10 px-5 text-2xl font-bold rounded-md bg-[#9bd195] text-[white] hover:bg-[#524c3b] hover:text-white transition-all duration-300'>
                                             リサイクルショップへの買取依頼
                                        </button>
                                        <div className='flex justify-center'>
                                            <LabelComponent value={'行を選択してください'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='sales-slip-next-button2 flex justify-between w-max mt-2'>
                                <div className=''>
                                    <div className='flex justify-center'>
                                        <button onClick={sendToDisposalPermission} className='h-10  px-5 text-2xl font-bold rounded-md bg-[#9bd195] text-[white] hover:bg-[#524c3b] hover:text-white transition-all duration-300' >
                                            廃棄申請
                                        </button>
                                    </div>
                                    <div className='flex justify-center'>
                                        <LabelComponent value={'行を選択してください'} />
                                    </div>
                                </div>
                                <ButtonComponent children={'売上表'} className='!px-5 text-2xl ml-5 whitespace-nowrap' style={{ backgroundColor: '#424242', height: '40px' }} />
                            </div>
                            <div className='sales-slip-next-button2 flex mt-2 w-max gap-5' >    
                                <button className='h-10 px-5 text-2xl font-bold rounded-md border border-[#424242] bg-[transparent] text-[#424242] hover:bg-[#524c3b] hover:text-white transition-all duration-300 whitespace-nowrap' >
                                    <Link to='/vendorassessmentsheet'>業者査定シート</Link></button>
                                <button onClick={handleYahooAuction} className='h-10 px-5 text-2xl font-bold rounded-md border border-[#424242] bg-[transparent] text-[#424242] hover:bg-[#524c3b] hover:text-white transition-all duration-300 whitespace-nowrap' 
                                            style={{backgroundColor:showYahoo === true ? '#424242' : 'transparent', color:showYahoo === true ? 'white' : 'black'}} >
                                     オークション
                                </button>
                                <button onClick={showAll} className='h-10  px-5 text-2xl font-bold rounded-md bg-[transparent] text-[#424242] border border-[#424242] hover:bg-[#524c3b] hover:text-white transition-all duration-300' >
                                    すべて表示
                                </button>
                            </div>
                        </div>

                        {/* second selectbox line  */}
                        <div className='w-full flex justify-center mt-2'>
                            <select name="category1" value={category1} onChange={(e) => handleCategory1Change(e, product1s)} className='w-max h-11 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]' >
                                <option value="aaa" disabled>商品タイプ1</option>
                                <option value="">すべて表示</option>
                                {product1s.map((option, index) => (
                                    <option key={option.id} value={option.category || ''}>
                                        {option.category || ''}
                                    </option>
                                ))}
                            </select>
                        </div>
                        
                        {/*  Table*/}
                        <div className='mt-3 w-full flex'>
                            <div className='w-full h-[600px] overflow-scroll'>
                                <table style={Table} className='pb-5'>
                                    <thead className='sticky top-0 bg-[white] z-10'>
                                        <tr>
                                            <th rowSpan={2} className='px-2'></th>
                                            <th rowSpan={2} style={Th} className='px-2'>ID</th>
                                            <th rowSpan={2} style={Th} className='px-2'>わかばNo</th>
                                            <th rowSpan={2} style={Th} className='px-1'>
                                                <ButtonComponent onClick={openShowStatusFilterModal} children="ステータス" className='w-max !px-5 rounded-lg border border-[#70685a]' style={{ backgroundColor: '#ebe5e1', color: '#626373' }} /> 
                                            </th>
                                            <th className='px-2' style={Th} rowSpan={2}>
                                                <ButtonComponent onClick={openShowStaffFilterModal} children="買取担当" className='w-max !px-5 rounded-lg border border-[#70685a]' style={{ backgroundColor: '#ebe5e1', color: '#626373' }} /> 
                                            </th>
                                            <th  className='px-2' style={Th} rowSpan={2}> 
                                                <ButtonComponent onClick={() => openShowFilterModal('買取日')}  children="買取日" className='w-max !px-5 rounded-lg border border-[#70685a]' style={{ backgroundColor: '#ebe5e1', color: '#626373' }} /> 
                                            </th>
                                            <th  className='px-2' style={Th} rowSpan={2}>
                                                <ButtonComponent onClick={() => openShowFilterModal('卸日')}  children="卸日" className='w-max !px-5 rounded-lg border border-[#70685a]' style={{ backgroundColor: '#ebe5e1', color: '#626373' }} /> 
                                            </th>
                                            <th  className='px-2' style={Th} rowSpan={2}>
                                                <ButtonComponent  onClick={() => openShowFilterModal('入金日')}  children="入金日" className='w-max !px-5 rounded-lg border border-[#70685a]' style={{ backgroundColor: '#ebe5e1', color: '#626373' }} /> 
                                            </th>

                                            <th style={Th} colSpan={isshow ? 7:1}>
                                                <div className='flex justify-center'>
                                                    <div className='flex justify-center w-40'>
                                                        個人情報
                                                        <div className='flex flex-col justify-center'>
                                                            {isshow ? <button ><img src={rightArrow} className='h-5' alt='' onClick={openSubtable} ></img></button> : <button><img src={leftArrow} className='h-5' alt='' onClick={closeSubtable}></img></button>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </th>

                                            <th style={Th} rowSpan={2} >カテゴリ-1 </th>
                                            <th style={Th} rowSpan={2} >カテゴリ-2</th>
                                            <th style={Th} rowSpan={2} >カテゴリ-3</th>
                                            <th style={Th} rowSpan={2} >カテゴリ-4</th>
                                            <th style={Th} rowSpan={2} >画像</th>
                                            <th style={Th} rowSpan={2} >
                                                <div className='flex justify-center'>
                                                    商品名
                                                    <div className='flex flex-col justify-center'>
                                                        {isDetailShow ? <button><img src={rightArrow} className='h-4' alt='' onClick={openItemDetailShow} ></img></button> : <button><img src={leftArrow} className='h-4' alt='' onClick={openItemDetailShow}></img></button>}
                                                    </div>
                                                </div>
                                            </th>
                                            {isDetailShow ? <th style={Th} rowSpan={2}>金種</th> : <th style={{ display: 'none' }}></th>}
                                            {isDetailShow ? <th style={Th} rowSpan={2}>総重量</th> : <th style={{ display: 'none' }}></th>}
                                            {isDetailShow ? <th style={Th} rowSpan={2}>g/額面</th> : <th style={{ display: 'none' }}></th>}
                                            {isDetailShow ? <th style={Th} rowSpan={2}>型番 </th> : <th style={{ display: 'none' }}></th>}
                                            {isDetailShow ? <th style={Th} rowSpan={2}>駆動方式</th> : <th style={{ display: 'none' }}></th>}
                                            {isDetailShow ? <th style={Th} rowSpan={2}>可動 </th> : <th style={{ display: 'none' }}></th>}
                                            {isDetailShow ? <th style={Th} rowSpan={2}>テスター</th> : <th style={{ display: 'none' }}></th>}
                                            {isDetailShow ? <th style={Th} rowSpan={2}>箱ギャラ</th> : <th style={{ display: 'none' }}></th>}
                                            {isDetailShow ? <th style={Th} rowSpan={2}>ランク</th> : <th style={{ display: 'none' }}></th>}
                                            {isDetailShow ? <th style={Th} rowSpan={2}>銘柄</th> : <th style={{ display: 'none' }}></th>}
                                            {isDetailShow ? <th style={Th} rowSpan={2}>容量</th> : <th style={{ display: 'none' }}></th>}
                                            {isDetailShow ? <th style={Th} rowSpan={2}>度数</th> : <th style={{ display: 'none' }}></th>}
                                            {isDetailShow ? <th style={Th} rowSpan={2}>備考</th> : <th style={{ display: 'none' }}></th>}
                                            <th style={Th} rowSpan={2} >個数</th>
                                            <th style={Th} rowSpan={2} >最高査定額</th>
                                            <th style={Th} rowSpan={2} >最高査定業者 </th>
                                            <th style={Th} rowSpan={2} >その他の査定額</th>
                                            <th style={Th} rowSpan={2} >買取額</th>
                                            <th style={Th} rowSpan={2} >売上額</th>
                                            <th style={Th} rowSpan={2} >粗利益</th>
                                            <th style={Th} rowSpan={2} >真贋</th>
                                        </tr>
                                        <tr>
                                            <th style={Th}className='px-2'>顧客名</th>
                                            {isshow ? <th style={Th} className='px-2'>ヨミガナ</th> : <th style={{ display: 'none' }}></th>}
                                            {isshow ? <th style={Th} className='px-2'>電話番号</th> : <th style={{ display: 'none' }}></th>}
                                            {isshow ? <th style={Th} className='px-2'>住所</th> : <th style={{ display: 'none' }}></th>}
                                            {isshow ? <th style={Th} className='px-2'>来店種別</th> : <th style={{ display: 'none' }}></th>}
                                            {isshow ? <th style={Th} className='px-2'>銘柄</th> : <th style={{ display: 'none' }}></th>}
                                            {isshow ? <th style={Th} className='px-2'>販売店名</th> : <th style={{ display: 'none' }}></th>}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sales.map((sale,Index) => (
                                            <tr  key={sale.id}>
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
                                                <td style={Td}>{sale.wakaba_number  || ''}</td>
                                                <td style={Td}>
                                                    <select name='product_status' value={sale.product_status || ''} onChange={(e) => handleValueChange(sale.id,Index,e)} className="w-40 h-8 text-[#70685a] font-bold px-4 py-1 outline-[#70685a]">
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
                                                <td style={Td}>
                                                    <select name='purchase_staff' value={sale.purchase_staff || ''} onChange={(e) => handleValueChange(sale.id,Index,e)} className="w-40 h-8 text-[#70685a] font-bold px-4 py-1 outline-[#70685a]">
                                                        {users.length > 0 && users.map((user, index) => (
                                                            <option key={user.id} value={user.full_name}>{user.full_name || ''}</option>
                                                        ))}
                                                    </select>
                                                </td>
                                                <td style={Td}>{sale.trading_date || ''}</td>
                                                <td style={Td}>{sale.shipping_date || ''}</td>
                                                <td style={Td}>{sale.deposit_date || ''}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.full_name : ''}</td>
                                                {isshow ? 
                                                    <td style={Td}>{sale.Customer ? sale.Customer.katakana_name : ''}</td>
                                                    : <td style={{ display: 'none' }}></td>}
                                                {isshow ? 
                                                    <td style={Td}>{sale.Customer ? sale.Customer.phone_number : ''}</td>
                                                    : <td style={{ display: 'none' }}></td>}
                                                {isshow ? 
                                                    <td style={Td}>{sale.Customer ? sale.Customer.address : ''}</td>
                                                    : <td style={{ display: 'none' }}></td>}
                                                {isshow ? 
                                                    <td style={Td}>{sale.Customer ? sale.Customer.visit_type : ''}</td>
                                                    : <td style={{ display: 'none' }}></td>}
                                                {isshow ? 
                                                    <td style={Td}>{sale.Customer ? sale.Customer.brand_type : ''}</td>
                                                    : <td style={{ display: 'none' }}></td>}
                                                {isshow ? 
                                                    <td style={Td}>{sale.store_name || ''}</td>
                                                    : <td style={{ display: 'none' }}></td>}
                                                <td style={Td}>
                                                    <select name='product_type_one' value={sale.product_type_one || ''} onChange={(e) => handleValueChange(sale.id,Index,e)} className="w-[100px] h-8 text-[#70685a] font-bold px-4 py-1 outline-[#70685a]">
                                                        <option value=''></option>
                                                        {product1s.length > 0 && product1s.map((type, index) => (
                                                            <option key={type.id} value={type.category}>{type.category || ''}</option>
                                                        ))}
                                                    </select>
                                                </td>
                                                <td style={Td}>
                                                    <select name='product_type_two' value={sale.product_type_two || ''} onChange={(e) => handleValueChange(sale.id,Index,e)} onClick={() => handleProduct2Select(Index)} className="w-[80px] h-8 ml-3 text-[#70685a] font-bold px-4 py-1 outline-[#70685a]">
                                                        <option value=''></option>
                                                        {product2s.length > 0 && product2s.map((type, index) => (
                                                            <option key={type.id} value={type.category}>{type.category || ''}</option>
                                                        ))}
                                                    </select>
                                                </td>
                                                <td style={Td}>
                                                    <select name='product_type_three' value={sale.product_type_three || ''} onChange={(e) => handleValueChange(sale.id,Index,e)} className="w-[80px] h-8 text-[#70685a] font-bold px-4 py-1 outline-[#70685a]">
                                                        <option value=''></option>
                                                        {product3s.length > 0 && product3s.map((type, index) => (
                                                            <option key={type.id} value={type.category}>{type.category || ''}</option>
                                                        ))}
                                                    </select>
                                                </td>
                                                <td style={Td}>
                                                    <select name='product_type_four' value={sale.product_type_four || ''} onChange={(e) => handleValueChange(sale.id,Index,e)}  className="w-[80px] h-8 text-[#70685a] font-bold px-4 py-1 outline-[#70685a]">
                                                        <option value=''></option>
                                                        {product4s.length > 0 && product4s.map((type, index) => (
                                                            <option key={type.id} value={type.category}>{type.category || ''}</option>
                                                        ))}
                                                    </select>
                                                </td>
                                                <td style={Td}>
                                                    {sale.product_photo != '' ? 
                                                    <button onClick={() => openProductImageModal(sale.product_photo)} name='photo' className='w-max'>
                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeMedium svg-icon css-kry165 w-7" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhotoOutlinedIcon" title="PhotoOutlined"><path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4.86 8.86-3 3.87L9 13.14 6 17h12z"></path></svg>
                                                    </button> 
                                                    : ''}
                                                </td>
                                                <td style={Td}>{sale.product_name || ''}</td>
                                                {isDetailShow ? <td style={Td} >{sale.gold_type || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {isDetailShow ? <td style={Td} >{sale.gross_weight || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {isDetailShow ? <td style={Td} >{sale.price_gram || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {isDetailShow ? <td style={Td} >{sale.model_number_one || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {isDetailShow ? <td style={Td} >{sale.action_type || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {isDetailShow ? <td style={Td} >{sale.movable || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {isDetailShow ? <td style={Td} >{sale.tester || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {isDetailShow ? <td style={Td} >{sale.box_guarantee || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {isDetailShow ? <td style={Td} >{sale.rank || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {isDetailShow ? <td style={Td} >{sale.brand || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {isDetailShow ? <td style={Td} >{sale.capacity || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {isDetailShow ? <td style={Td} >{sale.percent || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                {isDetailShow ? <td style={Td} >{sale.notes || ''}</td> : <td style={{ display: 'none' }}></td>}
                                                <td style={Td}>{sale.quantity}</td>
                                                <td style={Td}>{sale.highest_estimate_price || ''}</td>
                                                <td style={Td}>{sale.highest_estimate_vendor || ''}</td>
                                                <td style={Td}>
                                                    <div className="relative w-max group mx-auto">
                                                        <button type="button" onClick={() => openEstimate(Index)}
                                                            className="w-10 px-3 py-1 rounded text-[#626373] tracking-wider font-semibold border border-[#70685a] bg-[#ebe5e1]">
                                                            {sale.number_of_vendor || '0'}
                                                        </button>
                                                        <div className="absolute shadow-lg hidden group-hover:block bg-[#fff] text-[#626373] font-semibold px-3 py-2 text-[15px] right-full mr-3 top-0 bottom-0 my-auto h-max w-max rounded before:w-4 before:h-4 before:rotate-45 before:bg-[#333] before:absolute before:z-[-1] before:bottom-0 before:top-0 before:my-auto before:-right-1 before:mx-auto">
                                                            {allVendors?.length>0 && allVendors.map((vendor, index) => (
                                                                sale.estimate_wholesaler[vendor.vendor_name] && 
                                                                <div key={index} className='flex justify-between'>
                                                                    <p>{vendor.vendor_name}:</p>
                                                                    <p className='pl-3'>{sale.estimate_wholesaler[vendor.vendor_name] || ''}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={Td}>{sale.purchase_price || ''}</td>
                                                <td style={Td}>{sale.sales_amount || ''}</td>
                                                <td style={Td}>{sale.gross_profit || ''}</td>
                                                <td style={Td}>
                                                    {sale.fixed_checkout === 'real' ?
                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeMedium svg-icon css-kry165" fill='#626373' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FiberManualRecordOutlinedIcon" title="FiberManualRecordOutlined"><path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8"></path></svg>
                                                        :  <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeMedium svg-icon css-kry165" fill='#626373' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloseOutlinedIcon" title="CloseOutlined"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
                                                    }
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                        {/* -----------dropdown--------- */}
    {/* <div className="relative">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Dropdown search
        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 bg-white rounded-lg shadow w-60">
          <div className="p-3">
            <label htmlFor="input-group-search" className="sr-only">Search</label>
            <div className="relative">
              <input
                type="text"
                id="input-group-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Search user"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700">
            {filteredUsers1.map((user) => (
              <li key={user}>
                <div className="flex items-center p-2 rounded hover:bg-gray-100">
                  <input
                    id={`checkbox-${user}`}
                    type="checkbox"
                    checked={selectedUsers1.includes(user)}
                    onChange={() => handleCheckboxChange1(user)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={`checkbox-${user}`} className="w-full ms-2 text-sm font-medium text-gray-900">{user}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div> */}
                        {/* ---------------------------- */}

                    </div>
                </div>
            </div>
        {/* ---------show product photo-------- */}
        {showProductImage && <ImageShowModal itemsImagePreview={itemImagePreview}  onClose={closeProductImageModal} />}
        {/* -------------show estimate------------- */}
        {showEstimate &&
            <div
                className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 relative">
                    <div className="text-center">
                        <div className='flex justify-center w-full'>
                            <table className='text-center w-full' style={Table}>
                                <thead className='bg-white z-10 h-11 w-full'>
                                    <tr>
                                        <th style={Th}>ベンダー名</th>
                                        <th style={Th}>見積もり</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vendors?.length>0 && vendors.map((vendor, index) => (
                                        <tr key={vendor.id} className='!h-8'>
                                            <td style={Td}>{vendor.vendor_name || ''}</td>
                                            <td style={Td}>
                                                {estimateValues[vendor.vendor_name] || ''}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>
        
                    <div className="flex justify-center w-full mt-5">
                        <button type="button" onClick={saveEstimate}
                            className="px-5 py-1 rounded-full w-1/2 font-bold text-white border-none outline-none bg-[#524c3b] hover:bg-[#524c3b] hover:text-white transition-all duration-300">閉じる</button>
                    </div>
                </div>
            </div>
        }
        {/* ---------date filter modal----------- */}
        {showDateFilter &&
            <div className="fixed inset-0 p-4 flex justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                    <div className="flex items-center pb-3 border-b border-gray-300">
                        <h3 className="text-gray-800 text-xl font-bold flex-1">{selectedDateType}</h3>
                        <svg onClick={closeShowFilterModal} xmlns="http://www.w3.org/2000/svg" className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                            viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </div>

                    <div className="my-6">
                        <div>
                            <div className='flex w-full mt-1 gap-3 ml-3'>
                                <InputComponent name='year' value={year} onChange={(e) => setYear(e.target.value)} type='number' className="w-[100px] text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" placeholder={'2024'} />
                                <div className='w-max flex flex-col justify-center'>
                                    <label className='text-[#70685a] text-[15px]'>年</label>
                                </div>
                                <InputComponent name='month' value={month} onChange={(e) => setMonth(e.target.value)}  type='number' className="w-20 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" placeholder={'01'} />
                                <div className='w-max flex flex-col justify-center'>
                                    <label className='text-[#70685a] text-[15px]'>月</label>
                                </div>
                                <InputComponent name='day' value={day} onChange={(e) => setDay(e.target.value)}  type='number' className="w-20 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" placeholder={'01'} />
                                <div className='w-max flex flex-col justify-center'>
                                    <label className='text-[#70685a] text-[15px]'>日</label>
                                </div>
                                <div className='flex justify-center'>
                                    <div className=' text-[#656565] px-2 mr-2 flex flex-col justify-center'>
                                        < button onClick={() => handleDateFilter(selectedDateType)} type="button" className="w-20 h-8 px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white text-[15px] bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                                            検索
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex w-full mt-3 gap-3 ml-3'>
                                <InputComponent name='startDate' value={startDate} onChange={(e) => setStartDate(e.target.value)} type='date' placeholder={'10/15/2024'} className="w-40 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" />
                                <div className='flex flex-col justify-center'>
                                    <label className="text-[#656565] block text-center text-[15px] !mb-0">~</label>
                                </div>
                                <InputComponent name='endDate'  value={endDate} onChange={(e) => setEndDate(e.target.value)}  type='date' placeholder={'10/15/2024'} className="w-40 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" />
                                <div className='ml-3 flex justify-center'>
                                    <div className=' text-[#656565] px-2 mr-2 flex flex-col justify-center'>
                                        < button type="button" onClick={() => handleTerminalDateFilter(selectedDateType)} className="w-20 h-8 px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white text-[15px] bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                                            検索
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="border-t border-gray-300 pt-6 flex justify-end gap-4">
                        <button type="button" onClick={closeShowFilterModal}
                            className="px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200">キャンセル</button>
                    </div>
                </div>
            </div>
        }
        {/* ---------staff filter modal-------- */}
        {showStaffFilter &&
            <div className="fixed inset-0 p-4 flex justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                    <div className="flex items-center pb-3 border-b border-gray-300">
                        <h3 className="text-gray-800 text-xl font-bold flex-1">買取担当</h3>
                        <svg onClick={closeShowStaffFilterModal} xmlns="http://www.w3.org/2000/svg" className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                            viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </div>

                    <div className="my-6">
                        <div className='mt-3 w-full'>
                            <input
                                type='text'
                                placeholder='検索...'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className='mb-2 p-1 border rounded'
                            />
                            <div className='w-full h-[350px] overflow-y-scroll '>
                                <table style={Table}>
                                    <thead className='sticky top-0 bg-[white] z-10'>
                                        <tr>
                                            <th className='px-2'></th>
                                            <th className='px-2'></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredUsers.length > 0 && filteredUsers.map((user, index) => (
                                            <tr  key={user.id}>
                                                <td style={Td}><input type='checkbox' value={user.full_name|| ''} 
                                                onChange={() => handleUserCheckboxChange(user)}
                                                checked={selectedUsers.includes(user.full_name)} 
                                                className='w-5'/></td>
                                                <td style={Td}>{user.full_name || ''}</td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 pt-6 flex justify-end gap-4">
                        <button type="button" onClick={closeShowStaffFilterModal}
                            className="px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200">キャンセル</button>
                    <button type="button" onClick={searchStaffInformation}
                            className="px-4 py-2 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600">検索</button>
                    </div>
                </div>
            </div>
        }
        {/* ---------status filter modal-------- */}
        {showStatusFilter &&
            <div className="fixed inset-0 p-4 flex justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                    <div className="flex items-center pb-3 border-b border-gray-300">
                        <h3 className="text-gray-800 text-xl font-bold flex-1">ステータス</h3>
                        <svg onClick={closeShowStatusFilterModal} xmlns="http://www.w3.org/2000/svg" className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                            viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </div>

                    <div className="my-6">
                        <div className='mt-3 w-full'>
                            <div className='w-full h-[350px] overflow-y-scroll '>
                                <table style={Table}>
                                    <thead className='sticky top-0 bg-[white] z-10'>
                                        <tr>
                                            <th className='px-2'></th>
                                            <th className='px-2'></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredStatus.length > 0 && filteredStatus.map((status, index) => (
                                            <tr key={status.id}>
                                                <td style={Td}><input type='checkbox' value={status|| ''} 
                                                onChange={() => handleStatusCheckboxChange(status)}
                                                checked={selectedStatus.includes(status)} 
                                                className='w-5'/></td>
                                                <td style={Td}>{status || ''}</td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 pt-6 flex justify-end gap-4">
                        <button type="button" onClick={closeShowStatusFilterModal}
                            className="px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200">キャンセル</button>
                    <button type="button" onClick={searchStatusInformation}
                            className="px-4 py-2 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600">検索</button>
                    </div>
                </div>
            </div>
        }
        </>
    );
};

export default SalesSlip;