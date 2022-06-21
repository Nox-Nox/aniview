import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import { mainTheme } from "../../Theme/mainTheme";
import { NewsContext } from "../../../pages/HomePage";
import { useContext } from "react";
import {mainTheme} from "../../Theme/mainTheme"

function SecondaryContent() {
  const { data, set, first } = useContext(NewsContext);
  return (
    <Box
<<<<<<< HEAD
    backgroundColor={mainTheme.palette.primary.light}
=======
      backgroundColor={mainTheme.palette.primary.light}
>>>>>>> temporary
      width="12vw"
      height="100%"
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
    >
      <Box width="12vw">
<<<<<<< HEAD
        <CardMedia component="img" image={props.first.urls[0]} />
      </Box>
      <Box width="12vw"  display="flex" height="100%" alignItems="flex-end" padding= "1vh">
        <Box>
        <Typography color="white">Author: {props.first.author}</Typography>
        <Typography color="white">Source: {props.first.source}</Typography>
=======
        <CardMedia component="img" image={first.urls[0]} />
      </Box>
      <Box
        width="12vw"
        display="flex"
        height="100%"
        alignItems="flex-end"
        padding="1vh"
      >
        <Box paddingRight="1vw">
          <Typography color="white">Author: {first.author}</Typography>
          <Typography color="white">Source: {first.source}</Typography>
>>>>>>> temporary
        </Box>
      </Box>
    </Box>
  );
}
export default SecondaryContent;
