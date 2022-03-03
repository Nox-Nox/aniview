import { AppBar, Toolbar, ThemeProvider } from "@mui/material";
import { Link } from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";
function MainNavigation() {
  return (
    <ThemeProvider theme={mainTheme}>
      <AppBar
        sx={{
          fontSize: "1.5vw",
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
