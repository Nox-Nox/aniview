import CardContainer from "../components/cardsContainer/CardContainer";
import { useState, useEffect } from "react";
import LoadingHome from "../components/LoadingSpinner/LoadingHome";
import { Box } from "@mui/material";
import SeasonsNavigation from "../components/NavigationBars/SeasonsNavigation";
import { getCurrentSeason } from "../components/Functions/GetCurrentSeason";
import { Query, queryOptions } from "../components/Functions/Query";

function AnimePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  const [isCurrentSeason, setCurrentSeason] = useState();

  var season = isCurrentSeason;
  
  var queryTV = Query(season, "TV")
  var queryTV_SHORT = Query(season, "TV_SHORT")
  var queryMOVIE = Query(season, "MOVIE")
  var queryOVA = Query(season, "OVA")
  var queryONA = Query(season, "ONA")
  var querySPECIAL = Query(season, "SPECIAL")

  var url = "https://graphql.anilist.co",
    options = queryOptions(queryTV)
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
      <SeasonsNavigation />
      <CardContainer title="TV series currently airing" list={loadedData} />
      <CardContainer title="TV shorts currently airing" list={loadedData} />
    </Box>
  );
}
export default AnimePage;
