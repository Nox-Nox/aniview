import { Box, Typography } from "@mui/material";
import DailyQuote from "../DailyQuote/DailyQuote";
import NewsView from "../NewsView";
import React from "react";
import NewsViewSkeleton from "../../skeleton/NewsViewSkeleton";

function NewsContainer(props) {
  return (
    <Box display="flex" marginBottom="10vh">
      {props.loading ? (
        <NewsViewSkeleton />
      ) : (
        <Box
          backgroundColor="#171717"
          width="96%"
          marginLeft="2%"
          borderRadius="3rem"
        >

            <DailyQuote />
        <Box height="10vh"  display="flex" justifyContent="center">
          <Typography color="blueviolet" variant="h2" >Latest News</Typography>
        </Box>
          <NewsView />
        </Box>
      )}
    </Box>
  );
}
export default NewsContainer;
