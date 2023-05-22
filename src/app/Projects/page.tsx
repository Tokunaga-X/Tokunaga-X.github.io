import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import MovingPicture from "../../../public/moving-picture.png"
import { faClapperboard } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Projects() {
    const getCard = () => {
        return (
            <>
                <div className="w-[53rem] rounded-[1.7rem] shadow-[0_0_10px_rgba(0,0,0,.2)] overflow-hidden">
                    <a
                        href="https://github.com/Tokunaga-X"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={MovingPicture}
                            alt="moving-picture"
                            className="translate-y-0 transition-transform duration-[10s] hover:translate-y-[-52%]"
                        ></Image>
                    </a>
                </div>
                <div className="w-[30rem] mx-auto flex flex-col justify-center items-center text-center text-[1.7rem] font-medium">
                    <h3 className="text-[1.7rem] mb-8 font-bold uppercase">
                        Moving-Picture
                        <FontAwesomeIcon
                            icon={faClapperboard}
                            className="text-3xl"
                            style={{ marginLeft: "5px", color: "green" }}
                        />
                    </h3>
                    <p className="text-center mb-4 text-[#767676]">
                        A gym website is a comprehensive resource for fitness
                        information, class schedules, membership options, and
                        tools to help users achieve their fitness goals.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <p className="text-center shadow-[0_0_10px_rgba(0,0,0,.1)] text-[1.7rem] font-semibold py-4 px-[1.3rem]">
                            React
                        </p>
                        <p className="text-center shadow-[0_0_10px_rgba(0,0,0,.1)] text-[1.7rem] font-semibold py-4 px-[1.3rem]">
                            Scss
                        </p>
                    </div>
                    <div className="w-full mt-12 flex justify-evenly gap-4">
                        <div className="flex items-center hover:text-font-blue transition-all duration-500 hover:cursor-pointer gap-[5px]">
                            <p className="text-[1.7rem] font-medium">Code</p>
                            <a
                                className=""
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
                        <div className="flex items-center hover:text-font-blue transition-all duration-500 hover:cursor-pointer gap-[5px]">
                            <p className="text-[1.7rem] font-medium">
                                Live Demo
                            </p>
                            <a
                                className=""
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
                </div>
            </>
        )
    }

    return (
        <section className="bg-grey-bg" id="projects">
            <div className="max-w-[107rem] mx-auto mb-24">
                <p className="section-title">PORTFOLIO</p>
                <h3 className="section-header">
                    Each project is a unique piece of development 🧩
                </h3>
            </div>
            <ul className="flex flex-col items-center gap-20 max-w-[107rem] mx-auto">
                <li className="project-card-left">{getCard()}</li>
                <li className="project-card-right">{getCard()}</li>
                <li className="project-card-left">{getCard()}</li>
                <li className="project-card-right">{getCard()}</li>
            </ul>
        </section>
    )
}
