import { Box, ThemeProvider } from "@mui/material";
import CardView from "../cardView/CardView";
import { Grid, Typography } from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";
import React from "react";
import Loading from "../skeleton/Loading";

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
        {props.loaded ? (
          <Loading />
        ) : (
          <Box marginBottom="8vh" borderRadius="3rem" backgroundColor="#171717">
            <Grid container justifyContent="space-around">
              <CardView items={props.items} loaded={props.loaded} />
            </Grid>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default CardContainer;
