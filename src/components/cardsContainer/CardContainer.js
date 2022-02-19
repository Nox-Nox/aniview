import * as React from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import CardView from "../cardView/CardView";
import { Grid } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#171717",
    },
    secondary: {
      main: "#eeeeee",
    },
  },
});

function CardContainer(props) {
  return (
    <ThemeProvider theme={theme}>
      <h1>{props.title}</h1>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "primary.dark",
          marginBottom: 15,
        }}
      >
        <Grid
          container
          rowSpacing={2}
          spacing={0}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CardView items={props.list} />
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default CardContainer;
