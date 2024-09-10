import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
// import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import LabelComponent from '../../Components/Common/LabelComponent';
import axios from 'axios';
import leftArrow from '../../Assets/img/right-arrow.png';
import rightArrow from '../../Assets/img/left-arrow.png';


const ContractorAssementSheet = () => {
    // const title = 'タイトルタイトル';

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

    //   const [isOpen, setIsOpen] = useState(false);
    const [isshow, setIsShow] = useState(true);

    const openSubtable = () => {
        // setIsOpen(true);
        setIsShow(false);
    };

    const closeSubtable = () => {
        // setIsOpen(false);
        setIsShow(true);
    };

    const [visibleTable, setVisibleTable] = useState('貴金属');

        // State to track the value of the active button
        const [activeValue, setActiveValue] = useState('貴金属');
        const buttonValues = ['貴金属', '古銭等', 'バッグ', '時計',
            '財布', 'アクセサリ', '骨董品', '洋酒', 'カメラ','楽器','着物','スマホ/夕ブレット'];

    // Function to handle button click
    const handleButtonClick = (tableName) => {
      setVisibleTable(tableName);
      setActiveValue(tableName);
};

    const [data, setData] = useState({
        preciousMetals: [],
        clocks: [],
        bags: [],
        wallets: [],
        accessories: [],
        cameras: [],
        antiques: [],
        westernLiquors: [],
        musicalInstruments: [],
        oldCoins: [],
        kimonos: [],
        smartPhoneAndTablets: []
    });
  
    useEffect(() => {
      const fetchData = async () => {

        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
            throw new Error('API base URL is not defined');
        }

        console.log(`${wakabaBaseUrl}/sales/filter`);
          const response = await axios.get(`${wakabaBaseUrl}/contractorassessments`);
        //   console.log("accessment",response.data.payload)
          setData(response.data.payload || {
            preciousMetals: [],
            clocks: [],
            bags: [],
            wallets: [],
            accessories: [],
            cameras: [],
            antiques: [],
            westernLiquos: [],
            musicalInstruments: [],
            oldCoins: [],
            kimonos: [],
            smartPhoneAndTablets: []
          });
      };
      fetchData();
    }, []);
  

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
                                    <ButtonComponent className='!w-[200px] !bg-[transparent] border border-[#424242] !text-[#424242] h-11 !text-2xl !px-0 ' ><Link to="/salesslip">売上表</Link></ButtonComponent>
                                    <ButtonComponent children={'業者査定シート'} className='!w-[350px] h-11 !bg-[#424242] border border-[#424242] !text-2xl !px-0' style={{ marginLeft: '30px' }} />
                                    <ButtonComponent className='!w-[200px] h-11 !bg-[transparent] border border-[#424242] !text-[#424242] !text-2xl !px-0' style={{ marginLeft: '30px' }} >
                                        <Link to="/yahooauction">ヤフオク</Link>
                                    </ButtonComponent>
                                </div>
                                <div className='flex justify-center mt-10 w-full' >
                                    <div>
                                        <ButtonComponent children={'業者への買取依書へ'} className='h-11 !bg-[#9bd195] !text-2xl text-[white] !px-10' />
                                        <div className='text-center'>
                                            <LabelComponent value={'行を選択してくだをい'} className="text-center"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* second button line  */}
                        <div className='flex ml-5 justify-center'>
                            <div className='contractor-assessment-sheet-btns flex justify-around  mt-5 w-full' >
                                <div className='flex justify-center gap-5 mt-5'>
                                    {/* <ButtonComponent children={'全て'} className="!px-4  bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg " /> */}
                                    <ButtonComponent children={'貴金属'}  onClick={() => handleButtonClick('貴金属')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[0] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[0] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'古銭等'} onClick={() => handleButtonClick('古銭等')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[1] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[1] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'バッグ'} onClick={() => handleButtonClick('バッグ')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[2] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[2] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'時計'} onClick={() => handleButtonClick('時計')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[3] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[3] ? '#424242' : 'transparent'}}/>
                                </div>
                                <div className='flex justify-center gap-5 mt-5 '>
                                    <ButtonComponent children={'財布'} onClick={() => handleButtonClick('財布')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[4] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[4] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'アクセサリ'} onClick={() => handleButtonClick('アクセサリ')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[5] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[5] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'骨董品'} onClick={() => handleButtonClick('骨董品')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[6] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[6] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'洋酒'} onClick={() => handleButtonClick('洋酒')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[7] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[7] ? '#424242' : 'transparent'}}/>

                                </div>
                                <div className='flex justify-center gap-5 mt-5 '>
                                   
                                    <ButtonComponent children={'カメラ'} onClick={() => handleButtonClick('カメラ')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[8] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[8] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'楽器'} onClick={() => handleButtonClick('楽器')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[9] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[9] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'着物'} onClick={() => handleButtonClick('着物')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[10] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[10] ? '#424242' : 'transparent'}}/>
                                    <ButtonComponent children={'スマホ/夕ブレット'} onClick={() => handleButtonClick('スマホ/夕ブレット')} className="!px-4 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg " style={{color: activeValue === buttonValues[11] ? 'white' : '#424242', backgroundColor: activeValue === buttonValues[11] ? '#424242' : 'transparent'}}/>
                                    <select id="classificatin" name="classificatin" onClick={() => handleButtonClick('その他')} className="!px-4 h-8 rounded-lg text-[#70685a] !text-[15px] font-bold border border-[#70685a] py-1 outline-[#70685a]">
                                        <option value="">その他</option>
                                        <option value="2"></option>
                                        <option value="3"> </option>
                                        <option value="4"></option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {/*  Tabe*/}
                        <div className='mt-10 pb-20 w-full h-full flex'>
                            {/* precious metal */}
                            <div className='h-[300px]' style={{ width: '100%', overflow: 'auto' , display: visibleTable === '貴金属' ? 'block' : 'none' }} >
                            {data.preciousMetals && data.preciousMetals.length > 0 ? (
                                <table id="" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>配送先</th>
                                            <th style={Th}>卸日</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品</th>
                                            <th style={Th}>個数</th>
                                            <th style={Th}>金種</th>
                                            <th style={Th}>総重量</th>
                                            <th style={Th}>買取価格</th>
                                            <th style={Th}>地金重さ</th>
                                            <th style={Th}>本査定ネットジャパン</th>
                                            <th style={Th}>LINE色石バンク</th>
                                            <th style={Th}>本査定色石バンク</th>
                                            <th style={Th}>LINEフォーナイン</th>
                                            <th style={Th}>本査定フォーナイン</th>
                                            <th style={Th}>カイマナ査定日</th>
                                            <th style={Th}>LINEカイマナ</th>
                                            <th style={Th}>本査定カイマナ</th>
                                            <th style={Th}>LINE査定日相場</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.preciousMetals.map((item,Index) => (
                                            <tr key={item.id}>
                                            <td style={Td}>{Index+1}</td>
                                            <td style={Td}>{item.shipping_address}</td>
                                            <td style={Td}>{item.wholesale_date}</td>
                                            <td style={Td}>{item.number}</td>
                                            <td style={Td}>{item.product}</td>
                                            <td style={Td}>{item.quantity}</td>
                                            <td style={Td}>{item.gold_type}</td>
                                            <td style={Td}>{item.gross_weight}</td>
                                            <td style={Td}>{item.purchase_price}</td>
                                            <td style={Td}>{item.bullion_weight}</td>
                                            <td style={Td}>{item.book_assessment_net_japan}</td>
                                            <td style={Td}>{item.line_color_stone_bank}</td>
                                            <td style={Td}>{item.real_assessment_color_stone_bank}</td>
                                            <td style={Td}>{item.line_four_nine}</td>
                                            <td style={Td}>{item.book_assessment_four_nine}</td>
                                            <td style={Td}>{item.kaimana_assessment_date}</td>
                                            <td style={Td}>{item.line_kaimana}</td>
                                            <td style={Td}>{item.original_assessment_kaimana}</td>
                                            <td style={Td}>{item.online_ssessment_date_quote}</td>
                                            </tr>
                                   
                                ))} 
                                    </tbody>
                                </table>
                                ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                            {/* Old coin */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === '古銭等' ? 'block' : 'none' }} >
                            {data.oldCoins && data.oldCoins.length > 0 ? (
                                <table id="oldcoin" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>発送日</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>備考</th>
                                            <th style={Th}>査定日</th>
                                            <th style={Th}>ワタル商事</th>
                                            <th style={Th}>近江屋</th>
                                            <th style={Th}>ヤフオク</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.oldCoins.map((coin,Index) => (
                                            <tr key={coin.id}>
                                            <td style={Td}>{Index+1}</td>
                                            <td style={Td}>{coin.shipping_date}</td>
                                            <td style={Td}>{coin.number}</td>
                                            <td style={Td}>{coin.product_name}</td>
                                            <td style={Td}>{coin.remarks}</td>
                                            <td style={Td}>{coin.assessment_date}</td>
                                            <td style={Td}>{coin.wataru_shoji}</td>
                                            <td style={Td}>{coin.omiya}</td>
                                            <td style={Td}>{coin.yahoo_auctions}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                            {/* bag */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === 'バッグ' ? 'block' : 'none' }} >
                            {data.bags && data.bags.length > 0 ? (
                                <table id="bag" style={Table}>
                                <thead className='sticky top-0 bg-white z-10'>
                                    <tr>
                                        <th style={Th}>NO</th>
                                        <th style={Th}>配送先</th>
                                        <th style={Th}>発送日2</th>
                                        <th style={Th}>番号</th>
                                        <th style={Th}>メーカー</th>
                                        <th style={Th}>商品名</th>
                                        <th style={Th}>型番</th>
                                        <th style={Th}>ランク</th>
                                        <th style={Th}>買取額</th>
                                        <th style={Th}>BBスカイプ日</th>
                                        <th style={Th}>BB</th>
                                        <th style={Th}>GA</th>
                                        <th style={Th}>ホームコム</th>
                                        <th style={Th}>カイマナ</th>
                                        <th style={Th}>フォーナイン</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {data.bags.map((index,Index) => (
                                            <tr key={index.id}>
                                            <td style={Td}>{Index+1}</td>
                                            <td style={Td}>{index.shipping_address}</td>
                                            <td style={Td}>{index.shipping_date}</td>
                                            <td style={Td}>{index.number}</td>
                                            <td style={Td}>{index.manufacturer}</td>
                                            <td style={Td}>{index.product_name}</td>
                                            <td style={Td}>{index.model_number}</td>
                                            <td style={Td}>{index.rank}</td>
                                            <td style={Td}>{index.purchase_price}</td>
                                            <td style={Td}>{index.bb_skype_date}</td>
                                            <td style={Td}>{index.bb}</td>
                                            <td style={Td}>{index.ga}</td>
                                            <td style={Td}>{index.home_com}</td>
                                            <td style={Td}>{index.kaimana}</td>
                                            <td style={Td}>{index.four_nine}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                            {/* clock */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === '時計' ? 'block' : 'none' }} >
                            {data.clocks && data.clocks.length > 0 ? (
                                <table id="clock" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>配送先</th>
                                            <th style={Th}>発送日2</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>型番１</th>
                                            <th style={Th}>型番２</th>
                                            <th style={Th}>自動／クォーツ</th>
                                            <th style={Th}>可動／不動</th>
                                            <th style={Th}>テスター</th>
                                            <th style={Th}>箱ギャラ</th>
                                            <th style={Th}>買取額</th>
                                            <th style={Th}>スカイプ日</th>
                                            <th style={Th}>BB</th>
                                            <th style={Th}>GA</th>
                                            <th style={Th}>ベルモンド</th>
                                            <th style={Th}>ホームコム</th>
                                            <th style={Th}>カイマナ</th>
                                            <th style={Th}>フォーナイン</th>
                                            <th style={Th}>ヤフオク</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.clocks.map((item,Index) => (
                                            <tr key={item.id}>
                                            <td style={Td}>{Index + 1}</td>
                                            <td style={Td}>{item.shipping_address}</td>
                                            <td style={Td}>{item.shipping_date}</td>
                                            <td style={Td}>{item.number}</td>
                                            <td style={Td}>{item.product}</td>
                                            <td style={Td}>{item.model_number_one}</td>
                                            <td style={Td}>{item.model_number_two}</td>
                                            <td style={Td}>{item.automatic_quartz}</td>
                                            <td style={Td}>{item.movable}</td>
                                            <td style={Td}>{item.tester}</td>
                                            <td style={Td}>{item.box_guarantee}</td>
                                            <td style={Td}>{item.purchase_price}</td>
                                            <td style={Td}>{item.skype_date}</td>
                                            <td style={Td}>{item.bb}</td>
                                            <td style={Td}>{item.ga}</td>
                                            <td style={Td}>{item.belmond}</td>
                                            <td style={Td}>{item.homecom}</td>
                                            <td style={Td}>{item.kaimana}</td>
                                            <td style={Td}>{item.four_nine}</td>
                                            <td style={Td}>{item.yahoo_auction}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                            {/* wallet */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === '財布' ? 'block' : 'none' }} >
                            {data.wallets && data.wallets.length > 0 ? (
                                <table id="wallet" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>配送先</th>
                                            <th style={Th}>発送日2</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>メーカー</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>型番</th>
                                            <th style={Th}>ランク</th>
                                            <th style={Th}>ＢＢスカイプ日</th>
                                            <th style={Th}>BB</th>
                                            <th style={Th}>GA</th>
                                            <th style={Th}>ベルモンド</th>
                                            <th style={Th}>ホームコム</th>
                                            <th style={Th}>カイマナ</th>
                                            <th style={Th}>フォーナイン</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.wallets.map((wallet,Index) => (
                                            <tr key={wallet.id}>
                                            <td style={Td}>{Index+1}</td>
                                            <td style={Td}>{wallet.shipping_address}</td>
                                            <td style={Td}>{wallet.shipping_date}</td>
                                            <td style={Td}>{wallet.number}</td>
                                            <td style={Td}>{wallet.manufacturer}</td>
                                            <td style={Td}>{wallet.product_name}</td>
                                            <td style={Td}>{wallet.model_number}</td>
                                            <td style={Td}>{wallet.rank}</td>
                                            <td style={Td}>{wallet.bb_skype_day}</td>
                                            <td style={Td}>{wallet.bb}</td>
                                            <td style={Td}>{wallet.ga}</td>
                                            <td style={Td}>{wallet.girasol}</td>
                                            <td style={Td}>{wallet.home_com}</td>
                                            <td style={Td}>{wallet.kaimana}</td>
                                            <td style={Td}>{wallet.four_nine}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                            {/* accessories */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === 'アクセサリ' ? 'block' : 'none' }} >
                            {data.accessories && data.accessories.length > 0 ? (
                                <table id="accessories" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>配送先</th>
                                            <th style={Th}>発送日2</th>
                                            <th style={Th}>わかば番号</th>
                                            <th style={Th}>メーカー</th>
                                            <th style={Th}>商品内容</th>
                                            <th style={Th}>型番</th>
                                            <th style={Th}>ランク</th>
                                            <th style={Th}>BBスカイプ日</th>
                                            <th style={Th}>BB</th>
                                            <th style={Th}>GA</th>
                                            <th style={Th}>ホームコム</th>
                                            <th style={Th}>カイマナ</th>
                                            <th style={Th}>フォーナイン</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.accessories.map((accessory,Index) => (
                                            <tr key={accessory.id}>
                                            <td style={Td}>{Index+1}</td>
                                            <td style={Td}>{accessory.shipping_address}</td>
                                            <td style={Td}>{accessory.shipping_date}</td>
                                            <td style={Td}>{accessory.wakaba_number}</td>
                                            <td style={Td}>{accessory.manufacturer}</td>
                                            <td style={Td}>{accessory.product_details}</td>
                                            <td style={Td}>{accessory.model_number}</td>
                                            <td style={Td}>{accessory.rank}</td>
                                            <td style={Td}>{accessory.bb_skype_day}</td>
                                            <td style={Td}>{accessory.bb}</td>
                                            <td style={Td}>{accessory.ga}</td>
                                            <td style={Td}>{accessory.home_com}</td>
                                            <td style={Td}>{accessory.kaimana}</td>
                                            <td style={Td}>{accessory.four_nine}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                            {/* camera */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === 'カメラ' ? 'block' : 'none' }} >
                            {data.cameras && data.cameras.length > 0 ? (
                                <table id="camera" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>発送日</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>型番</th>
                                            <th style={Th}>買取額</th>
                                            <th style={Th}>ランク</th>
                                            <th style={Th}>査定日</th>
                                            <th style={Th}>管弦屋</th>
                                            <th style={Th}>ヤフオク卸</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.cameras.map((camera,Index) => (
                                            <tr key={camera.id}>
                                            <td style={Td}>{Index+1}</td>
                                            <td style={Td}>{camera.shipping_date}</td>
                                            <td style={Td}>{camera.number}</td>
                                            <td style={Td}>{camera.product_name}</td>
                                            <td style={Td}>{camera.model_number}</td>
                                            <td style={Td}>{camera.purchase_price}</td>
                                            <td style={Td}>{camera.rank}</td>
                                            <td style={Td}>{camera.assessment_date}</td>
                                            <td style={Td}>{camera.orchestra}</td>
                                            <td style={Td}>{camera.yahoo_auctions_wholesale}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                            {/* Antiques */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === '骨董品' ? 'block' : 'none' }} >
                            {data.antiques && data.antiques.length > 0 ? (
                                <table id="antique" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>配送先</th>
                                            <th style={Th}>発送日2</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>備考</th>
                                            <th style={Th}>査定日</th>
                                            <th style={Th}>ひるねこ</th>
                                            <th style={Th}>アート</th>
                                            <th style={Th}>吉岡美術</th>
                                            <th style={Th}>刀剣佐藤</th>
                                            <th style={Th}>ヤフオク</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.antiques.map((antique,Index) => (
                                            <tr key={antique.id}>
                                            <td style={Td}>{Index+1}</td>
                                            <td style={Td}>{antique.shipping_address}</td>
                                            <td style={Td}>{antique.shipping_date}</td>
                                            <td style={Td}>{antique.number}</td>
                                            <td style={Td}>{antique.product_name}</td>
                                            <td style={Td}>{antique.remarks}</td>
                                            <td style={Td}>{antique.assessment_date}</td>
                                            <td style={Td}>{antique.nap_cat}</td>
                                            <td style={Td}>{antique.art}</td>
                                            <td style={Td}>{antique.yoshioka_art}</td>
                                            <td style={Td}>{antique.sword_sato}</td>
                                            <td style={Td}>{antique.yahoo_auctions}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                            {/* western liquor */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === '洋酒' ? 'block' : 'none' }} >
                            {data.westernLiquors && data.westernLiquors.length > 0 ? (
                                <table id="westernliquor" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>配送先</th>
                                            <th style={Th}>発送日2</th>
                                            <th style={Th}>わかば番号</th>
                                            <th style={Th}>種類</th>
                                            <th style={Th}>銘柄</th>
                                            <th style={Th}>数量</th>
                                            <th style={Th}>容量</th>
                                            <th style={Th}>度数</th>
                                            <th style={Th}>査定日</th>
                                            <th style={Th}>ヤフオク最高値</th>
                                            <th style={Th}>オークションID</th>
                                            <th style={Th}>ゴールドリカー</th>
                                            <th style={Th}>リンクサス</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data.westernLiquors.map((liquor,Index) => (
                                        <tr key={liquor.id}>
                                        <td style={Td}>{Index+1}</td>
                                        <td style={Td}>{liquor.shipping_address}</td>
                                        <td style={Td}>{liquor.shipping_date}</td>
                                        <td style={Td}>{liquor.wakaba_number}</td>
                                        <td style={Td}>{liquor.kinds}</td>
                                        <td style={Td}>{liquor.brand}</td>
                                        <td style={Td}>{liquor.quantity}</td>
                                        <td style={Td}>{liquor.capacity}</td>
                                        <td style={Td}>{liquor.frequency}</td>
                                        <td style={Td}>{liquor.assessment_date}</td>
                                        <td style={Td}>{liquor.yahoo_auctions_highest_price}</td>
                                        <td style={Td}>{liquor.auction_id}</td>
                                        <td style={Td}>{liquor.gold_liquor}</td>
                                        <td style={Td}>{liquor.linksus}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                            {/* musical instrument */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === '楽器' ? 'block' : 'none' }} >
                            {data.musicalInstruments && data.musicalInstruments.length > 0 ? (
                                <table id="musicalinstrument" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>発送日</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>備考</th>
                                            <th style={Th}>査定日</th>
                                            <th style={Th}>管弦屋</th>
                                            <th style={Th}>ヤフオク卸</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.musicalInstruments.map((instrument,Index) => (
                                            <tr key={instrument.id}>
                                            <td style={Td}>{Index+1}</td>
                                            <td style={Td}>{instrument.shipping_date}</td>
                                            <td style={Td}>{instrument.number}</td>
                                            <td style={Td}>{instrument.product_name}</td>
                                            <td style={Td}>{instrument.remarks}</td>
                                            <td style={Td}>{instrument.assessment_date}</td>
                                            <td style={Td}>{instrument.orchestra}</td>
                                            <td style={Td}>{instrument.yahoo_auctions_wholesale}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                            {/* kimono */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === '着物' ? 'block' : 'none' }} >
                            {data.kimonos && data.kimonos.length > 0 ? (
                                <table id="kimono" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>発送日</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>備考</th>
                                            <th style={Th}>査定日</th>
                                            <th style={Th}>はなもり</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.kimonos.map((kimono,Index) => (
                                            <tr key={kimono.id}>
                                            <td style={Td}>{Index+1}</td>
                                            <td style={Td}>{kimono.shipping_date}</td>
                                            <td style={Td}>{kimono.number}</td>
                                            <td style={Td}>{kimono.product_name}</td>
                                            <td style={Td}>{kimono.remarks}</td>
                                            <td style={Td}>{kimono.assessment_date}</td>
                                            <td style={Td}>{kimono.hanamori}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                    <p className='flex justify-center'>クロックデータなし</p> //No clock data available
                                )}
                            </div>
                            {/* smartphone and tablet */}
                            <div style={{ width: '100%', overflow: 'auto' , display: visibleTable === 'スマホタブレット' ? 'block' : 'none' }} >
                            {data.smartPhoneAndTablets && data.smartPhoneAndTablets.length > 0 ? (
                                <table id="smartphoneandtablet" style={Table}>
                                    <thead className='sticky top-0 bg-white z-10'>
                                        <tr>
                                            <th style={Th}>NO</th>
                                            <th style={Th}>発送日</th>
                                            <th style={Th}>番号</th>
                                            <th style={Th}>商品名</th>
                                            <th style={Th}>備考</th>
                                            <th style={Th}>査定日</th>
                                            <th style={Th}>はなもり</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.smartPhoneAndTablets.map((item,Index) => (
                                            <tr key={item.id}>
                                            <td style={Td}>{Index+1}</td>
                                            <td style={Td}>{item.shipping_date}</td>
                                            <td style={Td}>{item.number}</td>
                                            <td style={Td}>{item.product_name}</td>
                                            <td style={Td}>{item.remarks}</td>
                                            <td style={Td}>{item.yahoo_auctions_highest_price}</td>
                                            <td style={Td}>{item.assessment_date}</td>
                                            <td style={Td}>{item.pathtech}</td>
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
                                {/* <table style={Table}>
                                    <thead>
                                        <tr>
                                            <th rowSpan={2}>選択</th>
                                            <th width='5%' style={Th} rowSpan={2}>商品番号</th>
                                            <th width='5%' style={Th} rowSpan={2}>わかばNo.</th>
                                            <th width='5%' style={Th} rowSpan={2}><div style={{ border: '1px solid black', borderRadius: '5px', margin: '5%' }}>ステー夕ス</div></th>
                                            <th width='5%' style={Th} rowSpan={2}><div style={{ border: '1px solid black', borderRadius: '5px', margin: '5%' }}>卸し先</div></th>
                                            <th width='5%' style={Th} rowSpan={2}><div style={{ border: '1px solid black', borderRadius: '5px', margin: '5%' }}>発送日</div></th>
                                            <th width='5%' style={Th} rowSpan={2}><div style={{ border: '1px solid black', borderRadius: '5px', margin: '5%' }}>入金日</div></th>

                                            <th width='5%' style={Th} rowSpan={2}>カテゴリ-1</th>
                                            <th style={Th} rowSpan={2}>カテゴリ-2</th>
                                            <th style={Th} rowSpan={2} >カテゴリ-3</th>
                                            <th style={Th} rowSpan={2} >カテゴリ-4</th>
                                            <th style={Th} rowSpan={2} >商品名</th>
                                            <th style={Th} rowSpan={2} >画像</th>
                                            <th style={Th} rowSpan={2} >個数</th>

                                            <th style={Th} rowSpan={2}>買取額</th>
                                            <th width='10%' style={Th} rowSpan={2} >最高査定額</th>
                                            <th width='10%' style={Th} rowSpan={2} >
                                                {isshow ? <button><img src={rightArrow} style={{maxWidth: '25px' }} alt='' onClick={openSubtable} ></img></button> : <button><img src={leftArrow} style={{ width: '30px' }} alt='' onClick={closeSubtable}></img></button>}
                                            </th>
                                            <th width='10%' style={Th} rowSpan={2} >真贋</th>

                                            {isshow ? <th style={Th} colSpan={4}>業者名01 OOOOOOOOOOOO</th> : <th colSpan={4} style={{ display: 'none' }}></th>}

                                            {isshow ? <th style={Th} >業者名02<svg className='h-10' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th> : <th style={{ display: 'none' }}></th>}
                                            {isshow ? <th style={Th} >業者名03<svg className='h-10' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th> : <th style={{ display: 'none' }}></th>}
                                            {isshow ? <th style={Th} >業者名04<svg className='h-10' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th> : <th style={{ display: 'none' }}></th>}
                                            {isshow ? <th style={Th} >ヤフオク<svg className='h-10' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th> : <th style={{ display: 'none' }}></th>}

                                            <th style={Th}>備考<svg className='h-10' focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th>
                                        </tr>
                                        <tr>
                                            {isshow ? <th width='10%' style={Th} >仮査定日</th> : <th style={{ display: 'none' }}></th>}
                                            {isshow ? <th width='10%' style={Th} >仮査定額</th> : <th style={{ display: 'none' }}></th>}
                                            {isshow ? <th style={Th} >本査定日</th> : <th style={{ display: 'none' }}></th>}
                                            {isshow ? <th style={Th} >本査定額</th> : <th style={{ display: 'none' }}></th>}

                                            {isshow ? <th style={Th} >本査定日</th> : <th style={{ display: 'none' }}></th>}
                                            {isshow ? <th style={Th} >本査定額</th> : <th style={{ display: 'none' }}></th>}
                                            {isshow ? <th style={Th} >本査定日</th> : <th style={{ display: 'none' }}></th>}
                                            {isshow ? <th style={Th} >最高落札額</th> : <th style={{ display: 'none' }}></th>}

                                            <th width='10%' style={Th} ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox"></input></td>
                                            <td style={Td}>9999</td>
                                            <td style={Td}>9999</td>
                                            <td style={Td}>
                                                <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                                    <option value="1">宛先の名前</option>
                                                    <option value="2">Afghanistan</option>
                                                    <option value="3">Åland Islands</option>
                                                    <option value="4">Albania</option>
                                                </select>
                                            </td>
                                            <td style={Td}>
                                                <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                                    <option value="1">宛先の名前</option>
                                                    <option value="2">Afghanistan</option>
                                                    <option value="3">Åland Islands</option>
                                                    <option value="4">Albania</option>
                                                </select>
                                            </td>
                                            <td style={Td}>2024/12/30</td>
                                            <td style={Td}>2024/12/30</td>
                                            <td style={Td}>
                                                <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                                    <option value="1">宛先の名前</option>
                                                    <option value="2">Afghanistan</option>
                                                    <option value="3">Åland Islands</option>
                                                    <option value="4">Albania</option>
                                                </select>
                                            </td>
                                            <td style={Td}>
                                                <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                                    <option value="1">宛先の名前</option>
                                                    <option value="2">Afghanistan</option>
                                                    <option value="3">Åland Islands</option>
                                                    <option value="4">Albania</option>
                                                </select>
                                            </td>
                                            <td style={Td}>
                                                <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                                    <option value="1">宛先の名前</option>
                                                    <option value="2">Afghanistan</option>
                                                    <option value="3">Åland Islands</option>
                                                    <option value="4">Albania</option>
                                                </select>

                                            </td>
                                            <td style={Td}>
                                                <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                                    <option value="1">宛先の名前</option>
                                                    <option value="2">Afghanistan</option>
                                                    <option value="3">Åland Islands</option>
                                                    <option value="4">Albania</option>
                                                </select>
                                            </td>
                                            <td style={Td}>グッチOOOO</td>
                                            <td style={Td}><ButtonComponent children="1" className='w-max !px-5 rounded-lg' style={{ backgroundColor: '#ebe5e1', color: '#626373' }} /></td>
                                            <td style={Td}>1</td>
                                            <td style={Td}>100</td>
                                            <td style={Td}>100</td>
                                            <td style={Td}>1</td>
                                            <td style={Td}>O</td>
                                            {isshow ? <td style={Td}>12/30</td> :<td style={{ display: 'none' }}></td>}
                                            {isshow ? <td style={Td}>12/30</td> :<td style={{ display: 'none' }}></td>}
                                            {isshow ? <td style={Td}></td> :<td style={{ display: 'none' }}></td>}
                                            {isshow ? <td style={Td}></td> :<td style={{ display: 'none' }}></td>}
                                            {isshow ? <td style={Td}></td> :<td style={{ display: 'none' }}></td>}
                                            {isshow ? <td style={Td}></td> :<td style={{ display: 'none' }}></td>}
                                            {isshow ? <td style={Td}></td> :<td style={{ display: 'none' }}></td>}
                                            {isshow ? <td style={Td}></td> :<td style={{ display: 'none' }}></td>}
                                            <td style={Td}></td>
                                        </tr>

                                    </tbody>

                                </table> */}
        </>
    );
};

export default ContractorAssementSheet;