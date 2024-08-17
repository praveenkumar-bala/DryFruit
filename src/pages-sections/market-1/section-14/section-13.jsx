import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// GLOBAL CUSTOM COMPONENTS

import { Carousel } from "components/carousel-focuse-center";
import BazaarImage from "components/BazaarImage";
import FlexRowCenter from "components/flex-box/flex-row-center";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import DottedStar from "icons/DottedStar"; 
import { SectionHeader } from "components/section-header"; 
// GLOBAL CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { H3, H4, Paragraph, Small } from "components/Typography";
import FlexBox from "components/flex-box/flex-box";
// CUSTOM DATA MODEL

import api from "utils/__api__/market-1";

// ==========================================================
export default async function Section8() {
  const brands = await api.getBrands();
  const responsive = [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ];
  const settings = {
    slidesToShow: 3,
    slidesPerRow: 1,
    infinite: true,
    centerMode: true,
    speed: 1000,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000, // Delay between slides (in ms)
    pauseOnHover: true,
    className: "center",
    centerMode: true,
    // centerPadding: "60px",
    responsive: responsive
  };
  return (
    
    <Container className="mt-4 mb-4">
      <SectionHeader icon={<DottedStar />} title="Our Brands" seeMoreLink="#" />
      <Box padding={4} bgcolor="white" sx={{}}>
        <Carousel {...settings} responsive={responsive}>
          {brands.map(({ id, image, description }) => (<>
            <FlexRowCenter height="100%" margin="auto" key={id}>
              <BazaarImage
                alt="brand"
                width="auto"
                height={200}
                margin="auto"
                src={image}
                sx={
                  {
                    // filter: "grayscale(1)",
                  }
                }
              />
              <Box className="descriptionText" sx={{
                paddingTop: 4,
              }}>
                <H4>{description}</H4>
              </Box>
            </FlexRowCenter> 
            </>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
}
