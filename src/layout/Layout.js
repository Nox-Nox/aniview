import MainNavigation from "../components/NavigationBars/MainNavigation";
import { CssBaseline } from "@mui/material";

import { Box } from "@mui/material";
function Layout(props) {
  return (
    <Box sx={{background: 'linear-gradient(to right, #7b29ab, #d238dd, #552586)'}}>
      <CssBaseline />
      <MainNavigation />
      <main>{props.children}</main>
    </Box>
  );
}
export default Layout;
