import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import money from "@/public/assets/money.svg";
import checkImg from "@/public/assets/checked.svg";

// Регистрируем ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface EducationChildProps {
  kod?: string;
  price: string;
  name: string;
  period: string;
  period2: string;
  grant1: number;
  grant2: number;
  gacha: string;
  dan: string;
}

const EducationChild = ({
  kod,
  price,
  name,
  period2,
  period,
  gacha,
  dan,
}: EducationChildProps) => {
  const leftSectionRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      leftSectionRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: leftSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      rightSectionRef.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: rightSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <div className="w-full overflow-hidden flex border justify-between mb-5 max-md:flex-col max-md:justify-center pb-3">
      <div
        ref={leftSectionRef}
        className="ml-20 max-md:ml-0 mt-5 mb-5 text-center"
      >
        <p className="text-[#042552] text-[25px] font-bold leading-[53px] tracking-[-1px] max-md:text-[30px]">
          {kod} - {name}
        </p>
        <div className="flex max-sm:justify-center items-center mt-5">
          <button className="rounded-2xl border pb-1 border-[#46658B] px-3 py-1">
            <h2 className="text-sm font-bold leading-5 text-center text-[#46658B]">
              {period}
            </h2>
          </button>
          <button className="ml-4 rounded-2xl border border-[#46658B] px-3 py-1 bg-[#0D59EF26]">
            <h2 className="text-sm font-bold leading-5 text-center text-[#46658B]">
              {period2}
            </h2>
          </button>
        </div>
      </div>
      <div ref={rightSectionRef} className="px-20 mt-5 max-sm:px-5">
        <div className="flex items-center max-sm:justify-start">
          <Image src={money} alt="img" className="w-[30px]" />
          <p className="text-xl font-semibold leading-[42px] tracking-[-1px] ml-3 text-[#042552] max-md:text-2xl max-sm:text-xl">
            {price}
          </p>
        </div>
        <div className="flex items-center mt-5">
          <Image src={checkImg} alt="img" className="w-[30px]" />
          <p className="text-xl font-semibold leading-[42px] tracking-[-1px] ml-3 text-[#042552] max-md:text-[18px] max-sm:text-[15px]">
            20 % - {dan} 100 % {gacha}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationChild;
