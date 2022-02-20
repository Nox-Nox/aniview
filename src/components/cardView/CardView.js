import {
  Typography,
  CardMedia,
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  Box,
  ListItemSecondaryAction,
} from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";

let theme = createTheme({
  typography: {
    fontFamily: "",
  },
  components: {
    MuiCardMedia: {
      styleOverrides: {
        root: {
          width: "10vw",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {},
      },
    },
  },
});
theme = responsiveFontSizes(theme);

function CardView(props) {
  return (
    <ThemeProvider theme={theme}>
      {(props.items || []).map((item) => (
        <Box
          sx={{
            display: "flex",
            margin: 5,
          }}
        >
          <Box
            key={item.id}
            sx={{
              float: "left",
            }}
          >
            <CardMedia
              component="img"
              image={item.coverImage.large}
              height={"100%"}
            />
          </Box>
          <Box>
            <Box
              float="left"
              width="15vw"
              sx={{
                backgroundColor: mainTheme.palette.primary.light,
                borderRadius: "2px",
                overflowY: "auto",
                display: "flex",
                flexGrow: 1,
                flexDirection: "column",
                height: "100%",
                maxHeight: "265px",

                display: "flex",
              }}
            >
              <Typography color={"white"} fontSize="12px" padding={"5px"}>
                {item.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
      )
    </ThemeProvider>
  );
}
export default CardView;
