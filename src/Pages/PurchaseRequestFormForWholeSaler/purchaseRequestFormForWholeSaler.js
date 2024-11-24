import {React, useState , useEffect} from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../../Assets/css/showtable.css';
import InputComponent from '../../Components/Common/InputComponent';
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import ImageShowModal from '../../Components/Modal/ImageShowModal';


const PurchaseRequestFormForWholeSaler = () => {
    // const title = 'タイトルタイトル';
    const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
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
        rank: '',
        assessment_date: '',
        product_price: '',
        highest_estimate_price: '',
        highest_estimate_vendor: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedRow({ ...editedRow, [name]: value });
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
            rank: '',
            assessment_date: '',
            product_price: '',
            highest_estimate_price: '',
            highest_estimate_vendor: '',
         }); // Reset editedRow state
    };
    // search selectbox product1================
    const [category1, setCategory1] = useState('');
    // Fetch product1 data
    const fetchSalesData = async (category1) => {
        if (salesDataIds?.length > 0) {
          const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
          
          if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
          }
          try {
            // Create an array of promises
             await axios.post(`${wakabaBaseUrl}/sales/getSalesById`, { id: salesDataIds })
              .then(response =>{
                const salesData = response.data;
                setWholeSalesPurchase(salesData);
                if(salesData[0].product_type_one) {
                    const product1 = category1.filter(item => item.category === salesData[0].product_type_one);
                    fetchCategoryVendors(product1[0].id);
                }
              })
          } catch (error) {
            console.error("There was an error fetching the customer data!", error);
          }
        }
      };

    useEffect(() => {
        const fetchCategory1 = async() => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
    
            axios.get(`${wakabaBaseUrl}/ProductType1s`)
                .then(response => {
                    setCategory1(response.data);
                    fetchSalesData(response.data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }
        fetchCategory1();
    }, []);

    // fetch vendor names
    const [categoryVendors , setCategoryVendors] = useState([]);

    const fetchCategoryVendors = (id)=>{
    // useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

            axios.post(`${wakabaBaseUrl}/vendor/getVendorList`,{id:id})
            .then(response => {
                setCategoryVendors(response.data);
                // console.log('vendrListAll',response.data)
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });

    // }, []);
    }

    // const [shipData,setShipData] = useState({
    //     shipping_status:'',
    //     shipper:'',
    //     shipping_date:'',
    //     shipping_address:'',
    // });
    const handleShipChange = (e) => {
        const { name, value } = e.target;
        // setShipData((prevData) => ({
        //     ...prevData,
        //     [name]: value,
        // }));
        updateShippingData(name,value);
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

    //create pdf
    const handleSavePageAsPDF = async (e) => {
        const element = document.getElementById('shipping');
        if (!element) {
            console.error('Element not found');
            return;
        }

        try {
            // Capture the content of the element
            const canvas = await html2canvas(element, {
                scale: 2, // Higher scale for better resolution
                useCORS: true // Handle CORS for external resources
            });

            const imgData = canvas.toDataURL('image/png');

            // Create a PDF with dimensions matching the captured image
            const imgWidth = canvas.width * 0.75 / 96 * 25.4; // Convert pixels to mm
            const imgHeight = canvas.height * 0.75 / 96 * 25.4; // Convert pixels to mm

            // Create a new jsPDF instance
            const pdf = new jsPDF({
                orientation: imgWidth > imgHeight ? 'l' : 'p', // Landscape or Portrait
                unit: 'mm',
                format: [imgWidth, imgHeight] // Set PDF format to the dimensions of the captured content
            });

            // Add image to PDF
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            // Save the PDF to the user's device
            const pdfBlob = pdf.output('blob');
            const url = URL.createObjectURL(pdfBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'page-content.pdf';
            link.click();
            URL.revokeObjectURL(url);

        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };
    //--------------------show  product photo---------------------
    const [showProductImage, setShowProductImage] = useState(false);
    const [itemImagePreview, setItemImagePreview] = useState(`${wakabaBaseUrl}/uploads/product/`);
    const openProductImageModal = (link) => {
        setShowProductImage(true);
        setItemImagePreview(`${wakabaBaseUrl}/uploads/product/${link}`);
    }
    const closeProductImageModal = () => {
        setShowProductImage(false);
    }
    //---------------------------Value Change---------------------------------
    const handleValueChange = async (id, index, e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log('id,index',id,index,name,value);

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        await axios.post(`${wakabaBaseUrl}/wholesalershipping/eidtShipping`, { id: id, name: name, value: value})
            .then(response => {
                fetchSalesData(category1);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    };
    //------------------------------------------------------------------------------
    const sendShippingData = async() =>{
        console.log('wholeSalesPurchase',wholeSalesPurchase)
        handleSavePageAsPDF();
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        wholeSalesPurchase[0].shipping_ids = salesDataIds.toString();
        console.log('shipping data',wholeSalesPurchase);
        await axios.post(`${wakabaBaseUrl}/sales/purchaserequestfromwholesaler`, {payload:wholeSalesPurchase})
        .then(response => {
            navigate('/wholesalershippinglist');
        })
        .catch(error => {
            console.error("There was an error fetching the customer data!", error);
        });
    }

    // update shipping data
        const updateShippingData = (name,value) => {
            console.log('updateVendor',value)
            if(name === 'shipping_address') {
                const updatedData = wholeSalesPurchase.map(data => ({
                    ...data,
                    shipping_address: value // Replace with your desired value or logic
                }));
                  setWholeSalesPurchase(updatedData);
            }
        }
    //calculate sum
    const [totalPrice, setTotalPrice] = useState('0');

    // Calculate total price
    const calculateTotalPrice = () => {
        if (wholeSalesPurchase?.length > 0) {
            const total = wholeSalesPurchase.reduce((sum, item) => {
                const price = parseInt(item.highest_estimate_price);
                console.log(price, 'price');
                return sum + (isNaN(price) ? 0 : price); // Handle non-numeric values
            }, 0); // Start sum at 0
            setTotalPrice(total);
            console.log(total, 'total');
        }
    };

    useEffect(() => {
        calculateTotalPrice();
    }, [wholeSalesPurchase,calculateTotalPrice]); // Recalculate whenever purchaseInformation changes

    return (
        <>
            {/* <Titlebar title={title} /> */}
        <div id='shipping'>
            <div className='flex justify-around'>
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">業者卸依頼書</h2>
            </div>
            {/*  */}
            <div className='purchase-request-wholesaler w-full flex justify-center mt-5'>
                <div className='flex justify-center'>
                    <div className=' text-[#70685a] px-2 mr-2 font-bold flex'>
                        <div className='text-center flex flex-col justify-center pr-1'>
                            <label className='w-max flex flex-col justify-center h-10' >卸業者</label>
                        </div>
                        <div>
                            <select name="shipping_address" value={wholeSalesPurchase?.length>0 && (wholeSalesPurchase[0].shipping_address || '')} onChange={handleShipChange} className="w-40 h-10 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
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
                                <th className='px-2' ></th>
                                <th ></th>
                                <th ></th>
                                <th ></th>
                                <th ></th>
                                <th ></th>
                                <th ></th>
                                <th ></th>
                                <th ></th>
                                <th ></th>
                                <th ></th>
                                <th ></th>
                                <th ></th>
                                <th ></th>
                                <th ></th>
                                <th ></th>
                                <th >
                                    <div className='flex justify-center'>
                                        <input type='checkbox' className='w-4 mr-1'/> 
                                        <div className='flex flex-col justify-center'>
                                            記載する
                                        </div>
                                    </div>
                                </th>
                                <th ></th>
                                <th style={{display:'none'}}>{editIndex === -1 ? '編集する' : 'セーブ'}</th>
                                <th className='whitespace-nowrap pl-3' style={{display:'none'}} >{editIndex === -1 ? '' : 'キャンセル'}</th>
                            </tr> 
                            <tr>
                                <th className='px-2' style={Th}></th>
                                <th  style={Th} >ステー夕ス</th>
                                <th  style={Th} >発送予定者</th>
                                <th  style={Th} >発送担当者</th>
                                <th style={Th} >わかばNo.</th>
                                <th style={Th} >カテゴリ一1</th>
                                <th style={Th} >カテゴリ一2</th>
                                <th style={Th} >ブランド名</th>
                                <th style={Th} >商品</th>
                                <th style={Th} >型番</th>
                                <th style={Th} >備考(金種/詳細仕様他)</th>
                                <th style={Th} >RANK</th>
                                <th  style={Th} >画像</th>
                                <th style={Th} >個数</th>
                                <th  style={Th} >仮査定日</th>
                                <th style={Th} >仮査定額</th>
                                <th style={Th} >他社 最高査定額</th>
                                <th style={Th}  >最高査定額業者名</th>
                                <th style={{display:'none'}}>{editIndex === -1 ? '編集する' : 'セーブ'}</th>
                                <th className='whitespace-nowrap pl-3' style={{display:'none'}}>{editIndex === -1 ? '' : 'キャンセル'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            { wholeSalesPurchase?.length >0 && wholeSalesPurchase.map((saleData,Index) => (
                                <tr key={saleData.id}>
                                    <td>{Index + 1}</td>
                                    <td style={Td} className='w-40'>
                                        <select name="shipping_status" value={saleData.shipping_status || ''} onChange={(e) => handleValueChange(saleData.id, Index, e)} className="w-full h-8 text-[#70685a] font-bold px-4 py-1 outline-[#70685a]">
                                            <option value=""></option>
                                            <option value="申請中">申請中</option>
                                            <option value="発送中">発送中</option>
                                            <option value="約定済">約定済</option>
                                            <option value="約定済＋返送依頼">約定済＋返送依頼</option>
                                            <option value="返送依頼">返送依頼</option>
                                            <option value="入金待ち">入金待ち</option>
                                            <option value="入金済">入金済</option>
                                        </select>
                                    </td>
                                    <td style={Td}>{'000'}</td>
                                    <td style={Td} className='w-40'>
                                        <select name="shipper" value={saleData.shipper || ''} onChange={(e) => handleValueChange(saleData.id, Index, e)} className="w-40 h-8 text-[#70685a] font-bold px-4 py-1 outline-[#70685a]">
                                            <option value=""></option>
                                            {users?.length>0 && users.map((user, index) => (
                                                <option key={index} value={user.full_name}>{user.full_name || ''}</option>
                                            ))}
                                        </select>
                                    </td>
                                    <td style={Td}>{saleData.wakaba_number || ''}</td>
                                    <td style={Td}>{saleData.product_type_one || ''}</td>
                                    <td style={Td}>{saleData.product_type_two || ''}</td>
                                    <td style={Td}>{saleData.brand || ''}</td>
                                    <td style={Td}>{saleData.product_name || ''}</td>
                                    <td style={Td}>{saleData.model_number_one || ''}</td>
                                    <td style={Td}>{saleData.gold_type || ''}{'/'}{saleData.gross_weight || ''}{saleData.model_number_one || ''}</td>
                                    <td style={Td}>{saleData.rank || ''}</td>
                                    <td style={Td}>
                                        {saleData.product_photo !== '' ?
                                            <button onClick={() => openProductImageModal(saleData.product_photo)} name='photo' className='w-max'>
                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeMedium svg-icon css-kry165 w-7" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhotoOutlinedIcon" title="PhotoOutlined"><path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-4.86 8.86-3 3.87L9 13.14 6 17h12z"></path></svg>
                                            </button>
                                        : ''}
                                    </td>
                                    <td style={Td}>{saleData.quantity}</td>
                                    {/* <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent name='rank' value={editedRow.rank || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(saleData.assessment_date)}
                                        </td>
                                    <td style={Td}>
                                        <ButtonComponent children="1" className='w-max !px-5 rounded-lg' style={{  backgroundColor: '#ebe5e1', color: '#626373'}} />
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent type="text" name='assessment_date' value={editedRow.assessment_date || ''} onChange={handleInputChange} placeholder={'2024-01-01'} className='w-max h-8 text-[#70685a]' />
                                        ):(saleData.assessment_date)}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent type="number" name='product_price' value={editedRow.product_price || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(saleData.product_price)}
                                    </td> */}
                                    <td style={Td}>
                                        {saleData.assessment_date || ''}
                                    </td>
                                    <td style={Td} className='text-right'>
                                        {(parseInt(saleData.highest_estimate_price || 0)).toLocaleString()}
                                    </td>
                                    <td style={Td} className='text-right'>
                                        {editIndex === Index ?(
                                            <InputComponent type="number" name='highest_estimate_price' value={editedRow.highest_estimate_price || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(parseInt(saleData.highest_estimate_price || 0)).toLocaleString()}
                                    </td>
                                    <td style={Td}>
                                        {saleData.highest_estimate_vendor}
                                    </td>
                                    <td style={{display:'none'}}>
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
                                    <td style={{display:'none'}}>
                                        {editIndex === Index ? (
                                        <div>
                                            <button onClick={() => handleCancelClick(Index)} className='w-7'>
                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium  MuiSvgIcon-root MuiSvgIcon-fontSizeLarge  css-1hkft75" fill='#524c3b' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardReturnOutlinedIcon" title="KeyboardReturnOutlined"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"></path></svg>
                                            </button>
                                        </div>
                                        ) : (''
                                        )}
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='font-bold text-[18px] text-right'>{(parseInt(totalPrice || 0)).toLocaleString()}</td>
                                <td className='font-bold text-[18px] text-right'>{(parseInt(totalPrice || 0)).toLocaleString()}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='font-bold text-[17px]'>
                                    <div className='flex justify-end'>
                                        <div>
                                            <div className='text-left'>仮査定額</div>
                                            <div className='text-left'>合計</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='font-bold text-[17px]'>
                                    <div className='flex justify-end'>
                                        <div>
                                            <div className='text-left'>最高額合計</div>
                                            <div className='text-left'>(仮査定合む)</div>
                                        </div>
                                    </div>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div> 
        {showProductImage && <ImageShowModal itemsImagePreview={itemImagePreview} onClose={closeProductImageModal} />}   
        </>
    );
};

export default PurchaseRequestFormForWholeSaler;