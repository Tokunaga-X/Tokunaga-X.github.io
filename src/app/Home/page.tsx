import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HelloImg from "@/../public/hello.png"
import Image from "next/image"
import MyselfImg from "../../../public/myself.png"

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
                            href=""
                            className="hover:scale-110 hover:text-font-blue transition-all duration-500"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="text-5xl"
                            />
                        </a>
                        <a
                            href=""
                            className="hover:scale-110 hover:text-font-blue transition-all duration-500"
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
                    <ul className="flex gap-10 list-none flex-wrap">
                        <li className="stack-li"></li>
                        <li className="stack-li"></li>
                        <li className="stack-li"></li>
                        <li className="stack-li"></li>
                        <li className="stack-li"></li>
                        <li className="stack-li"></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
