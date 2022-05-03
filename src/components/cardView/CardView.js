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
          className={classes.boxshadow}
        >
          <Box>
            <CardMedia component="img" image={item.coverImage.large} />
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                borderBottomLeftRadius: "0.94vw",
              }}
              position="absolute"
              bottom="0"
              zIndex="1"
              width="10VW"
              height="auto"
            >
              <Typography
                color="white"
                paddingTop="1vh"
                paddingLeft="0.4vw"
                paddingRight="2px"
                paddingBottom="3vh"
                variant="body1"
              >
                {item.title.romaji}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              backgroundColor="blue"
              height="8vh"
              width="14vw"
              sx={{
                borderTopRightRadius: "1vw",
              }}
            >
              <Typography
                fontWeight="bold"
                color="white"
                fontSize="12px"
                padding="0.5vw"
                paddingTop="1vh"
                paddingBottom="0.1vh"
              >
                {item.episodes === null
                  ? "Total episodes: n/a"
                  : "Total episodes: " + item.episodes}
              </Typography>
              <Typography
                fontWeight="bold"
                color="white"
                fontSize="12px"
                padding="0.5vw"
                paddingTop="0.1vh"
                paddingBottom="0.1vh"
              >
                {item.duration === null
                  ? "Duration: n/a"
                  : "Duration: " + item.duration + " min"}
              </Typography>
              <Typography
                fontWeight="bold"
                color="white"
                fontSize="15px"
                padding="0.5vw"
                paddingTop="0.1vh"
                paddingBottom="0.1vh"
              >
                {item.nextAiringEpisode === null
                  ? "n/a"
                  : "Ep " +
                    item.nextAiringEpisode.episode +
                    " " +
                    "airing in " +
                    Math.floor(
                      item.nextAiringEpisode.timeUntilAiring / (3600 * 24)
                    ) +
                    " days, " +
                    Math.floor(
                      (item.nextAiringEpisode.timeUntilAiring % (3600 * 24)) /
                        3600
                    ) +
                    " hours"}
              </Typography>
            </Box>
            <Box
              className={classes.scroll}
              width="14vw"
              backgroundColor={mainTheme.palette.primary.light}
              height="18vh"
              maxHeight="100%"
            >
              <Box width="12.5vw">
                <Typography
                  color="white"
                  variant="body2"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  padding="0.5vw"
                />
              </Box>
            </Box>
            <Box
              width="14vw"
              backgroundColor="red"
              sx={{ borderBottomRightRadius: "1vw" }}
            >
              <Box
                width="13.6vw"
                sx={{
                  borderBottomRightRadius: "1.3vw",
                }}
                height="4vh"
                overflow="hidden"
                className={classes.scroll}
              >
                <Stack direction="row" spacing={1} marginTop="0.6vh">
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
