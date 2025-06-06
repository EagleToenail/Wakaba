import React, { useState, useRef, useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import Titlebar from '../../Components/Common/Titlebar';
import InputComponent from '../../Components/Common/InputComponent';
import dateimage from '../../Assets/img/datepicker.png';
import DateAndTime from '../../Components/Common/PickData';


// THIS PAGE SHOULD HAVE VERTICAL SCROLL BAR : Onishi Comment Aug-22 2024

const Profile = () => {
    const title = 'タイトルタイトル';

    useEffect(() => {
        // Set overflow to hidden when the component mounts
        document.body.style.overflow = 'auto';

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'hidden';
        };
    }, []);

    const [profileData, setProfileData] = useState({
        id: '',
        username: '',
        email: '',
        // password: '',
        fullname: '',
        store_name: '',
        store_type: '',
        katakana_name: '',
        phone: '',
        birthday: '',
        age: '',
        gender: '',
        card_type: '',
        prefeature: '',
        city: '',
        address: '',
        staff_terms: '',
        guarantor: '',
    });

    const userId = localStorage.getItem('userId');
    useEffect(() => {

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.post(`${wakabaBaseUrl}/profile/getProfileById`,{userId})
            .then(response => {
                console.log("data", response.data)
                setProfileData(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, [userId]);

    const navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);
    const [agreeSel, setAgreeSel] = useState(false);
    const handleCheckChange = (event) => {
        const element = document.querySelector('#agreeLabel');
        element.style.color = '#70685a';
        setIsChecked(event.target.checked);
        if(isChecked) setAgreeSel(true);
      };

    // //file upload
    const [avatarimageFile, setAvatarImageFile] = useState(null);
    const [pledgeimageFile, setPledgeImageFile] = useState(null);
    const [resumepdfFile, setResumePdfFile] = useState(null);
    const [jobpdfFile, setJobPdfFile] = useState(null);

    const [idcardFile, setIdcardFile] = useState(null);

    const avatarImageInputRef = useRef(null);
    const pledgeImageInputRef = useRef(null);
    const resumePdfInputRef = useRef(null);
    const jobPdfInputRef = useRef(null);

    const idcardInputRef = useRef(null);


    const handleChange = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDateChange = (e) => {
        const birthDate = new Date(e.target.value);
        const today = new Date();

        let age1 = today.getFullYear() - birthDate.getFullYear();

        setProfileData({
            ...profileData,
            birthday: e.target.value,
            age: age1,
        });
    };

    const handleFileChange = (event, setFile) => {
        console.log(event.target.files[0]);
        setFile(event.target.files[0]);
    };

    const handleButtonClick = (inputRef) => {
        inputRef.current.click();
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('agree',agreeSel);
        if(!agreeSel) {
            const element = document.querySelector('#agreeLabel');
            element.style.color = 'red';
        }
        setAgreeSel(false);
        if(!isChecked) return;
        // Create FormData object
        const formDataObj = new FormData();
        formDataObj.append('id', profileData.id);
        formDataObj.append('user_id', profileData.user_id);
        formDataObj.append('store_name', profileData.store_name);
        formDataObj.append('store_type', profileData.store_type);
        formDataObj.append('fullname', profileData.fullname);
        formDataObj.append('katakana_name', profileData.katakana_name);
        formDataObj.append('phone', profileData.phone);
        formDataObj.append('birthday', profileData.birthday);
        formDataObj.append('age', profileData.age);
        formDataObj.append('gender', profileData.gender);
        formDataObj.append('card_type', profileData.card_type);
        formDataObj.append('prefeature', profileData.prefeature);
        formDataObj.append('city', profileData.city);
        formDataObj.append('address', profileData.address);
        formDataObj.append('staff_terms', profileData.staff_terms);
        formDataObj.append('guarantor', profileData.guarantor);

        if (avatarimageFile) formDataObj.append('avatar', avatarimageFile);
        if (pledgeimageFile) formDataObj.append('pledge_image', pledgeimageFile);
        if (resumepdfFile) formDataObj.append('resume', resumepdfFile);
        if (jobpdfFile) formDataObj.append('job_description', jobpdfFile);
        if (idcardFile) formDataObj.append('idcard_image', idcardFile);
            console.log(formDataObj);

        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const response = await axios.post(`${wakabaBaseUrl}/user/updateuserprofile`, formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:', response.data);
            setAvatarImageFile(null);
            setPledgeImageFile(null);
            setResumePdfFile(null);
            setJobPdfFile(null);
            setIdcardFile(null);
            // Handle successful response here
            navigate('/logintimecard'); // Navigate to the profile page after closing the modal
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error here
        }
    };

    return (
        <>
            <Titlebar title={title} />
            <DateAndTime />
            <div className="bg-[trasparent] font-[sans-serif] mt-12">
                <div className=" flex flex-col items-center justify-center px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '50em' }}>
                        <div className=" rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">規約スタッフ登録 </h2>
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">(本登録  入カフォーム) </h2>
                            <div className='flex flex justify-end'>
                                <h2 className='text-[red] flex text-[15px] flex-col justify-center'>*</h2>
                                <h2 className="text-[#70685a] text-center text-[10px] flex flex-col justify-center">&nbsp;必須入力</h2>
                            </div>

                            <form className=" space-y-6" onSubmit={handleSubmit}>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">メールアドレス</label>
                                    </div>
                                    <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 py-1 !mb-0">{profileData.email || ''}</label>
                                    </div>
                                </div>
                                {/* new */}
                                {/* <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">パスワード</label>
                                    </div>
                                    <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 py-2 !mb-0">{profileData.password}</label>
                                    </div>
                                </div> */}
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='!mb-0 flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">店舗名</label>
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <select name="store_name" onChange={handleChange} value={profileData.store_name || ''} required className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                            <option value="" disabled></option>
                                            <option value="高崎店">高崎店</option>
                                        </select>
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-3 !mb-0">種別</label>
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <select name="store_type" onChange={handleChange} value={profileData.store_type || ''} required className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                            <option value="" disabled></option>
                                            <option value="執行役員">執行役員</option>
                                            <option value="社員">社員</option>
                                            <option value="契約社員">契約社員</option>
                                            <option value="アルバイト">アルバイト
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">お名前</label>
                                    </div>
                                    <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="fullname" onChange={handleChange} value={profileData.fullname || ''} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">カタカナ名</label>
                                    </div>
                                    <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="katakana_name" onChange={handleChange} value={profileData.katakana_name || ''} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">お電話番号</label>
                                    </div>
                                    <div style={{ width: '35%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <InputComponent name="phone" value={profileData.phone || ''} onChange={handleChange} type='text' required />
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-11 py-1 !mb-0">生年月日</label>
                                    </div>

                                    <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="birthday" type="text" value={profileData.birthday || ''} required className="w-full text-[#70685a] border border-[#70685a] px-4 py-1 text-[20px] outline-[#70685a]" readOnly />
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

                                    <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">{profileData.age || ''}才</label>
                                    </div>
                                    <div style={{ width: '15%', flexDirection: 'column', }} className='flex flex-col justify-center text-right'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right py-1 !mb-0 mr-3">性別</label>
                                    </div>
                                    <div style={{ width: '15%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <select id="gender" name="gender" onChange={handleChange} value={profileData.gender || ''} required className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                        <option value="" disabled></option>
                                            <option value="man">男</option>
                                            <option value="woman">女</option>
                                        </select>
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
                                        {/* {idcardFile && <p>{idcardFile.name}</p>} */}
                                    </div>
                                    <div style={{ width: '40%', flexDirection: 'column', height: '40px', paddingRight: '5%' }} className='flex align-center justify-around'>
                                        <select id="card_type" name="card_type" value={profileData.card_type || ''} required onChange={handleChange} className="w-full h-full text-[#70685a] text-[15px] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                            <option value="" disabled></option>
                                            <option value="運転免許証">運転免許証</option>
                                            <option value="運転経歴証明書">運転経歴証明書</option>
                                            <option value="旅券（パスポート)">旅券（パスポート)</option>
                                            <option value="個人番号カード（マイナンバーカード）在留カード・特別永住者証明書">個人番号カード（マイナンバーカード）在留カード・特別永住者証明書</option>
                                            <option value="各種福祉手帳（身体障害者手帳等）">各種福祉手帳（身体障害者手帳等）</option>
                                        </select>
                                    </div>
                                    <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <button type="button" onClick={() => handleButtonClick(avatarImageInputRef)} className="py-2 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-medium outline-none border border-[#70685a] ">画像と情報表示</button>
                                        <input type="file" name="avatarimageUpload" ref={avatarImageInputRef} style={{ display: 'none' }} onChange={(e) => handleFileChange(e, setAvatarImageFile)} />
                                        {/* {avatarimageFile && <p>Selected Image: {avatarimageFile.name}</p>} */}
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">都道府県</label>
                                    </div>
                                    <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <select id="prefeature" value={profileData.prefeature || ''} onChange={handleChange} name="prefeature" required className="w-full h-full text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                            <option value="" disabled></option>
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
                                        <input name="city" value={profileData.city || ''} onChange={handleChange} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">住所詳細</label>
                                    </div>
                                    <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <input name="address" value={profileData.address || ''} onChange={handleChange} type="text" required className="w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]" />
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">書類</label>
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <button type="button" onClick={() => handleButtonClick(resumePdfInputRef)} className=" py-2 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-medium outline-none border border-[#70685a] ">履歴書</button>
                                        <input type="file" name="resumeUpload" ref={resumePdfInputRef} style={{ display: 'none' }} onChange={(e) => handleFileChange(e, setResumePdfFile)} />
                                        {/* {resumepdfFile && <p>{resumepdfFile.name}</p>} */}
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around px-5'>
                                        <button type="button" onClick={() => handleButtonClick(jobPdfInputRef)} className=" py-2 min-w-[160px] text-[#70685a] rounded-full tracking-wider font-medium outline-none border border-[#70685a] ">職務糸歴書</button>
                                        <input type="file" name="jobUpload" ref={jobPdfInputRef} style={{ display: 'none' }} onChange={(e) => handleFileChange(e, setJobPdfFile)} />
                                        {/* {jobpdfFile && <p>{jobpdfFile.name}</p>} */}
                                    </div>
                                </div>
                                {/* new */}
                                <div className='flex'>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">身分保証人</label>
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                        <select id="guarantor" name="guarantor" value={profileData.guarantor || ''} required onChange={handleChange} className="w-full h-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                            <option value="" disabled></option>
                                            <option value="配偶者">配偶者</option>
                                            <option value="子供">子供</option>
                                            <option value="親">親</option>
                                            <option value="親戚">親戚</option>
                                            <option value="友人">友人</option>
                                        </select>
                                    </div>
                                    <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around px-5'>
                                        <button type="button" onClick={() => handleButtonClick(pledgeImageInputRef)} className="py-2 min-w-[160px] text-[#70685a] rounded-full text-sm tracking-wider font-medium outline-none border border-[#70685a] ">誓約書画像</button>
                                        <input type="file" name="pledgeUpoad" ref={pledgeImageInputRef} style={{ display: 'none' }} onChange={(e) => handleFileChange(e, setPledgeImageFile)} />
                                        {/* {pledgeimageFile && <p>{pledgeimageFile.name}</p>} */}
                                    </div>
                                </div>
                                <h2 className=" text-[#70685a] text-center text-2xl font-bold flex justify-center">スタッフ規約</h2>
                                <div className='w-full'>
                                    <textarea
                                        rows="6"
                                        cols="50"
                                        name="staff_terms"
                                        value={profileData.staff_terms || ''} // Set the value from state
                                        onChange={handleChange} // Handle changes
                                        className='w-full text-[#70685a] border border-[#70685a] px-4 py-2 outline-[#70685a]'
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-center !mt-10">
                                    <input id="agreeSel" type="checkbox" name='agreeSel' checked={isChecked}  onChange={handleCheckChange}
                                        className="w-6 h-6 mr-3 focus:ring-1 focus:ring-offset-slate-200 focus:ring-offset-4 focus:ring-[#007bff]" />
                                    <label htmlFor="checkbox1" id="agreeLabel" className="text-black text-[20px]">規約に同意して </label>
                                </div>


                                <div className='flex justify-between !mt-5 pb-10' >

                                    <div className="!mt-5  flex" style={{ marginBottom: '10px', width: '80%', paddingLeft: '20%' }}>
                                        <div className='w-full flex justify-center'>
                                            <button name='register' type="submit" className="w-30 px-20 py-1 font-bold text-[white] tracking-wide rounded-lg justify-center t bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                                {/* <Link to='/logintimecard'>登録する</Link> */}
                                                登録する
                                            </button>
                                        </div>
                                    </div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end" style={{ flexDirection: 'column', width: '20%' }}><u> <Link to='/tomoveinputform'>キャンセル</Link></u></label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;