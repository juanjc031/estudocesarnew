import React, { useState, useEffect } from "react";
import logo2 from '.././imgs/image-removebg-preview.png'
import {
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? `overflow-x-hidden w-full duration-700 overflow-y-hidden fixed h-16 z-[100] bg-[#fff] -mt-15 shadow-lg !shadow-gray-400`
          : `overflow-x-hidden w-full duration-700 overflow-y-hidden fixed h-16 z-[100] bg-[#fff] -mt-15`
      }
    >
      <div className="flex justify-between items-center w-full px-2 2xl:px-16 h-full">
        <div className="ml-12 mt-1 ">
          <img src={logo2} alt="logo2" ></img>
        </div>
        <div>
          <ul className="hidden md:flex pr-14">
            <a href="/">
              <li className="transition-all ml-10 text-sm uppercase hover:text-[#00c9b0]">
                Home
              </li>
            </a>
            <a href="/sobre">
              <li className="transition-all ml-10 text-sm uppercase hover:text-[#00c9b0]">
                Sobre
              </li>
            </a>
            <a href="/artigos">
              <li className="transition-all ml-10 text-sm uppercase hover:text-[#00c9b0]">
                Artigos Científicos
              </li>
            </a>
            <a href="/equipe">
              <li className="transition-all ml-10 text-sm uppercase hover:text-[#00c9b0]">
                Equipe
              </li>
            </a>
          </ul>
          <div className="flex gap-5">
            <div className="md:hidden cursor-pointer flex gap-5">
              <div>{/* Aqui tinha o botao de modo escuro */}</div>
              <div
                onClick={handleNav}
                className="md:hidden cursor-pointer flex gap-5 active:bg-black"
              >
                <AiOutlineMenu size={35} className="text-[#c4c4c4] mr-10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* aside bar */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-full bg-[#fcf9f6] p-10 ease-in duration-200 "
              : "fixed left-[-100%] top-0 p-10 ease-in duration-100"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              {/*  <Image src={juanlogo} width="80" height="80" alt="logo" /> */}
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4 ">
              <p className="w-[85%] md:w-[90%] py-4 text-3xl text-blue">
                Estudo CESAR
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <a href="/">
                <li onClick={handleNav} className="py-4 text-sm">
                  Home
                </li>
              </a>
              <a href="/sobre">
                <li onClick={handleNav} className="py-4 text-sm">
                  Sobre
                </li>
              </a>
              <a href="/artigos">
                <li onClick={handleNav} className="py-4 text-sm">
                  Artigos Científicos
                </li>
              </a>
              <a href="/equipe">
                <li onClick={handleNav} className="py-4 text-sm">
                  Equipe
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
