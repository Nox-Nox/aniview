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
