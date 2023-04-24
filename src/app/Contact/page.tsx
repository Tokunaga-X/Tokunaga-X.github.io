"use client"

import {
    faEnvelopeOpenText,
    faMapLocation,
} from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Contact() {
    const iconOnClick = (targetId: string) => {
        document.getElementById(`${targetId}`)?.click()
    }

    return (
        <section className="py-40" id="contact">
            <p className="section-title text-left">CONTACT</p>
            <h3 className="section-header text-left">
                Don&apos;t be shy! Hit me up! 👇
            </h3>
            <div className="flex flex-wrap gap-32 mt-24">
                <div className="flex gap-6 items-center">
                    <div
                        className="stack-li w-32 h-32 flex justify-center items-center hover:cursor-pointer"
                        onClick={() => iconOnClick("google-map")}
                    >
                        <FontAwesomeIcon
                            icon={faMapLocation}
                            style={{ color: "#147efb" }}
                            className="text-5xl"
                        />
                    </div>
                    <div className="text-[1.7rem]">
                        <p className="text-[#2d2e32] font-bold">Location</p>
                        <p className="text-[#767676]">
                            <a
                                id="google-map"
                                href="https://goo.gl/maps/pfK871NcLejwEA8Q8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-font-blue hover:cursor-pointer"
                            >
                                Hangzhou, China
                            </a>
                        </p>
                    </div>
                </div>
                <div className="flex gap-6 items-center">
                    <div
                        className="stack-li w-32 h-32 flex justify-center items-center hover:cursor-pointer"
                        onClick={() => iconOnClick("email")}
                    >
                        <FontAwesomeIcon
                            icon={faEnvelopeOpenText}
                            style={{ color: "#147efb" }}
                            className="text-5xl"
                        />
                    </div>
                    <div className="text-[1.7rem]">
                        <p className="text-[#2d2e32] font-bold">Mail</p>
                        <p className="text-[#767676]">
                            <a
                                id="email"
                                href="mailto:officialxyc@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-font-blue hover:cursor-pointer"
                            >
                                officialxyc@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
