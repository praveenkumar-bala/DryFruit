
// LOCAL CUSTOM COMPONENT
import HeroCarousel from "./carousel"; 
import { SectionCreator } from "components/section-header";

// STYLED COMPONENTS

import { Wrapper } from "./styles"; 
// API FUNCTIONS

import api from "utils/__api__/market-1";
export default async function Section1() {
  const mainCarouselData = await api.getMainCarousel();
  return <SectionCreator id="carouselBox">
      <HeroCarousel mainCarouselData={mainCarouselData} />
    </SectionCreator>;
}