import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Footer() {
    return (
        <section className="bg-[#2d2e32] py-20 px-0">
            <div className="flex justify-between items-center px-16">
                <p className="text-white text-[1.7rem] font-bold">
                    Copyright © 2023. All rights are reserved
                </p>
                <div className="flex gap-8">
                    <a
                        href=""
                        className="hover:scale-125 transition-transform duration-500"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            style={{ color: "#ffffff" }}
                            className="text-4xl"
                        />
                    </a>
                    <a
                        href=""
                        className="hover:scale-125 transition-transform duration-500"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            style={{ color: "#ffffff" }}
                            className="text-4xl"
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}
