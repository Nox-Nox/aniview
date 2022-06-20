import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import {mainTheme} from "../../Theme/mainTheme"

function SecondaryContent(props) {
  return (
    <Box
    backgroundColor={mainTheme.palette.primary.light}
      width="12vw"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
    >
      <Box width="12vw">
        <CardMedia component="img" image={props.first.urls[0]} />
      </Box>
      <Box width="12vw"  display="flex" height="100%" alignItems="flex-end" padding= "1vh">
        <Box paddingRight="1vw">
        <Typography color="white">Author: {props.first.author}</Typography>
        <Typography color="white">Source: {props.first.source}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default SecondaryContent;
