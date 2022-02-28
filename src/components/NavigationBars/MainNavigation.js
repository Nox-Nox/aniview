import { AppBar, Toolbar, ThemeProvider, CssBaseline } from "@mui/material";
import { Link } from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";
function MainNavigation() {
  return (
    <ThemeProvider theme={mainTheme}>
      <AppBar
        sx={{
          alignItems: "center",
          position: "relative",
        }}
      >
        <Toolbar>
          <Link href="/Home">Home</Link>
          <Link href="/Anime">Anime</Link>
          <Link href="/Manga">Manga</Link>
          <Link href="/LightNovel">Light Novel</Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default MainNavigation;
