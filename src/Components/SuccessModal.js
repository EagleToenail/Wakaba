// src/Components/SuccessModal.js
import React from 'react';

const SuccessModal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex border border-[#70685a] items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full border border-shdow">
                <h2 className="text-center text-2xl font-bold text-[#70685a]">新規会員登録</h2>
                <h2 className="text-center text-2xl font-bold text-[#70685a]">{message}</h2>
                <div className="mt-4 text-center">
                    <button
                        onClick={onClose}
                        className="text-white bg-[#e87a00] font-bold text-xl px-4 py-1 rounded-lg hover:bg-green-600"
                    >
                        OK
                    </button>
                </div>
            </div>
            <div
                className="fixed inset-0 bg-black opacity-0"
                onClick={onClose}
            ></div>
        </div>
    );
};

export default SuccessModal;
