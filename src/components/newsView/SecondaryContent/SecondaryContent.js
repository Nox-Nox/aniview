import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";

function SecondaryContent(props) {
  return (
    <Box
      backgroundColor="pink"
      width="12vw"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box width="12vw" backgroundColor="green" marginTop="14vh">
        <CardMedia component="img" image={props.first.urls[0]} />
      </Box>
      <Box width="12vw" backgroundColor="red">
        <Typography color="white">Author: {props.first.author}</Typography>
        <Typography color="white">Source: {props.first.source}</Typography>
      </Box>
    </Box>
  );
}
export default SecondaryContent;
