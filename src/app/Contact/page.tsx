import {
    faEnvelopeOpenText,
    faMapLocation,
} from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Contact() {
    return (
        <section className="py-40" id="contact">
            <p className="section-title text-left">CONTACT</p>
            <h3 className="section-header text-left">
                Don&apos;t be shy! Hit me up! 👇
            </h3>
            <div className="flex flex-wrap gap-32 mt-24">
                <div className="flex gap-6 items-center">
                    <div className="stack-li w-32 h-32 flex justify-center items-center">
                        <FontAwesomeIcon
                            icon={faMapLocation}
                            style={{ color: "#147efb" }}
                            className="text-5xl"
                        />
                    </div>
                    <div className="text-[1.7rem]">
                        <p className="text-[#2d2e32] font-bold">Location</p>
                        <p className="text-[#767676]">Hangzhou, China</p>
                    </div>
                </div>
                <div className="flex gap-6 items-center">
                    <div className="stack-li w-32 h-32 flex justify-center items-center">
                        <FontAwesomeIcon
                            icon={faEnvelopeOpenText}
                            style={{ color: "#147efb" }}
                            className="text-5xl"
                        />
                    </div>
                    <div className="text-[1.7rem]">
                        <p className="text-[#2d2e32] font-bold">Mail</p>
                        <p className="text-[#767676]">officialxyc@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
