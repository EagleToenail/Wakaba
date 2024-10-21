import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import LabelComponent from '../../Components/Common/LabelComponent';
import dateimage from '../../Assets/img/datepicker.png';
import leftArrow from '../../Assets/img/right-arrow.png';
import rightArrow from '../../Assets/img/left-arrow.png';
// import dateimage from '../../Assets/img/datepicker.png';
// import DateAndTime from '../../Components/Common/PickData';

const CustomerList = () => {


    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleCustomerClick = (id) => {
        navigate(`/customerindividual/${id}`); // Use navigate for routing
    };

    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center',

    };
    const Th = {
        whiteSpace:'nowrap'
    }

    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
        whiteSpace:'nowrap'
    };

    const [customers, setCustomers] = useState([]);
    const [searchParams, setSearchParams] = useState({
        name: '',
        tel: '',
        address: '',
        birthday: ''
    });

    // const [date, setDate] = useState('');

    // Fetch customer data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        // console.log(`${wakabaBaseUrl}/customer/getCustomerList`);
        axios.get(`${wakabaBaseUrl}/customer/getCustomerList`)
            .then(response => {
                // console.log(response.data)
                setCustomers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);


    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value
        });
    };

    // Handle date change
    // const handleDateChange = (e) => {
    //     setDate(e.target.value);
    //     setSearchParams({
    //         ...searchParams,
    //         birthDate: e.target.value
    //     });
    // };

    // Handle search form submission
    const handleSearch = (e) => {
        e.preventDefault();
        console.log('searchParms', searchParams);
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        console.log('url', wakabaBaseUrl);
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        axios.post(`${wakabaBaseUrl}/customer/search`, { params: searchParams })
        .then(response => {
            setCustomers(response.data);
        })
        .catch(error => {
            console.error("There was an error searching for customers!", error);
        });
    };
    //----------------------------detail address
       //   const [isOpen, setIsOpen] = useState(false);
       const [isshow, setIsShow] = useState(false);

       const openSubtable = () => {
           // setIsOpen(true);
           setIsShow(false);
       };
   
       const closeSubtable = () => {
           // setIsOpen(false);
           setIsShow(true);
       };
       const [isshow1, setIsShow1] = useState(false);

       const openSubtable1 = () => {
           // setIsOpen(true);
           setIsShow1(false);
       };
   
       const closeSubtable1 = () => {
           // setIsOpen(false);
           setIsShow1(true);
       };
       const [isshow2, setIsShow2] = useState(false);

       const openSubtable2 = () => {
           // setIsOpen(true);
           setIsShow2(false);
       };
   
       const closeSubtable2 = () => {
           // setIsOpen(false);
           setIsShow2(true);
       };


       const handleValueChange = async (id, index, e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log('id,name,value',id,index,name,value);

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // console.log(`${wakabaBaseUrl}/sales/getSalesList`);
        await axios.post(`${wakabaBaseUrl}/customer/eidtcardtypecustomer`, { id: id, name: name, value: value})
            .then(response => {
                setCustomers(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    };

    return (
        <>
            <div className='customerlist flex justify-around' >
                <ButtonComponent children={'asdfasfd'} style={{ visibility: 'hidden' }} />
                {/* <div className='mt-1'>
                    <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">顧客一覧</h2>
                </div> */}
                <div className='flex justify-around mt-1'>
                    <ButtonComponent children={'新規顧客登銀'} className='py-2 text-2xl !text-[#695d50] bg-[#ebe6e0]' ><Link to="/customerindividualcreate">新規顧客登録</Link></ButtonComponent>
                </div>
            </div>

            <div className='flex justify-center text-left'>
                <form onSubmit={handleSearch} className='flex flex-wrap justify-center'>
                    <div className='customer-name-tel flex justify-center'>
                        <div className='flex'>
                            <div className=' text-[#70685a] px-2 mr-2 text-left'>
                                <LabelComponent value={'氏名'} className='text-left' />
                                <InputComponent
                                    name="name"
                                    value={searchParams.name}
                                    onChange={handleChange}
                                    className="w-[20vh] h-[40px]"
                                />
                            </div>
                            <div className=' text-[#70685a] px-2 mr-2'>
                                <LabelComponent value={'TEL'} />
                                <InputComponent
                                    name="tel"
                                    value={searchParams.tel}
                                    onChange={handleChange}
                                    className="w-[20vh] h-[40px]"
                                />
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='text-[#70685a] px-2 mr-2'>
                                <LabelComponent value={'住所'} />
                                <InputComponent
                                    name="address"
                                    value={searchParams.address}
                                    onChange={handleChange}
                                className="w-[20vh] h-[40px]"
                                />
                            </div>
                            <div className=' px-2 mr-2 text-center font-bold'>
                                <LabelComponent value={'生年月日'} className='flex' />
                                <div>
                                    <div className='flex'>
                                        <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                            <input name="birthday" type="text" value={searchParams.birthday} required className="w-40 h-11 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly />
                                        </div>
                                        <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                            <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                                <div style={{ position: 'relative' }}>
                                                    <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar'></img>
                                                    <input type="date" name="birthday" onChange={handleChange} style={{ position: 'absolute', left: '0', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex mt-2'>
                        <div className=' text-[#70685a] px-2 mr-5 flex flex-col justify-end'>
                            <label className="text-[#70685a] text-[20px] block text-center pb-2">この条件で</label>
                        </div>
                        <div className=' text-[#70685a] px-2 mr-2 flex flex-col justify-end'>
                            <button
                                type="submit"
                                style={{ display: 'flex', alignItems: 'end' }}
                                className="flex align-end w-20 px-3 py-2 font-bold rounded-md tracking-wide text-[#655b4d] justify-center text-[] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none"
                            >
                                検索
                            </button>
                        </div>
                        <div className=' text-[#70685a] px-2 mr-5 flex flex-col justify-end'>
                            <label className="text-[#70685a] mb-2 block text-center pb-13">(and条件)</label>
                        </div>
                    </div>

                </form>
            </div>

            <div className='mt-2 pb-20 w-full flex'>
                <div style={{ width: '100%', overflow: 'auto' }} >
                    <table className='text-center w-full' style={Table}>
                        <thead className='sticky top-0 bg-white z-10'>
                            <tr>
                                <th style={Th}>顧客番号</th>
                                <th style={Th}>店舖名</th>
                                <th style={Th}>種別</th>
                                <th style={Th}>性別</th>
                                <th style={Th}>氏名</th>
                                <th style={Th}>カタカナ名</th>
                                <th style={Th}>生年月日</th>
                                <th style={Th}>年齢</th>
                                <th style={Th}>TEL</th>
                                <th style={Th}>都道府県</th>
                                <th style={Th}>市町村</th>
                                <th  style={Th}>
                                    <div className='w-ful1 flex justify-center'>
                                        <div className={`flex justify-center ${isshow ? 'w-max' : 'w-20'}`}>
                                            住所詳細
                                            <div className='flex flex-col justify-center'>
                                                {isshow ? <button><img src={rightArrow} className='h-4' alt='' onClick={openSubtable} ></img></button> : <button><img src={leftArrow} className='h-4' alt='' onClick={closeSubtable}></img></button>}
                                            </div>
                                        </div>
                                    </div>
                                </th>
                                <th style={Th}>身分証</th>
                                <th style={Th}>身分証No.</th>
                                <th style={Th}>職業</th>
                                <th style={Th}>来店回数</th>
                                <th style={Th}>最終来店日</th>
                                <th style={Th}>
                                    <div className='w-ful1 flex justify-center'>
                                        <div className={`flex justify-center ${isshow1 ? 'w-max' : 'w-20'}`}>
                                            特記事項
                                            <div className='flex flex-col justify-center'>
                                                {isshow1 ? <button><img src={rightArrow} className='h-4' alt='' onClick={openSubtable1} ></img></button> : <button><img src={leftArrow} className='h-4' alt='' onClick={closeSubtable1}></img></button>}
                                            </div>
                                        </div>
                                    </div>
                                </th>
                                <th style={Th}>
                                    <div className='w-ful1 flex justify-center'>
                                        <div className={`flex justify-center w-max`}>
                                                訪問タイプ
                                            <div className='flex flex-col justify-center'>
                                                {isshow2 ? <button><img src={rightArrow} className='h-4' alt='' onClick={openSubtable2} ></img></button> : <button><img src={leftArrow} className='h-4' alt='' onClick={closeSubtable2}></img></button>}
                                            </div>
                                        </div>
                                    </div>
                                </th>
                                {isshow2 ? <th style={Th} >ブランドタイプ</th> : <th style={{ display: 'none' }}></th>}
                                {isshow2 ? <th style={Th} >Email</th> : <th style={{ display: 'none' }}></th>}
                                {isshow2 ? <th style={Th} >トリガー</th> : <th style={{ display: 'none' }}></th>}
                                <th style={Th} width='2%'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {(customers && customers.length !==0) && customers.map((customer,Index) => (
                                <tr key={customer.id}>
                                    <td style={Td}>{customer.id || ''}</td>
                                    <td style={Td}>{customer.shop || ''}</td>
                                    <td style={Td}>{customer.customer_type || ''}</td>
                                    <td style={Td}>{customer.gender || ''}</td>
                                    <td style={Td} onClick={() => handleCustomerClick(customer.id)}>{customer.full_name || ''}</td>
                                    <td style={Td}>{customer.katakana_name || ''}</td>
                                    <td style={Td}>{customer.birthday || ''}</td>
                                    <td style={Td}>{customer.age || ''}</td>
                                    <td style={Td}>{customer.phone_number || ''}</td>
                                    <td style={Td}>{customer.prefeature || ''}</td>
                                    <td style={Td}>{customer.city || ''}</td>
                                    <td style={Td} >
                                        <div className={`flex justify-center ${isshow ? 'w-max' : 'w-20 overflow-hidden'}`}>{customer.address || ''}</div>
                                    </td>
                                    <td style={Td}>
                                        <select name="cardType" value={customer.cardType} required onChange={(e) => handleValueChange(customer.id,Index,e)} className="w-40 text-[#70685a] py-1 outline-[#70685a]">
                                            <option value="" disabled></option>
                                            <option value="運転免許証">運転免許証</option>
                                            <option value="運転経歴証明書">運転経歴証明書</option>
                                            <option value="旅券（パスポート)">旅券(パスポート)</option>
                                            <option value="個人番号カード（マイナンバーカード）在留カード・特別永住者証明書">個人番号カード（マイナンバーカード）在留カード・特別永住者証明書</option>
                                            <option value="各種福祉手帳（身体障害者手帳等）">各種福祉手帳（身体障害者手帳等）</option>
                                        </select>
                                    </td>
                                    <td style={Td}>{customer.idcard_number || ''}</td>
                                    <td style={Td}>{customer.job || ''}</td>
                                    <td style={Td}>{customer.visit_number || ''}</td>
                                    <td style={Td}>{customer.last_visit_date || ''}</td>
                                    <td style={Td}>
                                        <div className={`flex justify-center ${isshow1 ? 'w-max' : 'w-20 overflow-hidden'}`}>{customer.special_note || ''}</div>
                                    </td>
                                    <td style={Td}>{customer.visit_type || ''}</td>
                                    {isshow2 ? <td style={Td} >{customer.brand_type || ''}</td> : <td style={{ display: 'none' }}></td>}
                                    {isshow2 ? <td style={Td} >{customer.email || ''}</td> : <td style={{ display: 'none' }}></td>}
                                    {isshow2 ? <td style={Td} >{customer.trigger || ''}</td> : <td style={{ display: 'none' }}></td>}
                                    <td onClick={() => handleCustomerClick(customer.id)}>
                                        <svg className="w-5 h-5 ml-5" fill='#70685a' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon" title="ContentCopy">
                                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"></path>
                                        </svg>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default CustomerList;
