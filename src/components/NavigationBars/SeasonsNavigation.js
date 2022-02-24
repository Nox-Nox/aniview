import { AppBar, Toolbar, ThemeProvider, CssBaseline } from "@mui/material";
import { Link } from "@mui/material";
import SeasonsNavigationTheme from "../Theme/seasonsNavigationTheme";

function SeasonsNavigation() {
  return (
    <ThemeProvider theme={SeasonsNavigationTheme}>
      <AppBar>
        <Toolbar>
          <Link>Winter</Link>
          <Link>Spring</Link>
          <Link>Summer</Link>
          <Link>Autumn</Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default SeasonsNavigation;
