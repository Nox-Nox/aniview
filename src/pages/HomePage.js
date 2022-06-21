import { Box } from "@mui/material";
import { useState, useEffect, createContext } from "react";
import React from "react";
import SeasonsNavigation from "../components/NavigationBars/SeasonsNavigation";
import NewsContainer from "../components/newsContainer/NewsContainer";
import NewsViewSkeleton from "../components/skeleton/NewsViewSkeleton";

export const NewsContext = createContext();

function HomePage() {
  const [isLoading, setLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  const [quoteData, setQuoteData] = useState([]);
  const [isNews, setNews] = useState();
  const url = "https://get-mongo.herokuapp.com/getData";
  const quoteUrl = 'https://animechan.vercel.app/api/random'
  

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoadedData(data);
        setNews(data[0]);
        setLoading(false);
      });
      fetch(quoteUrl)
        .then(response => response.json())
        .then((data) => {
          setQuoteData(data);
          console.log(data)
        })
  }, []);

  // if (isLoading === true) {
  //   <NewsViewSkeleton />
  // }

  return (
    <Box>
      <SeasonsNavigation />
      <NewsContext.Provider value={{data:loadedData, set: setNews, first: isNews, quote: quoteData}}>
        <NewsContainer loading={isLoading} />
      </NewsContext.Provider>
    </Box>
  );
}
export default HomePage;
