import AboutImg from "@/../public/about.png"
import Image from "next/image"

export default function About() {
    return (
        <section id="about">
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
                        As a skilled web developer, I specialize in crafting
                        dynamic and engaging interfaces using clean, optimized
                        code and the latest development tools and techniques. I
                        am a team player at heart and thrive on collaborating
                        with cross-functional teams to deliver outstanding web
                        applications. Additionally, I have extensive experience
                        in testing and deploying web projects, ensuring that
                        they are fully functional and meet client
                        specifications. I strongly believe that my greatest
                        strength lies in my professional skills and experience,
                        and I am fully committed to making a significant impact
                        in my work.
                    </p>
                </div>
            </div>
        </section>
    )
}
