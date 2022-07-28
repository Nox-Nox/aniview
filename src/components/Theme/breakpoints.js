import { createTheme } from "@mui/material";

export const themeBreakpoints = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

// below 1302 w grid should display 2 cards and change size of card and media, use rem or px for cardmedia instead
//below 1050 grid should display 1 card
//below 801 switch to tablet/mobile size, move navigation components at the bottom of the screen
// make 2 more components for cardContainer and cardView
//use em for typography responsiveness