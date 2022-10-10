import MainNavigation from "../components/NavigationBars/MainNavigation";
import { CssBaseline } from "@mui/material";
import  React from "react";
import { Box } from "@mui/material";
import Footer from "../components/Footer/Footer";
import MainNavigation2 from "../components/NavigationBars/MainNavigation2/MainNavigation2";

function Layout(props) {
  return (
    <Box>
      <CssBaseline />
      <MainNavigation />
      <MainNavigation2 />
      <main>{props.children}</main>
      <Footer />
    </Box>
  );
}
export default Layout;
