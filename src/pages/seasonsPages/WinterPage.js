import { useState, useEffect } from "react";
import React from "react";
import CardContainer from "../../components/cardsContainer/CardContainer";
import SeasonsNavigation from "../../components/NavigationBars/SeasonsNavigation";
import { Box } from "@mui/material";
import { getCurrentSeason } from "../../components/Functions/GetCurrentSeason";
import { QuerySeason, QueryOptions } from "../../components/Functions/Query";

function WinterPage() {
  const [isLoading, setLoading] = useState(true);
  const [loadedDataTV, setLoadedDataTV] = useState([]);
  const [loadedDataTV_SHORT, setLoadedDataTV_SHORT] = useState([]);
  const [loadedDataMOVIE, setLoadedDataMOVIE] = useState([]);
  const [loadedDataOVA, setLoadedDataOVA] = useState([]);
  const [loadedDataONA, setLoadedDataONA] = useState([]);
  const [loadedDataSPECIAL, setLoadedDataSPECIAL] = useState([]);

  var season = getCurrentSeason();
  var today = new Date();
  var year = today.getFullYear();

  if (season !== "WINTER") {
    season = "WINTER";
  }

  var query = QuerySeason(season, year);
  var url = "https://graphql.anilist.co";
  var options = QueryOptions(query);

  useEffect(() => {
    setLoading(true);
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const TV_ITEMS = [];
        const TV_SHORT_ITEMS = [];
        const MOVIE_ITEMS = [];
        const OVA_ITEMS = [];
        const ONA_ITEMS = [];
        const SPECIAL_ITEMS = [];

        for (const [key, value] of Object.entries(
          data["data"]["TV_media"]["media"]
        )) {
          const TV_ITEM = {
            id: key,
            ...value,
          };
          TV_ITEMS.push(TV_ITEM);
        }
        setLoadedDataTV(TV_ITEMS);

        for (const [key, value] of Object.entries(
          data["data"]["TV_SHORT_media"]["media"]
        )) {
          const TV_SHORT_ITEM = {
            id: key,
            ...value,
          };
          TV_SHORT_ITEMS.push(TV_SHORT_ITEM);
        }
        setLoadedDataTV_SHORT(TV_SHORT_ITEMS);

        for (const [key, value] of Object.entries(
          data["data"]["MOVIE_media"]["media"]
        )) {
          const MOVIE_ITEM = {
            id: key,
            ...value,
          };
          MOVIE_ITEMS.push(MOVIE_ITEM);
        }
        setLoadedDataMOVIE(MOVIE_ITEMS);

        for (const [key, value] of Object.entries(
          data["data"]["OVA_media"]["media"]
        )) {
          const OVA_ITEM = {
            id: key,
            ...value,
          };
          OVA_ITEMS.push(OVA_ITEM);
        }
        setLoadedDataOVA(OVA_ITEMS);

        for (const [key, value] of Object.entries(
          data["data"]["ONA_media"]["media"]
        )) {
          const ONA_ITEM = {
            id: key,
            ...value,
          };
          ONA_ITEMS.push(ONA_ITEM);
        }
        setLoadedDataONA(ONA_ITEMS);

        for (const [key, value] of Object.entries(
          data["data"]["SPECIAL_media"]["media"]
        )) {
          const SPECIAL_ITEM = {
            id: key,
            ...value,
          };
          SPECIAL_ITEMS.push(SPECIAL_ITEM);
        }
        setLoadedDataSPECIAL(SPECIAL_ITEMS);
        setLoading(false);
      });
  }, [season]);

  const tvshort = loadedDataTV_SHORT;
  const ova = loadedDataOVA;
  const ona = loadedDataONA;
  const special = loadedDataSPECIAL;
  const movie = loadedDataMOVIE;

  return (
    <Box>
      <SeasonsNavigation />
      <CardContainer title="TV" items={loadedDataTV} loaded={isLoading} />
      {tvshort.length > 0 && (
        <CardContainer title="TV SHORTS" items={loadedDataTV_SHORT} />
      )}
      {movie.length > 0 && (
        <CardContainer title="MOVIES" items={loadedDataMOVIE} />
      )}
      {ova.length > 0 && <CardContainer title="OVA" items={loadedDataOVA} />}
      {ona.length > 0 && <CardContainer title="ONA" items={loadedDataONA} />}
      {special.length > 0 && (
        <CardContainer title="SPECIAL" items={loadedDataSPECIAL} />
      )}
    </Box>
  );
}
export default WinterPage;
