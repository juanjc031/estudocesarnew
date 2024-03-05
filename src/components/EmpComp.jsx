import React from "react";

const EmpComp = ({ img, text, link, w, h }) => {
  return (
      <a
      href={link}
        target="_blank"
        className="justify-center group w-full cursor-pointer flex flex-col "
        rel="noopener noreferrer"
      >
        <div className="flex justify-center cursor-pointer">
          <img
            width={w}
            height={h}
            src={img}
            alt="Parceiro"
            className="cursor-pointer"
          ></img>
        </div>
        <p
          className={`w-full text-lg font-semibold text-center group-hover:block hidden  justify-center py-2 cursor-pointer`}
        >
          {text}
        </p>
        <hr className="group-hover:block hidden border border-[#00c9b0] h-full ml-[30%] w-[40%] justify-center"></hr>
      </a>
  );
};

export default EmpComp;
