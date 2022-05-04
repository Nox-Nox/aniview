import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AnimePage from "./pages/AnimePage";
import MangaPage from "./pages/MangaPage";
import LightNovelPage from "./pages/LightNovelPage";
import WinterPage from "./pages/seasonsPages/WinterPage";
import SpringPage from "./pages/seasonsPages/SpringPage";
import SummerPage from "./pages/seasonsPages/SummerPage";
import FallPage from "./pages/seasonsPages/FallPage";
import { getCurrentSeason } from "./components/Functions/GetCurrentSeason";
import React from "react";

var season = getCurrentSeason();

function navigateTo(season){
  switch(season){
    case "WINTER":
      return "/Home/Winter"
    case "SPRING":
      return "/Home/Spring"
    case "SUMMER":
      return "/Home/Summer"
    case "FALL":
      return "/Home/Fall"
  }
}

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Navigate to={navigateTo(season)} />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Anime" element={<AnimePage />} />
        <Route path="/Manga" element={<MangaPage />} />
        <Route path="/LightNovel" element={<LightNovelPage />} />

        <Route path="/Home/Winter" element={<WinterPage />} />
        <Route path="/Home/Spring" element={<SpringPage />} />
        <Route path="/Home/Summer" element={<SummerPage />} />
        <Route path="/Home/Fall" element={<FallPage />} />
      </Routes>
    
  );
}

export default App;
