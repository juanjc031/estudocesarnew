import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center py-2 pt-8 cursor-default">
      <hr className="border border-gray-400 h-full mmd:w-[90%] w-[80%] flex justify-center items-end"></hr>
      <div className="w-full flex mmd:flex-col justify-center gap-10 items-center mt-4">
        <div className="w-full flex flex-col justify-center items-center ">
            <p className="text-xl font-semibold">Contato</p>
          <p className="text-xl text-center">
            Grupo de pesquisa: <span className="font-medium">CESAR</span> <br></br> (Carga Econômica e em Saúde
            Atribuível a Fatores de Risco)
          </p>
          <a href="https://dgp.cnpq.br/dgp/espelhogrupo/4369225012509732">
          <a
            target="_blank"
            className="text-blue-600 visited:text-purple-600 underline"
            rel="noopener noreferrer"
          >
            dgp.cnpq.br/dgp/espelhogrupo/4369225012509732
          </a>
          </a>
          <p className="">Líder: Profa. Dra. Ísis Eloah Machado</p>
          <p className="">E-mail: isis.machado@ufop.edu.br</p>
        </div>
        <div className="border border-gray-400 h-44 mmd:h-0 mmd:w-[70%] flex justify-center"></div>
        <div className=" w-full flex flex-col justify-center items-center text-start mmd:mb-6">
          <p className="text-xl">Laboratório de Epidemiologia (LEPI)</p>
          <a href="https://lepi.medicina.ufop.br/" >
          <a rel="noopener noreferrer" className="text-blue-600 visited:text-purple-600 underline" target="_blank">
            https://lepi.medicina.ufop.br/
          </a>
          </a>
           <p className="text-center">Escola de Medicina (sala 203) <br></br> Universidade Federal de Ouro Preto</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;