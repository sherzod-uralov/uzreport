import React from "react";
import Image from "next/image";
import money from "@/public/assets/money.svg";
import checkImg from "@/public/assets/checked.svg";
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
  return (
    <div className="w-full flex border justify-between mb-5 max-md:flex-col max-md:justify-center pb-3 ">
      <div className="ml-20 max-md:ml-0 mt-5 mb-5 text-center">
        <p className="text-[#042552] text-[25px] font-bold leading-[53px] tracking-[-1px] max-md:text-[30px] ">
          {kod} - {name}
        </p>
        <div className="flex max-sm:justify-center items-center mt-5">
          <button className="  rounded-xl border px-4 py1 border-[#46658B] w-[100px] h-[24px]  max-md:px-0">
            <h2 className="text-sm font-bold leading-5 text-center text-[#46658B]">
              {period}{" "}
            </h2>
          </button>
          <button className=" ml-4 rounded-xl border  border-[#46658B] w-[100px] bg-[#0D59EF26] h-[24px] max-md:px-0">
            <h2 className="text-sm font-bold leading-5 text-center text-[#46658B]">
              {period2}
            </h2>
          </button>
        </div>
      </div>
      <div className="px-20 mt-5 max-sm:px-5">
        <div className="flex items-center max-sm:justify-start">
          <Image src={money} alt="img" className="w-[30px]" />
          <p className="text-xl font-semibold leading-[42px] tracking-[-1px] ml-3 text-[#042552]  max-md:text-2xl max-sm:text-xl">
            {price} so'm{" "}
          </p>
        </div>
        <div className="flex items-center mt-5 max-sm:justify-between">
          <Image src={checkImg} alt="img" className="w-[30px]" />
          <p className="text-xl font-semibold leading-[42px] tracking-[-1px] ml-3 text-[#042552]  max-md:text-[18px] max-sm:text-[15px]">
            20 % - {dan} 100 % {gacha} so'm{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationChild;
