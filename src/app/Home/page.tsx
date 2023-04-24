import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import Css3Icon from "../../../public/css-3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HTML5Icon from "../../../public/html-5.png"
import HelloImg from "@/../public/hello.png"
import Image from "next/image"
import JavascriptIcon from "../../../public/js.png"
import MyselfImg from "../../../public/myself.png"
import NodeJsIcon from "../../../public/node-js.png"
import ReactIcon from "../../../public/react.png"
import TypescriptIcon from "../../../public/typescript.png"

export default function Home() {
    return (
        <div
            className="h-screen flex flex-col items-center bg-grey-bg"
            id="home"
        >
            <div className="relative flex justify-center items-center gap-[10rem] my-0 mx-auto px-16 h-[65rem] max-w-[107rem]">
                <div className="max-w-[50rem]">
                    <h1 className="font-bold text-[5.5rem] my-8 leading-tight">
                        Front-End React Developer
                        <Image
                            src={HelloImg}
                            alt="wave hand"
                            className="w-16 inline-block"
                        ></Image>
                    </h1>
                    <p className="font-special text-[1.8rem] text-[#767676] font-medium">
                        Hi, I&apos;m Xu Yuchao. A passionate Front-end React
                        Developer based in Hangzhou, China. 📍
                    </p>
                    <div className="flex gap-[1.3rem] my-10">
                        <a
                            className="hover:scale-110 hover:text-font-blue transition-all duration-500"
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
                            className="hover:scale-110 hover:text-font-blue transition-all duration-500"
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
                    className="w-[35rem] h-[35rem] object-cover animate-morph border-[3px] border-solid border-black"
                ></Image>
                <div className="absolute bottom-0 left-[4rem] flex items-center">
                    <p className="font-special text-[#2d2e32] text-[1.7rem] font-[700] border-r-2 border-solid border-black pr-8 mr-28">
                        Tech Stack
                    </p>
                    <ul className="flex gap-12 list-none flex-wrap">
                        <li className="stack-li">
                            <Image
                                src={TypescriptIcon}
                                alt="typscript"
                                className="w-[3.4rem]"
                            ></Image>
                        </li>
                        <li className="stack-li">
                            <Image
                                src={JavascriptIcon}
                                alt="typscript"
                                className="w-[3.4rem]"
                            ></Image>
                        </li>
                        <li className="stack-li">
                            <Image
                                src={NodeJsIcon}
                                alt="typscript"
                                className="w-[3.4rem]"
                            ></Image>
                        </li>
                        <li className="stack-li">
                            <Image
                                src={HTML5Icon}
                                alt="typscript"
                                className="w-[3.4rem]"
                            ></Image>
                        </li>
                        <li className="stack-li">
                            <Image
                                src={Css3Icon}
                                alt="typscript"
                                className="w-[3.4rem]"
                            ></Image>
                        </li>
                        <li className="stack-li">
                            <Image
                                src={ReactIcon}
                                alt="typscript"
                                className="w-[3.4rem]"
                            ></Image>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
