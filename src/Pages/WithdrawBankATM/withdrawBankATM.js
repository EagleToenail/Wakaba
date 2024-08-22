import React from 'react'
import InputComponent from '../../Components/Common/InputComponent';
import LabelComponent from '../../Components/Common/LabelComponent';

export default function withdrawBankATM() {
    return (
        <>
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full pr-10 pl-10 " style={{ maxWidth: '90em' }}>
                    <div className='flex'>
                        <div style={{ width: '80%' }}>
                            <div className='flex justify-between'>
                                {/* read request */}
                                <div>
                                    <div className='flex mt-5'>
                                        <div>
                                            <div className='w-30'>
                                                <label className="text-[black] font-bold text-[10px] block text-center">2024/12/30 23:25</label>
                                            </div>
                                            <div className='border border-[#70685a] w-30'>
                                                <label className="text-[#70685a] font-bold text-[10px] block text-center">ステー夕ス表示</label>
                                            </div>
                                        </div>
                                        <div className='text-[15px] text-[black] ml-3'>
                                        銀行ATMからの出金申請の件
                                        </div>
                                    </div>
                                    <div className='flex mt-5'>
                                        <div>
                                            <div className='w-30'>
                                                <label className="text-[black] font-bold text-[10px] block text-center">2024/12/30 23:25</label>
                                            </div>
                                            <div className='border border-[#70685a] w-30'>
                                                <label className="text-[#70685a] font-bold text-[10px] block text-center">ステー夕ス表示</label>
                                            </div>
                                        </div>
                                        <div className='text-[15px] text-[black] ml-3'>
                                        銀行ATMからの出金申請の件
                                        </div>
                                    </div>
                                    <div className='flex mt-5'>
                                        <div>
                                            <div className='w-30'>
                                                <label className="text-[black] font-bold text-[10px] block text-center">2024/12/30 23:25</label>
                                            </div>
                                            <div className='border border-[#70685a] w-30'>
                                                <label className="text-[#70685a] font-bold text-[10px] block text-center">ステー夕ス表示</label>
                                            </div>
                                        </div>
                                        <div className='text-[15px] text-[black] ml-3'>
                                        銀行ATMからの出金申請の件
                                        </div>
                                    </div>
                                </div>
                                {/* destination name border-circle */}
                                <div>
                                    <div className='flex mt-5'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">宛先の名前</label>
                                        </div>
                                    </div>
                                    <div className='flex mt-5'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">宛先の名前</label>
                                        </div>
                                    </div>
                                    <div className='flex mt-5'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">宛先の名前</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mt-5'>
                                {/* rect btn */}
                                <div>
                                    < button type="button" className="w-max px-10 py-1 font-semiblod rounded-lg justify-center text-[#70685a] text-[16px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                    編集
                                    </button>
                                </div>
                                <div>
                                    <label className="text-[black] pl-3 text-[20px] block text-left" >金庫の残り1万円札がOO枚になりましたので、50万円を出金してきます。ご許可をお願いします。</label>
                                </div>
                            </div>
                            {/* rect-btn-gurope 8 */}
                            <div className='flex mt-2'>
                                <div className='mr-1'>
                                    <div className='w-5 h-5 border border-[#70685a]'></div>
                                    <div className='w-5 h-5 border border-[#70685a] mt-1'></div>
                                </div>
                                <div className='mr-1'>
                                    <div className='w-5 h-5 border border-[#70685a]'></div>
                                    <div className='w-5 h-5 border border-[#70685a] mt-1'></div>
                                </div>
                                <div className='mr-1'>
                                    <div className='w-5 h-5 border border-[#70685a]'></div>
                                    <div className='w-5 h-5 border border-[#70685a] mt-1'></div>
                                </div>
                                <div className='mr-1'>
                                    <div className='w-5 h-5 border border-[#70685a]'></div>
                                    <div className='w-5 h-5 border border-[#70685a] mt-1'></div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '20%' }} className='ml-10'>
                            {/* asd full-circle*/}
                            <div>
                                <div className='flex mt-5'>
                                    <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                    <div>
                                        <label className="text-[black] pl-3 block text-center">名前名前名前名前</label>
                                    </div>
                                </div>
                                <div className='flex mt-5'>
                                    <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                    <div>
                                        <label className="text-[black] pl-3 block text-center">名前名前名前名前</label>
                                    </div>
                                </div>
                                <div className='flex mt-5'>
                                    <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                    <div>
                                        <label className="text-[black] pl-3 block text-center">名前名前名前名前</label>
                                    </div>
                                </div>
                            </div>
                            {/* rect btn */}
                            <div className='mt-5 ml-10'>
                                < button type="button" className="w-max px-10 py-1 font-semiblod rounded-lg justify-center text-[#fbfcfb] text-[18px] bg-[#92c78b] hover:bg-blue-700 focus:outline-none">
                                許可
                                </button>
                            </div>
                            {/* rect btn */}
                            <div className='mt-5 ml-10'>
                                < button type="button" className="w-max px-10 py-1 font-semiblod rounded-lg justify-center text-[#70685a] text-[16px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                返信
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* secondline */}
                    <div className='flex w-full mt-10'>
                        <div style={{ width: '80%' }}>

                            {/* reply */}
                            <div className='flex justify-between ml-10'>

                                <div className='flex'>
                                    <div>
                                        <div className='w-30'>
                                            <label className="text-[black] font-bold text-[10px] block text-center">2024/12/30 23:25</label>
                                        </div>

                                        <div>
                                            < button type="button" className="w-max px-10 py-1 font-semiblod rounded-lg justify-center text-[#70685a] text-[16px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                            編集
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label className="text-[black]  text-[15px] block text-left pl-5">[返信]</label>
                                        </div>
                                        <div>
                                            <label className="text-[black] text-[15px] block text-left pl-5">銀行から出金してきました。999999円を金庫へ入れました。 </label>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex mr-10'>
                                    <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                    <div>
                                        <label className="text-[black] pl-3 text-[15px] block text-center">宛先の名前</label>
                                    </div>
                                </div>
                            </div>
                            {/* rect-btn-gurope 8 */}
                            <div className='flex ml-10 mt-2'>
                                <div className='mr-1'>
                                    <div className='w-5 h-5 border border-[#70685a]'></div>
                                    <div className='w-5 h-5 border border-[#70685a] mt-1'></div>
                                </div>
                                <div className='mr-1'>
                                    <div className='w-5 h-5 border border-[#70685a]'></div>
                                    <div className='w-5 h-5 border border-[#70685a] mt-1'></div>
                                </div>
                                <div className='mr-1'>
                                    <div className='w-5 h-5 border border-[#70685a]'></div>
                                    <div className='w-5 h-5 border border-[#70685a] mt-1'></div>
                                </div>
                                <div className='mr-1'>
                                    <div className='w-5 h-5 border border-[#70685a]'></div>
                                    <div className='w-5 h-5 border border-[#70685a] mt-1'></div>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '20%' }}>
                                <div className='flex '>
                                    <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                    <div>
                                        <label className="text-[black] pl-3 block text-center">名前名前名前名前</label>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className='flex justify-around !mt-0' >
                        <div className='flex justify-around !mt-0 mr-20' style={{width:"100%"}}>
                        <div  style={{visibility:'hidden'}}>
                            {/* rect btn */}
                            <div className='mt-5 ml-20'>
                                < button type="button" className="w-max px-5 py-1 font-semiblod rounded-lg justify-center text-[#fbfcfb] text-[16px] bg-[#92c78b] hover:bg-blue-700 focus:outline-none">
                                    edit
                                </button>
                            </div>
                            {/* rect btn */}
                            <div className='mt-5 ml-20'>
                                < button type="button" className="w-max px-10 py-1 font-semiblod rounded-lg justify-center text-[#70685a] text-[16px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                返信
                                </button>
                            </div>
                        </div>
                        <div className='h-[50px] bg-[#ebe6e0]' style={{ width: '50%', height: '130px' }}></div>
                        
                        <div >
                            {/* rect btn */}
                            <div className='mt-5'>
                                < button type="button" className="w-max px-10 py-1 font-semiblod rounded-lg justify-center text-[#fbfcfb] text-[18px] bg-[#92c78b] hover:bg-blue-700 focus:outline-none">
                                確認
                                </button>
                            </div>
                            {/* rect btn */}
                            <div className='mt-5 '>
                                < button type="button" className="w-max px-10 py-1 font-semiblod rounded-lg justify-center text-[#70685a] text-[16px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                返信
                                </button>
                            </div>
                        </div>
                        </div>
                        </div>
                    <div>
                        <hr className="my-1 border-[#70685a]" />
                    </div>
                    {/* operation */}
                    <div className='flex'>
                        <LabelComponent value={'新規投稿'} style={{marginTop:'5px',width:'10%',marginRight:'15px'}}/>
                        <div style={{ width: '90%',height:'50px' }} className='text-center'>
                            {/* firstline */}
                            <div className='flex' style={{height:'40px'}}>
                                <div style={{ width: '30%' ,marginRight:'10%'}}>
                                        <select id="gender" name="gender" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                            <option value="1">宛先の名前</option>
                                            <option value="2">Afghanistan</option>
                                            <option value="3">Åland Islands</option>
                                            <option value="4">Albania</option>
                                        </select>
                                </div>
                                <div style={{ width: '35%' }} className='flex justify-end mr-10'>
                                    <LabelComponent value={'一万円札の残り'} style={{marginTop:'5px',marginRight:'15px'}}/>
                                    <InputComponent style={{height:'40px',width:'70px'}}/>
                                    <LabelComponent value={'枚'} style={{marginTop:'5px',marginLeft:'15px'}}/>
                                </div>
                                <div style={{ width: '15%', height:'40px'}} className='flex justify-end'>
                                <select id="gender" name="gender" className="w-20 text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                            <option value="1">50</option>
                                            <option value="2">10</option>
                                            <option value="3">5</option>
                                            <option value="4">0</option>
                                        </select>
                                <LabelComponent value={'万円'} style={{marginTop:'5px',marginLeft:'15px'}}/>
                                </div>
                            </div>
                            {/* secondline */}
                            <div className='flex !mt-2' style={{height:'40px'}}>
                                <div style={{ width: '80%' }} className='flex justify-start'>
                                    <InputComponent style={{height:'40px'}} className='w-full mr-10'/>
                                </div>
                                <div style={{ width: '10%' }}>
                                    < button type="button" className="w-max px-5 m1-10 py-1 font-semiblod rounded-lg justify-center text-[#70685a] text-[16px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                    ファイル
                                    </button>
                                </div>
                                <div  style={{ width: '40%' }} className='mt-0.5 flex justify-end ml-5'>
                                    <div className='flex flex-col justify-center ml-5'>
                                        <div className='flex gap-2.5'>
                                            <div className='w-6 h-6 border border-[#70685a] '></div>
                                            <div className='w-6 h-6 border border-[#70685a] '></div>
                                            <div className='w-6 h-6 border border-[#70685a] '></div>
                                            <div className='w-6 h-6 border border-[#70685a] '></div>
                                            <div className='w-6 h-6 border border-[#70685a] '></div>
                                            <div className='w-6 h-6 border border-[#70685a] '></div>
                                            <div className='w-6 h-6 border border-[#70685a] '></div>
                                            <div className='w-6 h-6 border border-[#70685a] '></div>
                                            <div className='w-6 h-6 border border-[#70685a] '></div>
                                            <div className='w-6 h-6 border border-[#70685a] '></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* thirdline */}
                            <div className='flex mt-2' style={{height:'40px'}}>
                                <div style={{ width: '85%' }}>
                                    <InputComponent style={{height:'40px'}} className="w-full"/>
                                </div>
                                <div className='ml-10'>
                                    < button type="button" className=" w-max px-10 py-1 font-semiblod rounded-lg justify-center text-[#70685a] text-[16px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                    送信
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

