import React from "react";

const CardImgComp = ({ src, title, text, hCard }) => {
  return (
    <div className={`flex !h-${hCard} gap-3 w-[30%] mmd:w-[80%] justify-center items-start flex-wrap shadow-lg shadow-gray-800 p-3 rounded-lg bg-[#f7f7f7]`}>
      <div className="flex  flex-col items-center gap-4 justify-center">
        <img alt="card" src={src} width={125} height={125}></img>
        <p className="text-lg font-semibold text-center">{title}</p>
        <p className="text-center">{text}</p>
      </div>
    </div>
  );
};

export default CardImgComp;
