import React from "react";
import { Skeleton, Box, Typography } from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";

function NewsViewSkeleton() {
  return (
    <Box
      backgroundColor="#171717"
      height="70vh"
      width="96%"
      marginLeft="2%"
      borderRadius="3rem"
      marginBottom="30vh"
    >
      <Box
        width="100%"
        height="20vh"
        display="flex"
        justifyContent="center"
        marginBottom="3vh"
        marginTop="3vh"
      >
        <Box
          backgroundColor="#9b59b6"
          height="20vh"
          width="30vw"
          borderRadius="2rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Skeleton width="12vw" />
          <Skeleton width="12vw" />
          <Skeleton width="8vw" />
        </Box>
      </Box>

      <Box
        display="flex"
        backgroundColor="#171717"
        width="100%"
        borderRadius="3vw"
      >
        <Box
          display="flex"
          marginLeft="1.5vw"
          backgroundColor={mainTheme.palette.primary.light}
          height="70vh"
          width="75%"
          borderRadius="3rem"
          overflow="hidden"
          marginBottom="10vh"
        >
          <Box
            backgroundColor="red"
            height="10vh"
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Box marginLeft="2vw" marginTop="1vh">
              <Skeleton width="50vw" height="8vh" />
            </Box>
          </Box>
          <Box
            backgroundColor="yellow"
            width="12vw"
            height="100%"
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
          ></Box>
        </Box>
        <Box
          borderRadius="0.6rem"
          backgroundColor="purple"
          height="70vh"
          width="20%"
          marginRight="1.5vw"
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginLeft="1.5vw"
        >
          <Box
            maxHeight="100%"
            overflow="auto"
            backgroundColor={mainTheme.palette.primary.light}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}
export default NewsViewSkeleton;
