import { Box } from "@mui/material";
import DailyQuote from "../newsView/DailyQuote/DailyQuote";
import NewsView from "../newsView/NewsView";
import React from "react";
import NewsViewSkeleton from "../skeleton/NewsViewSkeleton"

function NewsContainer(props) {
  return (
    <Box display="flex" marginBottom="10vh">
      {props.loading ? (<NewsViewSkeleton />)
      
    : (      <Box
      backgroundColor="#171717"
      width="96%"
      marginLeft="2%"
      borderRadius="3rem"
    >
      <DailyQuote />
      <NewsView  />
    </Box>
    )
    }

    </Box>

  );
}
export default NewsContainer;
