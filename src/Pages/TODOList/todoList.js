import React,{useEffect} from 'react'
import InputComponent from '../../Components/Common/InputComponent';
import LabelComponent from '../../Components/Common/LabelComponent';

export default function TODOList() {
    
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);

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
                                                OOOOOOOOOOOOOOOOOOOOOOOOOOの件
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
                                                OOOOOOOOOOOOOOOOOOOOOOOOOOの件
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
                                                OOOOOOOOOOOOOOOOOOOOOOOOOOの件
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
                                                OOOOOOOOOOOOOOOOOOOOOOOOOOの件
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
                                    <div>
                                        < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                        編集
                                        </button>
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
                                <div>
                                    <label className="text-[black] pl-3 text-[15px] block text-left" style={{ width: '70%', overflow: 'scroll' }}>
                                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                    テキストテキストテキストテキストテキストテキスト
                                    </label>
                                </div>
                            </div>

                        </div>
                        <div style={{ width: '20%' }} className='ml-10'>
                            {/* asd full-circle*/}
                            <div>
                                <div className='flex mt-5'>
                                    <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                    <div>
                                        <label className="text-[black] pl-3 text-[15px] block text-center">名前名前名前名前</label>
                                    </div>
                                </div>
                                <div className='flex mt-5'>
                                    <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                    <div>
                                        <label className="text-[black] pl-3 text-[15px] block text-center">名前名前名前名前</label>
                                    </div>
                                </div>
                                <div className='flex mt-5'>
                                    <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                    <div>
                                        <label className="text-[black] pl-3 text-[15px] block text-center">名前名前名前名前</label>
                                    </div>
                                </div>
                                <div className='flex mt-5'>
                                    <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                    <div>
                                        <label className="text-[black] pl-3 text-[15px] block text-center">名前名前名前名前</label>
                                    </div>
                                </div>
                            </div>
                            {/* rect btn */}
                            <div className='mt-5 ml-10'>
                                < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#9bd194] hover:bg-blue-700 focus:outline-none">
                                完了
                                </button>
                            </div>
                            {/* rect btn */}
                            <div className='mt-5 ml-10'>
                                < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                返信
                                </button>
                            </div>

                        </div>
                    </div>
                    {/* secondpart */}
                    <div className='flex justify-between w-full'>
                        {/* reply */}
                        <div className='flex mt-5 w-full'>
                            <div className='flex justify-between ' style={{width:'80%'}}>
                                {/* left */}
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
                                                OOOOOOOOOOOOOOOOOOOOOOOOOOの件
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
                                                OOOOOOOOOOOOOOOOOOOOOOOOOOの件
                                            </div>
                                         </div>
                                </div>
                                {/* right */}
                                <div className='flex'>
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
                                    </div>
                                </div>
                            </div>
                            <div style={{width:'20%'}}>
                                        <div className='flex mt-5 ml-10'>
                                            <div className='w-7 h-7 rounded-full bg-[#70685a]'></div>
                                            <div>
                                                <label className="text-[black] pl-3 text-[15px] block text-center">名前名前名前名前</label>
                                            </div>
                                        </div>
                                        <div className='flex mt-5 ml-10'>
                                            <div className='w-7 h-7 rounded-full bg-[#70685a]'></div>
                                            <div>
                                                <label className="text-[black] pl-3 text-[15px] block text-center">名前名前名前名前</label>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className='flex justify-center !mt-0'>
                        <div className='h-[50px] bg-[#ebe6e0] mr-20' style={{ width: '50%', height: '130px' }}></div>
                    </div> */}
                    <div className='mt-20'>
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

