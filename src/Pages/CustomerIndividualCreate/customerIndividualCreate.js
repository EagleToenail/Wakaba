import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../../Assets/css/showtable.css'
import dateimage from '../../Assets/img/datepicker.png';
import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
// import LabelComponent from '../../Components/Common/LabelComponent';


const CustomerIndividualCreate = () => {
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

    const [customer, setCustomer] = useState({
        id: '',
        full_name: '',
        katakana_name: '',
        phone_number: '',
        address: '',
        visit_type: '',
        birthday: '',
        age: '',
        job: '',
        email:'',
        idcard_number:'',
        idCard_url: '',
        cardType: '',
        avatar_url: '',
        prefeature: '',
        city: '',
        gender: '',
        trigger:'',
        brand_type:'',
        shop:'',
        special_note:''

    });

    const [imageAvatarPreview, setAvatarImagePreview] = useState("");
    const [imageIdCardPreview, setIdCardImagePreview] = useState("");

    const navigate = useNavigate();

    // Fetch customer data
    const { id } = useParams();
    console.log('id', id);

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

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false); // For modal visibility

    const openCreateCheckModal = () => {
        setIsCreateModalOpen(true);
    }
    const onClose = () => {
        setIsCreateModalOpen(false);
    }
    //create-symbol
    // const formatPhoneNumber = (number) => {
    //     // Ensure the number is a string
    //     const numStr = number.toString();
        
    //     // Extract parts of the string
    //     const part1 = numStr.slice(0, 3);    // First 3 digits
    //     const part2 = numStr.slice(3, 7);    // Next 4 digits
    //     const part3 = numStr.slice(7);       // Last 4 digits
    
    //     // Combine parts with dashes
    //     return `${part1}-${part2}-${part3}`;
    // };

    const handleCreateSubmit = async (e) => {
        e.preventDefault();
        setIsCreateModalOpen(false);

        // const formattedNumber = formatPhoneNumber(customer.phone_number);
        // customer.phone_number =  formattedNumber;

        const formDataObj = new FormData();
        formDataObj.append('id', customer.id);
        formDataObj.append('shop', customer.shop);
        formDataObj.append('visit_type', customer.visit_type);
        formDataObj.append('full_name', customer.full_name);
        formDataObj.append('katakana_name', customer.katakana_name);
        formDataObj.append('phone_number', customer.phone_number);
        formDataObj.append('birthday', customer.birthday);
        formDataObj.append('age', customer.age);
        formDataObj.append('gender', customer.gender);
        formDataObj.append('job', customer.job);
        formDataObj.append('email', customer.email);
        formDataObj.append('trigger', customer.trigger);
        formDataObj.append('brand_type', customer.brand_type);
        formDataObj.append('idcard_number', customer.idcard_number);
        formDataObj.append('cardType', customer.cardType);
        formDataObj.append('prefeature', customer.prefeature);
        formDataObj.append('city', customer.city);
        formDataObj.append('address', customer.address);
        formDataObj.append('special_note', customer.special_note);

        if (avatarimageFile) formDataObj.append('avatarimage', avatarimageFile);
        if (idcardFile) formDataObj.append('idcard', idcardFile);


        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const response = await axios.post(`${wakabaBaseUrl}/customer/createCustomer`, formDataObj,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            console.log('Response:', response.data);
            // setAvatarImageFile(null);
            // setIdcardFile(null);
            navigate('/customerlist');
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error here
        }
    };
 //-----------------------all clear----------------
 const allClear = () => {
    setCustomer({});
 }

    return (<>
        <div className="bg-[trasparent] font-[sans-serif]">
            <div className='flex justify-center'>
                <div className="w-full" style={{ maxWidth: '80em' }}>
                    <div className="w-full flex justify-end">
                        {/* new */}
                        <div className='flex justify-end'>
                            <div style={{ width: '100%', flexDirection: 'column', }} className='flex align-center justify-end'>
                                <label className="w-full text-[#70685a] font-bold block text-right mr-5">{formattedDateTime}</label>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">顧客 個別情報(作成する画面)</h2>
                    <div className='w-full flex justify-center gap-20 mt-5'>
                        <ButtonComponent name="keep" className='!bg-[#838383] !px-3' onClick={allClear} children="ブランク" />
                        <ButtonComponent name="keep" className='' onClick={openCreateCheckModal} children="作成する" />
                        <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end" style={{ flexDirection: 'column', width: '20%' }}><u> <Link to='/customerlist'>キャンセル</Link></u></label>
                    </div>
                </div>
            </div>
            <div className=" flex  justify-center ">
                <div className="w-full pt-3" style={{ maxWidth: '60em' }}>
                    <div className=" rounded-2xl w-full">
                        <form className=" space-y-2">
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='!mb-0 flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 py-1 !mb-0">店舗名</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="shop" value={customer.shop || ''} onChange={handleCustomerChange} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-3 !mb-0">訪問タイプ</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
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
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 py-1 !mb-0">お名前</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="full_name" value={customer.full_name || ''} onChange={handleCustomerChange} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">カタカナ名</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <input name="katakana_name" value={customer.katakana_name || ''} onChange={handleCustomerChange} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 py-1 !mb-0">お電話番号</label>
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

                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
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

                                <div style={{ width: '5%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right py-1 !mb-0">{customer.age || ''}才</label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex flex-col justify-center text-right'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">性別</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <select id="gender" name="gender" required onChange={handleCustomerChange} value={customer.gender || ''} className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                        <option value="" disabled></option>
                                        <option value="男">男</option>
                                        <option value="女">女</option>
                                    </select>
                                </div>
                            </div>
                            {/* new */}
                            {/* <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">お電話番号</label>
                                </div>
                                <div style={{ width: '35%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <InputComponent name="phoneNumber2" value={formData.phoneNumber2} onChange={handleChange} type='text' required />
                                </div>
                            </div> */}
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 py-1 !mb-0">ご職業</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <InputComponent name="job" value={customer.job || ''} onChange={handleCustomerChange} type='text' required />
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">Email</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <InputComponent name="email" value={customer.email || ''} onChange={handleCustomerChange} type="email" required />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-center mr-10 py-1 !mb-0">トリガー</label>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <InputComponent name="trigger" value={customer.trigger || ''} onChange={handleCustomerChange} type='text' required />
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">ブランドタイプ</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <InputComponent name="brand_type" value={customer.brand_type || ''} onChange={handleCustomerChange} type='text' required />
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
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
                                <div style={{ width: '24%', flexDirection: 'column'}} className='flex align-center justify-around ml-3'>
                                    <select id="cardType" name="cardType" value={customer.cardType || ''} required onChange={handleCustomerChange} className="w-full h-9 text-[#70685a] text-[15px] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                        <option value="" disabled></option>
                                        <option value="運転免許証">運転免許証</option>
                                        <option value="運転経歴証明書">運転経歴証明書</option>
                                        <option value="旅券（パスポート)">旅券(パスポート)</option>
                                        <option value="個人番号カード（マイナンバーカード）在留カード・特別永住者証明書">個人番号カード（マイナンバーカード）在留カード・特別永住者証明書</option>
                                        <option value="各種福祉手帳（身体障害者手帳等）">各種福祉手帳（身体障害者手帳等）</option>
                                    </select>
                                </div>
                                <div style={{ width: '30%', flexDirection: 'column',display:'none'}} className='flex align-center justify-around'>
                                    <button type="button" onClick={() => handleButtonClick(avatarImageInputRef)} className="py-2 text-[#70685a] rounded-full tracking-wider font-medium outline-none border border-[#70685a] ">画像と情報表示</button>
                                    <input type="file" name="avatarimageUpload" ref={avatarImageInputRef} style={{ display: 'none' }} onChange={(e) => handleFileChange(e, setAvatarImageFile, setIdCardImagePreview)} />
                                    {/* {avatarimageFile && <p>Selected Image: {avatarimageFile.name}</p>} */}
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">身分証No.</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
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
                                            {imageAvatarPreview==="" ? "": <img src={imageAvatarPreview} alt="Image Preview" className='h-[100px] p-1 rounded-lg' />}
                                        </div>
                                        <div style={{ width: '35%',display:'none'}} className='border border-[#70685a] rounded-full flex justify-center'>
                                            {imageIdCardPreview ==="" ? "": <img src={imageIdCardPreview} alt="Image Preview" className='h-[100px] p-1 rounded-full' />}
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
                                    <select value={customer.prefeature || ''} required onChange={handleCustomerChange} name="prefeature" className="w-full h-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
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
            </div>
        </div>
        {isCreateModalOpen && (
            <div
            className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">

                <div className="my-4 text-center">
                    <h4 className="text-gray-800 text-base font-semibold mt-4">保存しました</h4>

                    <div className="text-center space-x-4 mt-8">
                        <button type="button" onClick={handleCreateSubmit}
                            className="px-6 py-2 rounded-lg text-white text-sm bg-red-600 hover:bg-red-700 active:bg-red-600">オーケー</button>
                        <button type="button" onClick={onClose}
                            className="px-4 py-2 rounded-lg text-gray-800 text-sm bg-gray-200 hover:bg-gray-300 active:bg-gray-200">キャンセル</button>
                    </div>
                </div>
            </div>
        </div>
        )}
  
    </>
    );
};

export default CustomerIndividualCreate;