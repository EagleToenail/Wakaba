import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/PickData';

const ClockedOut = () => {
    const title = 'タイトルタイトル';
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state

    const navigate = useNavigate();

    // Function to handle button click
    const handleAction = async (action) => {
        setLoading(true);
        setError(null);
        if(action ==='clock-out' ){
            try {

                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
    
                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }
                const userId = localStorage.getItem('userId');
                const response = await axios.post(`${wakabaBaseUrl}/logouttime`, { action,userId });
                console.log('Success:', response.data);
                navigate('/logout');
            } catch (err) {
                setError('この操作は許可されていません');
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        } else {
            localStorage.clear();
            navigate('/');
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
                            <h2 className="text-[#fe0301] text-center text-2xl font-bold flex justify-center mt-10">
                                まだ退勤打刻してないよ!
                            </h2>
                            <form className="mt-10 space-y-6">
                                <div className='flex justify-center !mt-5'>
                                    <div className="!mt-5 flex" style={{ marginBottom: '10px', width: '80%', paddingLeft: '20%' }}>
                                        <div className='checkout w-full flex justify-between'>
                                            <button
                                                type="button"
                                                className="w-[280px] px-5 py-2 mt-5 font-bold tracking-wide rounded-lg justify-center text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none"
                                                onClick={() => handleAction('clock-out')}
                                                disabled={loading}
                                            >
                                                打刻して退勤
                                            </button>
                                            <button
                                                type="button"
                                                className="w-[280px] px-5 py-2 mt-5 font-bold tracking-wide rounded-lg justify-center border border-[#70685a] text-[#70685a] bg-[white] hover:bg-blue-700 focus:outline-none"
                                                onClick={() => handleAction('re-login')}
                                                disabled={loading}
                                            >
                                                再びログイン
                                            </button>
                                        </div>
                                    </div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end align-end" style={{ flexDirection: 'column', width: '20%' }}>
                                        <u className='flex justify-center'>
                                            <Link to='/logouttimecard'>キャンセル</Link>
                                        </u>
                                    </label>
                                </div>
                            </form>
                            {loading && <p>ローディング...</p>}
                            {error && <p className="text-red-500 text-center">{error}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClockedOut;
