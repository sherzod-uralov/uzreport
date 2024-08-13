"use client";

import React from "react";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <section className="mt-10">
      <article className="container">
        <h2 className="text-[32px] font-bold leading-[53px] tracking-[-1px] text-[#042552]">
          {t("contact_information")}
        </h2>
        <div className="mt-10">
          <div className="flex bg-white items-center justify-between">
            <div>
              <h2>{t("contact_information")}</h2>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
