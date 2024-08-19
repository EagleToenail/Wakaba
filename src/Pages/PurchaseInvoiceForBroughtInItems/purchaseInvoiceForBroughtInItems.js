import React , {useState,useEffect} from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css'
import '../../Assets/css/firstTd.css'
// import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
// import LabelComponent from '../../Components/Common/LabelComponent';


const PurchaseInvoiceForBroughtInItems = () => {
    const title = 'タイトルタイトル';

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

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        // Update the date and time every minute
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 60000); // Update every 60,000 milliseconds (1 minute)
 
        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);
 
    // Map of days of the week to Japanese kanji
    const dayKanji = ['日', '月', '火', '水', '木', '金', '土'];
 
    // Format the date and time as YYYY/MM/DD (Kanji) HH:MM
    const formatDateTime = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const day = String(date.getDate()).padStart(2, '0');
        const dayOfWeek = date.getDay(); // Get day of week (0: Sunday, 1: Monday, ..., 6: Saturday)
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
 
        return `${year}/${month}/${day} (${dayKanji[dayOfWeek]}) ${hours}:${minutes}`;
    };
 
    const formattedDateTime = formatDateTime(dateTime);

    return (<>
        <Titlebar title={title} />
        <div className="bg-[trasparent] font-[sans-serif]">
            <div className='flex justify-center'>
                <div className="w-full pt-3" style={{ maxWidth: '80em' }}>
                    <h2 className="text-[#70685a] text-center font-bold text-[15px] flex justify-end mt-3" style={{ paddingRight: '1%' }}><span className='mr-5'>来店時間</span>&nbsp;{formattedDateTime}</h2>
                    {/* header */}
                    <div className='flex justify-between'>
                        <div className='' style={{ width: '25%' }}>
                            <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 !mb-0">買取計算書No.000000</label>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">事業者名</label>
                                <div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">OOOO OOOO OOOOOO</label>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left text-[13px] !mb-0">(登録 **************)</label>
                                </div>
                            </div>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">店舗名</label>
                                <div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">OOOO OOOO OOOOOO</label>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '50%' }}>
                            <div className='flex justify-center'>
                                <label className="text-[#70685a] font-bold mb-2 text-[20px] block text-left !mb-0">持ち込み商品 買取計算書</label>
                            </div>
                        </div>
                        <div style={{ width: '25%' }}>
                            <div className='flex pt-3'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">接客担当</label>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">OOOO OOOO OOOOOO</label>
                            </div>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">支払担当</label>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">OOOO OOOO OOOOOO</label>
                            </div>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">次回の現金還元額</label>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">OOOO OOOO OOOOOO</label>
                            </div>
                        </div>
                    </div>
                    {/* first line */}
                    <div className='flex'>
                        <div style={{ width: '20%' }}>
                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">会員番号</label>
                        </div>
                        <div style={{ width: '80%' }} className='flex justify-between'>
                            <label className="text-[#70685a]  mb-2 block text-left !mb-0">OOOO OO</label>
                            <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">VIP</label>
                            <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">男</label>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">お名前</label>
                                <label className="text-[#70685a]  mb-2 block text-left !mb-0">OOOO OOO</label>
                            </div>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">カ夕力ナ名</label>
                                <label className="text-[#70685a]  mb-2 block text-left !mb-0">OOOO OO</label>
                            </div>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">生年月日</label>
                                <label className="text-[#70685a]  mb-2 block text-left !mb-0 mr-10">OOOO OOO</label>
                            </div>
                        </div>
                    </div>
                    {/* second line */}
                    <div className='flex mt-1'>
                        <div style={{ width: '20%' }}>
                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">お電話番号</label>
                        </div>
                        <div style={{ width: '60%' }} className='flex justify-between'>
                            <label className="text-[#70685a]  mb-2 block text-left !mb-0">OOOO OO</label>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">e-mail</label>
                                <label className="text-[#70685a]  mb-2 block text-left !mb-0 ">OOOO OOO</label>
                            </div>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">ご職業</label>
                                <label className="text-[#70685a]  mb-2 block text-left !mb-0">OOOO OO</label>
                            </div>
                        </div>
                    </div>
                    {/* third line */}
                    <div className='flex mt-1'>
                        <div style={{ width: '20%' }}>
                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">ご住所</label>
                        </div>
                        <div style={{ width: '60%' }} className='flex justify-between'>
                            <label className="text-[#70685a]  mb-2 block text-left !mb-0">OOOO OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</label>
                        </div>
                    </div>
                    {/* forth line */}
                    <div className='flex mt-1'>
                        <div style={{ width: '20%' }}>
                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">本人確認書類</label>
                        </div>
                        <div style={{ width: '60%' }} className='flex justify-between'>
                            <label className="text-[#70685a]  mb-2 block text-left !mb-0">マイナンバーカード</label>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">ク一ポンの使用</label>
                                <label className="text-[#70685a]  mb-2 block text-left !mb-0 ">OOOO OOO</label>
                            </div>
                        </div>
                    </div>
                    {/* fifth line */}
                    <div className='flex mt-1'>
                        <div style={{ width: '20%' }}>
                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">次回のポイント還元額</label>
                        </div>
                        <label className="text-[#70685a]  mb-2 block text-left !mb-0 ">OOOO OOO</label>
                    </div>
                    {/* table */}
                    <div className="flex justify-center">
                        <div className='w-full pt-5 flex justify-center' style={{ maxWidth: '80em' }}>
                            <div style={{width:'65%',overflow:'auto'}}>
                                <table className='text-center' style={Table}>
                                    <thead>
                                        <tr>
                                            <th width='2%'></th>
                                            <th width='25%'>カテゴリ一1</th>
                                            <th width='40%'>商品名</th>
                                            <th>個数</th>
                                            <th>買取額</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td ><input type='checkbox' /></td>
                                            <td style={Td}>                            
                                                <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-1 outline-[#70685a]">
                                                <option value="1">種別</option>
                                                <option value="2">Afg</option>
                                                <option value="3">Åland</option>
                                                <option value="4">Albania</option>
                                            </select></td>
                                            <td style={Td}>OOOOOOOOOOO</td>
                                            <td style={Td}>1</td>
                                            <td style={Td}>100</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                    {/* total */}
                    <div className="flex justify-center" >
                        <div className='w-full pt-5 flex justify-center' style={{ maxWidth: '80em' }}>
                        
                            <div style={{ width: '65%' }} className='flex justify-end'>
                                <div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">買取合計金額</label>
                                    <div className='flex justify-end'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">999点</label>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">9999999円</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* lettes */}
                    <div className="flex justify-center" >
                        <div className='w-full pt-5 flex justify-center' style={{ maxWidth: '80em' }}>
                        
                            <div style={{ width: '50%' }} className='flex justify-center'>
                                <div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 !mb-0 flex">
                                         <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                            売却後は、商品仁対して一切に返却を申しを行いません。</label>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 !mb-0 flex">
                                         <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                            売却商品は全て本物です。売却後貴社基準外商品と判明した場合は、即座に返金いたします。</label>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 !mb-0 flex">
                                         <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                            個人情報の取扱にいて、了承いしました。</label>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 !mb-0 flex">
                                         <span className='w-1 flex flex-col justify-center mr-3'>
                                                <svg  focusable="false" fill="#70685a" aria-hidden="true" viewBox="0 0 24 24" data-testid="CircleIcon" title="Circle"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2"></path></svg>
                                            </span>
                                            私は反社会性力ではないことを表明し、確約いたします。</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* check text */}
                    <div className="flex justify-center" >
                        <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>
                        
                            <div style={{ width: '55%',paddingLeft:'6.3%' }} className='flex'>
                                <div className='flex'>
                                    <input type='checkbox' style={{ marginTop: '5px' }}/>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 mr-30 ml-2 !mb-0"> 私は適格請求書業者ではすら.ません。</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Area */}
                    <div className="flex justify-center" >
                        <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>
                        
                            <div style={{ width: '39%',height:'150px'}} className='flex'>
                                <div className='border border-[black] h-wull w-full'>   
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* check text */}
                    <div className="flex justify-center" >
                        <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>
                        
                            <div style={{ width: '55%',paddingLeft:'6.3%' }} className='flex'>
                                <div className='flex'>
                                    <input type='checkbox' style={{ marginTop: '5px' }}/>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 mr-30 ml-2 !mb-0"> 規約を熟読して了承しました。</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* text */}
                    <div className="flex justify-center" >
                        <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>
                            <div>
                                <div className='flex justify-center'>
                                    <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-3 pt-1 mr-30 ml-2 !mb-0">上記の全てを了承した上で、売却に同意してサインいたします。</label>
                                </div>
                                <div className='flex justify-center pt-2'>
                                    <label className="text-[#70685a] font-bold text-[20px] mb-2 block text-left mr-3 pt-1 mr-30 ml-2 !mb-0"> お客様 サイン</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Area */}
                    <div className="flex justify-center" >
                        <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>
                        
                            <div style={{ width: '70%',height:'150px'}} className='flex'>
                                <div className='border border-[black] h-wull w-full'>   
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Button */}
                    <div className="flex justify-center pt-5 mb-10" >
                        <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>
                               <ButtonComponent children={'買取を了承します'} className=""/> 
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
    );
};

export default PurchaseInvoiceForBroughtInItems;