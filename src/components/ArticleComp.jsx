import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Swal from "sweetalert2";

const Sweet = (textSwal, autorSwal, hrefArtigo, artigo) => {
    const html = `
  <div class="flex flex-col justify-around p-2">
    <div class="w-full">
      <p class="text-center">
        ${textSwal}
        <br><br/>${autorSwal}
      </p>
    </div>
    <div class="border border-blue-500 my-4 flex justify-center"></div>
    <div class="w-full text-center">
      <p>Link do artigo:</p>
      <a
      href="${hrefArtigo}"
        target="_blank"
        class="text-blue-600 underline cursor-pointer"
        rel="noopener noreferrer"
      >
        ${artigo}
      </a>
    </div>
  </div>
`;

  Swal.fire({
    html: html,
    icon: "info",
    confirmButtonText: "Fechar",
    customClass: {
      popup: "customSwal",
    },
    confirmButtonColor: "#0E3C89",
  });  
};

const ArticleComp = ({ src, title, text, textSwal,autorSwal, hrefArtigo, artigo }) => {
  return (
    <div className=" mx-10 mmd:flex-row-reverse mmd:mx-2 mmd:w-full rounded-lg my-10 flex gap-4 items-start shadow-lg shadow-gray-500 w-[90%]">
      <div className="rounded-lg px-1 pt-1 !m-0 ">
        <img
          src={src}
          width={180}
          height={150}
          alt="imagem3"
          className="rounded-lg"
        />
      </div>
      <div className="flex-col flex justify-end h-full px-2 pb-2 pt-4 w-[70%]">
        <p className="font-semibold">{title}</p>
        <p>{text}</p>
        <p
          className="text-blue-800 flex cursor-pointer items-center mt-2"
          onClick={() => Sweet(textSwal, autorSwal, hrefArtigo, artigo, )}
        >
          Leia Mais <MdKeyboardDoubleArrowRight />
        </p>
      </div>
    </div>
  );
};

export default ArticleComp;
