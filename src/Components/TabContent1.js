import React from 'react';
import { Link } from 'react-router-dom'
export default function TabContent1() {

    return (
        <>
            <nav className=" shadow-lg   top-25 left-0 w-[290px] py-1 font-[sans-serif] overflow-auto">
                <ul>
                    <li className='flex px-3 py-2'>
                        <button type="button"
                            className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>&nbsp;
                        <button type="button"
                            className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                            99
                        </button>
                        <Link
                            className="text-[black] font-bold hover:text-[#655b4a] text-[15px] block rounded px-1 transition-all" to='/todolist'>
                            99 TODO
                        </Link>
                    </li>
                </ul>

                <div className="mt-2">
                    <h6 className="text-white font-bold bg-[#655b4a] px-4 py-1 text-[15px]">全体</h6>
                    <ul className="mt-2 px-3">
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-7 transition-all">
                                一般
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-7 transition-all">
                                全体周知
                            </Link>
                        </li>
                        <hr className="my-3  mr-1 border-gray-400" />
                        <li className='flex py-1'>
                            <button type="button"
                                className=" w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <Link
                                className="text-black font-semibold  text-[15px] block rounded px-7 transition-all">
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
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all" to='/yahooauction'>
                                ヤフオク
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-7 transition-all">
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
                            <Link
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
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                基者卸報告
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-7 transition-all">
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
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                店舗間連絡
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-7 transition-all">
                                月毎のキャンペーン
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-7 transition-all">
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
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-7 transition-all">
                                一般
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-7 transition-all">
                                業務連絡
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-7 transition-all">
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
                            <Link
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
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all" to='/wholesalershippinglist'>
                                業者卸報告
                            </Link>
                        </li>                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-7 transition-all">
                                入出金
                            </Link>
                        </li>                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <button type="button"
                                className="w-6 h-6 inline-flex items-center justify-center text-[10px] text-bold rounded-full border-none outline-none bg-[yellow] hover:bg-purple-700 active:bg-purple-600">
                                99
                            </button>
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-1 transition-all">
                                発注依頼
                            </Link>
                        </li>
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-7 transition-all">
                               購入依頼と送料支払報告
                            </Link>
                        </li>     
                        <li className='flex py-1'>
                            <button type="button"
                                className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-7 transition-all" to="/onsitepurchase">
                                出張買取
                            </Link>
                        </li>     
                        <li className='flex py-1'>
                            <button type="button"
                                className=" w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></button>
                            <Link
                                className="text-black font-bold  text-[15px] block rounded px-7 transition-all">
                                業者来訪
                            </Link>
                        </li>     
                    </ul>
                </div>


            </nav>
        </>
    )
}
