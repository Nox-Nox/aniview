import { useState, useEffect } from "react";
import LoadingHome from "../../components/LoadingSpinner/LoadingHome";
import CardContainer from "../../components/cardsContainer/CardContainer";
import SeasonsNavigation from "../../components/NavigationBars/SeasonsNavigation";
import { Box } from "@mui/material";
import { getCurrentSeason } from "../../components/Functions/GetCurrentSeason";

function FallPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  var season = getCurrentSeason();
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  var title = "";
  var status = "";

  if (season === "FALL" && month <= 10 && month > 8) {
    status = "RELEASING";
    title = "TV series currently airing";
  } else if (season === "SPRING" && month <= 10 && month === 9) {
    status = "NOT_YET_RELEASED";
    title = "TV series to be aired";
  } else {
    status = "NOT_YET_RELEASED";
    title = "TV series to be aired";
  }

  var query = `
  {
    Page(page: 1, perPage: 40) {

      media(season: FALL, type: ANIME, status: ${status}, format:TV) {
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

export default FallPage;
