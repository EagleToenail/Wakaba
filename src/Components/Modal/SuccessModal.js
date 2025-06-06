import React from 'react';

const ConfirmationModal = ({ title, onClose }) => {
  return (
    <div className="fixed inset-0 px-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 relative mx-auto text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 fill-green-500 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 60 60"
        >
          <circle cx="30" cy="30" r="29" />
          <path
            fill="#fff"
            d="m24.262 42.07-6.8-6.642a1.534 1.534 0 0 1 0-2.2l2.255-2.2a1.621 1.621 0 0 1 2.256 0l4.048 3.957 11.353-17.26a1.617 1.617 0 0 1 2.2-.468l2.684 1.686a1.537 1.537 0 0 1 .479 2.154L29.294 41.541a3.3 3.3 0 0 1-5.032.529z"
          />
        </svg>

        <div className="mt-12">
          <h3 className="text-gray-800 text-2xl font-bold flex-1">成功!</h3>
          <p className="text-sm text-gray-600 mt-3">
          あなたのリクエストは確認されました
          </p>

          <button
            type="button"
            className="px-6 py-2.5 mt-8 w-full rounded-md text-white text-sm font-semibold tracking-wide border-none outline-none bg-green-500 hover:bg-green-600"
            onClick={onClose}
          >
             わかった
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
