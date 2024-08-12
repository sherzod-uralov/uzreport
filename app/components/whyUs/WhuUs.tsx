import React from 'react';
import {useTranslations} from "next-intl";

const WhuUs = () => {
    const t = useTranslations("WhyUs");
    return (
        <section className="container">
            <div>
                <h1 className="text-[40px] font-bold leading-[53px] tracking-[-1px] text-[#042552]">{t("title")} </h1>
                {
                    t("reasons.0")
                }
            </div>
        </section>

    );
};

export default WhuUs;