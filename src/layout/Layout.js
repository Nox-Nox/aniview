import MainNavigation from "../components/NavigationBars/MainNavigation";
import { CssBaseline } from "@mui/material";
function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <CssBaseline />
      <main>{props.children}</main>
    </div>
  );
}
export default Layout;
