import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import LabelComponent from '../../Components/Common/LabelComponent';
// import dateimage from '../../Assets/img/datepicker.png';
import DateAndTime from '../../Components/Common/PickData';

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

    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
    };

    const [customers, setCustomers] = useState([]);
    const [searchParams, setSearchParams] = useState({
        name: '',
        tel: '',
        address: '',
        birthDate: ''
    });

    // const [date, setDate] = useState('');

    // Fetch customer data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        console.log(`${wakabaBaseUrl}/customer/getCustomerList`);
        axios.get(`${wakabaBaseUrl}/customer/getCustomerList`)
            .then(response => {
                console.log(response.data)
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

    return (
        <>
            <DateAndTime />

            <div className='flex justify-around mt-5' >
                <ButtonComponent children={'asdfasfd'} style={{ visibility: 'hidden' }} />
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">顧客一覧</h2>
                <div className='flex justify-around'>
                    <ButtonComponent children={'新規顧客登銀'} className='py-2 text-2xl !text-[#695d50] bg-[#ebe6e0]' ><Link to="/customerindividualcreate">新規顧客登銀</Link></ButtonComponent>
                </div>
            </div>

            <div className='flex mt-3 justify-center text-left'>
                <form onSubmit={handleSearch} className='flex flex-wrap'>
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
                    <div className='text-[#70685a] px-2 mr-2'>
                        <LabelComponent value={'住所'} />
                        <InputComponent
                            name="address"
                            value={searchParams.address}
                            onChange={handleChange}
                           className="w-[40vh] h-[40px]"
                        />
                    </div>
                    {/* <div className=' px-2 mr-2 !text-center'>
                        <LabelComponent value={'生年月日'} />
                        <div className='flex'>
                            <div style={{ flexDirection: 'column', }} className='flex align-center justify-around'>
                                <input
                                    name="birthDate"
                                    type="text"
                                    value={date}
                                    required
                                    className="w-40 h-10 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]"
                                    readOnly
                                />
                            </div>
                            <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                <div style={{ width: '40px', height: '30px', cursor: 'pointer' }}>
                                    <div style={{ position: 'relative' }}>
                                        <img src={dateimage} style={{ width: '40px', height: '30px', position: 'absolute', cursor: 'pointer' }} alt='calendar' />
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            value={date}
                                            onChange={handleDateChange}
                                            style={{ position: 'absolute', left: '0', width: '40px', height: '30px', background: 'transparent', border: 'none', opacity: '0', cursor: 'pointer' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
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
                </form>
            </div>

            <div className='mt-10 pl-10 pr-10 pb-20 w-full flex'>
                <div style={{ width: '100%', overflow: 'auto' }} >
                    <table className='text-center w-full' style={Table}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>氏名</th>
                                <th>カタカナ名</th>
                                <th>TEL</th>
                                <th className='flex justify-center'>
                                    <label className='flex flex-col justify-center'>住所詳細</label>
                                    {/* <svg className='h-10' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight">
                                        <path d="m10 17 5-5-5-5z"></path>
                                    </svg> */}
                                </th>
                                <th>契機</th>
                                <th>ショップ</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map(customer => (
                                <tr key={customer.id}>
                                    <td style={Td}>{customer.id}</td>
                                    <td style={Td} onClick={() => handleCustomerClick(customer.id)}>{customer.full_name}</td>
                                    <td style={Td}>{customer.katakana_name}</td>
                                    <td style={Td}>{customer.phone_number}</td>
                                    <td style={Td}> {customer.address} </td>
                                    <td style={Td}>{customer.opportunity}</td>
                                    <td style={Td}>{customer.shop}</td>
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
