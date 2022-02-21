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
            margin: "2vw",
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
              height="250vh"
              width="10vw"
              display="flex"
            />
          </Box>
          <Box backgroundColor={mainTheme.palette.primary.light}>
            <Box
              float="left"
              width="10vw"
              sx={{
                borderRadius: "2px",
                overflowY: "auto",
                flexGrow: 1,
                flexDirection: "column",
                height: "20vh",
                maxHeight: "250vh",
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
    </ThemeProvider>
  );
}
export default CardView;
