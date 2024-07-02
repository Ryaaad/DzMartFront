'use client'
import Image from "next/image";
import Productimg from "../../../public/images/product/thumb-bananas.png";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

interface props {
  name: string;
  price: number;
  rating: number;
  unitsnbr: number;
  fav?: boolean;
}

const ProductCart: React.FC<props> = ({ name,price,fav,unitsnbr,rating }) => {
    const [unitAdd, setunitAdd] = useState(1);
    function handleAddClick() {
        setunitAdd((prev)=>prev = prev + 1)
    }
    function handleReduceClick() {
        setunitAdd((prev)=>prev = prev - 1)
    }
  return (
    <div
      style={{ boxShadow: "0px 5px 22px rgba(0, 0, 0, 0.04)" }}
      className="bg-white rounded-2xl flex flex-col justify-start h-max gap-2 w-full p-3 sm:gap-3 sm:p-4"
    >
        <div className="items-center cursor-pointer relative grid justify-center bg-inputGray rounded-xl">
      <Image
        alt="Image"
        src={Productimg}
        className="h-48 w-52 sm:w-56 sm:h-52 "
      ></Image>
      <div className="absolute top-1 right-1 border border-solid border-[#d8d8d8] flex items-center justify-center rounded-full cursor-pointer bg-white 
      h-9 w-9 sm:h-11 sm:w-11 ">
      <FaRegHeart />
      </div>
        </div>
      <h1 className="font-semibold tracking-wider text-mg "> {name}</h1>
      <div className="flex gap-2 text-xs items-center">
        <p className="uppercase"> {unitsnbr} unit </p>
        <div className="flex items-center gap-1">
        <FaStar className="text-[#ffc43f]" />
        <p className="font-semibold">  {rating} </p>

        </div>
      </div>

      <h3 className="font-bold text-lg tracking-wider sm:text-xl "> ${price}.00 </h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <button onClick={()=>{handleReduceClick()}} 
            className="rounded-md text-xl font-semibold px-2 border border-solid border-[#F7F7F7] ">-</button>
            <p className=""> {unitAdd} </p>
            <button onClick={()=>{handleAddClick()}}
            className="rounded-md text-xl font-semibold px-2 border border-solid border-[#F7F7F7] "  >+</button>
        </div>
        <div className="hover: cursor-pointer flex gap-1 items-center ">
            <p className="text-xs"> Add to Cart </p>
        <MdOutlineAddShoppingCart className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
