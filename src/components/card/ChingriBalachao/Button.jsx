import React from "react";

const OrderButton = ({ title }) => {
  return (
    <a
      href="#"
      className=" w-[310px] text-[30px]  bg-[#00B22C] hover:bg-green-600 text-white font-semibold font-hind-siliguri p-2 rounded-lg border-2 border-white flex items-center justify-center"
    >
      <span className="mr-2">{title}</span>
      <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#00B22C"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#00B22C"
          className="w-6 h-6 z-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
          />
        </svg>
      </span>
    </a>
  );
};

export default OrderButton;
