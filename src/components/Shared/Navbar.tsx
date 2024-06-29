import { FaRegHeart } from "react-icons/fa";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { LuUser2 } from "react-icons/lu";

export default function Navbar() {
  return (
    <div className=" p-5 border-b border-b-[#F7F7F7] border-solid w-full flex justify-between items-center 2xl:px-28 ">
          <div className="flex gap-2 items-center 2xl:gap-3 ">
          <Image src={logo} alt="logo" className="" height={54}></Image>
          <div className="">
            <h1 className="text-3xl font-bold tracking-wider 2xl:text-4xl">
              DZIR<strong className="text-[#ffc43f]">MART </strong>
            </h1>
            <p className="uppercase text-gray-400 text-sm tracking-[0.27rem] 2xl:text-base 2xl:tracking-[.35rem] "> Grocery STORE </p>
          </div>
        </div>
      <ul className="flex items-center gap-3 2xl:gap-4 ">
        <li className="bg-[#F8F8F8] rounded-full grid items-center justify-center text-xl h-9 w-9 cursor-pointer 2xl:h-11 2xl:w-11 2xl:text-2xl  ">
          <LuUser2 />
        </li>
        <li className="bg-[#F8F8F8] rounded-full grid items-center justify-center text-xl h-9 w-9 cursor-pointer 2xl:h-11 2xl:w-11 2xl:text-2xl  ">
          <FaRegHeart />
        </li>
      </ul>
    </div>
  );
}
