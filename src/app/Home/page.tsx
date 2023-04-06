import HelloImg from "@/../public/hello.png"
import Image from "next/image"

export default function Home() {
    return (
        <div className="h-screen flex justify-center items-center bg-grey-bg">
            <h1 className="font-bold text-6xl">
                Front-End React Developer
                <Image src={HelloImg} alt="wave hand"></Image>
            </h1>
            <p>
                Hi, I&apos;m Xu Yuchao. A passionate Front-end React Developer
                based in Hangzhou, China.
            </p>
        </div>
    )
}
