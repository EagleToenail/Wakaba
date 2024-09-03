import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/nowdateandtime';
import SuccessModal from '../../../Components/SuccessModal'; // Adjust the import path

const Register = () => {

    useEffect(() => {
        document.body.style.overflow = 'auto';
        return () => {
            document.body.style.overflow = 'hidden';
        };
    }, []);

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // For modal visibility
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }

            const response = await axios.post(`${wakabaBaseUrl}/auth/register`, { username,email, password });

            console.log('Response data:', response.data);
            setSuccess(`認証メールが送信されました.`);
            setIsModalOpen(true); // Show modal on success

        } catch (error) {
            console.error('There was an error!', error);
            setError('リクエストの処理にエラーが発生しました。もう一度お試しください。');//There was an error processing your request. Please try again.
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate('/tomoveinputform'); // Adjust as needed
    };

    return (
        <>
            <Titlebar title="タイトルタイトル" />
            <DateAndTime />
            <div className="bg-[transparent] font-[sans-serif] mt-10">
                <div className="flex flex-col items-center justify-center py-6 px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '50em' }}>
                        <div className="p-8 rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">新規会員登録</h2>
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">（認証メール送信）</h2>
                            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                                <div className='flex'>
                                    <div style={{ width: '20%', flexDirection: 'column' }} className='flex align-center justify-around'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-5 !mb-0">ユーザー名</label>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-5 !mb-0">メールアドレス</label>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-5 !mb-0">パスワード</label>
                                    </div>
                                    <div style={{ width: '80%', paddingRight: '20%' }} className='!mt-0'>
                                        <div className="relative flex items-center">
                                            <input
                                                name="username"
                                                type="text"
                                                value={username}
                                                onChange={(e) => setUserName(e.target.value)}
                                                required
                                                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 outline-blue-600"
                                            />
                                        </div>
                                        <div className="relative flex items-center mt-5">
                                            <input
                                                name="email"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 outline-blue-600"
                                            />
                                        </div>
                                        <div className="relative flex items-center mt-5">
                                            <input
                                                name="password"
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 outline-blue-600"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-[#70685a] text-center text-[15px] font-semibold flex justify-center">このアドレスへ登録確認メールを</h2>
                                <div className='flex justify-between !mt-1'>
                                    <div className="!mt-0 flex" style={{ marginBottom: '10px', width: '80%', paddingLeft: '20%' }}>
                                        <div className='w-full flex justify-center'>
                                            <button
                                                type="submit"
                                                className="w-30 px-5 py-2 font-bold tracking-wide rounded-lg justify-center text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none"
                                            >
                                                送信
                                            </button>
                                        </div>
                                    </div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end" style={{ flexDirection: 'column', width: '20%' }}>
                                        <u><Link to='/forgetpassword'>キャンセル</Link></u>
                                    </label>
                                </div>
                                <h2 className="text-[#70685a] text-center text-[15px] font-semibold flex justify-center">登録確認メール内のURLをクリックして,会員登録を進めてください</h2>
                                {error && <div className="text-red-500 flex justify-center">{error}</div>}
                                {success && <div className="text-green-500 flex justify-center">{success}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <SuccessModal
                    message={success}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
};

export default Register;
