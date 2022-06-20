import { Box, Typography } from "@mui/material";
import { mainTheme } from "../../Theme/mainTheme";
import { useContext } from "react";
import { NewsContext } from "../../../pages/HomePage";
import React from "react";
import Button from "@mui/material/Button";

function NewsList() {
  const {data, set} = useContext(NewsContext);
  const index1 = 1

  return (
    <Box
      height="70vh"
      width="20%"
      marginRight="1.5vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        id = {index1}
        borderRadius="0.6rem"
        maxHeight="100%"
        overflow="auto"
        backgroundColor={mainTheme.palette.primary.light}
        onMouseLeave={() => {
          var wow = document.getElementById(index1);
          wow.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {(data || []).map((item, index) => (
          <Typography
            sx={{
              borderBottom: 1,
              borderWidth: "3px",
              borderColor: "#9B59B6",
            }}
            component={Button}
            variant="outlined"
            fontSize="15px"
            onClick={() => set(data[index])}
            width="100%"
            color="white"
            padding="0.6rem"
          >
            {item.title}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
export default NewsList;
