import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; 
// CUSTOM ICON COMPONENT

import CategoryIcon from "icons/Category"; 
// GLOBAL CUSTOM COMPONENTS

import { Paragraph } from "components/Typography";
import { SectionHeader } from "components/section-header"; 
import { Carousel } from "components/carousel";
import BazaarCard from "components/BazaarCard";
// STYLED COMPONENT

import { StyledCard } from "./styles"; 
// API FUNCTIONS

import api from "utils/__api__/market-1";
export default async function Section9() {
  const responsive = [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 5
    }
  }, {
    breakpoint: 959,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 650,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 370,
    settings: {
      slidesToShow: 1
    }
  }];
  const categories = await api.getCategories();
  return <Container className="mb-5">
      <SectionHeader seeMoreLink="#"/>

      <Carousel slidesToShow={5} responsive={responsive} arrowStyles={{
              boxShadow: 0
            }}>
        {categories.map((item, ind) => (
          <BazaarCard>
            <Link href={`/products/search/${item.slug}`}>
              <StyledCard>
                <Image width={152} height={152} alt="fashion" src={item.image} />
                <Paragraph fontWeight="600">{item.name}</Paragraph>
              </StyledCard>
            </Link>
          </BazaarCard>
        ))}
      </Carousel>
    </Container>;
}