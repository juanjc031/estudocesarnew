import React from "react";
import { FaUpRightFromSquare } from "react-icons/fa6";

const CardComp = ({ img, alt, name, descc, lattes }) => {
  return (
    <div className="w-56 mmd:w-32 flex flex-col hover:scale-105 duration-200  justify-center items-center p-4 bg-[#f2f2f2] rounded-sm shadow-md shadow-gray-400">
      <img
        className="rounded-sm"
        width={200}
        height={300}
        src={img}
        alt={alt}
      />
      <hr className="border border-[#00c9b0] w-[40%] flex justify-center"></hr>
      <div className="flex h-full flex-col justify-center items-center">
        <p className="font-bold pt-1 text-center">{name} </p>
        <p className="font-normal text-center">{descc} </p>
      </div>
      <a href={lattes}>
        <a target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="flex justify-center cursor-pointer gap-1 items-center text-blue-700 border border-blue-700 rounded text-sm px-2 py-1 text-center uppercase tracking-wide font-medium"
          >
            Lattes
            <FaUpRightFromSquare className="cursor-pointer" />
          </button>
        </a>
      </a>
    </div>
  );
};

export default CardComp;
