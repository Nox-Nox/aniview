import {
  Typography,
  CardMedia,
  createTheme,
  ThemeProvider,
  Box,
  Stack,
} from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";
import GenresChip from "../Chip/GenresChip";
import classes from "./Scroll.module.css";
let theme = createTheme({
  components: {
    MuiCardMedia: {
      styleOverrides: {
        root: {
          width: "10vw",
        },
      },
    },
  },
});

function CardView(props) {
  return (
    <ThemeProvider theme={theme}>
      {(props.items || []).map((item) => (
        <Box
          position="relative"
          height="28vh"
          key={item.id}
          sx={{
            display: "flex",
            margin: "2vw",
          }}
        >
          <Box
            sx={{
              float: "left",
              display:"flex",
            }}
          >
            <Box float="left">
              <CardMedia
              alignItems="flex-end"
                component="img"
                image={item.coverImage.large}
                height="100%"
                width="10vw"
                sx={{ borderTopLeftRadius: "20%" }}
              />
            </Box>
            <Box
              top="69%"
              width="10vw"
              height="31%"
              position="absolute"
              
              backgroundColor="rgba(0, 0, 0, 0.7)"
            >
              <Typography
                color={"white"}
                paddingTop="2px"
                paddingLeft="4px"
                paddingRight="2px"
                variant="body1"
              >
                {item.title.romaji}
              </Typography>
            </Box>
          </Box>
          <Box
            backgroundColor={mainTheme.palette.primary.light}
            width="10vw"
            sx={{
              
              borderTopRightRadius: "10px",
            }}
          >
            <Box
              className={classes.scroll}
              float="left"
              width="10vw"
              alignItems="flex-end"
              sx={{
                flexGrow: 1,
                flexDirection: "column",
                height: "75%",
                maxHeight: "100%",
                marginBottom: "1vh",
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
            <Stack
            alignItems="flex-end"
              className={classes.scroll}
              alignItems="center"
              spacing={1}
              
              sx={{
                
                flexGrow: 1,
                flexDirection: "column",
                height: "20%",
                justifyItems: "flex-end",
              }}
              width={"100%"}
              backgroundColor={mainTheme.palette.primary.light}
            >
              <GenresChip items={item.genres} />
            </Stack>
          </Box>
        </Box>
      ))}
    </ThemeProvider>
  );
}
export default CardView;
