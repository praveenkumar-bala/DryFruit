import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
import { H6, H4, Paragraph, Small } from "components/Typography";
import FlexBox from "components/flex-box/flex-box";
// CUSTOM DATA MODEL

import api from "utils/__api__/market-1";

// ==========================================================
export default async function Section16() {
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
    responsive: responsive,
  };
  return (
    <Container className="mt-4 mb-4">
      <SectionHeader icon={<DottedStar />} title="FAQs" seeMoreLink="#" />
      <Box padding={4} sx={{}}>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <H6>1. How many dry fruits to eat in a day?</H6>
          </AccordionSummary>
          <AccordionDetails>
            A handful of dry fruits is said to be a wholesome amount to energize
            a human body. In case you are consuming mixed dry fruits, taking 3-4
            pieces of each would be enough.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <H6>2. Which dry fruit is best for weight loss?</H6>
          </AccordionSummary>
          <AccordionDetails>
            Dry fruits that are comparatively low in calories can help you
            fasten your weight loss journey and those dry fruits are Almonds,
            Pistachios, Walnuts, and Apricots. To shop check our range today!
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <H6>3. Which dry fruit is good for skin?</H6>
          </AccordionSummary>
          <AccordionDetails>
            Dry fruits are rich in antioxidants and contain all special
            nutrients that work magic for your skin. Figs help you prevent
            wrinkles, dates promote youthful skin, apricots deal with
            pigmentation, and raisins and prunes contribute in boosting a
            healthy glow.
          </AccordionDetails>
          <AccordionActions></AccordionActions>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            <H6>4. How many dry fruits to eat in a day?</H6>
          </AccordionSummary>
          <AccordionDetails>
            A handful of dry fruits is said to be a wholesome amount to energize
            a human body. In case you are consuming mixed dry fruits, taking 3-4
            pieces of each would be enough.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            <H6>5. Which dry fruit is best for weight loss?</H6>
          </AccordionSummary>
          <AccordionDetails>
            Dry fruits that are comparatively low in calories can help you
            fasten your weight loss journey and those dry fruits are Almonds,
            Pistachios, Walnuts, and Apricots. To shop check our range today!
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6-content"
            id="panel6-header"
          >
            <H6>6. Which dry fruit is good for skin?</H6>
          </AccordionSummary>
          <AccordionDetails>
            Dry fruits are rich in antioxidants and contain all special
            nutrients that work magic for your skin. Figs help you prevent
            wrinkles, dates promote youthful skin, apricots deal with
            pigmentation, and raisins and prunes contribute in boosting a
            healthy glow.
          </AccordionDetails>
          <AccordionActions></AccordionActions>
        </Accordion>
      </Box>
    </Container>
  );
}
