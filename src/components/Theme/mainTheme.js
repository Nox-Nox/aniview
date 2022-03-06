import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#d9d9d9",
          "&:hover": {
            color: "white",
          },
          textDecoration: "none",
          padding: "2vw",
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          width: "10vw",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto",
          padding: "2.5vw",
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
