import { Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../interfaces";

const footerStyles = {
  height: "5%",
  backgroundColor: "#333",
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
};

const Footer: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const selectCounter = (state: State) => state.queryResultsCount;
  const counter = useSelector(selectCounter);

  return (
    <footer style={footerStyles}>
      <Typography sx={{ fontSize: isSmallScreen ? "3vw" : "1rem" }}>
        Licznik newsów: {counter}
      </Typography>
      <Typography sx={{ fontSize: isSmallScreen ? "3vw" : "1rem" }}>
        {new Date().toLocaleDateString()}
      </Typography>
    </footer>
  );
};

export default Footer;
