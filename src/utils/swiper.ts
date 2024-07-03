import { Swiper as SwiperType } from 'swiper';

export const goToNextSlide = (swiperRef: React.MutableRefObject<SwiperType | null>) => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
export const goToPrevSlide = (swiperRef: React.MutableRefObject<SwiperType | null>) => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };