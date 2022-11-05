import { useState, useEffect } from "react";
import React from "react";
import CardContainer from "../../components/CardContainer/CardContainer";
import { QuerySeason, QueryOptions } from "../../components/Functions/Query";
import SeasonsNavigation2 from "../../components/NavigationBars/SeasonsNavigation2/SeasonsNavigation2";
import CardViewSkeleton from "../../components/skeleton/CardViewSkeleton/CardViewSkeleton";
import LeftBarNavigation from "../../components/LeftBarNavigation/LeftBarNavigation";

function FallPage(props) {
  const [isLoading, setLoading] = useState(true);
  const [loadedDataTV, setLoadedDataTV] = useState([]);
  const [loadedDataTV_SHORT, setLoadedDataTV_SHORT] = useState([]);
  const [loadedDataMOVIE, setLoadedDataMOVIE] = useState([]);
  const [loadedDataOVA, setLoadedDataOVA] = useState([]);
  const [loadedDataONA, setLoadedDataONA] = useState([]);
  const [loadedDataSPECIAL, setLoadedDataSPECIAL] = useState([]);

  var today = new Date();
  var year = today.getFullYear();
  var query = QuerySeason(props.season, year);
  var url = "https://graphql.anilist.co";
  var options = QueryOptions(query);

  useEffect(() => {
    setLoading(true);
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
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
  }, [options, props.season, url]);

  const tvshort = loadedDataTV_SHORT;
  const ova = loadedDataOVA;
  const ona = loadedDataONA;
  const special = loadedDataSPECIAL;
  const movie = loadedDataMOVIE;

  if (isLoading === true) {
    return (
      <div>
        <SeasonsNavigation2 />
        <CardViewSkeleton />
      </div>
    )
  }

  return (
    <div>
      <SeasonsNavigation2 />
      <LeftBarNavigation />
      <CardContainer ID="TV" title="TV" items={loadedDataTV} loaded={isLoading} />
      {tvshort.length > 0 && (
        <CardContainer ID="TVSHORT" title="TV SHORTS" items={loadedDataTV_SHORT} />
      )}
      {movie.length > 0 && (
        <CardContainer ID="MOVIES" title="MOVIES" items={loadedDataMOVIE} />
      )}
      {ova.length > 0 && <CardContainer ID="OVA" title="OVA" items={loadedDataOVA} />}
      {ona.length > 0 && <CardContainer ID="ONA" title="ONA" items={loadedDataONA} />}
      {special.length > 0 && (
        <CardContainer ID="SPECIAL" title="SPECIAL" items={loadedDataSPECIAL} />
      )}
    </div>
  );
}

export default FallPage;
