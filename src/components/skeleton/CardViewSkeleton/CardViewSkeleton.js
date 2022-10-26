import React from "react";
import { Skeleton } from "@mui/material";
import styles from "./cardviewskeleton.module.css"

function CardViewSkeleton() {
  return (
    <div>
      <div className={styles.series_type}>
        <Skeleton variant="rectangle" width="5%" />
      </div>
      <div className={styles.container}>
        <div className={styles.inner_container}>
          <Skeleton variant="rectangular" width={210} height={60} />
        </div>
      </div>
    </div>
  )
}
export default CardViewSkeleton;
