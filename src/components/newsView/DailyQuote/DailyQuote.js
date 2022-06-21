import { Box, Typography } from "@mui/material";
import React from "react";
import { NewsContext } from "../../../pages/HomePage";
import { useContext } from "react";

<<<<<<< HEAD
function DailyQuote(){
    return(
        <Box display="flex" justifyContent="center"  marginBottom="4vh">
        <Box height="12vh" backgroundColor="lime" width="30vw"></Box>
        </Box>
    )
=======
function DailyQuote() {
  const { data, set, first, quote } = useContext(NewsContext);
  return (
    <Box
      display="flex"
      justifyContent="center"
      marginBottom="3vh"
      marginTop="3vh"
    >
      <Box
        backgroundColor="#9b59b6"
        height="20vh"
        width="30vw"
        borderRadius="2rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        overflow="auto"
      >
        <Typography variant="h5" paddingTop="1vh">
          {quote.anime}
        </Typography>
        <Typography textAlign="center" padding="0.4rem">"{quote.quote}"</Typography>
        <Typography variant="h6" paddingBottom="0.4rem">-{quote.character}</Typography>
      </Box>
    </Box>
  );
>>>>>>> temporary
}
export default DailyQuote;
