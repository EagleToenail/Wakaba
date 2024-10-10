import React from 'react';

const ImageShowModal = ({ itemsImagePreview, onClose }) => {
    const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
  return (
    <div
        className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 relative">
            <div className="text-center">
                <div className='flex justify-center w-full'>
                    {itemsImagePreview == `${wakabaBaseUrl}/uploads/product/` ? "" : <img src={itemsImagePreview} alt="Image Preview" className='h-[100px] p-1 rounded-lg' />}
                </div>
            </div>

            <div className="flex justify-center w-full mt-5">
                <button type="button" onClick={onClose}
                    className="px-5 py-1 rounded-full w-1/2 font-bold text-white border-none outline-none bg-[#524c3b] hover:bg-[#524c3b] hover:text-white transition-all duration-300">閉じる</button>
            </div>
        </div>
    </div>
  );
};

export default ImageShowModal;