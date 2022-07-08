import React, { useState, useEffect } from "react";
import { getCurrentSeason } from "../components/Functions/GetCurrentSeason";
import { QueryTop6 } from "../components/Functions/Top6TrendingAnime";
import { QueryOptions } from "../components/Functions/Query";
import { Typography, Box, CardMedia } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import BannerSlide from "../components/bannerImageSlide/BannerSlide";

function AnimePage() {
  const [isLoading, setLoading] = useState(true);
  const [isData, setData] = useState([]);
  const [isImage, setImage] = useState(0);

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
      {/* <Box
        // height="40vh"
        backgroundColor="#171717"
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="3vw"
        borderRadius="3rem"
      > */}
        {/* width="95%" */}
        {/* <Box
          height="34vh"
          borderRadius="3rem"
          position="relative"
          marginBottom="1.2vh"
        > */}
        <BannerSlide items={isData} />

          {/* 
        <CardMedia
            component="img"
            image={isData[isImage].bannerImage}
            sx={{ borderRadius: "3rem" }}
          />
          <Box
            position="absolute"
            zIndex="1"
            bottom="0.2vh"
            left="1vw"
            backgroundColor="rgba(0, 0, 0, 0.8)"
            padding="0.5rem"
            borderRadius="1.5rem"
          >
            <Typography variant="h2" fontWeight="bold" color="whitesmoke">
              {isData[isImage].title.romaji}
            </Typography>
          </Box> */}

          
        {/* </Box>
      </Box> */}

      {/* <Box height="10vh" backgroundColor="lightgreen">
        search fields, filters
      </Box>
      <Box height="50vh" backgroundColor="gray">
        rgdrg
      </Box> */}

    </Box>
  );
}
export default AnimePage;
