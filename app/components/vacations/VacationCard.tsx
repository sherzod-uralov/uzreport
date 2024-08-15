import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface cardProps {
  imgSrc: any;
  title: string;
  slots: string;
  cardColor: string;
  index: number;
}

const Card = ({ imgSrc, title, slots, cardColor, index }: cardProps) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        transition: 0.6,
        y: 0,
        duration: 0.3,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 100%",
          toggleActions: "play none none none",
        },
        delay: 0.1 + index * 0.1,
      },
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex flex-grow border border-solid border-[#EBEFF6] w-[300px] rounded-md items-center max-sm:w-full vacans transition-shadow ease-in-out"
    >
      <div
        style={{ backgroundColor: cardColor }}
        className="w-[60px] h-[60px] flex justify-center items-center ml-[30px] mt-[30px] mb-[30px] rounded-[10px]"
      >
        <Image src={imgSrc} alt={title} />
      </div>
      <div className="ml-[20px]">
        <h1 className="text-lg font-bold leading-[26px]">{title}</h1>
        <p className="text-base font-normal leading-7">{slots}</p>
      </div>
    </div>
  );
};

export default Card;
