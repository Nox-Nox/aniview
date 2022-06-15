import MainNavigation from "../components/NavigationBars/MainNavigation";
import { CssBaseline } from "@mui/material";
import  React from "react";
import { Box } from "@mui/material";
import Footer from "../components/Footer/Footer";

function Layout(props) {
  return (
    <Box>
      <CssBaseline />
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </Box>
  );
}
export default Layout;
