import React, { useEffect } from 'react'
// import InputComponent from '../../Components/Common/InputComponent';
import LabelComponent from '../../Components/Common/LabelComponent';

export default function EndOfWorkReportToOwner() {

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
                    {/* Mainpart */}
                    <div>
                        <div className='flex'>
                            <div className='flex mt-5'>
                                {/* rect btn */}
                                <div>
                                    < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                        編集
                                    </button>
                                </div>

                                <div>
                                    <label className="text-[black] pl-3 text-[15px] block text-left" style={{ width: '100%' }}>お疲れ様です。12月01日の着地報告になります。</label>
                                </div>
                                <div className='ml-40'>
                                    <label className="text-[black] pl-3 text-[15px] block text-left">OOOOOOOOOOOOOOOOOOO店</label>
                                </div>
                            </div>
                        </div>
                        <div className='flex'>
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
                            {/* first */}
                            <div className='flex ml-5 mt-1'>
                                <div className=''>
                                    <div className='text-left'>
                                        <LabelComponent value={"入電数"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"来店数"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"成約数"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"預かり数"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"単日買取金額"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"単日売上額"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"単日粗利予想"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"当月来店数"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"当月成約数"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"当月買取金額"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"当月売上額"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"当月粗利予想"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"金庫追加金"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"金庫預金"} />
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                </div>
                            </div>
                            {/* second */}
                            <div className='flex ml-10 mt-1'>
                                <div className=''>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/01 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/02 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/03 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/04 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/05 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/06 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/07 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/08 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/09 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/10 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/11 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/12 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/13 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/14 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/15 (曜)"} />
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"¥99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"99,999,999"} />
                                    </div>
                                </div>
                            </div>
                            {/* third */}
                            <div className='flex ml-10 mt-1'>
                                <div className=''>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/15 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/16 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/17 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/18 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/19 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/20 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/21 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/22 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/23 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/24 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/25 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/26 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/27 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/28 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/29 (曜)"} />
                                    </div>
                                    <div className='text-left'>
                                        <LabelComponent value={"12/30 (曜)"} />
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"Y99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"Y99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"Y99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"Y99,999,999"} />
                                    </div>
                                    <div className='text-right ml-10 font-bold'>
                                        <LabelComponent value={"Y99,999,999"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <div className='flex w-1/2'>

                                <div className='text-right text-[20px] ml-10 font-bold'>
                                    <LabelComponent value={"当月粗利実績"} />
                                </div>
                                <div className='text-right text-[20px] ml-10 font-bold'>
                                    <LabelComponent value={"Y99,999,999"} />
                                </div>
                            </div>
                            <div className='mr-20'>
                                < button type="button" className="w-20 mr-5 px-3 py-1 font-semiblod rounded-lg justify-center text-[#70685a] text-[16px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                    返信
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        < button type="button" className="w-max px-5 py-1 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                            新規投稿
                        </button>
                    </div>

                    {/* <div className='flex justify-center !mt-0'>
                        <div className='h-[50px] bg-[#ebe6e0] mr-20' style={{ width: '50%', height: '130px' }}></div>
                    </div> */}
                    <div className='mt-2'>
                        <hr className="my-1 border-[#70685a]" />
                    </div>

                </div>
            </div>
        </>
    )
}

