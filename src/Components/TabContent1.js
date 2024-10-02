import React from 'react';
import { Link } from 'react-router-dom'
export default function TabContent1() {

    return (
        <>
            <nav className=" top-25 left-0 w-[290px] py-1 font-[sans-serif] overflow-auto">
                <ul>
                    <li className='flex px-3 py-2'>
                        <div 
                            className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></div>&nbsp;
                        <div 
                            className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                            99
                        </div>
                        <Link
                            className="text-[black] font-bold text-[15px] block rounded px-1 hover:text-red-500 transition-all duration-300" to='/todolist'>
                            99 TODO
                        </Link>
                    </li>
                </ul>

                <div className="mt-2">
                    <h6 className="text-white font-bold bg-[#655b4a] px-4 py-1 text-[15px]">全体</h6>
                    <ul className="mt-2 px-3">
                        <li className='flex py-1'>
                            <div type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></div>
                            <div 
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </div>
                            <Link to="/generalchat/allgeneral"
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                一般
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                              <div 
                                    className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                    99
                                </div>
                            <Link to='/generalchat/allforall'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                全体周知
                            </Link>
                        </li>
                        <hr className="my-3  mr-1 border-gray-400" />
                        <li className='flex py-1'>
                            <button type="button"
                                className=" w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <div 
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </div>
                            <Link  to='/generalchat/wakabapassword'
                                className="text-black font-semibold  text-[15px] block rounded px-1 transition-all">
                                WAKABA パスワード
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link  to='/generalchat/yahooauction'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                ヤフオク
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link to='/generalchat/executemeeting'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                幹部会議連絡
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link to='/generalchat/standardout'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                基準外
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link  to='/generalchat/basereport'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                基者卸報告
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link  to='/generalchat/training'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                研修
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[#fff] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link to='/generalchat/storecommunication'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                店舗間連絡
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link  to='/generalchat/monthlycampaign'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                月毎のキャンペーン
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                             <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link  to='/generalchat/purchaseperformanceblog'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                買取実績ブ口グ
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h6 className="text-white font-bold bg-[#655b4a] px-4 py-1 text-[15px]">生駒 OOOOOO 店</h6>
                    <ul className="mt-2 px-3">
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link to="/storechat/allgeneral"
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                一般
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link to="/storechat/businesscommunication"
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                業務連絡
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link to='/endofworkreporttoowner'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                一日の報告
                            </Link>
                        </li>
                        <hr className="my-3  mr-1 border-gray-400" />
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link to="/storechat/approval"
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                決裁
                            </Link>
                        </li>                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link to='/storechat/wholesalerreport'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                業者卸報告
                            </Link>
                        </li>                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link to='/withdrawbankatm'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                入出金
                            </Link>
                        </li>                        
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link to='/storechat/orderrequest'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                発注依頼
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link to='/withdrawvariouspurchase'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                               購入依頼と送料支払報告
                            </Link>
                        </li>     
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link to='/onsitepurchase'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                出張買取
                            </Link>
                        </li>     
                        <li className='flex py-1'>
                            <button type="button"
                                className=" w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link to='/storechat/vendorvisit'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                業者来訪
                            </Link>
                        </li> 
                        <hr className="my-3  mr-1 border-gray-400" /> 
                        <li className='flex py-1'>
                            <button type="button"
                                className=" w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link to='/storechat/shift'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                シフト
                            </Link>
                        </li> 
                        <li className='flex py-1'>
                            <button type="button"
                                className=" w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link to='/storechat/businessreporthandover'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                業務倩報/引継ぎ
                            </Link>
                        </li> 
                        <li className='flex py-1'>
                            <button type="button"
                                className=" w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link to='/storechat/yetanothertashifmeeting'
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                又タシフ会搓
                            </Link>
                        </li>    
                    </ul>
                </div>


            </nav>
        </>
    )
}
