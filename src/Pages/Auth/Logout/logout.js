import React,{useState,useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Titlebar from '../../../Components/Common/Titlebar';
import DateAndTime from '../../../Components/Common/nowdateandtime';
//import axios from 'axios';


const Logout = () => {
    const title = 'タイトルタイトル';

    useEffect(() => {
        document.body.style.overflow = 'auto';
        return () => {
            document.body.style.overflow = 'hidden';
        };
    }, []);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogout = async () => {
        setLoading(true);
        try {

            // API URL should be stored in your environment variables
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }

            //await axios.post(`${wakabaBaseUrl}/logout`);
            navigate('/');
        } catch (err) {
            setError('ログアウトに失敗しました。もう一度お試しください。');//Failed to logout. Please try again.
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Titlebar title={title} />
            <DateAndTime/>
            <div className="bg-[trasparent] font-[sans-serif] mt-10">
                <div className=" flex flex-col items-center justify-center py-6 px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '50em' }}>
                        <div className="p-8 rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">LOGOUT</h2>
                            <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className='flex'>
                                    <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    </div>

                                    <div style={{ width: '80%', paddingRight: '20%'}} className='!mt-0'>
                                        <div className="relative flex items-center">
                                            <label className="w-full text-[#70685a] text-[15px] text-center font-bold px-4 py-3 outline-blue-600" >このまま口グアウトしてもよろしいですか?</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-between !mt-5' >
                                    
                                    <div className="!mt-5 flex" style={{ marginBottom: '10px',width:'80%',paddingLeft: '20%' }}>
                                        <div className='w-full flex justify-center'>
                                        <button type="button" onClick={handleLogout}  className="w-30 px-5 py-1 font-bold tracking-wide rounded-lg justify-center text-2xl text-white bg-[#e87a00] hover:bg-blue-700 focus:outline-none">
                                            {loading ? 'Logging out...' : 'LOGOUT'}
                                        </button>
                                        </div>
                                    </div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left flex justify-end" style={{ flexDirection: 'column',width:'20%' }}><u> <Link to='/todolist'>キャンセル</Link></u></label>
                                </div>
                                {error && <div className="text-red-500 text-center flex justify-center">{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Logout;