import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../../Assets/css/showtable.css'
import dateimage from '../../Assets/img/datepicker.png';
import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import { toast } from 'react-toastify';
// import LabelComponent from '../../Components/Common/LabelComponent';


const CustomerIndividual = () => {
    // const title = 'タイトルタイトル';
    const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
    // State to store the current date and time
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        // Update the date and time every minute
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 60000); // Update every 60,000 milliseconds (1 minute)

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Map of days of the week to Japanese kanji
    const dayKanji = ['日', '月', '火', '水', '木', '金', '土'];

    // Format the date and time as YYYY/MM/DD (Kanji) HH:MM
    const formatDateTime = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(date.getDate()).padStart(2, '0');
        const dayOfWeek = date.getDay(); // Get day of week (0: Sunday, 1: Monday, ..., 6: Saturday)
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${year}/${month}/${day} (${dayKanji[dayOfWeek]}) ${hours}:${minutes}`;
    };

    const formattedDateTime = formatDateTime(dateTime);

    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center',

    };

    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
        whiteSpace: 'nowrap'
    };

    //create-symbol
    // const formatPhoneNumber = (number) => {
    //     // Ensure the number is a string
    //     const numStr = number.toString();

    //     // Extract parts of the string
    //     if (numStr.length >= 7) {
    //         const part1 = numStr.slice(0, 3);   // First 3 digits
    //         const part2 = numStr.slice(3, 7);   // Next 4 digits
    //         const part3 = numStr.slice(7);      // Remaining digits (if any)

    //         // Combine parts with dashes
    //         return part3 ? `${part1}-${part2}-${part3}` : `${part1}-${part2}`;
    //     } else {
    //         return numStr; // Return the original string if less than 7 digits
    //     }

    // };

    const [customer, setCustomer] = useState({
        id: '',
        full_name: '',
        katakana_name: '',
        phone_number: '',
        address: '',
        shop: '',
        visit_type: '',
        birthday: '',
        age: '',
        job: '',
        email: '',
        idCard_url: '',
        cardType: '',
        idcard_number: '',
        avatar_url: '',
        prefeature: '',
        city: '',
        gender: '',
        trigger: '',
        brand_type: '',
        item1: '',
        item2: '',
        item3: '',
        item4: '',
        item5: '',
        special_note: ''
    });

    const [customerPastVisitHistory, setCustomerPastVisitHistory] = useState([]);

    const [imageAvatarPreview, setAvatarImagePreview] = useState(`${wakabaBaseUrl}/uploads/customer/`);
    const [imageIdCardPreview, setIdCardImagePreview] = useState(`${wakabaBaseUrl}/uploads/customer/`);

    const navigate = useNavigate();

    // Fetch customer data
    const { id } = useParams();

    // Fetch customerPastVisitHistory data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        const fetch = async () => {
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.get(`${wakabaBaseUrl}/customer/customerpastvisithistory/${id}`)
                .then(response => {
                    console.log("historydata", response.data)
                    setCustomerPastVisitHistory(response.data || []);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }

        fetch();

    }, []);
    // fetch customer data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        const fetch = async () => {
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            if (id) {
                await axios.get(`${wakabaBaseUrl}/customer/getCustomerById/${id}`)
                    .then(response => {
                        // console.log("data", response.data)
                        setCustomer(response.data);
                        checkedFunction(response.data.item1, response.data.item2, response.data.item3, response.data.item4, response.data.item5)
                        setAvatarImagePreview(`${wakabaBaseUrl}/uploads/customer/${response.data.avatar_url}`);
                        setIdCardImagePreview(`${wakabaBaseUrl}/uploads/customer/${response.data.idCard_url}`);
                    })
                    .catch(error => {
                        console.error("There was an error fetching the customer data!", error);
                    });
            }
        }
        fetch();

    }, [id]);

    // //file upload
    const [avatarimageFile, setAvatarImageFile] = useState(null);
    const [idcardFile, setIdcardFile] = useState(null);

    const avatarImageInputRef = useRef(null);
    const idcardInputRef = useRef(null);

    const handleCustomerChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value,
        });
    };

    const handleDateChange = (e) => {
        const birthDate = new Date(e.target.value);
        const today = new Date();

        let age1 = today.getFullYear() - birthDate.getFullYear();

        setCustomer({
            ...customer,
            birthday: e.target.value,
            age: age1,
        });
    };


    const handleFileChange = (event, setFile, setImagePreview) => {
        const file = event.target.files[0];
        if (file) {
            // Create a URL for the file to display as a preview
            const fileURL = URL.createObjectURL(file);
            setImagePreview(fileURL);
        }
        setFile(event.target.files[0]);
    };

    const handleButtonClick = (inputRef) => {
        inputRef.current.click();
    };

    const [isKeepModalOpen, setIsKeepModalOpen] = useState(false); // For modal visibility
    const openKeepCheckModal = () => {
        setIsKeepModalOpen(true);
    }
    const onClose = () => {
        setIsKeepModalOpen(false);
    }
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // For modal visibility
    const openDeleteCheckModal = () => {
        setIsDeleteModalOpen(true);
    }
    const onDeleteClose = () => {
        setIsDeleteModalOpen(false);
    }

    const handleKeepSubmit = async (e) => {
        e.preventDefault();
        setIsKeepModalOpen(false);
        // const formattedNumber = formatPhoneNumber(customer.phone_number);
        // customer.phone_number = formattedNumber;

        const formDataObj = new FormData();
        formDataObj.append('id', customer.id);
        formDataObj.append('visit_type', customer.visit_type);
        formDataObj.append('full_name', customer.full_name);
        formDataObj.append('katakana_name', customer.katakana_name);
        formDataObj.append('phone_number', customer.phone_number);
        formDataObj.append('job', customer.job);
        formDataObj.append('email', customer.email);
        formDataObj.append('birthday', customer.birthday);
        formDataObj.append('age', customer.age);
        formDataObj.append('gender', customer.gender);
        formDataObj.append('cardType', customer.cardType);
        formDataObj.append('idcard_number', customer.idcard_number);
        formDataObj.append('prefeature', customer.prefeature);
        formDataObj.append('city', customer.city);
        formDataObj.append('address', customer.address);
        formDataObj.append('item1', customer.item1);
        formDataObj.append('item2', customer.item2);
        formDataObj.append('item3', customer.item3);
        formDataObj.append('item4', customer.item4);
        formDataObj.append('item5', customer.item5);
        formDataObj.append('special_note', customer.special_note);

        if (avatarimageFile) formDataObj.append('avatarimage', avatarimageFile);
        if (idcardFile) formDataObj.append('idcard', idcardFile);


        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const response = await axios.post(`${wakabaBaseUrl}/customer/updateCustomer`, formDataObj,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            console.log('Response:', response.data);
            // setAvatarImageFile(null);
            // setIdcardFile(null);
            toast.success('変更が正常に保存されました！', { autoClose: 3000 });//update
            navigate('/customerlist');
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error here
        }
    };
    const handleDeleteSubmit = async (e) => {
        e.preventDefault();
        setIsDeleteModalOpen(false);
        const customerId = customer.id;
        console.log('CustomerId', customerId);

        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const response = await axios.post(`${wakabaBaseUrl}/customer/deleteCustomer`, { customerId });
            console.log('Response:', response.data);
            toast.success('データが正常に削除されました！', { autoClose: 3000 });//remove
            navigate('/customerlist'); // Navigate to the profile page after closing the modal
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error here
        }
    };
    const gotoInvoiceForPurchase = () => {
        navigate(`/invoiceforpurchaseofbrought/${id}`); // Use navigate for routing
    };

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

    //---------------whole hearing control part---------------
    const [pairs, setPairs] = useState([
        { checked: false, value: '' },
        { checked: false, value: '' },
        { checked: false, value: '' },
        { checked: false, value: '' },
    ]);

    const [additionalCheckboxes, setAdditionalCheckboxes] = useState(
        Array(22).fill(false)
    );

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
        const checkedValues = [];
        const updatedCustomer = { ...customer };

        // Collect values for each pair
        for (let i = 0; i < pairs.length; i++) {
            if (pairs[i].checked) {
                checkedValues.push({ value: pairs[i].value, index: i });

                // Update customer state based on index
                if (i === 0) {
                    updatedCustomer.item2 = pairs[i].value;
                } else if (i === 1) {
                    updatedCustomer.item3 = pairs[i].value;
                } else if (i === 2) {
                    updatedCustomer.item4 = pairs[i].value;
                } else if (i === 3) {
                    updatedCustomer.item5 = pairs[i].value;
                }
            }
        }

        // Collect additional checked checkboxes
        const additionalChecked = [];
        for (let i = 0; i < additionalCheckboxes.length; i++) {
            if (additionalCheckboxes[i]) {
                additionalChecked.push(`${i + 1}`);
            }
        }

        // Set additionalChecked in the customer state
        updatedCustomer.item1 = additionalChecked;

        // Finally, set the updated customer state
        setCustomer(updatedCustomer);

        // console.log('Checked Pair Values:', checkedValues);
        // console.log('Additional Checked Values:', additionalChecked);
        // console.log('customer Values:', updatedCustomer.item2, updatedCustomer.item3);
    };

    useEffect(() => {
        handleSubmit();
    }, [pairs, additionalCheckboxes]);
    //---remake function
    const checkedFunction = (item1, item2, item3, item4, item5) => {
        if (item1?.length > 0) {
            const array = item1.split(',').map(Number);
            setAdditionalCheckboxes(array);
            updateValueAtIndex(0, item2);
            updateValueAtIndex(1, item3);
            updateValueAtIndex(2, item4);
            updateValueAtIndex(3, item5);
        }
    }

    const updateValueAtIndex = (index, newValue) => {
        setPairs(prevPairs => {
            const newPairs = [...prevPairs]; // Create a copy of the current pairs
            newPairs[index] = { ...newPairs[index], checked: true, value: newValue }; // Update the value at the specified index
            return newPairs; // Return the updated array
        });
    };
    //--------------------------------------------------------


    return (<>
        <div className="bg-[trasparent] font-[sans-serif]">
            <div className='flex justify-center'>
                <div className="w-full" >
                    <div className='flex'>
                        <div className="w-[30%]" >
                            {/* new */}
                            <div className='flex'>
                                <div style={{flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold block text-right mr-10">来店時間</label>
                                </div>
                                <div style={{flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold block text-left mr-10">{formattedDateTime || ''}</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold block text-right mr-10">顧客番号</label>
                                </div>
                                <div style={{flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold block text-left mr-10">{customer.id || ''}</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold block text-right mr-10">店舗名</label>
                                </div>
                                <div style={{flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold block text-left mr-10">{customer.shop || ''}</label>
                                </div>
                            </div>
                        </div>
                        <div className='w-[40%] flex flex-col justify-center'>
                            <h2 className="w-full text-[#70685a] text-center text-2xl font-bold flex justify-center !mt-0">顧客 個別情報(編集画面)</h2>
                        </div>
                        <div className='w-[30%]'></div>
                    </div>

                    <div className='customer-edit w-full flex justify-center gap-10' >
                        <div className='customer-edit-center flex gap-10'>
                            <ButtonComponent name="delete" children="削除" onClick={openDeleteCheckModal} className='px-5' style={{ backgroundColor: '#838383' }} />
                            <ButtonComponent name="keep" className='' onClick={openKeepCheckModal} children="保存" />
                        </div>
                        <div className=' customer-edit-center flex gap-10'>
                            <ButtonComponent name="onsitepurchase" children="出張買取" className='px-5' style={{ border: '1px solid #838383', backgroundColor: 'transparent', color: '#838383', }} ><Link to='/onsitepurchase'>キャンセル</Link></ButtonComponent>
                        </div>
                    </div>
                </div>
            </div>
            <div className="customer-edit flex  justify-center ">
                <div className="w-full">
                    <div className=" rounded-2xl w-full">
                        <form className=" space-y-2">
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='!mb-0 flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 py-1 !mb-0">カタカナ名</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="katakana_name" value={customer.katakana_name || ''} onChange={handleCustomerChange} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 py-1 !mb-0">お名前</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="full_name" value={customer.full_name || ''} onChange={handleCustomerChange} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">お電話番号</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <InputComponent name="phone_number" value={customer.phone_number || ''} onChange={handleCustomerChange} type='tel' pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" placeholder="123-4567-7890" required />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-11 py-1 !mb-0">生年月日</label>
                                </div>

                                <div style={{ width: '18%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="birthdayValue" type="text" value={customer.birthday || ''} required className="w-full text-[#70685a] border border-[#70685a] px-4 py-1 text-[15px] outline-[#70685a]" readOnly />
                                </div>
                                <div style={{ width: '5%', flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                    <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                        <div style={{ position: 'relative' }}>
                                            <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                            <input type="date" id="birthday" name="birthday" onChange={handleDateChange} style={{ position: 'absolute', left: '0', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                            {/* <input type="date" id="birthday" name="birthday" style={{position: 'absolute', width:'30px', height:'30px', background:'transparent', border:'none', opacity:'0'}}/> */}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ width: '7%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right py-1 !mb-0">{customer.age || '0'}才</label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex flex-col justify-center text-right'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">性別</label>
                                </div>
                                <div style={{ width: '15%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <select id="gender" name="gender" required onChange={handleCustomerChange} value={customer.gender || ''} className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                        <option value="" disabled></option>
                                        <option value="man">男</option>
                                        <option value="woman">女</option>
                                    </select>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 py-1 !mb-0">ご職業</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <InputComponent name="job" value={customer.job || ''} onChange={handleCustomerChange} type='text' required />
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">email</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <InputComponent name="email" value={customer.email || ''} onChange={handleCustomerChange} type='email' required />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 py-3 !mb-0">種別①</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <select id="visit_type" name="visit_type" value={customer.visit_type || ''} required onChange={handleCustomerChange} className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                        <option value="" disabled></option>
                                        <option value="折りたたまれた">折りたたまれた</option>
                                        <option value="店の前で">店の前で</option>
                                        <option value="顧客">顧客</option>
                                        <option value="投稿">投稿</option>
                                        <option value="紹介">紹介</option>
                                        <option value="他の人">他の人</option>
                                    </select>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">種別②</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <InputComponent name="brand_type" value={customer.brand_type || ''} onChange={handleCustomerChange} type='text' required />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex '>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 py-1 !mb-0">本人確認書類</label>
                                </div>
                                <div style={{ width: '5%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <button type="button" onClick={() => handleButtonClick(idcardInputRef)}
                                        className="w-9 h-9 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="black" className="inline" viewBox="0 0 512 512">
                                            <path
                                                d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                data-original="#000000" />
                                        </svg>
                                    </button>
                                    <input type="file" name='idcardUpload' ref={idcardInputRef} style={{ display: 'none' }} onChange={(e) => handleFileChange(e, setIdcardFile, setAvatarImagePreview)} />
                                    {/* {idcardFile && <p>{idcardFile.name}</p>} */}
                                </div>
                                <div style={{ width: '24%', flexDirection: 'column', }} className='flex ml-3 align-center justify-around'>
                                    <select name="cardType" value={customer.cardType || ''} required onChange={handleCustomerChange} className="w-full h-9 text-[#70685a] text-[15px] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                        <option value="" disabled></option>
                                        <option value="運転免許証">運転免許証</option>
                                        <option value="運転経歴証明書">運転経歴証明書</option>
                                        <option value="旅券（パスポート)">旅券(パスポート)</option>
                                        <option value="個人番号カード（マイナンバーカード）在留カード・特別永住者証明書">個人番号カード（マイナンバーカード）在留カード・特別永住者証明書</option>
                                        <option value="各種福祉手帳（身体障害者手帳等）">各種福祉手帳（身体障害者手帳等）</option>
                                    </select>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', display: 'none' }} className='flex align-center justify-around'>
                                    <button type="button" onClick={() => handleButtonClick(avatarImageInputRef)} className="py-2 text-[#70685a] rounded-full tracking-wider font-medium outline-none border border-[#70685a] ">画像と情報表示</button>
                                    <input type="file" name="avatarimageUpload" ref={avatarImageInputRef} style={{ display: 'none' }} onChange={(e) => handleFileChange(e, setAvatarImageFile, setIdCardImagePreview)} />
                                    {/* {avatarimageFile && <p>Selected Image: {avatarimageFile.name}</p>} */}
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">身分証No.</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <InputComponent name="idcard_number" value={customer.idcard_number || ''} onChange={handleCustomerChange} type='number' required />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex h-[130px]'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0"></label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex h-full felx-col justify-center'>
                                    <div className='flex justify-between w-full h-[100px]'>
                                        <div style={{ width: '60%' }} className='border border-[#70685a] rounded-lg flex justify-center'>
                                            {imageAvatarPreview === `${wakabaBaseUrl}/uploads/customer/` ? "" : 
                                                <img src={imageAvatarPreview} alt="Avatar"
                                                 className='h-[100px] p-1 rounded-lg' />}
                                        </div>
                                        <div style={{ width: '35%', display: 'none' }} className='border border-[#70685a] rounded-full flex justify-center'>
                                            {imageIdCardPreview === `${wakabaBaseUrl}/uploads/customer/` ? "" : 
                                                <img 
                                                    src={imageIdCardPreview} 
                                                    alt="ID Card" // Use a relevant description
                                                    className='h-[100px] p-1 rounded-full' 
                                                />
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 py-1 !mb-0">都道府県</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <select id="prefeature" value={customer.prefeature || ''} required onChange={handleCustomerChange} name="prefeature" className="w-full h-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                        <option value="" disabled></option>
                                        <option value="北海道">北海道</option>
                                        <option value="青森県">青森県</option>
                                        <option value="岩手県">岩手県</option>
                                        <option value="宮城県">宮城県</option>
                                        <option value="秋田県">秋田県</option>
                                        <option value="山形県">山形県</option>
                                        <option value="福島県">福島県</option>
                                        <option value="茨城県">茨城県</option>
                                        <option value="栃木県">栃木県</option>
                                        <option value="群馬県">群馬県</option>
                                        <option value="埼玉県">埼玉県</option>
                                        <option value="千葉県">千葉県</option>
                                        <option value="東京都">東京都</option>
                                        <option value="神奈川県">神奈川県</option>
                                        <option value="新潟県">新潟県</option>
                                        <option value="富山県">富山県</option>
                                        <option value="石川県">石川県</option>
                                        <option value="福井県">福井県</option>
                                        <option value="山梨県">山梨県</option>
                                        <option value="長野県">長野県</option>
                                        <option value="岐阜県">岐阜県</option>
                                        <option value="静岡県">静岡県</option>
                                        <option value="愛知県">愛知県</option>
                                        <option value="三重県">三重県</option>
                                        <option value="滋賀県">滋賀県</option>
                                        <option value="京都府">京都府</option>
                                        <option value="大阪府">大阪府</option>
                                        <option value="兵庫県">兵庫県</option>
                                        <option value="奈良県">奈良県</option>
                                        <option value="和歌山県">和歌山県</option>
                                        <option value="鳥取県">鳥取県</option>
                                        <option value="島根県">島根県</option>
                                        <option value="岡山県">岡山県</option>
                                        <option value="広島県">広島県</option>
                                        <option value="山口県">山口県</option>
                                        <option value="徳島県">徳島県</option>
                                        <option value="香川県">香川県</option>
                                        <option value="愛媛県">愛媛県</option>
                                        <option value="高知県">高知県</option>
                                        <option value="福岡県">福岡県</option>
                                        <option value="佐賀県">佐賀県</option>
                                        <option value="長崎県">長崎県</option>
                                        <option value="熊本県">熊本県</option>
                                        <option value="大分県">大分県</option>
                                        <option value="宮崎県">宮崎県</option>
                                        <option value="鹿児島県">鹿児島県</option>
                                        <option value="沖縄県">沖縄県</option>
                                    </select>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">市町村</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="city" type="text" value={customer.city || ''} onChange={handleCustomerChange} required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 py-1 !mb-0">住所詳細</label>
                                </div>
                                <div style={{ width: '80%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="address" type="text" value={customer.address || ''} onChange={handleCustomerChange} required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 py-1 !mb-0">特記事項</label>
                                </div>
                                <div style={{ width: '80%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="special_note" type="text" value={customer.special_note || ''} onChange={handleCustomerChange} required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                {/* Detail area*/}
                <div className="customer-pasting-view w-full h-full mt-1 ml-10" style={{ maxWidth: '60em' }}>
                    {/* Detail area First*/}
                    <div style={{ width: '100%', }} className='flex'>
                        <div className=" h-full w-full">
                            {/*Past visit history of Table area */}
                            <div className="border border-[#70685a] rounded px-3 w-full mb-2" style={{ height: '160px', overflowY: 'scroll' }}>
                                <div className='flex justify-between mt-2'>
                                    <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-10 py-1 !mb-0">来店履歴</label>
                                    <button type="button" onClick={gotoInvoiceForPurchase}
                                        className="flex px-5 py-1 rounded-lg  text-[#70685a] text-[18px] bg-[transparent] tracking-wider font-bold border border-[#70685a] outline-none transition-all duration-300">
                                        <div className='w-7'>
                                            <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AddCircleOutlineOutlinedIcon" title="AddCircleOutlineOutlined"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"></path></svg>
                                        </div>
                                        追加
                                    </button>
                                </div>
                                {customerPastVisitHistory?.length > 0 ?
                                    <div style={{ width: '100%', }} >
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
                                                    <th className='whitespace-nowrap' width='5%'>カテゴリ1</th>
                                                    <th className='whitespace-nowrap' width='5%'>商品名</th>
                                                    <th className='whitespace-nowrap' width='5%'>売上総額</th>
                                                    <th className='whitespace-nowrap' width='5%'>粗利総額</th>
                                                    <th className='whitespace-nowrap' width='5%'>買取総額</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr style={{ display: 'none' }}>
                                                    <td>
                                                        <div className='flex justify-center'>
                                                            <div>1</div>
                                                            <div>
                                                                <svg className="w-5 h-5 ml-1" fill='#70685a' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon" title="ContentCopy">
                                                                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td style={Td}>aa</td>
                                                    <td style={Td}>aa</td>
                                                    <td style={Td}>aa</td>
                                                    <td style={Td}>aa</td>
                                                    <td style={Td}>aa</td>
                                                    <td style={Td}>aa</td>
                                                    <td style={Td}>aa</td>
                                                    <td style={Td}>aa</td>
                                                </tr>
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
                                                        <td style={Td}>{pastVisit.visit_date || ''}</td>
                                                        <td style={Td}>{pastVisit.applicable || ''}</td>
                                                        <td style={Td}>{(pastVisit.total_amount || 0).toLocaleString()}</td>
                                                        <td style={Td}>{pastVisit.category || ''}</td>
                                                        <td style={Td}>{pastVisit.product_name || ''}</td>
                                                        <td style={Td} className='text-right'>{(pastVisit.total_sales || 0).toLocaleString()}</td>
                                                        <td style={Td} className='text-right'>{(pastVisit.total_gross_profit || 0).toLocaleString()}</td>
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
                            {/* Text area */}
                            <div className='w-full flex justify-center'>
                                <div className=" h-full w-full mt-1">
                                    {/* Text area */}
                                    <div className="border border-[#70685a] rounded px-3 w-full" style={{ height: '130px', overflow: 'auto' }}>
                                        <div className='flex'>
                                            <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-10 py-1 !mb-0">来店契機</label>
                                            <div className='flex flex-col justify-center'>
                                                <label className="text-[#70685a] text-[16px] pt-1 mb-2 block text-left mr-10 py-1 !mb-0">何を見てご来店いただきましたか？</label>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='ml-3 text-[13px]'>
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
                                                        value={pairs[0].value || ''}
                                                        onChange={(e) => handleInputChange(0, e.target.value)}
                                                        disabled={!pairs[0].checked}
                                                        className="w-[100px] text-[#70685a]block text-left mr-3 py-1 !h-8"
                                                        placeholder={'広告を見た場所'}
                                                    />
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
                                                                    value={pairs[index + 1].value || ''}
                                                                    onChange={(e) => handleInputChange(index + 1, e.target.value)}
                                                                    disabled={!pairs[index + 1].checked}
                                                                    className="w-[100px] text-[#70685a] block text-left mr-3 py-1 !h-8"
                                                                    placeholder={item.placeholder}
                                                                />
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                <div className='flex gap-10'>

                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ display: 'none' }}>
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
                                                        value={pairs[3].value || ''}
                                                        onChange={(e) => handleInputChange(3, e.target.value)}
                                                        disabled={!pairs[3].checked}
                                                        className="w-40 text-[#70685a] mb-2 block text-left mr-10 py-1 !mb-0 !h-8"
                                                        placeholder={'その他詳細'}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ display: 'none' }}>
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
                                    {/* -------question------- */}
                                    <div className="px-3 w-full mt-2">
                                        <div>
                                            <label className="flex text-[#70685a] text-[20px] font-bold block text-left mr-10 py-1">
                                                アンケート
                                            </label>
                                            {/* <div className='flex'>
                                                <label className="text-[#70685a] text-[16px] block text-left mr-10">Q1</label>
                                                <label className="text-[#70685a] text-[15px] block text-left mr-10">ご職業</label>
                                            </div> */}
                                            <div className='text-[13px]'>
                                                <div className='flex justify-between'>
                                                    <div className='flex flex-col justify-center'>
                                                        <label className="text-[#70685a] !text-[16px] block text-left mr-1">Q1</label>
                                                    </div>
                                                    <div className='flex flex-col justify-center'>
                                                        <label className="text-[#70685a] !text-[15px] block text-left mr-1">ご職業</label>
                                                    </div>
                                                    {['自営業', '自由業', '会社員', 'パート・アルバイト', '主婦', '学生', '無色'].map((label, index) => {
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
                                            </div>
                                        </div>
                                        <div className='sign-part w-full'>
                                            <div className='sign-width-one'>
                                                <div className='w-full flex'>
                                                    <label className="text-[#70685a] text-[16px] block text-left mr-10">Q2</label>
                                                    <label className="text-[#70685a] text-[15px] block text-left mr-10">次回お持ちいただくご予定の商品はございますか？</label>
                                                </div>
                                                <div className='ml-2 flex text-[13px]'>
                                                    <div className='flex flex-wrap'>
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
                                                                <div className="flex items-center ml-3" key={id}>
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

                                                        <div className='flex items-center ml-3'>
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
                                                                className="w-[100px] text-[#70685a] mb-2 block text-left mr-10 py-1 !mb-0 !h-8"
                                                                placeholder={'その他詳細'}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='sign-width-one'>
                                                {/* <div className='w-full flex'>
                                                    <label className="text-[#70685a] text-[16px] block text-left mr-10">Q3</label>
                                                    <label className="text-[#70685a] text-[15px] block text-left mr-10">DM等、各種ご案内をお送りしてもよろしいですか？</label>
                                                </div> */}
                                                <div className=''>
                                                    <div className='flex gap-10 text-[13px]'>
                                                        <div className='flex flex-col justify-center'>
                                                            <label className="text-[#70685a] !text-[16px] block text-left mr-1">Q3</label>
                                                        </div>
                                                        <div className='flex flex-col justify-center'>
                                                            <label className="text-[#70685a] !text-[15px] block text-left mr-1">DM等、各種ご案内をお送りしてもよろしいですか？</label>
                                                        </div>
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

                </div>
            </div>
        </div>
        {isKeepModalOpen && (
            <div
                className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">

                    <div className="my-4 text-center">
                        <h4 className="text-gray-800 text-base font-semibold mt-4">保存しました</h4>

                        <div className="text-center space-x-4 mt-8">
                            <button type="button" onClick={handleKeepSubmit}
                                className="px-6 py-2 rounded-lg text-white text-sm bg-red-600 hover:bg-red-700 active:bg-red-600">オーケー</button>
                            <button type="button" onClick={onClose}
                                className="px-4 py-2 rounded-lg text-gray-800 text-sm bg-gray-200 hover:bg-gray-300 active:bg-gray-200">キャンセル</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
        {isDeleteModalOpen && (
            <div
                className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">

                    <div className="my-4 text-center">

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-14 fill-red-500 inline" viewBox="0 0 24 24">
                            <path
                                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                                data-original="#000000" />
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                                data-original="#000000" />
                        </svg>
                        <h4 className="text-gray-800 text-base font-semibold mt-4">削除します。よろしいですか？</h4>
                        <div className="text-center space-x-4 mt-8">
                            <button type="button" onClick={handleDeleteSubmit}
                                className="px-6 py-2 rounded-lg text-white text-sm bg-red-600 hover:bg-red-700 active:bg-red-600">オーケー</button>
                            <button type="button" onClick={onDeleteClose}
                                className="px-4 py-2 rounded-lg text-gray-800 text-sm bg-gray-200 hover:bg-gray-300 active:bg-gray-200">キャンセル</button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
    );
};

export default CustomerIndividual;