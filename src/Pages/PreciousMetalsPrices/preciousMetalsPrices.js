import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
import DateAndTime from '../../Components/Common/PickData';


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
    const Td_today={
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
        const intervalId = setInterval(() => {
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
                    console.log(data)
                    setData(data);
                })
                .catch(error => console.log(error));
        }, 1000); // 300000 milliseconds = 5 minutes

        return () => {
            clearInterval(intervalId);
        };
    }, []);

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
                            {/* <div>
                                <table className=' text-center w-full' style={Table}>
                                    <thead>
                                        <tr>
                                            <th rowSpan={2}>種類</th>
                                            <th colSpan={2}>ネットジャパン</th>
                                            <th colSpan={2}>リタナカ</th>
                                            <th colSpan={2}>明日の金(予想)</th>
                                            <th rowSpan={2}></th>
                                        </tr>
                                        <tr>
                                            <th>価格</th>
                                            <th>前日比</th>
                                            <th>価格</th>
                                            <th>前日比</th>
                                            <th>価格</th>
                                            <th>前日比</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={Td}>銀</td>
                                            <td style={Td}>9,999,999</td>
                                            <td style={Td}>+999</td>
                                            <td style={Td}>9,999,999</td>
                                            <td style={Td}>+999</td>
                                            <td style={Td}>9,999,999</td>
                                            <td style={Td}>+999</td>
                                            <td>
                                                <div  className='ml-5 w-5'>
                                                [円/g]    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={Td}>プラチナ</td>
                                            <td style={Td}></td>
                                            <td style={Td}></td>
                                            <td style={Td}></td>
                                            <td style={Td}></td>
                                            <td style={Td}></td>
                                            <td style={Td}></td>
                                            <td>
                                                <div  className='ml-5 w-5'>
                                                [円/g]    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={Td}>銀</td>
                                            <td style={Td}></td>
                                            <td style={Td}></td>
                                            <td style={Td}></td>
                                            <td style={Td}></td>
                                            <td style={Td}></td>
                                            <td style={Td}></td>
                                            <td>
                                                <div  className='ml-5 w-5'>
                                                [円/g]    
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={Td}>Pd</td>
                                            <td style={Td}></td>
                                            <td style={Td}></td>
                                            <td style={Td}></td>
                                            <td style={Td}></td>
                                            <td style={Td}></td>
                                            <td style={Td}></td>
                                            <td>
                                                <div  className='ml-5 w-5'>
                                                [円/g]    
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                                </div> */}
                            <div className='mt-5'>
                                <table className=' text-center w-full' style={Table}>
                                    <thead>
                                        <tr>
                                            <th>種類</th>
                                            <th>今日</th>
                                            <th>09/21</th>
                                            <th>09/20</th>
                                            <th>09/19</th>
                                            <th>09/18</th>
                                            <th>09/17</th>
                                            <th>09/16</th>
                                            

                                        </tr>


                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => (
                                            <tr>
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
                                                <td style={Td_today}>{item.price}</td>
                                                <td style={Td}>{item.price}</td>
                                                <td style={Td}>{item.price}</td>
                                                <td style={Td}>{item.price}</td>
                                                <td style={Td}>{item.price}</td>
                                                <td style={Td}>{item.price}</td>
                                                <td style={Td}>{item.price}</td>
                                                <td>
                                                    <div className='ml-5 w-5'>

                                                        <span>[円/g]</span>

                                                    </div>
                                                </td>
                                            </tr>
                                        ))}

                                        {/* <tr>
                                            <td style={Td}>K24</td>
                                            <td style={Td}></td>
                                            <td style={Td}></td>
                                            <td style={Td}></td>
                                            <td><div  className='ml-5 w-5'>
                                                <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" fill="#70685a" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z"></path></svg>
                                                </div>
                                            </td>
                                        </tr> */}
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