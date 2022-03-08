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
            <Link className={isActive === "/Home/Winter" ? classes.active : ""} to="/Home/Winter">Winter</Link>
            <Link className={isActive === "/Home/Spring" ? classes.active : ""} to="/Home/Spring">Spring</Link>
            <Link className={isActive === "/Home/Summer" ? classes.active : ""} to="/Home/Summer">Summer</Link>
            <Link className={isActive === "/Home/Fall" ? classes.active : ""} to="/Home/Fall">Fall</Link>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
export default SeasonsNavigation;
