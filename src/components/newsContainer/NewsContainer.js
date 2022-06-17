import { Box } from "@mui/material";
import DailyQuote from "../newsView/DailyQuote/DailyQuote"
import NewsView from "../newsView/NewsView";
import React from "react";


function NewsContainer(props) {
console.log(props.first)
  return (

    <Box>
        <DailyQuote />
        <NewsView first={props.first} switchNews={props.switchNews}/>
    </Box>
  );
}
export default NewsContainer;
