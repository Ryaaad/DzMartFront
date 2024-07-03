"use client";
import ProductCart from "@/components/Shared/ProductCart";
import { useParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import Test from "../../../../../public/images/product/productExmpl.jpg";
import Test2 from "../../../../../public/images/product/product-exmpl-2.jpg";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { GrUser } from "react-icons/gr";
import Reviews from "@/components/signleProduct/Reviews";

export default function Home() {
  const [unitAdd, setunitAdd] = useState(1);
  const [ReviewScore, setReviewScore] = useState(0);

  function handleAddClick() {
    setunitAdd((prev) => (prev = prev + 1));
  }
  function handleReduceClick() {
    setunitAdd((prev) => (prev = prev - 1));
  }
  const { name } = useParams();
  const [focusImg, setfocusImg] = useState(Test);
  const changeFocusedpic = (img: StaticImageData) => {
    setfocusImg(img);
  };
  return (
    <div className="w-full p-3 sm:p-4 md:p-5 2xl:px-12 ">
    <div className="w-full flex my-6 gap-8 flex-col items-start lg:flex-row xl:gap-12 sm:py-3 md:my-8">
      <div className="flex gap-4 flex-col-reverse w-full lg:items-start lg:w-auto lg:flex-row lg:h-[500px] xl:h-[615px] ">
        <div className="flex w-full h-full justify-between lg:flex-col ">
          <Image
            alt="test"
            onClick={() => changeFocusedpic(Test)}
            src={Test}
            className="cursor-pointer w-1/6 h-auto md:h-32 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
          />
          <Image
            alt="test"
            onClick={() => changeFocusedpic(Test2)}
            src={Test2}
            className="cursor-pointer w-1/6 h-auto md:h-32 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
          />
          <Image
            alt="test"
            onClick={() => changeFocusedpic(Test)}
            src={Test}
            className="cursor-pointer w-1/6 h-auto md:h-32 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
          />
          <Image
            alt="test"
            onClick={() => changeFocusedpic(Test)}
            src={Test}
            className="cursor-pointer w-1/6 h-auto md:h-32 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
          />
          <Image
            alt="test"
            onClick={() => changeFocusedpic(Test)}
            src={Test}
            className="cursor-pointer w-1/6 h-auto md:h-32 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
          />
        </div>
        <Image
          alt="test"
          src={focusImg}
          className="w-full lg:w-auto lg:h-[500px] xl:h-[615px]"
        />
      </div>
      <div className="flex flex-col w-full gap-4 lg:max-w-min lg:gap-2 xl:gap-4 xl:max-w-1/3 ">
        <h1 className=" font-semibold text-black tracking-wide text-2xl md:text-3xl xl:text-4xl ">
          Cashew Butter 500mg CBD
        </h1>
        <div className="flex items-center gap-2 text-sm sm:text-base lg:text-xl xl:gap-3">
          <FaStar className="text-scdOrang" />
          <FaStar className="text-scdOrang" />
          <FaStar className="text-scdOrang" />
          <FaStar className="text-[#e6f3fb]" />
          <FaStar className="text-[#e6f3fb]" />
          <p className="text-black text-sm lg:text-lg"> (3.5) </p>
        </div>
        <h3 className="text-scdOrang font-bold text-2xl md:text-3xl  tracking-wide xl:text-4xl ">
          {" "}
          $870.00{" "}
        </h3>
        <p className="text-btnGray leading-6 text-base md:leading-7 xl:text-lg">
          Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque
          amet. Bibendum adipiscing platea blandit sit sed quam semper rhoncus.
          Diam ultrices maecenas consequat eu tortor orci, cras lectus mauris,
          cras egestas quam venenatis neque.
        </p>
        <div className="mt-4 lg:mt-2">
          <h1 className="font-semibold text-base xl:text-lg "> COLOR </h1>
          <div className="flex items-center gap-3 my-3 ">
            <button className="rounded-md bg-btnscnd border border-solid border-borderGray p-1 px-2 text-sm lg:text-base lg:p-2 lg:px-3">
              Green
            </button>
            <button className="rounded-md bg-btnscnd border border-solid border-borderGray p-1 px-2 text-sm lg:text-base lg:p-2 lg:px-3">
              Green
            </button>
            <button className="rounded-md bg-btnscnd border border-solid border-borderGray p-1 px-2 text-sm lg:text-base lg:p-2 lg:px-3">
              Green
            </button>
            <button className="rounded-md bg-btnscnd border border-solid border-borderGray p-1 px-2 text-sm lg:text-base lg:p-2 lg:px-3">
              Green
            </button>
          </div>
          <h1 className="font-semibold text-base xl:text-lg "> SIZE </h1>
          <div className="flex items-center gap-3 my-3 ">
            <button className="rounded-md bg-btnscnd border border-solid border-borderGray p-1 px-2 text-sm lg:text-base lg:p-2 lg:px-3">
              XL
            </button>
            <button className="rounded-md bg-btnscnd border border-solid border-borderGray p-1 px-2 text-sm lg:text-base lg:p-2 lg:px-3">
              L
            </button>
            <button className="rounded-md bg-btnscnd border border-solid border-borderGray p-1 px-2 text-sm lg:text-base lg:p-2 lg:px-3">
              M
            </button>
            <button className="rounded-md bg-btnscnd border border-solid border-borderGray p-1 px-2 text-sm lg:text-base lg:p-2 lg:px-3">
              S
            </button>
          </div>

          <p className="italic my-2 mt-8 "> 2 in stock </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                handleReduceClick();
              }}
              className="rounded-md text-xl font-semibold px-2 bg-btnscnd border border-solid border-[#F7F7F7] "
            >
              -
            </button>
            <p className=""> {unitAdd} </p>
            <button
              onClick={() => {
                handleAddClick();
              }}
              className="rounded-md text-xl font-semibold px-2 bg-btnscnd border border-solid border-[#F7F7F7] "
            >
              +
            </button>
          </div>
          <div className="flex items-center gap-3 my-6 sm:gap-4 sm:my-8">
            <button className="bg-scdOrang rounded-md text-white uppercase text-xs p-3 px-4 sm:text-sm sm:p-4 sm:px-5 xl:text-base ">Buy Now</button>
          <button className="bg-[#373b3e] rounded-md text-white uppercase text-xs p-3 px-4 sm:text-sm sm:p-4 sm:px-5 xl:text-base">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="grid gap-3 md:gap-2 justify-between w-full my-2 grid-cols-2 md:grid-cols-3 ">
        <div className="hidden md:block">
    <Reviews ReviewScore={ReviewScore} setReviewScore={setReviewScore} />
        </div>
        <div className="flex text-btnGray gap-3">
            <div className="rounded-full items-center flex justify-center bg-inputGray h-9 w-9 sm:h-10 sm:w-10 lg:h-14 lg:w-14 ">
           <GrUser className=" text-black text-xl sm:text-2xl lg:text-3xl" />
            </div>
            <div className="">
            <div className="flex items-center text-xs gap-1 lg:gap-2 xl:gap-3">
          <FaStar className="text-scdOrang" />
          <FaStar className="text-scdOrang" />
          <FaStar className="text-scdOrang" />
          <FaStar className="text-[#e6f3fb]" />
          <FaStar className="text-[#e6f3fb]" />
          <p className="text-xs lg:text-base"> (3.5) </p>
        </div>
        <h2 className="text-xs sm:text-sm lg:text-base ">Jenny Willis – 03/06/2022</h2>
                 <p className="max-w-[46vw] text-xs leading-4 sm:leading-5  sm:text-sm lg:text-base lg:leading-7  ">
          Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque
          amet. Bibendum adipiscing platea blandit.
        </p>
            </div>
        </div>
        <div className="flex text-btnGray gap-3">
            <div className="rounded-full items-center flex justify-center bg-inputGray h-9 w-9 sm:h-10 sm:w-10 lg:h-14 lg:w-14 ">
           <GrUser className=" text-black text-xl sm:text-2xl lg:text-3xl" />
            </div>
            <div className="">
            <div className="flex items-center text-xs gap-1 lg:gap-2 xl:gap-3">
          <FaStar className="text-scdOrang" />
          <FaStar className="text-scdOrang" />
          <FaStar className="text-scdOrang" />
          <FaStar className="text-[#e6f3fb]" />
          <FaStar className="text-[#e6f3fb]" />
          <p className="text-xs lg:text-base"> (3.5) </p>
        </div>
        <h2 className="text-xs sm:text-sm lg:text-base ">Jenny Willis – 03/06/2022</h2>
                 <p className="max-w-[46vw] text-xs leading-4 sm:leading-5  sm:text-sm lg:text-base lg:leading-7  ">
          Justo, cum feugiat imperdiet nulla molestie ac vulputate scelerisque
          amet. Bibendum adipiscing platea blandit.
        </p>
            </div>
        </div>
    </div>
    <div className="block md:hidden">
    <Reviews ReviewScore={ReviewScore} setReviewScore={setReviewScore} />
        </div>
    </div>
  );
}
