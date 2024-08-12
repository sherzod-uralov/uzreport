"use client";

import { useRouter, usePathname } from "next/navigation";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import logoUzreport from "@/public/assets/uzreport_logo.svg";
import logoNordic from "@/public/assets/university_logo.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const languages = [
  { value: "uz", label: "O‘zbek" },
  { value: "ru", label: "Русский" },
  { value: "en", label: "English" },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [defaultLang, setDefaultLang] = useState("uz");
  const t = useTranslations("nav");
  const [isTopLogo, setIsTopLogo] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTopLogo((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const lang = Cookies.get("lang") || "uz";
    setDefaultLang(lang);
  }, []);

  useEffect(() => {
    const pathSegments = pathname.split("/");
    const langInPath = pathSegments[1];

    if (["uz", "ru", "en"].includes(langInPath)) {
      setDefaultLang(langInPath);
      Cookies.set("lang", langInPath, { expires: 365 });
    }
  }, [pathname]);

  const changeLanguage = async (lang: string) => {
    router.push(`/${lang}`);
    Cookies.set("lang", lang, { expires: 365 });
  };

  return (
    <nav className="py-5">
      <div className="container">
        <div className="items-center flex justify-between">
          <div className="relative min-w-[140px] h-[70px] overflow-hidden">
            <Image
              src={logoUzreport}
              height={30}
              alt="Logo 1"
              className={`absolute object-contain h-6 transition-all duration-700 ${isTopLogo ? "top-6 opacity-100" : " top-full opacity-0"}`}
            />
            <Image
              src={logoNordic}
              alt="Logo 2"
              height={50}
              className={`absolute transition-all duration-700 ${isTopLogo ? "top-full opacity-0" : "top-4 opacity-100"}`}
            />
          </div>

          <ul className="flex items-center gap-12 font-[500]">
            <Link href={"/"}>{t("work")}</Link>
            <Link href={"/"}>{t("nima_uchun")}</Link>
            <Link href={"/"}>{t("category")}</Link>
            <Link href={"/"}>{t("contact")}</Link>
          </ul>
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#F1F8FF] h-10 w-28 px-4 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:border-[#3D9386] transition duration-300 ease-in-out transform hover:scale-105 flex justify-between items-center"
            >
              {languages.find((lang) => lang.value === defaultLang)?.label}
              <IoIosArrowDown />
            </button>
            {isOpen && (
              <div className="absolute z-[2000] mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.value}
                      onClick={() => changeLanguage(lang.value)}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
