import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "lightgrey",
          textDecoration:"none",
          "&:hover": {
            color: "white",
          },
          padding: "2rem",
          
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
