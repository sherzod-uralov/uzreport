"use client";

import React from "react";
import { useTranslations } from "next-intl";
import pencil from "@/public/assets/pen.svg";
import location from "@/public/assets/location.svg";
import Image from "next/image";

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <section className="mt-[100px]">
      <article className="container">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-[#042552] font-[700] text-[45px]">
              {t("uzreoport")}
            </h1>
            <p className="text-[25px] font-[500] leading-[40px] pt-[7px] w-[405px]">
              {t("hero_p")} <span className="text-primary">{t("hero_p1")}</span>
            </p>
            <div className="flex items-center gap-[17px] pt-[40px]">
              <div className="flex gap-3">
                <Image src={pencil} alt="pen" />
                <p className="text-[16px] text-[#8191A8] font-[500]">
                  {t("agency")}
                </p>
              </div>
              <span className="border-gray-200 h-[24px] border-[2px]"></span>
              <div className="flex gap-3">
                <Image src={location} alt="pen" />
                <p className="text-[16px] text-[#8191A8] font-[500]">
                  {t("university")}
                </p>
              </div>
              <button className="bg-primary text-white py-[14px] px-[10px] rounded-full">
                {t("apply")}
              </button>
            </div>
          </div>
          <div>rightPosition</div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
