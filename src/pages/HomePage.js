import { Box } from "@mui/material";
import React from "react";
import SeasonsNavigation from "../components/NavigationBars/SeasonsNavigation";
import NewsContainer from "../components/newsContainer/NewsContainer";



function HomePage() {
  return (
    <Box>
      <SeasonsNavigation />
      <NewsContainer />

    </Box>
  );
}
export default HomePage;
