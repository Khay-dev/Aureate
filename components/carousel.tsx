"use client";
import type React from 'react';
import { useCallback } from 'react';
import type { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import { PrevButton, NextButton, usePrevNextButtons } from "./carouselbuttons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay';


type PropType = {
  slides: number[]
  options?: EmblaOptionsType
}

const Brands: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)
  return (
    <section className="embla">
      <div className=" overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom -ml-[1.5rem]">
          {slides.map((index) => (
            <div
              className="transform-gpu flex-[0_0_100%] xl:flex-[0_0_33%] md:flex-[0_0_50%] md:min-w-0 xl:min-w-0 min-w-full pl-[1.5rem]"
              key={index}
            >
              <div className="border bg-white text-[4rem] font-semibold flex items-center justify-center h-[19rem] select-none border-[#EFEFEF] rounded-md">
                Survey {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[auto_1fr] justify-between gap-[1.2rem] mt-[1.8rem]">
        <div className="grid grid-cols-2 gap-[0.6rem] items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default Brands;
