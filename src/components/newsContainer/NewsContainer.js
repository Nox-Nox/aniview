import { Box, Typography } from "@mui/material";
import DailyQuote from "../newsView/DailyQuote/DailyQuote"
import NewsView from "../newsView/NewsView";



function NewsContainer() {
  return (
    // this is container
    <Box>
        <DailyQuote />
        <NewsView />
    
    </Box>
  );
}
export default NewsContainer;
