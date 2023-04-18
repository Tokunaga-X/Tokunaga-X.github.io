import AboutImg from "@/../public/about.png"
import Image from "next/image"

export default function About() {
    return (
        <section>
            <div className="flex flex-col items-center">
                <Image
                    src={AboutImg}
                    alt="About me"
                    className="w-[41rem] h-[35rem]  mb-14 rounded-[1.7rem]"
                ></Image>
                <div className="max-w-[54rem]">
                    <p className="section-title">ABOUT ME</p>
                    <h3 className="section-header">
                        A dedicated Front-end Developer based in Hangzhou, China
                        📍
                    </h3>
                    <p className="font-special text-[#767676] text-[1.7rem] font-[500] mb-8 text-center">
                        As a Junior Front-End Developer, I possess an impressive
                        arsenal of skills in HTML, CSS, JavaScript, React,
                        Tailwind, and SCSS. I excel in designing and maintaining
                        responsive websites that offer a smooth user experience.
                        My expertise lies in crafting dynamic, engaging
                        interfaces through writing clean and optimized code and
                        utilizing cutting-edge development tools and techniques.
                        I am also a team player who thrives in collaborating
                        with cross-functional teams to produce outstanding web
                        applications.
                    </p>
                </div>
            </div>
        </section>
    )
}
