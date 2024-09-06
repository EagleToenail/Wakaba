import React from 'react'
import InputComponent from '../../Components/Common/InputComponent';
import LabelComponent from '../../Components/Common/LabelComponent';

export default function PurchaseToRShop() {

    // useEffect(() => {
    //     // Set overflow to hidden when the component mounts
    //     document.body.style.overflow = 'hidden';

    //     // Cleanup function to reset overflow when component unmounts
    //     return () => {
    //         document.body.style.overflow = 'auto';
    //     };
    // }, []);

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
                                            リサイクルショップへの買い取ら依頼許可申請の件
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
                                            リサイクルショップへの買い取ら依頼許可申請の件
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
                                            <label className="text-[black] pl-3 text-[15px] block text-left" style={{ width: '100%', overflow: 'scroll' }}>
                                            下記を買い取ら依頼仁出します。ご許可をお願いします。
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div style={{ width: '20%' }}>
                                    {/* btn */}
                                    <div className='mt-5 flex justify-center'>
                                        < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#9bd194] hover:bg-blue-700 focus:outline-none">
                                            許可
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
                        {/* reply  */}
                        <div className='w-full mt-5'>
                            {/* first */}
                            <div className='new-post-receive-reply-name w-full flex'>
                                <div className='flex justify-between' style={{ width: '75%' }}>
                                    <div className='flex ml-20'>
                                        <div className='w-30 flex flex-col justify-center'>
                                            <label className="text-[black] font-bold text-[10px] block text-center">2024/12/30 23:25</label>
                                        </div>
                                        <div>
                                            <label className="text-[black]  text-[15px] block text-left pl-5">[返信]</label>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '25%' }} className='new-post-receive-name flex justify-between'>
                                    <div className='flex'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">宛先の名前</label>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 block text-center">名前名前名前名前</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex w-full '>
                                <div style={{ width: '80%' }}>
                                    <div className='flex  ml-20'>
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
                                            <label className="text-[black] pl-3 text-[15px] block text-left" style={{ width: '100%', overflow: 'scroll' }}>
                                            売却してきました。999999円でした。
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <div style={{ width: '20%' }}>
                                    {/* btn */}
                                    <div className='mt-5 flex justify-center'>
                                        < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#9bd194] hover:bg-blue-700 focus:outline-none">
                                            確認
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
                        </div>
                    </div>
                    <div>
                        <hr className="my-1 border-[#70685a]" />
                    </div>
                    {/* operation */}
                    <div className='flex'>
                        <LabelComponent value={'新規投稿'} style={{ marginTop: '5px', width: '10%', marginRight: '15px' }} />
                        <div style={{ width: '90%', height: '50px' }} className='text-center'>
                            {/* firstline */}
                            <div className='flex' style={{ height: '40px' }}>
                                <div style={{ width: '40%', marginRight: '10%' }}>
                                    <select id="gender" name="gender" className="w-full text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                        <option value="1">宛先の名前</option>
                                        <option value="2">Afghanistan</option>
                                        <option value="3">Åland Islands</option>
                                        <option value="4">Albania</option>
                                    </select>
                                </div>

                                <div style={{ width: '70%', height: '40px' }} className='flex justify-end'>
                                    <LabelComponent value={'総額'} style={{ marginTop: '5px', marginRight: '5px' }} />
                                    <select id="gender" name="gender" className="w-40 text-[#70685a] font-bold border border-[#70685a] px-4 py-2 outline-[#70685a]">
                                        <option value="1">9,999,999</option>
                                        <option value="2">10</option>
                                        <option value="3">5</option>
                                        <option value="4">0</option>
                                    </select>
                                    <LabelComponent value={'円'} style={{ marginTop: '5px', marginLeft: '15px' }} />
                                </div>
                            </div>
                            {/* secondline */}
                            <div className='new-post-operation-second flex !mt-2' style={{ height: '40px' }}>
                                <div className='w-full flex'>  
                                    <div className='w-full flex justify-start'>
                                        <InputComponent style={{ height: '40px' }} className='w-full' />
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
                            <div className='flex mt-2' style={{ height: '40px' }}>
                                <div style={{ width: '85%' }}>
                                    <InputComponent style={{ height: '40px' }} className="w-full" />
                                </div>
                                <div className='ml-10'>
                                    < button type="button" className="w-max px-10 py-1 font-semiblod rounded-lg justify-center text-[#70685a] text-[16px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
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

