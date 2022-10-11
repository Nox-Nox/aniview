import styles from "../SeasonsNavigation2/seasonsnavigation2.module.css"
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";


function SeasonsNavigation2() {
    const [isActive, setActive] = useState(null);
    var location1 = useLocation();

    useEffect(() => {
        setActive(location1.pathname);
    }, [location1]);
    return (
        <div className={styles.wrapper}>
            <nav className={styles.navBar}>
                <ul>
                    <Link
                        className={isActive === "/Home/Winter" ? styles.active : ""}
                        to="/Home/Winter"
                    >
                        Winter
                    </Link>
                    <Link
                        className={isActive === "/Home/Spring" ? styles.active : ""}
                        to="/Home/Spring"
                    >
                        Spring
                    </Link>
                    <Link
                        className={isActive === "/Home/Summer" ? styles.active : ""}
                        to="/Home/Summer"
                    >
                        Summer
                    </Link>
                    <Link
                        className={isActive === "/Home/Fall" ? styles.active : ""}
                        to="/Home/Fall"
                    >
                        Fall
                    </Link>
                </ul>

            </nav>
        </div>
    )
}
export default SeasonsNavigation2;