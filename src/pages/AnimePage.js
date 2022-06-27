import React, { useState, useEffect } from "react";
import { getCurrentSeason } from "../components/Functions/GetCurrentSeason";
import { QueryTop6 } from "../components/Functions/Top6TrendingAnime";
import { QueryOptions } from "../components/Functions/Query";
import {
  Typography,
  ThemeProvider,
  Box,
  responsiveFontSizes,
  Select,
  MenuItem,
} from "@mui/material";

function AnimePage() {
  const [isLoading, setLoading] = useState(true);
  const [isData, setData] = useState([]);


  var season = getCurrentSeason();
  var today = new Date();
  var year = today.getFullYear();

  var query = QueryTop6(season,year)
  var url = "https://graphql.anilist.co";
  var options = QueryOptions(query);

  useEffect(() => {
    setLoading(true);
    fetch(url, options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
      setData(data);
      setLoading(false);
    })
  })
  
  if (isLoading === true) {
    return (
      <div>
        loading.....
      </div>
    )
  }
  

  return (
    <Box>
      <Box
        height="40vh"
        backgroundColor=" red"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          backgroundColor="cyan"
          height="38vh"
          width="99%"
          borderRadius="3rem"
        >

        </Box>
      </Box>
      <Box height="10vh" backgroundColor="lightgreen">

        search fields, filters
      </Box>
      <Box height="50vh" backgroundColor="gray">
        rgdrg
      </Box>
    </Box>
  );
}
export default AnimePage;
