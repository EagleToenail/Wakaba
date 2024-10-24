import React, { useState, useEffect } from 'react';
import DateAndTime from '../../Components/Common/PickData';
import axios from 'axios';


const PreciousMetalsPrices = () => {

    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
        width: '150px'
    };
    const Td_today = {
        border: '1px solid #70685a',
        order: '5px solid #70685a',
        color: '#70685a',
        fontSize: '15px',
        width: '150px',
        fontWeight: 'bold'
    }
    
    const [data, setData] = useState([]);
    
    const desiredKeys = [
        'K24特定品',
        'K24',
        'K22',
        'K20',
        'K18',
        'K15',
        'K14',
        'K12',
        'K10',
        'K9',
        'Pt特定品',
        'Pt1000',
        'Pt950',
        'Pt900',
        'Pt850',
        'Pt800',
        'Pt750',
        'SV'
      ];

    useEffect(()=> {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
         axios.post(`${wakabaBaseUrl}/preciousmetalprice/getList`)
        .then(response => {
                setData(response.data)
                console.log(response.data)
        })
        .catch(error => {
            console.error("There was an error fetching the customer data!", error);
        });
    },[])
    return (
        <>
            {/* <Titlebar title={title} /> */}
            <DateAndTime />
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '90em' }}>
                    <h2 className="text-[#70685a] text-center text-2xl  flex justify-center">貴金属相場 [ネットジャパン/リタナカ/ 明日の金]</h2>
                    {/*  Tabe*/}
                    <div className='pl-20 pr-20 pb-20 flex justify-center mt-10' >
                        <div>
                            <div className='mt-5'>
                                <table className=' text-center w-full' style={Table}>
                                    <thead>
                                        <tr>
                                            <th>種類</th>
                                            <th>今日</th>
                                            {data?.length>0 && data.map((item,index) => (
                                                <th key={index} style={{ display: index === 0 ? 'none' : 'table-cell' }}>
                                                 {item.date}
                                              </th>
                                            ))}
                                        </tr>


                                    </thead>
                                    <tbody>

                                        {data?.length>0 && desiredKeys.map((item,Index) => (
                                            <tr key={item}>
                                                <td style={Td}>{item}</td>
                                                {data.map((content,index) => (
                                                    <td style={index === 0 ? Td_today : Td}>{data[index][item]}</td>
                                                ))}
                                            </tr>
                                        ))}

                                    </tbody>

                                </table></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PreciousMetalsPrices;
