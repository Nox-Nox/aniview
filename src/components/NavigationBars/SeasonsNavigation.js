import { AppBar, Toolbar, ThemeProvider } from "@mui/material";
import { Link, Box } from "@mui/material";
import SeasonsNavigationTheme from "../Theme/seasonsNavigationTheme";
import WinterPage from "../../pages/seasonsPages/WinterPage";

function SeasonsNavigation(props) {
  return (
    <ThemeProvider theme={SeasonsNavigationTheme}>
      <Box display={"flex"} justifyContent="center">
        <AppBar>
          <Toolbar>
            <Link href="/Anime/Winter">Winter</Link>
            <Link href="/Anime/Spring">Spring</Link>
            <Link href="/Anime/Summer">Summer</Link>
            <Link href="/Anime/Fall">Fall</Link>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
export default SeasonsNavigation;
