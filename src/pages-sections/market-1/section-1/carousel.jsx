"use client";

import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme";
// GLOBAL CUSTOM COMPONENTS

import { Carousel } from "components/carousel";
import { H1, H6, Paragraph } from "components/Typography";

// STYLED COMPONENTS
import { StyledButton, ContentWrapper } from "./styles";
import { COMMON_DOT_STYLES } from "components/carousel/styles";
// =============================================================================

// =============================================================================
export default function HeroCarousel({ mainCarouselData }) {
  const { palette } = useTheme();
  return (
    <Carousel
      dots
      arrows={false}
      slidesToShow={1}
      spaceBetween={0}
      dotStyles={COMMON_DOT_STYLES}
      dotColor={palette.primary.main}
      infinite={ true}    
      speed= {2000}  // Transition speed (in ms)
      autoplay={ true}    
      autoplaySpeed= {5000} // Delay between slides (in ms)
      pauseOnHover = {true}
    >
      {mainCarouselData.map((item) => (
        <div key={item.id}>
          <ContentWrapper backgroundImage={item.imgUrl}>
            <Container>
              <div className="carousel-content">
                {item.subTitle && <H6>{item.subTitle}</H6>}
                {item.title && (
                  <H1 lineHeight={1} fontSize={60} py={2}>
                    {item.title}
                  </H1>
                )}
                {item.description && (
                  <Paragraph color="grey.700" mb={5}>
                    {item.description}
                  </Paragraph>
                )}
                {item.buttonText && (
                  <StyledButton color="primary" variant="contained">
                    {item.buttonText}
                  </StyledButton>
                )}
              </div>
            </Container>
          </ContentWrapper>
        </div>
      ))}
    </Carousel>
  );
}
