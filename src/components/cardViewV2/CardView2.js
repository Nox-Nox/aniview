import { ThemeProvider } from "@emotion/react";
import { CardMedia } from "@mui/material";
import { Box, responsiveFontSizes } from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";

function CardView2(props){
    return(
<ThemeProvider theme={responsiveFontSizes(mainTheme)}>
            {(props.items || []).map((item) =>(
                <div key={item.id}>
                    
                <CardMedia component="img" image={item.coverImage.large} />
                </div>
            ))}
            </ThemeProvider>

    )
}
export default CardView2;