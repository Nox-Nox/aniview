import React from "react";
import { Skeleton, Box} from "@mui/material";
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
          borderRadius="1rem"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box margin="0.5vh">
            <Skeleton width="14vw" height="4vh" />
          </Box>
          <Box
            margin="0.5vh"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Skeleton width="20vw" />
            <Skeleton width="20vw" />
            <Box>
              <Skeleton width="12vw" />
            </Box>
          </Box>
          <Box margin="0.2vh">
            <Skeleton width="5vw" />
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        height="75vh"
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
          justifyContent="flex-start"
        >
          <Box
            height="10vh"
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <Box padding="1vh">
              <Skeleton width="50vw" height="8vh" />
            </Box>
            <Box padding="1vh">
              {/* sx={{bgcolor:"white"}} */}
              <Skeleton width="57vw" variant="text" />
              <Skeleton width="53vw" variant="text" />
              <Skeleton width="57vw" variant="text" />
              <Skeleton width="57vw" variant="text" />
              <Skeleton width="54vw" variant="text" />
              <Skeleton width="54vw" variant="text" />
              <Skeleton width="57vw" variant="text" />
              <Skeleton width="57vw" variant="text" />
              <Skeleton width="56vw" variant="text" />
              <Skeleton width="57vw" variant="text" />
              <Skeleton width="57vw" variant="text" />
              <Skeleton width="53vw" variant="text" />
              <Skeleton width="54vw" variant="text" />
              <Skeleton width="57vw" variant="text" />
              <Skeleton width="57vw" variant="text" />
              <Skeleton width="50vw" variant="text" />
            </Box>
          </Box>
          <Box heighth="70vh">
            <Box
              width="12vw"
              display="flex"
              maxHeight="32vh"
              flexDirection="column"
              alignItems="flex-end"
            >
              <Skeleton variant="rectangular" width="12vw" height="32vh" />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
            ></Box>
            <Box height="38vh" display="flex" flexDirection="column-reverse">
              <Box padding="1vh">
                <Skeleton width="8vw" variant="text" />
                <Skeleton width="8vw" variant="text" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          borderRadius="0.6rem"
          backgroundColor={mainTheme.palette.primary.light}
          height="70vh"
          width="20%"
          marginRight="1.5vw"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          marginLeft="1.5vw"
        >
          {(Array.from(new Array(10)) || []).map((item, index) => (
            <Box padding="1vh">
              <Skeleton variant="rectangular" width="18vw" height="5vh" />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
export default NewsViewSkeleton;
