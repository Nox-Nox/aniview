import { AppBar, Toolbar, ThemeProvider } from "@mui/material";
import { Link } from "@mui/material";
import SeasonsNavigationTheme from "../Theme/seasonsNavigationTheme";

function SeasonsNavigation() {
  return (
    <ThemeProvider theme={SeasonsNavigationTheme}>
      <AppBar>
        <Toolbar>
          <Link href="#">Winter</Link>
          <Link href="#">Spring</Link>
          <Link href="#">Summer</Link>
          <Link href="#">Autumn</Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default SeasonsNavigation;
