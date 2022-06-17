import { createTheme } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


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
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto",
          fontSize: "20rem",
        }
      }
    }
  },

  palette: {
    primary: {
      main: "#171717",
    },
    secondary: {
      main: "#eeeeee",
    },
  },
})


;
