import { useState, useEffect } from "react";
import LoadingHome from "../../components/LoadingSpinner/LoadingHome";
import CardContainer from "../../components/cardsContainer/CardContainer";
import SeasonsNavigation from "../../components/NavigationBars/SeasonsNavigation";
import { Box } from "@mui/material";
import { getCurrentSeason } from "../../components/Functions/GetCurrentSeason";
import { QuerySeason, QueryOptions } from "../../components/Functions/Query";

function SpringPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedDataTV, setLoadedDataTV] = useState([]);
  const [loadedDataTV_SHORT, setLoadedDataTV_SHORT] = useState([]);
  const [loadedDataMOVIE, setLoadedDataMOVIE] = useState([]);

  var season = getCurrentSeason();
  var today = new Date();
  var month = today.getMonth();
  var status = "";

  if (season === "SPRING" && month <= 4 && month > 2) {
    status = "RELEASING";
  } else if (season === "SPRING" && month <= 4 && month === 3) {
    status = "NOT_YET_RELEASED";
  } else {
    status = "NOT_YET_RELEASED";
  }

  var queryTV = QuerySeason(season, "TV");
  var queryTV_SHORT = QuerySeason(season, "TV_SHORT");
  var queryMOVIE = QuerySeason(season, "MOVIE");
  var queryOVA = QuerySeason(season, "OVA");
  var queryONA = QuerySeason(season, "ONA");
  var querySPECIAL = QuerySeason(season, "SPECIAL");

  var url = "https://graphql.anilist.co";
  var optionsTV = QueryOptions(queryTV);
  var optionsTV_SHORT = QueryOptions(queryTV_SHORT);
  var optionsMOVIE = QueryOptions(queryMOVIE);
  var optionsOVA = QueryOptions(queryOVA);
  var optionsONA = QueryOptions(queryONA);
  var optionsSPECIAL = QueryOptions(querySPECIAL);

  var fetchTV = fetch(url, optionsTV);
  var fetchTV_SHORT = fetch(url, optionsTV_SHORT);
  var fetchMOVIE = fetch(url, optionsMOVIE);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([fetchTV, fetchTV_SHORT, fetchMOVIE])
      .then((response) => Promise.all(response.map((r) => r.json())))
      .then((data) => {
        const TV_ITEMS = [];
        const TV_SHORT_ITEMS = [];
        const MOVIE_ITEMS = [];
        for (const [key, value] of Object.entries(
          data[0]["data"]["Page"]["media"]
        )) {
          const TV_ITEM = {
            id: key,
            ...value,
          };
          TV_ITEMS.push(TV_ITEM);
        }
        setLoadedDataTV(TV_ITEMS);
        for (const [key, value] of Object.entries(
          data[1]["data"]["Page"]["media"]
        )) {
          const TV_SHORT_ITEM = {
            id: key,
            ...value,
          };
          TV_SHORT_ITEMS.push(TV_SHORT_ITEM);
        }
        setLoadedDataTV_SHORT(TV_SHORT_ITEMS);
        for (const [key, value] of Object.entries(
          data[2]["data"]["Page"]["media"]
        )) {
          const MOVIE_ITEM = {
            id: key,
            ...value,
          };
          MOVIE_ITEMS.push(MOVIE_ITEM);
        }
        setLoadedDataMOVIE(MOVIE_ITEMS);
        setIsLoading(false);
      });
  }, []);
  console.log(loadedDataTV, loadedDataTV_SHORT, loadedDataMOVIE);
  if (
    loadedDataTV.length === 0 &&
    loadedDataTV_SHORT.length === 0 &&
    loadedDataMOVIE.length === 0
  ) {
    return <LoadingHome />;
  }
  return (
    <Box>
      <SeasonsNavigation />
      <CardContainer title="TV" items={loadedDataTV} />
      <CardContainer title="TV SHORTS" items={loadedDataTV_SHORT} />
      <CardContainer title="MOVIES" items={loadedDataMOVIE} />
    </Box>
  );
}
export default SpringPage;
