import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
  components: {
    MuiCardMedia: {
      styleOverrides: {
        root: {
          width: "10vw",
          borderTopLeftRadius: "1vw",
          borderBottomLeftRadius: "1vw",
          height: "100%",
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
