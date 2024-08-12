import React from "react";
import { useTranslations } from "next-intl";
import whyImg from "@/public/assets/whyUs.svg";
import checkmark from "@/public/assets/checkmark.svg";
import Image from "next/image";
const WhuUs = () => {
  const t = useTranslations("WhyUs");

  const whyUs = [
    {
      title: t("reasons.1"),
    },
    {
      title: t("reasons.2"),
    },
    {
      title: t("reasons.3"),
    },
    {
      title: t("reasons.4"),
    },
    {
      title: t("reasons.5"),
    },
  ];

  return (
    <section className="mt-[150px] max-lg:mt-12">
      <article className="container">
        <div className="flex justify-between max-lg:flex-col">
          <div>
            <Image
              src={whyImg}
              alt="img"
              className="w-[620px] object-contain max-lg:m-auto max-lg:block h-auto"
            />
          </div>
          <div className="max-sm:mt-5">
            <h1 className="text-[32px] text-center font-bold leading-[53px] tracking-[-1px] text-[#042552]">
              {t("reasons.0")}
            </h1>
            <div className="mt-[60px] w-full">
              <div className="flex max-lg:items-center max-sm:items-start flex-col items-start gap-[38px]">
                {whyUs.map((item, index) => (
                  <div
                    className={`${index % 2 === 0 ? "lg:pl-20" : "pl-0"} flex gap-[39px] items-center justify-between`}
                  >
                    <Image src={checkmark} alt={index + "-image"} />
                    <h2 className="max-sm:text-[18px] text-[#042552] font-[500] text-[22px]">
                      {item.title}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default WhuUs;
