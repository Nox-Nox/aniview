import { Box, Typography } from "@mui/material";
import { mainTheme } from "../../Theme/mainTheme";
import { useContext } from "react";
import { NewsContext } from "../../../pages/HomePage";
import React from "react";
import Button from "@mui/material/Button";


function NewsList(props) {
  const newscontext = useContext(NewsContext);

  return (

      <Box
        backgroundColor={mainTheme.palette.primary.light}
        height="70vh"
        width="20%"
        borderRadius="1rem"
        marginRight="1.5vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box maxHeight="100%" overflow="auto">
          {(newscontext || []).map((item, index) => (
            <Typography component={Button} variant="outlined"  fontSize="15px" onClick={() =>props.switchNews(index)} width="100%" color="white" padding="0.6rem" key={item.id}>
              {item.title} 
            </Typography>
          ))}
        </Box>
      </Box>

  );
}
export default NewsList;
