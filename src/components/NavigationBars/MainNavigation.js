import { AppBar, Toolbar, ThemeProvider, CssBaseline } from "@mui/material";
import { Link } from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";
function MainNavigation() {
  return (
    <ThemeProvider theme={mainTheme}>
      <AppBar sx={{ alignItems: "center", width: "100%", position: "sticky" }}>
        <CssBaseline />
        <Toolbar variant="dense">
          <Link href="/">Home Page</Link>
          <Link href="/animePage">Anime Page</Link>
          <Link href="/mangaPage">Manga Page</Link>
          <Link href="/lightNovelPage">Light Novel Page</Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default MainNavigation;
