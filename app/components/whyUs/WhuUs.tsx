import React from "react";
import { useTranslations } from "next-intl";
import whyImg from "@/public/assets/whyUs.svg";
import Image from "next/image";
const WhuUs = () => {
  const t = useTranslations("WhyUs");

  const whyUs = [
    {
      title: t("reasons.0"),
    },
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
    <section className="container">
      <div className="flex justify-between ">
        <div>
          <h1 className=" text-lg font-semibold leading-[25px] text-[#46658B]">
            {t("title")}
          </h1>

          <Image src={whyImg} alt="img" className="w-[620px] h-[580px]" />
        </div>
        <div>
          <h1 className="text-[40px] font-bold leading-[53px] tracking-[-1px] text-[#042552]">
            {t("reasons.0")}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default WhuUs;
