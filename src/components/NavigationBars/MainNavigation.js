import { AppBar, Toolbar, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import { mainTheme } from "../Theme/mainTheme";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./activeM.module.css";

function MainNavigation() {
  const [isActive, setActive] = useState(null);
  var location = useLocation();

  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <ThemeProvider theme={mainTheme}>
      <AppBar
        sx={{
          fontSize: "1.5vw",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Toolbar className={classes.text}>
          <Link
            className={
              isActive === "/Anime" ||
              isActive === "/Anime/Winter" ||
              isActive === "/Anime/Spring" ||
              isActive === "/Anime/Summer" ||
              isActive === "/Anime/Fall"
                ? classes.active
                : ""
            }
            to="/Anime"
          >
            Anime
          </Link>
          <Link
            className={isActive === "/Manga" ? classes.active : ""}
            to="/Manga"
          >
            Manga
          </Link>
          <Link
            className={isActive === "/LightNovel" ? classes.active : ""}
            to="/LightNovel"
          >
            Light Novel
          </Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default MainNavigation;
