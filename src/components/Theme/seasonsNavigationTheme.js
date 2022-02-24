import { createTheme } from "@mui/material";

const SeasonsNavigationTheme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#efefef",
          "&:hover": {
            color: "white",
          },
          textDecoration: "none",
          padding: 20,
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
          left: "37vw",
          alignItems: "center",
          position: "relative",
          marginTop: "2vh",
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
