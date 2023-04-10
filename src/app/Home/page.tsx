import HelloImg from "@/../public/hello.png"
import Image from "next/image"
import MyselfImg from "../../../public/Myself.png"

export default function Home() {
    return (
        <div className="h-screen flex flex-col items-center bg-grey-bg">
            <div className="flex justify-center items-center h-3/4 w-5/6">
                <div>
                    <h1 className="font-bold text-6xl my-6">
                        Front-End React Developer
                        <Image
                            src={HelloImg}
                            alt="wave hand"
                            className="w-16 inline-block"
                        ></Image>
                    </h1>
                    <p className="font-special text-xl text-gray-600">
                        Hi, I&apos;m Xu Yuchao. A passionate Front-end React
                        Developer based in Hangzhou, China.
                    </p>
                </div>
                <Image
                    src={MyselfImg}
                    alt="myself"
                    className="w-80 animate-morph border-2 border-solid border-black"
                ></Image>
            </div>
        </div>
    )
}
