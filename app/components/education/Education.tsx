import React from "react";
import EducationChild from "@/app/components/education/EducationChild";
import { useTranslations } from "next-intl";

const Education = () => {
  const t = useTranslations("education");
  return (
    <section className="mt-32 max-sm:mt-24">
      <article className="container max-sm:flex-col max-sm:justify-center">
        <h1 className="text-[32px] font-bold max-sm:text-[24px] leading-[53px] tracking-[-1px] text-[#042552] mb-[41px]">
          {t("yonalish")}
        </h1>
        <div className="w-full">
          <EducationChild
            kod="60320100"
            price="3200000"
            name={t("jurnalistika")}
            period={t("kunduzgi")}
            period2={t("bakalavr")}
            grant1={20}
            grant2={100}
            gacha={t("gacha")}
            dan={t("dan")}
          />
        </div>
        <div className="w-full">
          <EducationChild
            kod="60320100"
            price="3200000"
            name={t("jurnalistika")}
            period={t("kunduzgi")}
            period2={t("bakalavr")}
            grant1={20}
            grant2={100}
            gacha={t("gacha")}
            dan={t("dan")}
          />
        </div>
        <div className="w-full">
          <EducationChild
            kod="60320100"
            price="3200000"
            name={t("jurnalistika")}
            period={t("kunduzgi")}
            period2={t("bakalavr")}
            grant1={20}
            grant2={100}
            gacha={t("gacha")}
            dan={t("dan")}
          />
        </div>
      </article>
    </section>
  );
};

export default Education;
