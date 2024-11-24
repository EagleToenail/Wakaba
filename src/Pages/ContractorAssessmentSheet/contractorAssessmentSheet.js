import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
// import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import LabelComponent from '../../Components/Common/LabelComponent';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { setShippingData } from '../../redux/sales/actions';

const VendorAssementSheet = () => {
    // const title = 'タイトルタイトル';
    const navigate = useNavigate(); // Use useNavigate instead of useHistory
    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center',               
    };

    const Th = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace: 'nowrap',
    };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace: 'nowrap',
    };

    const dispatch = useDispatch();

    const updateData = (data) => {
        dispatch(setShippingData(data));
    };
    //checked event
    const [checkedValues, setCheckedValues] = useState([]);
    // Handle checkbox change
    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setCheckedValues((prevValues) =>
            prevValues.includes(value)
                ? prevValues.filter((v) => v !== value) // Uncheck
                : [...prevValues, value] // Check
        );
    };
    const handleSendCheckedValues = () => {
        updateData(checkedValues);
        // console.log('checked values',checkedValues);
        navigate('/purchaserequestformforwholesaler');
    };
    const [headId, setHeadId] = useState(0);
    const headTitleArray = [
            ['配送先','卸日','番号','商品名','個数','金種','総重量','買取価格','地金重さ'],
            ['発送日','番号','商品名','備考','査定日'],
            ['配送先','発送日','番号','メーカー','商品名','型番','ランク','買取額','BBスカイプ日'],
            ['配送先','発送日','番号','商品名','型番１','型番２','自動／クォーツ','可動／不動','テスター','箱ギャラ','買取額','スカイプ日'],
            ['配送先','発送日','番号','メーカー','商品名','型番','ランク','ＢＢスカイプ日'],
            ['配送先','発送日','わかば番号','メーカー','商品名','型番','ランク','BBスカイプ日'],
            ['発送日','番号','商品名','型番','買取額','ランク','査定日'],
            ['配送先','発送日','番号','商品名','備考','査定日'],
            ['配送先','発送日','わかば番号','種類','銘柄','数量','容量','度数','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
            ['発送日','番号','商品名','備考','査定日'],
        ];
    const [headValueArray, setHeadValueArray] = useState([]);
    const categoryRow = [
            {shipping_address: '', wholesale_date: '', number: '', product_name: '', quantity: '', gold_type: '',
                gross_weight: '', purchase_price: '', bullion_weight: '',},
            { shipping_date: '', number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_address: '',shipping_date: '', number: '', manufacturer: '', product_name: '', model_number: '',
                rank: '', purchase_price: '', bb_skype_date: '',},
            { shipping_address: '',shipping_date: '',number: '', product: '', model_number_one: '', model_number_two: '',
                automatic_quartz: '', movable: '', tester: '', box_guarantee: '',  purchase_price: '',  skype_date: '',},
            { shipping_address: '',shipping_date: '', number: '', manufacturer: '', product_name: '', model_number: '',
                rank: '', bb_skype_day: '',},
            { shipping_address: '', shipping_date: '', wakaba_number: '', manufacturer: '', product_detail: '',
                model_number: '', rank: '', bb_skype_day: '',},
            { shipping_date: '',number: '', product_name: '', model_number: '', purchase_price: '', rank: '', assessment_date: '',},
            { shipping_address: '',shipping_date: '', number:'',product_name: '', rank: '', assessment_date: '',},
            { shipping_address: '',shipping_date: '',wakaba_number: '',kinds: '', brand: '', quantity: '',
                capacity: '', frequency: '', assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
            { shipping_date: '',number: '', product_name: '', remarks: '',assessment_date: '',},
        ];
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchInitialData = async() =>{
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.post(`${wakabaBaseUrl}/category/initialdata`, { category: '貴金属' })
                .then(response => {
                    const purchaseData = response.data;
                    if(purchaseData?.length>0) {
                        const updatedData111 = purchaseData.map((data,Index) => ({
                            ...data,
                            estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                        })); 
                        setData(updatedData111);
                        console.log('productdata----------',updatedData111);
                        getVendorList(1);
                    }
                    
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }
        fetchInitialData();
    }, []);

    const getData = async(item,id) => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        await axios.post(`${wakabaBaseUrl}/category/data`, { category: item })
            .then(response => {
                const purchaseData = response.data;
                // if(purchaseData?.length>0) {
                    const updatedData111 = purchaseData.map((data,Index) => ({
                        ...data,
                        estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                    })); 
                    setData(updatedData111);
                    console.log('productdata----------',updatedData111);
                    getVendorList(id);
                // } 
            })
        .catch(error => {
            console.error("There was an error fetching the customer data!", error);
        });
    }

    const [vendors, setVendors] = useState([]);
    const getVendorList = async (id) => {
        const fetchVendorList = async() =>{
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            await axios.post(`${wakabaBaseUrl}/vendor/getVendorList`, { id: id })
                .then(response => {
                    setVendors(response.data);
                    const result = response.data.reduce((acc, { vendor_name }) => {
                        acc[vendor_name] = ''; // Create a key-value pair
                        return acc;
                    }, {});
                    setHeadValueArray(result);
                     console.log('vendrList, updated row',response.data)
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }
        fetchVendorList();
    }

    const [editDataId, setEditDataId] = useState(null);
    const handleDataChange = (e, id) => {
        const { name, value } = e.target;
        setData((prevData) =>
            prevData.map((row) =>
                row.id === id ? { ...row, [name]: value } : row
            )
        );
    };

    const handleDataEdit = (id,index) => {
        setEditDataId(id);
        setEstimateValues(data[index].estimate_wholesaler);
    };

    const handleDatalSave = async (id,index) => {
        try {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
            const payload = JSON.stringify(estimateValues);
            const category = data[index].product_type_one;
            const otherData = data[index];
            console.log('payload and category',payload,category);
            await axios.post(`${wakabaBaseUrl}/vendor/updateestimate`, {id:id,category:category,payload:payload,otherData:otherData})
            .then(response => {
                const purchaseData = response.data;
                const updatedData111 = purchaseData.map((data,Index) => ({
                    ...data,
                    estimate_wholesaler: JSON.parse(data.estimate_wholesaler),
                })); 
                setData(updatedData111);
                console.log('productdata----------',updatedData111,category1);
                getVendorList(headId+1);

                setEditDataId(null);
                setEstimateValues({});
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error here
        }

    };

    const handleDataCancel = () => {
        setEditDataId(null);
        setEstimateValues({});
    };

    //  -------------------------------select box-------------------------------
    const [product1s, setProduct1s] = useState([]);
    // Fetch product1 data
    useEffect(() => {
        const fetchCategory1 = async () => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }

            axios.get(`${wakabaBaseUrl}/ProductType1s`)
                .then(response => {
                    setProduct1s(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }
        fetchCategory1();
    }, []);

    const [category1, setCategory1] = useState('1');

    const handleCategory1Change = (e, productList) => {
        const selectedCategory = e.target.value; // Get the selected category
        const selectedResult = productList.find(product => product.category === selectedCategory);//need id
        setCategory1(selectedCategory);
        console.log('category1', selectedCategory, selectedResult.id)
        getData(selectedCategory,selectedResult.id);
        setHeadId(selectedResult.id-1);
    };

    const [estimateValues, setEstimateValues] = useState({});
    const handleEstimateChange = (vendorname, value) => {
        setEstimateValues((prev) => ({
            ...prev,
            [vendorname]: value,
        }));
    };
//----------------------------------------------------------
   //goto salesslip
   const gotoSalesSlip = () => {
        navigate('/salesslip');
   }
    return (
        <>
            {/* <Titlebar title={title} /> */}
            {/* first button line  */}
            <div className="w-full flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full flex justify-center">
                    <div className='w-full'>
                        <div className='flex justify-center ml-10 ' >
                            <div className='contractor-assessment-sheet flex justify-between w-full '>
                                <div className='flex justify-center mt-10 w-full' >
                                    <button onClick={gotoSalesSlip} className='w-[200px] font-bold bg-[transparent] rounded-md border border-[#424242] text-[#424242] h-11 !text-2xl !px-0 hover:bg-[#524c3b] hover:text-white transition-all duration-300' >売上表</button>
                                    <ButtonComponent children={'業者査定シート'} className='!w-[350px] h-11 !bg-[#424242] border border-[#424242] !text-2xl !px-0' style={{ marginLeft: '30px' }} />
                                    {/* <ButtonComponent className='!w-[200px] h-11 !bg-[transparent] border border-[#424242] !text-[#424242] !text-2xl !px-0' style={{ marginLeft: '30px' }} >
                                        <Link to="/yahooauction">ヤフオク</Link>
                                    </ButtonComponent> */}
                                </div>
                                <div className='flex justify-center mt-10 w-full' >
                                    <div>
                                        <button onClick={handleSendCheckedValues} className='h-11 font-bold rounded-md bg-[#9bd195] text-2xl text-[white] !px-10 hover:bg-[#524c3b] hover:text-white transition-all duration-300' >業者への買取依書へ</button>
                                        <div className='text-center'>
                                            <LabelComponent value={'行を選択してくだをい'} className="text-center" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* second selectbox line  */}
                        <div className='w-full flex justify-center mt-5'>
                            <select name="category1" value={category1} onChange={(e) => handleCategory1Change(e, product1s)} className='w-max h-11 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]' >
                                <option value="" disabled>商品タイプ1</option>
                                {product1s.map((option, index) => (
                                    <option key={option.id} value={option.category || ''}>
                                        {option.category || ''}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/*  Tabe*/}
                        <div className='mt-10 pb-20 w-full h-full flex'>
                            {/* precious metal */}
                            <div style={{ width: '100%', overflow: 'auto'}} >
                                {data?.length > 0 ? (
                                    <table id="" style={Table}>
                                        <thead className='bg-white z-10 h-11'>
                                            <tr>
                                                <th width='2%'></th>
                                                <th style={Th}>NO</th>
                                                {headTitleArray?.length>0 && headTitleArray[headId].map((title, index) => (
                                                    <th key={index} style={Th}>{title}</th>
                                                ))}
                                                {vendors?.length>0 && vendors.map((vendor, index) => (
                                                    <th key={index} style={Th}>{vendor.vendor_name}</th>
                                                ))}
                                                <th style={Th}>{editDataId === null ? '編集する' : 'セーブ'}</th>
                                                <th style={{whiteSpace:'nowrap'}}>{editDataId === null ? '' : 'キャンセル'}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data?.length>0 && data.map((item, index) => (
                                                <tr key={item.id}>
                                                    <td ><input type='checkbox' value={item.id} onChange={handleCheckboxChange} disabled={item.product_status !== '買取済'} className='w-5 mr-3' /></td>
                                                    <td style={Td}>{index + 1}</td>
                                                    {Object.keys(categoryRow[headId]).map((key) => (
                                                        <td key={key} style={Td}>
                                                            {editDataId === item.id ? (
                                                                <input
                                                                    type='text'
                                                                    name={key}
                                                                    className='w-40'
                                                                    value={item[key] || ''}
                                                                    disabled={key === 'number' || key === 'product_name' || key === 'purchase_price' || key === 'quantity'}
                                                                    onChange={(e) => handleDataChange(e, item.id)}
                                                                />
                                                            ) : (
                                                                item[key]
                                                            )}
                                                        </td>
                                                    ))}
                                                    {Object.keys(headValueArray).map((key) => (
                                                        <td key={key} style={Td}>
                                                            {editDataId === item.id ? (
                                                                <input
                                                                    type='text'
                                                                    className='w-40'
                                                                    name={key}
                                                                    value={estimateValues[key] || ''}
                                                                    onChange={(e) => handleEstimateChange(key, e.target.value)}
                                                                />
                                                            ) : (
                                                                item.estimate_wholesaler[key]
                                                            )}
                                                        </td>
                                                    ))}
                                                    <td style={Td}>
                                                        {editDataId === item.id ? (
                                                            <div>
                                                                <button onClick={() => handleDatalSave(item.id,index)} className='w-7'>
                                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                                                                </button>
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                {item.product_status === '買取済'?
                                                                    <button onClick={() => handleDataEdit(item.id,index)} className='w-7'>
                                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                                                                    </button>
                                                                    :
                                                                    <button  className='w-7'>
                                                                        <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#000' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                                                                    </button>
                                                                }
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td>
                                                        {editDataId === item.id ? (
                                                            <div>
                                                                <button onClick={handleDataCancel} className='w-7'>
                                                                    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                                                </button>
                                                            </div>
                                                        ) : ('')}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default VendorAssementSheet;