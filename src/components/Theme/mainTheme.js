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
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root:{
          borderBottomLeftRadius:"2rem",
          borderBottomRightRadius:"2rem",
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
