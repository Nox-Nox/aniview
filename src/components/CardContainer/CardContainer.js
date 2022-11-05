import React from "react";
import CardView2 from "../CardViewV2/CardView2";
import styles from "../CardContainer/cardcontainer.module.css";

function CardContainer(props) {
  return (
    <div id={props.ID}>
      <p className={styles.series_type}>
        {props.title}
      </p>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <CardView2 items={props.items} />
        </div>
      </div>
    </div>
  );
}

export default CardContainer;