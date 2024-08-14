import React from 'react'
import InputComponent from '../../Components/Common/InputComponent';
import LabelComponent from '../../Components/Common/LabelComponent';

export default function WithdrawVariousPurchase() {
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
                                                <label className="text-[#70685a] font-bold text-[10px] block text-center">Status Display</label>
                                            </div>
                                        </div>
                                        <div className='text-[15px] text-[black] ml-3'>
                                            Reading withdrawal request form bank ATMS
                                        </div>
                                    </div>
                                    <div className='flex mt-5'>
                                        <div>
                                            <div className='w-30'>
                                                <label className="text-[black] font-bold text-[10px] block text-center">2024/12/30 23:25</label>
                                            </div>
                                            <div className='border border-[#70685a] w-30'>
                                                <label className="text-[#70685a] font-bold text-[10px] block text-center">Status Display</label>
                                            </div>
                                        </div>
                                        <div className='text-[15px] text-[black] ml-3'>
                                            Reading withdrawal request form bank ATMS
                                        </div>
                                    </div>
                                    <div className='flex mt-5'>
                                        <div>
                                            <div className='w-30'>
                                                <label className="text-[black] font-bold text-[10px] block text-center">2024/12/30 23:25</label>
                                            </div>
                                            <div className='border border-[#70685a] w-30'>
                                                <label className="text-[#70685a] font-bold text-[10px] block text-center">Status Display</label>
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
                                    <div className='flex mt-5'>
                                        <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                        <div>
                                            <label className="text-[black] pl-3 text-[15px] block text-center">destination name</label>
                                        </div>
                                    </div>
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
                                    <label className="text-[black] pl-3 text-[20px] block text-center">destination name destination name destination name destination name</label>
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

                            {/* reply */}
                            <div className='flex justify-between mt-20 ml-10'>
                                <div className='flex'>
                                    <div>
                                        <div className='w-30'>
                                            <label className="text-[black] font-bold text-[10px] block text-center">2024/12/30 23:25</label>
                                        </div>

                                        <div>
                                            < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                                edit
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label className="text-[black]  text-[15px] block text-center">[reply]</label>
                                        </div>
                                        <div>
                                            <label className="text-[black] text-[15px] block text-center">I withdraw money form the bank and deposited 999,999 yen in the safe </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
                                    <div>
                                        <label className="text-[black] pl-3 text-[15px] block text-center">destination name</label>
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
                        <div style={{ width: '20%' }} className='ml-10'>
                            {/* asd full-circle*/}
                            <div>
                                <div className='flex mt-5'>
                                    <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                    <div>
                                        <label className="text-[black] pl-3 text-[15px] block text-center">destination name</label>
                                    </div>
                                </div>
                                <div className='flex mt-5'>
                                    <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                    <div>
                                        <label className="text-[black] pl-3 text-[15px] block text-center">destination name</label>
                                    </div>
                                </div>
                                <div className='flex mt-5'>
                                    <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                    <div>
                                        <label className="text-[black] pl-3 text-[15px] block text-center">destination name</label>
                                    </div>
                                </div>
                            </div>
                            {/* rect btn */}
                            <div className='mt-10 ml-10'>
                                < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#9bd194] hover:bg-blue-700 focus:outline-none">
                                    edit
                                </button>
                            </div>
                            {/* rect btn */}
                            <div className='mt-20 ml-10'>
                                < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                    edit
                                </button>
                            </div>
                            <div className='flex mt-5'>
                                <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                                <div>
                                    <label className="text-[black] pl-3 text-[15px] block text-center">destination name</label>
                                </div>
                            </div>
                            {/* rect btn */}
                            <div className='mt-5 ml-10'>
                                < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#9bd194] hover:bg-blue-700 focus:outline-none">
                                    edit
                                </button>
                            </div>
                            {/* rect btn */}
                            <div className='mt-5 ml-10'>
                                < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                    edit
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center !mt-0'>
                        <div className='h-[50px] bg-[#ebe6e0] mr-20' style={{ width: '50%', height: '130px' }}></div>
                    </div>
                    <div>
                        <hr className="my-1 border-[#70685a]" />
                    </div>
                    {/* operation */}
                    <div className='flex'>
                        <div style={{ width: '10%',height:'50px' }} className='text-center mt-1 text-[15px]'>New post</div>
                        <div style={{ width: '90%',height:'50px' }} className='text-center'>
                            {/* firstline */}
                            <div className='flex'>
                                <div style={{ width: '15%' }}>
                                    <InputComponent style={{ width: '100%',height:'30px' }}/>
                                </div>
                                <div style={{ width: '5%' }} className='flex'>
                                    <LabelComponent value={'ABC'} style={{marginTop:'5px'}}/>
                                </div>
                                <div style={{ width: '45%' }} className='flex ml-10'>
                                    <InputComponent style={{width: '45%',height:'30px'}}/>
                                </div>
                                <div style={{ width: '30%' }}>
                                <LabelComponent value={'ABC'} style={{marginTop:'5px',marginRight:'15px'}}/>
                                <InputComponent style={{ width: '30%' ,height:'30px'}}/>
                                <LabelComponent value={'ABC'} style={{marginTop:'5px',marginLeft:'15px'}}/>
                                </div>

                            </div>
                            {/* secondline */}
                            <div className='flex !mt-2'>
                                <div style={{ width: '60%' }}>
                                    <InputComponent style={{height:'30px'}}/>
                                </div>
                                <div style={{ width: '10%' }}>
                                < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                    edit
                                </button>
                                </div>
                                <div  style={{ width: '40%' }} className='mt-0.5 flex gap-2.5'>
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
                            {/* thirdline */}
                            <div className='flex mt-2'>
                                <div style={{ width: '80%' }}>
                                    <InputComponent style={{height:'30px'}}/>
                                </div>
                                <div className='pl-5'>
                                    < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                        edit
                                    </button>
                                </div>
                            </div>
                            operation
                        </div>


                    </div>







                    {/* asd full-circle
                    <div>
                        <div className='flex mt-5'>
                            <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                            <div>
                                <label className="text-[black] pl-3 text-[15px] block text-center">destination name</label>
                            </div>
                        </div>
                        <div className='flex mt-5'>
                            <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                            <div>
                                <label className="text-[black] pl-3 text-[15px] block text-center">destination name</label>
                            </div>
                        </div>
                        <div className='flex mt-5'>
                            <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
                            <div>
                                <label className="text-[black] pl-3 text-[15px] block text-center">destination name</label>
                            </div>
                        </div>
                    </div>
                     rect btn 
                    <div>
                        < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                            edit
                        </button>
                    </div> */}


                </div>
            </div>
        </>
    )
}

