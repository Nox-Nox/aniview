import MainNavigation from "../components/NavigationBars/MainNavigation";
import { CssBaseline } from "@mui/material";

import { Box } from "@mui/material";
function Layout(props) {
  return (
    <Box>
      <CssBaseline />
      <MainNavigation />

      <main>{props.children}</main>
    </Box>
  );
}
export default Layout;
