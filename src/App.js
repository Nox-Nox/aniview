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
import React, { useEffect, useState } from "react";


function App() {
  var season = getCurrentSeason();
  const [isSeason, setSeason] = useState("")

  useEffect(() => {
    switch (season) {
      case "WINTER":
        setSeason("/Home/Winter")
        break;
      case "SPRING":
        setSeason("/Home/Spring")
        break;
      case "SUMMER":
        setSeason("/Home/Summer")
        break;
      case "FALL":
        setSeason("/Home/Fall")
        break;
    }
  }, [season])


  return (

    <Routes>
      <Route path="/" element={<Navigate to={isSeason} />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/Anime" element={<AnimePage />} />
      <Route path="/Manga" element={<MangaPage />} />
      <Route path="/LightNovel" element={<LightNovelPage />} />

      <Route path="/Home/Winter" element={<WinterPage season={season} />} />
      <Route path="/Home/Spring" element={<SpringPage season={season} />} />
      <Route path="/Home/Summer" element={<SummerPage season={season} />} />
      <Route path="/Home/Fall" element={<FallPage season={season} />} />
    </Routes>

  );
}

export default App;
