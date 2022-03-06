import { Route, Routes, Navigate } from "react-router-dom";
import AnimePage from "./pages/AnimePage";
import MangaPage from "./pages/MangaPage";
import LightNovelPage from "./pages/LightNovelPage";
import WinterPage from "./pages/seasonsPages/WinterPage";
import SpringPage from "./pages/seasonsPages/SpringPage";
import SummerPage from "./pages/seasonsPages/SummerPage";
import FallPage from "./pages/seasonsPages/FallPage";
import { getCurrentSeason } from "./components/Functions/GetCurrentSeason";

var season = getCurrentSeason();

function navigateTo(season){
  switch(season){
    case "WINTER":
      return "/Anime/Winter"
    case "SPRING":
      return "/Anime/Spring"
    case "SUMMER":
      return "/Anime/Summer"
    case "FALL":
      return "/Anime/Fall"
  }
}

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Navigate to={navigateTo(season)} />} />
        <Route path="/Anime" element={<AnimePage />} />
        <Route path="/Manga" element={<MangaPage />} />
        <Route path="/LightNovel" element={<LightNovelPage />} />

        <Route path="/Anime/Winter" element={<WinterPage />} />
        <Route path="/Anime/Spring" element={<SpringPage />} />
        <Route path="/Anime/Summer" element={<SummerPage />} />
        <Route path="/Anime/Fall" element={<FallPage />} />
      </Routes>
    
  );
}

export default App;
