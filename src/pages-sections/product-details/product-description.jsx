"use client";
import { H3 } from "components/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  borderTop: `1px solid ${theme.palette.text.secondary}`,
  borderBottom: `1px solid ${theme.palette.text.secondary}`
}));


const ItemKey = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.grey[400],
  padding: 6
}));

const ItemValue = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.primary.main,
  padding: 6
}));

export default function ProductDescription() {
  return (
    <div>
      <H3 mb={2}>Product information</H3>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Grid xs={12} md={6}>
          <Item>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Grid xs={6} md={6}>
                <ItemKey>Specialty</ItemKey>
              </Grid>
              <Grid xs={6} md={6}>
                <ItemValue>Sugar Free</ItemValue>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
        <Item>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Grid xs={6} md={6}>
                <ItemKey>Weight</ItemKey>
              </Grid>
              <Grid xs={6} md={6}>
                <ItemValue>800 Grams
                </ItemValue>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
        <Item>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Grid xs={6} md={6}>
                <ItemKey>Ingredient Type	</ItemKey>
              </Grid>
              <Grid xs={6} md={6}>
                <ItemValue>Kimia Dates</ItemValue>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
        <Item>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Grid xs={6} md={6}>
                <ItemKey>Brand</ItemKey>
              </Grid>
              <Grid xs={6} md={6}>
                <ItemValue>Open Secret</ItemValue>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
        <Item>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Grid xs={6} md={6}>
                <ItemKey>Region Produced In	</ItemKey>
              </Grid>
              <Grid xs={6} md={6}>
                <ItemValue>India</ItemValue>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
        <Item>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Grid xs={6} md={6}>
                <ItemKey>Form</ItemKey>
              </Grid>
              <Grid xs={6} md={6}>
                <ItemValue>Whole</ItemValue>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
        <Item>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Grid xs={6} md={6}>
                <ItemKey>Manufacturer</ItemKey>
              </Grid>
              <Grid xs={6} md={6}>
                <ItemValue>Immaculate Bites Pvt Ltd.
                </ItemValue>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
        <Item>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Grid xs={6} md={6}>
                <ItemKey>Net Quantity	</ItemKey>
              </Grid>
              <Grid xs={6} md={6}>
                <ItemValue>1.00 count
                </ItemValue>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
        <Item>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Grid xs={6} md={6}>
                <ItemKey>Product Dimensions	</ItemKey>
              </Grid>
              <Grid xs={6} md={6}>
                <ItemValue>18 x 10 x 10 cm; 800 g
                </ItemValue>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid xs={12} md={6}>
        <Item>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Grid xs={6} md={6}>
                <ItemKey>Ingredients</ItemKey>
              </Grid>
              <Grid xs={6} md={6}>
                <ItemValue>Dates</ItemValue>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
