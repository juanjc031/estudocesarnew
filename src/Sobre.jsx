import React from "react";
import Navbar from "./components/Navbar";
import imagem3 from "./imgs/figura3.jpg";
import figura4 from "./imgs/figura4.jpg";
import figura5 from "./imgs/figura5.jpg";
import icone1 from "./imgs/icone1-removebg-preview.png";
import icone2 from "./imgs/icone2-removebg-preview.png";
import icone3 from "./imgs/icone3-removebg-preview.png";
import icone4 from "./imgs/icone4-removebg-preview.png";
import icone5 from "./imgs/icone5-removebg-preview.png";
import icone6 from "./imgs/icone6-removebg-preview.png";
import icone7 from "./imgs/icone7-removebg-preview.png";
import CardImgComp from "./components/CardImgComp";
import Footer from "./components/Footer";

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
    titulo:
      "Carga de doenças atribuíveis a fatores de risco alimentar e seu custo financeiro para o Sistema Único de Saúde no Brasil",
    src: "MjK1Egur6Eg",
  },
  {
    id: "2",
    titulo: "Estimativa da carga de doenças atribuíveis aos fatores de riscos",
    src: "kXjqcO1JtWk",
  },
  {
    id: "3",
    titulo: "Estimativa dos gastos em saúde atribuíveis aos fatores de risco",
    src: "RZjDCHBccQo",
  },
  {
    id: "4",
    titulo:
      "Carga de doença atribuível ao consumo excessivo de sódio no Brasil",
    src: "VhTpZ9oZj3I",
  },
  {
    id: "5",
    titulo:
      "Mortalidade atribuída ao consumo insuficiente de grãos integrais frutas e hortaliças",
    src: "CHfGKMYjhc4",
  },
  {
    id: "6",
    titulo:
      "Anos de vida vividos com incapacidade por doenças crônicas não transmissíveis atribuídas ao consumo insuficiente de frutas e hortaliças e seus custos financeiros diretos para o Sistema Único de Saúde no Brasil",
    src: "cIetCMw5XZw",
  },
  {
    id: "7",
    titulo:
      "Carga de doenças e custos com hospitalizações devidos ao uso de álcool",
    src: "PyqO2cm-DCU",
  },
];

function Sobre() {
  return (
    <>
      <Navbar></Navbar>
      <div className="relative flex justify-center items-center h-full w-full mmd:pt-32 pt-60 mmd:mb-36 mb-64">
        <div className="absolute flex flex-col  items-start justify-center mr-6 mmd:w-[80%] mmd:left-16 mmd:p-3 mmd:mt-32 left-44 w-1/3 rounded-lg z-50 bg-white">
          <p className="md:pt-4 mb-2 text-blue text-6xl font-serif ">Sobre</p>
          <hr className="border-2 border-[#00c9b0] w-12"></hr>
        </div>
        <div className="absolute flex justify-center items-center w-[60%] mmd:w-full right-0">
          <img
            src={imagem3}
            className="flex justify-center items-center bg-cover rounded-lg"
            alt="imagem3"
          />
        </div>
      </div>
      <div className="p-4 h-full flex mmd:flex-col justify-center mx-10 mmd:mx-2 shadow-xl cursor-default bg-[#f7f7f7] shadow-gray-800 mb-10 rounded-md">
        <div className="flex flex-col mmd:mb-6">
          <p className="text-[#00c9b0] font-medium">01.</p>
          <p className="text-xl font-semibold mt-2">
            Estudo <br />
            CESAR
          </p>
        </div>
        <div className="px-10 mmd:px-2 w-full">
          <hr className="border-2 border-[#00c9b0] w-20 mb-4"></hr>
          <div className="text-sm flex mmd:flex-col gap-5">
            <div className="text-lg font-medium">
              O Estudo CESAR investiga o impacto dos comportamentos alimentares
              e outros fatores de risco na saúde da população brasileira e por
              meio da estimativa dos óbitos, incapacidades e gastos em saúde que
              poderiam ser evitados caso esses fatores fossem reduzidos ou
              eliminados. Para calcular esses valores são utilizadas diversas
              fontes de dados como inquéritos em saúde, dados administrativos do
              setor saúde, o sistema de informação sobre mortalidade, artigos
              científicos e relatórios publicados. Por meio da parceria com a{" "}
              <a
                target="_blank"
                className="text-blue-600 visited:text-purple-600 underline cursor-pointer"
                rel="noopener noreferrer"
                href="https://gbdbr.com.br/"
              >
                Rede GBD Brasil
              </a>
              ,
            </div>
            <div className="text-lg font-medium">
              o Estudo CESAR utiliza estimativas obtidas pelo estudo Carga
              Global de Doença (Global Burden of Disease – GBD), que é
              coordenado pelo 
              <a
                href="https://www.healthdata.org/"
                target="_blank"
                className="text-blue-600 visited:text-purple-600 underline cursor-pointer"
                rel="noopener noreferrer"
              >
                Institute for Health Metrics and Evaluation (IHME)
              </a>
              da Universidade de Washington. Os dados utilizados pelo IHME são
              coletados e analisados por uma rede de mais de 7000 pesquisadores
              espalhados por mais de 156 países e territórios. Transformados em
              métricas, exprimem incidência, prevalência, mortalidade prematura,
              incapacidade, bem como anos de vida saudável perdidos em
              decorrência de mais de 350 doenças e lesões, mais de 80 fatores de
              risco, em 204 países e territórios.
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 h-full flex justify-center mmd:flex-col mmd:mx-2 mx-10 shadow-xl cursor-default bg-[#f7f7f7] shadow-gray-800 mb-10 rounded-md">
        <div className="flex flex-col mmd:mb-6">
          <p className="text-[#00c9b0] font-medium">02.</p>
          <p className="text-xl font-semibold mt-2">
            Fração atribuível
            <br />
            populacional (FAP)
          </p>
        </div>
        <div className="px-10 mmd:px-2 w-full">
          <hr className="border-2 border-[#00c9b0] w-20 mb-4"></hr>
          <div className="text-sm flex mmd:flex-col gap-5">
            <div className="text-lg font-medium">
              O cálculo do impacto dos fatores de risco na saúde da população é
              realizado por meio da obtenção da Fração Atribuível Populacional
              (FAP), uma medida que leva em consideração a distribuição do fator
              de risco na população, o valor de exposição em que o risco seria
              minimizado e os riscos relativos dos pares risco-desfecho obtidos
              por revisões da literatura. Após obter a FAP de um par
              risco-desfecho específico, a multiplicamos pela carga de doença
              daquele desfecho.
            </div>
            <div className="text-lg font-medium">
              Sendo que a carga de doença é mensurada por meio no número de
              óbitos, anos perdidos por mortalidade prematura, anos vividos com
              incapacidades, e os valores gastos pelo serviço de saúde. Por fim,
              possível obter a estimativa de óbitos, incapacidades e valores
              monetários gastos que poderiam ser evitados caso os fatores de
              risco estudados tivessem sido reduzidos ou eliminados no passado.
              Essas medidas são úteis no planejamento e gestão em saúde, para
              que possamos investir em políticas e ações mais custo-efetivas.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1440px] h-full m-auto py-10 mmd:px-2 px-14 bg-[#f2f2f2]">
        <h1 className="text-xl pb-4">
          Conheça mais sobre o nosso estudo nos vídeos produzidos pelo nosso
          grupo de pesquisa:
        </h1>
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
      <div className="flex  flex-col gap-10 justify-center items-center py-10 mmd:px-2 px-10">
        <h1 className="font-semibold text-2xl">Fatores de risco estudados</h1>
        <div className="flex gap-10 flex-wrap justify-center items-start w-full">
          <CardImgComp
            src={icone1}
            title={"Dieta rica em carnes processadas"}
            text={`Qualquer consumo (em gramas por dia) de carne qconservada por
              defumação, cura, salga ou adição de conservantes químicos.`}
            hCard={"80"}
            alt={"Icone1"}
          ></CardImgComp>
          <CardImgComp
            src={icone2}
            title={"Dieta rica em bebidas açucaradas"}
            text={
              "Qualquer consumo (em gramas por dia) de bebidas com ≥50 kcal por porção de 226,8 gramas, incluindo bebidas carbonatadas, refrigerantes, bebidas energéticas e bebidas de frutas, porém incluindo sucos 100% fruta."
            }
            hCard={"80 mmd:h-[25rem]"}
            alt={"Icone1"}
          ></CardImgComp>
          <CardImgComp
            src={icone3}
            title={"Dieta rica em sódio"}
            text={`Média da excreção urinária de sódio em 24 horas (em gramas por dia) maior que 3 gramas.
            `}
            hCard={"80"}
            alt={"Icone1"}
          ></CardImgComp>
          <CardImgComp
            src={icone4}
            title={"Dieta rica em ácidos graxos trans"}
            text={`Qualquer consumo (em percentual do total energético diário) de gorduras trans de todas as fontes, principalmente óleos vegetais parcialmente hidrogenados e produtos derivados de ruminantes.
            `}
            hCard={"80"}
            alt={"Icone1"}
          ></CardImgComp>
          <CardImgComp
            src={icone5}
            title={" Índice de Massa Corporal (IMC) elevado"}
            text={`Para adultos (20 anos ou mais), o IMC elevado é definido como IMC maior que 20–25 kg/m² . Para crianças (1-19 anos), é definido baseado nos padrões da  International Obesity Task Force.
            `}
            hCard={"80"}
            alt={"Icone1"}
          ></CardImgComp>
          <CardImgComp
            src={icone7}
            title={"Riscos Metabólicos"}
            text={`Níveis alterados de glicemia, colesterol sanguíneo e pressão arterial.
            `}
            hCard={"80"}
            alt={"Icone1"}
          ></CardImgComp>
          <CardImgComp
            src={icone6}
            title={"Consumo de álcool"}
            text={`Consumidores de álcool são definidos como indivíduos que consumiram pelo menos uma dose de bebida alcoólica no último ano. Entre consumidores de álcool, o nível de esposição foi estimado com base na quantidade média em gramas de álcool puro consumidas por dia.
            `}
            hCard={"full"}
            alt={"Icone1"}
          ></CardImgComp>
          
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Sobre;
