"use client"

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { useContext, useEffect } from "react"

import Css3Icon from "../../../public/css-3.png"
import { DarkModeContxt } from "../store/DarkModeContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HTML5Icon from "../../../public/html-5.png"
import HelloImg from "@/../public/hello.png"
import Image from "next/image"
import JavascriptIcon from "../../../public/js.png"
import MyselfImg from "../../../public/myself.png"
import NextJsIcon from "../../../public/nextjs.svg"
import NodeJsIcon from "../../../public/nodejs.svg"
import ReactIcon from "../../../public/react.png"
import SimpleBgImg from "../../../public/home-bg.jpg"
import SolidityIcon from "../../../public/solidity.svg"
import TailWindCssIcon from "../../../public/tailwind-css.svg"
import TypescriptIcon from "../../../public/typescript.png"

export default function Home() {
    const { darkMode } = useContext(DarkModeContxt)
    return (
        <div
            className="min-h-screen flex flex-col items-center dark:!bg-slate-950 bg-cover bg-center"
            id="home"
            style={{
                backgroundImage: darkMode ? `url(${SimpleBgImg.src})` : "none",
            }}
        >
            <div className="relative flex flex-col lg:flex-row justify-center items-center my-0 md:mt-10 xl:mt-40 mx-auto px-16 lg:h-[65rem] max-w-[107rem] py-[11rem] lg:py-0 gap-12 lg:gap-0">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-[10rem]">
                    <div className="max-w-[50rem]">
                        <h1 className="text-center lg:text-left text-[#2d2e32] dark:text-white font-bold text-6xl sm:text-[5.5rem] my-8 leading-tight">
                            Full-stack Web Developer
                            <Image
                                src={HelloImg}
                                alt="wave hand"
                                className="w-16 sm:w-32 inline-block animate-wiggle"
                            ></Image>
                        </h1>
                        <p className="text-center lg:text-left font-special text-[1.8rem] text-[#767676] dark:text-white font-medium">
                            Hi, I&apos;m Xu Yuchao. A passionate Full-stack Web
                            Developer based in Hangzhou, China. 📍
                        </p>
                        <div className="flex gap-[1.3rem] my-10 justify-center lg:justify-start">
                            <a
                                className="hover:scale-110 hover:text-font-blue transition-all duration-500 dark:text-white"
                                href="https://www.linkedin.com/in/yuchao-xu24253/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="text-5xl"
                                />
                            </a>
                            <a
                                className="hover:scale-110 hover:text-font-blue transition-all duration-500 dark:text-white"
                                href="https://github.com/Tokunaga-X"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="text-5xl"
                                />
                            </a>
                        </div>
                    </div>
                    <Image
                        src={MyselfImg}
                        alt="myself"
                        className="sm:w-[35rem] sm:h-[35rem] w-[30rem] h-[30rem] object-cover animate-morph border-[3px] border-solid border-black"
                    ></Image>
                </div>
                <div className="static lg:absolute bottom-0 left-[4rem] flex flex-col lg:flex-row items-center">
                    <p className="font-special text-[#2d2e32] dark:text-white text-[1.7rem] font-[700] border-b-2 lg:border-b-0 lg:border-r-2 border-solid border-black dark:border-white mb-12 pb-4 lg:pb-0 lg:mb-0 lg:pr-8 lg:mr-28">
                        Tech Stack
                    </p>
                    <ul className="flex flex-wrap gap-12 list-none justify-center lg:justify-start">
                        <li className="stack-li group">
                            <Image
                                src={ReactIcon}
                                alt="React"
                                className="w-[3.4rem]"
                            ></Image>
                            <span className="absolute p-10 hidden group-hover:inline-block top-[6rem] text-2xl transition-all dark:text-white">
                                React
                            </span>
                        </li>
                        <li className="stack-li group">
                            <Image
                                src={NextJsIcon}
                                alt="nextjs"
                                className="w-[3.4rem]"
                            ></Image>
                            <span className="absolute p-10 hidden group-hover:inline-block top-[6rem] text-2xl transition-all dark:text-white">
                                NextJs
                            </span>
                        </li>
                        <li className="stack-li group">
                            <Image
                                src={TypescriptIcon}
                                alt="typscript"
                                className="w-[3.4rem]"
                            ></Image>
                            <span className="absolute p-10 hidden group-hover:inline-block top-[6rem] text-2xl transition-all dark:text-white">
                                Typscript
                            </span>
                        </li>
                        <li className="stack-li group">
                            <Image
                                src={TailWindCssIcon}
                                alt="tailwind-css"
                                className="w-[3.4rem]"
                            ></Image>
                            <span className="absolute p-10 hidden group-hover:inline-block top-[6rem] text-2xl transition-all dark:text-white">
                                TailwindCss
                            </span>
                        </li>
                        <li className="stack-li group">
                            <Image
                                src={NodeJsIcon}
                                alt="NodeJs"
                                className="w-[3.4rem]"
                            ></Image>
                            <span className="absolute p-10 hidden group-hover:inline-block top-[6rem] text-2xl transition-all dark:text-white">
                                NodeJs
                            </span>
                        </li>
                        <li className="stack-li group">
                            <Image
                                src={SolidityIcon}
                                alt="Solidity"
                                className="w-[3.4rem]"
                            ></Image>
                            <span className="absolute p-10 hidden group-hover:inline-block top-[6rem] text-2xl transition-all dark:text-white">
                                Solidity
                            </span>
                        </li>
                        {/* <li className="stack-li group">
                            <Image
                                src={JavascriptIcon}
                                alt="typscript"
                                className="w-[3.4rem]"
                            ></Image>
                        </li>
                        <li className="stack-li group">
                            <Image
                                src={HTML5Icon}
                                alt="typscript"
                                className="w-[3.4rem]"
                            ></Image>
                        </li>
                        <li className="stack-li group">
                            <Image
                                src={Css3Icon}
                                alt="typscript"
                                className="w-[3.4rem]"
                            ></Image>
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}
