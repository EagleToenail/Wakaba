import React, { useState, useEffect,useRef } from 'react';
import { Link, useNavigate, useParams ,useLocation} from 'react-router-dom';
// import Titlebar from '../../../Components/Common/Titlebar';
import LabelComponent from '../../../Components/Common/LabelComponent';
import ButtonComponent from '../../../Components/Common/ButtonComponent';
import DateAndTime from '../../../Components/Common/PickData';
import axios from 'axios';


const OwnerAnalysisComprehensiveAnalysis = () => {
    // const title = 'タイトルタイトル';

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

    //fetch data
    const [storeData, setStoreData] = useState([]);
    // Fetch sales data
    useEffect( () => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
        // console.log(`${wakabaBaseUrl}/sales/getSalesList`);
        axios.get(`${wakabaBaseUrl}/comprehensiveanalysis/getdata`)
            .then(response => {
                //  console.log(response.data)
                setStoreData(response.data);
                totalAndAverage(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);
    // get tatal and average
    const [sums, setSums] = useState({ 
        customer_count: 0,
        product_count : 0,
        total_gross_profit: 0,
        total_purchase_price:0,
        total_sales_amount:0, 
    });
    const totalAndAverage = (data) => {
        const newSums = {
            customer_count: 0,
            product_count : 0,
            total_gross_profit: 0,
            total_purchase_price:0,
            total_sales_amount:0, 
        };
        const counts = {
            customer_count: 0,
            product_count : 0,
            total_gross_profit: 0,
            total_purchase_price:0,
            total_sales_amount:0, 
         };
        data.forEach(item => {
            for (const key in item) {
                newSums[key] += item[key];
                counts[key] += 1;
            }
        });

        setSums(newSums);
    }
    const dataCount = storeData.length;

    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />


            <div className='flex justify-around mt-5' >
                <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">オーナー管理画面&nbsp;&nbsp;    総合分析</h2>
            </div>
            {/*  */}
            <div className='flex mt-3 justify-center text-left'>
                <div className=' text-[#70685a] px-2 mr-2 text-left'> 
                    <ButtonComponent children={'当月'} className='w-20 !px-5 !rounded-sm  !bg-[#70685a]' />
                    {/* <div className='flex justify-center text-center'>
                        <LabelComponent value={'12月'} className='text-left' />
                    </div> */}
                   
                </div>

                <div className=' text-[#70685a] px-2 mr-2 text-left'> 
                    <ButtonComponent children={'先月'} className='w-20 !px-5 !rounded-sm !bg-[transparent] !text-[#70685a] border !border-[#70685a]' />                
                </div>
                <div className=' text-[#70685a] px-2 mr-2 text-left'> 
                    <ButtonComponent children={'今年'} className='w-20 !px-5 !rounded-sm !bg-[transparent] !text-[#70685a] border !border-[#70685a]' />                
                </div>
                <div className=' text-[#70685a] px-2 mr-2 text-left'> 
                    <ButtonComponent children={'去年'} className='w-20 !px-5 !rounded-sm !bg-[transparent] !text-[#70685a] border !border-[#70685a]' />                
                </div>
                <div className=' text-[#70685a] px-2 mr-2 text-left'>
                    <select id="classification" name="classification" className="w-max text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                        <option value="2024">2024年</option>
                        <option value="2025">2025年</option>
                        <option value="2026">2026年</option>
                        <option value="2027">2027年</option>
                        <option value="2028">2028年</option>
                        <option value="2029">2029年</option>
                        <option value="2030">2030年</option>
                    </select>
                </div>
                <div className=' text-[#70685a] px-2 mr-2 text-left'>
                    <select id="classification" name="classification" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                        <option value="1">1月</option>
                        <option value="2">2月</option>
                        <option value="3">3月</option>
                        <option value="4">4月</option>
                        <option value="5">5月</option>
                        <option value="6">7月</option>
                        <option value="8">8月</option>
                        <option value="9">9月</option>
                        <option value="10">10月</option>
                        <option value="11">11月</option>
                        <option value="12">12月</option>
                    </select>
                </div>
                <h1> ~ </h1>
                <div className=' text-[#70685a] px-2 mr-2 text-left'>
                    <select id="classification" name="classification" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                        <option value="2024">2024年</option>
                        <option value="2025">2025年</option>
                        <option value="2026">2026年</option>
                        <option value="2027">2027年</option>
                        <option value="2028">2028年</option>
                        <option value="2029">2029年</option>
                        <option value="2030">2030年</option>
                    </select>
                </div>
                <div className=' text-[#70685a] px-2 mr-2 text-left'>
                    <select id="classification" name="classification" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                        <option value="1">1月</option>
                        <option value="2">2月</option>
                        <option value="3">3月</option>
                        <option value="4">4月</option>
                        <option value="5">5月</option>
                        <option value="6">7月</option>
                        <option value="8">8月</option>
                        <option value="9">9月</option>
                        <option value="10">10月</option>
                        <option value="11">11月</option>
                        <option value="12">12月</option>
                    </select>
                </div>

            </div>
            {/*  Table*/}
            <div className='mt-10 pl-10 pr-10 pb-20 w-full flex'>
                <table className='text-center w-full' style={Table}>
                    <thead>
                        <tr>
                            <th>店鋪名</th>
                            <th>来店数</th>
                            <th>成約数</th>
                            <th>不成約数 </th>
                            <th>成約率</th>
                            <th>買取率</th>
                            <th>買取金額合計</th>
                            <th>租利単価 </th>
                            <th>租利合計</th>
                            <th>租利率</th>
                            <th>入電数</th>
                            <th>来店問い合わせ数</th>
                            <th>お預かり数</th>
                        </tr>
                    </thead>
                    <tbody>
                        { storeData?.length>0 && storeData.map((data,Index)=> (
                            <tr key={Index}>
                                <td style={Td}>{data.store_name || ''}</td>
                                <td style={Td}>{data.customer_count || ''}</td>
                                <td style={Td}>---</td>
                                <td style={Td}>---</td>
                                <td style={Td}>---</td>
                                <td style={Td}>---</td>
                                <td style={Td}>{data.total_purchase_price || ''}</td>
                                <td style={Td}>---</td>
                                <td style={Td}>{data.total_gross_profit || ''}</td>
                                <td style={Td}>---</td>
                                <td style={Td}>---</td>
                                <td style={Td}>---</td>
                                <td style={Td}>---</td>
                            </tr>
                        ))}
                        <tr>
                            <td >全店舗合計</td>
                            <td>{sums.customer_count || ''}</td>
                            <td>---</td>
                            <td>---</td>
                            <td>---</td>
                            <td>---</td>
                            <td>{sums.total_purchase_price/1 || ''}</td>
                            <td>---</td>
                            <td>{sums.total_gross_profit/1 || ''}</td>
                            <td>---</td>
                            <td>---</td>
                            <td>---</td>
                            <td>---</td>
                            <td>---</td>
                        </tr>
                        <tr>
                            <td >平均</td>
                            <td>{sums.customer_count/dataCount || ''}</td>
                            <td>---</td>
                            <td>---</td>
                            <td>---</td>
                            <td>---</td>
                            <td>{sums.total_purchase_price/dataCount || ''}</td>
                            <td>---</td>
                            <td>{sums.total_gross_profit/dataCount || ''}</td>
                            <td>---</td>
                            <td>---</td>
                            <td>---</td>
                            <td>---</td>
                            <td>---</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    );
};

export default OwnerAnalysisComprehensiveAnalysis;