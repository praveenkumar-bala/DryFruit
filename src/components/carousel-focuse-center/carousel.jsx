"use client";

import { forwardRef } from "react";
import { useTheme } from "@mui/material/styles";
import SlickCarousel from "react-slick";

// LOCAL CUSTOM COMPONENTS
import CarouselDots from "./components/carousel-dots";
import CarouselArrows from "./components/carousel-arrows"; 
// SLICK CAROUSEL CSS

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
// STYLED COMPONENT

import { RootStyle } from "./styles"; 
// ==============================================================


// ==============================================================
const Carousel = forwardRef((props, ref) => {
  const {
    dotColor,
    children,
    arrowStyles,
    dots = false,
    arrows = true,
    spaceBetween = 10,
    centerMode= true,       // Enable center mode
    centerPadding= "0px",  // Padding for the center item
    slidesToShow= 3,        // Show 3 slides at a time
    focusOnSelect= true,    // Enable clicking on slides to bring them to the center
    infinite= true,
    speed= 100,
    dotStyles = {
      mt: 4
    },
    ...others
  } = props;
  const theme = useTheme();
  const settings = {
    dots,
    arrows,
    slidesToShow,
    rtl: theme.direction === "rtl",
    ...CarouselArrows(arrowStyles),
    ...CarouselDots({
      dotColor,
      sx: dotStyles
    }),
    centerMode,
    centerPadding,
    focusOnSelect,
    ...others
  };
  return <RootStyle space={spaceBetween}>
      <SlickCarousel ref={ref} {...settings}>
        {children}
      </SlickCarousel>
    </RootStyle>;
});
export default Carousel;