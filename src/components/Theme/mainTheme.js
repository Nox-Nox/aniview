import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
  components: {
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
