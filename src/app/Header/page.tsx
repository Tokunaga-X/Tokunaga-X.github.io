"use client";

import {
  faBars,
  faLanguage,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";

import { DarkModeContxt } from "../store/DarkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LanguageContext } from "../store/LanguageContext";

export default function Header() {
  const [mobileMenuShow, setMobileMenuShow] = useState(false);
  const { toggleDarkMode } = useContext(DarkModeContxt);
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <>
      <nav className="fixed z-10 w-full flex justify-between align-center py-[28px] pl-[40px] pr-[50px] bg-white dark:bg-slate-900 shadow-[0_0_10px_rgba(0,0,0,0.09)]">
        <span
          onClick={toggleDarkMode}
          className="absolute right-10 ml-8 pl-1 pr-1 p-1 mr-12"
        >
          <FontAwesomeIcon
            icon={faSun}
            className="text-4xl text-yellow-500 hover:text-black dark:hover:text-white cursor-pointer animate-spin-slow"
          />
        </span>

        <span
          onClick={toggleLanguage}
          className="absolute right-4 ml-4 pl-1 pr-1 p-1"
        >
          <FontAwesomeIcon
            icon={faLanguage}
            className="text-4xl hover:text-black dark:hover:text-white cursor-pointer"
          />
        </span>

        <h3 className="font-bold text-4xl hover:cursor-pointer dark:text-white">
          Tokunaga-X
        </h3>

        <FontAwesomeIcon
          icon={faBars}
          className="text-4xl block sm:!hidden"
          onClick={() => setMobileMenuShow(!mobileMenuShow)}
        />

        <ul className="sm:flex gap-8 hidden mr-20">
          <li className="nav-li">
            <a href="#home">{language === "en" ? "Home" : "首页"}</a>
          </li>
          <li className="nav-li">
            <a href="#about">{language === "en" ? "About" : "关于"}</a>
          </li>
          <li className="nav-li">
            <a href="#projects">{language === "en" ? "Projects" : "项目"}</a>
          </li>
          <li className="nav-li">
            <a href="#contact">{language === "en" ? "Contact" : "联系"}</a>
          </li>
        </ul>
      </nav>

      {mobileMenuShow ? (
        <ul
          className="gap-10 fixed w-screen h-screen bg-yellow-50 z-10 flex flex-col justify-center items-center"
          id="headerSub"
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="w-10 h-10 absolute right-4 top-4"
            onClick={() => setMobileMenuShow(!mobileMenuShow)}
          />

          <li
            className="nav-li"
            onClick={() => setMobileMenuShow(!mobileMenuShow)}
          >
            <a href="#home">{language === "en" ? "Home" : "首页"}</a>
          </li>
          <li
            className="nav-li"
            onClick={() => setMobileMenuShow(!mobileMenuShow)}
          >
            <a href="#about">{language === "en" ? "About" : "关于"}</a>
          </li>
          <li
            className="nav-li"
            onClick={() => setMobileMenuShow(!mobileMenuShow)}
          >
            <a href="#projects">{language === "en" ? "Projects" : "项目"}</a>
          </li>
          <li
            className="nav-li"
            onClick={() => setMobileMenuShow(!mobileMenuShow)}
          >
            <a href="#contact">{language === "en" ? "Contact" : "联系"}</a>
          </li>
        </ul>
      ) : (
        ""
      )}
    </>
  );
}
