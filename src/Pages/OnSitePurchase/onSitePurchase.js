import React, { useEffect } from 'react'

export default function OnSitePurchase() {

    useEffect(() => {
        // Set overflow to hidden when the component mounts
        document.body.style.overflow = 'hidden';

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <>
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full pr-10 pl-10 " style={{ maxWidth: '90em' }}>
                    <div className='w-full'>
                        {/* received message */}
                        <div className='w-full'>
                            {/* first */}
                            <div className='w-full flex'>
                                <div className='flex justify-between' style={{ width: '80%' }}>
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
                                        OOOOの出張買取の件
                                        </div>
                                    </div>
                                    <div className='flex mt-5'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">宛先の名前</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end' style={{ width: '20%' }}>
                                    <div className='flex mt-5'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">名前名前名前名前</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* second */}
                            <div className='w-full flex'>
                                <div className='flex justify-between' style={{ width: '80%' }}>
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
                                        OOOOの出張買取の件
                                        </div>
                                    </div>
                                    <div className='flex mt-5'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">宛先の名前</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end' style={{ width: '20%' }}>
                                    <div className='flex mt-5'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">名前名前名前名前</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* third */}
                            <div className='w-full flex'>
                                <div className='flex justify-between' style={{ width: '80%' }}>
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
                                        OOOOOOOOの出張買取の件
                                        </div>
                                    </div>
                                    <div className='flex mt-5'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">宛先の名前</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end' style={{ width: '20%' }}>
                                    <div className='flex mt-5'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">名前名前名前名前</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* fouth */}
                            <div className='w-full flex'>
                                <div className='flex justify-between' style={{ width: '80%' }}>
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
                                        OOOOOOOOOOOOの出張買取の件
                                        </div>
                                    </div>
                                    <div className='flex mt-5'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">宛先の名前</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end' style={{ width: '20%' }}>
                                    <div className='flex mt-5'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">名前名前名前名前</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                            住所/TEL/名前/物/行く日付をここに記載。< br />
                                            預かり証の写メは、現地からアップする。< br />
                                            これは、スマホで表示、投稿されるように。

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
                            <div className='w-full flex'>
                                <div className='flex justify-between' style={{ width: '80%' }}>
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
                                        <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">宛先の名前</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end' style={{ width: '20%' }}>
                                    <div className='flex mt-5'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">名前名前名前名前</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* second */}
                            <div className='w-full flex'>
                                <div className='flex justify-between' style={{ width: '80%' }}>
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
                                        <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">宛先の名前</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-end' style={{ width: '20%' }}>
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
                    <div className='mt-5'>
                        < button type="button" className="w-max px-4 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                            新規投稿
                        </button>
                    </div>

                    {/* <div className='flex justify-center !mt-0'>
                        <div className='h-[50px] bg-[#ebe6e0] mr-20' style={{ width: '50%', height: '130px' }}></div>
                    </div> */}
                    <div className='mt-5'>
                        <hr className="my-1 border-[#70685a]" />
                    </div>
                </div>
            </div>
        </>
    )
}

