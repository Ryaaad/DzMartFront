'use client'
import SwiperComponent from "@/components/Shared/swiper";
import CategoryCart from "@/components/landing/category/cart";
import TitleSection from "@/components/landing/shared/titlesection";
import { Swiper as SwiperType } from 'swiper';
import { useRef } from "react";
import BrandCart from "@/components/landing/Brand/cart";
import useWindowSize from "@/hooks/useWindowSize";
import TrandingProduct from "@/components/landing/trandingProduct";
import ProductCart from "@/components/Shared/ProductCart";

export default function Home() {
  const CategoryswiperRef = useRef<SwiperType | null>(null);
  const ltsBrandsRef = useRef<SwiperType | null>(null);
  
   const categories=[
    <CategoryCart name="Food" />,
    <CategoryCart name="Drinks" />,
    <CategoryCart name="Clothes" />,
    <CategoryCart name="Jus" />,
    <CategoryCart name="Plastique" />,
    <CategoryCart name="Fruit" />,
    <CategoryCart name="Vegtibals" />,
    <CategoryCart name="Shoes" />,
   ]
   const ltsBrands=[
    <BrandCart name="Amber Jar" desc="Honey best nectar you wish to get " />,
    <BrandCart name="Honzy" desc="Honey best nectar you wish to get " />,
    <BrandCart name="Cream" desc="Honey best nectar you wish to get " />,
    <BrandCart name="Nike" desc="Honey best nectar you wish to get " />,
    <BrandCart name="Puma" desc="Honey best nectar you wish to get " />,
   ]
   const TradProducts=[
    <ProductCart price={18.00} rating={4.5} unitsnbr={5} fav={false} name="Amber Jar" />,
    <ProductCart price={18.00} rating={4.5} unitsnbr={5} fav={false} name="Food" />,
    <ProductCart price={18.00} rating={4.5} unitsnbr={5} fav={false} name="Food" />,
    <ProductCart price={18.00} rating={4.5} unitsnbr={5} fav={false} name="Food" />,
    <ProductCart price={18.00} rating={4.5} unitsnbr={5} fav={false} name="Amber Jar" />,
    <ProductCart price={18.00} rating={4.5} unitsnbr={5} fav={false} name="Food" />,
    <ProductCart price={18.00} rating={4.5} unitsnbr={5} fav={false} name="Food" />,
    <ProductCart price={18.00} rating={4.5} unitsnbr={5} fav={false} name="Food" />,
    <ProductCart price={18.00} rating={4.5} unitsnbr={5} fav={false} name="Amber Jar" />,
    <ProductCart price={18.00} rating={4.5} unitsnbr={5} fav={false} name="Food" />,
    <ProductCart price={18.00} rating={4.5} unitsnbr={5} fav={false} name="Food" />,
    <ProductCart price={18.00} rating={4.5} unitsnbr={5} fav={false} name="Food" />,
   ]
   const goToNextSlide = (swiperRef: React.MutableRefObject<SwiperType | null>) => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  const goToPrevSlide = (swiperRef: React.MutableRefObject<SwiperType | null>) => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const size=useWindowSize()
  return (
   <div className="w-full my-6 md:my-8">
    <div className="w-full h-28 md:h-16 bg-patterned bg-cover "></div>
    <div className="my-1 p-3 sm:p-5 2xl:px-12 "> 
      <TitleSection title="Category" NextSlide={()=>{goToNextSlide(CategoryswiperRef)}}  LastSlide={()=>{goToPrevSlide(CategoryswiperRef)}} />
      <div className="my-3 mb-6 md:my-9 md:mb-11 lg:my-10 lg:mb-12">
      <SwiperComponent children={categories} gap={20} swiperRef={CategoryswiperRef} 
      spacebetween={size.width && size.width >= 1536 ? 5 : size.width >=768 ? 15 : 5}
      slidesperView={size.width && (size.width >= 1536 ? 6 : (size.width>=1024 ? 4 : (size.width>=768 ? 3 : 2)))}
       />
      </div>

      <TitleSection title="Newly Arrived Brands" NextSlide={()=>{goToNextSlide(ltsBrandsRef)}}  LastSlide={()=>{goToPrevSlide(ltsBrandsRef)}} />
      <div className="my-3 mb-6 md:my-9 md:mb-11 lg:my-10 lg:mb-12">
      <SwiperComponent children={ltsBrands} gap={20} swiperRef={ltsBrandsRef} 
      spacebetween={size.width && size.width >= 1536 ? 5 : size.width >=1024 ? 15 : 4}
      slidesperView={size.width && (size.width >= 1536 ? 4 : (size.width>=1024 ? 3 : 2 ))}
      />
      </div>
      
    <TrandingProduct/>
    <div className="my-3 mb-6 grid items-center grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:my-9 md:mb-11 lg:my-10 lg:mb-12 lg:grid-cols-4 xl:grid-cols-5 2xl:gap-6">
    {TradProducts.map((TradProduct,index)=>(
      <div key={index} >
      {TradProduct}
      </div>
    ))}
    </div>
    </div>
    
   </div>
  );
}
