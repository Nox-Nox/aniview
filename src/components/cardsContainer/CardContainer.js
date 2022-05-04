import { Box, ThemeProvider } from "@mui/material";
import CardView from "../cardView/CardView";
import { Grid, Typography } from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";

function CardContainer(props) {
  return (
    <ThemeProvider theme={mainTheme}>
      <Typography
        fontSize={"3rem"}
        textAlign="center"
        fontFamily="Roboto"
        fontWeight="bold"
      >
        {props.title}
      </Typography>
      <Box marginRight="7.1%" marginLeft="7.1%">
        <Box
          backgroundColor={mainTheme.palette.primary.main}
          marginBottom="8vh"
          borderRadius="3rem"
        >
          <Grid container justifyContent="space-around">
            <CardView items={props.items} />
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default CardContainer;
