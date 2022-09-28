import { Skeleton, Grid, Box } from "@mui/material";
import React from "react";
import { mainTheme } from "../Theme/mainTheme";

function CardViewSkeleton() {
  return (
    <Grid
      container
      justifyContent="space-around"
      sx={{ backgroundColor: "#171717", borderRadius: "3rem" }}
    >
      {(Array.from(new Array(9)) || []).map((item, index) => (
        <Box
          key={index}
          display="flex"
          position="relative"
          height="26vh"
          width="23.5vw"
          marginTop="50px"
          flexDirection="row"
          justifyContent="flex-start"
          backgroundColor={mainTheme.palette.primary.light}
          borderRadius="1vw"
        >
          <Skeleton
            variant="rectangular"
            width="10vw"
            height="30vh"
            sx={{ borderTopLeftRadius: "1vw", borderBottomLeftRadius: "1vw" }}
          />
          <Box
            height="5vh"
            width="7vw"
            flexDirection="column"
            justifyContent="flex-start"
          >
            <Box marginLeft="0.5vw">
              <Skeleton />
              <Skeleton />
              <Skeleton width="9vw" />
            </Box>
            <Box marginLeft="0.5vw" marginTop="2vh">
              <Skeleton width="12vw" />
              <Skeleton width="12vw" />
              <Skeleton width="12vw" />
              <Skeleton width="12vw" />
              <Skeleton width="12vw" />
              <Skeleton width="8vw" />
            </Box>
            <Box
              position="absolute"
              bottom="0"
              marginLeft="0.5vw"
              paddingBottom="0.5vw"
            >
              <Skeleton width="12vw" />
            </Box>
          </Box>
        </Box>
      ))}
    </Grid>
  );
}
export default CardViewSkeleton;
