import { Box } from "@mui/material";
import { useState, useEffect, createContext } from "react";
import React from "react";
import SeasonsNavigation from "../components/NavigationBars/SeasonsNavigation";
import NewsContainer from "../components/newsContainer/NewsContainer";

export const NewsContext = createContext();

function HomePage() {
  const [isLoading, setLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);
  const [isNews, setNews] = useState();
  const url = "https://get-mongo.herokuapp.com/getData";

  const switchNews = (index) => {
    console.log(index);
    setNews(loadedData[index]);
  };

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setLoadedData(data);
        setNews(data[0]);
        setLoading(false);
        console.log("useEffect isNews: ", isNews);
      });
  }, []);
  console.log("loaded data: ", loadedData);
  console.log("index 0 isNews: ", isNews);
  if (isLoading === true) {
    return <p>loading...</p>;
  }

  return (
    <Box>
      <SeasonsNavigation />
      <NewsContext.Provider value={{data:loadedData, set: setNews}}>
        <NewsContainer first={isNews}/>
      </NewsContext.Provider>
    </Box>
  );
}
export default HomePage;
