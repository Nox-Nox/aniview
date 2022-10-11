import styles from "../MainNavigation2/mainnavigation2.module.css"
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";

function MainNavigation2() {

    const [isActive, setActive] = useState(null);
    var location = useLocation();

    useEffect(() => {
        setActive(location.pathname);
    }, [location]);
    return (
        <div>
            <nav className={styles.wrapper}>
                <ul>
                    <Link
                        className={
                            isActive === "/Home" ||
                                isActive === "/Home/Winter" ||
                                isActive === "/Home/Spring" ||
                                isActive === "/Home/Summer" ||
                                isActive === "/Home/Fall"
                                ? styles.active
                                : ""
                        }
                        to="/Home"
                    >
                        Home
                    </Link>

                    <Link
                        className={isActive === "/Anime" ? styles.active : ""}
                        to="/Anime"
                    >
                        Anime
                    </Link>
                    <Link
                        className={isActive === "/Manga" ? styles.active : ""}
                        to="/Manga"
                    >
                        Manga
                    </Link>
                    <Link
                        className={isActive === "/LightNovel" ? styles.active : ""}
                        to="/LightNovel"
                    >
                        Light Novel
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
export default MainNavigation2;