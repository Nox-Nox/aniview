import { Box, CardMedia } from "@mui/material";
import React from "react";
import { useContext } from "react";


function SecondaryContent(props){
  
    return (
        <Box backgroundColor="pink" width="12vw" height="34vh">
        <Box width="12vw" backgroundColor="green">
        <CardMedia component="img" image={props.first.urls[0]} />
        </Box>
        <Box backgroundColor="orange" width="12vw" height="100%"> source, author</Box>
      </Box>
     
    )
}
export default SecondaryContent;