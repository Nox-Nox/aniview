import {
  Typography,
  ThemeProvider,
  Box,
  responsiveFontSizes,
} from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";
import classes from "./Scroll.module.css";
import React from "react";
import BottomGenre from "./bottomGenres/BottomGenres";
import { Suspense } from "react";
import { Skeleton } from "@mui/material";
const LeftMediaTitle = React.lazy(() => import("./leftMediaTitle/LeftMediaTitle"));
const AverageScore = React.lazy(() => import("./averageScore/AverageScore"));

function CardView(props) {
  return (
    <ThemeProvider theme={responsiveFontSizes(mainTheme)}>
      {(props.items || []).map((item) => (
        <Box
          key={item.id}
          display="flex"
          position="relative"
          height="30vh"
          width="23.5vw"
          margin="2vw"
          flexDirection="row"
          className={classes.boxshadow}
          backgroundColor={mainTheme.palette.primary.light}
        ><Suspense fallback={<Skeleton variant="rectangle" width="100%" height="30vh" sx={{bgcolor:"white"}} />}>
          <LeftMediaTitle
            cover={item.coverImage.large}
            title={item.title.romaji}
            studios={
              item.studios.edges.length === 0
                ? ""
                : item.studios.edges.map(
                    (n, index) => (index ? ", " : "") + n.node.name
                  )
            }
          />
          </Suspense>
          <Box display="flex" flexDirection="column">
            <Box
              height="8vh"
              display="flex"
              flexDirection="row"
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
              <Suspense fallback={<Skeleton variant="rectangle" width="100%" />}>
              <AverageScore score={item.averageScore} />
              </Suspense>
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
                component="div"
                id={item.id}
                className={classes.scroll}
                width="13.5vw"
                height="18vh"
                maxHeight="100%"
                onMouseLeave={() => {
                  var wow = document.getElementById(item.id);
                  wow.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <Typography
                  color="white"
                  fontSize="0.8em"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                  padding="0.5vw"
                />
              </Box>
              <BottomGenre genre={item.genres} />
            </Box>
          </Box>
        </Box>
      ))}
    </ThemeProvider>
  );
}
export default CardView;
