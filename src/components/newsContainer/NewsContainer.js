import { Box, Typography } from "@mui/material";

function NewsContainer() {
  return (
    <Box display="flex">
    <Box backgroundColor="#171717" height="70vh" width="80%" borderRadius="3rem" justifyContent={"space-between"}>
        <Box backgroundColor="pink">
      <Typography fontFamily={"roboto"} color="white">efesfes</Typography>
      </Box>
    </Box>
    <Box backgroundColor="white" height="70vh" width="20%" borderRadius = "3rem"></Box>
    </Box>
  );
}
export default NewsContainer;
