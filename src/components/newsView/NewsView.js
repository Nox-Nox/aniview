import MainContent from "../newsView/MainContent/MainContent"
import SecondaryContent from "../newsView/SecondaryContent/SecondaryContent";
import NewsList from "../newsView/NewsList/NewsList";
import { Box } from "@mui/material";


function NewsView(props){
    return(
        <Box backgroundColor="purple" display="flex" flexDirection="column">
        {/* component main */}
        
        <Box display="flex" width="100%" marginBottom="5vh">
          <Box
            display="flex"
            justifyContent="flex-start"
            backgroundColor="#171717"
            height="70vh"
            width="75%"
            borderRadius="1rem"
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
            <NewsList data={props.data} />
        </Box>
        
      </Box>
    )
}
export default NewsView;