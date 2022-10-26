import styles from "../GenresChip2/genreschipv2.module.css";


function GenresChip2(props) {
    return (props.items || []).map((genre, index) => (
        <div className={styles.chip} key={index}>
            <div className={styles.chip_content}>{genre}</div>
        </div>
    ))
}
export default GenresChip2;