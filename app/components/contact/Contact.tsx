"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { BiPhone } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import image from "@/public/assets/Ellipse 793.png";
import layer from "@/public/assets/layer.png";
import image2 from "@/public/assets/Ellipse 794.png";
import Image from "next/image";

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <section className="mt-10">
      <article className="container">
        <h2 className="text-[32px] max-sm:text-[24px] font-bold leading-[53px] tracking-[-1px] text-[#042552]">
          {t("contact_information")}
        </h2>
        <div className="mt-10">
          <div className="flex max-xl:flex-col w-full gap-3 bg-gray-100 rounded-md p-[10px] items-start justify-center">
            <div className="bg-[#46658B] w-full relative rounded-xl max-sm:pl-[20px] pl-[40px] py-12">
              <h2 className="text-white max-sm:hidden block text-[28px] pb-[80px] font-semibold">
                {t("contact_use")}
              </h2>
              <div className="flex mb-[150px] max-sm:gap-[40px] gap-[50px] flex-col">
                <div className="flex gap-[25px] max-sm:gap-3 items-center">
                  <BiPhone className="w-6 h-6 text-white" />
                  <a
                    className="text-white text-base font-normal"
                    href="tel:+99855 508 44 00"
                  >
                    +99855 508 44 00
                  </a>
                </div>
                <div className="flex gap-[25px] max-sm:gap-3 items-center">
                  <MdEmail className="w-6 h-6 text-white" />
                  <a
                    className="text-white text-base font-normal"
                    href="tel:+99855 508 44 00"
                  >
                    info@nordicuniversity.org
                  </a>
                </div>
                <div className="flex gap-[25px] max-sm:gap-3 items-center">
                  <FaLocationDot className="w-6 h-6 text-white" />
                  <a
                    className="text-white text-base font-normal"
                    href="tel:+99855 508 44 00"
                  >
                    Toshkent shahar, Chilonzor tumani, Bunyodkor ko‘chasi, 8/2
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-[24px]">
                <div className="bg-primary flex items-center hover:bg-white transition-all group justify-center w-[35px] h-[35px] rounded-full">
                  <FaInstagram className="text-white text-xl group-hover:text-black" />
                </div>
                <div className="bg-primary flex items-center hover:bg-white transition-all group justify-center w-[35px] h-[35px] rounded-full">
                  <FaTelegram className="text-white text-xl group-hover:text-black" />
                </div>
                <div className="bg-primary flex items-center hover:bg-white transition-all group justify-center w-[35px] h-[35px] rounded-full">
                  <FaFacebook className="text-white text-xl group-hover:text-black" />
                </div>
              </div>
              <Image src={image} className="absolute bottom-0 right-0" alt="" />
              <Image
                src={image2}
                className="absolute bottom-20 right-16"
                alt=""
              />
            </div>
            <div className="w-[1200px] h-full max-xl:w-full max-xl:gap-4 max-md:flex-col max-xl:flex">
              <div className="relative h-[280px] group rounded-md w-full overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23977.31661227081!2d69.21817961753031!3d41.305283213841385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b359ab47501%3A0x618cedae4747d331!2sNordic%20International%20University!5e0!3m2!1sru!2s!4v1723535500885!5m2!1sru!2s"
                  width="600"
                  style={{ border: "none" }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="w-full h-full"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute max-sm:hidden inset-0 group-hover:left-[100%] bg-black bg-opacity-40 flex items-center justify-center text-white opacity-100 transition-all duration-300">
                  <h2 className="text-xl -tracking-tighter group-hover:hidden">
                    {" "}
                    Chilonzor filiali{" "}
                  </h2>
                </div>
              </div>
              <div className="relative h-[280px] group rounded-md w-full overflow-hidden mt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23977.31661227081!2d69.21817961753031!3d41.305283213841385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba61d1cdb9b%3A0x3da780ce3c5c96af!2sNordic%20International%20University%20Campus%202!5e0!3m2!1sru!2s!4v1723539556704!5m2!1sru!2s"
                  style={{ border: "none" }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="w-full h-full"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute max-sm:hidden inset-0 group-hover:right-[100%] bg-black bg-opacity-40 flex items-center justify-center text-white opacity-100 transition-all duration-300">
                  <h2 className="text-xl -tracking-tighter group-hover:hidden">
                    {" "}
                    Xadra filiali{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
