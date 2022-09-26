import { ThemeProvider } from "@emotion/react";
import { CardMedia } from "@mui/material";
import { Box, responsiveFontSizes } from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";
import styles from "../cardViewV2/cardview2.layout.module.css";

function CardView2(props) {
    return (
        <ThemeProvider theme={responsiveFontSizes(mainTheme)}>
            {(props.items || []).map((item) => (
                <div key={item.id} className={styles.container}>

                    {/* <CardMedia component="img" image={item.coverImage.large} /> */}
                    <div id={styles.cover}>
                        <img id={styles.imgsize} src={item.coverImage.large} alt="image" />
                    </div>
                    <div id={styles.totalep}>Total episodes: {item.episodes}</div>
                    <div id={styles.duration}>Duration {item.duration} min</div>
                    <div id={styles.score}> {item.averageScore} </div>
                    <div id={styles.timer}>
                    {item.nextAiringEpisode === null
            ? ""
            : "Ep " +
            item.nextAiringEpisode.episode +
              " " +
              "airing in " +
              Math.floor(item.nextAiringEpisode.timeUntilAiring / (3600 * 24)) +
              " days, " +
              Math.floor(
                (item.nextAiringEpisode.timeUntilAiring % (3600 * 24)) / 3600
              ) +
              " hours"}

                    </div>
                    <div id={item.id} className={styles.description} onMouseLeave={() => {
                        var wow = document.getElementById(item.id);
                        wow.scrollTo({ top: 0, behavior: "smooth" });
                    }} >
                        <div dangerouslySetInnerHTML={{ __html: item.description }} />
                    </div>
                    <div id={styles.genres}>genres chips</div>
                </div>
            ))}
        </ThemeProvider>

    )
}
export default CardView2;