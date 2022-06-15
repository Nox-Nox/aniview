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
import LeftMediaTitle from "../cardView/leftMediaTitle/LeftMediaTitle";
import TopInfoEp from "./topInfoEp/TopInfoEp";

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
        >
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

          <Box display="flex" flexDirection="column">
            <TopInfoEp
              episodes={item.episodes}
              duration={item.duration}
              averagescore={item.averageScore}
              airingep={item.nextAiringEpisode}
            />

            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
            >
              <Box
                component="div"
                id={item.id}
                className={classes.scroll}
                width="13.5vw"
                height="15vh"
                maxHeight="97%"
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
            </Box>
            <BottomGenre genre={item.genres} />
          </Box>
        </Box>
      ))}
    </ThemeProvider>
  );
}
export default CardView;
