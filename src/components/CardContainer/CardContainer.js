import { Grid, ThemeProvider } from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";
import React from "react";
import CardView2 from "../CardViewV2/CardView2";
import styles from "../CardContainer/cardcontainer.module.css";

function CardContainer(props) {
  return (
    <ThemeProvider theme={mainTheme}>
      <p className={styles.series_type}>
        {props.title}
      </p>
      <div className={styles.container}>

        <div className={styles.inner_container}>
         
            <CardView2 items={props.items} />
          
        </div>

      </div>
    </ThemeProvider>
  );
}

export default CardContainer;