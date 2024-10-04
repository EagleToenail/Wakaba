import React, { useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/nowdateandtime';
import axios from 'axios';

const Login = () => {
    const title = 'タイトルタイトル';
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = 'auto';
        return () => {
            document.body.style.overflow = 'hidden';
        };
    }, []);

    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const payload = {
                ID: userID,
                password: password,
            };

            console.log('payload',payload);

            // API URL should be stored in your environment variables
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            console.log(`${wakabaBaseUrl}/auth/login`);
            const response = await axios.post(`${wakabaBaseUrl}/auth/login`, payload);
            
            console.log(response.data.payload.token);
            // store jwt token on localStorage
            localStorage.setItem('token', response.data.payload.token);
            localStorage.setItem('userId', response.data.payload.userId);
            localStorage.setItem(
                'cache',
                JSON.stringify({
                me: payload.ID,
                })
            );
            const cache = JSON.parse(localStorage.getItem('cache'));
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');

            // if(response.data.success) navigate('/chat'); 
            if(response.data.success) {
                window.location.href="/logintimecard"
            }; 

        } catch (error) {
            console.error('There was an error!', error);
            setError('無効なユーザー名またはパスワードです。再試行してください。');//There was an error processing your request. Please try again.
        }
    };

    return (
        <>
            <Titlebar title={title} />
            <DateAndTime/>
            <div className="bg-transparent font-sans mt-10">
                <div className="flex flex-col items-center justify-center py-6 px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '50em' }}>
                        <div className="p-8 rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">LOGIN</h2>
                            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                                <div className='flex'>
                                    <div style={{ width: '20%', flexDirection: 'column' }} className='flex align-center justify-around'>
                                        <label htmlFor="userID" className="text-[#70685a] text-[15px] font-bold mb-2 block text-right mr-5 !mb-0">ID</label>
                                        <label htmlFor="password" className="text-[#70685a] text-[15px] font-bold mb-2 block text-right mr-5 !mb-0">pass</label>
                                    </div>

                                    <div style={{ width: '80%', paddingRight: '20%' }} className='!mt-0'>
                                        <div className="relative flex items-center">
                                            <input
                                                id="userID"
                                                name="userID"
                                                type="text"
                                                required
                                                value={userID}
                                                onChange={(e) => setUserID(e.target.value)}
                                                className="w-full text-[#70685a] text-sm border border-gray-300 px-4 py-3 outline-blue-600"
                                            />
                                        </div>
                                        <div className="relative flex items-center mt-5">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full text-[#70685a] text-sm border border-gray-300 px-4 py-3 outline-blue-600"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between !mt-1'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end" style={{ flexDirection: 'column', width: '20%' }}>
                                        <u>
                                            <Link to='/forgetpassword'>パスワード忘れ</Link>
                                        </u>
                                    </label>
                                    <div className="!mt-4 flex" style={{ marginBottom: '10px', width: '80%', paddingRight: '20%' }}>
                                        <div className='w-full flex justify-center'>
                                            <button
                                                type="submit"
                                                className="w-30 px-5 py-1 font-bold tracking-wide rounded-lg justify-center text-2xl text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none"
                                            >
                                                LOGIN
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {error && <div className="text-red-500 flex justify-center">{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
