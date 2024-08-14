import React from 'react';
import Titlebar from '../../Components/Common/Titlebar';


const Terms = () => {
    const title = 'タイトルタイトル';
    return (
        <>
            <Titlebar title={title} />
            <h2 className="text-[#70685a] text-center font-bold text-[15px] flex justify-end mt-3" style={{ paddingRight: '1%' }}>2023/12/01(金)&nbsp;&nbsp;21:51</h2>
            <div className="bg-[trasparent] font-[sans-serif] mt-10">
                <div className=" flex flex-col items-center justify-center py-6 px-4">
                    <div className="w-full pt-3" style={{ maxWidth: '50em' }}>
                        <div className="p-8 rounded-2xl">
                            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">規約</h2>
                            <form className="mt-8 space-y-6">
                                <div className='flex'>
                                    <div style={{ width: '100%', flexDirection: 'column', }} className='flex align-center'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-left mr-5 !mb-0">テキスト
                                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
                                        テキストテキストテキストテキストテキストテキスト
                                        テキストテキストテキストテキスト
                                        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト

                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Terms;