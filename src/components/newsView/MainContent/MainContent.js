import { Box, Typography } from "@mui/material";


let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

function MainContent(){
    return (

        <Box height="65vh" backgroundColor="cyan" width="100%">
        <Box>
          <Typography fontSize="2vw" align="center">Title</Typography>
          <Typography backgroundColor="blue" color="white" margin="1rem">
            <Box>{viewportHeight}</Box>
            <Box>{viewportWidth}</Box>
            <Box>Description</Box>
                    efesfes
            <Box height="40vh" backgroundColor="tomato">Big Images or Embedded yt videos</Box>
            <Box>Description</Box>
          </Typography>
        </Box>
      </Box>

    )
}
export default MainContent;