import { Box, ThemeProvider } from "@mui/material";
import CardView from "../cardView/CardView";
import { Grid, Typography } from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";
import pic from "../cardsContainer/Background.jpg"
import React from "react";
import { Skeleton } from "@mui/material";
import Loading from "../skeleton/loading";

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
        { props.loaded ? 
        <Loading />:
        <Box
          sx={{backgroundImage:`url(${pic})`, backgroundSize:"cover"}}
          marginBottom="8vh"
          borderRadius="3rem"
        >
          <Grid container justifyContent="space-around">
            <CardView items={props.items} loaded={props.loaded} />
          </Grid>
        </Box>
        }
      </Box>
    </ThemeProvider>
  );
}

export default CardContainer;
