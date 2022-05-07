import React from "react";
import { Box, Typography } from "@mui/material";
import AverageScore from "../averageScore/AverageScore";

function TopInfoEp(props) {
  return (
    <Box>
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
              {props.episodes === null
                ? "Total episodes: n/a"
                : "Total episodes: " + props.episodes}
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
              {props.duration=== null
                ? "Duration: n/a"
                : "Duration: " + props.duration + " min"}
            </Typography>
          </Box>
        </Box>

        <AverageScore score={props.averagescore} />
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
          {props.airingep === null
            ? ""
            : "Ep " +
              props.airingep.episode +
              " " +
              "airing in " +
              Math.floor(props.airingep.timeUntilAiring / (3600 * 24)) +
              " days, " +
              Math.floor(
                (props.airingep.timeUntilAiring % (3600 * 24)) / 3600
              ) +
              " hours"}
        </Typography>
      </Box>
    </Box>
  );
}
export default TopInfoEp;