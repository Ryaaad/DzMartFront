'use client'
import React, { MutableRefObject } from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import "swiper/css";

interface props {
  children: React.JSX.Element[];
  gap: number;
  swiperRef: React.MutableRefObject<SwiperType | null>;
  spacebetween: string | number | undefined;
  slidesperView:number | "auto" | undefined
}
const SwiperComponent: React.FC<props> = ({ children,swiperRef,spacebetween,slidesperView }) => {
 
  return (
    <Swiper
     onSwiper={(swiper) => (swiperRef.current = swiper)}
      spaceBetween={spacebetween}
      slidesPerView={slidesperView}
      onSlideChange={() => console.log("slide change")}
      className="lg:top-0"
    >
   {children.map((child) => (
        <SwiperSlide key={child.props.name} >{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
