import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";
import CardView from "../cardView/CardView";
import { Grid } from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";

function CardContainer(props) {
  return (
    <ThemeProvider theme={mainTheme}>
      <h1>{props.title}</h1>

      <Box backgroundColor={mainTheme.palette.primary.main} marginBottom="auto">
        <Grid columns={4} container justifyContent="space-around">
          <CardView items={props.list} />
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default CardContainer;
