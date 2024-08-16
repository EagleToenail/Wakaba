import React from 'react'
// import InputComponent from '../../Components/Common/InputComponent';
import LabelComponent from '../../Components/Common/LabelComponent';

export default function EndOfWorkReportToOwner() {
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
                                        </div>
                                        <div className='text-[15px] text-[black] ml-3'>
                                            Reading withdrawal request form bank ATMS
                                        </div>
                                    </div>

                                </div>
                                {/* destination name border-circle */}
                                <div>
                                    <div className='flex mt-5'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">destination name</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mt-5'>
                                {/* rect btn */}
                                <div>
                                    < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                        edit
                                    </button>
                                </div>

                                <div>
                                    <label className="text-[black] pl-3 text-[15px] block text-left" style={{ width: '70%' }}>jaksfhiwhfwefhowefohi</label>
                                </div>
                                <div className='ml-40'>
                                    <label className="text-[black] pl-3 text-[15px] block text-left">OOOOOOOOOOOOOOOOOOO</label>
                                </div>
                            </div>

                        </div>
                        <div style={{ width: '20%' }} className='ml-10'>
                            {/* asd full-circle*/}
                            <div>
                                <div className='flex mt-5'>
                                    <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                    <div>
                                        <label className="text-[black] pl-3 text-[15px] block text-center">destination name</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Mainpart */}
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
                                    <LabelComponent value={"asdf"}/>
                                </div>
                                <div className='text-left'>
                                    <LabelComponent value={"asdfsdfs"}/>
                                </div>
                                <div className='text-left'>
                                    <LabelComponent value={"asdfsdfs"}/>
                                </div>
                                <div className='text-left'>
                                    <LabelComponent value={"asdfsdfs"}/>
                                </div>
                                <div className='text-left'>
                                    <LabelComponent value={"asdfsdfs"}/>
                                </div>
                            </div>
                            <div className=''>
                                <div className='text-right ml-10 font-bold'>
                                    <LabelComponent value={"assdfsafdf"}/>
                                </div>
                                <div className='text-right ml-10 font-bold'>
                                    <LabelComponent value={"asddfsfasfdfsdfs"}/>
                                </div>
                                <div className='text-right ml-10 font-bold'>
                                    <LabelComponent value={"asddfsfasfdfsdfs"}/>
                                </div>
                                <div className='text-right ml-10 font-bold'>
                                    <LabelComponent value={"asddfsfasfdfsdfs"}/>
                                </div>
                                <div className='text-right ml-10 font-bold'>
                                    <LabelComponent value={"asddfsfasfdfsdfs"}/>
                                </div>
                            </div>
                        </div>
                        {/* second */}
                        <div className='flex ml-10 mt-1'>
                            <div className=''>
                                <div className='text-left'>
                                    <LabelComponent value={"12/01 (F)"}/>
                                </div>
                                <div className='text-left'>
                                    <LabelComponent value={"12/02 (F)"}/>
                                </div>
                                <div className='text-left'>
                                    <LabelComponent value={"12/03 (F)"}/>
                                </div>
                                <div className='text-left'>
                                    <LabelComponent value={"12/04 (F)"}/>
                                </div>
                                <div className='text-left'>
                                    <LabelComponent value={"12/05 (F)"}/>
                                </div>
                                <div className='text-left'>
                                    <LabelComponent value={"12/05 (F)"}/>
                                </div>
                            </div>
                            <div className=''>
                                <div className='text-right ml-10 font-bold'>
                                    <LabelComponent value={"Y99,999,999"}/>
                                </div>
                                <div className='text-right ml-10 font-bold'>
                                    <LabelComponent value={"Y99,999,999"}/>
                                </div>
                                <div className='text-right ml-10 font-bold'>
                                    <LabelComponent value={"Y99,999,999"}/>
                                </div>
                                <div className='text-right ml-10 font-bold'>
                                    <LabelComponent value={"Y99,999,999"}/>
                                </div>
                                <div className='text-right ml-10 font-bold'>
                                    <LabelComponent value={"Y99,999,999"}/>
                                </div>
                                <div className='text-right ml-10 font-bold'>
                                    <LabelComponent value={"Y99,999,999"}/>
                                </div>
                            </div>
                        </div>
                        {/* third */}
                        <div className='flex ml-10 mt-1'>
                            <div className=''>
                                <div className='text-left'>
                                    <LabelComponent value={"12/01 (F)"}/>
                                </div>
                                <div className='text-left'>
                                    <LabelComponent value={"12/02 (F)"}/>
                                </div>
                                <div className='text-left'>
                                    <LabelComponent value={"12/03 (F)"}/>
                                </div>
                                <div className='text-left'>
                                    <LabelComponent value={"12/04 (F)"}/>
                                </div>
                                <div className='text-left'>
                                    <LabelComponent value={"12/05 (F)"}/>
                                </div>
                            </div>
                            <div className=''>
                                <div className='text-right ml-10 font-bold'>
                                    <LabelComponent value={"Y99,999,999"}/>
                                </div>
                                <div className='text-right ml-10 font-bold'>
                                    <LabelComponent value={"Y99,999,999"}/>
                                </div>
                                <div className='text-right ml-10 font-bold'>
                                    <LabelComponent value={"Y99,999,999"}/>
                                </div>
                                <div className='text-right ml-10 font-bold'>
                                    <LabelComponent value={"Y99,999,999"}/>
                                </div>
                                <div className='text-right ml-10 font-bold'>
                                    <LabelComponent value={"Y99,999,999"}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <div className='flex w-1/2'>

                            <div className='text-right ml-10 font-bold'>
                                <LabelComponent value={"ABC"}/>
                            </div>
                            <div className='text-right ml-10 font-bold'>
                                <LabelComponent value={"Y99,999,999"}/>
                            </div>
                        </div>
                        <div className='mr-20'>
                        < button type="button" className="w-20 mr-5 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                            asd
                        </button>
                    </div>
                    </div>


                    <div className='mt-5'>
                        < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                            edit
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

