import React from "react";
import classes from "../Scroll.module.css";
import { Box, Stack } from "@mui/material";
import GenresChip from "../chip/GenresChip";

function BottomGenre(props) {
  return (
    <Box
      width="13.5vw"
      sx={{
        borderBottomRightRadius: "1.2vw",
      }}
      height="4vh"
      className={classes.scroll}
    >
      <Stack direction="row" spacing={1} marginTop="0.6vh" marginLeft="0.4vw">
        <GenresChip items={props.genre} />
      </Stack>
    </Box>
  );
}
export default BottomGenre;
