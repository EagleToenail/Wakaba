import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/PickData';

const LoginTimeCard = () => {

    useEffect(() => {
        document.body.style.overflow = 'auto';
        return () => {
            document.body.style.overflow = 'hidden';
        };
    }, []);

    const navigate = useNavigate();

    const title = 'タイトルタイトル';
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to handle form submission
    const handleSubmit = async (action) => {
        setLoading(true);
        setError(null);
        try {

            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const userId = localStorage.getItem('userId');
            const response = await axios.post(`${wakabaBaseUrl}/logintime`, { action,userId });
           // Handle success, maybe redirect or show a success message
           console.log('Success:', response.data);
           window.location.href="/customerlist"
        } catch (err) {
            setError('何かが間違っていた');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Titlebar title={title} />
            <DateAndTime />
            <div className="bg-[transparent] font-[sans-serif] mt-10">
                <div className="flex flex-col items-center justify-center py-6 px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '80em' }}>
                        <div className="p-8 rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">ログイン時のタイムカード 機能</h2>
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center mt-10">出勤のタイムカードを打刻して良いですか?</h2>
                            <form className="mt-10 space-y-6">
                                <div className='flex justify-center !mt-5'>
                                    <div className="!mt-5 flex " style={{ marginBottom: '10px', width: '80%', paddingLeft: '20%' }}>
                                        <div className='logintimecard w-full flex justify-between '>
                                            <button
                                                type="button"
                                                className="w-[280px] mt-5 px-5 py-2 font-bold tracking-wide rounded-lg justify-center text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none"
                                                onClick={() => handleSubmit('clock-in')}
                                                disabled={loading}
                                            >
                                                打刻してログイン
                                            </button>
                                            <button
                                                type="button"
                                                className="w-[280px] mt-5 px-5 py-2 font-bold tracking-wide rounded-lg justify-center border border-[#70685a] text-[#70685a] bg-[white] hover:bg-blue-700 focus:outline-none"
                                                onClick={() => handleSubmit('skip-clock-in')}
                                                disabled={loading}
                                            >
                                                打刻せずにしてログイン
                                            </button>
                                        </div>
                                    </div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end align-end" style={{ flexDirection: 'column', width: '20%' }}>
                                        <u className='flex justify-center'>
                                            <Link to='/'>キャンセル</Link>
                                        </u>
                                    </label>
                                </div>
                            </form>
                            <div className='flex justify-center'>
                                {loading && <p>ローディング...</p>}
                                {error && <p className="text-red-500">{error}</p>}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginTimeCard;
