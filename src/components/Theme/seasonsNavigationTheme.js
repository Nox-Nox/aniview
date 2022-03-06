import { createTheme } from "@mui/material";

const SeasonsNavigationTheme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "lightgrey",
          textDecoration:"none",
          "&:hover": {
            color: "white",
          },
          padding: "1rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto",
          fontSize: "1.2vw",
          padding: "2.5vw",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          width: "28vw",
          alignItems: "center",
          position: "relative",
          marginTop: "2vh",
          borderRadius: "8vw",
        },
      },
    },
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

export default SeasonsNavigationTheme;
