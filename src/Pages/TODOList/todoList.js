import React,{useState} from 'react'
import InputComponent from '../../Components/Common/InputComponent';
import LabelComponent from '../../Components/Common/LabelComponent';

export default function TODOList() {

    const [textColor, setTextColor] = useState('black');
      // Handle button click
    const handleColorChange = (color) => {
        setTextColor(color);
    };
    const [textMessageColor, setTextMessageColor] = useState('black');
      // Handle button click
    const handleMessageColorChange = (color) => {
        setTextMessageColor(color);
    };

    return (
        <>
            <div className=" flex flex-col items-center justify-center py-3">
                <div className="w-full">
                    <div className='w-full'>
                        {/* received message */}
                        <div className='w-full'>
                            {/* first */}
                            <div className='new-post-receive w-full flex'>
                                <div className='new-post-receive-message flex' style={{ width: '75%' }}>
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
                                <div className='new-post-receive-name flex justify-between' style={{ width: '25%' }}>
                                    <div className='flex mt-5'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">宛先の名前</label>
                                        </div>
                                    </div>
                                    <div className='flex mt-5'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">名前名前名前名前</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             {/* second*/}
                        </div>
                        {/* send message*/}
                        <div className='w-full'>
                            {/* first */}
                            <div className='flex w-full'>
                                <div style={{ width: '80%' }}>
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
                                                    <button type="button" onClick={()=>handleMessageColorChange('#ff0000')} className='w-5 h-5 border border-[#70685a] bg-[#ff0000]'></button>
                                                    <button type="button" onClick={()=>handleMessageColorChange('#0000ff')} className='w-5 h-5 border border-[#70685a] bg-[#0000ff]'></button>
                                                </div>
                                                <div className='mr-1'>
                                                    <button type="button" onClick={()=>handleMessageColorChange('#ee82ee')} className='w-5 h-5 border border-[#70685a] bg-[#ee82ee]'></button>
                                                    <button type="button" onClick={()=>handleMessageColorChange('#3cb371')} className='w-5 h-5 border border-[#70685a] bg-[#3cb371]'></button>
                                                </div>
                                                <div className='mr-1'>
                                                    <button type="button" onClick={()=>handleMessageColorChange('#ffa500')} className='w-5 h-5 border border-[#70685a] bg-[#ffa500]'></button>
                                                    <button type="button" onClick={()=>handleMessageColorChange('#6a5acd')} className='w-5 h-5 border border-[#70685a] bg-[#6a5acd]'></button>
                                                </div>
                                                <div className='mr-1'>
                                                    <button type="button" onClick={()=>handleMessageColorChange('#3c3c3c')} className='w-5 h-5 border border-[#70685a] bg-[#3c3c3c]'></button>
                                                    <button type="button" onClick={()=>handleMessageColorChange('#616161')} className='w-5 h-5 border border-[#70685a] bg-[#616161]'></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-left" style={{ width: '100%',color:textMessageColor, overflow: 'scroll' }}>
                                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                                テキストテキストテキストテキストテキストテキスト
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div style={{ width: '20%' }}>
                                    {/* btn */}
                                    <div className='mt-5 flex justify-center'>
                                        < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#9bd194] hover:bg-blue-700 focus:outline-none">
                                            完了
                                        </button>
                                    </div>
                                    {/* btn */}
                                    <div className='mt-5 flex justify-center'>
                                        < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                            返信
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* received message */}
                        <div className='w-full'>
                            {/* first */}
                                <div className='new-post-receive w-full flex'>
                                    <div className='new-post-receive-message flex' style={{ width: '75%' }}>
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
                                    <div className='new-post-receive-name flex justify-between' style={{ width: '25%' }}>
                                        <div className='flex mt-5'>
                                            <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                            <div>
                                                <label className="text-[black] pl-3 text-[15px] block text-center">宛先の名前</label>
                                            </div>
                                        </div>
                                        <div className='flex mt-5'>
                                            <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                            <div>
                                                <label className="text-[black] pl-3 text-[15px] block text-center">名前名前名前名前</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* second */}
                                <div className='new-post-receive w-full flex'>
                                    <div className='new-post-receive-message flex' style={{ width: '75%' }}>
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
                                    <div className='new-post-receive-name flex justify-between' style={{ width: '25%' }}>
                                        <div className='flex mt-5'>
                                            <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                            <div>
                                                <label className="text-[black] pl-3 text-[15px] block text-center">宛先の名前</label>
                                            </div>
                                        </div>
                                        <div className='flex mt-5'>
                                            <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                            <div>
                                                <label className="text-[black] pl-3 text-[15px] block text-center">名前名前名前名前</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* third */}
                                <div className='new-post-receive w-full flex'>
                                    <div className='new-post-receive-message flex' style={{ width: '75%' }}>
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
                                    <div className='new-post-receive-name flex justify-between' style={{ width: '25%' }}>
                                        <div className='flex mt-5'>
                                            <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                            <div>
                                                <label className="text-[black] pl-3 text-[15px] block text-center">宛先の名前</label>
                                            </div>
                                        </div>
                                        <div className='flex mt-5'>
                                            <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                            <div>
                                                <label className="text-[black] pl-3 text-[15px] block text-center">名前名前名前名前</label>
                                            </div>
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
                        <LabelComponent value={'新規投稿'} style={{ marginTop: '5px', width: '10%', marginRight: '15px' }} />
                        <div style={{ width: '90%', height: '50px' }} className='text-center'>
                            {/* firstline */}
                            <div className='flex' style={{ height: '40px' }}>
                                <div style={{ width: '30%', marginRight: '10%' }}>
                                    <select id="gender" name="gender" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                        <option value="1">宛先の名前</option>
                                        <option value="2">Afghanistan</option>
                                        <option value="3">Åland Islands</option>
                                        <option value="4">Albania</option>
                                    </select>
                                </div>
                            </div>
                            {/* secondline */}
                            <div className='new-post-operation-second flex !mt-2' style={{ height: '40px' }}>
                                <div className='w-full flex'>  
                                    <div className='w-full flex justify-start'>
                                        <InputComponent style={{ height: '40px',color:textColor }} className='w-full' name='file_name'/>
                                    </div>
                                    <div >
                                        < button type="button" className="w-max ml-10 px-5 py-1 font-semiblod rounded-lg justify-center text-[#70685a] text-[16px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                            ファイル
                                        </button>
                                    </div>
                                </div>
                                <div className='new-post-operation-second-color mt-0.5 flex justify-end ml-10 w-max'>
                                    <div className='flex flex-col justify-center'>
                                        <div className='flex gap-2.5'>
                                             <button type="button" onClick={()=>handleColorChange('#ff0000')} className='w-6 h-6 border border-[#70685a] bg-[#ff0000]'></button>
                                            <button type="button" onClick={()=>handleColorChange('#0000ff')} className='w-6 h-6 border border-[#70685a] bg-[#0000ff]'></button>
                                            <button type="button" onClick={()=>handleColorChange('#ee82ee')} className='w-6 h-6 border border-[#70685a] bg-[#ee82ee]'></button>
                                            <button type="button" onClick={()=>handleColorChange('#3cb371')} className='w-6 h-6 border border-[#70685a] bg-[#3cb371]'></button>
                                            <button type="button" onClick={()=>handleColorChange('#ffa500')} className='w-6 h-6 border border-[#70685a] bg-[#ffa500]'></button>
                                            <button type="button" onClick={()=>handleColorChange('#6a5acd')} className='w-6 h-6 border border-[#70685a] bg-[#6a5acd]'></button>
                                            <button type="button" onClick={()=>handleColorChange('#3c3c3c')} className='w-6 h-6 border border-[#70685a] bg-[#3c3c3c]'></button>
                                            <button type="button" onClick={()=>handleColorChange('#616161')} className='w-6 h-6 border border-[#70685a] bg-[#616161]'></button>
                                            <button type="button" onClick={()=>handleColorChange('#15bbc6')} className='w-6 h-6 border border-[#70685a] bg-[#15bbc6]'></button>
                                            <button type="button" onClick={()=>handleColorChange('#e0bbc6')} className='w-6 h-6 border border-[#70685a] bg-[#e0bbc6]'></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* thirdline */}
                            <div className='flex mt-2' style={{ height: '40px' }}>
                                <div style={{ width: '85%' }}>
                                    <InputComponent style={{ height: '40px',color:textColor}} className="w-full" name='post_content'/>
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

