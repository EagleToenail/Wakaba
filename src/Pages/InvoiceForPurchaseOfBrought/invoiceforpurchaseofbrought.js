import React, { useState, useEffect, useRef } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css'
import '../../Assets/css/firstTd.css'
import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
// import dateimage from '../../Assets/img/datepicker.png';
import DateAndTime from '../../Components/Common/PickData';
import { toast } from 'react-toastify';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { setInvoiceData } from '../../redux/sales/actions';
import { setClearData } from '../../redux/sales/actions';
import { setCustomerID } from '../../redux/sales/actions';

import leftArrow from '../../Assets/img/right-arrow.png';
import rightArrow from '../../Assets/img/left-arrow.png';

import ConfirmationModal from '../../Components/Modal/SuccessModal';
import ImageShowModal from '../../Components/Modal/ImageShowModal';

const InvoicePurchaseOfBrought = () => {
    // const title = 'タイトルタイトル';
    const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

    const now = new Date();
    // Format the date as YYYY-MM-DD
    const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Tokyo' };
    const formattedDate = new Intl.DateTimeFormat('ja-JP', optionsDate).format(now).replace(/\//g, '-');
    // Split the formatted date to get year and month
    const [currentyear, currentmonth] = formattedDate.split('-').map(part => part.trim());
    const currentDay = new Intl.DateTimeFormat('ja-JP', optionsDate).format(now).replace(/\//g, '-');

    const navigate = useNavigate();

    // Fetch customer data (customer Id)
    const { id } = useParams();

    //send data using redux
    const dispatch = useDispatch();

    const updateData = (data) => {
        dispatch(setInvoiceData(data));
    };

    const sendCustomerId = (data) => {
        dispatch(setCustomerID(data));
    };
    //received data using redux
    const data = useSelector((state) => state.data);
    const stampData = data.data;
    // console.log('stampData',stampData);
    // const clearReduxData = () => {
    //     dispatch(setClearData());
    // }

    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    const Th = {
        whiteSpace: 'nowrap',
        paddingLeft: '10px',
        paddingRight: '10px'
    };
    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
        whiteSpace: 'nowrap',
        height: '30px'
    };
    const Td1 = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
        whiteSpace: 'nowrap',
        height: '30px',
        position: 'relative'
    };

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userStoreName = decodedToken.storename;
    const userId = decodedToken.userId;
    const username = decodedToken.fullname;

    const [users, setUsers] = useState([]);
    // Fetch user data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.post(`${wakabaBaseUrl}/user/getStoreProfileList`, { storeName: userStoreName })
            .then(response => {
                const data = response.data;
                setUsers(data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);
    // fetch registered product item
    useEffect(() => {
        const fetch = async () => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }

            await axios.post(`${wakabaBaseUrl}/purchaseinvoice/getregistereddata`, { id: id, userStoreName: userStoreName, userId: userId })
                .then(response => {
                    const invoiceData = response.data;
                    if (invoiceData?.length > 0) {
                        const updatedData111 = invoiceData.map((data, Index) => ({
                            ...data,
                            estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                            comment: JSON.parse(data.comment),
                        }));
                        setTotalSalesSlipData(updatedData111);
                        setItemsImagePreview(`${wakabaBaseUrl}/uploads/product/${response.data[0].entire_items_url}`);
                        setItemsDocPreview(`${wakabaBaseUrl}/uploads/product/${response.data[0].document_url}`);
                    }
                    setShowInputPurchase(false);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }
        fetch();
    }, []);


    const [invoiceID, setInvoiceID] = useState('');
    //fetch invoiceID data
    useEffect(() => {
        const fetch = async () => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }

            await axios.get(`${wakabaBaseUrl}/purchaseinvoice/getinvoicenumber`)
                .then(response => {
                    setInvoiceID(response.data.invoiceID);
                    //console.log('invoiceID',response.data)
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }
        fetch();
    }, []);


    const [customerPastVisitHistory, setCustomerPastVisitHistory] = useState([{
        visit_date: '',
        applicable: '',
        total_amount: '',
        category: '',
        product_name: '',
        total_sales: '',
        total_gross_profit: '',
        total_purchase_price: ''
    }]);

    // Fetch customerPastVisitHistory data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        const fetch = async () => {
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            if (id) {
                await axios.get(`${wakabaBaseUrl}/customer/customerpastvisithistory/${id}`)
                    .then(response => {
                        setCustomerPastVisitHistory(response.data);
                    })
                    .catch(error => {
                        console.error("There was an error fetching the customer data!", error);
                    });
            }
        }
        fetch();

    }, []);

    const [customer, setCustomer] = useState({
        id: '',
        full_name: '',
        katakana_name: '',
        phone_number: '',
        address: '',
        shop: '',
        opportunity: '',
        birthday: '',
        age: '',
        job: '',
        email: '',
        idCard_url: '',
        cardType: '',
        avatar_url: '',
        prefeature: '',
        city: '',
        gender: '',
        item1: '',
        item2: '',
        item3: '',
        line_friend: '',
        google_review: '',
        novelty_item: '',
        novelty_item_number: '',
        cupon_item: '',
        cupon_item_number: '',
    });

    //fetch customer data
    useEffect(() => {

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        const fetch = async () => {
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            if (id) {
                await axios.get(`${wakabaBaseUrl}/customer/getCustomerById/${id}`)
                    .then(response => {
                        //console.log("customerdata", response.data)
                        checkedFunction(response.data.item1, response.data.item2, response.data.item3, response.data.item4, response.data.item5)
                        setCustomer(response.data);
                    })
                    .catch(error => {
                        console.error("There was an error fetching the customer data!", error);
                    });
            }
        }
        fetch();

    }, [id]);

    const handleCustomerChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value,
        });
    };

    //fetch user(profile) data
    // const [userData, setUserData] = useState([]);
    // useEffect(() => {
    //     const fetchUserData = async() => {
    //         const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

    //         if (!wakabaBaseUrl) {
    //             throw new Error('API base URL is not defined');
    //         }

    //         await axios.post(`${wakabaBaseUrl}/profile/getProfileById`, { userId })
    //             .then(response => {
    //                 const user = response.data;
    //                 // console.log('user profile',user)
    //                 setUserData(response.data);
    //                 if (!response.data) {
    //                     navigate('/');
    //                 }
    //             })
    //             .catch(error => {
    //                 console.error("There was an error fetching the customer data!", error);
    //             });
    //     }
    //    fetchUserData();
    // }, [userId]);

    //salesSlipData
    const [salesSlipData, setSalesSlipData] = useState({
        trading_date: currentDay,
        number: '',
        purchase_staff: username,
        purchase_staff_id: userId,
        customer_id: id,
        store_name: userStoreName,
        hearing: '',
        product_type_one: '',
        product_type_two: '',
        product_type_three: '',
        product_type_four: '',

        gold_type: '',
        gross_weight: '',
        price_gram: '',
        serial_number: '',
        action_type: '',
        movable: '',
        tester: '',
        model_number_one: '',
        box_guarantee: '',
        rank: '',
        brand: '',
        capacity: '',
        percent: '',
        notes: '',

        product_photo: '',
        product_name: '',
        comment: '',
        quantity: '0',
        reason_application: '',
        interest_rate: '0',
        product_price: '0',
        highest_estimate_vendor: '',
        highest_estimate_price: '0',
        number_of_vendor: '',
        supervisor_direction: '',
        purchase_result: '',
        purchase_price: '0',

        estimate_wholesaler: '',
    });
    //total data:
    const [totalSalesSlipData, setTotalSalesSlipData] = useState([]);

    const [staffData, setStaffData] = useState({
        purchase_staff: username,
        payment_staff: '',
    });
    //invoiceID
    useEffect(() => {
        if (totalSalesSlipData?.length > 0 && totalSalesSlipData[0].invoiceID) {
            setInvoiceID(totalSalesSlipData[0].invoiceID);
        }
    }, [totalSalesSlipData]);
    //select pruchase staff name and payment staff name
    useEffect(() => {
        if (totalSalesSlipData?.length > 0) {
            setStaffData({
                purchase_staff: totalSalesSlipData[0].purchase_staff,
                payment_staff: totalSalesSlipData[0].payment_staff,
            });
        } else {
            setStaffData({
                purchase_staff: username
            });
        }
    }, [totalSalesSlipData]);

    const handleStaffChange = (e) => {
        const { name, value } = e.target;
        setStaffData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        updateStaffData(name, value);
    };
    // update staff data
    const updateStaffData = async (name, value) => {
        if (totalSalesSlipData?.length > 0 && name === 'purchase_staff') {
            //console.log('name,value',name,value)
            const updatedData = totalSalesSlipData.map(data => ({
                ...data,
                purchase_staff: value // Replace with your desired value or logic
            }));

            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.post(`${wakabaBaseUrl}/purchaseinvoice/changePurchasePaymentStaff`, { payload: updatedData })
                .then(response => {
                    setTotalSalesSlipData(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
            //   setTotalSalesSlipData(updatedData);

        }
        if (totalSalesSlipData?.length > 0 && name === 'payment_staff') {
            //console.log('name,value',name,value)
            const updatedData = totalSalesSlipData.map(data => ({
                ...data,
                payment_staff: value // Replace with your desired value or logic
            }));

            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.post(`${wakabaBaseUrl}/purchaseinvoice/changePurchasePaymentStaff`, { payload: updatedData })
                .then(response => {
                    setTotalSalesSlipData(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
            //setTotalSalesSlipData(updatedData);
        }
    }

    //set redux invoiceID
    useEffect(() => {
        updateData(invoiceID);
    }, [invoiceID]);

    const [editIndex, setEditIndex] = useState(-1);

    const handleChange = (e) => {
        setSalesSlipData({
            ...salesSlipData,
            [e.target.name]: e.target.value,
        });
    };

    //category1 select
    const handleCategory1Change = (e, productList) => {
        const selectedCategory = e.target.value; // Get the selected category
        const selectedResult = productList.find(product => product.category === selectedCategory);
        setSalesSlipData({
            ...salesSlipData,
            product_type_one: selectedCategory, // Store the selected category
        });
        getVendorList(selectedResult.id);
        fetchProduct2(selectedResult.id);
        setEstimateValues({});
    };

    //estimate for wholesaler
    const [estimateValues, setEstimateValues] = useState({});
    const handleEstimateChange = (vendorname, value) => {
        setEstimateValues((prev) => ({
            ...prev,
            [vendorname]: value,
        }));
    };
    // search selectbox product1================
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

    //get  vendor list form vendor table
    const [vendors, setVendors] = useState([]);
    const [allVendors, setAllVendors] = useState([]);

    const getVendorList = async (id) => {
        const fetchVendorList = async () => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.post(`${wakabaBaseUrl}/vendor/getVendorList`, { id: id })
                .then(response => {
                    setVendors(response.data);
                    // console.log('vendrList',response.data)
                    setSalesSlipData(prevState => ({
                        ...prevState,
                        number_of_vendor: response.data.length, // change the value of field1
                    }));
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }
        fetchVendorList();
    }

    useEffect(() => {
        const fetchAllVendor = async () => {
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

    }, [totalSalesSlipData]);
    // search selectbox product3================

    const [product3s, setProduct3s] = useState([]);
    // Fetch product3 data
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
    // Filter the options based on the query
    // search selectbox product2================

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
    // Filter the options based on the query
    const [showInputPurchase, setShowInputPurchase] = useState(false);

    //add Data
    const addSlesItem = async () => {

        // console.log('purchase data', salesSlipData,estimateValues);

        let maxValue = 0; // Start with 0
        let maxKey = ''; // To store the corresponding key
        let hasValidValue = false; // Flag to check if there's any valid value

        Object.entries(estimateValues).forEach(([key, value]) => {
            let currentValue;

            if (value.includes('~')) {
                const [minValue] = value.split('~').map(Number);
                currentValue = Math.floor(minValue); // Ensure it's an integer
            } else if (value) {
                currentValue = Math.floor(Number(value)); // Ensure it's an integer
            } else {
                currentValue = 0; // Non-valid value
            }

            if (currentValue !== null && currentValue >= 0) {
                hasValidValue = true; // Mark that we have a valid value

                if (currentValue > maxValue) {
                    maxValue = currentValue;
                    maxKey = key; // Update corresponding key
                }
            }
        });

        const formData = new FormData();
        formData.append('userStoreName', userStoreName);
        formData.append('trading_date', salesSlipData.trading_date);
        formData.append('number', salesSlipData.number);
        formData.append('purchase_staff', salesSlipData.purchase_staff);
        formData.append('payment_staff', staffData.payment_staff);
        formData.append('purchase_staff_id', salesSlipData.purchase_staff_id);
        formData.append('customer_id', salesSlipData.customer_id);
        formData.append('store_name', salesSlipData.store_name);
        formData.append('hearing', salesSlipData.hearing);
        formData.append('product_type_one', salesSlipData.product_type_one);
        formData.append('product_type_two', salesSlipData.product_type_two);
        formData.append('product_type_three', salesSlipData.product_type_three);
        formData.append('product_type_four', salesSlipData.product_type_four);
        formData.append('product_name', salesSlipData.product_name);
        formData.append('quantity', salesSlipData.quantity);
        formData.append('reason_application', salesSlipData.reason_application);
        formData.append('interest_rate', salesSlipData.interest_rate);
        formData.append('product_price', salesSlipData.product_price);
        formData.append('highest_estimate_vendor', salesSlipData.maxKey);
        formData.append('highest_estimate_price', salesSlipData.maxValue);
        formData.append('number_of_vendor', salesSlipData.number_of_vendor);
        formData.append('supervisor_direction', salesSlipData.supervisor_direction);
        formData.append('purchase_result', salesSlipData.purchase_result);
        formData.append('purchase_price', salesSlipData.purchase_price);

        formData.append('gold_type', salesSlipData.gold_type);
        formData.append('gross_weight', salesSlipData.gross_weight);
        formData.append('price_gram', salesSlipData.price_gram);
        formData.append('serial_number', salesSlipData.serial_number);
        formData.append('action_type', salesSlipData.action_type);
        formData.append('movable', salesSlipData.movable);
        formData.append('tester', salesSlipData.tester);
        formData.append('model_number_one', salesSlipData.model_number_one);
        formData.append('box_guarantee', salesSlipData.box_guarantee);
        formData.append('rank', salesSlipData.rank);
        formData.append('brand', salesSlipData.brand);
        formData.append('capacity', salesSlipData.capacity);
        formData.append('percent', salesSlipData.percent);
        formData.append('notes', salesSlipData.notes);

        formData.append('invoiceID', invoiceID);

        formData.append('estimate_wholesaler', JSON.stringify(estimateValues));
        formData.append('comment', '{"question1":"","comment1":"","question2":"","comment2":"","buyyear":"","buymonth":"","comment3":"","question4":"","comment4":""}');

        if (sendFile) formData.append('product_photo', sendFile);
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }

            await axios.post(`${wakabaBaseUrl}/purchaseinvoice/create`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                const invoiceData = response.data;
                if (invoiceData?.length > 0) {
                    const updatedData111 = invoiceData.map((data, Index) => ({
                        ...data,
                        estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                        comment: JSON.parse(data.comment),
                    }));
                    setTotalSalesSlipData(updatedData111);
                    toast.success('データが正常に作成されました！', { autoClose: 3000 });
                    setItemsImagePreview(`${wakabaBaseUrl}/uploads/product/${response.data[0].entire_items_url}`);
                    setItemsDocPreview(`${wakabaBaseUrl}/uploads/product/${response.data[0].document_url}`);
                }
                setShowInputPurchase(false);
                setSalesSlipData({
                    trading_date: salesSlipData.trading_date,
                    number: '',
                    purchase_staff: salesSlipData.purchase_staff,
                    purchase_staff_id: userId,
                    customer_id: salesSlipData.customer_id,
                    store_name: salesSlipData.store_name,
                    hearing: salesSlipData.hearing,
                    product_type_one: '',
                    product_type_two: '',
                    product_type_three: '',
                    product_type_four: '',

                    gold_type: '',
                    gross_weight: '',
                    price_gram: '',
                    serial_number: '',
                    action_type: '',
                    movable: '',
                    tester: '',
                    model_number_one: '',
                    box_guarantee: '',
                    rank: '',
                    brand: '',
                    capacity: '',
                    percent: '',
                    notes: '',

                    product_photo: '',
                    product_name: '',
                    comment: '',
                    quantity: '0',
                    reason_application: '',
                    interest_rate: '0',
                    product_price: '0',
                    highest_estimate_vendor: '',
                    highest_estimate_price: '0',
                    number_of_vendor: '',
                    supervisor_direction: '',
                    purchase_result: '',
                    purchase_price: '0',
                    estimate_wholesaler: '',
                });
                setEstimateValues({});
            })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        } catch (error) {
            console.error('Error sending message:', error);
        }



    }

    //Edit one of tatalsalesSlipdata
    const editSalesItem = (index) => {

        setShowInputPurchase(!showInputPurchase);
        setEditIndex(index);
        setSalesSlipData(totalSalesSlipData[index]); // Populate the input fields with the selected row's data
        setEstimateValues(totalSalesSlipData[index].estimate_wholesaler);
        if (totalSalesSlipData[index].product_type_one) {
            const selectedResult = product1s.find(product => product.category === totalSalesSlipData[index].product_type_one);
            getVendorList(selectedResult.id);
        }
    };
    //Save one of tatalsalesSlipdata
    const saveSalesItem = async () => {
        setShowInputPurchase(!showInputPurchase);
        // const updatedData = totalSalesSlipData.map((row, index) =>
        //     index === editIndex ? { ...row, ...salesSlipData } : row
        // );
        // setTotalSalesSlipData(updatedData);

        let maxValue = 0; // Start with 0
        let maxKey = ''; // To store the corresponding key
        let hasValidValue = false; // Flag to check if there's any valid value

        Object.entries(estimateValues).forEach(([key, value]) => {
            let currentValue;

            if (value.includes('~')) {
                const [minValue] = value.split('~').map(Number);
                currentValue = Math.floor(minValue); // Ensure it's an integer
            } else if (value) {
                currentValue = Math.floor(Number(value)); // Ensure it's an integer
            } else {
                currentValue = 0; // Non-valid value
            }

            if (currentValue !== null && currentValue >= 0) {
                hasValidValue = true; // Mark that we have a valid value

                if (currentValue > maxValue) {
                    maxValue = currentValue;
                    maxKey = key; // Update corresponding key
                }
            }
        });
        const formData = new FormData();
        formData.append('userStoreName', userStoreName);
        formData.append('id', salesSlipData.id);
        formData.append('trading_date', salesSlipData.trading_date);
        formData.append('number', salesSlipData.number);
        formData.append('purchase_staff', salesSlipData.purchase_staff);
        formData.append('payment_staff', staffData.payment_staff);
        formData.append('purchase_staff_id', salesSlipData.purchase_staff_id);
        formData.append('customer_id', salesSlipData.customer_id);
        formData.append('store_name', salesSlipData.store_name);
        formData.append('hearing', salesSlipData.hearing);
        formData.append('product_type_one', salesSlipData.product_type_one);
        formData.append('product_type_two', salesSlipData.product_type_two);
        formData.append('product_type_three', salesSlipData.product_type_three);
        formData.append('product_type_four', salesSlipData.product_type_four);
        formData.append('product_name', salesSlipData.product_name);
        formData.append('quantity', salesSlipData.quantity);
        formData.append('reason_application', salesSlipData.reason_application);
        formData.append('interest_rate', salesSlipData.interest_rate);
        formData.append('product_price', salesSlipData.product_price);
        formData.append('highest_estimate_vendor', maxKey);
        formData.append('highest_estimate_price', maxValue);
        formData.append('number_of_vendor', salesSlipData.number_of_vendor);
        formData.append('supervisor_direction', salesSlipData.supervisor_direction);
        formData.append('purchase_result', salesSlipData.purchase_result);
        formData.append('purchase_price', salesSlipData.purchase_price);

        formData.append('gold_type', salesSlipData.gold_type);
        formData.append('gross_weight', salesSlipData.gross_weight);
        formData.append('price_gram', salesSlipData.price_gram);
        formData.append('serial_number', salesSlipData.serial_number);
        formData.append('action_type', salesSlipData.action_type);
        formData.append('movable', salesSlipData.movable);
        formData.append('tester', salesSlipData.tester);
        formData.append('model_number_one', salesSlipData.model_number_one);
        formData.append('box_guarantee', salesSlipData.box_guarantee);
        formData.append('rank', salesSlipData.rank);
        formData.append('brand', salesSlipData.brand);
        formData.append('capacity', salesSlipData.capacity);
        formData.append('percent', salesSlipData.percent);
        formData.append('notes', salesSlipData.notes);

        formData.append('estimate_wholesaler', JSON.stringify(estimateValues));

        if (sendFile) formData.append('product_photo', sendFile);
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }

            await axios.post(`${wakabaBaseUrl}/purchaseinvoice/update`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => {
                const invoiceData = response.data;
                if (invoiceData?.length > 0) {
                    const updatedData111 = invoiceData.map((data, Index) => ({
                        ...data,
                        estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                        comment: JSON.parse(data.comment),
                    }));
                    setTotalSalesSlipData(updatedData111);
                    toast.success('変更が正常に保存されました！', { autoClose: 3000 });
                    setItemsImagePreview(`${wakabaBaseUrl}/uploads/product/${response.data[0].entire_items_url}`);
                    setItemsDocPreview(`${wakabaBaseUrl}/uploads/product/${response.data[0].document_url}`);
                }
                setShowInputPurchase(false);
                setSalesSlipData({
                    trading_date: salesSlipData.trading_date,
                    number: '',
                    purchase_staff: salesSlipData.purchase_staff,
                    purchase_staff_id: userId,
                    customer_id: salesSlipData.customer_id,
                    store_name: salesSlipData.store_name,
                    hearing: salesSlipData.hearing,
                    product_type_one: '',
                    product_type_two: '',
                    product_type_three: '',
                    product_type_four: '',

                    gold_type: '',
                    gross_weight: '',
                    price_gram: '',
                    serial_number: '',
                    action_type: '',
                    movable: '',
                    tester: '',
                    model_number_one: '',
                    box_guarantee: '',
                    rank: '',
                    brand: '',
                    capacity: '',
                    percent: '',
                    notes: '',

                    product_photo: '',
                    product_name: '',
                    comment: '',
                    quantity: '0',
                    reason_application: '',
                    interest_rate: '0',
                    product_price: '0',
                    highest_estimate_vendor: '',
                    highest_estimate_price: '0',
                    number_of_vendor: '',
                    supervisor_direction: '',
                    purchase_result: '',
                    purchase_price: '0',
                    estimate_wholesaler: '',
                });
                setEstimateValues({});
                setEditIndex(-1); // Exit edit mode
            })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        } catch (error) {
            console.error('Error sending message:', error);
        }

        setEditIndex(-1); // Exit edit mode
    };
    //Cancel one of tatalsalesSlipdata
    const cancelSalesItem = () => {
        setShowInputPurchase(!showInputPurchase);
        setEditIndex(-1);
        setSalesSlipData({
            trading_date: salesSlipData.trading_date,
            number: '',
            purchase_staff: salesSlipData.purchase_staff,
            purchase_staff_id: userId,
            customer_id: salesSlipData.customer_id,
            store_name: salesSlipData.store_name,
            hearing: salesSlipData.hearing,
            product_type_one: '',
            product_type_two: '',
            product_type_three: '',
            product_type_four: '',

            gold_type: '',
            gross_weight: '',
            price_gram: '',
            serial_number: '',
            action_type: '',
            movable: '',
            tester: '',
            model_number_one: '',
            box_guarantee: '',
            rank: '',
            brand: '',
            capacity: '',
            percent: '',
            notes: '',

            product_photo: '',
            product_name: '',
            comment: '',
            quantity: '0',
            reason_application: '',
            interest_rate: '0',
            product_price: '0',
            highest_estimate_vendor: '',
            highest_estimate_price: '0',
            number_of_vendor: '',
            supervisor_direction: '',
            purchase_result: '',
            purchase_price: '0',
            estimate_wholesaler: '',
        });
        setVendors([]);
    };
    //delete one of tatalsaleSlipdata
    const removeSalesItem = async (itemid) => {
        // setTotalSalesSlipData(totalSalesSlipData.filter((_, i) => i !== index));
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.post(`${wakabaBaseUrl}/purchaseinvoice/delete`, { id: itemid, customerId: id, userId: userId, userStoreName: userStoreName })
                .then(response => {
                    toast.success('データが正常に削除されました！', { autoClose: 3000 });//remove
                    const invoiceData = response.data;
                    if (invoiceData?.length > 0) {
                        const updatedData111 = invoiceData.map((data, Index) => ({
                            ...data,
                            estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                            comment: JSON.parse(data.comment),
                        }));
                        setTotalSalesSlipData(updatedData111);
                        setItemsImagePreview(`${wakabaBaseUrl}/uploads/product/${response.data[0].entire_items_url}`);
                        setItemsDocPreview(`${wakabaBaseUrl}/uploads/product/${response.data[0].document_url}`);
                    }else {
                        setTotalSalesSlipData([]);
                    }
                    setShowInputPurchase(false);
                    setSalesSlipData({
                        trading_date: salesSlipData.trading_date,
                        number: '',
                        purchase_staff: salesSlipData.purchase_staff,
                        purchase_staff_id: userId,
                        customer_id: salesSlipData.customer_id,
                        store_name: salesSlipData.store_name,
                        hearing: salesSlipData.hearing,
                        product_type_one: '',
                        product_type_two: '',
                        product_type_three: '',
                        product_type_four: '',

                        gold_type: '',
                        gross_weight: '',
                        price_gram: '',
                        serial_number: '',
                        action_type: '',
                        movable: '',
                        tester: '',
                        model_number_one: '',
                        box_guarantee: '',
                        rank: '',
                        brand: '',
                        capacity: '',
                        percent: '',
                        notes: '',

                        product_photo: '',
                        product_name: '',
                        comment: '',
                        quantity: '0',
                        reason_application: '',
                        interest_rate: '0',
                        product_price: '0',
                        highest_estimate_vendor: '',
                        highest_estimate_price: '0',
                        number_of_vendor: '',
                        supervisor_direction: '',
                        purchase_result: '',
                        purchase_price: '0',
                        estimate_wholesaler: '',
                    });
                    setEstimateValues({});
                    setEditIndex(-1); // Exit edit mode
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    //click all clear button
    const allClear = async () => {
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const payload = totalSalesSlipData;
            await axios.post(`${wakabaBaseUrl}/purchaseinvoice/alldelete`, { payload: payload })
                .then(response => {
                    setTotalSalesSlipData([]);
                    setShowInputPurchase(false);
                    setEstimateValues({});
                    setEditIndex(-1); // Exit edit mode
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }

    const customerID = id;
    // send Purchase data tocusotmer receipt
    const sendPurchaseDataToReceipt = () => {
        const numberOfInvoice = invoiceID;
        const purchaseData = { numberOfInvoice, totalSalesSlipData, customerID };
        // console.log('send purchase data',purchaseData,id);
        updateData(purchaseData);
        navigate('/customerreceipt');

    }

    const sendPurchaseData = () => {
        //---------
        if (totalSalesSlipData?.length > 0) {
            const numberOfInvoice = invoiceID;

            if (totalSalesSlipData.length != 0 && totalSalesSlipData != null) {
                itemsSave();
                const purchaseData = { customerID, numberOfInvoice, totalSalesSlipData, stampData };
                //console.log('send purchase data', purchaseData, id);
                updateData(purchaseData);// to sign page using redux
                navigate('/purchaseinvoiceforbroughtinitems');
            }
        }


    }

    //const [isOpen, setIsOpen] = useState(false);
    const [isshow, setIsShow] = useState(false);

    const openSubtable = () => {
        // setIsOpen(true);
        setIsShow(false);
    };

    const closeSubtable = () => {
        // setIsOpen(false);
        setIsShow(true);
    };
    //   const [isOpen, setIsOpen] = useState(false);
    const [isvendorshow, setIsVendorShow] = useState(false);

    const openVendortable = () => {
        // setIsOpen(true);
        setIsVendorShow(false);
    };

    const closeVendortable = () => {
        // setIsOpen(false);
        setIsVendorShow(true);
    };

    // file upload
    const [sendFile, setSendFile] = useState(null);
    const sendInputRef = useRef(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Create a URL for the file to display as a preview
            const fileURL = URL.createObjectURL(file);
        }
        setSendFile(event.target.files[0]);
        setSalesSlipData({
            ...salesSlipData,
            ['product_photo']: file,
        });
    };

    const handleButtonClick = (sendInputRef) => {
        sendInputRef.current.click();
    };

    const [novelty_items, setNoveltyItems] = useState([]);
    const [cupon_items, setCuponItems] = useState([]);

    const [totalQuantity, setTotalQuantity] = useState('');
    const [totalPrice, setTotalPrice] = useState('');

    // Calculate total quantity
    const calculateTotalQuantity = () => {
        const total = totalSalesSlipData.reduce((sum, item) => parseInt(sum) + (parseInt(item.quantity) || 0), 0);
        setTotalQuantity(total);
    };

    // Calculate total price
    const calculateTotalPrice = () => {
        const total = totalSalesSlipData.reduce((sum, item) => parseInt(sum) + (parseInt(parseInt(item.purchase_price) * parseInt(item.quantity)) || 0), 0);
        setTotalPrice(total);
    };

    useEffect(() => {
        calculateTotalQuantity();
        calculateTotalPrice();
    }, [totalSalesSlipData]);

    const [totalSales, setTotalSales] = useState('');
    const [totalPurchasePrice, setTotalPurchasePrice] = useState('');
    const [totalGrossProfit, setTotalGrossProfit] = useState('');
    // calculate total sales
    const calculateTotalSales = () => {
        const total = customerPastVisitHistory.reduce((sum, item) => parseInt(sum) + (parseInt(item.total_sales) || 0), 0);
        setTotalSales(total);
    };

    // Calculate total purchase price
    const calculateTotalpurchasePrice = () => {
        const total = customerPastVisitHistory.reduce((sum, item) => parseInt(sum) + (parseInt(item.total_purchase_price) || 0), 0);
        setTotalPurchasePrice(total);
    };

    // Calculate total purchase price
    const calculateTotalGrossProfit = () => {
        const total = customerPastVisitHistory.reduce((sum, item) => parseInt(sum) + (parseInt(item.total_gross_profit) || 0), 0);
        setTotalGrossProfit(total);
    };

    useEffect(() => {
        calculateTotalSales();
        calculateTotalpurchasePrice();
        calculateTotalGrossProfit();
    }, [customerPastVisitHistory]);

    //---------product comment related content-----------------------------
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [editRow, setEditRow] = useState({ comment: '' });
    const [modalValue, setModalValue] = useState({
        question1: '',
        comment1: '',
        question2: '',
        comment2: '',
        buyyear: currentyear,
        buymonth: currentmonth,
        comment3: '',
        question4: '',
        comment4: '',
    });

    const modalRef = useRef(null);

    const handleProductClick = (item) => {
        setSelectedProduct(item);
        // setModalValue(item);
        setShowModal(true);
        setEditRow(totalSalesSlipData[item]);
    };
    const handleModalClose = () => {
        setShowModal(false);
        setEditRow('');
    };

    const handleCommentChange = (e) => {
        const { name, value } = e.target;
        setModalValue({ ...modalValue, [name]: value });
    };

    const handleMouseOver = (item) => {
        const tooltip = document.getElementById(`tooltip-${item}`);
        if (tooltip) {
            tooltip.style.display = 'block';
        }
    };
    const handleMouseOut = (item) => {
        const tooltip = document.getElementById(`tooltip-${item}`);
        if (tooltip) {
            tooltip.style.display = 'none';
        }
    };

    const handleCommentSave = async () => {
        // const updatedData = totalSalesSlipData.map((row, index) =>
        //     index === selectedProduct ? { ...row, ...editRow } : row
        // );
        // setTotalSalesSlipData(updatedData);
        const commentData = JSON.stringify(modalValue);
        //('modalValue',commentData)
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const payload = editRow;
            //console.log('payload',payload)
            await axios.post(`${wakabaBaseUrl}/purchaseinvoice/commentsave`, { payload: payload, commentData: commentData, userId: userId, userStoreName: userStoreName })
                .then(response => {
                    const invoiceData = response.data;
                    if (invoiceData?.length > 0) {
                        const updatedData111 = invoiceData.map((data, Index) => ({
                            ...data,
                            estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                            comment: JSON.parse(data.comment),
                        }));
                        setTotalSalesSlipData(updatedData111);

                        setItemsImagePreview(`${wakabaBaseUrl}/uploads/product/${response.data[0].entire_items_url}`);
                        setItemsDocPreview(`${wakabaBaseUrl}/uploads/product/${response.data[0].document_url}`);
                    }
                    setSalesSlipData({
                        trading_date: salesSlipData.trading_date,
                        number: '',
                        purchase_staff: salesSlipData.purchase_staff,
                        purchase_staff_id: userId,
                        customer_id: salesSlipData.customer_id,
                        store_name: salesSlipData.store_name,
                        hearing: salesSlipData.hearing,
                        product_type_one: '',
                        product_type_two: '',
                        product_type_three: '',
                        product_type_four: '',

                        gold_type: '',
                        gross_weight: '',
                        price_gram: '',
                        serial_number: '',
                        action_type: '',
                        movable: '',
                        tester: '',
                        model_number_one: '',
                        box_guarantee: '',
                        rank: '',
                        brand: '',
                        capacity: '',
                        percent: '',
                        notes: '',

                        product_photo: '',
                        product_name: '',
                        comment: '',
                        quantity: '0',
                        reason_application: '',
                        interest_rate: '0',
                        product_price: '0',
                        highest_estimate_vendor: '',
                        highest_estimate_price: '0',
                        number_of_vendor: '',
                        supervisor_direction: '',
                        purchase_result: '',
                        purchase_price: '0',
                        estimate_wholesaler: '',
                    });
                    setShowInputPurchase(false);
                    setEstimateValues({});
                    setEditIndex(-1); // Exit edit mode
                    setModalValue({
                        question1: '',
                        comment1: '',
                        question2: '',
                        comment2: '',
                        buyyear: currentyear,
                        buymonth: currentmonth,
                        comment3: '',
                        question4: '',
                        comment4: '',
                    });
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        } catch (error) {
            console.error('Error sending message:', error);
        }
        handleModalClose();

    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // e.preventDefault(); // Prevent the default behavior (form submission)
            setEditRow((prev) => ({
                ...prev,
                comment: prev.comment // Add a newline character
            }));
            return;
        }
    };
    //---------------whole hearing control part---------------
    const [pairs, setPairs] = useState([
        { checked: false, value: '' },
        { checked: false, value: '' },
        { checked: false, value: '' },
        { checked: false, value: '' },
    ]);

    const [additionalCheckboxes, setAdditionalCheckboxes] = useState(Array(22).fill(false));

    // Array of labels corresponding to the additional checkboxes
    const additionalLabels = [
        '以前も利用したことがある',
        '店舗を見て',
        'インターネットを見て',
        '紹介されて',
        'ダイヤモンド',
        '色石',
        'ネックレス',
        '指輪',
        '時計',
        'ブランド品',
        '切手',
        '中国切手',
        '古銭',
        '金券',
        'テレカ',
        'カメラ',
        'スマートフォン',
        '食器',
        'ホビー',
        '楽器',
        '可',
        '不可'
    ];

    const itemLabels = [
        'Item 2 Label', // Label for item2
        'Item 3 Label', // Label for item3
        'Item 4 Label', // Label for item4
        'Item 5 Label'  // Label for item5
    ];

    const handlePairCheckboxChange = (index) => {
        const newPairs = [...pairs];
        newPairs[index].checked = !newPairs[index].checked;
        setPairs(newPairs);
    };

    const handleInputChange = (index, value) => {
        const newPairs = [...pairs];
        newPairs[index].value = value;
        setPairs(newPairs);
    };

    const handleAdditionalCheckboxChange = (index) => {
        const newCheckboxes = [...additionalCheckboxes];
        newCheckboxes[index] = !newCheckboxes[index];
        setAdditionalCheckboxes(newCheckboxes);
    };

    const handleSubmit = () => {
        const updatedCustomer = { ...customer };
        const checkedValues = [];

        // Collect values for each pair
        pairs.forEach((pair, i) => {
            if (pair.checked) {
                checkedValues.push({ label: additionalLabels[i], value: pair.value });

                // Update customer state based on index
                updatedCustomer[`item${i + 2}`] = pair.value; // item2 to item5
            }
        });

        // Collect additional checked checkboxes
        const additionalChecked = [];
        additionalCheckboxes.forEach((isChecked, i) => {
            if (isChecked) {
                additionalChecked.push({ label: additionalLabels[i], index: i + 1 });
            }
        });

        // Set additionalChecked in the customer state
        updatedCustomer.item1 = additionalChecked.map(item => item.label);

        // Finally, set the updated customer state
        setCustomer(updatedCustomer);
    };

    useEffect(() => {
        handleSubmit();
    }, [pairs, additionalCheckboxes]);

    const checkedFunction = (item1, item2, item3, item4, item5) => {
        if (item1?.length > 0) {
            const array = item1.split(',').map(Number);
            setAdditionalCheckboxes(array);
            updateValueAtIndex(0, item2);
            updateValueAtIndex(1, item3);
            updateValueAtIndex(2, item4);
            updateValueAtIndex(3, item5);

            // Collecting the labels and input values
            const checkedLabelsAndValues = [];

            // Add labels and values for additional checkboxes
            array.forEach((index) => {
                if (index < additionalLabels.length) {
                    checkedLabelsAndValues.push({
                        label: additionalLabels[index],
                        checked: true,
                    });
                }
            });

            const items = [item2, item3, item4, item5];
            items.forEach((item, index) => {
                updateValueAtIndex(index, item); // Update state
                if (item && item !== '') {
                    checkedLabelsAndValues.push({ label: itemLabels[index], value: item });
                }
            });
            // Log or return the checked labels and values
            console.log('Checked Labels and Values:', checkedLabelsAndValues);
            return checkedLabelsAndValues;
        }
        return [];
    };

    const updateValueAtIndex = (index, newValue) => {
        setPairs(prevPairs => {
            const newPairs = [...prevPairs];
            newPairs[index] = { ...newPairs[index], checked: true, value: newValue };
            return newPairs;
        });
    };

    // Save function
    const itemsSave = () => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.post(`${wakabaBaseUrl}/customer/updatecustomeritem`, customer)
            .then(response => {
                console.log('Customer data updated successfully:', response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    };

    //--------------------------------------------------------
    //go to stamps related page #62(stamp related purchase statement)
    const gotoStampsPurchase = () => {
        sendCustomerId(id);//send customerId
        navigate(`/stamprelatedpurchasestatement/${id}?invoiceID=${invoiceID}`);
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

    //----------------modal items photo and document upload----------------------
    const [showItemsImage, setShowItemsImage] = useState(false);
    const openItemsImageModal = () => {
        setShowItemsImage(true);
    }
    const closeItemsImageModal = () => {
        setShowItemsImage(false);
    }

    const [showItemsDoc, setShowItemsDoc] = useState(false);
    const openItemsDocModal = () => {
        setShowItemsDoc(true);
    }
    const closeItemsDocModal = () => {
        setShowItemsDoc(false);
    }

    const [showAllClear, setShowAllClear] = useState(false);
    const openShowAllClearModal = () => {
        setShowAllClear(true);
    }
    const closeShowAllClearModal = () => {
        setShowAllClear(false);
    }

    // //file upload
    const [itemsImageFile, setItemsImageFile] = useState(null);
    const [itemsDocFile, setItemsDocFile] = useState(null);

    const itemsImageInputRef = useRef(null);
    const itemsDocInputRef = useRef(null);

    const handleItemsFileChange = (event, setFile, setImagePreview) => {
        const file = event.target.files[0];
        if (file) {
            // Create a URL for the file to display as a preview
            const fileURL = URL.createObjectURL(file);
            setImagePreview(fileURL);
        }
        setFile(event.target.files[0]);
    };
    const handleItemsDocFileChange = (event, setFile, setItemsDocPreview) => {
        const file = event.target.files[0];
        if (file) {
            // Create a URL for the file to display as a preview
            const fileURL = URL.createObjectURL(file);
            setItemsDocPreview(fileURL);
        }
        setFile(event.target.files[0]);
    };
    const handleItemsButtonClick = (inputRef) => {
        inputRef.current.click();
    };
    const [itemsImagePreview, setItemsImagePreview] = useState("");
    const [itemsImageDocPreview, setItemsDocPreview] = useState("");

    const itemsImageUpload = async () => {
        const formDataObj = new FormData();

        const ids = totalSalesSlipData.map(obj => obj.id);
        formDataObj.append('ids', ids);
        formDataObj.append('customer_id', id);
        formDataObj.append('purchase_staff_id', userId);
        formDataObj.append('store_name', userStoreName);

        if (itemsImageFile) formDataObj.append('entire_items_url', itemsImageFile);
        if (itemsDocFile) formDataObj.append('document_url', itemsDocFile);
        //console.log('ids',ids,userStoreName,userId,id)
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const response = await axios.post(`${wakabaBaseUrl}/purchaseinvoice/uploadimage`, formDataObj,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            const invoiceData = response.data;
            if (invoiceData?.length > 0) {
                const updatedData111 = invoiceData.map((data, Index) => ({
                    ...data,
                    estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                    comment: JSON.parse(data.comment),
                }));
                setTotalSalesSlipData(updatedData111);

                setShowItemsImage(false);
                setShowItemsDoc(false);

                setItemsImagePreview(`${wakabaBaseUrl}/uploads/product/${response.data[0].entire_items_url}`);
                setItemsDocPreview(`${wakabaBaseUrl}/uploads/product/${response.data[0].document_url}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error here
        }
    };
    //-----------------------------------approve waiting---------------------------------------
    const handleApproveWaiting = async () => {
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            if (totalSalesSlipData?.length > 0) {
                const ids = totalSalesSlipData.map(obj => obj.id);
                await axios.post(`${wakabaBaseUrl}/purchaseinvoice/approveWaiting`, { ids: ids })
                    .then(response => {
                        const invoiceData = response.data;
                        if (invoiceData?.length > 0) {
                            const updatedData111 = invoiceData.map((data, Index) => ({
                                ...data,
                                estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                            }));
                            setTotalSalesSlipData(updatedData111);

                            setItemsImagePreview(`${wakabaBaseUrl}/uploads/product/${response.data[0].entire_items_url}`);
                            setItemsDocPreview(`${wakabaBaseUrl}/uploads/product/${response.data[0].document_url}`);
                        }
                        toast.success('リクエストが正常に送信されました！', { autoClose: 3000 });
                        navigate('/invoiceforpurchaselist');
                    })
                    .catch(error => {
                        console.error("There was an error fetching the customer data!", error);
                    }); // Send newRow data to the server
            }
        } catch (error) {
            console.error('Error adding row:', error);
        }
    }
    //permission click status change to send signature
    const purchasePermission = async () => {
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const ids = totalSalesSlipData.map(obj => obj.id);
            await axios.post(`${wakabaBaseUrl}/purchaseinvoice/purchasepermit`, { ids: ids, id: id, userId: userId, userStoreName: userStoreName })
                .then(response => {
                    const invoiceData = response.data;
                    if (invoiceData?.length > 0) {
                        const updatedData111 = invoiceData.map((data, Index) => ({
                            ...data,
                            estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                            comment: JSON.parse(data.comment),
                        }));
                        setTotalSalesSlipData(updatedData111);

                        setItemsImagePreview(`${wakabaBaseUrl}/uploads/product/${response.data[0].entire_items_url}`);
                        setItemsDocPreview(`${wakabaBaseUrl}/uploads/product/${response.data[0].document_url}`);
                    }
                    setPermissionSuccess(true);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                }); // Send newRow data to the server
        } catch (error) {
            console.error('Error adding row:', error);
        }
    }
    //permission success modal
    const [pemissionSuccess, setPermissionSuccess] = useState(false);
    const closePermissionSuccess = () => {
        setPermissionSuccess(false);
    }
    //----------------------------------show vendor assessment modal----------------------------------------
    const [showEstimate, setShowEstimate] = useState(false);
    const openEstimate = (index) => {
        setShowEstimate(true);

        //setShowInputPurchase(!showInputPurchase);
        // setEditIndex(index);
        //console.log('selectedtotalSalesData',totalSalesSlipData[index])
        setSalesSlipData(totalSalesSlipData[index]); // Populate the input fields with the selected row's data
        setEstimateValues(totalSalesSlipData[index].estimate_wholesaler);
        if (totalSalesSlipData[index].product_type_one) {
            const selectedResult = product1s.find(product => product.category === totalSalesSlipData[index].product_type_one);
            //console.log('selectedResult',selectedResult)
            getVendorList(selectedResult.id);
        }

    }
    const saveEstimate = () => {
        setShowEstimate(false);
        saveSalesItem();
    }
    //-----------------------------------item detail---------------------------------------
    const [isDetailShow, setIsDetailShow] = useState(false);
    const openItemDetailShow = () => {
        setIsDetailShow(!isDetailShow)
    }
    //----------------------------------create data----------------------------------------
    const handleInvoiceForPurchaseData = () => {
        // console.log('dfafafafasfas',salesSlipData)
        if (salesSlipData.id) {
            //console.log('edit')
            saveSalesItem();

        } else {
            //console.log('add')
            addSlesItem();
        }
    }
    //------------------------------------precious metal--------------------------------------
    const [preciousMetalData, setPreciousMetalData] = useState([]);
    useEffect(() => {
        const url = "https://gold.tanaka.co.jp/retanaka/price/";
        fetch(url)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");

                const priceTables = doc.querySelectorAll("table.price_table");
                const data = [];

                priceTables.forEach(table => {
                    const rows = table.querySelectorAll("tbody tr");
                    rows.forEach(row => {
                        const cols = row.querySelectorAll("th, td");
                        if (cols.length > 1) {
                            const name = cols[0].textContent.trim();
                            const price = cols[1].textContent.trim();
                            data.push({ name, price });
                        }
                    });
                });
                setPreciousMetalData(data);
            })
            .catch(error => console.log(error));
    }, []);
    //-----------------------------------------brand capacity percent----------------------------------------------
    const brandValues = [
        'ウイスキー',
        '生酒',
        'スパークリングワイン',
        'ウィスキー',
        'リキュール',
        'ブランデー',
        'ワイン',
        'コニャック',
        '銘柄',
        '焼酎',
        '紹興酒',
        '清酒'
    ];
    const capacityValues = ['700', '750'];
    const percentValues = ['40%', '43%'];
    //---------------------------------------------------------------------------------------
    return (<>
        {/* <Titlebar title={title} /> */}
        <div className="bg-[trasparent] font-[sans-serif] w-full">
            <div className='flex justify-center w-full'>
                <div className="w-full">
                    <DateAndTime />
                    <div className="w-full flex justify-between" >
                        {/* new */}
                        <div style={{ width: '25%', }} className='flex align-center justify-center'>
                            <div className='flex flex-col justify-center'>
                                <div className='w-3 h-3 bg-[#70685a]'></div>
                            </div>
                            <div className='flex flex-col justify-center ml-2'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 !mb-0 flex">買取計算書No.{invoiceID || ''}</label>
                            </div>

                        </div>
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center !mt-0">新規買取計算書（承諾申請画面）</h2>
                        {/* new */}

                        <div style={{ width: '15%', visibility: 'hidden' }} className='flex align-center justify-center'>
                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 !mb-0">asdTWO</label>
                        </div>

                    </div>
                    <div className='flex w-full'>
                        <div className='w-full mt-2'>
                            <div className='invoice-purchase-brought flex justify-between'>
                                <div className='invoice-purchase-brought-buttons w-[50%] flex justify-around pr-10'>
                                    {totalSalesSlipData.length >0 && totalSalesSlipData[0].customer_receipt === '1' ? 
                                     <ButtonComponent children="預り証発行済" onClick={sendPurchaseDataToReceipt} className='w-max h-11 !px-5 bg-[transparent] !text-[#7fe374]' style={{ border: '1px solid #7fe374' }} />
                                     : <ButtonComponent children="預り証発行" onClick={sendPurchaseDataToReceipt} className='w-max h-11 !px-5 bg-[transparent] !text-[#e87a00]' style={{ border: '1px solid #e87a00' }} />
                                    }
                                    <ButtonComponent onClick={openItemsImageModal} children="全体撮影" className='w-max h-11 !px-5 bg-[transparent] !text-[#e87a00]' style={{ border: '1px solid #e87a00' }} />
                                    <ButtonComponent onClick={openItemsDocModal} children="紙書類撮影" className='w-max h-11 !px-5 bg-[transparent] !text-[#e87a00]' style={{ border: '1px solid #e87a00' }} />
                                </div>
                                <div className='invoice-purchase-brought-buttons w-[50%] ml-5 flex justify-around'>
                                    <ButtonComponent children="許可申請" onClick={handleApproveWaiting} className='w-max h-11 !px-5' style={{ color: 'white', }} />
                                    <div className='flex justify-center'>
                                        <button type="button" onClick={sendPurchaseData}
                                            className="h-11 min-w-[160px] text-[#e87a00] rounded-full tracking-wider font-bold outline-none border border-[2px] border-[#e87a00] ">
                                                お客様へ提示
                                        </button>
                                    </div>
                                    <div>
                                        <div className='flex'>
                                            <label className="text-[#70685a] font-bold mb-2 block text-right pt-1 mr-3  !mb-0">接客担当</label>
                                            <select name="purchase_staff" value={staffData.purchase_staff || username} onChange={handleStaffChange} className="w-40 h-8 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                                <option value=""></option>
                                                {users?.length > 0 && users.map((user) => (
                                                    <option key={user.fullname} value={user.fullname}>{user.fullname}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className='flex mt-2'>
                                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 pt-1 !mb-0">支払担当</label>
                                            <select name="payment_staff" value={staffData.payment_staff || ''} onChange={handleStaffChange} className="w-40 h-8 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                                <option value=""></option>
                                                {users?.length > 0 && users.map((user) => (
                                                    <option key={user.fullname} value={user.fullname}>{user.fullname}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="invoice-purchase-brought flex  justify-center ">
                <div className="w-full flex justify-center" >
                    <div className="w-full rounded-2xl">
                    <form className=" space-y-3">
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 !mb-0">本人確認書類</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px] outline-[#70685a]">マイナンバーカ一ド</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='!mb-0 flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 !mb-0">顧客番号</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-10 !mb-0">{customer.id || ''}</label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 !mb-0">VIP</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 !mb-0">お名前</label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px] outline-[#70685a]">{customer.full_name || ''}</label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 !mb-0">カタカナ</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 outline-[#70685a]">{customer.katakana_name || ''}</label>
                                </div>
                                <div style={{ width: '5%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 !mb-0">{customer.gender || ''}</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 !mb-0">電話番号</label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px] outline-[#70685a]">{customer.phone_number || ''}</label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 !mb-0">生年月日</label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 outline-[#70685a]">{customer.birthday || ''}</label>
                                </div>
                                <div style={{ width: '10%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 outline-[#70685a]">{customer.age || ''}才</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 !mb-0">ご住所</label>
                                </div>
                                <div style={{ width: '70%', }} className='flex justify-end'>
                                    <label className="w-full text-[#70685a] text-[20px]  outline-[#70685a]">{customer.address || ''}</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 !mb-0">ご職業</label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px] outline-[#70685a]">{customer.job || ''}</label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 !mb-0">E-mail</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 outline-[#70685a]">{customer.email || ''}</label>
                                </div>
                            </div>

                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 !mb-0">特記事項</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className=' relative group'>
                                    <label className="w-full text-[#70685a] text-[20px] outline-[#70685a] ellipsis">{customer.special_note || '盗品持ち込みの可能性があるため要注意'}</label>
                                    <div className="absolute shadow-lg hidden group-hover:block bg-[#333] text-white font-semibold px-3 py-[6px] text-[13px] left-0 mx-auto w-max -bottom-10 rounded before:w-4 before:h-4 before:rotate-45 before:bg-[#333] before:absolute before:z-[-1] before:-top-1 before:left-0  before:right-0 before:mx-auto">
                                        {customer.special_note || '盗品持ち込みの可能性があるため要注意'}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* textarea*/}
                <div className="w-full h-full flex justify-center">
                    <div className='w-full'>
                        {/* textarea First*/}
                        <div className='w-full flex justify-center'>
                            <div className=" h-full w-full">
                                {/* Text area */}
                                <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-10 py-1 !mb-0">過去の来店履歴</label>
                                <div className="h-[100px] px-3 w-full overflow-y-scroll">
                                    {customerPastVisitHistory.length !== 0 ?
                                        <div style={{ width: '100%', overflow: 'auto' }} >
                                            <table className='text-center w-full' style={Table}>
                                                <thead>
                                                    <tr>
                                                        <th className='whitespace-nowrap text-eclipse' width='5%'>来店回数 </th>
                                                        <th className='whitespace-nowrap' width='5%'></th>
                                                        <th className='whitespace-nowrap' width='5%'></th>
                                                        <th className='whitespace-nowrap' width='5%'></th>
                                                        <th className='whitespace-nowrap' width='5%'></th>
                                                        <th className='whitespace-nowrap' width='10%'>合計</th>
                                                        <th className='whitespace-nowrap' width='5%'>{(totalSales || 0).toLocaleString()}</th>
                                                        <th className='whitespace-nowrap' width='5%'>{(totalGrossProfit || 0).toLocaleString()}</th>
                                                        <th className='whitespace-nowrap' width='5%'>{(totalPurchasePrice || 0).toLocaleString()}</th>
                                                    </tr>
                                                    <tr>
                                                        <th className='whitespace-nowrap' width='5%'>{customerPastVisitHistory.length}</th>
                                                        <th className='whitespace-nowrap' width='5%'>来店日</th>
                                                        <th className='whitespace-nowrap' width='5%'>適用</th>
                                                        <th className='whitespace-nowrap' width='5%'>合計金額</th>
                                                        <th className='whitespace-nowrap' width='5%'>カテゴリ-1</th>
                                                        <th className='whitespace-nowrap' width='5%'>商品名</th>
                                                        <th className='whitespace-nowrap' width='5%'>売上総額</th>
                                                        <th className='whitespace-nowrap' width='5%'>粗利総額</th>
                                                        <th className='whitespace-nowrap' width='5%'>買取総額</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {customerPastVisitHistory?.length > 0 && customerPastVisitHistory.map((pastVisit, Index) => (
                                                        <tr key={Index}>
                                                            <td>
                                                                <div className='flex justify-center'>
                                                                    <div>{Index + 1}.</div>
                                                                    <div>
                                                                        <svg className="w-5 h-5 ml-1" fill='#70685a' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon" title="ContentCopy">
                                                                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td style={Td}>{pastVisit.visit_date}</td>
                                                            <td style={Td}>{pastVisit.applicable}</td>
                                                            <td style={Td}>{pastVisit.total_amount}</td>
                                                            <td style={Td}>{pastVisit.category}</td>
                                                            <td style={Td}>{pastVisit.product_name}</td>
                                                            <td style={Td} className='text-right'>{(pastVisit.total_sales || 0).toLocaleString()}</td>
                                                            <td style={Td}>{pastVisit.total_gross_profit}</td>
                                                            <td style={Td} className='text-right'>{(pastVisit.total_purchase_price || 0).toLocaleString()}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        : <div className='flex justify-center'>
                                            <label className="text-[#70685a] text-[18px] mb-2 block text-left mr-10 py-1">この顧客の訪問履歴は見つかりませんでした。</label>
                                        </div>}
                                </div>

                            </div>
                        </div>
                        {/* Text area */}
                        <div className='w-full flex justify-center'>
                            <div className=" h-full w-full mt-5">
                                {/* Text area */}
                                <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-10 py-1 !mb-0">アンケート</label>
                                <div className="px-3 w-full h-[170px]">
                                    <div>
                                        <div className='flex'>
                                            <label className="text-[#70685a] text-[18px] mb-2 block text-left mr-10 py-1">項目1</label>
                                            <label className="text-[#70685a] text-[18px] mb-2 block text-left mr-10 py-1 !mb-0">何を見てご来店いただきましたか？</label>
                                        </div>
                                        <div className='ml-20 text-[17px]'>
                                            <div className='flex justify-between'>
                                                {['以前も利用したことがある', '店舗を見て', 'インターネットを見て', '紹介されて'].map((label, index) => {
                                                    const id = `additional-checkbox-${index}`; // Unique ID for each checkbox
                                                    return (
                                                        <div className="flex items-center" key={index}>
                                                            <input
                                                                type="checkbox"
                                                                id={id}
                                                                checked={additionalCheckboxes[index]}
                                                                onChange={() => handleAdditionalCheckboxChange(index)}
                                                                className="w-4 h-4 mr-3"
                                                            />
                                                            <label htmlFor={id} className="text-[#70685a]">{label}</label>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="checkbox"
                                                    id="pair-checkbox-0"
                                                    checked={pairs[0].checked}
                                                    onChange={() => handlePairCheckboxChange(0)}
                                                    className="w-4 h-4 mr-3"
                                                />
                                                <label htmlFor="pair-checkbox-0" className="text-[#70685a] mr-3">店舗以外の看板・広告を見て</label>
                                                <InputComponent
                                                    value={pairs[0].value}
                                                    onChange={(e) => handleInputChange(0, e.target.value)}
                                                    disabled={!pairs[0].checked}
                                                    className="w-40 text-[#70685a] mb-2 block text-left mr-10 py-1 !mb-0 !h-8"
                                                    placeholder={'広告を見た場所'}
                                                />
                                            </div>
                                            <div className='flex gap-10'>
                                                {[
                                                    { label: '折込チラシを見て', placeholder: '新聞銘柄' },
                                                    { label: 'その他', placeholder: 'その他詳細' }
                                                ].map((item, index) => {
                                                    const id = `pair-checkbox-${index + 1}`; // Unique ID for each checkbox
                                                    return (
                                                        <div className="flex items-center" key={index}>
                                                            <input
                                                                type="checkbox"
                                                                id={id}
                                                                checked={pairs[index + 1].checked}
                                                                onChange={() => handlePairCheckboxChange(index + 1)}
                                                                className="w-4 h-4 mr-3"
                                                            />
                                                            <label htmlFor={id} className="text-[#70685a] mr-3">{item.label}</label>
                                                            <InputComponent
                                                                value={pairs[index + 1].value}
                                                                onChange={(e) => handleInputChange(index + 1, e.target.value)}
                                                                disabled={!pairs[index + 1].checked}
                                                                className="w-40 text-[#70685a] mb-2 block text-left mr-10 py-1 !mb-0 !h-8"
                                                                placeholder={item.placeholder}
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                    </div>
                                    <div style={{display:'none'}}>
                                        <div className='flex'>
                                            <label className="text-[#70685a] text-[18px] mb-2 block text-left mr-10 py-1">項目2</label>
                                            <label className="text-[#70685a] text-[18px] mb-2 block text-left mr-10 py-1 !mb-0">次回お持ちいただくご予定の商品はございますか？</label>
                                        </div>
                                        <div className='ml-20 text-[17px]'>
                                            <div className='flex flex-wrap gap-5'>
                                                {[
                                                    'ダイヤモンド',
                                                    '色石',
                                                    'ネックレス',
                                                    '指輪',
                                                    '時計',
                                                    'ブランド品',
                                                    '切手',
                                                    '中国切手',
                                                    '古銭',
                                                    '金券',
                                                    'テレカ',
                                                    'カメラ',
                                                    'スマートフォン',
                                                    '食器',
                                                    'ホビー',
                                                    '楽器'
                                                ].map((item, index) => {
                                                    const checkboxIndex = index + 4; // Adjust the index for additionalCheckboxes
                                                    const id = `checkbox-${checkboxIndex}`; // Unique ID for each checkbox
                                                    return (
                                                        <div className="flex items-center" key={id}>
                                                            <input
                                                                type="checkbox"
                                                                id={id}
                                                                className="w-4 h-4 mr-3"
                                                                checked={additionalCheckboxes[checkboxIndex] || false}
                                                                onChange={() => handleAdditionalCheckboxChange(checkboxIndex)}
                                                            />
                                                            <label htmlFor={id} className="text-[#70685a]">{item}</label>
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            <div className='flex items-center gap-5'>
                                                <input
                                                    type="checkbox"
                                                    id="pair-checkbox-3"
                                                    checked={pairs[3].checked}
                                                    onChange={() => handlePairCheckboxChange(3)}
                                                    className="w-4 h-4 mr-3"
                                                />
                                                <label htmlFor="pair-checkbox-3" className="text-[#70685a] mr-3">その他</label>
                                                <InputComponent
                                                    value={pairs[3].value}
                                                    onChange={(e) => handleInputChange(3, e.target.value)}
                                                    disabled={!pairs[3].checked}
                                                    className="w-40 text-[#70685a] mb-2 block text-left mr-10 py-1 !mb-0 !h-8"
                                                    placeholder={'その他詳細'}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div style={{display:'none'}}>
                                        <div className='flex'>
                                            <label className="text-[#70685a] text-[18px] mb-2 block text-left mr-10 py-1">項目3</label>
                                            <label className="text-[#70685a] text-[18px] mb-2 block text-left mr-10 py-1 !mb-0">(各種ご案内)の送付は  可/不可</label>
                                        </div>
                                        <div className='ml-20 mb-10'>
                                            <div className='flex gap-10 text-[17px]'>
                                                {[
                                                    { label: '可', index: 20 },
                                                    { label: '不可', index: 21 }
                                                ].map(({ label, index }) => {
                                                    const id = `checkbox-${index}`;
                                                    return (
                                                        <div className="flex items-center" key={id}>
                                                            <input
                                                                type="checkbox"
                                                                id={id}
                                                                className="w-4 h-4 mr-3"
                                                                checked={additionalCheckboxes[index] || false}
                                                                onChange={() => handleAdditionalCheckboxChange(index)}
                                                            />
                                                            <label htmlFor={id} className="text-[#70685a]">{label}</label>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-between mt-1'>
                <div>
                    <button type="button" onClick={gotoStampsPurchase}
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-bold border border-[#70685a] outline-none bg-transparent hover:bg-[#524c3b] text-[#70685a] hover:text-white transition-all duration-300">
                        切手
                    </button>
                </div>
                <div>
                    <button type="button" onClick={openShowAllClearModal}
                        className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-bold border border-[#70685a] outline-none bg-transparent hover:bg-[#524c3b] text-[#70685a] hover:text-white transition-all duration-300">
                        すべてクリア
                    </button>
                </div>
            </div>
            {/* table */}
            <div className="flex justify-center mt-1">
                <div className='' style={{ width: '100%' }}>
                    <table className='text-center w-full' style={Table}>
                        <thead className='sticky top-0 bg-white z-10 h-11'>
                            <tr>
                                <th style={Th} width='1%'>選択</th>
                                <th style={Th} width='2%'>商品番号</th>
                                <th style={Th}>
                                    <div className='flex justify-center w-max'>
                                        力テゴリ1
                                        <div className='flex flex-col justify-center'>
                                            {isshow ? <button><img src={rightArrow} className='h-4' alt='' onClick={openSubtable} ></img></button> : <button><img src={leftArrow} className='h-4' alt='' onClick={closeSubtable}></img></button>}
                                        </div>
                                    </div>
                                </th>
                                {isshow ? <th style={Th} >力テゴリ2</th> : <th style={{ display: 'none' }}></th>}
                                {isshow ? <th style={Th} >力テゴリ3</th> : <th style={{ display: 'none' }}></th>}
                                {isshow ? <th style={Th} >力テゴリ4</th> : <th style={{ display: 'none' }}></th>}
                                <th style={Th} >画像</th>
                                <th style={Th}>
                                    <div className='w-full flex justify-center'>
                                        <div className='flex w-20'>
                                            商品名
                                            <div className='flex flex-col justify-center'>
                                                {isDetailShow ? <button><img src={rightArrow} className='h-4' alt='' onClick={openItemDetailShow} ></img></button> : <button><img src={leftArrow} className='h-4' alt='' onClick={openItemDetailShow}></img></button>}
                                            </div>
                                        </div>
                                    </div>
                                </th>
                                {isDetailShow ? <th style={Th} >金種</th> : <th style={{ display: 'none' }}></th>}
                                {isDetailShow ? <th style={Th} >総重量</th> : <th style={{ display: 'none' }}></th>}
                                {isDetailShow ? <th style={Th} >g/額面</th> : <th style={{ display: 'none' }}></th>}
                                {isDetailShow ? <th style={Th} >型番 </th> : <th style={{ display: 'none' }}></th>}
                                {isDetailShow ? <th style={Th} >シリアル</th> : <th style={{ display: 'none' }}></th>}
                                {isDetailShow ? <th style={Th} >駆動方式</th> : <th style={{ display: 'none' }}></th>}
                                {isDetailShow ? <th style={Th} >可動 </th> : <th style={{ display: 'none' }}></th>}
                                {isDetailShow ? <th style={Th} >テスター</th> : <th style={{ display: 'none' }}></th>}
                                {isDetailShow ? <th style={Th} >箱ギャラ</th> : <th style={{ display: 'none' }}></th>}
                                {isDetailShow ? <th style={Th} >ランク</th> : <th style={{ display: 'none' }}></th>}
                                {isDetailShow ? <th style={Th} >種類</th> : <th style={{ display: 'none' }}></th>}
                                {isDetailShow ? <th style={Th} >容量</th> : <th style={{ display: 'none' }}></th>}
                                {isDetailShow ? <th style={Th} >度数</th> : <th style={{ display: 'none' }}></th>}
                                {isDetailShow ? <th style={Th} >備考</th> : <th style={{ display: 'none' }}></th>}
                                <th style={Th} >個数</th>
                                <th style={Th} width='10%'>申請の根拠</th>
                                <th style={Th} >利率(%)</th>
                                {/* <th style={Th} >申請額</th> */}
                                <th style={Th} >買取額</th>
                                <th style={Th} >上司指示額</th>
                                <th style={Th} >最高査定業者</th>
                                <th style={Th} >最高査定額</th>
                                <th style={Th} >
                                    業者
                                    {/* {isvendorshow ? <button><img src={rightArrow} className='h-4' alt='' onClick={openVendortable} ></img></button> : <button><img src={leftArrow} className='h-4' alt='' onClick={closeVendortable}></img></button>} */}
                                </th>
                                {isvendorshow && allVendors.map((vendor, index) => (
                                    <th key={index} style={Th}>{vendor.vendor_name}</th>
                                ))}
                                <th style={Th} >結果</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='!h-6'>
                                <td></td>
                                <td style={Td}>
                                    <InputComponent name='number' onChange={handleChange} disabled={true} value={salesSlipData.id || ''} className='w-full h-8 text-[#70685a]' />
                                </td>
                                <td style={Td}>
                                    <select
                                        name="product_type_one"
                                        value={salesSlipData.product_type_one || ''}
                                        onChange={(e) => handleCategory1Change(e, product1s)}
                                        className='h-8 w-full'
                                    >
                                        <option value="" disabled>商品タイプ1</option>
                                        {product1s.map((option, index) => (
                                            <option key={option.id} value={option.category || ''}>
                                                {option.category || ''}
                                            </option>
                                        ))}
                                    </select>
                                </td>
                                {isshow ? <td style={Td}>
                                    <select
                                        name="product_type_two"
                                        value={salesSlipData.product_type_two || ''}
                                        onChange={handleChange}
                                        className='h-8 w-full'
                                    >
                                        <option value="" disabled>商品タイプ2</option>
                                        {product2s.map((option, index) => (
                                            <option key={index} value={option.category || ''}>
                                                {option.category || ''}
                                            </option>
                                        ))}
                                    </select>
                                </td> : <td style={{ display: 'none' }}></td>}
                                {isshow ? <td style={Td}>
                                    <input
                                        list="product3s"
                                        id="product_type_three"
                                        name="product_type_three"
                                        value={salesSlipData.product_type_three || ''}
                                        onChange={handleChange}
                                        className='h-8 w-full'
                                    />
                                    <datalist id="product3s">
                                        {product3s.map((option, index) => (
                                            <option key={index} value={option.category || ''} />
                                        ))}
                                    </datalist>
                                </td> : <td style={{ display: 'none' }}></td>}
                                {isshow ? <td style={Td}>
                                    <input
                                        list="product4s"
                                        id="product_type_four"
                                        name="product_type_four"
                                        value={salesSlipData.product_type_four || ''}
                                        onChange={handleChange}
                                        className='h-8 w-full'
                                    />
                                    <datalist id="product4s">
                                        {product4s.map((option, index) => (
                                            <option key={index} value={option.category || ''} />
                                        ))}
                                    </datalist>
                                </td> : <td style={{ display: 'none' }}></td>}
                                <td style={Td}>
                                    <div style={{ flexDirection: 'column', }} className='flex justify-center'>
                                        <div className='flex justify-center py-1'>
                                            < button type="button" onClick={() => handleButtonClick(sendInputRef)} className="w-7 flex justify-center">
                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeMedium svg-icon css-kry165 w-7" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CloudUploadOutlinedIcon" title="CloudUploadOutlined"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3M8 13h2.55v3h2.9v-3H16l-4-4z"></path></svg>
                                            </button>
                                            <input type="file" name="fileUrl" ref={sendInputRef} style={{ display: 'none' }} onChange={(e) => handleFileChange(e)} />
                                        </div>
                                    </div>
                                </td>
                                <td style={Td}>
                                    <InputComponent name='product_name' onChange={handleChange} value={salesSlipData.product_name || ''} className='w-full h-8 text-[#70685a]' />
                                </td>

                                {isDetailShow ? salesSlipData.product_type_one === '貴金属' ?
                                    <td style={Td}>
                                        <InputComponent name='gold_type' type='text' onChange={handleChange} value={salesSlipData.gold_type || ''} className='w-20 h-8 text-[#70685a]' />
                                    </td> : <td style={Td}></td>
                                    : <td style={{ display: 'none' }}></td>}
                                {isDetailShow ? salesSlipData.product_type_one === '貴金属' ?
                                    <td style={Td}>
                                        <InputComponent name='gross_weight' type='text' onChange={handleChange} value={salesSlipData.gross_weight || ''} className='w-20 h-8 text-[#70685a]' />
                                    </td> : <td style={Td}></td>
                                    : <td style={{ display: 'none' }}></td>}
                                {isDetailShow ? salesSlipData.product_type_one === '貴金属' ?
                                    <td style={Td}>
                                        <InputComponent name='price_gram' type='text' onChange={handleChange} value={salesSlipData.price_gram || ''} className='w-20 h-8 text-[#70685a]' />
                                    </td> : <td style={Td}></td>
                                    : <td style={{ display: 'none' }}></td>}
                                {isDetailShow ? (salesSlipData.product_type_one === '時計' || salesSlipData.product_type_one === 'バッグ'
                                    || salesSlipData.product_type_one === '財布' || salesSlipData.product_type_one === 'アクセサリー' || salesSlipData.product_type_one === 'カメラ') ?
                                    <td style={Td}>
                                        <InputComponent name='model_number_one' type='text' onChange={handleChange} value={salesSlipData.model_number_one || ''} className='w-20 h-8 text-[#70685a]' />
                                    </td> : <td style={Td}></td>
                                    : <td style={{ display: 'none' }}></td>}
                                {isDetailShow ? (salesSlipData.product_type_one === '時計' || salesSlipData.product_type_one === 'バッグ'
                                    || salesSlipData.product_type_one === '財布' || salesSlipData.product_type_one === 'カメラ' || salesSlipData.product_type_one === '楽器' || salesSlipData.product_type_one === 'スマホタブレット') ?
                                    <td style={Td}>
                                        <InputComponent name='serial_number' type='text' onChange={handleChange} value={salesSlipData.serial_number || ''} className='w-20 h-8 text-[#70685a]' />
                                    </td> : <td style={Td}></td>
                                    : <td style={{ display: 'none' }}></td>}
                                {isDetailShow ? salesSlipData.product_type_one === '時計' ?
                                    <td style={Td}>
                                        <InputComponent name='action_type' type='text' onChange={handleChange} value={salesSlipData.action_type || ''} className='w-20 h-8 text-[#70685a]' />
                                    </td> : <td style={Td}></td>
                                    : <td style={{ display: 'none' }}></td>}
                                {isDetailShow ? salesSlipData.product_type_one === '時計' ?
                                    <td style={Td}>
                                        <InputComponent name='movable' type='text' onChange={handleChange} value={salesSlipData.movable || ''} className='w-20 h-8 text-[#70685a]' />
                                    </td> : <td style={Td}></td>
                                    : <td style={{ display: 'none' }}></td>}
                                {isDetailShow ? salesSlipData.product_type_one === '時計' ?
                                    <td style={Td}>
                                        <InputComponent name='tester' type='text' onChange={handleChange} value={salesSlipData.tester || ''} className='w-20 h-8 text-[#70685a]' />
                                    </td> : <td style={Td}></td>
                                    : <td style={{ display: 'none' }}></td>}
                                {isDetailShow ? salesSlipData.product_type_one === '時計' ?
                                    <td style={Td}>
                                        <InputComponent name='box_guarantee' type='text' onChange={handleChange} value={salesSlipData.box_guarantee || ''} className='w-20 h-8 text-[#70685a]' />
                                    </td> : <td style={Td}></td>
                                    : <td style={{ display: 'none' }}></td>}
                                {isDetailShow ? (salesSlipData.product_type_one === '時計' || salesSlipData.product_type_one === 'アクセサリー' || salesSlipData.product_type_one === 'カメラ') ?
                                    <td style={Td}>
                                        <InputComponent name='rank' type='text' onChange={handleChange} value={salesSlipData.rank || ''} className='w-20 h-8 text-[#70685a]' />
                                    </td> : <td style={Td}></td>
                                    : <td style={{ display: 'none' }}></td>}
                                {isDetailShow ? salesSlipData.product_type_one === '洋酒' ?
                                    <td style={Td}>
                                        <InputComponent list='wine-brands' name='brand' type='text' onChange={handleChange} value={salesSlipData.brand || ''} className='w-20 h-8 text-[#70685a]' />
                                        <datalist id="wine-brands">
                                            {brandValues.map((brand, index) => (
                                                <option key={index} value={brand} />
                                            ))}
                                        </datalist>
                                    </td> : <td style={Td}></td>
                                    : <td style={{ display: 'none' }}></td>}
                                {isDetailShow ? salesSlipData.product_type_one === '洋酒' ?
                                    <td style={Td}>
                                        <InputComponent list='wine-capacities' name='capacity' type='text' onChange={handleChange} value={salesSlipData.capacity || ''} className='w-20 h-8 text-[#70685a]' />
                                        <datalist id="wine-capacities">
                                            {capacityValues.map((capacity, index) => (
                                                <option key={index} value={capacity} />
                                            ))}
                                        </datalist>
                                    </td> : <td style={Td}></td>
                                    : <td style={{ display: 'none' }}></td>}
                                {isDetailShow ? salesSlipData.product_type_one === '洋酒' ?
                                    <td style={Td}>
                                        <InputComponent list='wine-percents' name='percent' type='text' onChange={handleChange} value={salesSlipData.percent || ''} className='w-20 h-8 text-[#70685a]' />
                                        <datalist id="wine-percents">
                                            {percentValues.map((percent, index) => (
                                                <option key={index} value={percent} />
                                            ))}
                                        </datalist>
                                    </td> : <td style={Td}></td>
                                    : <td style={{ display: 'none' }}></td>}
                                {isDetailShow ?
                                    <td style={Td}>
                                        <InputComponent name='notes' type='text' onChange={handleChange} value={salesSlipData.notes || ''} className='w-20 h-8 text-[#70685a]' />
                                    </td>
                                    : <td style={{ display: 'none' }}></td>}

                                <td style={Td}>
                                    <InputComponent name='quantity' type='number' onChange={handleChange} value={salesSlipData.quantity || ''} className='w-40 h-8 text-[#70685a]' />
                                </td>
                                <td style={Td}>
                                    <InputComponent name='reason_application' onChange={handleChange} value={salesSlipData.reason_application || ''} className='w-full h-8 text-[#70685a]' />
                                </td>
                                <td style={Td}>
                                    <InputComponent name='interest_rate' type='number' onChange={handleChange} value={salesSlipData.interest_rate || ''} className='w-20 h-8 text-[#70685a]' />
                                </td>
                                <td style={Td}>
                                    <div className='w-full flex justify-center'>
                                        <InputComponent name='purchase_price' onChange={handleChange} type='number' value={salesSlipData.purchase_price || ''} className='w-40 h-8 text-[#70685a]' />
                                    </div>
                                </td>
                                <td style={Td}>
                                    <InputComponent name='supervisor_direction' onChange={handleChange} value={salesSlipData.supervisor_direction || ''} className='w-full h-8 text-[#70685a]' />
                                </td>
                                <td style={Td}>
                                    <InputComponent name='highest_estimate_vendor' onChange={handleChange} value={salesSlipData.highest_estimate_vendor || ''} className='w-full h-8 text-[#70685a]' disabled />
                                </td>
                                <td style={Td}>
                                    <InputComponent name='highest_estimate_price' type='number' onChange={handleChange} value={salesSlipData.highest_estimate_price || ''} className='w-full h-8 text-[#70685a]' disabled />
                                </td>
                                <td style={Td}>
                                    <InputComponent name='number_of_vendor' type='number' onChange={handleChange} value={salesSlipData.number_of_vendor || ''} className='w-20 h-8 text-[#70685a]' style={{ display: 'none' }} />
                                    <button type="button"
                                        className="w-10 px-3 py-1 rounded text-[#626373] tracking-wider font-semibold border border-[#70685a] bg-[#ebe5e1]">
                                        {salesSlipData.number_of_vendor || '0'}
                                    </button>
                                </td>
                                {isvendorshow && vendors?.length > 0 && vendors.map((vendor, index) => (
                                    <td style={Td} key={index}>
                                        <InputComponent name={vendor.vendor_name} onChange={(e) => handleEstimateChange(vendor.vendor_name, e.target.value)} value={estimateValues[vendor.vendor_name] || ''} className='w-full h-8 text-[#70685a] border border-[red]' />
                                    </td>
                                ))}
                                <td style={Td}>
                                    <select name="purchase_result" value={salesSlipData.purchase_result || ''} onChange={handleChange} className="w-full h-10 text-[#70685a] font-bold border border-[#70685a] outline-[#70685a]">
                                        <option value="" disabled></option>
                                        <option value="賛成">賛成</option>
                                        <option value="反対">反対</option>
                                    </select>
                                </td>
                                <td>
                                    <div>
                                        <button onClick={handleInvoiceForPurchaseData} className='w-7'>
                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <button onClick={cancelSalesItem} className='w-7'>
                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            {totalSalesSlipData?.length > 0 && totalSalesSlipData.map((salesData, Index) => {
                                const priceData = preciousMetalData.find(price => price.name === salesData.gold_type);
                                return (
                                    <tr key={Index} >
                                        <td><input type='checkbox' name='checkbox1' className='!h-6' /></td>
                                        <td style={Td}>{salesData.id || ''}</td>
                                        <td style={Td} >{salesData.product_type_one}</td>
                                        {isshow ? <td style={Td} >{salesData.product_type_two || ''}</td> : <td style={{ display: 'none' }}></td>}
                                        {isshow ? <td style={Td} >{salesData.product_type_three || ''}</td> : <td style={{ display: 'none' }}></td>}
                                        {isshow ? <td style={Td} >{salesData.product_type_four || ''}</td> : <td style={{ display: 'none' }}></td>}
                                        <td style={Td}>
                                            {salesData.product_photo != '' ?
                                                <button onClick={() => openProductImageModal(salesData.product_photo)} name='photo' className='w-max'>
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeMedium svg-icon css-kry165 w-7" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhotoOutlinedIcon" title="PhotoOutlined"><path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4.86 8.86-3 3.87L9 13.14 6 17h12z"></path></svg>
                                                </button>
                                                : ''}
                                        </td>
                                        <td style={Td1} onClick={() => handleProductClick(Index)}
                                            onMouseOver={() => handleMouseOver(Index)}
                                            onMouseOut={() => handleMouseOut(Index)}>
                                            {salesData.product_name || ''}
                                            <div
                                                id={`tooltip-${Index}`}
                                                style={{
                                                    display: 'none',
                                                    position: 'absolute',
                                                    bottom: '20px',
                                                    right: '10px',
                                                    backgroundColor: 'white',
                                                    border: '2px solid #524c3b',
                                                    padding: '10px',
                                                    borderRadius: '5px',
                                                    zIndex: '100'
                                                }}
                                                className="text-pre-wrap"
                                            >
                                                {salesData.comment &&
                                                    <div className="my-6">
                                                        <div>
                                                            <div className='flex w-full'>
                                                                <div className='w-max flex flex-col justify-center'>
                                                                    <label className='text-[#70685a] text-[15px]'>1. どなたが購入されたものですか？{salesData.comment.question1 || ''}</label>
                                                                </div>
                                                            </div>
                                                            {salesData.comment.comment1 || ''}
                                                        </div>
                                                        <div>
                                                            <div className='flex w-full mt-1'>
                                                                <div className='w-max flex flex-col justify-center'>
                                                                    <label className='text-[#70685a] text-[15px]'>2. どこで購入されましたか？{salesData.comment.question2 || ''}</label>
                                                                </div>
                                                            </div>
                                                            {salesData.comment.comment2 || ''}
                                                        </div>
                                                        <div>
                                                            <div className='flex w-full mt-1'>
                                                                <div className='w-max flex flex-col justify-center'>
                                                                    <label className='text-[#70685a] text-[15px]'>3. いつ頃購入されましたか？ {salesData.comment.buyyear || ''}年 {salesData.comment.buymonth || ''}月</label>
                                                                </div>
                                                            </div>
                                                            {salesData.comment.comment3 || ''}
                                                        </div>
                                                        <div>
                                                            <div className='flex w-full mt-1'>
                                                                <div className='w-max flex flex-col justify-center'>
                                                                    <label className='text-[#70685a] text-[15px]'>4. もうお使いになられない予定ですか？ {salesData.comment.question4 || ''}</label>
                                                                </div>
                                                            </div>
                                                            {salesData.comment.comment4 || ''}
                                                        </div>
                                                    </div>
                                                }
                                                <div className="text-center">
                                                    <div className='flex justify-center w-full'>
                                                        {!salesData.product_photo ? "" : <img src={`${wakabaBaseUrl}/uploads/product/${salesData.product_photo}`} alt="Image Preview" className='h-[100px] p-1 rounded-lg' />}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        {isDetailShow ? <td style={Td} >
                                            <div className="relative w-max group mx-auto">
                                                <div
                                                    className="px-6 py-2.5 rounded text-[#70685a] text-sm tracking-wider font-semibold border-none outline-none">{salesData.gold_type || ''}</div>
                                                <div
                                                    className="absolute shadow-lg hidden group-hover:block bg-[#fff] text-[#70685a] font-semibold px-3 py-2 text-[13px] left-full ml-3 top-0 bottom-0 my-auto h-max w-max rounded before:w-4 before:h-4 before:rotate-45 before:bg-[#333] before:absolute before:z-[-1] before:bottom-0 before:top-0 before:my-auto before:-left-1 before:mx-auto">
                                                    {priceData ? `Retanaka: ${priceData.name}, Price: ${priceData.price}` : 'Price not available'}
                                                </div>
                                            </div>
                                        </td>
                                            : <td style={{ display: 'none' }}></td>}
                                        {isDetailShow ? <td style={Td} >{salesData.gross_weight || ''}</td> : <td style={{ display: 'none' }}></td>}
                                        {isDetailShow ? <td style={Td} >{salesData.price_gram || ''}</td> : <td style={{ display: 'none' }}></td>}
                                        {isDetailShow ? <td style={Td} >{salesData.serial_number || ''}</td> : <td style={{ display: 'none' }}></td>}
                                        {isDetailShow ? <td style={Td} >{salesData.model_number_one || ''}</td> : <td style={{ display: 'none' }}></td>}
                                        {isDetailShow ? <td style={Td} >{salesData.action_type || ''}</td> : <td style={{ display: 'none' }}></td>}
                                        {isDetailShow ? <td style={Td} >{salesData.movable || ''}</td> : <td style={{ display: 'none' }}></td>}
                                        {isDetailShow ? <td style={Td} >{salesData.tester || ''}</td> : <td style={{ display: 'none' }}></td>}
                                        {isDetailShow ? <td style={Td} >{salesData.box_guarantee || ''}</td> : <td style={{ display: 'none' }}></td>}
                                        {isDetailShow ? <td style={Td} >{salesData.rank || ''}</td> : <td style={{ display: 'none' }}></td>}
                                        {isDetailShow ? <td style={Td} >{salesData.brand || ''}</td> : <td style={{ display: 'none' }}></td>}
                                        {isDetailShow ? <td style={Td} >{salesData.capacity || ''}</td> : <td style={{ display: 'none' }}></td>}
                                        {isDetailShow ? <td style={Td} >{salesData.percent || ''}</td> : <td style={{ display: 'none' }}></td>}
                                        {isDetailShow ? <td style={Td} >{salesData.notes || ''}</td> : <td style={{ display: 'none' }}></td>}
                                        <td style={Td}> {salesData.quantity || ''} </td>
                                        <td style={Td}> {salesData.reason_application || ''} </td>
                                        <td style={Td}> {salesData.interest_rate || ''} </td>
                                        <td style={Td}  className='text-right'>{(salesData.purchase_price || 0).toLocaleString()}</td>
                                        <td style={Td}>{salesData.supervisor_direction || ''}</td>
                                        <td style={Td}> {salesData.highest_estimate_vendor || ''} </td>
                                        <td style={Td}  className='text-right'> {(salesData.highest_estimate_price || 0).toLocaleString()} </td>
                                        <td style={Td}>

                                            <div className="relative w-max group mx-auto">
                                                <button type="button" onClick={() => openEstimate(Index)}
                                                    className="w-10 px-3 py-1 rounded text-[#626373] tracking-wider font-semibold border border-[#70685a] bg-[#ebe5e1]">
                                                    {salesData.number_of_vendor || '0'}
                                                </button>
                                                <div className="absolute shadow-lg hidden group-hover:block bg-[#fff] text-[#626373] font-semibold px-3 py-2 text-[15px] right-full mr-3 top-0 bottom-0 my-auto h-max w-max rounded before:w-4 before:h-4 before:rotate-45 before:bg-[#333] before:absolute before:z-[-1] before:bottom-0 before:top-0 before:my-auto before:-right-1 before:mx-auto">
                                                    {allVendors.map((vendor, index) => (
                                                        salesData.estimate_wholesaler[vendor.vendor_name] &&
                                                        <div key={index} className='flex justify-between'>
                                                            <p>{vendor.vendor_name}:</p>
                                                            <p className='pl-3'>{salesData.estimate_wholesaler[vendor.vendor_name] || ''}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </td>
                                        {isvendorshow && allVendors.map((vendor, index) => (
                                            <td key={index} style={Td}> {salesData.estimate_wholesaler[vendor.vendor_name] || ''} </td>
                                        ))}
                                        <td style={Td}>{salesData.purchase_result || ''}</td>
                                        {(salesData.product_status === '査定中' || salesData.product_status === 'お預かり') &&
                                            <td className='w-8 bg-transparent'>
                                                <div onClick={() => editSalesItem(Index)} className='w-7 ml-2'>
                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                                                </div>
                                            </td>
                                        }
                                        {(salesData.product_status === '査定中' || salesData.product_status === 'お預かり') &&
                                            <td className='w-8 bg-transparent'>
                                                <div onClick={() => removeSalesItem(salesData.id)} className='w-7 ml-2'>
                                                    <svg focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                                                </div>
                                            </td>
                                        }
                                    </tr>
                                )
                            })}
                            <tr>
                                <td></td>     
                                <td></td> 
                                <td></td> 
                                {isshow ? <td></td> : <td style={{ display: 'none' }}></td>}         
                                {isshow ? <td></td> : <td style={{ display: 'none' }}></td>}         
                                {isshow ? <td></td> : <td style={{ display: 'none' }}></td>}              
                                <td></td>     
                                <td></td> 
                                {isDetailShow ? <td></td> : <td style={{ display: 'none' }}></td>}      
                                {isDetailShow ? <td></td> : <td style={{ display: 'none' }}></td>}      
                                {isDetailShow ? <td></td> : <td style={{ display: 'none' }}></td>}      
                                {isDetailShow ? <td></td> : <td style={{ display: 'none' }}></td>}      
                                {isDetailShow ? <td></td> : <td style={{ display: 'none' }}></td>}      
                                {isDetailShow ? <td></td> : <td style={{ display: 'none' }}></td>}      
                                {isDetailShow ? <td></td> : <td style={{ display: 'none' }}></td>}      
                                {isDetailShow ? <td></td> : <td style={{ display: 'none' }}></td>}      
                                {isDetailShow ? <td></td> : <td style={{ display: 'none' }}></td>}      
                                {isDetailShow ? <td></td> : <td style={{ display: 'none' }}></td>}      
                                {isDetailShow ? <td></td> : <td style={{ display: 'none' }}></td>}               
                                {isDetailShow ? <td></td> : <td style={{ display: 'none' }}></td>}                   
                                {isDetailShow ? <td></td> : <td style={{ display: 'none' }}></td>}               
                                {isDetailShow ? <td></td> : <td style={{ display: 'none' }}></td>}                   
                                <td></td>     
                                <td colSpan={3}>
                                    <div className='flex justify-end text-right mt-2'>
                                        <span className='text-[#70685a] font-bold'>買取点数&nbsp;{totalQuantity || ''}点</span>
                                        <span className='text-[#70685a] font-bold ml-5'>買取合計&nbsp;&nbsp;{(totalPrice || 0).toLocaleString()}円</span>
                                    </div>
                                </td>         
                                <td></td>     
                                <td></td>     
                                <td></td>     
                                <td></td>     
                                <td></td>        
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
            {/* result */}
            <div className="flex justify-center">
                <div className='w-full pb-20' style={{ maxWidth: '80em' }}>
                    <div className='flex flex-col justify-center pt-3 w-full'>
                        <div className='invoice-purchase-brought flex justify-center pt-3 '>
                            <div className='invoice-purchase-brought-one flex justify-center w-[50%]'>
                                <input type='checkbox' className='mr-3' />
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-10 pt-2" >LINEお友達登録したか？</label>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5 pt-2" >ノベルティーを何を渡したか？</label>
                            </div>
                            <div className='invoice-purchase-brought-one flex justify-center w-[40%]'>
                                <input
                                    list="novelty_items"
                                    id="novelty_item"
                                    name="novelty_item"
                                    value={customer.novelty_item || ''}
                                    onChange={handleCustomerChange}
                                    className='w-40 h-11 mr-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]'
                                />
                                <datalist id="novelty_items">
                                    <option value={'ティッシュボックス'} />
                                    {novelty_items.map((option, index) => (
                                        <option key={index} value={option || ''} />
                                    ))}
                                </datalist>
                                <InputComponent type='number' className='w-20 h-11 ' />
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 pt-2 ml-5" >To</label>
                                <button type="button"
                                    className="!w-10 h-10 ml-5 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                        <path
                                            d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                            data-original="#000000" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='invoice-purchase-brought flex justify-center pt-3'>
                        <div className='invoice-purchase-brought-one flex justify-center w-[50%]'>
                            <input type='checkbox' name='google_review' checked={customer.line_friend || ''} className='mr-3' />
                            <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-10 pt-2" >Google口コミしたか？</label>
                            <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5 pt-2" >ク一ポンのご利用はあったか？</label>

                        </div>
                        <div className='invoice-purchase-brought-one flex justify-center w-[40%]'>
                            <input
                                list="cupon_items"
                                id="cupon_item"
                                name="cupon_item"
                                value={customer.cupon_item || ''}
                                onChange={handleCustomerChange}
                                className='w-40 h-11 mr-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]'
                            />
                            <datalist id="cupon_items">
                                <option value={'なし'} />
                                {cupon_items.map((option, index) => (
                                    <option key={index} value={option || ''} />
                                ))}
                            </datalist>
                            <InputComponent type='number' className='w-20 h-11' />
                            <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 pt-2 ml-5" >To</label>
                            <button style={{ visibility: 'hidden' }} type="button"
                                className="!w-10 h-10 ml-5 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
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
        {/* --comment Modal--- */}
        {showModal && (
            <div className="fixed inset-0 p-4 flex justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                    <div className="flex items-center pb-3 border-b border-gray-300">
                        <h3 className="text-gray-800 text-xl font-bold flex-1">商品コメント</h3>
                        <svg onClick={handleModalClose} xmlns="http://www.w3.org/2000/svg" className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
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
                        {/* <textarea placeholder='入力コメント' name='comment'
                            onChange={handleCommentChange} onKeyDown={handleKeyDown}
                            className="p-4 bg-white max-w-md mx-auto w-full block text-sm border border-gray-300 outline-[#007bff] rounded" rows="4">
                        </textarea> */}
                        <div>
                            <div className='flex w-full'>
                                <div className='w-max flex flex-col justify-center'>
                                    <label className='text-[#70685a] text-[15px]'>1. どなたが購入されたものですか？</label>
                                </div>
                                <select name='question1' value={modalValue.question1 || ''} onChange={handleCommentChange} className="w-40 h-8 ml-3 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                    <option value=""></option>
                                    <option value="本人">本人</option>
                                    <option value="父">父</option>
                                    <option value="母">母</option>
                                    <option value="子供">子供</option>
                                    <option value="親戚">親戚</option>
                                    <option value="友人">友人</option>
                                    <option value="その他 ">その他</option>
                                </select>
                            </div>
                            <InputComponent name='comment1' value={modalValue.comment1 || ''} onChange={handleCommentChange} className="w-full ml-3 mt-2 text-[#70685a] mb-2 block text-left  mr-10 py-1 !mb-0 !h-8" placeholder={''} />
                        </div>
                        <div>
                            <div className='flex w-full mt-1'>
                                <div className='w-max flex flex-col justify-center'>
                                    <label className='text-[#70685a] text-[15px]'>2. どこで購入されましたか？</label>
                                </div>
                                <select name='question2' value={modalValue.question2 || ''} onChange={handleCommentChange} className="w-40 h-8 ml-3 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                    <option value=""></option>
                                    <option value="正規店">正規店</option>
                                    <option value="中古">中古</option>
                                    <option value="母">母</option>
                                    <option value="インターネット・通販 ">インターネット・通販 </option>
                                    <option value="その他 ">その他 </option>
                                </select>
                            </div>
                            <InputComponent name='comment2' value={modalValue.comment2 || ''} onChange={handleCommentChange} className="w-full ml-3 mt-2 text-[#70685a] mb-2 block text-left  mr-10 py-1 !mb-0 !h-8" placeholder={''} />
                        </div>
                        <div>
                            <div className='flex w-full mt-1'>
                                <div className='w-max flex flex-col justify-center'>
                                    <label className='text-[#70685a] text-[15px]'>3. いつ頃購入されましたか？</label>
                                </div>
                            </div>
                            <div className='flex w-full mt-1 gap-3 ml-3'>
                                <InputComponent name='buyyear' value={modalValue.buyyear || ''} onChange={handleCommentChange} type='number' className="w-40 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" placeholder={'2024'} />
                                <div className='w-max flex flex-col justify-center'>
                                    <label className='text-[#70685a] text-[15px]'>年</label>
                                </div>
                                <InputComponent name='buymonth' value={modalValue.buymonth || ''} onChange={handleCommentChange} type='number' className="w-40 text-[#70685a] mb-2 block text-left py-1 !mb-0 !h-8" placeholder={'10'} />
                                <div className='w-max flex flex-col justify-center'>
                                    <label className='text-[#70685a] text-[15px]'>月</label>
                                </div>
                                <div className='w-max flex flex-col justify-center'>
                                    <label className='text-[#70685a] text-[15px]'>ごろ</label>
                                </div>
                            </div>
                            <InputComponent name='comment3' value={modalValue.comment3 || ''} onChange={handleCommentChange} className="w-full ml-3 mt-2 text-[#70685a] mb-2 block text-left  mr-10 py-1 !mb-0 !h-8" placeholder={''} />
                        </div>
                        <div>
                            <div className='flex w-full mt-1'>
                                <div className='w-max flex flex-col justify-center'>
                                    <label className='text-[#70685a] text-[15px]'>4. もうお使いになられない予定ですか？</label>
                                </div>
                                <select name='question4' value={modalValue.question4 || ''} onChange={handleCommentChange} className="w-40 h-8 ml-3 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                    <option value=""></option>
                                    <option value="まだ利用する">まだ利用する</option>
                                    <option value="もう利用しない">もう利用しない</option>
                                    <option value="本日売却予定">本日売却予定</option>
                                    <option value="査定額次第で売却">査定額次第で売却</option>
                                </select>
                            </div>
                            <InputComponent name='comment4' value={modalValue.comment4 || ''} onChange={handleCommentChange} className="w-full ml-3 mt-2 text-[#70685a] mb-2 block text-left  mr-10 py-1 !mb-0 !h-8" placeholder={''} />
                        </div>
                    </div>

                    <div className="border-t border-gray-300 pt-6 flex justify-end gap-4">
                        <button type="button" onClick={handleModalClose}
                            className="px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200">キャンセル</button>
                        <button type="button" onClick={handleCommentSave}
                            className="px-4 py-2 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600">保存</button>
                    </div>
                </div>
            </div>
        )}
        {/* ---show item image--- */}
        {showItemsImage && (
            <div
                className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                    <div className="flex items-center pb-3 border-b border-gray-200">
                        <div className="flex-1">
                            <h3 className="text-gray-800 text-xl font-bold">ファイルをアップロード</h3>
                            <p className="text-gray-600 text-xs mt-1">このアイテムにファイルをアップロード</p>
                        </div>
                        <svg onClick={closeItemsImageModal} xmlns="http://www.w3.org/2000/svg" className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                            viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </div>

                    <div className="h-40 flex flex-col bg-gray-50 p-4 rounded-lg mt-4">
                        <div style={{ flexDirection: 'column', }} className='flex h-full felx-col justify-center'>
                            <div className='flex justify-center w-full'>
                                {totalSalesSlipData?.length > 0 && totalSalesSlipData[0].entire_items_url === '' ? (
                                    ""
                                ) : (
                                    <img
                                        src={itemsImagePreview}
                                        alt={itemsImagePreview}
                                        className='h-[100px] p-1 rounded-lg'
                                    />
                                )}
                            </div>

                        </div>
                    </div>
                    <div className="border-t border-gray-200 pt-3 flex justify-between gap-5 mt-3">
                        <button type="button" onClick={() => handleItemsButtonClick(itemsImageInputRef)}
                            className="w-10 h-10 inline-flex items-center justify-center rounded border-none outline-none bg-green-600 hover:bg-green-700 active:bg-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="#fff" className="inline" viewBox="0 0 24 24">
                                <path
                                    d="M12 16a.749.749 0 0 1-.542-.232l-5.25-5.5A.75.75 0 0 1 6.75 9H9.5V3.25c0-.689.561-1.25 1.25-1.25h2.5c.689 0 1.25.561 1.25 1.25V9h2.75a.75.75 0 0 1 .542 1.268l-5.25 5.5A.749.749 0 0 1 12 16zm10.25 6H1.75C.785 22 0 21.215 0 20.25v-.5C0 18.785.785 18 1.75 18h20.5c.965 0 1.75.785 1.75 1.75v.5c0 .965-.785 1.75-1.75 1.75z"
                                    data-original="#000000"></path>
                            </svg>
                        </button>
                        <input type="file" name="itemsImageUpload" ref={itemsImageInputRef} style={{ display: 'none' }} required onChange={(e) => handleItemsFileChange(e, setItemsImageFile, setItemsImagePreview)} />
                        <button type="button" onClick={itemsImageUpload}
                            className="w-[20%] py-2  rounded-lg text-white text-md border-none outline-none tracking-wide bg-[#524c3b] hover:bg-blue-700 active:bg-blue-600">
                            <span>保存</span>
                        </button>
                        <button type="button" onClick={closeItemsImageModal}
                            className="w-[20%] py-2 rounded-lg text-white text-md border-none outline-none tracking-wide bg-[#524c3b] hover:bg-red-700 active:bg-blue-600">
                            <span>閉じる</span>
                        </button>
                    </div>
                </div>
            </div>
        )}
        {/* ---show doc image---- */}
        {showItemsDoc && (
            <div
                className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                    <div className="flex items-center pb-3 border-b border-gray-200">
                        <div className="flex-1">
                            <h3 className="text-gray-800 text-xl font-bold">ファイルをアップロード</h3>
                            <p className="text-gray-600 text-xs mt-1">このアイテムにファイルをアップロード</p>
                        </div>
                        <svg onClick={closeItemsDocModal} xmlns="http://www.w3.org/2000/svg" className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                            viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </div>

                    <div className="h-40 flex flex-col bg-gray-50 p-4 rounded-lg mt-4">
                        <div style={{ flexDirection: 'column', }} className='flex h-full felx-col justify-center'>
                            <div className='flex justify-center w-full'>
                                {totalSalesSlipData?.length > 0 && totalSalesSlipData[0].document_url === '' ? (
                                    ""
                                ) : (
                                    <img
                                        src={itemsImageDocPreview}
                                        alt={itemsImageDocPreview}
                                        className='h-[100px] p-1 rounded-lg'
                                    />
                                )}
                            </div>

                        </div>
                    </div>
                    <div className="border-t border-gray-200 pt-3 flex justify-between gap-5 mt-3">
                        <button type="button" onClick={() => handleItemsButtonClick(itemsDocInputRef)}
                            className="w-10 h-10 inline-flex items-center justify-center rounded border-none outline-none bg-green-600 hover:bg-green-700 active:bg-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" fill="#fff" className="inline" viewBox="0 0 24 24">
                                <path
                                    d="M12 16a.749.749 0 0 1-.542-.232l-5.25-5.5A.75.75 0 0 1 6.75 9H9.5V3.25c0-.689.561-1.25 1.25-1.25h2.5c.689 0 1.25.561 1.25 1.25V9h2.75a.75.75 0 0 1 .542 1.268l-5.25 5.5A.749.749 0 0 1 12 16zm10.25 6H1.75C.785 22 0 21.215 0 20.25v-.5C0 18.785.785 18 1.75 18h20.5c.965 0 1.75.785 1.75 1.75v.5c0 .965-.785 1.75-1.75 1.75z"
                                    data-original="#000000"></path>
                            </svg>
                        </button>
                        <input type="file" name="itemsImageUpload" ref={itemsDocInputRef} style={{ display: 'none' }} required onChange={(e) => handleItemsDocFileChange(e, setItemsDocFile, setItemsDocPreview)} />
                        <button type="button" onClick={itemsImageUpload}
                            className="w-[20%] py-2  rounded-lg text-white text-md border-none outline-none tracking-wide bg-[#524c3b] hover:bg-blue-700 active:bg-blue-600">
                            <span>保存</span>
                        </button>
                        <button type="button" onClick={closeItemsDocModal}
                            className="w-[20%] py-2 rounded-lg text-white text-md border-none outline-none tracking-wide bg-[#524c3b] hover:bg-red-700 active:bg-blue-600">
                            <span>閉じる</span>
                        </button>
                    </div>
                </div>
            </div>
        )}
        {/* ------permission success modal----- */}
        {pemissionSuccess && <ConfirmationModal title={'あなたのリクエストは確認されました'} onClose={closePermissionSuccess} />}
        {/* -----all clear modal------ */}
        {showAllClear && (
            <div
                className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">

                    <div className="my-4 text-center">
                        <h4 className="text-gray-800 text-base font-semibold mt-4">この請求書データを削除してもよろしいですか？</h4>

                        <div className="text-center space-x-4 mt-8">
                            <button type="button" onClick={() => allClear()}
                                className="px-6 py-2 rounded-lg text-white text-sm bg-red-600 hover:bg-red-700 active:bg-red-600">はい</button>
                            <button type="button" onClick={closeShowAllClearModal}
                                className="px-4 py-2 rounded-lg text-gray-800 text-sm bg-gray-200 hover:bg-gray-300 active:bg-gray-200">キャンセル</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
        {/* ---------show product photo-------- */}
        {showProductImage && <ImageShowModal itemsImagePreview={itemImagePreview} onClose={closeProductImageModal} />}
        {/* --------vender assessment sheet-------- */}
        {showEstimate &&
            <div
                className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 relative">
                    <div className="text-center">
                        <div className='flex justify-center w-full'>
                            <table className='text-center w-full' style={Table}>
                                <thead className='bg-white z-10 h-11 w-full'>
                                    <tr>
                                        <th style={Th}>業者名</th>
                                        <th style={Th}>査定額</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {vendors?.length > 0 && vendors.map((vendor, index) => (
                                        <tr key={vendor.id} className='!h-8'>
                                            <td style={Td}>{vendor.vendor_name || ''}</td>
                                            <td style={Td}>
                                                <InputComponent name={vendor.vendor_name || ''} onChange={(e) => handleEstimateChange(vendor.vendor_name, e.target.value)} value={estimateValues[vendor.vendor_name] || ''} className='w-full h-8 text-[#70685a] border border-[black]' />
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
    </>
    );
};

export default InvoicePurchaseOfBrought;