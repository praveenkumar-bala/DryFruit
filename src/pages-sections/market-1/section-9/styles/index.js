"use client";

import { Opacity } from "@mui/icons-material";
import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";
import { transform } from "lodash";
export const StyledCard = styled(Card)(({
  theme
}) => ({
  display: "flex",
  overflow: "hidden",
  position: "relative",
  "&:after": {
    inset: 0,
    zIndex: 1,
    opacity: 0,
    content: '""',
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "black",
    transition: "all 250ms ease-in-out"
  },
  "&:hover:after": {
    opacity: 0.3
  },
  gap: 8,
  borderRadius: 8,
  padding: "0.75rem",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.down(375)]: {
    flexDirection: "column"
  }
}));