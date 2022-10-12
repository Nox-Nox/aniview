import { Grid, ThemeProvider} from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";
import React from "react";
import CardView2 from "../cardViewV2/CardView2";
import CardViewSkeleton from "../skeleton/CardViewSkeleton";
import styles from "../CardContainer/cardcontainer.module.css";

function CardContainer(props) {
  return (
    <ThemeProvider theme={mainTheme}>
      <p className={styles.series_type}>
        {props.title}
      </p>
      <div className={styles.container}>
        {props.loaded ? (
          <CardViewSkeleton />
        ) : (
          <div className={styles.inner_container}>
            <Grid container justifyContent="space-around">
              <CardView2 items={props.items} />

            </Grid>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default CardContainer;