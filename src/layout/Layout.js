import { CssBaseline } from "@mui/material";
import  React from "react";
import Footer from "../components/Footer/Footer";
import MainNavigation2 from "../components/NavigationBars/MainNavigation2/MainNavigation2";

function Layout(props) {
  return (
    <div>
      <CssBaseline />
      <MainNavigation2 />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
