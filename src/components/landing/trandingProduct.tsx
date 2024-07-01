"use client";
import React, { useState } from "react";

interface props {
  // title:string,
  // NextSlide:any,
  // LastSlide:any
}

const TrandingProduct: React.FC<props> = () => {
    const handelFilter=(filter:string)=>{
        setFilter(filter)
    }
  const [Filter, setFilter] = useState("ALL");
  return (
    <div className="w-full flex my-5 border-b border-b-[#F7F7F7] border-solid flex-col items-center sm:flex-row sm:items-end sm:justify-between ">
      <h1 className="text-black font-semibold text-base pb-3 lg:pb-5 sm:text-2xl xl:text-3xl">Trending Products</h1>
      <div className="flex items-center gap-10 sm:gap-6 uppercase text-xs sm:text-base ">
        <h1 onClick={()=>handelFilter("ALL")}
        className={`${Filter=="ALL" && "border-b-2 border-b-solid border-b-[#ffc43f]" } hover:text-[#333333] text-[#787878] cursor-pointer pb-3 lg:pb-5 `}>
          ALL
        </h1>
        <h1 onClick={()=>handelFilter("FRUITS")}
        className={`${Filter=="FRUITS" && "border-b-2 border-b-solid border-b-[#ffc43f]" } hover:text-[#333333] text-[#787878] cursor-pointer pb-3 lg:pb-5 `}>
          FRUITS & VEGES
        </h1>
        <h1 onClick={()=>handelFilter("JUICES")}
        className={`${Filter=="JUICES" && "border-b-2 border-b-solid border-b-[#ffc43f]" } hover:text-[#333333] text-[#787878] cursor-pointer pb-3 lg:pb-5 `}>
          JUICES
        </h1>
      </div>
    </div>
  );
};

export default TrandingProduct;
