import React, { useState ,useEffect} from 'react';
//import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/nowdateandtime';

const Passwordsetting = () => {

    useEffect(() => {
        document.body.style.overflow = 'auto';
        return () => {
            document.body.style.overflow = 'hidden';
        };
    }, []);

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (newPassword !== confirmPassword) {
            setError('パスワードが一致しない');//Passwords do not match
            return;
        }

        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }

            //const response = await axios.post(`${wakabaBaseUrl}/set-password`, { newPassword });

            //console.log('Response data:', response.data);
            setSuccess('パスワードは正常に更新されました。');//Your password has been updated successfully.

            navigate('/register'); // or another route

        } catch (error) {
            console.error('There was an error!', error);
            setError('リクエストの処理にエラーが発生しました。もう一度お試しください。');//There was an error processing your request. Please try again.
        }
    };

    return (
        <>
            <Titlebar title="タイトルタイトル" />
            <DateAndTime />
            <div className="bg-[transparent] font-[sans-serif] mt-10">
                <div className="flex flex-col items-center justify-center py-6 px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '60em' }}>
                        <div className="p-8 rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">パスワードの設定</h2>
                            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                                <div className='flex'>
                                    <div style={{ width: '30%', flexDirection: 'column' }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-5 !mb-0">新しいパスワード</label>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-5 !mb-0">新しいパスワード （繰り返し）</label>
                                    </div>
                                    <div style={{ width: '70%', paddingRight: '30%' }} className='!mt-0'>
                                        <div className="relative flex items-center">
                                            <input
                                                name="newpassword"
                                                type="password"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                required
                                                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 outline-blue-600"
                                            />
                                        </div>
                                        <div className="relative flex items-center mt-5">
                                            <input
                                                name="confirmpassword"
                                                type="password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required
                                                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 outline-blue-600"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between !mt-5'>
                                    <div className="!mt-5 flex" style={{ marginBottom: '10px', width: '70%', paddingLeft: '30%' }}>
                                        <div className='w-full flex justify-center'>
                                            <button
                                                type="submit"
                                                className="w-30 px-5 py-1 font-bold tracking-wide rounded-lg justify-center text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none"
                                            >
                                                送信
                                            </button>
                                        </div>
                                    </div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end" style={{ flexDirection: 'column', width: '30%' }}>
                                        <u>
                                            <Link to='/'>キャンセル</Link>
                                        </u>
                                    </label>
                                </div>
                                {error && <div className="text-red-500 flex justify-center">{error}</div>}
                                {success && <div className="text-green-500 flex justify-center">{success}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Passwordsetting;
