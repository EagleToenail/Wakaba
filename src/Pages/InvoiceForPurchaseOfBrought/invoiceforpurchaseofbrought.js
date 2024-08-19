import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css'
import '../../Assets/css/firstTd.css'
import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import dateimage from '../../Assets/img/datepicker.png';
import DateAndTime from '../../Components/Common/PickData';


const InvoicePurchaseOfBrought = () => {
    const title = 'タイトルタイトル';

    const [date, setEndDate] = useState('');

    const handleDateChange = (event) => {
        setEndDate(event.target.value); // Update the date state with the selected date
    };


    return (<>
        <Titlebar title={title} />
        <div className="bg-[trasparent] font-[sans-serif]">
            <div className='flex justify-center'>
                <div className="w-full pt-3" style={{ maxWidth: '80em' }}>
                <DateAndTime/>
                    <div className="w-full pt-3 flex justify-between" style={{ maxWidth: '80em' }}>
                        {/* new */}
                        <div style={{ width: '25%', }} className='flex align-center justify-center'>
                            <div className='flex flex-col justify-center'>
                                    <div className='w-3 h-3 bg-[#70685a]'></div>
                            </div>
                            <div className='flex flex-col justify-center ml-2'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 !mb-0 flex">買取計算書No.000000</label>
                            </div>
                            
                        </div>
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center !mt-0">持ち込み商品 買取計算書 (承諾申請画面)</h2>
                        {/* new */}

                        <div style={{ width: '15%', visibility: 'hidden' }} className='flex align-center justify-center'>
                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 !mb-0">asdTWO</label>
                        </div>

                    </div>
                        <div className='flex w-full'>
                            <div className='w-full mt-10'>
                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <label className="text-[#70685a] text-[15px] text-left mr-5">期限</label>
                                        <div className='flex'>
                                            <div style={{  flexDirection: 'column', }} className='flex align-center justify-around'>
                                                <input name="ads" type="text" value={date} required className="w-40 h-8 text-[#6e6e7c] border border-[#6e6e7c] text-[20px] px-4 py-1 outline-[#70685a]" readOnly/>
                                            </div>
                                            <div style={{ flexDirection: 'column', }} className='flex flex-col justify-center pl-3'>
                                                <div style={{width:'40px',height:'30px',cursor:'pointer'}}>
                                                    <div style={{position: 'relative'}}>
                                                        <img src={dateimage} style={{width:'40px',height:'30px', position: 'absolute',cursor:'pointer'}} alt='calendar'></img>
                                                        <input type="date" id="date" name="date" value={''} onChange={handleDateChange} style={{position: 'absolute',left:'0', width:'40px', height:'30px', background:'transparent', border:'none',opacity:'0',cursor:'pointer'}}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <label className="text-[#70685a] font-bold text-left ml-5">で</label>
                                    </div>
                                    <ButtonComponent children="預ら証発行" className='w-max !px-5' style={{ border: '1px solid #e87a00', backgroundColor: 'transparent', color: '#e87a00'}} />
                                    <ButtonComponent children="全体撮影" className='w-max !px-5' style={{ border: '1px solid #e87a00', backgroundColor: 'transparent', color: '#e87a00'}} />
                                    <ButtonComponent children="紙書類撮影" className='w-max !px-5' style={{ border: '1px solid #e87a00', backgroundColor: 'transparent', color: '#e87a00'}} />
                                    <ButtonComponent children="許可申請"  className='w-max !px-5'style={{color: 'white',}} />
                                    <ButtonComponent children="全て決済を許可" className='w-max !px-5' style={{ backgroundColor: '#9bd195', color: 'white', }} />
        
                                </div>
                            </div>
                            <div className='w-full flex justify-end' style={{ width: '15%',paddingTop:'25px' }}>
                                <div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right  !mb-0">支払担当 OOOO</label>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right  !mb-0">接客担当 OOOO</label>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className=" flex  justify-center ">
                <div className="w-full pt-3" style={{ maxWidth: '40em' }}>
                    <div className=" rounded-2xl">
                        <form className=" space-y-6">
                            {/* new */}
                            <div className='flex pt-2'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='!mb-0 flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">雇客番号</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-right mr-10 py-2 !mb-0">OOOOOOOOOOOOO</label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-3 !mb-0">VIP</label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">お名前</label>
                                </div>
                                <div style={{ width: '50%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">O O O O O O O O O O O OO O </label>
                                </div>
                                <div style={{ width: '20%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-3 !mb-0">男</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">力夕力ナ名</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">O O O O O O O O O O O OO O </label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">お電話番号</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">O O O O O O O O O O O OO O </label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-11 py-1 !mb-0">生年月日</label>
                                </div>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">1999/12/31</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">ご住所</label>
                                </div>
                                <div style={{ width: '75%', }} className='flex justify-end'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">O O O O O O O O O O O OO O O O O O </label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">e-mail</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">O O O O O O O O </label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">ご職業</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">O O O O O O O O </label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">本人確認書類</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">マイナンバー力一ド</label>
                                </div>
                            </div>
                            {/* new */}
                            <div className='flex'>
                                <div style={{ width: '25%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-10 py-1 !mb-0">特記事項</label>
                                </div>
                                <div style={{ width: '75%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                    <label className="w-full text-[#70685a] text-[20px]  px-4 py-2 outline-[#70685a]">盗品持ち込みの可能性があるため要注意</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* textarea*/}
                <div className="w-full h-full mt-9" style={{ maxWidth: '40em' }}>
                    {/* textarea First*/}
                    <div style={{ width: '100%', }} className='flex'>
                        <div className=" h-full w-full ml-10">
                            {/* Text area */}
                            <div className="border border-[#70685a] rounded px-3 w-full" style={{ height: '300px', overflowX: 'scroll', overflowY: 'scroll' }}>
                                <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-10 py-1 !mb-0">Past vist history</label>
                            </div>
                        </div>
                    </div>
                    {/* textarea Second*/}
                    <div style={{ width: '100%', }} className='flex'>
                        <div className=" h-full w-full ml-10 mt-10">
                            {/* Text area */}
                            <div className="border border-[#70685a] rounded px-3 w-full" style={{ height: '305px', overflowX: 'scroll', overflowY: 'scroll' }}>
                                <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-10 py-1 !mb-0">Whole hearing</label>
                                <div>
                                    <div className='flex'>
                                        <label className="text-[#70685a] text-[20px] mb-2 block text-left mr-10 py-1">Eleven 1</label>
                                        <label className="text-[#70685a] text-[20px] mb-2 block text-left mr-10 py-1 !mb-0">O O O O O O O O</label>
                                    </div>
                                    <div className='border border-[#70685a] ml-20'>
                                        <label className="text-[#70685a] text-[20px] mb-2 block text-left  mr-10 py-1 !mb-0">O O O O O O O O</label>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex'>
                                        <label className="text-[#70685a] text-[20px] mb-2 block text-left mr-10 py-1">Eleven 2</label>
                                        <label className="text-[#70685a] text-[20px] mb-2 block text-left mr-10 py-1 !mb-0">O O O O O O O O</label>
                                    </div>
                                    <div className='border border-[#70685a] ml-20'>
                                        <label className="text-[#70685a] text-[20px] mb-2 block text-left  mr-10 py-1 !mb-0">O O O O O O O O</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* table */}
            <div className="flex justify-center">
                <div className='w-full pt-10' style={{ maxWidth: '80em' }}>
                    <table className='text-center w-full'>
                        <thead>
                            <tr>
                                <th width='1%'>section</th>
                                <th width='2%'>PN</th>
                                <th>SIG category</th>
                                <th>Points1</th>
                                <th>Points2</th>
                                <th width='20%'>Points3</th>
                                <th>Points4</th>
                                <th width='20%'>Points5</th>
                                <th>Points6</th>
                                <th>Points7</th>
                                <th>Points8</th>
                                <th>Points9</th>
                                <th>Points10</th>
                                <th>Points</th>
                                <th>Points</th>
                                <th>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type='checkbox'/></td>
                                <td>Smith</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox'/></td>
                                <td>Jackson</td>
                                <td>94</td>
                                <td>94</td>
                                <td>94</td>
                                <td>94</td>
                                <td>94</td>
                                <td>94</td>
                                <td>94</td>
                                <td>94</td>
                                <td>94</td>
                                <td>94</td>
                                <td>94</td>
                                <td>94</td>
                                <td>94</td>
                                <td>94</td>
                                <td>94</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
            {/* result */}
            <div className="flex justify-center">
                <div className='w-full pt-3 pb-20' style={{ maxWidth: '80em' }}>
                    <div className='flex justify-between'>
                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0" style={{visibility:'hidden'}}>Total purchase price 999,999,999 yen</label>
                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">Purchase points: 999</label>
                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">Total purchase price 999,999,999 yen</label>
                    </div>
                    <div className='flex justify-center pt-3'>
                        <input type='checkbox'/>
                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-10 pt-2" >Total purchase</label>
                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5 pt-2" >Total purchase price</label>
                        <InputComponent style={{ width: '15%' }} className='mr-5'/>
                        <InputComponent style={{ width: '10%' }} className='mr-5'/>
                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 pt-2 mr-10" >To</label>
                        <button type="button"
                            className="w-10 h-10 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                <path
                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                    data-original="#000000" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex justify-center pt-3'>
                        <input type='checkbox'/>
                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-10 pt-2" >Total purchase</label>
                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5 pt-2" >Total purchase price</label>
                        <InputComponent style={{ width: '15%' }} className='mr-5'/>
                        <InputComponent style={{ width: '10%' }} className='mr-5'/>
                        <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 pt-2 mr-10" >To</label>
                        <button style={{visibility:'hidden'}} type="button"
                            className="w-10 h-10 inline-flex items-center justify-center text-[#70685a] border border-[#70685a] outline-none hover:bg-purple-700 active:bg-purple-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14px" fill="#70685a" className="inline" viewBox="0 0 512 512">
                                <path
                                    d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                                    data-original="#000000" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex justify-center pt-10'>
                    <button type="button"
                        className="mr-10  py-1 min-w-[160px] text-[#e87a00] text-[20px] rounded-full tracking-wider font-bold outline-none border border-[2px] border-[#e87a00] ">Purple</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default InvoicePurchaseOfBrought;