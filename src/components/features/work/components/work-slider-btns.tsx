'use client';

// libraries
import * as React from 'react';
import { useSwiper } from 'swiper/react';

// components
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

export interface IWorkSliderBtnsProps {
  containerStyle: string;
  btnStyle: string;
  iconStyle: string;
}

export function WorkSliderBtns({
  btnStyle,
  containerStyle,
  iconStyle,
}: IWorkSliderBtnsProps) {
  const swiper = useSwiper();

  return (
    <div className={containerStyle}>
      <button className={btnStyle} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyle} />
      </button>
      <button className={btnStyle} onClick={() => swiper.slidePrev()}>
        <PiCaretRightBold className={iconStyle} />
      </button>
    </div>
  );
}
