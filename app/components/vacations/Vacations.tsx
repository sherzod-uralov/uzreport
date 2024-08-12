import React from "react";
import Image from "next/image";
import dots from "@/public/assets/dots.svg";
import { useTranslations } from "next-intl";
import cardImg1 from "@/public/assets/news_white_on_transparent 1.svg";
import cardImg2 from "@/public/assets/speech_white_on_transparent 1.svg";
import cardImg3 from "@/public/assets/image_white_on_transparent 1.svg";
import cardImg4 from "@/public/assets/technology_white_on_transparent 1.svg";
import cardImg5 from "@/public/assets/computer_white_on_transparent 1.svg";
import cardImg6 from "@/public/assets/user_generated_content_white_on_transparent 1.svg";
import cardImg7 from "@/public/assets/music_white_on_transparent 1.svg";
import cardImg8 from "@/public/assets/social_media_white_on_transparent 1.svg";

const Vacations = () => {
  const t = useTranslations("vacations");
  console.log(t("cards"));
  return (
    <section className="pt-[360px]">
      <article className="container ">
        <div className="flex justify-center items-center mt-5 mb-[74px] ">
          <Image
            src={dots}
            alt="dots"
            className="left-0 absolute w-[70px] max-xl:hidden"
          />
          <h1 className=" text-[40px] font-bold leading-[53px] tracking-[-1px] text-center max-sm:text-[17px] max-sm:leading-none max-sm:tracking-normal max-lg:text-[18] ">
            {t("title1")} <span className="text-[#3D9386]">{t("title2")} </span>{" "}
            {t("title3")}
          </h1>
        </div>
        <div className="flex  flex-wrap  gap-3 justify-center ">
          {[
            cardImg1,
            cardImg2,
            cardImg3,
            cardImg4,
            cardImg5,
            cardImg6,
            cardImg7,
            cardImg8,
          ].map((i, e) => (
            <div className="flex flex-grow border border-solid border-[#EBEFF6] w-[300px]  rounded-md  items-center max-sm:w-full   ">
              <div
                style={{ backgroundColor: t(`cards.${e}.cardColor`) }}
                className="w-[60px] h-[60px] flex justify-center items-center ml-[30px] mt-[30px] mb-[30px] rounded-[10px]"
              >
                <Image src={i} alt="" />
              </div>
              <div className=" ml-[20px]">
                <h1 className="text-lg font-bold leading-[26px]">
                  {" "}
                  {t(`cards.${e}.title`)}
                </h1>
                <p className="text-base font-normal leading-7">
                  {" "}
                  {t(`cards.${e}.slots`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Vacations;
