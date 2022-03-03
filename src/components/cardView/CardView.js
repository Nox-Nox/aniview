import {
  Typography,
  CardMedia,
  createTheme,
  ThemeProvider,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";
import GenresChip from "../Chip/GenresChip";
import classes from "./Scroll.module.css";
import { borderColor } from "@mui/system";
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
          key={item.id}
            className = {classes.border}
            display="flex"
            position="relative"
            height="28vh"
            margin="2vw"
            flexDirection="row"
          >
            <Box>
              <CardMedia
                alignItems="flex-end"
                component="img"
                image={item.coverImage.large}
                width="10vw"
                height="100%"
              />
              <Box
                sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
                position="absolute"
                bottom="0"
                width="10VW"
              >
                <Typography
                  height="10vh"
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
            <Box>
              <Box
                className={classes.scroll}
                width="15vw"
                alignItems="flex-end"
                backgroundColor={mainTheme.palette.primary.light}
                sx={{
                  flexDirection: "column",
                  height: "80%",
                  maxHeight: "120%",
                }}
              >
                <Typography
                  color={"white"}
                  fontSize="12px"
                  variant="body2"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  padding="1vw"
                />
              </Box>

              <Stack
                alignItems="center"
                className={classes.scroll}
                direction="row"
                spacing={1}
                flexGrow={1}
                width="15vw"
                height="20%"
                backgroundColor={mainTheme.palette.primary.light}
                padding="5px"
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
