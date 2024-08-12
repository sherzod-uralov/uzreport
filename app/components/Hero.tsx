"use client";

import React from "react";
import { useTranslations } from "next-intl";
import pencil from "@/public/assets/pen.svg";
import location from "@/public/assets/location.svg";
import position_green from "@/public/assets/Ellipse 46.png";
import position_blue from "@/public/assets/Ellipse 47.png";
import position_white from "@/public/assets/Ellipse 49.png";
import position_blue_stick from "@/public/assets/Ellipse 48.png";
import swiper_image from "@/public/assets/hero_image.png";
import dots from "@/public/assets/dots (1).svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade } from "swiper/modules";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section className="mt-[150px] relative">
      <article className="container">
        <Image
          className="absolute right-2 max-xl:hidden"
          src={dots}
          alt="green"
        />
        <div className="flex justify-between max-xl:flex-col">
          <div className="max-xl:block m-auto">
            <h1 className="text-[#042552] font-[700] text-[68px]">
              {t("uzreoport")}
            </h1>
            <p className="text-[36px] font-[500] leading-[40px] pt-[7px] max-md:w-auto w-[665px]">
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
          <div className="relative mt-28 max-md:hidden max-xl:mt-56 max-xl:m-auto w-[500px] max-xl:w-[500px]">
            <Image
              className="absolute z-10 left-0"
              src={position_green}
              alt="green"
            />
            <Image
              className="absolute z-0  -top-4 -left-1"
              src={position_blue}
              alt="green"
            />
            <Image
              className="absolute z-20 w-[450px] rotate-[10deg] -top-1 left-2"
              src={position_white}
              alt="green"
            />
            <Image
              className="absolute z-0 -rotate-[5deg] -top-3 left-1.5"
              src={position_blue_stick}
              alt="green"
            />
            <div className="absolute -left-12 -top-52 w-[560px] h-[610px] rounded-[45px] z-30">
              <Swiper
                effect="fade"
                modules={[EffectFade]}
                className="max-w-full absolute top-0 h-full"
              >
                <SwiperSlide className="flex items-center justify-center">
                  <Image
                    src={swiper_image}
                    className="object-cover rounded-[45px] h-full"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center">
                  <Image
                    src={swiper_image}
                    className="object-cover rounded-[45px] h-full"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
              <div className="w-[319px] absolute -right-20 bottom-20 box-shadow-hero pt-[17px] pr-[47px] pl-[17px] pb-[26px] z-40 rounded-[11.51px] bg-white h-[137px]">
                <h2 className="font-[700] text-[#042552] text-[22px] leading-[28.76px]">
                  {t("professional")}
                </h2>
                <div className="flex items-center mt-6 justify-between">
                  <div>
                    <span className="w-[46px] m-auto mb-[8px] relative h-[5px] bg-[#43BA7F] block">
                      <span className="absolute rounded-full w-4 z-10 h-4 left-[14px] -top-[5px] bg-[#43BA7F] block"></span>
                    </span>
                    <p className="font-[600] text-[#43BA7F] text-center">
                      {t("network")}
                    </p>
                  </div>
                  <div>
                    <span className="w-[46px] m-auto mb-[8px] relative h-[5px] bg-[#0085FF] block">
                      <span className="absolute rounded-full w-4 z-10 h-4 left-[14px] -top-[5px] bg-[#0085FF] block"></span>
                    </span>
                    <p className="font-[600] text-[#0085FF80] text-center">
                      {t("company")}
                    </p>
                  </div>
                  <div>
                    <span className="w-[46px] m-auto mb-[8px] relative h-[5px] bg-[#F98600] block">
                      <span className="absolute rounded-full w-4 z-10 h-4 left-[14px] -top-[5px] bg-[#F98600] block"></span>
                    </span>
                    <p className="font-[600] text-[#F9860080] text-center">
                      {t("university_section")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
