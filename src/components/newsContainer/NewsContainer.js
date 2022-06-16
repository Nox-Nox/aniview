import { Box } from "@mui/material";
import DailyQuote from "../newsView/DailyQuote/DailyQuote"
import NewsView from "../newsView/NewsView";


function NewsContainer(props) {
  return (

    <Box>
        <DailyQuote />
        <NewsView data = {props.data}/>
    </Box>
  );
}
export default NewsContainer;
