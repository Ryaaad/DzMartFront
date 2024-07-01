import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { PiYoutubeLogo } from "react-icons/pi";
import { TiSocialLinkedin,TiSocialFacebook } from "react-icons/ti";

export default function Footer() {
  return (
    <div className="w-full flex items-center gap-5 flex-col p-4 py-3 sm:gap-0 sm:flex-row sm:justify-between md:p-5 md:py-8 2xl:px-12">
      <div className="flex flex-col gap-4 justify-center items-start sm:gap-6 ">
      <div className="flex items-center gap-1 md:gap-2 2xl:gap-3 ">
          <Image src={logo} alt="logo" className="w-auto h-8 sm:h-10 md:h-[52px] lg:h-14 " height={54}></Image>
          <div className="">
            <h1 className="font-bold text-lg tracking-wider sm:text-2xl md:text-3xl 2xl:text-4xl">
              DZIR<strong className="text-[#ffc43f]">MART </strong>
            </h1>
            <p className="uppercase text-gray-400 text-[10px] tracking-[0.1rem] sm:text-xs sm:tracking-[0.2rem] md:text-sm md:tracking-[0.27rem] 2xl:text-base 2xl:tracking-[.35rem] "> Grocery STORE </p>
          </div>
        </div>
        <ul className="flex items-center gap-1 sm:gap-2 2xl:gap-3">
          <li className="cursor-pointer hover:bg-[#F8F8F8] hover:text-[#000] grid items-center justify-center text-[#747474] 
          rounded-md border border-b-[#EFEFEF] border-solid text-sm h-6 w-6 sm:h-8 sm:w-8 sm:text-lg md:text-xl md:h-[38px] md:w-[42px] 2xl:h-10 2xl:w-11 ">
          <TiSocialFacebook />
          </li>
          <li className="cursor-pointer hover:bg-[#F8F8F8] hover:text-[#000] grid items-center justify-center text-[#747474] 
          rounded-md border border-b-[#EFEFEF] border-solid text-sm h-6 w-6 sm:h-8 sm:w-8 sm:text-lg md:text-xl md:h-[38px] md:w-[42px] 2xl:h-10 2xl:w-11 ">
          <CiTwitter />
          </li>
          <li className="cursor-pointer hover:bg-[#F8F8F8] hover:text-[#000] grid items-center justify-center text-[#747474] 
          rounded-md border border-b-[#EFEFEF] border-solid text-sm h-6 w-6 sm:h-8 sm:w-8 sm:text-lg md:text-xl md:h-[38px] md:w-[42px] 2xl:h-10 2xl:w-11 ">
          <IoLogoInstagram />
          </li>
          <li className="cursor-pointer hover:bg-[#F8F8F8] hover:text-[#000] grid items-center justify-center text-[#747474] 
          rounded-md border border-b-[#EFEFEF] border-solid text-sm h-6 w-6 sm:h-8 sm:w-8 sm:text-lg md:text-xl md:h-[38px] md:w-[42px] 2xl:h-10 2xl:w-11 ">
          <PiYoutubeLogo />
          </li>
          <li className="cursor-pointer hover:bg-[#F8F8F8] hover:text-[#000] grid items-center justify-center text-[#747474] 
          rounded-md border border-b-[#EFEFEF] border-solid text-sm h-6 w-6 sm:h-8 sm:w-8 sm:text-lg md:text-xl md:h-[38px] md:w-[42px] 2xl:h-10 2xl:w-11">
          <TiSocialLinkedin />
          </li>
        </ul>
      </div>
      <div className="w-52 sm:w-60 lg:w-96">
        <h1 className="text-black sm:text-lg font-semibold w-max 2xl:text-2xl ">Our Newsletter</h1>
        <p className="text-[#747474] leading-4 text-xs my-2 pr-2 sm:leading-5 sm:my-3 sm:pr-3 sm:text-sm lg:text-base lg:leading-7 2xl:text-lg 2xl:leading-9 ">Subscribe to our newsletter to get updates about our grand offers.</p>
        <div className="flex items-center mt-1 2xl:mt-2">
            <input type="email" placeholder="Email Address" className="p-3 bg-[#F8F8F8] text-[#747474] rounded-l-md w-2/3 h-8 text-xs sm:h-10 sm:text-sm lg:text-base 2xl:h-12 2xl:p-4"/>
            <button className="bg-[#212529] p-2 text-[#fff] rounded-r-md h-8 text-xs sm:h-10 sm:text-sm lg:text-base 2xl:h-12 2xl:p-3 ">Subscrib</button>
            </div>
      </div>
    </div>
  );
}
