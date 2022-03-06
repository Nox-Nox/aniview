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

  var queryTV = Query(season, "TV");
  var queryTV_SHORT = Query(season, "TV_SHORT");
  var queryMOVIE = Query(season, "MOVIE");
  var queryOVA = Query(season, "OVA");
  var queryONA = Query(season, "ONA");
  var querySPECIAL = Query(season, "SPECIAL");

  var url = "https://graphql.anilist.co"
  var optionsTV = queryOptions(queryTV);
  var optionsTV_SHORT = queryOptions(queryTV_SHORT)
  var optionsMOVIE = queryOptions(queryMOVIE);
  var optionsOVA = queryOptions(queryOVA);
  var optionsONA = queryOptions(queryONA);
  var optionsSPECIAL = queryOptions(querySPECIAL);

  var fetchTV = fetch(url, optionsTV)
  var fetchTV_SHORT = fetch(url, optionsTV_SHORT)
  var fetchMOVIE = fetch(url, optionsMOVIE)




  useEffect(() => {
    setIsLoading(true);
    setCurrentSeason(getCurrentSeason());
    Promise.all([fetchTV, fetchTV_SHORT, fetchMOVIE])
    .then((response) => {
      var TV = response[0].json()
      var TV_SHORT = response[1].json()
      var MOVIE = response[2].json()

      const TV_ITEMS =[];
      const TV_SHORT_ITEMS =[]
      const MOVIE_ITEMS = []
      for (const [key, value] of Object.entries(TV["data"]["Page"]["media"])){
        const TV_ITEM ={id: key,
        ...value,}
        TV_ITEMS.push(TV_ITEM)
      };
      for (const [key, value] of Object.entries(TV_SHORT["data"]["Page"]["media"])){
        const TV_SHORT_ITEM ={id: key,
        ...value,}
        TV_SHORT_ITEMS.push(TV_SHORT_ITEM)
      };
      for (const [key, value] of Object.entries(MOVIE["data"]["Page"]["media"])){
        const MOVIE_ITEM ={id: key,
        ...value,}
        MOVIE_ITEMS.push(MOVIE_ITEM)
      };
    })
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
