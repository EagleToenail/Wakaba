import {React ,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
// import LabelComponent from '../../Components/Common/LabelComponent';

import axios from 'axios';

const YahooAuction = () => {
    // const title = 'タイトルタイトル';

    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    const Th = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace:'nowrap',
        padding:'5px'
    };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace:'nowrap'
    };

    const [yahooAcutionData, setYahooActionData] = useState([]);
    //fetch yahoo data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        axios.get(`${wakabaBaseUrl}/sales/getYahooAcution`)
        .then(response => {
            console.log("data", response.data)
            setYahooActionData(response.data);
        })
        .catch(error => {
            console.error("There was an error fetching the customer data!", error);
        });
  
    }, []);

    const [editIndex, setEditIndex] = useState(-1);
    const [editedRow, setEditedRow] = useState({ 
        successful_bider:'',
        auction_purchase_price: '',
        auction_bider_name: '',
        auction_bider_katakana_name: '',
        auction_bider_tel: '',
        auction_bider_address: '',
        auction_bider_evaluation: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedRow({ ...editedRow, [name]: value });
    };

    const handleEditClick = (index) => {
        setEditIndex(index);
        setEditedRow(yahooAcutionData[index]); // Populate the input fields with the selected row's data
    };

    const handleSaveClick = () => {
        const updatedData = yahooAcutionData.map((row, index) =>
            index === editIndex ? { ...row, ...editedRow } : row
        );
        setYahooActionData(updatedData);
        setEditIndex(-1); // Exit edit mode
        setEditedRow({ 
            successful_bider:'',
            auction_purchase_price: '',
            auction_bider_name: '',
            auction_bider_katakana_name: '',
            auction_bider_tel: '',
            auction_bider_address: '',
            auction_bider_evaluation: '',
         }); // Reset editedRow state
    };

    const handleCancelClick = () => {
        setEditIndex(-1);
        setEditedRow({ 
            successful_bider:'',
            auction_purchase_price: '',
            auction_bider_name: '',
            auction_bider_katakana_name: '',
            auction_bider_tel: '',
            auction_bider_address: '',
            auction_bider_evaluation: '',
         }); // Reset editedRow state
    };

    return (
        <>
            {/* <Titlebar title={title} /> */}
            {/* first button line  */}
            <div className='flex justify-between ml-10'>
                <div className='flex justify-center mt-10 w-full' >
                    <ButtonComponent className='bg-[transparent] border border-[#424242] !text-[#424242] h-11 !text-2xl  !w-[200px] !px-0' ><Link to="/salesslip">売上表</Link></ButtonComponent>
                    <ButtonComponent className='h-11 bg-[transparent] border border-[#424242] !text-[#424242] text-2xl !w-[200px] !px-0'  style={{ marginLeft: '30px' }} >
                        <Link to="/contractorassessmentsheet">業者査定シート</Link>
                    </ButtonComponent>
                    <ButtonComponent children={'ヤフオク'} className='h-11 !bg-[#424242] border border-[#424242] !text-[white] text-2xl !w-[200px] !px-0' style={{ marginLeft: '30px' }} />
                </div>
            </div>

            <div className='flex justify-center mt-10 '>
                <label className='flex flex-center'>(売上額と同い)</label>
            </div>

            {/*  Tabe*/}
            <div className='pb-20 w-full flex'>
                <div style={{ width: '100%',height:'450px', overflow: 'auto' }} >
                    <table style={Table}>
                        <thead className='sticky top-0 bg-white z-10'>
                            <tr>
                                <th style={Th} rowSpan={2}>ヤフオク商品ID</th>
                                <th width='5%' style={Th} rowSpan={2}>わかばNo.</th>
                                <th width='5%' style={Th} rowSpan={2}>カテゴリ-1</th>
                                <th width='5%' style={Th} rowSpan={2}>カテゴリ-2</th>
                                <th width='5%' style={Th} rowSpan={2}>カテゴリ-3</th>
                                <th width='5%' style={Th} rowSpan={2}>カテゴリ-4</th>
                                <th width='5%' style={Th} rowSpan={2}>画像</th>
                                <th width='5%' style={Th} rowSpan={2}>商品名</th>

                                <th style={Th} rowSpan={2}>買取額</th>
                                <th style={Th} rowSpan={2}>オークション買取額</th>
                                <th style={Th} rowSpan={2}>落札額</th>
                                <th style={Th} rowSpan={2}>租利額</th>

                                <th width='10%' className='px-3 w-max' style={Th} rowSpan={2} ><div style={{ border: '1px solid black', borderRadius: '5px', }}>ステー夕ス</div></th>
                                <th width='10%' className='px-2 w-max' style={Th} rowSpan={2} ><div style={{ border: '1px solid black', borderRadius: '5px', }}>入金日</div></th>
                                <th width='10%' className='px-2 w-max' style={Th} rowSpan={2} ><div style={{ border: '1px solid black', borderRadius: '5px', }}>発送日</div></th>

                                <th style={Th} colSpan={6}>落札者情報</th>
                                <th style={Th} rowSpan={2}>{editIndex === -1 ? '編集する' : 'セーブ'}</th>
                                <th className='whitespace-nowrap' rowSpan={2}>{editIndex === -1 ? '' : 'キャンセル'}</th>

                            </tr>

                            <tr>
                                <th style={Th} >ヤフオクID</th>
                                <th style={Th}>お名前</th>
                                <th style={Th} >カナ</th>
                                <th style={Th}>TEL</th>
                                <th style={Th} >住所</th>
                                <th width='10%' style={Th} >評価</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(yahooAcutionData && yahooAcutionData !== 0) && yahooAcutionData.map((yahoo,Index)=>(
                                <tr key={Index}>
                                    <td style={Td}>{Index + 1}</td>
                                    <td style={Td}>Wakaba.No</td>
                                    <td style={Td}>{yahoo.product_type_one}</td>
                                    <td style={Td}>{yahoo.product_type_two}</td>
                                    <td style={Td}>{yahoo.product_type_three}</td>
                                    <td style={Td}>{yahoo.product_type_four}</td>
                                    <td style={Td}><ButtonComponent children="1" className='w-max !px-5 rounded-lg' style={{ backgroundColor: '#ebe5e1', color: '#626373' }} /></td>
                                    <td style={Td}>{yahoo.product_name}</td>
                                    <td style={Td}>{yahoo.purchase_price}</td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent type="number" name='auction_purchase_price' value={editedRow.auction_purchase_price || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(yahoo.auction_purchase_price || '')}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent name='successful_bider' value={editedRow.successful_bider || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(yahoo.successful_bider || '')}
                                    </td>
                                    <td style={Td}>{yahoo.gross_profit}</td>
                                    <td style={Td}>status</td>
                                    <td style={Td}>{yahoo.depositeDate}</td>
                                    <td style={Td}>{yahoo.shipping_date}</td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent name='auction_id' value={editedRow.auction_id || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(yahoo.auction_id || '')}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent name='auction_bider_name' value={editedRow.auction_bider_name || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(yahoo.auction_bider_name || '')}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent name='auction_bider_katakana_name' value={editedRow.auction_bider_katakana_name || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(yahoo.auction_bider_katakana_name || '')}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent name='auction_bider_tel' value={editedRow.auction_bider_tel || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(yahoo.auction_bider_tel || '')}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent name='auction_bider_address' value={editedRow.auction_bider_address || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(yahoo.auction_bider_address || '')}
                                    </td>
                                    <td style={Td}>
                                        {editIndex === Index ?(
                                            <InputComponent name='auction_bider_evaluation' value={editedRow.auction_bider_evaluation || ''} onChange={handleInputChange} className='w-max h-8 text-[#70685a]' />
                                        ):(yahoo.auction_bider_evaluation || '')}
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

export default YahooAuction;