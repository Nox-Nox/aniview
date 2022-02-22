import {
  Typography,
  CardMedia,
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  Box,
} from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";

let theme = createTheme({
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
              sx={{ borderTopLeftRadius: "20%" }}
            />
          </Box>
          <Box
            backgroundColor={mainTheme.palette.primary.light}
            sx={{ borderBottomRightRadius: "10%" }}
          >
            <Box
              float="left"
              width="10vw"
              sx={{
                overflowY: "auto",
                flexGrow: 1,
                flexDirection: "column",
                height: "22vh",
                maxHeight: "250vh",
                display: "flex",
              }}
            >
              <Typography
                color={"white"}
                fontSize="12px"
                variant="body2"
                dangerouslySetInnerHTML={{ __html: item.description }}
                padding="1vh"
              ></Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </ThemeProvider>
  );
}
export default CardView;
