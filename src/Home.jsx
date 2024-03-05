import React from "react";

import EmpComp from "./components/EmpComp";
import logoUfop from "./imgs/logo-ufop.png";
import logoGbd from "./imgs/GBDBrasil_logo_v1.png";
import logoCnpq from "./imgs/CNPq_v2017_rgb.jpg";
import logoDecit from "./imgs/Ministério da Saúde.png";
import logoFapemig from "./imgs/FAPEMIG_nova_logo_eps.jpg";

import Footer from "./components/Footer";
import AppRoutes from "./Routes";
import imagem1 from "./imgs/figura1.jpg";
import Navbar from "./components/Navbar";
import imagem2 from "./imgs/figura2.jpg";
import { FaUpRightFromSquare } from "react-icons/fa6";
import CardComp from "./components/CardComp";
import isis from "./imgs/Isis Eloah Machado.jpeg";
import adriana from "./imgs/Adriana Lúcia Meiresles.jpg";
import deborah from "./imgs/Deborah Carvalho Malta.jpg";
import eliseu from "./imgs/Eliseu Verly Junior.png";
import jorge from "./imgs/jorge Gustavo Velasquez.png";
import leticia from "./imgs/Letícia Cardoso.png";
import luisa from "./imgs/Luisa-Flor-2.png";
import marianaF from "./imgs/Mariana Felisbino.png";
import mariana from "./imgs/Foto Mariana Menezes1.jpeg";

import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
register();

const data = [
  {
    id: "1",
    src: "MjK1Egur6Eg",
    titulo:
      "Carga de doenças atribuíveis a fatores de risco alimentar e seu custo financeiro para o Sistema Único de Saúde no Brasil",
  },
  {
    id: "2",
    src: "kXjqcO1JtWk",
    titulo: "Estimativa da carga de doenças atribuíveis aos fatores de riscos",
  },
  {
    id: "3",
    src: "RZjDCHBccQo",
    titulo: "Estimativa dos gastos em saúde atribuíveis aos fatores de risco",
  },
  {
    id: "4",
    src: "VhTpZ9oZj3I",
    titulo:
      "Carga de doença atribuível ao consumo excessivo de sódio no Brasil",
  },
  {
    id: "5",
    src: "CHfGKMYjhc4",
    titulo:
      "Mortalidade atribuída ao consumo insuficiente de grãos integrais frutas e hortaliças",
  },
  {
    id: "6",
    src: "cIetCMw5XZw",
    titulo:
      "Anos de vida vividos com incapacidade por doenças crônicas não transmissíveis atribuídas ao consumo insuficiente de frutas e hortaliças e seus custos financeiros diretos para o Sistema Único de Saúde no Brasil",
  },
  {
    id: "7",
    src: "PyqO2cm-DCU",
    titulo:
      "Carga de doenças e custos com hospitalizações devidos ao uso de álcool",
  },
];




const handleScroll = () => {
  let sobreSection = document.getElementById("faixa2");
  sobreSection.scrollIntoView({ behavior: "smooth" });
};

function Main() {
  return (
    <>
      <Navbar></Navbar>
      <div
        id="main"
        className=" relative bg-white h-screen flex justify-end pt-16 items-start cursor-default"
      >
        <div className="absolute  left-28 mmd:left-10 mt-20 z-50 bg-white flex flex-col p-4 items-start justify-center mmd:!w-[80%] mlg:w-[60%] w-[40%] rounded-lg">
          <p className="uppercase text-sm font-serif font-semibold text-blue">
            Seja bem vindo!
          </p>
          <p className="py-4 text-blue w-[80%] text-6xl font-serif">
            Conheça o Estudo <span>CESAR</span>
          </p>
          <hr className="border-2 border-[#00c9b0] w-12"></hr>
          <p className="py-4 text-blue w-[60%] text-xl font-serif">
            Carga Econômica e de Saúde Atribuível a fatores de Risco
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleScroll}
              type="button"
              className="text-white font- mt-5 bg-[#00c9b0] rounded text-sm px-4 py-2 text-center mb-2 uppercase tracking-wide font-medium"
            >
              Ler mais
            </button>
            <a href="./imgs/RelatórioCESAR.pdf" download="RelatórioCESAR" target="_blank">
              <button
                type="button"
                className="font-medium mt-5 border-2 border-[#00c9b0] text-[#171653] rounded text-sm px-4 py-2 text-center mb-2 uppercase"
              >
                Relatório de pesquisa
              </button>
            </a>
          </div>
        </div>
        <div className="w-[60%] mlg:w-[70%] mmd:!w-full right-0 absolute flex justify-start items-center">
          <img
            src={imagem1}
            className="flex justify-center items-center  rounded-lg"
            width={5000}
            height={3000}
            alt="imagem1"
          />
        </div>
      </div>

      <div id="faixa2" className="w-full h-screen  flex relative ">
        <div className="w-[50%] mmd:w-[80%] top-36 p-8 mmd:p-4 left-10 absolute z-50 px-28 flex flex-col justify-center items-start bg-white rounded-lg">
          <p className="text-blue text-start text-lg mmd:w-full">
            Compreender o impacto da alimentação não saudável e outros fatores
            de risco na saúde é uma forma de identificar as melhores estratégias
            para aumentar a expectativa de vida da população e tornar mais
            eficientes os investimentos no nosso sistema saúde.
          </p>
          <a href="/sobre">
            <button
              type="button"
              className="flex font-semibold justify-center gap-2 items-center text-blue-700 mt-5 border border-blue-700 rounded text-sm px-4 py-2 text-center mb-2 uppercase tracking-wide"
            >
              Saiba mais
              <FaUpRightFromSquare />
            </button>
          </a>
        </div>
        <div className="w-[50%] mmd:w-full absolute flex justify-center items-center right-0 top-5">
          <img
            src={imagem2}
            alt="imagem2"
            className="flex justify-center items-center rounded-lg"
          />
        </div>
      </div>

      <div className="w-full  h-full mmd:items-center mmd:my-0 my-16 flex flex-col flex-wrap items-center justify-center gap-6 bg-white">
        <h1 className="flex w-full justify-start mmd:pl-4 pl-24 -mb-4 text-3xl">
          Galeria do Time
        </h1>
        <div className="flex gap-2 flex-wrap mmd:justify-center">
          <CardComp
            img={isis}
            name={"Ísis Eloah Machado"}
            alt={"Isis"}
            descc={"Coordenadora"}
            lattes={"http://lattes.cnpq.br/0150005556742996"}
          />
          <CardComp
            img={mariana}
            name={"Mariana Carvalho de Menezes"}
            alt={"Mariana"}
            descc={"Pesquisadora"}
            lattes={"http://lattes.cnpq.br/8894598416587453"}
          />
          <CardComp
            img={adriana}
            name={"Adriana Lúcia Meireles"}
            alt={"Adriana"}
            descc={"Pesquisadora"}
            lattes={"http://lattes.cnpq.br/5415462090135377"}
          />
          <CardComp
            img={marianaF}
            name={"Mariana Santos Felisbino Mendes"}
            alt={"Mariana"}
            descc={"Pesquisadora"}
            lattes={"http://lattes.cnpq.br/5074825535350952"}
          />
          <CardComp
            img={deborah}
            name={"Deborah Carvalho Malta"}
            alt={"Deborah"}
            descc={"Pesquisadora"}
            lattes={"http://lattes.cnpq.br/3261263738543724"}
          />
        </div>
        <div className="flex gap-2 flex-wrap mmd:justify-center">
          <CardComp
            img={jorge}
            name={"Jorge Gustavo Velásques Meléndez"}
            alt={"Jorge"}
            descc={"Pesquisador"}
            lattes={"http://lattes.cnpq.br/8406550065682773"}
          />
          <CardComp
            img={eliseu}
            name={"Eliseu Verly Junior"}
            alt={"Eliseu"}
            descc={"Pesquisador"}
            lattes={"http://lattes.cnpq.br/9014880928943124"}
          />
          <CardComp
            img={leticia}
            name={"Letícia de Oliveira Cardoso"}
            alt={"Letícia"}
            descc={"Pesquisadora"}
            lattes={"http://lattes.cnpq.br/7425850404169766"}
          />
          <CardComp
            img={luisa}
            name={"Luísa Sorio Flor"}
            alt={"Luísa"}
            descc={"Pesquisadora"}
            lattes={"http://lattes.cnpq.br/8883026435305801"}
          />
        </div>
      </div>

      <div className="w-full md:max-w-[1440px] m-auto py-10 mmd:px-2 px-14">
        <h1 className="text-3xl pb-4  w-full">Galeria de vídeos</h1>

        <Swiper
          slidesPerView={1}
          className="w-full h-[30rem] rounded-l-xl rounded-r-xl "
          pagination={{ clickable: true }}
          navigation
        >
          {data.map((item) => (
              <SwiperSlide
                className="flex flex-col gap-4 border border-gray-400"
                key={item.id}
              >
                {/* <div className=" items-center text-base absolute z-50 bg-black bg-opacity-50 flex w-full justify-center  px-3">
                  <h1 className="text-white text-center">{item.titulo}</h1>
                </div> */}
                <iframe
                  className=" w-full h-full"
                  src={`https://www.youtube.com/embed/${item.src}?rel=0`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full justify-center pb-10 flex flex-col ">
      <h1 className="text-3xl w-full flex mmd:ml-2 md:justify-center">
        Nossos Parceiros
      </h1>
      <div className="flex w-full justify-center items-center h-72 mmd:h-full mmd:gap-10 mmd:flex-wrap mmd:mt-5">
        <EmpComp
          img={logoUfop}
          text={"UFOP - Universidade Federal de Ouro Preto"}
          link={"https://ufop.br/"}
        />
        <EmpComp
          img={logoCnpq}
          text={
            "CNPq - Conselho Nacional de Desenvolvimento Científico e Tecnológico"
          }
          link={"https://www.gov.br/cnpq/pt-br"}
        />
        <EmpComp
          img={logoGbd}
          text={"Rede GBD Brasil"}
          link={"https://gbdbr.com.br/"}
        />
      </div>
      <div className="flex w-full justify-center items-start h-72 mmd:gap-10 mmd:h-full mmd:flex-wrap mmd:mt-5">
        <EmpComp
          img={logoFapemig}
          text={
            "FAPEMIG - Fundação de Amparo à Pesquisa do Estado de Minas Gerais"
          }
          link={"http://www.fapemig.br/pt/"}
        />
        <EmpComp
          img={logoDecit}
          text={
            "DECIT - Departamento de Ciência e Tecnologia/Ministério da Saúde"
          }
          link={"https://www.gov.br/saude/pt-br/composicao/sectics/decit"}
        />
      </div>
    </div>
    
    <Footer></Footer>
    </>
  );
}

export default Main;
