import { useState, useEffect } from "react";
import LoadingHome from "../../components/LoadingSpinner/LoadingHome";
import CardContainer from "../../components/cardsContainer/CardContainer";
import SeasonsNavigation from "../../components/NavigationBars/SeasonsNavigation";
import { Box } from "@mui/material";
import { getCurrentSeason } from "../../components/Functions/GetCurrentSeason";

function WinterPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  var season = getCurrentSeason();
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  var title = "";
  var status = "";

  if (season === "WINTER" && month <= 1 && month > 10) {
    status = "RELEASING";
    title = "TV";
  } else if (season === "WINTER" && month <= 1 && month === 0) {
    status = "NOT_YET_RELEASED";
    title = "TV";
  } else {
    status = "NOT_YET_RELEASED";
    title = "TV";
  }

  var query = `
  {
    Page(page: 1, perPage: 40) {

      media(season: WINTER, type: ANIME, status: RELEASING, format:TV) {
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
    console.log(query);
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
  }, []);

  if (loadedData.length === 0) {
    return <LoadingHome />;
  }
  return (
    <Box>
      <SeasonsNavigation />
      <CardContainer title={title} list={loadedData} />
    </Box>
  );
}
export default WinterPage;
