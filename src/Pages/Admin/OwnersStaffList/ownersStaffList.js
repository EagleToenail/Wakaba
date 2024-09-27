import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../../Components/Common/Titlebar';
import InputComponent from '../../../Components/Common/InputComponent';
import ButtonComponent from '../../../Components/Common/ButtonComponent';
import LabelComponent from '../../../Components/Common/LabelComponent';
import dateimage from '../../../Assets/img/datepicker.png';
import DateAndTime from '../../../Components/Common/PickData';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OwnersStaffList = () => {
    // const title = 'タイトルタイトル';
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };
    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
    };

    const [users, setUsers] = useState([]);
    const [searchParams, setSearchParams] = useState({
        store_name: '',
        type: '',
        full_name: '',
        phone:'',
        address: '',
        birthday: ''
    });
    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchParams({
            ...searchParams,
            [name]: value
        });
    };
    // Fetch customer data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        // console.log(`${wakabaBaseUrl}/customer/getCustomerList`);
        axios.get(`${wakabaBaseUrl}/admin/user/getUserList`)
            .then(response => {
                const stafflist =[];
                 response.data.map((item) => {
                    console.log(item.User.role_flag)
                    if (item.User.role_flag == 4) {
                        stafflist.push(item);
                    } else {
                      return null;
                    }
                  }).filter((item) => item !== null);

                  setUsers(stafflist);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('searchParms', searchParams);
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        console.log('url', wakabaBaseUrl);
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        axios.post(`${wakabaBaseUrl}/admin/users/search`, { params: searchParams })
        .then(response => {
            setUsers(response.data);
        })
        .catch(error => {
            console.error("There was an error searching for customers!", error);
        });
    };

    const gotoCreate =() =>{
        navigate('/admin/ownerstaffindividualcreate');
    }
    const gotoIndividual =(id) =>{
        navigate(`/admin/ownerstaffindividual/${id}`);
    }

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime/>
            <div className='flex justify-around mt-5' >
                <ButtonComponent children={'asdfasfd'} style={{ visibility: 'hidden' }} />
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">スタッフ一覧</h2>
                <div className='flex justify-around'>
                    <ButtonComponent onClick={gotoCreate} children={'新規スタッフ登銀'} className='py-2 text-2xl !text-[#665c4e] bg-[#ebe6e0]'/>
                </div>
            </div>
            {/*  */}
            <div className='flex mt-3 justify-center text-left'>
                <div className=' text-[#70685a] px-2 mr-2 text-left'>
                    <LabelComponent value={'所属店舗  '} className='text-left'/>
                    <select name="store_name" value={searchParams.store_name || ''} onChange={handleChange} className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                        <option value=""></option>
                        <option value="本部">本部</option>
                        <option value="高崎店">高崎店</option>
                        <option value="生駒店">生駒店</option>
                        <option value="宮崎店">宮崎店</option>
                        <option value="XX店">XX店</option>
                    </select>
                </div>
                <div className=' text-[#70685a] px-2 mr-2'>
                    <LabelComponent value={' 役職'} />
                    <select name="type" value={searchParams.type || ''} onChange={handleChange} className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                        <option value=""></option>
                        <option value="執行役員">執行役員</option>
                        <option value="社員">社員</option>
                        <option value="契約社員">契約社員</option>
                        <option value="アルバイト">アルバイト
                        </option>
                    </select>
                </div>
                <div className=' text-[#70685a] px-2 mr-2 text-left'>
                    <LabelComponent value={'氏名'} className='text-left'/>
                    <InputComponent name="full_name" value={searchParams.full_name || ''} onChange={handleChange} className='w-40 h-8'/>
                </div>
                <div className=' text-[#70685a] px-2 mr-2'>
                    <LabelComponent value={'TEL'} />
                    <InputComponent name="phone" value={searchParams.phone || ''} onChange={handleChange} className='w-40 h-8' />
                </div>
                <div className='text-[#70685a] px-2 mr-2'>
                    <LabelComponent value={'住所'} />
                    <InputComponent name="address" value={searchParams.address || ''} onChange={handleChange} className='w-40 h-8'/>
                </div>
                <div className=' px-2 mr-2 !text-center'>
                    <LabelComponent value={'生年月日'} />
                    <div className='flex'>
                        <div style={{  flexDirection: 'column', }} className='flex align-center justify-around'>
                            <input name="birthday" type="text" value={searchParams.birthday || ''} required className="w-40 h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly/>
                        </div>
                        <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                            <div style={{width:'40px',height:'30px',cursor:'pointer'}}>
                                <div style={{position: 'relative'}}>
                                    <img src={dateimage} style={{width:'40px',height:'30px', position: 'absolute',cursor:'pointer'}} alt='calendar'></img>
                                    <input type="date" name="birthday"  onChange={handleChange} style={{position: 'absolute',left:'0', width:'40px', height:'30px', background:'transparent', border:'none',opacity:'0',cursor:'pointer'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' text-[#70685a] px-2 mr-5 flex flex-col justify-end'>
                    <label className="text-[#70685a] text-[20px] block text-center pb-2">この条件で</label>
                </div>
                <div className=' text-[#70685a] px-2 mr-2 flex flex-col justify-end'>
                    < button onClick={handleSearch} type="button" style={{ display: 'flex', alignItem: 'end' }} className="flex align-end w-20 px-3 py-1 font-bold rounded-md tracking-wide text-[#665b4c] justify-center text-white !bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                        検索
                    </button>
                </div>
                <div className=' text-[#70685a] px-2 mr-5 flex flex-col justify-end'>
                    <label className="text-[#70685a] mb-2 block text-center pb-13">(and条件)</label>
                </div>
            </div>
            {/* <div className='flex justify-center mt-5'>
                <ButtonComponent children={'保存'} className='py-1 text-2xl text-[white]'/>
            </div> */}
            {/*  Tabe*/}
            <div className='mt-10 pl-10 pr-10 pb-20 w-full flex'>
                <table className='text-center w-full' style={Table}>
                    <thead>
                        <tr>
                            {/* <th>削除</th> */}
                            <th>ID</th>
                            <th>所属店舖</th>
                            <th>役職 </th>
                            <th>性別</th>
                            <th>氏名</th>
                            <th>給与デー夕</th>
                            <th>TEL</th>
                            <th>生年月日</th>
                            <th>住所</th>
                            <th>e-mail</th>
                            <th>入社日</th>
                            <th>退社日</th>
                            <th>連帯保証人</th>
                            <th>誓約書</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {(users && users.length !==0) && users.map((user,Index) => (
                            <tr key={Index}>
                                {/* <td ><input  type='checkbox'/></td> */}
                                <td style={Td}>{user.id || ''}</td>
                                <td style={Td}>{user.store_name || ''}</td>
                                <td style={Td}>{user.type || ''}</td>
                                <td style={Td}>{user.gender || ''}</td>
                                <td style={Td}>{user.fullname || ''}</td>
                                <td style={Td}>{user.id || ''}</td>
                                <td style={Td}>{user.phone || ''}</td>
                                <td style={Td}>{user.birthday || ''}</td>
                                <td style={Td}>{user.address || ''}</td>
                                <td style={Td}>{user.email || ''}</td>
                                <td style={Td}>{user.enter_day || ''}</td>
                                <td style={Td}>{user.retire_day || ''}</td>
                                <td style={Td}>{user.guarantor || ''}</td>
                                <td onClick={()=>gotoIndividual(user.id)}> 
                                    <svg className="w-5 h-5 ml-5" fill='#70685a' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyIcon" title="ContentCopy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"></path></svg>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default OwnersStaffList;