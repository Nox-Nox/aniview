import { AppBar, Toolbar, ThemeProvider } from "@mui/material";
import { Link } from "@mui/material";
import SeasonsNavigationTheme from "../Theme/seasonsNavigationTheme";

function SeasonsNavigation(props) {
  return (
    <ThemeProvider theme={SeasonsNavigationTheme}>
      <AppBar>
        <Toolbar>
          <Link href="#" onClick={() => props.season("WINTER")}>
            Winter
          </Link>
          <Link href="#" onClick={() => props.season("SPRING")}>
            Spring
          </Link>
          <Link href="#" onClick={() => props.season("SUMMER")}>
            Summer
          </Link>
          <Link href="#" onClick={() => props.season("FALL")}>
            Fall
          </Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default SeasonsNavigation;
