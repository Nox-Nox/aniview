import React from "react";
import { Skeleton } from "@mui/material";
import styles from "./cardviewskeleton.module.css"

function CardViewSkeleton() {
  return (
    <div>
      <div className={styles.series_type}>
        <Skeleton variant="rectangle" width="6rem" sx={{ borderRadius: "1rem", marginBottom:"1rem" }} />
      </div>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          {(Array.from(new Array(9)) || []).map((item, index) => (
            <div key={index} className={styles.card_container}>
              <div id={styles.cover}>
                <Skeleton variant="rectangular" width="11rem" height="15.5rem" sx={{ borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem" }} />
              </div>
              <div id={styles.totalep}>
                <Skeleton variant="text" width="45%" sx={{ marginLeft: "10px" }} />
              </div>
              <div id={styles.duration}>
                <Skeleton variant="text" width="45%" sx={{ marginLeft: "10px" }} />
              </div>
              <div id={styles.timer}>
                <Skeleton variant="text" width="50%" sx={{ marginLeft: "10px" }} />
              </div>
              <div id={styles.score}>
                <Skeleton variant="rectangle" width="60%" height="2rem" sx={{ marginLeft: "10px", borderRadius: "0.5rem" }} />
              </div>
              <div id={styles.description}>
                <Skeleton variant="text" width="90%" sx={{ marginLeft: "10px", marginTop: "8px" }} />
                <Skeleton variant="text" width="90%" sx={{ marginLeft: "10px" }} />
                <Skeleton variant="text" width="90%" sx={{ marginLeft: "10px" }} />
                <Skeleton variant="text" width="90%" sx={{ marginLeft: "10px" }} />
                <Skeleton variant="text" width="90%" sx={{ marginLeft: "10px" }} />
              </div>
              <div id={styles.genres}>
                <Skeleton variant="rectangular" width="30%" sx={{ marginLeft: "10px", borderRadius: "3rem" }} />
                <Skeleton variant="rectangular" width="25%" sx={{ marginLeft: "10px", borderRadius: "3rem" }} />
                <Skeleton variant="rectangular" width="28%" sx={{ marginLeft: "10px", borderRadius: "3rem" }} />
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
export default CardViewSkeleton;
