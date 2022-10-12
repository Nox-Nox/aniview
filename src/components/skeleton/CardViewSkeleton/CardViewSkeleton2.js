import styles from "../../skeleton/CardViewSkeleton/cardviewskeleton.module.css"
import { Skeleton,Box } from "@mui/material";


function CardViewSkeleton2(){
  
return(
    <div className={styles.outer_container}>
    <div className={styles.inner_container}>
    
    {/* {(Array.from(new Array(9)) || []).map((item, index) => ( */}
        <div  className={styles.container}>
            <div className={styles.cover}> 
            <Skeleton height="30vh" />
            </div>
            
        </div>
    {/* ))} */}
    </div>

</div>
)


}
export default CardViewSkeleton2;