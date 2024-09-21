import React,{ useState, useEffect } from 'react';
import axios from 'axios';

// import Titlebar from '../../Components/Common/Titlebar';
// import InputComponent from '../../Components/Common/InputComponent';
// import ButtonComponent from '../../Components/Common/ButtonComponent';
// import LabelComponent from '../../Components/Common/LabelComponent';
import { useSelector } from 'react-redux';

const MultiRowShowSalesSlip = () => {
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
        whiteSpace:'nowrap'
    };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        whiteSpace:'nowrap'
    };

    const data = useSelector(state => state.data);
    const salesDataIds = data.data;
    console.log('salesDataIds',salesDataIds);

    const [sales, setSales] = useState([]);
    // Fetch sales data
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
              setSales(salesData);
              // console.log('salesdata========', salesData);
            } catch (error) {
              console.error("There was an error fetching the customer data!", error);
            }
          }
        };
    
        fetchSalesData();
      }, [salesDataIds]);

    return (
        <>
            {/* <Titlebar title={title} /> */}
            {/* first button line  */}
            <div className="w-full flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full flex justify-center">
                    <div className='w-full'>

                        {/*  Tabe*/}
                        <div className='mt-10 pb-20 w-full flex'>
                            <div style={{ width: '100%', overflow: 'auto' }} >
                                <table style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th rowSpan={2} className='px-2 whitespace-nowrap'>番号</th>
                                            <th  className='px-2' style={Th} rowSpan={2}>日付</th>
                                            <th className='px-2' style={Th} rowSpan={2}>買取担当.</th>

                                            <th style={Th} colSpan={4}>個人情報</th>

                                            <th  style={Th} rowSpan={2} >来店種別 </th>
                                            <th  style={Th} rowSpan={2} >銘柄・種別 </th>
                                            <th  style={Th} rowSpan={2} >販売店名</th>
                                            <th style={Th} rowSpan={2} >商品種別1 </th>
                                            <th style={Th} rowSpan={2} >商品種別2</th>
                                            <th style={Th} rowSpan={2} >商品</th>
                                            <th style={Th} rowSpan={2} >数 </th>
                                            <th style={Th} rowSpan={2} >金種</th>
                                            <th style={Th} rowSpan={2} >g/額面</th>
                                            <th style={Th} rowSpan={2} >買取額</th>
                                            <th style={Th} rowSpan={2} >売上額 </th>
                                            <th style={Th} rowSpan={2} >送料</th>
                                            <th style={Th} rowSpan={2} >粗利益</th>
                                            <th style={Th} rowSpan={2} >卸し先</th>
                                            <th style={Th} rowSpan={2} >卸日</th>
                                            <th style={Th} rowSpan={2} >入金日</th>
                                        </tr>
                                        <tr>
                                            <th style={Th}className='px-2'>顧客名</th>
                                            <th style={Th}className='px-2' >ヨミガナ</th>
                                            <th style={Th} className='px-2'>電話番号 </th>
                                            <th style={Th} className='px-2'>住所 </th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sales.map((sale,Index) => (
                                            <tr key={sale.id}>
                                                <td>{Index + 1}</td>
                                                <td style={Td}>{sale.trading_date}</td>
                                                <td style={Td}>{sale.purchase_staff}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.full_name : 'Name not available'}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.katakana_name : 'katakana_name not available'}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.phone_number : 'phone_number not available'}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.address : 'address not available'}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.visit_type : 'visit_type not available'}</td>
                                                <td style={Td}>{sale.Customer ? sale.Customer.brand_type : 'brand_type not available'}</td>
                                                <td style={Td}>{sale.store_name}</td>
                                                <td style={Td}>{sale.product_type_one}</td>
                                                <td style={Td}>{sale.product_type_two}</td>
                                                <td style={Td}>{sale.product_name}</td>
                                                <td style={Td}>{sale.quantity}</td>
                                                <td style={Td}>{sale.metal_type}</td>
                                                <td style={Td}>{sale.price_per_gram}</td>
                                                <td style={Td}>{sale.purchase_price}</td>
                                                <td style={Td}>{sale.sales_amount}</td>
                                                <td style={Td}>{sale.shipping_cost}</td>
                                                <td style={Td}>{sale.gross_profit}</td>
                                                <td style={Td}>{sale.wholesale_buyer}</td>
                                                <td style={Td}>{sale.wholesale_date}</td>
                                                <td style={Td}>{sale.payment_date}</td>
                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MultiRowShowSalesSlip;