import { Box, Typography } from "@mui/material";
import React from "react";

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

function MainContent(props) {
  return (
    <Box height="65vh" backgroundColor="cyan" width="100%">
              <Typography  backgroundColor="gray" fontSize="2vw" padding="0.8rem">
          {props.first.title}
        </Typography>
      <Box backgroundColor="magenta" overflow="auto" height="100%" maxHeight="90%">

        <Typography lineHeight="2.5rem" backgroundColor="blue" color="white" margin="1rem" padding="0.8rem">
          {props.first.content}
        </Typography>
      </Box>
    </Box>
  );
}
export default MainContent;
