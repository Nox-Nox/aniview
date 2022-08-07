import { createTheme } from "@mui/material";

export const AnimePageTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
            width:"20ch",
          "& .MuiSvgIcon-root": {
            color: "blueviolet",
          },
          "& .MuiSelect-select": {
            color: "blueviolet",
          },
          select:{
            color: "blueviolet",
          }
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "blueviolet",
        },
      },
    
    },

    MuiPaper:{
        styleOverrides: {
            root: {
                background:"#28282B ",
                marginTop: "10px",
            }
        }
    },
MuiList:{
    styleOverrides: {
        root: {
            "& .MuiMenu-paper":{
                marginTop:"10px",
            },
            // background: "red",
        }
    }
}
  },
});
