"use client";

import AboutImg from "@/../public/about.png";
import Image from "next/image";
import { LanguageContext } from "../store/LanguageContext";
import { translations } from "../constants/translations";
import { useContext } from "react";

export default function About() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations];

  return (
    <section id="about">
      <div className="max-w-[107rem] mx-auto flex flex-col lg:flex-row items-center lg:justify-center lg:gap-[4vw]">
        <Image
          src={AboutImg}
          alt="About me"
          className="w-[41rem] sm:h-[35rem] h-auto mb-14 rounded-[1.7rem]"
        ></Image>
        <div className="max-w-[54rem] pr-6">
          <p className="section-title">{t.aboutTitle}</p>
          <h3 className="section-header">{t.aboutDescription}</h3>
          <p className="font-special text-[#767676] dark:text-white text-[1.7rem] font-[500] mb-8">
            {t.aboutMe1}
          </p>
        </div>
      </div>
    </section>
  );
}
