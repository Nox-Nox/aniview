import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";
import CardView from "../cardView/CardView";
import { Grid } from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";

function CardContainer(props) {
  return (
    <ThemeProvider theme={mainTheme}>
      <h1>{props.title}</h1>
      <Box
        backgroundColor={mainTheme.palette.primary.main}
        marginBottom="auto"
        sx={{ flexGrow: 1 }}
      >
        <Grid
          columns={4}
          container
          rowSpacing={1}
          item
          xs={6}
          justifyContent="center"
        >
          <CardView items={props.list} />
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default CardContainer;
