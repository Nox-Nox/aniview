import MainContent from "../newsView/MainContent/MainContent";
import SecondaryContent from "../newsView/SecondaryContent/SecondaryContent";
import NewsList from "../newsView/NewsList/NewsList";
import { Box } from "@mui/material";
import React from "react";



function NewsView() {

  return (
    <Box display="flex" flexDirection="column">
      {/* component main */}

      <Box display="flex" width="100%" marginBottom="5vh">
        <Box
          // sx={{border:5, borderColor:"black"}}
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
          {/* component1 NewsView */}
          <MainContent />

          {/* component2 */}
          <SecondaryContent />
        </Box>

        {/* component3 */}
        
        <NewsList />
      </Box>
    </Box>
  );
}
export default NewsView;
