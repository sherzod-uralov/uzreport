import React, {useEffect, useRef} from "react";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Vacations = () => {
  const t = useTranslations("vacations");
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          transition: 0.7,
          y: 0,
          duration: 0.3,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        },
      );
    });
  }, []);

  return (
    <section id="work" className="pt-[360px] max-sm:pt-20">
      <article className="container ">
        <div className="flex justify-center items-center mt-5 mb-[74px] ">
          <Image
            src={dots}
            alt="dots"
            className="left-0 absolute w-[70px] max-xl:hidden"
          />
          <h1 className=" text-[30px] font-bold leading-[53px] tracking-[-1px] text-center max-sm:text-[17px] max-sm:leading-[20px] max-sm:tracking-normal max-lg:text-xl ">
            {t("title1")} <span className="text-[#3D9386]">{t("title2")} </span>{" "}
            {t("title3")}
          </h1>
        </div>
        <div className="flex  flex-wrap  gap-3 justify-center  ">
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
            <div ref={(el:never) => cardsRef.current[e] = el} className="flex flex-grow border border-solid border-[#EBEFF6] w-[300px]  rounded-md  items-center max-sm:w-full  hover:shadow-[1px_0px_5px_3px_rgba(56,196,160,0.6)] transition ease-in-out delay-150  ">
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
