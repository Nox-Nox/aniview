import { AppBar, Toolbar, ThemeProvider, CssBaseline } from "@mui/material";
import { Link } from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";
function MainNavigation() {
  return (
    <ThemeProvider theme={mainTheme}>
      <AppBar sx={{ alignItems: "center", position: "sticky" }}>
        <Toolbar>
          <Link href="/">Home</Link>
          <Link href="/animePage">Anime</Link>
          <Link href="/mangaPage">Manga</Link>
          <Link href="/lightNovelPage">Light Novel</Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default MainNavigation;
