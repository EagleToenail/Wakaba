import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css';
import DateAndTime from '../../Components/Common/PickData';
// import ButtonComponent from '../../Components/Common/ButtonComponent';
// import LabelComponent from '../../Components/Common/LabelComponent';
import InputComponent from '../../Components/Common/InputComponent';
import { useDispatch, useSelector } from 'react-redux';
import { setClearData } from '../../redux/sales/actions';


const PurchaseRequest = () => {
    // const title = 'タイトルタイトル';
    const navigate = useNavigate();
    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    // const Th = {
    //     border: '1px solid #70685a',
    //     borderCollapse: 'collapse',
    //     color: '#70685a',
    //     fontSize: '15px'
    // };
    const Td = {
        border: '1px solid #6e6e7c',
        borderCollapse: 'collapse',
        color: '#6e6e7c',
        fontSize: '15px',
    };

    const data = useSelector(state => state.data);
    const shippingIds = data.data;
    const dispatch = useDispatch();
    const clearReduxData = () => {
        dispatch(setClearData());
    }
    const [rShopShippingIds, setRShopShippingIds] = useState({});
    useEffect(() => {
        const fetch = async () => {
            if (data.data !== 'Initial Data') {
                setRShopShippingIds(shippingIds);
                // clearReduxData();
            }
        }
        fetch();

    }, [data.data]);
    console.log('rShopShippingIds---------', shippingIds);

    const [rShopPurchase, setRShopPurchase] = useState([]);
    // Fetch purchae request to rshop data
    useEffect(() => {
        const fetchSendRshop = async () => {
            if (rShopShippingIds?.length > 0) {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }
                try {
                    // Create an array of promises
                    await axios.post(`${wakabaBaseUrl}/sales/getSalesById`, { id: rShopShippingIds })
                        .then(response => {
                            const salesData = response.data;
                            setRShopPurchase(salesData);
                            console.log('salesData', salesData)
                        })
                } catch (error) {
                    console.error("There was an error fetching the customer data!", error);
                }
            }
        }
        fetchSendRshop();
    }, [rShopShippingIds]);


    const updateItemValue = (id, e) => {
        setRShopPurchase(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, sales_amount: e.target.value } : item
            )
        );
    };
    //set rshop
    const setRShop = (e) => {
        const updatedData = rShopPurchase.map(data => ({
            ...data,
            shipping_address: e.target.value
        }));
        setRShopPurchase(updatedData);
    }
    //send data
    const sendRShopPurchaseData = async () => {
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const payload = rShopPurchase;
            if(rShopPurchase?.length>0) {
                const ids = payload.map(obj => obj.id);
                console.log('rShopPurchase', rShopPurchase, ids)
                await axios.post(`${wakabaBaseUrl}/rshopshipping/confirm`, { ids: ids, payload: payload })
                    .then(response => {
                        // navigate('/salesslip');
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
            }

        } catch (error) {
            console.error('Error sending message:', error);
        }
    }

    const [confirmRShop ,setConfirmRShop] = useState(false);
    const closeConfirmModal = () => {
        setConfirmRShop(false);
    }
    const openConfirmModal = () => {
        setConfirmRShop(true);
    }

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '90em' }}>
                    <div className='flex justify-around mt-10 '>
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">リサイクルショップへの買取り依頼書 (各ショップ用紙作成元シート)</h2>
                    </div>
                    {/*  */}
                    <div className='flex mt-3 justify-center'>
                        <div className='mr-5 flex flex-col justify-center'>
                            <label className="text-[#70685a] font-bold mb-2 block text-center !mb-0">リサイクルショップ</label>
                        </div>
                        <div className=' text-[#70685a] px-2 ml-1'>
                            <select name="shipping_address" onChange={setRShop} className="w-full h-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                <option value=''></option>
                                <option value="AAA">AAA</option>
                                <option value="BBB">BBB</option>
                                <option value="CCC">CCC</option>
                            </select>
                        </div>
                        <div className=' text-[#70685a] px-2 ml-2 flex flex-col justify-center'>
                            <label className="text-[#70685a] font-bold mb-2 block text-center !mb-0">用伝表を</label>
                        </div>
                        <div className=' text-[#70685a] px-2 mr-2'>
                            < button type="button" onClick={openConfirmModal} className="w-20 h-10 px-3 py-1 font-bold tracking-wide rounded-lg justify-center text-white bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                                印刷
                            </button>
                        </div>
                    </div>
                    {/*  Tabe*/}
                    <div className='w-full pb-20 flex justify-center mt-10' >
                        <div className='flex w-full'>

                            <table className=' text-center w-full' style={Table}>
                                <thead>
                                    <tr className='h-8'>
                                        <th></th>
                                        <th>わかばNO.</th>
                                        <th>力テゴリ一1</th>
                                        <th width='30%'>商品各</th>
                                        <th>個数</th>
                                        <th width='20%'>買取金額</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rShopPurchase?.length > 0 && rShopPurchase.map((data, Index) => (
                                        <tr key={Index} className='h-8 text-[15px]'>
                                            <td >{Index + 1}.</td>
                                            <td style={Td}>{data.id}</td>
                                            <td style={Td}>{data.product_type_one}</td>
                                            <td style={Td}>{data.product_name}</td>
                                            <td style={Td}>{data.quantity}</td>
                                            <td style={Td}>
                                                <InputComponent type='number' name='sales_amount' value={data.sales_amount || ''} onChange={(e) => updateItemValue(data.id, e)} className='w-full h-8 text-[#70685a]' />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table></div>

                    </div>
                </div>
            </div>
            {confirmRShop && (
            <div
                className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">

                    <div className="my-4 text-center">
                        <h4 className="text-gray-800 text-base font-semibold mt-4">アイテムを送信してもよろしいですか？</h4>

                        <div className="text-center space-x-4 mt-8">
                            <button type="button" onClick={sendRShopPurchaseData}
                                className="px-6 py-2 rounded-lg text-white text-sm bg-red-600 hover:bg-red-700 active:bg-red-600">確認する</button>
                            <button type="button" onClick={closeConfirmModal}
                                className="px-4 py-2 rounded-lg text-gray-800 text-sm bg-gray-200 hover:bg-gray-300 active:bg-gray-200">キャンセル</button>
                        </div>
                    </div>
                </div>
            </div>
        )}

        </>
    );
};

export default PurchaseRequest;