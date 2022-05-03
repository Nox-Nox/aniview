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
          backgroundColor={mainTheme.palette.primary.light}
        >
          <Box>
            <CardMedia component="img" image={item.coverImage.large} />
            <Box
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                borderBottomLeftRadius: "0.9vw",
              }}
              position="absolute"
              bottom="0"
              zIndex="1"
              width="10vw"
              height="auto"
            >
              <Typography
                color="white"
                paddingTop="1vh"
                paddingLeft="0.4vw"
                paddingRight="2px"
                paddingBottom="1vh"
                variant="body1"
              >
                {item.title.romaji}
              </Typography>
              <Typography
                color="pink"
                paddingLeft="0.4vw"
                paddingRight="2px"
                paddingBottom="1vh"
                fontSize="0.8em"
              >
                {item.studios.edges.length === 0
                  ? "nope"
                  : item.studios.edges.map((n) => n.node.name)}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box
              backgroundColor={mainTheme.palette.primary.light}
              height="8vh"
              width="14vw"
              sx={{
                borderTopRightRadius: "1vw",
              }}
            >
              <Typography
                fontWeight="bold"
                color="violet"
                fontSize="0.7em"
                padding="0.5vw"
                paddingTop="0.8vh"
                paddingBottom="0.1vh"
              >
                {item.episodes === null
                  ? "Total episodes: n/a"
                  : "Total episodes: " + item.episodes}
              </Typography>
              <Typography
                fontWeight="bold"
                color="violet"
                fontSize="0.7em"
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
                color="#dd45dd"
                fontSize="1em"
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
                  fontSize="0.8em"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  padding="0.5vw"
                />
              </Box>
            </Box>
            <Box
              width="14vw"
              backgroundColor={mainTheme.palette.primary.light}
              sx={{ borderBottomRightRadius: "1vw" }}
            >
              <Box
                width="13.5vw"
                sx={{
                  borderBottomRightRadius: "1.2vw",
                }}
                height="4vh"
                overflow="hidden"
                className={classes.scroll}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  marginTop="0.6vh"
                  marginLeft="0.4vw"
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
