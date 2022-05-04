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
import React from "react";

import AverageScore from "../averageScore/AverageScore";

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
                fontSize="0.95em"
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
                  ? ""
                  : item.studios.edges.map(
                      (n, index) => (index ? ", " : "") + n.node.name
                    )}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column">
            <Box
              height="8vh"
              display="flex"
              flexDirection="row"
              backgroundColor={mainTheme.palette.primary.light}
              sx={{
                borderTopRightRadius: "1vw",
              }}
            >
              <Box
                width="7vw"
                height="5vh"
                flexDirection="column"
                justifyContent="flex-start"
              >
                <Box width="7.5vw">
                  <Typography
                    fontWeight="bold"
                    color="#fa88dd"
                    fontSize="0.75em"
                    padding="0.5vw"
                    paddingTop="0.8vh"
                    paddingBottom="0.1vh"
                  >
                    {item.episodes === null
                      ? "Total episodes: n/a"
                      : "Total episodes: " + item.episodes}
                  </Typography>
                </Box>

                <Box width="8vw">
                  <Typography
                    fontWeight="bold"
                    color="#fa88dd"
                    fontSize="0.75em"
                    padding="0.5vw"
                    paddingTop="0.1vh"
                    paddingBottom="0.1vh"
                  >
                    {item.duration === null
                      ? "Duration: n/a"
                      : "Duration: " + item.duration + " min"}
                  </Typography>
                </Box>
              </Box>
              <AverageScore score={item.averageScore} />
            </Box>

            <Box>
              <Typography
                fontWeight="bold"
                color="#e88aff"
                fontSize="1em"
                padding="0.5vw"
                paddingTop="0.1vh"
                paddingBottom="0.1vh"
              >
                {item.nextAiringEpisode === null
                  ? ""
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
            <Box display="flex" flexDirection="column">
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
        </Box>
      ))}
    </ThemeProvider>
  );
}
export default CardView;
