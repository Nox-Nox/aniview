import { ThemeProvider } from "@emotion/react";


import { responsiveFontSizes } from "@mui/material";
import { mainTheme } from "../Theme/mainTheme";
import styles from "../cardViewV2/cardview2.layout.module.css";
import GenresChip2 from "./GenresChip2/GenresChipV2";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbsUpDownOutlinedIcon from "@mui/icons-material/ThumbsUpDownOutlined";

function CardView2(props) {
    return (
        <ThemeProvider theme={responsiveFontSizes(mainTheme)}>
            {(props.items || []).map((item) => (
                <div key={item.id} className={styles.container}>

                    {/* <CardMedia component="img" image={item.coverImage.large} /> */}
                    <div id={styles.cover}>
                        <img id={styles.imgsize} src={item.coverImage.large} alt="anime cover" />
                        <div className={styles.title_container}>
                            <p className={styles.title}>{item.title.romaji}</p>
                            <p className={styles.studio}>
                                {
                                    item.studios.edges.length === 0
                                        ? ""
                                        : item.studios.edges.map(
                                            (n, index) => (index ? ", " : "") + n.node.name
                                        )
                                }

                            </p>
                        </div>
                    </div>



                    <div id={styles.totalep}>Total episodes: {item.episodes}</div>
                    <div id={styles.duration}>Duration: {item.duration} min</div>
                    <div id={styles.score}>

                        <div id={styles.score_thumb}>
                            {item.averageScore > 70 ?
                                <ThumbUpAltOutlinedIcon sx={{ color: "lightgreen" }} /> :

                                item.averageScore < 60 && item.averageScore !== null ?
                                    <ThumbDownAltOutlinedIcon sx={{ color: "red" }} /> :

                                    item.averageScore < 78 && item.averageScore !== null ?
                                        <ThumbsUpDownOutlinedIcon sx={{ color: "yellow" }} /> : ""
                            }
                        </div>
                        {item.averageScore > 0 ?
                            <div id={styles.score_number}>
                                {item.averageScore}%
                            </div>
                            : ""
                        }

                    </div>
                    <div id={styles.timer}>
                        {item.nextAiringEpisode === null
                            ? "N/A"
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
                    <div className={styles.genres}>
                        {/* <Stack direction="row" spacing={1} marginTop="0.6vh" marginLeft="0.4vw" overflow="auto">
                            <GenresChip items={item.genres} />
                        </Stack> */}
                        <GenresChip2 items={item.genres} />
                    </div>
                </div>
            ))}
        </ThemeProvider>

    )
}
export default CardView2;