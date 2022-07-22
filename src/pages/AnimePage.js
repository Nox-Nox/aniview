import React, { useState, useEffect } from "react";
import { getCurrentSeason } from "../components/Functions/GetCurrentSeason";
import { QueryTop6 } from "../components/Functions/Top6PopularAnime";
import { QueryOptions } from "../components/Functions/Query";
import {
  Box,
  TextField,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import BannerSlide from "../components/AnimePageComponents/bannerImageSlide/BannerSlide";
import SearchIcon from "@mui/icons-material/Search";


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
            "& > :not(style)": { m: 4, width: "25ch" },
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
              input: { color: "blueviolet" },
            }}
          />

          <TextField
            select
            focused
            color="secondary"
          >
            <MenuItem sx={{ color: "red" }} value={10}>
              Ten
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </TextField>
        </Box>
      </Box>
      <Box height="50vh"        
        backgroundColor="#171717"
        borderRadius="1rem"
        display="flex"
        alignItems="center"
        marginBottom="5vh">
        rgdrg
      </Box>
    </Box>
  );
}
export default AnimePage;
