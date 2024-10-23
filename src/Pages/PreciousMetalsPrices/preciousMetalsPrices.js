import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import DateAndTime from '../../Components/Common/PickData';
import axios from 'axios';


const PreciousMetalsPrices = () => {
    // const title = 'タイトルタイトル';
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
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
    const Tr_boldBorder = {
        borderBottom: '1px solid #70685a'
    };
    useEffect(() => {
        const url = "https://gold.tanaka.co.jp/retanaka/price/";
        fetch(url)
          .then(response => response.text())
          .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
      
            const priceTables = doc.querySelectorAll("table.price_table");
            const data = [];
      
            priceTables.forEach(table => {
              const rows = table.querySelectorAll("tbody tr");
              rows.forEach(row => {
                const cols = row.querySelectorAll("th, td");
                if (cols.length > 1) {
                  const name = cols[0].textContent.trim();
                  const price = cols[1].textContent.trim();
                  data.push({ name, price });
                }
              });
            });
            setData(data);
            getData(data);
            console.log('data',data)
          })
          .catch(error => console.log(error));
      }, []);
    const dates = [];
    for (let i = 0; i <= 6; i++) {
      const date = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
      dates.push(date);
    }
    
    const formattedDates = dates.map((date) => {
      const month = date.getMonth() + 1;
      const day = date.getDate();
    //   console.log(day);
      return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
    });
    //-------------------------------auto save----------------------------------
    const getData = async(data1) => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }
       
        const payload = data1.reduce((acc, item) => {
            acc[item.name] = item.price;
            return acc;
          }, {});
          console.log(payload,'payload')
        await axios.post(`${wakabaBaseUrl}/preciousmetalprice/autosave`, {payload:payload})
            .then(response => {
                    setData(response.data)
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    };
      
        // const now = new Date();
      
        // // Create a Date object for the next occurrence of 00:01:00 in JST
        // const nextMidnight = new Date();
        // nextMidnight.setHours(0, 1, 0, 0); // Set to 00:01:00 JST
      
        // // Adjust to JST
        // const options = { timeZone: 'Asia/Tokyo' };
        // const jstNow = new Intl.DateTimeFormat('en-US', options).format(now);
        // const jstDate = new Date(`${new Date().toLocaleDateString()} ${jstNow}`);
      
        // // Calculate time until 00:01:00 JST
        // let timeUntilNextCall = nextMidnight.getTime() - jstDate.getTime();
      
        // // If it's already past 00:01:00 JST, schedule for the next day
        // if (timeUntilNextCall < 0) {
        //   nextMidnight.setDate(nextMidnight.getDate() + 1); // Move to the next day
        //   timeUntilNextCall = nextMidnight.getTime() - jstDate.getTime(); // Recalculate the time
        // }
      
        // // Schedule the getData function
        // setTimeout(() => {
        //   getData();
        // }, timeUntilNextCall);

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
                                            {/* <th>今日</th> */}
                                            {formattedDates.map((date, index) => (
                                                <th key={index}>{date}</th>
                                            ))}


                                        </tr>


                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => (
                                            <tr key={index}>
                                                <td style={Td}>
                                                    {index === data.length - 1 ? (
                                                        <span> Sv</span>
                                                    ) : null}
                                                    {index >= 11 && index <= 16 ? (
                                                        <span>Pt {item.name}</span>
                                                    ) : (
                                                        <span>{item.name}</span>
                                                    )}

                                                </td>
                                                <td style={Td_today}>{item.price.toLocaleString() }</td>
                                                <td style={Td}>{item.price.toLocaleString() }</td>
                                                <td style={Td}>{item.price.toLocaleString() }</td>
                                                <td style={Td}>{item.price.toLocaleString() }</td>
                                                <td style={Td}>{item.price.toLocaleString() }</td>
                                                <td style={Td}>{item.price.toLocaleString() }</td>
                                                <td style={Td}>{item.price.toLocaleString() }</td>
                                                <td>
                                                    <div className='ml-5 w-5'>

                                                        <span>[円/g]</span>

                                                    </div>
                                                </td>
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