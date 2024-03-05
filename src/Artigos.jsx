import React from "react";
import Navbar from "./components/Navbar";
import ArticleComp from "./components/ArticleComp";
import Footer from "./components/Footer";
import figura6 from "./imgs/figura6.jpg";
import artigo1 from "./imgs/artigo1.png";
import artigo2 from "./imgs/artigo2.png";
import artigo3 from "./imgs/artigo3.png";
import artigo4 from "./imgs/artigo4.png";
import artigo5 from "./imgs/artigo5.png";
import artigo6 from "./imgs/artigo6.png";
import artigo7 from "./imgs/artigo7.png";
import artigo8 from "./imgs/artigo8.png";
import artigo9 from "./imgs/artigo9.jpg";

function Artigos() {
  return (
    <>
      <Navbar></Navbar>
      <div className="relative flex justify-center items-center h-full w-full pt-60 mmd:pt-32 mb-64">
        <div className="absolute flex flex-col mmd:!w-[80%] mmd:left-10 mmd:mt-36 justify-center items-start left-24 bg-white p-4 mlg:w-[40%] w-[50%] z-50 rounded-lg">
          <p className="pb-4 text-blue text-5xl font-serif ">
            Artigos Científicos
          </p>
          <hr className="border-2 border-[#00c9b0] w-12"></hr>
        </div>
        <div className="absolute right-0 mlg:w-[70%] mmd:!w-full w-[55%]">
          <img src={figura6} alt="imagem3" className="rounded-lg" />
        </div>
      </div>
      <ArticleComp
        src={artigo1}
        title={`Burden of non-communicable diseases attributable to dietary risks in
        Brazil`}
        text={`Burden of non-communicable diseases attributable to dietary risks in
            Brazil, 1990-2019: an analysis of the Global Burden of Disease Study
            2019`}
        textSwal={`Autoria: Ísis Eloah Machado*, Magda do Carmo Parajára*, Larissa
        Fernanda Fonseca Guedes, Adriana Lúcia Meireles, Mariana Carvalho de
        Menezes, Mariana Santos Felisbino-Mendes, Eliseu Verly-Junior, Deborah
        Carvalho Malta. *These authors contributed equally to the work. `}
        autorSwal={`Autor
        correspondente: Prof. Ísis Eloah Machado. E-mail:
        isiseloah@gmail.com `}
        hrefArtigo={`https://doi.org/10.1590/0037-8682-0282-2021`}
        artigo={`doi.org/10.1590/0037-8682-0282-2021`}
      />
      <ArticleComp
        src={artigo2}
        title={`Health impacts of sodium consumption in Brazil`}
        text={`Health impacts caused by excessive sodium consumption in Brazil: results of the GBD 2019 study
        `}
        textSwal={`Autoria:
        Larissa Fernanda Fonseca Guedes,
        Mariana Santos Felisbino-Mendes,
        Aline Siqueira Fogal Vegi,
        Adriana Lúcia Meireles,
        Mariana Carvalho de Menezes,
        Deborah Carvalho Malta e
        Ísis Eloah Machado.
        
      
        `}
        autorSwal={`  Autor correspondente: Prof. Ísis Eloah Machado. E-mail:
        isiseloah@gmail.com`}
        hrefArtigo={`https://doi.org/10.1590/0037-8682-0266-2021`}
        artigo={`doi.org/10.1590/0037-8682-0266-2021`}
      />
      <ArticleComp
        src={artigo3}
        title={`Burden of non-communicable chronic diseases attributable to the consumption of sugar-sweetened beverage, 1990–2019`}
        text={`Burden of non-communicable chronic diseases attributable to the consumption of sugar-sweetened beverage, 1990–2019`}
        textSwal={`Autoria:
        Joice Silva Vieira Leal,
        Aline Siqueira Fogal Vegi,
        Adriana Lúcia Meireles,
        Ísis Eloah Machado e 
        Mariana Carvalho de Menezes.
        
        
        `}
        autorSwal={`Autor correspondente: Mariana Carvalho de Menezes. E-mail: mariana.menezes@ufop.edu.br`}
        hrefArtigo={`https://clinicalnutritionespen.com/article/S2405-4577(22)00448-X/fulltext`}
        artigo={`clinicalnutritionespen.com/article/S2405-4577(22)00448-X/fulltext`}
      />
      <ArticleComp
        src={artigo4}
        title={`Health economic impacts associated with the consumption of sugar-sweetened beverages in Brazil`}
        text={`Health economic impacts associated with the consumption of sugar-sweetened beverages in Brazil`}
        textSwal={`Autoria:
        Joice Silva Vieira Leal,
        Aline Siqueira Fogal,
        Adriana Lúcia Meireles,
        Letícia de Oliveira Cardoso,
        Ísis Eloah Machado e 
        Mariana Carvalho de Menezes.
        `}
        autorSwal={`Autor correspondente: Mariana Carvalho de Menezes. E-mail: mariana.menezes@ufop.edu.br`}
        hrefArtigo={`https://www.frontiersin.org/articles/10.3389/fnut.2022.1088051/full`}
        artigo={`www.frontiersin.org/articles/10.3389/fnut.2022.1088051/full`}
      />
      <ArticleComp
        src={artigo5}
        title={`Editorial: Economic and health impacts of dietary interventions`}
        text={`Editorial: Economic and health impacts of dietary interventions`}
        textSwal={`Autoria:
        Eliseu Verly-Jr,
        Isis Eloah Machado e
        Eduardo Augusto Fernandes Nilson. 
        `}
        autorSwal={`Correspondência: Eliseu Verly-Jr, eliseujunior@gmail.com; Isis Eloah Machado, isiseloah@gmail.com; Eduardo Augusto Fernandes Nilson, edunilson@gmail.com
        `}
        hrefArtigo={`https://www.frontiersin.org/articles/10.3389/fnut.2023.1283108/full`}
        artigo={`www.frontiersin.org/articles/10.3389/fnut.2023.1283108/full`}
      />
      <ArticleComp
        src={artigo6}
        title={`Chronic diseases attributable to a diet rich in processed meat in Brazil: Burden and financial impact on the healthcare system`}
        text={`Chronic diseases attributable to a diet rich in processed meat in Brazil: Burden and financial impact on the healthcare system
        `}
        textSwal={`Autoria:
        Carla Eduarda Faustino Rocha,
        Magda do Carmo Parajára,
        Ísis Eloah Machado,
        Aline Siqueira Fogal Vegi,
        Mariana Carvalho de Menezes e 
        Adriana Lúcia Meireles. 
        `}
        autorSwal={`Autor correspondente: Adriana Lúcia Meireles. E-mail:
        adriana.meireles@ufop.edu.br`}
        hrefArtigo={`https://www.frontiersin.org/articles/10.3389/fnut.2023.1114766/full`}
        artigo={`www.frontiersin.org/articles/10.3389/fnut.2023.1114766/full`}
      />
      <ArticleComp
        src={artigo7}
        title={`Health and economic impacts of diet changes`}
        text={`Avoidable diet-related deaths and cost-of-illness with culturally optimized modifications in diet: The case of Brazil`}
        textSwal={`Autoria:
        Eliseu Verly Jr,
        Ísis Eloah Machado,
        Adriana Lúcia Meireles e 
        Eduardo A. F. Nilson. 
        `}
        autorSwal={`Autor correspondente: Eliseu Verly Jr. E-mail: eliseujunior@gmail.com`}
        hrefArtigo={`https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0288471`}
        artigo={`journals.plos.org/plosone/article?id=10.1371/journal.pone.0288471`}
      />
      <ArticleComp
        src={artigo8}
        title={`Burden of ischemic heart disease attributable to trans fatty acids, 1990–2019`}
        text={`Burden of ischemic heart disease attributable to trans fatty acids, 1990–2019`}
        textSwal={`Autoria:
        Magda do Carmo Parajára, 
        Ísis Eloah Machado, 
        Eliseu Verly-Junior, 
        Mariana Carvalho de Menezes, 
        Eduardo Augusto Fernandes Nilson e
        Adriana Lúcia Meireles. 
        `}
        autorSwal={`Autor correspondente: Adriana Lúcia Meireles. E-mail:
        adriana.meireles@ufop.edu.br`}
        hrefArtigo={`https://www.sciencedirect.com/science/article/abs/pii/S2405457723005363`}
        artigo={`www.sciencedirect.com/science/article/abs/pii/S2405457723005363`}
      />
      <ArticleComp
        src={artigo9}
        title={`Mortality attributable to diets low in fruits, vegetables, and whole grains in Brazil in 2019: evidencing regional health inequalities`}
        text={`Mortality attributable to diets low in fruits, vegetables, and whole grains in Brazil in 2019: evidencing regional health inequalities`}
        textSwal={`Autoria:
        Magda do Carmo Parajára, 
        Zoe Colombet, 
        Ísis Eloah Machado, 
        Mariana Carvalho de Menezes, 
        Eliseu Verly-Junior, 
        Martin O'Flaherty e
        Adriana Lúcia Meireles. 
        `}
        autorSwal={`Autor correspondente: Adriana Lúcia Meireles. E-mail:
        adriana.meireles@ufop.edu.br`}
        hrefArtigo={`https://www.sciencedirect.com/science/article/pii/S0033350623003232`}
        artigo={`www.sciencedirect.com/science/article/pii/S0033350623003232`}
      />
      <Footer></Footer>
    </>
  );
};

export default Artigos;
