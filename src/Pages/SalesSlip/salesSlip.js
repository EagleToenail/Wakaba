import React,{ useState, useEffect } from 'react';
import {Link } from 'react-router-dom';
import axios from 'axios';
// import Titlebar from '../../Components/Common/Titlebar';
// import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import LabelComponent from '../../Components/Common/LabelComponent';


const SalesSlip = () => {
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

    const [sales, setSales] = useState([]);
    // Fetch customer data
    useEffect(() => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        console.log(`${wakabaBaseUrl}/sales/getSalesList`);
        axios.get(`${wakabaBaseUrl}/sales/getSalesList`)
            .then(response => {
                console.log(response.data)
                setSales(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }, []);


    const handleCategory =(value) =>(e) => {
        e.preventDefault();
        console.log("afdaf",value)
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        console.log(`${wakabaBaseUrl}/sales/filter`);
        axios.post(`${wakabaBaseUrl}/sales/filter`,{ value: value })
            .then(response => {
                console.log(response.data)
                setSales(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    };


    return (
        <>
            {/* <Titlebar title={title} /> */}
            {/* first button line  */}
            <div className="w-full flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full ml-10  pr-10 flex justify-center" style={{minWidth:'100em'}}>
                    <div className='w-full'>
                        <div className='flex justify-between ml-10' style={{ width: '85%' }}>
                            <div className='flex mt-10 w-1/2' >
                                <div className='w-full'>
                                    <ButtonComponent children={'リサイクルショップへの買取依頼書へ'} className='!px-5 text-2xl w-[100%]' style={{ backgroundColor: '#9bd195', height: '40px' }} />
                                    <div className='flex justify-center'>
                                        <LabelComponent value={'行を選択してください'} />
                                    </div>
                                </div>
                                <div>
                                    <ButtonComponent children={'廃棄申請'} className='!px-5 text-2xl' style={{ backgroundColor: '#9bd195', marginLeft: '30px', height: '40px' }} />
                                    <div className='flex justify-centerb w-max'>
                                        <LabelComponent value={'行を選択してください'} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end mt-10 w-1/2' >
                                <ButtonComponent children={'売上表'} className='!px-5 text-2xl' style={{ backgroundColor: '#424242', height: '40px' }} />
                                <ButtonComponent children={'業者査定シート'} className='!px-5 text-2xl'  style={{ backgroundColor: 'transparent', border: '1px solid #424242', color: '#424242', marginLeft: '30px', height: '40px' }} >
                                    <Link to='/contractorassessmentsheet'>業者査定シート</Link></ButtonComponent>
                                <ButtonComponent children={'ヤフオク'} className='!px-5 text-2xl ' style={{ backgroundColor: 'transparent', border: '1px solid #424242', color: '#424242', marginLeft: '30px', height: '40px' }} >
                                    <Link to='/yahooauction'>ヤフオク</Link>
                                </ButtonComponent>
                            </div>
                        </div>

                        {/* second button line  */}
                        {/* This buttons doesn't have borders and background-color */}
                        <div className='flex ml-10' style={{ width: '85%' }}>
                            <div className='flex justify-between  mt-5 w-full' >
                                <ButtonComponent children={'全て'} onClick={handleCategory('')}  className="!px-3  bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'貴金属'} onClick={handleCategory('貴金属')} className="!px-3 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'ブランド'} onClick={handleCategory('ブランド')} className="!px-3 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'バッグ'} onClick={handleCategory('バッグ')} className="!px-3 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'時計'} onClick={handleCategory('時計')} className="!px-3 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'財布'} onClick={handleCategory('財布')} className="!px-3 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'アクセサリ'} onClick={handleCategory('アクセサリ')} className="!px-3 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'骨董品'} onClick={handleCategory('骨董品')} className="!px-3 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'洋酒'} onClick={handleCategory('洋酒')} className="!px-3 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'カメラ'} onClick={handleCategory('カメラ')} className="!px-3 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'楽器'} onClick={handleCategory('楽器')} className="!px-3 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'スマホ/夕ブレット'} onClick={handleCategory('夕ブレット')} className="!px-5 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <select id="classificatin" name="classificatin" className="!w-max h-8 rounded-lg !text-[#70685a] text-[15px] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]" >
                                    <option value="1">その他</option>
                                    <option value="2">Afghanistan</option>
                                    <option value="3">Åland Islands</option>
                                    <option value="4">Albania</option>
                                </select>
                            </div>
                        </div>

                        {/*  Tabe*/}
                        <div className='mt-10 pl-10 pr-10 pb-20 w-full flex'>
                            <div style={{ width: '100%', overflow: 'auto' }} >
                                <table style={Table}>
                                    <thead>
                                        <tr>
                                            <th rowSpan={2} className='px-2'>選択</th>
                                            <th width='5%'  className='px-2' style={Th} rowSpan={2}>商品番号</th>
                                            <th width='5%' className='px-2' style={Th} rowSpan={2}>わかばNo.</th>
                                            <th width='10%' className='px-2' style={Th} rowSpan={2}><div className='border border-[black] rounded-md px-3  w-max'>入金日</div></th>
                                            <th width='10%' className='px-2' style={Th} rowSpan={2}><div className='border border-[black] rounded-md px-3  w-max'>卸日</div></th>
                                            <th width='10%' className='px-2' style={Th} rowSpan={2}><div className='border border-[black] rounded-md px-3  w-max'>&nbsp;ステー夕ス&nbsp;</div></th>
                                            <th width='10%' className='px-2' style={Th} rowSpan={2}><div className='border border-[black] rounded-md px-3  w-max'>買取日</div></th>
                                            <th width='10%' className='px-2' style={Th} rowSpan={2}><div className='border border-[black] rounded-md px-3  w-max'>買取担当</div></th>

                                            <th style={Th} colSpan={6}>個人情報</th>

                                            <th width='10%' style={Th} rowSpan={2} className='px-2'>カテゴリ-1</th>
                                            <th width='10%' style={Th} rowSpan={2} className='px-2' >カテゴリ-2</th>
                                            <th width='10%' style={Th} rowSpan={2} className='px-2' >カテゴリ-3</th>
                                            <th width='10%' style={Th} rowSpan={2} className='px-2' >カテゴリ-4</th>
                                            <th width='10%' style={Th} rowSpan={2} >画像</th>
                                            <th width='5%' style={Th} rowSpan={2} >商品名</th>
                                            <th width='5%' style={Th} rowSpan={2} >個数</th>
                                            <th width='5%' style={Th} rowSpan={2} >粗利益</th>
                                            <th width='5%' style={Th} rowSpan={2} >買取額</th>
                                            <th width='10%' style={Th} rowSpan={2} >最高査定額</th>
                                            <th width='5%' style={Th} rowSpan={2} ><svg className='h-10' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th>
                                            <th width='5%' style={Th} rowSpan={2} >真贋</th>
                                        </tr>
                                        <tr>
                                            <th width='5%' style={Th}className='px-2'>お名前</th>
                                            <th width='5%' style={Th}className='px-2' >カナ</th>
                                            <th width='5%' style={Th} className='px-2'>TEL</th>
                                            <th width='10%' style={Th} className='px-2'>住所</th>
                                            <th width='5%' style={Th} className='px-2'>来店種別-1</th>
                                            <th width='5%' style={Th} className='px-2'>来店種別-2</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sales.map(sale => (
                                            <tr key={sale.id}>
                                                <td><input type="checkbox"></input></td>
                                                <td style={Td}>{sale.no}</td>
                                                <td style={Td}>OOOO</td>
                                                <td style={Td}>{sale.deposit_date}</td>
                                                <td style={Td}>{sale.wholesale_date}</td>
                                                <td style={Td}></td>
                                                <td style={Td}></td>
                                                <td style={Td}>{sale.purchasing_manager}</td>
                                                <td style={Td}>{sale.customer_name}</td>
                                                <td style={Td}>{sale.katakana_name}</td>
                                                <td style={Td}>{sale.telephone_number}</td>
                                                <td style={Td}>{sale.address}</td>
                                                <td style={Td}>{sale.visit_type}</td>
                                                <td style={Td}></td>
                                                <td style={Td}>{sale.product_type_one}</td>
                                                <td style={Td}>{sale.product_type_two}</td>
                                                <td style={Td}></td>
                                                <td style={Td}></td>
                                                <td style={Td}></td>
                                                <td style={Td}>{sale.merchandise}</td>
                                                <td style={Td}>{sale.number}</td>
                                                <td style={Td}></td>
                                                <td style={Td}>{sale.purchase_amount}</td>
                                                <td style={Td}></td>
                                                <td style={Td}></td>
                                                <td style={Td}></td>
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

export default SalesSlip;