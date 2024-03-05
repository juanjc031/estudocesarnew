import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TeamCard from "./components/TeamCard";

import figura7 from "./imgs/figura7.jpg";
import isis from "./imgs/Isis Eloah Machado.jpeg";
import adriana from "./imgs/Adriana Lúcia Meiresles.jpg";
import deborah from "./imgs/Deborah Carvalho Malta.jpg";
import eliseu from "./imgs/Eliseu Verly Junior.png";
import jorge from "./imgs/jorge Gustavo Velasquez.png";
import leticia from "./imgs/Letícia Cardoso.png";
import luisa from "./imgs/Luisa-Flor-2.png";
import marianaF from "./imgs/Mariana Felisbino.png";
import mariana from "./imgs/Foto Mariana Menezes1.jpeg";
import renato from "./imgs/Renato Azeredo Teixeira.jpg";
import aline from "./imgs/Aline Fogal Vegi.png";
import magda from "./imgs/Magda do Carmo Parajára (1).jpeg";
import larissa from "./imgs/Larissa F Fonseca Guedes 1.png";
import joice from "./imgs/Foto 02 Joice.jpeg";
import luane from "./imgs/Luane Pinheiro Rocha 2.jpeg";
import carla from "./imgs/Carla Faustino Rocha.png";

import imagem3 from "./imgs/figura3.jpg";

const equipe = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="relative flex justify-center items-center h-full w-full mmd:pt-32 pt-60 mmd:mb-36 mb-64">
        <div className="absolute flex flex-col justify-center items-start left-24 bg-white p-4 mlg:w-[40%] mmd:!w-[80%] mmd:left-12 mmd:mt-32 w-[50%] z-50 rounded-lg">
          <p className="pb-4 text-blue text-5xl font-serif ">Nossa Equipe</p>
          <hr className="border-2 border-[#00c9b0] w-12"></hr>
        </div>
        <div className="absolute right-0 mmd:!w-full mlg:w-[70%] w-[55%]">
          <img src={figura7} alt="imagem3" className="rounded-lg" />
        </div>
      </div>
      {/* <div className="p-4 h-full flex mmd:flex-col justify-center mx-10 mmd:mx-2 shadow-xl cursor-default bg-[#f7f7f7] shadow-gray-800 mb-10 rounded-md"> */}
      <div className="md:w-full h-full my-16 flex flex-col flex-wrap items-center justify-center gap-6 bg-white">
        <div className="flex flex-col items-center w-full">
          <p className="pb-2 text-blue text-3xl font-semibold font-serif ">
            Equipe 1: Pesquisadores
          </p>
          <hr className="border-2 border-[#00c9b0] w-12"></hr>
        </div>
        <div className="flex mmd:flex-wrap mmd:justify-center gap-4">
          <TeamCard
            img={isis}
            name={"Ísis Eloah Machado"}
            alt={"Isis"}
            descc={
              "Professora e pesquisadora da Escola de Medicina da Universidade Federal de Ouro Preto (UFOP)"
            }
            lattes={"http://lattes.cnpq.br/0150005556742996"}
          />
          <TeamCard
            img={mariana}
            name={"Mariana Carvalho de Menezes"}
            alt={"Mariana"}
            descc={
              "Professora e pesquisadora da Escola de Nutrição da Universidade Federal de Ouro Preto (UFOP)"
            }
            lattes={"http://lattes.cnpq.br/8894598416587453"}
          />
          <TeamCard
            img={adriana}
            name={"Adriana Lúcia Meireles"}
            alt={"Adriana"}
            descc={
              "Professora e pesquisadora da Escola de Nutrição da Universidade Federal de Ouro Preto (UFOP)"
            }
            lattes={"http://lattes.cnpq.br/5415462090135377"}
          />
        </div>
        <div className="flex mmd:flex-wrap mmd:justify-center gap-4">
          <TeamCard
            img={marianaF}
            name={"Mariana Santos Felisbino Mendes"}
            alt={"Mariana"}
            descc={
              "Professora e Pesquisadora da Escola de Enfermagem da Universidade Federal de Minas Gerais (UFMG)"
            }
            lattes={"http://lattes.cnpq.br/5074825535350952"}
          />
          <TeamCard
            img={deborah}
            name={"Deborah Carvalho Malta"}
            alt={"Deborah"}
            descc={
              "Professora e Pesquisadora da Escola de Enfermagem da Universidade Federal de Minas Gerais (UFMG)"
            }
            lattes={"http://lattes.cnpq.br/3261263738543724"}
          />
          <TeamCard
            img={jorge}
            name={"Jorge Gustavo Velásques Meléndez"}
            alt={"Jorge"}
            descc={
              "Professor e Pesquisador da Escola de Enfermagem da Universidade Federal de Minas Gerais (UFMG)"
            }
            lattes={"http://lattes.cnpq.br/8406550065682773"}
          />
        </div>
        <div className="flex mmd:flex-wrap mmd:justify-center gap-4">
          <TeamCard
            img={eliseu}
            name={"Eliseu Verly Junior"}
            alt={"Eliseu"}
            descc={
              "Professor e Pesquisador do Instituto de Medicina Social da Universidade Estadual do Rio de Janeiro (UERJ)"
            }
            lattes={"http://lattes.cnpq.br/9014880928943124"}
          />
          <TeamCard
            img={leticia}
            name={"Letícia de Oliveira Cardoso"}
            alt={"Letícia"}
            descc={
              "Pesquisadora da Escola Nacional de Saúde Pública da Fundação Oswaldo Cruz (Fiocruz - Manguinhos)"
            }
            lattes={"http://lattes.cnpq.br/7425850404169766"}
          />
          <TeamCard
            img={luisa}
            name={"Luísa Sorio Flor"}
            alt={"Luísa"}
            descc={
              "Pesquisadora do Institute for Health Metrics and Evaluation (IHME) na Universidade de Washington"
            }
            lattes={"http://lattes.cnpq.br/8883026435305801"}
          />
        </div>
        <div className="flex flex-col items-center w-full">
          <p className="pb-2 text-blue text-3xl font-semibold font-serif mt-10">
            Equipe 2: Pesquisadores Pósdoc
          </p>
          <hr className="border-2 border-[#00c9b0] w-12"></hr>
        </div>
        <div className="flex mmd:flex-wrap mmd:justify-center gap-4">
          <TeamCard
            img={aline}
            name={"Aline Siqueira Fogal Vegi"}
            alt={"Aline"}
            descc={
              "Posdoc do Programa de Pós-graduação em Saúde e Nutrição da Universidade Federal de Ouro Preto (UFOP)"
            }
            lattes={"http://lattes.cnpq.br/3807473363338251"}
          />
          <TeamCard
            img={renato}
            name={"Renato Azeredo Teixeira"}
            alt={"Renato"}
            descc={
              "Posdoc do Programa de Pós-graduação em Saúde Pública da Universidade Federal de Minas Gerais (UFMG)"
            }
            lattes={"http://lattes.cnpq.br/2666515683002219"}
          />
        </div>
        <div className="flex flex-col items-center w-full">
          <p className="pb-2 text-blue text-3xl font-semibold font-serif mt-10">
            Equipe 3: Estudantes de Pós-graduação
          </p>
          <hr className="border-2 border-[#00c9b0] w-12"></hr>
        </div>
        <div className="flex mmd:flex-wrap mmd:justify-center gap-4">
          <TeamCard
            img={magda}
            name={"Magda do Carmo Parajára"}
            alt={"Magda"}
            descc={
              "Doutoranda em Saúde e Nutrição na Universidade Federal de Ouro Preto"
            }
            lattes={"http://lattes.cnpq.br/4042133418405830"}
          />
          <TeamCard
            img={larissa}
            name={"Larissa Fernanda Fonseca Guedes"}
            alt={"Larissa"}
            descc={
              "Doutoranda em Saúde e Nutrição na Universidade Federal de Ouro Preto"
            }
            lattes={"http://lattes.cnpq.br/4992158369678870"}
          />
          <TeamCard
            img={joice}
            name={"Joice Silva Vieira Leal"}
            alt={"Luísa"}
            descc={
              "Mestranda em Saúde e Nutrição na Universidade Federal de Ouro Preto."
            }
            lattes={"http://lattes.cnpq.br/0140843661461134"}
          />
        </div>
        <div className="flex mmd:flex-wrap mmd:justify-center gap-4">
          <TeamCard
            img={luane}
            name={"Luane Pinheiro Rocha"}
            alt={"Luísa"}
            descc={
              "Mestranda em Enfermagem na linha de pesquisa de Saúde Coletiva na Universidade Federal de Minas Gerais."
            }
            lattes={"http://lattes.cnpq.br/7594791803691153"}
          />
          <TeamCard
            img={carla}
            name={"Carla Eduarda Faustino Rocha"}
            alt={"Luísa"}
            descc={
              "Mestranda em Saúde e Nutrição na Universidade Federal de Ouro Preto."
            }
            lattes={"http://lattes.cnpq.br/6357170308305576"}
          />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default equipe;
