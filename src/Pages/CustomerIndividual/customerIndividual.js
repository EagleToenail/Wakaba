import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import '../../Assets/css/showtable.css'
import dateimage from '../../Assets/img/datepicker.png';
import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
// import LabelComponent from '../../Components/Common/LabelComponent';


const CustomerIndividual = () => {
    // const title = 'タイトルタイトル';

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
    };


    const [formData, setFormData] = useState({
        id:'',
        customerID:'',
        storeName:'',
        storeType:'',
        name: '',
        katakanaName: '',
        phoneNumber1: '',
        birthdayValue: '',
        gender: '男',
        phoneNumber2: '',
        organBusiness: '',
        cardType: '運転免許証',
        prefecture: '北海道',
        city: '',
        addressdetail: '',
        staffTerms: '',
    });
    const [customer,setCustomer] = useState({
        id:'',
        full_name:'',
        katakana_name:'',
        phone_number:'',
        address:''
    });
    const [customerPastVisitHistory, setCustomerPastVisitHistory] = useState([]);
    const navigate = useNavigate();

        // Fetch customerPastVisitHistory data
        useEffect(() => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
    
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
    
            setCustomerPastVisitHistory([
                {
                    "id": 1,
                    "numberOfVisit": "123",
                    "visitDate": "1999/12/31",
                    "applicable": "買取",
                    "totalAmount": "9,999,999",
                    "category1": "ジュエリー",
                    "productName": "グシチooooooo",
                    "totalSales": "999,999,999",
                    "totalGrossProfit": "999,999,999",
                    "totalPurchaseAmount": "999,999,999",
                },
                {
                    "id": 2,
                    "numberOfVisit": "123",
                    "visitDate": "1999/12/30",
                    "applicable": "買取",
                    "totalAmount": "9,999,999",
                    "category1": "ジュエリー",
                    "productName": "グシチooooooo",
                    "totalSales": "999,999,999",
                    "totalGrossProfit": "999,999,999",
                    "totalPurchaseAmount": "999,999,999",
                },
                {
                    "id": 2,
                    "numberOfVisit": "123",
                    "visitDate": "1999/12/29",
                    "applicable": "買取",
                    "totalAmount": "9,999,999",
                    "category1": "ジュエリー",
                    "productName": "グシチooooooo",
                    "totalSales": "999,999,999",
                    "totalGrossProfit": "999,999,999",
                    "totalPurchaseAmount": "999,999,999",
                },

            ]
            );
    
            // axios.get(`${wakabaBaseUrl}/coustomervisithistory/:id`)
            //     .then(response => {
            //         setCustomerPastVisitHistory(response.data);
            //     })
            //     .catch(error => {
            //         console.error("There was an error fetching the customer data!", error);
            //     });
        }, []);
        // Fetch customer data
        const { id } = useParams();
        console.log('id',id);

        useEffect(() => {

            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
    
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
    
            // setFormData(
            //     {
            //         "id":1,
            //         "customerID": 1,
            //         "storeName": "Store A",
            //         "storeType": "Regular",
            //         "gender": "Male",
            //         "name": "John Doe",
            //         "katakanaName": "ジョン ドウ",
            //         "phoneNumber1": "123-456-7890",
            //         "birthdayValue":"1999-11-01",
            //         "organBusiness":"ABC",
            //         "phoneNumber2": "123-456-7890",
            //         "prefecture": "Tokyo",
            //         "city": "Shibuya",
            //         "addressdetail": "1-1-1 Shibuya",
            //         "cardType": "Passport",
            //         "staffTerms": "Frequent visitor"
            //     },
            // );
    
            axios.get(`${wakabaBaseUrl}/customer/getUserByCustomer/${id}`)
                .then(response => {
                    console.log("data",response.data)
                    setCustomer(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }, [id]);

    // //file upload
    const [avatarimageFile, setAvatarImageFile] = useState(null);
    const [idcardFile, setIdcardFile] = useState(null);

    const avatarImageInputRef = useRef(null);
    const idcardInputRef = useRef(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleCustomerChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value,
        });
    };

    const handleDateChange = (e) => {
        setFormData({
            ...formData,
            birthdayValue: e.target.value,
        });
    };

    const handleFileChange = (event, setFile) => {
        setFile(event.target.files[0]);
    };

    const handleButtonClick = (inputRef) => {
        inputRef.current.click();
    };

    const handleKeepSubmit = async (e) => {
        e.preventDefault();

        const formDataObj = new FormData();
        formDataObj.append('customerID', formData.customerID);
        formDataObj.append('storeName', formData.storeName);
        formDataObj.append('storeType', formData.storeType);
        formDataObj.append('name', formData.name);
        formDataObj.append('katakanaName', formData.katakanaName);
        formDataObj.append('phoneNumber1', formData.phoneNumber1);
        formDataObj.append('birthdayValue', formData.birthdayValue);
        formDataObj.append('gender', formData.gender);
        formDataObj.append('phonenumber2', formData.phoneNumber2);
        formDataObj.append('organbusiness', formData.organBusiness);
        formDataObj.append('cardType', formData.cardType);
        formDataObj.append('prefecture', formData.prefecture);
        formDataObj.append('city', formData.city);
        formDataObj.append('addressdetail', formData.addressdetail);
        formDataObj.append('staffTerms', formData.staffTerms);

        if (avatarimageFile) formDataObj.append('avatarimage', avatarimageFile);
        if (idcardFile) formDataObj.append('idcard', idcardFile);

        console.log('formData', formData);

        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            // const response = await axios.post(`${wakabaBaseUrl}/profile`, formDataObj, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data',
            //     },
            // });
            //console.log('Response:', response.data);
            setAvatarImageFile(null);
            setIdcardFile(null);
            // Handle successful response here
            //navigate('/'); // Navigate to the profile page after closing the modal
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error here
        }
    };
    const handleDeleteSubmit = async (e) => {
        e.preventDefault();
        const coustomerId = formData.customerID
        console.log('CustomerId', coustomerId);

        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            //const response = await axios.post(`${wakabaBaseUrl}/profile`, {coustomerId});
            //console.log('Response:', response.data);

            //navigate('/'); // Navigate to the profile page after closing the modal
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error here
        }
    };
    const handleCustomerPurchaseInvoiceClick = (id) => {
        navigate(`/customerindividual/${id}`); // Use navigate for routing
    };

    return (<>
        <div className="bg-[trasparent] font-[sans-serif]">
            <div className='flex justify-center'>
                <div className="w-full pt-3" style={{ maxWidth: '80em' }}>
                    <div className="w-full pt-3" style={{ maxWidth: '40em' }}>
                        {/* new */}
                        <div className='flex'>
                            <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 !mb-0">来店時間</label>
                            </div>
                            <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                <label className="text-[#70685a] font-bold block text-left mr-10 py-1 !mb-0">{formattedDateTime}</label>
                            </div>
                        </div>
                        {/* new */}
                        <div className='flex'>
                            <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">顧客番号</label>
                            </div>
                            <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 py-1 !mb-0">{customer.id}</label>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center !mt-0">顧客 個別情報(編集画面)</h2>
                    <div className='w-full flex justify-between mt-10' style={{ marginLeft: '13%' }}>
                        <ButtonComponent name="delete" children="削除" onClick={handleDeleteSubmit} className='px-5' style={{ backgroundColor: '#838383' }} />
                        <ButtonComponent name="keep" className='' onClick={handleKeepSubmit} children="保存" />
                        <ButtonComponent name="onsitepurchase" children="出張買取" className='px-5' style={{ border: '1px solid #838383', backgroundColor: 'transparent', color: '#838383', }} ><Link to='/onsitepurchase'>キャンセル</Link></ButtonComponent>
                        <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end" style={{ flexDirection: 'column', width: '20%' }}><u> <Link to='/customerlist'>キャンセル</Link></u></label>
                    </div>
                </div>
            </div>
            <div className=" flex  justify-center ">
                <div className="w-full pt-3" style={{ maxWidth: '50em' }}>
                    <div className=" rounded-2xl w-full">
                        <form className=" space-y-6 pt-10">
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='!mb-0 flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">店舗名</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label name="storename" className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-2 !mb-0">{formData.storeName}</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-3 !mb-0">種別</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <select id="storeType" name="storeType" value={formData.storeType} onChange={handleChange}  className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                        <option value="VIP">VIP</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Åland">Åland</option>
                                        <option value="Albania">Albania</option>
                                    </select>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">お名前</label>
                                </div>
                                <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="name" value={customer.full_name} onChange={handleCustomerChange} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">カタカナ名</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="katakanaName" value={customer.katakana_name} onChange={handleCustomerChange} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">お電話番号</label>
                                </div>
                                <div style={{ width: '35%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <InputComponent name="phoneNumber1" value={customer.phone_number} onChange={handleCustomerChange} type='text' required />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-11 py-1 !mb-0">生年月日</label>
                                </div>

                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="birthdayValue" type="text" value={formData.birthdayValue} required className="w-full text-[#70685a] border border-[#70685a] px-4 py-1 text-[20px] outline-[#70685a]" readOnly/>
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

                                <div style={{ width: '15%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">999才</label>
                                </div>
                                <div style={{ width: '15%', flexDirection: 'column', }} className='flex flex-col justify-center text-right'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right py-1 !mb-0 mr-3">性別</label>
                                </div>
                                <div style={{ width: '15%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <select id="gender" name="gender" onChange={handleChange} value={formData.gender} className="w-40 text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                        <option value="man">男</option>
                                        <option value="woman">女</option>
                                    </select>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">お電話番号</label>
                                </div>
                                <div style={{ width: '35%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <InputComponent name="phoneNumber2" value={formData.phoneNumber2} onChange={handleChange} type='text' required />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">ご職業</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <InputComponent name="organBusiness" value={formData.organBusiness} onChange={handleChange} type='text' required />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">本人確認書類</label>
                                </div>
                                <div style={{ width: '10%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <button type="button" onClick={() => handleButtonClick(idcardInputRef)}
                                        className="w-9 h-9 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="black" className="inline" viewBox="0 0 512 512">
                                            <path
                                                d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                                data-original="#000000" />
                                        </svg>
                                    </button>
                                    <input type="file" name='idcardUpload' ref={idcardInputRef} style={{ display: 'none' }} onChange={(e) => handleFileChange(e, setIdcardFile)} />
                                    {idcardFile && <p>{idcardFile.name}</p>}
                                </div>
                                <div style={{ width: '40%', flexDirection: 'column', height: '40px', marginRight: '5%' }} className='flex align-center justify-around'>
                                    <select id="cardType" name="cardType" value={formData.cardType} onChange={handleChange} className="w-full h-full text-[#70685a] text-[15px] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                        <option value="運転免許証">運転免許証</option>
                                        <option value="運転経歴証明書">運転経歴証明書</option>
                                        <option value="旅券（パスポート)">旅券(パスポート)</option>
                                        <option value="個人番号カード（マイナンバーカード）在留カード・特別永住者証明書">個人番号カード（マイナンバーカード）在留カード・特別永住者証明書</option>
                                        <option value="各種福祉手帳（身体障害者手帳等）">各種福祉手帳（身体障害者手帳等）</option>
                                    </select>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <button type="button" onClick={() => handleButtonClick(avatarImageInputRef)} className="py-2 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-medium outline-none border border-[#70685a] ">画像と情報表示</button>
                                    <input type="file" name="avatarimageUpload" ref={avatarImageInputRef} style={{ display: 'none' }} onChange={(e) => handleFileChange(e, setAvatarImageFile)} />
                                    {avatarimageFile && <p>Selected Image: {avatarimageFile.name}</p>}
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">都道府県</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <select id="prefeature" value={formData.prefecture} onChange={handleChange} name="prefeature" className="w-full h-full text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                        <option value="Hokkaido">北海道</option>
                                        <option value="Aomori">青森県</option>
                                        <option value="Iwate">岩手県</option>
                                        <option value="Miyagi">宮城県</option>
                                        <option value="Akita">秋田県</option>
                                        <option value="Yamagata">山形県</option>
                                        <option value="Fukushima">福島県</option>
                                        <option value="Ibaraki">茨城県</option>
                                        <option value="Tochigi">栃木県</option>
                                        <option value="Gunma">群馬県</option>
                                        <option value="Saitama">埼玉県</option>
                                        <option value="Chiba">千葉県</option>
                                        <option value="Tokyo">東京都</option>
                                        <option value="Kanagawa">神奈川県</option>
                                        <option value="Niigata">新潟県</option>
                                        <option value="Toyama">富山県</option>
                                        <option value="Ishikawa">石川県</option>
                                        <option value="Fukui">福井県</option>
                                        <option value="Yamanashi">山梨県</option>
                                        <option value="Nagano">長野県</option>
                                        <option value="Gifu">岐阜県</option>
                                        <option value="Shizuoka">静岡県</option>
                                        <option value="Aichi">愛知県</option>
                                        <option value="Mie">三重県</option>
                                        <option value="Shiga">滋賀県</option>
                                        <option value="Kyoto">京都府</option>
                                        <option value="Osaka">大阪府</option>
                                        <option value="Hyogo">兵庫県</option>
                                        <option value="Nara">奈良県</option>
                                        <option value="Wakayama">和歌山県</option>
                                        <option value="Tottori">鳥取県</option>
                                        <option value="Shimane">島根県</option>
                                        <option value="Okayama">岡山県</option>
                                        <option value="Hiroshima">広島県</option>
                                        <option value="Yamaguchi">山口県</option>
                                        <option value="Tokushima">徳島県</option>
                                        <option value="Kagawa">香川県</option>
                                        <option value="Ehime">愛媛県</option>
                                        <option value="Kochi">高知県</option>
                                        <option value="Fukuoka">福岡県</option>
                                        <option value="Saga">佐賀県</option>
                                        <option value="Nagasaki">長崎県</option>
                                        <option value="Kumamoto">熊本県</option>
                                        <option value="Oita">大分県</option>
                                        <option value="Miyazaki">宮崎県</option>
                                        <option value="Kagoshima">鹿児島県</option>
                                        <option value="Okinawa">沖縄県</option>
                                    </select>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">市町村</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="city" type="text" value={formData.city} onChange={handleChange} required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">住所詳細</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="addressdetail" type="text" value={customer.address} onChange={handleCustomerChange} required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex '>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-11 py-1 !mb-0">特記事項</label>
                                </div>
                                <div className='' style={{ width: '75%', flexDirection: 'column', }}>
                                    <textarea
                                        rows="6"
                                        cols="50"
                                        name='staffTerms'
                                        value={formData.staffTerms}// Set the value from state
                                        onChange={handleChange} // Handle changes
                                        className='w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]'
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Detail area*/}
                <div className="w-full h-full mt-10 pt-5" style={{ maxWidth: '50em' }}>
                    {/* Detail area First*/}
                    <div style={{ width: '100%', }} className='flex'>
                        <div className=" h-full w-full ml-10">
                            {/*Past visit history of Table area */}
                            <div className="border border-[#70685a] rounded px-3 w-full mb-5" style={{ height: '400px', overflowX: 'scroll', overflowY: 'scroll' }}>
                                <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-10 py-1 !mb-0">Past vist history</label>
                                <div style={{ width: '100%',  }} >
                                    <table className='text-center w-full' style={Table}>
                                        <thead>
                                            <tr>
                                                <th className='whitespace-nowrap text-eclipse' width='5%'>来店回数 </th>
                                                <th className='whitespace-nowrap' width='5%'></th>
                                                <th className='whitespace-nowrap' width='5%'></th>
                                                <th className='whitespace-nowrap' width='5%'></th>
                                                <th className='whitespace-nowrap' width='5%'></th>
                                                <th className='whitespace-nowrap' width='10%'>合計</th>
                                                <th className='whitespace-nowrap' width='5%'>99,999,999</th>
                                                <th className='whitespace-nowrap' width='5%'>99,999,999</th>
                                                <th className='whitespace-nowrap' width='5%'>99,999,999</th>
                                            </tr>
                                            <tr>
                                                <th className='whitespace-nowrap' width='5%'>999</th>
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
                                            {customerPastVisitHistory.map((pastVisit,Index) => (
                                                <tr key={Index}>
                                                    <td onClick={() => handleCustomerPurchaseInvoiceClick(pastVisit.id)}>
                                                         <div className='flex justify-center'>
                                                            <div>{Index+1}.</div>
                                                            <div>
                                                                <svg className="w-5 h-5 ml-1" fill='#70685a' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon" title="ContentCopy">
                                                                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"></path>
                                                                </svg>
                                                            </div>
                                                        </div> 
                                                    </td>
                                                    <td style={Td}>{pastVisit.visitDate}</td>
                                                    <td style={Td}>{pastVisit.applicable}</td>
                                                    <td style={Td}>{pastVisit.totalAmount}</td>
                                                    <td style={Td}>{pastVisit.category1}</td>
                                                    <td style={Td}>{pastVisit.productName}</td>
                                                    <td style={Td}>{pastVisit.totalSales}</td>
                                                    <td style={Td}>{pastVisit.totalGrossProfit}</td>
                                                    <td style={Td}>{pastVisit.totalPurchaseAmount}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* Text area */}
                            <div className="border border-[#70685a] rounded px-3 w-full" style={{ height: '400px', overflowX: 'scroll', overflowY: 'scroll' }}>
                                <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-10 py-1 !mb-0">Whole hearing</label>
                                <div>
                                    <div className='flex'>
                                        <label className="text-[#70685a] text-[20px] mb-2 block text-left mr-10 py-1">Eleven 1</label>
                                        <label className="text-[#70685a] text-[20px] mb-2 block text-left mr-10 py-1 !mb-0">O O O O O O O O</label>
                                    </div>
                                    <div className='border border-[#70685a] ml-20'>
                                        <label className="text-[#70685a] text-[20px] mb-2 block text-left  mr-10 py-1 !mb-0">O O O O O O O O</label>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex'>
                                        <label className="text-[#70685a] text-[20px] mb-2 block text-left mr-10 py-1">Eleven 2</label>
                                        <label className="text-[#70685a] text-[20px] mb-2 block text-left mr-10 py-1 !mb-0">O O O O O O O O</label>
                                    </div>
                                    <div className='border border-[#70685a] ml-20'>
                                        <label className="text-[#70685a] text-[20px] mb-2 block text-left  mr-10 py-1 !mb-0">O O O O O O O O</label>
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

export default CustomerIndividual;