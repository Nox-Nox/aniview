import { Chip } from "@mui/material";
import React from "react";

function GenresChip(props) {
  return (props.items || []).map((item1, index) => (
    <Chip
      key={index}
      label={item1}
      size="small"
      variant="filled"
      sx={{
        // padding: "10px",
        background: "linear-gradient(to right bottom, #e364e1, #d238dd)",
      }}
    />
  ));
}
export default GenresChip;
