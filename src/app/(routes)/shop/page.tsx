"use client";
import TrandingProduct from "@/components/landing/trandingProduct";
import ProductCart from "@/components/Shared/ProductCart";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Home() {
  const TradProducts = [
    <ProductCart
      price={18.0}
      rating={4.5}
      unitsnbr={5}
      fav={false}
      name="Amber Jar"
    />,
    <ProductCart
      price={18.0}
      rating={4.5}
      unitsnbr={5}
      fav={false}
      name="Food"
    />,
    <ProductCart
      price={18.0}
      rating={4.5}
      unitsnbr={5}
      fav={false}
      name="Food"
    />,
    <ProductCart
      price={18.0}
      rating={4.5}
      unitsnbr={5}
      fav={false}
      name="Food"
    />,
    <ProductCart
      price={18.0}
      rating={4.5}
      unitsnbr={5}
      fav={false}
      name="Amber Jar"
    />,
    <ProductCart
      price={18.0}
      rating={4.5}
      unitsnbr={5}
      fav={false}
      name="Food"
    />,
    <ProductCart
      price={18.0}
      rating={4.5}
      unitsnbr={5}
      fav={false}
      name="Food"
    />,
    <ProductCart
      price={18.0}
      rating={4.5}
      unitsnbr={5}
      fav={false}
      name="Food"
    />,
    <ProductCart
      price={18.0}
      rating={4.5}
      unitsnbr={5}
      fav={false}
      name="Amber Jar"
    />,
    <ProductCart
      price={18.0}
      rating={4.5}
      unitsnbr={5}
      fav={false}
      name="Food"
    />,
    <ProductCart
      price={18.0}
      rating={4.5}
      unitsnbr={5}
      fav={false}
      name="Food"
    />,
    <ProductCart
      price={18.0}
      rating={4.5}
      unitsnbr={5}
      fav={false}
      name="Food"
    />,
  ];
  const [categoryFilter, setCategoryFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");
  const categories = [
    { name: "Drinks" },
    { name: "Fruit" },
    { name: "Food" },
    { name: "Shoes" },
  ];
  const brands = [{ name: "Nike" }, { name: "Puma" }];
  const ChangeCategoryFilter = (filter: string) => {
    setCategoryFilter(filter);
  };

  const ChangeBrandFilter = (filter: string) => {
    setBrandFilter(filter);
  };
  return (
    <div className="w-full my-6 md:my-8">
      <div className="w-full flex items-center p-7 bg-patterned bg-cover h-28 sm:h-36 xl:p-8 xl:h-40 ">
        <h1 className="text-black font-semibold text-2xl sm:text-3xl xl:text-5xl">Shop</h1>
      </div>
      <div className="flex w-full gap-5 my-5 p-3 flex-col sm:flex-row sm:justify-between sm:gap-8 sm:p-5 lg:gap-8 2xl:px-12 ">
        <div className="w-1/5 md:w-1/12 lg:w-1/5 2xl:w-[13%]">
          <div className="relative text-btnGray hidden lg:block ">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-inputGray rounded-md p-2 pr-7 text-base placeholder:text-btnGray placeholder:tracking-wider xl:text-lg xl:p-3 xl:pr-8 "
            />
            <CiSearch className="absolute top-1/2 right-2 cursor-pointer -translate-y-1/2 text-xl xl:text-2xl " />
          </div>
          <div className="flex flex-col gap-3 items-start text-btnGray mt-2 lg:gap-4 lg:mt-6">
            <ul className="flex flex-col gap-2 my-1 text-sm xl:text-base">
              <h1 className="font-semibold text-black text-base xl:text-lg">
                Categories
              </h1>
              <li
                onClick={() => ChangeCategoryFilter("")}
                className={`cursor-pointer ${
                  categoryFilter == "" && "text-black underline"
                } `}
              >
                {" "}
                All{" "}
              </li>
              {categories.map((category) => (
                <li
                  onClick={() => ChangeCategoryFilter(category.name)}
                  key={category.name}
                  className={`cursor-pointer ${
                    category.name == categoryFilter && "text-black underline"
                  } `}
                >
                  {" "}
                  {category.name}{" "}
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-2 my-1 text-sm xl:text-base">
              <h1 className="font-semibold text-black text-base xl:text-lg">
                Brands
              </h1>
              <li
                onClick={() => ChangeBrandFilter("")}
                className={`cursor-pointer ${
                  brandFilter == "" && "text-black underline"
                } `}
              >
                {" "}
                All{" "}
              </li>
              {brands.map((brands) => (
                <li
                  onClick={() => ChangeBrandFilter(brands.name)}
                  key={brands.name}
                  className={`cursor-pointer ${
                    brands.name == brandFilter && "text-black underline"
                  } `}
                >
                  {" "}
                  {brands.name}{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-5/6 lg:w-full ">
          <div className="w-full text-btnGray flex items-center justify-between">
            <p className="text-lg hidden md:block xl:text-xl "> Showing 1–9 of 55 results </p>
            <div className="relative text-btnGray block w-36 sm:w-40 lg:hidden ">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-inputGray rounded-md p-2 pr-7 sm:py-1 text-xs sm:text-base placeholder:text-btnGray placeholder:tracking-wider"
              />
              <CiSearch className="absolute top-1/2 right-2 cursor-pointer -translate-y-1/2 text-lg" />
            </div>
            <button className="border border-solid border-borderGray rounded-md text-xs p-1 py-2 w-28 sm:text-sm sm:w-32 sm:p-2 lg:w-36 xl:text-base">
              Default sorting
            </button>
          </div>
          <div className="w-full my-3 grid items-center grid-cols-1 gap-5 sm:grid-cols-2 md:gap-3 md:grid-cols-3 lg:gap-5 xl:grid-cols-4 xl:gap-6 2xl:gap-5 2xl:grid-cols-5">
            {TradProducts.map((TradProduct, index) => (
              <div key={index}>{TradProduct}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
