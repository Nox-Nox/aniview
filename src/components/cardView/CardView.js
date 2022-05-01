import {
  Typography,
  CardMedia,
  ThemeProvider,
  Box,
  Stack,
} from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";
import GenresChip from "../Chip/GenresChip";
import classes from "./Scroll.module.css";

function CardView(props) {
  return (
    <ThemeProvider theme={mainTheme}>
      {(props.items || []).map((item) => (
        <Box
          key={item.id}
          display="flex"
          position="relative"
          height="30vh"
          margin="2vw"
          flexDirection="row"
          borderradius="2rem"
        >
          <Box
            sx={{
              borderTopLeftRadius: "1rem",
              borderBottomLeftRadius: "1rem",
            }}
          >
            <CardMedia
              sx={{
                borderTopLeftRadius: "1rem",
                borderBottomLeftRadius: "1rem",
              }}
              component="img"
              image={item.coverImage.large}
              height="100%"
            />
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderBottomLeftRadius: "1rem",
              }}
              position="absolute"
              bottom="0"
              width="10VW"
              height="auto"
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
          <Box>
            <Box
              className={classes.scroll}
              width="13vw"
              alignItems="flex-end"
              backgroundColor={mainTheme.palette.primary.light}
              sx={{
                borderTopRightRadius: "1rem",
                flexDirection: "column",
                height: "24vh",
                maxHeight: "120%",
              }}
            >
              <Box width="12.5vw">
                <Typography
                  color={"white"}
                  variant="body2"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  padding="1vw"
                />
              </Box>
            </Box>
            <Box
              width="13vw"
              backgroundColor={mainTheme.palette.primary.light}
              sx={{ borderBottomRightRadius: "1rem" }}
            >
              <Box
                className={classes.scroll}
                sx={{
                  flexDirection: "column",
                }}
                width="12.8vw"
                height="6vh"
                position="relative"
                overflow="hidden"
              >
                <Stack
                  height="5vh"
                  position="absolute"
                  justifyContent="start"
                  direction="row"
                  spacing={1}
                  padding="0.7vw"
                  marginRight="10px"
                >
                  <GenresChip items={item.genres} />
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </ThemeProvider>
  );
}
export default CardView;
