export default function Contact() {
    return (
        <section>
            <p className="section-title text-left">CONTACT</p>
            <h3 className="section-header text-left">
                Don&apos;t be shy! Hit me up! 👇
            </h3>
            <div className="flex flex-wrap gap-32 mt-24">
                <div className="flex gap-6 items-center">
                    <div className="stack-li"></div>
                    <div className="text-[1.7rem]">
                        <p className="text-[#2d2e32] font-bold">Location</p>
                        <p className="text-[#767676]">Hangzhou, China</p>
                    </div>
                </div>
                <div className="flex gap-6 items-center">
                    <div className="stack-li"></div>
                    <div className="text-[1.7rem]">
                        <p className="text-[#2d2e32] font-bold">Mail</p>
                        <p className="text-[#767676]">officialxyc@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
