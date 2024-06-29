import logo from "../../../public/images/logo.png";
import Image from "next/image";
import { CiTwitter } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";
import { PiYoutubeLogo } from "react-icons/pi";
import { TiSocialLinkedin,TiSocialFacebook } from "react-icons/ti";


export default function Footer() {
  return (
    <div className=" p-5 w-full flex justify-between items-center 2xl:px-28">
      <div className="flex flex-col gap-6 justify-center items-start ">
        <div className="flex gap-2 items-center 2xl:gap-3 ">
          <Image src={logo} alt="logo" className="" height={54}></Image>
          <div className="">
            <h1 className="text-3xl font-bold tracking-wider 2xl:text-4xl">
              DZIR<strong className="text-[#ffc43f]">MART </strong>
            </h1>
            <p className="uppercase text-gray-400 text-sm tracking-[0.27rem] 2xl:text-base 2xl:tracking-[.35rem] "> Grocery STORE </p>
          </div>
        </div>
        <ul className="flex items-center gap-2 2xl:gap-3">
          <li className="cursor-pointer hover:bg-[#F8F8F8] hover:text-[#000] grid items-center justify-center text-xl text-[#747474] rounded-md h-[38px] w-[42px] border border-b-[#EFEFEF] border-solid 2xl:h-10 2xl:w-11 ">
          <TiSocialFacebook />
          </li>
          <li className="cursor-pointer hover:bg-[#F8F8F8] hover:text-[#000] grid items-center justify-center text-xl text-[#747474] rounded-md h-[38px] w-[42px] border border-b-[#EFEFEF] border-solid 2xl:h-10 2xl:w-11 ">
          <CiTwitter />
          </li>
          <li className="cursor-pointer hover:bg-[#F8F8F8] hover:text-[#000] grid items-center justify-center text-xl text-[#747474] rounded-md h-[38px] w-[42px] border border-b-[#EFEFEF] border-solid 2xl:h-10 2xl:w-11 ">
          <IoLogoInstagram />
          </li>
          <li className="cursor-pointer hover:bg-[#F8F8F8] hover:text-[#000] grid items-center justify-center text-xl text-[#747474] rounded-md h-[38px] w-[42px] border border-b-[#EFEFEF] border-solid 2xl:h-10 2xl:w-11 ">
          <PiYoutubeLogo />
          </li>
          <li className="cursor-pointer hover:bg-[#F8F8F8] hover:text-[#000] grid items-center justify-center text-xl text-[#747474] rounded-md h-[38px] w-[42px] border border-b-[#EFEFEF] border-solid 2xl:h-10 2xl:w-11">
          <TiSocialLinkedin />
          </li>
        </ul>
      </div>
      <div className="w-96">
        <h1 className="text-black text-xl font-semibold w-max 2xl:text-2xl ">Subscribe</h1>
        <p className="text-[#747474] my-3 pr-3 leading-7 2xl:text-lg 2xl:leading-9 ">Subscribe to our newsletter to get updates about our grand offers.</p>
        <div className="flex items-center mt-1 2xl:mt-2">
            <input type="email" placeholder="Email Address" className="h-11 p-3 bg-[#F8F8F8] text-[#747474] rounded-l-md 2xl:h-12 2xl:p-4 " />
            <button className="bg-[#212529] h-11 p-2 text-[#fff] rounded-r-md 2xl:h-12 2xl:p-3 ">Subscrib</button>
            </div>
      </div>
    </div>
  );
}
