import HelloImg from "@/../public/hello.png"
import Image from "next/image"
import MyselfImg from "../../../public/Myself.png"

export default function Home() {
    return (
        <div className="h-screen flex flex-col items-center bg-grey-bg ">
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
                </div>
                <Image
                    src={MyselfImg}
                    alt="myself"
                    className="w-[35rem] animate-morph border-[3px] border-solid border-black"
                ></Image>
                <div className="absolute bottom-0 left-0 flex items-center">
                    <p className="font-special text-lg border-r-2 border-solid border-black pr-8 mr-24">
                        Tech Stack
                    </p>
                    <ul className="flex gap-10 list-none flex-wrap">
                        <li className="radius-1/2 bg-white w-14 h-14 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.09)]"></li>
                        <li className="radius-1/2 bg-white w-14 h-14 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.09)]"></li>
                        <li className="radius-1/2 bg-white w-14 h-14 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.09)]"></li>
                        <li className="radius-1/2 bg-white w-14 h-14 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.09)]"></li>
                        <li className="radius-1/2 bg-white w-14 h-14 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.09)]"></li>
                        <li className="radius-1/2 bg-white w-14 h-14 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.09)]"></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
