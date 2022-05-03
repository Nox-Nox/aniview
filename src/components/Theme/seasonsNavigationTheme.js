import { createTheme } from "@mui/material";

const SeasonsNavigationTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto",
          fontSize: "1.2vw",
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

export default SeasonsNavigationTheme;
