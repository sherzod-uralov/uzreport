import React from "react";
import { useTranslations } from "next-intl";

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
      <div>
        <h1 className="text-[40px] font-bold leading-[53px] tracking-[-1px] text-[#042552]">
          {t("title")}{" "}
        </h1>
        {t("reasons.0")}
      </div>
    </section>
  );
};

export default WhuUs;
