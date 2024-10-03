import {React, useState , useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
// import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import LabelComponent from '../../Components/Common/LabelComponent';
import InputComponent from '../../Components/Common/InputComponent';
import { useSelector } from 'react-redux';


const PurchaseRequestFormForWholeSaler = () => {
    // const title = 'タイトルタイトル';

    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    const Th = {
        whiteSpace:'nowrap'
    };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace:'nowrap'
    };

    const navigate = useNavigate();

    const data = useSelector(state => state.data);
    const salesDataIds = data.data;
    // console.log('salesDataIds',salesDataIds);

    //fetch data from master database
    const [wholeSalesPurchase, setWholeSalesPurchase] = useState([]);

    const [editIndex, setEditIndex] = useState(-1);
    const [editedRow, setEditedRow] = useState({ 
        product_status:'',
        shipper: '',
        shipper_manager: '',
        rank: '',
        assessment_date: '',
        product_price: '',
        highest_estimate_price: '',
        highest_estimate_vendor: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
    };

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditedRow(wholeSalesPurchase[index]); // Populate the input fields with the selected row's data
    };

    const handleSaveClick = () => {
        const updatedData = wholeSalesPurchase.map((row, index) =>
            index === editIndex ? { ...row, ...editedRow } : row
        );
        setWholeSalesPurchase(updatedData);
        setEditIndex(-1); // Exit edit mode
        setEditedRow({ 
            product_status:'',
            shipper: '',
            shipper_manager: '',
            rank: '',
            assessment_date: '',
            product_price: '',
            highest_estimate_price: '',
            highest_estimate_vendor: '',
         }); // Reset editedRow state
    };

    const handleCancelClick = () => {
        setEditIndex(-1);
        setEditedRow({ 
            product_status:'',
            shipper: '',
            shipper_manager: '',
            rank: '',
            assessment_date: '',
            product_price: '',
            highest_estimate_price: '',
            highest_estimate_vendor: '',
         }); // Reset editedRow state
    };

    useEffect(() => {
      const fetchSalesData = async () => {
        if (salesDataIds !== 'Initial Data' && salesDataIds.length !== 0) {
          const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
          
          if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
          }
          console.log('getData');
          try {
            // Create an array of promises
            const promises = salesDataIds.map((salesId) =>
              axios.post(`${wakabaBaseUrl}/sales/getSalesById`, { id: salesId })
            );
  
            // Wait for all promises to resolve
            const responses = await Promise.all(promises);
            
            // Extract data from responses and set the state
            const salesData = responses.map(response => response.data);
            setWholeSalesPurchase(salesData);
            if(salesData[0].product_type_one) {
                fetchCategoryVendors(salesData[0].product_type_one);
            }
            // console.log('salesdata========', salesData);
          } catch (error) {
            console.error("There was an error fetching the customer data!", error);
          }
        }
      };
  
      fetchSalesData();
    }, [salesDataIds]);

    // fetch vendor names
    const [allVendors , setAllVendors] = useState([]);
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        axios.get(`${wakabaBaseUrl}/vendor/getVendorListAll`)
        .then(response => {
            setAllVendors(response.data);
            // console.log('vendrListAll',response.data)
        })
        .catch(error => {
            console.error("There was an error fetching the customer data!", error);
        });
    }, []);
    // fetch vendor names
    const [categoryVendors , setCategoryVendors] = useState([]);
    const fetchCategoryVendors = (item)=>{
    // useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

            axios.post(`${wakabaBaseUrl}/vendor/getVendorList`,{type:item})
            .then(response => {
                setCategoryVendors(response.data);
                // console.log('vendrListAll',response.data)
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });

    // }, []);
    }
    const handleVendorChange = (e) => {
        const { name, value } = e.target;
        updateShippingAddress(value);
        
    };

    const [users, setUsers] = useState([]);
    // Fetch user data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        axios.get(`${wakabaBaseUrl}/user/getUserList`)
            .then(response => {
                const data = response.data;
                setUsers(data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);

    const sendShippingData = () =>{
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        wholeSalesPurchase[0].shipping_ids = salesDataIds.toString();
        console.log('shipping data',wholeSalesPurchase);
        axios.post(`${wakabaBaseUrl}/sales/purchaserequestfromwholesaler`, {payload:wholeSalesPurchase})
        .then(response => {

        })
        .catch(error => {
            console.error("There was an error fetching the customer data!", error);
        });

        navigate('/wholesalershippinglist');
    }

    // update shipping address
        const updateShippingAddress = (vendor) => {
            console.log('updateVendor',vendor)
            const updatedData = wholeSalesPurchase.map(data => ({
                ...data,
                shipping_address: vendor // Replace with your desired value or logic
            }));
        
              setWholeSalesPurchase(updatedData);
        }

    return (
        <>
            {/* <Titlebar title={title} /> */}

            <div className='flex justify-around' >
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">業者卸依頼書</h2>
            </div>

            {/*  */}
            <div className='w-full flex justify-center mt-5'>
                <div className='flex justify-center'>
                    <div className='mr-5'>
                        <select name="inorout" className="w-60 h-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                            <option value=""></option>
                            <option value="発送中">発送中</option>
                            <option value="約定済">約定済</option>
                            <option value="オークション出品済">オークション出品済</option>
                            <option value="オークション発送済">オークション発送済</option>
                            <option value="廃棄">廃棄</option>
                            <option value="基準外">基準外</option>
                            <option value="返品・返金">返品・返金</option>
                        </select>
                    </div>
                    <div className='mr-5'>
                        <select name="stamp_type"   className="w-40 h-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                            <option value=""></option>
                            {users?.length>0 && users.map((user, index) => (
                                <option key={index} value={user.username}>{user.username || ''}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className=' text-[#70685a] px-2 mr-2 font-bold flex'>
                        <div className='text-center flex flex-col justify-center pr-1'>
                            <label className='w-max flex flex-col justify-center h-10' >卸業者</label>
                        </div>
                        <div>
                            <select name="shipping_address" onChange={handleVendorChange} className="w-40 h-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                <option value=""></option>
                                {(categoryVendors && categoryVendors.length !== 0) && categoryVendors.map((vendor, index) => (
                                    <option key={index} value={vendor.vendor_name}>{vendor.vendor_name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className=' text-[#70685a] px-2 mr-3 flex flex-col justify-end'>
                        <label className="text-[#70685a] text-[18px] block text-center pb-2">用伝表を</label>
                    </div>
                    <div className=' text-[#70685a] px-2 mr-2 flex flex-col justify-end'>
                        < button type="button" onClick={sendShippingData} style={{ display: 'flex', alignItem: 'end' }} className="flex align-end w-20 px-3 py-2 font-bold rounded-md tracking-wide text-[#665b4c] justify-center text-white bg-[#a3a1c8] hover:bg-blue-700 focus:outline-none">
                            作成
                        </button>
                    </div>
                </div>
            </div>
 

            {/*  Tabe*/}
            <div className='mt-10 pb-20 w-full flex'>
                <div style={{ width: '100%', overflow: 'auto' }}>
                    <table className='text-center w-full' style={Table}>
                        <thead className='sticky top-0 bg-white z-10'> 
                            <tr>
                                <th className='px-2' style={Th}></th>
                                {/* <th  style={Th} >ステー夕ス</th>
                                <th  style={Th} >発送予定者</th>
                                <th  style={Th} >発送担当者</th> */}
                                <th style={Th} >わかばNo.</th>
                                <th style={Th} >カテゴリ一1</th>
                                <th style={Th} >カテゴリ一2</th>
                                <th style={Th} >商品</th>
                                <th style={Th} >数</th>
                                <th style={Th} >金種</th>
                                <th style={Th} >g/種面</th>
                                <th style={Th} >買取額</th>
                                <th style={Th} >RANK</th>
                                <th  style={Th} >画像</th>
                                <th  style={Th} >仮査定日</th>
                                <th style={Th} >仮査定額</th>
                                <th style={Th} >他社 最高査定額</th>
                                <th style={Th}  >最高査定額業者</th>
                                <th style={Th}>{editIndex === -1 ? '編集する' : 'セーブ'}</th>
                                <th className='whitespace-nowrap pl-3'>{editIndex === -1 ? '' : 'キャンセル'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(wholeSalesPurchase && wholeSalesPurchase.length !==0) && wholeSalesPurchase.map((saleData,Index) => (
                                <tr key={saleData.id}>
                                    <td>{Index + 1}</td>
                                    {/* <td style={Td}>
                                    {editIndex === Index ?(
                                        <select name="product_status" value={editedRow.product_status || ''} onChange={handleInputChange} className="w-max h-11 text-[#70685a] text-[15px] font-bold  px-4 py-1 outline-[#70685a]">
                                            <option value=""></option>
                                            <option value="申請中">申請中</option>
                                            <option value="発送中">発送中</option>
                                            <option value="約定済">約定済</option>
                                            <option value="約定済＋返送依頼">約定済＋返送依頼</option>
                                            <option value="返送依頼">返送依頼</option>
                                            <option value="入金待ち" disabled>入金待ち</option>
                                            <option value="入金済" disabled>入金済</option>
                                        </select>
                                        ):(saleData.product_status)}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <select name="shipper" value={editedRow.shipper} onChange={handleInputChange} className="w-max h-11 text-[#70685a] text-[15px] font-bold  px-4 py-1 outline-[#70685a]">
                                                <option value=""></option>
                                                {users && users.map((user, index) => (
                                                    <option key={index} value={user.username}>{user.username || ''}</option>
                                                ))}
                                            </select>
                                         ):(saleData.shipper)}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <select name="shipper_manager" value={editedRow.shipper_manager} onChange={handleInputChange} className="w-max h-11 text-[#70685a] text-[15px] font-bold  px-4 py-1 outline-[#70685a]">
                                                <option value=""></option>
                                                {users && users.map((user, index) => (
                                                    <option key={index} value={user.username}>{user.username || ''}</option>
                                                ))}
                                            </select>
                                        ):(saleData.shipper_manager)}
                                    </td> */}
                                    <td style={Td}>{saleData.id || ''}</td>
                                    <td style={Td}>{saleData.product_type_one || ''}</td>
                                    <td style={Td}>{saleData.product_type_two || ''}</td>
                                    <td style={Td}>{saleData.product_name || ''}</td>
                                    <td style={Td}>{saleData.quantity}</td>
                                    <td style={Td}>{saleData.gross_weight || ''}</td>
                                    <td style={Td}>{saleData.gold_type || ''}</td>
                                    <td style={Td}>{saleData.purchase_price || ''}</td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent name='rank' value={editedRow.rank} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(saleData.assessment_date)}
                                        </td>
                                    <td style={Td}>
                                        <ButtonComponent children="1" className='w-max !px-5 rounded-lg' style={{  backgroundColor: '#ebe5e1', color: '#626373'}} />
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent type="date" name='assessment_date' value={editedRow.assessment_date} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(saleData.assessment_date)}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent type="number" name='product_price' value={editedRow.product_price} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(saleData.product_price)}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent type="number" name='highest_estimate_price' value={editedRow.highest_estimate_price} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(saleData.highest_estimate_price)}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent name='highest_estimate_vendor' value={editedRow.highest_estimate_vendor} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(saleData.highest_estimate_vendor)}
                                    </td>
                                    <td style={Td}>
                                    {editIndex === Index ? (
                                        <div>
                                            <button onClick={() => handleSaveClick(Index)} className='w-7'>
                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckOutlinedIcon" title="CheckOutlined"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg>
                                            </button>
                                        </div>
                                        ) : (
                                        <div>
                                            <button onClick={() => handleEditClick(Index)} className='w-7'>
                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditCalendarOutlinedIcon" title="EditCalendarOutlined"><path d="M5 10h14v2h2V6c0-1.1-.9-2-2-2h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h7v-2H5zm0-4h14v2H5zm17.84 10.28-.71.71-2.12-2.12.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41m-3.54-.7 2.12 2.12-5.3 5.3H14v-2.12z"></path></svg>
                                            </button>
                                        </div>
                                        )}
                                    </td>
                                    <td>
                                        {editIndex === Index ? (
                                        <div>
                                            <button onClick={() => handleCancelClick(Index)} className='w-7'>
                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                            </button>
                                        </div>
                                        ) : (''
                                        // <div>
                                        //     <button className='w-7'>
                                        //     <svg className="flex flex-col justify-center" focusable="false" aria-hidden="true" viewBox="0 0 23 23" fill='#524c3b' data-testid="CancelOutlinedIcon" title="CancelOutlined"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"></path></svg>
                                        //     </button>
                                        // </div>
                                        )}
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

export default PurchaseRequestFormForWholeSaler;