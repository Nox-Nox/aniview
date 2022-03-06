import { AppBar, Toolbar, ThemeProvider, Box } from "@mui/material";
import { Link } from "react-router-dom";
import SeasonsNavigationTheme from "../Theme/seasonsNavigationTheme";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./activeS.module.css";

function SeasonsNavigation() {
  const [isActive, setActive] = useState(null);
  var location1 = useLocation();
  
  useEffect(() => {
    setActive(location1.pathname);
  }, [location1]);
  return (
    <ThemeProvider theme={SeasonsNavigationTheme}>
      <Box display={"flex"} justifyContent="center">
        <AppBar>
          <Toolbar className={classes.text}>
            <Link className={isActive === "/Anime/Winter" ? classes.active : ""} to="/Anime/Winter">Winter</Link>
            <Link className={isActive === "/Anime/Spring" ? classes.active : ""} to="/Anime/Spring">Spring</Link>
            <Link className={isActive === "/Anime/Summer" ? classes.active : ""} to="/Anime/Summer">Summer</Link>
            <Link className={isActive === "/Anime/Fall" ? classes.active : ""} to="/Anime/Fall">Fall</Link>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
export default SeasonsNavigation;
