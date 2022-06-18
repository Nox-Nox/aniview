import { Box, Typography } from "@mui/material";
import React from "react";
import { mainTheme } from "../../Theme/mainTheme";

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

function MainContent(props) {
  return (
    <Box
      height="100%"
      width="100%"
      backgroundColor={mainTheme.palette.primary.light}
    >
      <Typography color="white" fontSize="2vw" margin="1rem" padding="0.8rem">
        {props.first.title}
      </Typography>
      <Box overflow="auto" height="100%" maxHeight="90%">
        <Typography
          lineHeight="2.5rem"
          color="white"
          margin="1rem"
          padding="0.8rem"
        >
          {props.first.content}
        </Typography>
      </Box>
    </Box>
  );
}
export default MainContent;
