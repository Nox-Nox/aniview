import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  Box,
} from "@mui/material";

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
        <Box sx={{ overflow: "hidden", display: "flex", margin: 5 }}>
          <Box
            key={item.id}
            sx={{
              float: "left",
              marginRight: 4,
            }}
          >
            <CardMedia component="img" image={item.coverImage.large} />
          </Box>
          <Box sx={{ float: "left", width: "15vw" }}>
            <Typography color={"white"} fontSize="12px">
              {item.description}
            </Typography>
          </Box>
        </Box>
      ))}
      )
    </ThemeProvider>
  );
}
export default CardView;
