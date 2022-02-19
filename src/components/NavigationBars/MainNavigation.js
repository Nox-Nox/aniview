import { AppBar, Toolbar, ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme, Link } from "@mui/material";

const theme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#d9d9d9",
          "&:hover": {
            color: "white",
          },
          textDecoration: "none",
          padding: 20,
        },
      },
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 20,
  },
  palette: {
    primary: {
      main: "#171717",
    },
    secondary: {
      main: "#eeeeee",
    },
  },
});

function MainNavigation() {
  return (
    <ThemeProvider theme={theme}>
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
