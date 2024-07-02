import Link from "next/link";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface props {
  title: string;
  Linkpath?: string;
  NextSlide: any;
  LastSlide: any;
}

const TitleSection: React.FC<props> = ({
  title,
  NextSlide,
  LastSlide,
  Linkpath,
}) => {
  return (
    <div className="w-full flex items-center justify-between">
      <h1 className="text-black font-semibold text-base sm:text-2xl xl:text-3xl ">
        {title}
      </h1>

      <div className="flex items-center gap-2 sm:gap-6">
        {Linkpath && (
          <Link
            href={Linkpath}
            className="hover:text-[#333333] text-[#787878] font-semibold cursor-pointer text-[10px] sm:text-base"
          > View All</Link>
        ) }
        <div className="flex items-center gap-1 sm:gap-2 2xl:gap-3 ">
          <button
            onClick={LastSlide}
            className="bg-[#F8F8F8] rounded-lg grid items-center justify-center cursor-pointer hover:text-white hover:bg-scdOrang active:bg-[#ec9b22] text-xs h-5 w-5 sm:text-xl sm:h-9 sm:w-9  2xl:h-11 2xl:w-11 2xl:text-2xl  "
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={NextSlide}
            className="bg-[#F8F8F8] rounded-lg grid items-center justify-center cursor-pointer hover:text-white hover:bg-scdOrang active:bg-[#ec9b22] text-xs h-5 w-5 sm:text-xl sm:h-9 sm:w-9  2xl:h-11 2xl:w-11 2xl:text-2xl  "
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
