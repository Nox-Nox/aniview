import React from "react";
import { Box } from "@mui/system";

export default () => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      display="flex"
      marginTop={"25vh"}
    >
      <img
        src={require("../Gifs/Banime1.gif")}
        style={{ width: "25vw" }}
        alt="Loading..."
      />
    </Box>
  );
};
