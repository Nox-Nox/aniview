import classes from "./Layout.module.css";
import MainNavigation from "../components/NavigationBars/MainNavigation";
import { CssBaseline } from "@mui/material";
function Layout(props) {
  return (
    <div>
      <CssBaseline />
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
export default Layout;
