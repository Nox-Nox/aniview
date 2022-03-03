import CardContainer from "../components/cardsContainer/CardContainer";
import { useState, useEffect } from "react";
import LoadingHome from "../components/LoadingSpinner/LoadingHome";
import { Box } from "@mui/material";
import SeasonsNavigation from "../components/NavigationBars/SeasonsNavigation";
import { getCurrentSeason } from "../components/Functions/GetCurrentSeason";
import { Route, Routes } from "react-router-dom";
import WinterPage from "./seasonsPages/WinterPage";
import SpringPage from "./seasonsPages/SpringPage";
import SummerPage from "./seasonsPages/SummerPage";
import FallPage from "./seasonsPages/FallPage";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  const [isCurrentSeason, setCurrentSeason] = useState();

  var selected_season = " ";
  function getSelectedSeason(props) {
    selected_season = props;
  }

  var season = isCurrentSeason;
  var query = `
  {
    Page(page: 1, perPage: 40) {

      media(season: ${season}, type: ANIME, status: RELEASING, format:TV) {
        id
        coverImage{
          large
        }
        title {
          romaji
        }
        genres
        description
        source
      }
    }
  }
  `;

  var url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
      }),
    };
  useEffect(() => {
    setIsLoading(true);
    setCurrentSeason(getCurrentSeason());
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const items = [];

        for (const [key, value] of Object.entries(
          data["data"]["Page"]["media"]
        )) {
          const item = {
            id: key,
            ...value,
          };
          items.push(item);
        }
        setIsLoading(false);
        setLoadedData(items);
      });
  }, [isCurrentSeason]);

  if (loadedData.length === 0) {
    return <LoadingHome />;
  }
  return (
    <Box>
      <SeasonsNavigation>
        <Routes>
          <Route path="/Winter " element={<WinterPage />} />
          <Route path="/Spring" element={<SpringPage />} />
          <Route path="/Summer" element={<SummerPage />} />
          <Route path="/Fall" element={<FallPage />} />
        </Routes>
      </SeasonsNavigation>
      <CardContainer title="TV series currently airing" list={loadedData} />
      <CardContainer title="TV series currently airing" list={loadedData} />
    </Box>
  );
}
export default HomePage;
