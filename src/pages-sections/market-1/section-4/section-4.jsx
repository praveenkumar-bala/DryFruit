import Link from "next/link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
// CUSTOM ICON COMPONENTS

import RankBadge from "icons/RankBadge";
import DottedStar from "icons/DottedStar";
// LOCAL CUSTOM COMPONENTS

import FeaturedProductCard from "../shared/featured-product-card";
import TopRatingProductCard from "../shared/top-rating-product-card";
import LazyImage from "components/LazyImage";
import { H2, Paragraph, H6, H4 } from "components/Typography";
import { FlexBox, FlexRowCenter } from "components/flex-box";
import FlexBetween from "components/flex-box/flex-between";
// GLOBAL CUSTOM COMPONENTS

import BazaarCard from "components/BazaarCard";
import { SectionHeader } from "components/section-header";
// API FUNCTIONS

import api from "utils/__api__/market-1";
export default async function Section4() {
  const [brands, products] = await Promise.all([
    api.getTopRatedBrand(),
    api.getTopRatedProduct(),
  ]);
  return (
    <Container className="mb-4">
      <Box
        id="get"
        sx={{
          backgroundColor: "grey.100",
        }}
      >
        <Grid container spacing={6}>
          <Grid item md={12} xs={12}>
            <FlexBox
              gap={3}
              sx={{
                flexDirection: {
                  sm: "row",
                  xs: "column",
                },
              }}
            >
              <Avatar
                alt=""
                src="/assets/images/new/shop/shop1.png"
                sx={{
                  boxShadow: 1,
                  borderRadius: "10px",
                  height: "auto",
                  width: {
                    sm: 450,
                    xs: "100%",
                  },
                }}
              />

              <FlexBox flexDirection="column" alignItems="flex-start">
                <H2 fontSize={22} mb={1}>
                  {"Hey, We Aren't That Far!"}
                </H2>

                <Paragraph mb={2}>
                  {
                    "Our journey has led us to broaden our network. Now, you can easily spot us at your nearest location and get your healthy eating plans sorted!"
                  }
                </Paragraph>
                <Box m="auto" />
                <H2
                  mb={8}
                  fontSize={28}
                  textAlign="center"
                  fontWeight="700"
                  color="secondary.main"
                  textTransform="uppercase"
                >
                  Find us Here?
                </H2>
                <Button variant="outlined" color="primary">
                  View All Shops
                </Button>

                <FlexBetween
                  alignItems="center"
                  justifyContent="space-between"
                  mt={8}
                >
                  <>
                    <Box p={3} borderRight="1.5px dashed">
                      <FlexBox gap={1}>
                        <H2 color="primary.main">{"11+"}</H2>
                      </FlexBox>
                      <FlexBox gap={1}>
                        <H4 color="secondary.main">{"Stores"}</H4>
                      </FlexBox>
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box p={3} borderRight="1.5px dashed">
                      <FlexBox gap={1}>
                        <H2 color="primary.main">{"450000+"}</H2>
                      </FlexBox>
                      <FlexBox gap={1}>
                        <H4 color="secondary.main">{"Happy Customers"}</H4>
                      </FlexBox>
                    </Box>
                    <Box className="p-1">
                      <FlexBox gap={1}>
                        <H2 color="primary.main">{"500000+"}</H2>
                      </FlexBox>
                      <FlexBox gap={1}>
                        <H4 color="secondary.main">{"Order Delivered"}</H4>
                      </FlexBox>
                    </Box>
                  </>
                </FlexBetween>
              </FlexBox>
            </FlexBox>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
