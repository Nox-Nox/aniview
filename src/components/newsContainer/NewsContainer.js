import { Box, Typography } from "@mui/material";

let viewportHeight = window.innerHeight;
let viewportWidth = window.innerWidth;

function NewsContainer() {
  return (
    // this is container
    <Box>
      {/* quotes component */}
      <Box height="12vh" backgroundColor="lime" width="30vw"></Box>
      <Box display="flex" flexDirection="column">
        {/* component main */}
        <Box
          display="flex"
          width="100%"
          backgroundColor="orange"
          marginBottom="5vh"
        >
          <Box
            display="flex"
            justifyContent="flex-start"
            backgroundColor="#171717"
            height="70vh"
            width="75%"
            borderRadius="3rem"
            overflow="hidden"
            margin="auto"
            alignItems="center"
          >
            {/* component1 */}
            <Box height="65vh" backgroundColor="cyan" width="100%">
              <Box>
                <Typography backgroundColor="blue" color="white" margin="1rem">
                  <Box>{viewportHeight}</Box>
                  <Box>{viewportWidth}</Box>
                  efesfes
                </Typography>
              </Box>
            </Box>

            {/* component2 */}
            <Box backgroundColor="pink" width="12vw" height="65vh">
              <Box width="12vw" height="20vh" backgroundColor="green">
                cardmedia
              </Box>
            </Box>
          </Box>

          {/* component3 */}
          <Box
            backgroundColor="white"
            height="70vh"
            width="20%"
            borderRadius="3rem"
            marginRight="1.5vw"
          ></Box>
        </Box>

        {/* just a copy used for reference, to delete later */}
        <Box display="flex" width="100%" >
          <Box
            display="flex"
            justifyContent="flex-start"
            backgroundColor="#171717"
            height="70vh"
            width="75%"
            borderRadius="3rem"
            overflow="hidden"
            margin="auto"
            alignItems="center"
          >
            {/* component1 */}
            <Box height="65vh" backgroundColor="cyan" width="100%">
              <Box>
                <Typography backgroundColor="blue" color="white" margin="1rem">
                  efesfes
                </Typography>
              </Box>
            </Box>

            {/* component2 */}
            <Box backgroundColor="pink" width="12vw" height="65vh">
              <Box width="12vw" height="20vh" backgroundColor="green">
                cardmedia
              </Box>
            </Box>
          </Box>

          {/* component3 */}
          <Box
            backgroundColor="white"
            height="70vh"
            width="20%"
            borderRadius="3rem"
            marginRight="1.5vw"
          ></Box>
        </Box>
      </Box>
    </Box>
  );
}
export default NewsContainer;
