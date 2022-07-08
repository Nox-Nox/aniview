import React from "react";
import { CardMedia, Box, Typography } from "@mui/material";

function LeftMediaTitle(props) {
  return (
    <Box>
      <CardMedia component="img" image={props.cover} />
      <Box
        sx={{
          borderBottomLeftRadius: "0.9vw",
        }}
        backgroundColor="rgba(0, 0, 0, 0.8)"
        position="absolute"
        bottom="0"
        zIndex="1"
        width="10vw"
        height="auto"
      >
        <Typography
          color="white"
          paddingTop="1vh"
          paddingLeft="0.4vw"
          paddingRight="2px"
          paddingBottom="1vh"
          fontSize="0.95em"
        >
          {props.title}
        </Typography>
        <Typography
          color="pink"
          paddingLeft="0.4vw"
          paddingRight="2px"
          paddingBottom="1vh"
          fontSize="0.8em"
        >
          {props.studios}
        </Typography>
      </Box>
    </Box>
  );
}
export default LeftMediaTitle;
