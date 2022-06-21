import { Box, Typography, CardMedia } from "@mui/material";
import React from "react";
import { mainTheme } from "../../Theme/mainTheme";
import { useContext, useState } from "react";
import { NewsContext } from "../../../pages/HomePage";


function MainContent() {
  const { data, set, first  } = useContext(NewsContext);
  return (
    <Box
      height="100%"
      width="100%"
      backgroundColor={mainTheme.palette.primary.light}
    >
      <Typography
        color="white"
        fontSize="2vw"
        margin="1rem"
        padding="0.8rem"
        sx={{
          borderBottom: 1,
          borderWidth: "3px",
          borderColor: "#9B59B6",
        }}
      >
        {first.title}
      </Typography>
      <Box
      id = {first.id}
        overflow="auto"
        height="100%"
        maxHeight="85%"
        onMouseLeave={() => {
          var wow = document.getElementById(first.id);
          wow.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Typography
          lineHeight="2.5rem"
          color="white"
          margin="1rem"
          padding="0.8rem"
        >
          {first.content}
        </Typography>
      </Box>
    </Box>
  );
}
export default MainContent;
