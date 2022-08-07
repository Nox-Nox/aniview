import { createTheme } from "@mui/material";

export const AnimePageTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "20ch",
          "& .MuiSvgIcon-root": {
            color: "blueviolet",
          },
          "& .MuiSelect-select": {
            color: "#9980FA",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color:"#9980FA",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#28282B ",
          marginTop: "10px",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          "& li": {
            padding: "10px",
          },
          "& li:hover": {
            background: "blueviolet",
            color: "white",
          },
          "& li.Mui-selected": {
            background: "#9980FA",
            color:"white",
          },
          "& li.Mui-selected:hover":{
            background: "#5758BB",
            color:"white",
          }
        },
      },
    },
  },
});
