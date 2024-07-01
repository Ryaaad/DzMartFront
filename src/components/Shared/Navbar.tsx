import { FaRegHeart } from "react-icons/fa";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { LuUser2 } from "react-icons/lu";

export default function Navbar() {
  return (
    <div className="border-b border-b-[#F7F7F7] border-solid w-full flex p-3 flex-col items-center gap-2 sm:gap-0 sm:flex-row sm:justify-between sm:p-4 sm:py-3 md:p-5 2xl:px-12">
          <div className="flex items-center gap-1 md:gap-2 2xl:gap-3 ">
          <Image src={logo} alt="logo" className="w-auto h-8 sm:h-10 md:h-[52px] lg:h-14 " height={54}></Image>
          <div className="">
            <h1 className="font-bold text-lg tracking-wider sm:text-2xl md:text-3xl 2xl:text-4xl">
              DZIR<strong className="text-[#ffc43f]">MART </strong>
            </h1>
            <p className="uppercase text-gray-400 text-[10px] tracking-widest sm:text-xs sm:tracking-[0.2rem] md:text-sm md:tracking-[0.27rem] 2xl:text-base 2xl:tracking-[.35rem] "> Grocery STORE </p>
          </div>
        </div>
      <ul className="flex items-center gap-2 sm:gap-3 2xl:gap-4 ">
        <li className="bg-[#F8F8F8] rounded-full grid items-center justify-center cursor-pointer text-sm h-6 w-6 sm:text-xl sm:h-9 sm:w-9 2xl:h-11 2xl:w-11 2xl:text-2xl  ">
          <LuUser2 />
        </li>
        <li className="bg-[#F8F8F8] rounded-full grid items-center justify-center cursor-pointer text-sm h-6 w-6 sm:text-xl sm:h-9 sm:w-9 2xl:h-11 2xl:w-11 2xl:text-2xl  ">
          <FaRegHeart />
        </li>
        <li className="bg-[#F8F8F8] rounded-full grid items-center justify-center cursor-pointer text-sm h-6 w-6 sm:text-xl sm:h-9 sm:w-9 2xl:h-11 2xl:w-11 2xl:text-2xl  ">
          <FaRegHeart />
        </li>
      </ul>
    </div>
  );
}
