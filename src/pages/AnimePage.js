import React, { useState, useEffect } from "react";
import { getCurrentSeason } from "../components/Functions/GetCurrentSeason";
import { QueryTop6 } from "../components/Functions/Top6PopularAnime";
import { QueryOptions } from "../components/Functions/Query";
import {
  Box,
  TextField,
  InputAdornment,
  MenuItem,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import BannerSlide from "../components/AnimePageComponents/bannerImageSlide/BannerSlide";
import SearchIcon from "@mui/icons-material/Search";
import { AnimePageTheme } from "../components/Theme/animePageTheme";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AnimePage() {
  const [isLoading, setLoading] = useState(true);
  const [isData, setData] = useState([]);

  var season = getCurrentSeason();
  var today = new Date();
  var year = today.getFullYear();
  var query = QueryTop6(season, year);
  var url = "https://graphql.anilist.co";
  var options = QueryOptions(query);  
  
  useEffect(() => {
    setLoading(true);
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const TRENDING = [];

        for (const [key, value] of Object.entries(
          data["data"]["Page"]["media"]
        )) {
          const TREND_ITEM = {
            id: key,
            ...value,
          };
          TRENDING.push(TREND_ITEM);
        }
        setData(TRENDING);
        setLoading(false);
      });
  }, [season]);

  if (isLoading === true) {
    return <div>Loading...</div>;
  }

  return (
    <Box margin="2vw">
      <BannerSlide items={isData} />

      <Box
        height="10vh"
        backgroundColor="#171717"
        borderRadius="1rem"
        display="flex"
        alignItems="center"
        marginBottom="5vh"
      >
        <Box
          component="form"
          autoComplete="off"
          sx={{
            "& .MuiTextField-root": { m: 3 },
          }}
        >
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="secondary" />
                </InputAdornment>
              ),
            }}
            id="standard-basic"
            label="Search"
            color="secondary"
            focused
            sx={{
              input: { color: "#9980FA" },
            }}
          />
          <ThemeProvider theme={AnimePageTheme}>
            <TextField
                      sx={{
                        width:"24ch"
                      }}
              color="secondary"
              select
              focused
              label="Genres"
              SelectProps={{ IconComponent: ExpandMoreIcon }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>

            <TextField
              color="secondary"
              select
              focused
              label="Season"
              SelectProps={{ IconComponent: ExpandMoreIcon }}
            >
              <MenuItem value={"Winter"}>Winter</MenuItem>
              <MenuItem value={"Spring"}>Spring</MenuItem>
              <MenuItem value={"Summer"}>Summer</MenuItem>
              <MenuItem value={"Fall"}>Fall</MenuItem>
            </TextField>

            <TextField
              color="secondary"
              select
              focused
              label="Year"
              SelectProps={{ IconComponent: ExpandMoreIcon }}
            >
              <MenuItem value={2023}>2023</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
            </TextField>

            <TextField
              color="secondary"
              select
              focused
              label="Format"
              SelectProps={{ IconComponent: ExpandMoreIcon }}
            >
              <MenuItem value={"TV Show"}>TV Show</MenuItem>
              <MenuItem value={"Movie"}>Movie</MenuItem>
              <MenuItem value={"Special"}>Special</MenuItem>
              <MenuItem value={"OVA"}>OVA</MenuItem>
              <MenuItem value={"ONA"}>ONA</MenuItem>
              <MenuItem value={"Music"}>Music</MenuItem>
              <MenuItem value={"TV Short"}>TV Short</MenuItem>
            </TextField>

            <TextField
              color="secondary"
              select
              focused
              label="Airing Status"
              SelectProps={{ IconComponent: ExpandMoreIcon }}
            >
              <MenuItem value={"Airing"}>Airing</MenuItem>
              <MenuItem value={"Finished"}>Finished</MenuItem>
              <MenuItem value={"Not Yet Aired"}>Not Yet Aired</MenuItem>
              <MenuItem value={"Cancelled"}>Cancelled</MenuItem>
            </TextField>
            
          </ThemeProvider>
        </Box>
      </Box>
      <Box
        height="50vh"
        backgroundColor="#171717"
        borderRadius="1rem"
        display="flex"
        alignItems="center"
        marginBottom="5vh"
      >
        rgdrg
      </Box>
    </Box>
  );
}
export default AnimePage;
