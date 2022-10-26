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
import CardViewSkeleton from "./components/skeleton/CardViewSkeleton/CardViewSkeleton";


function App() {
  var season = getCurrentSeason();
  const [isSeason, setSeason] = useState("")
  const  [isLoading, setLoaded] = useState(true)

  useEffect(() => {
    switch (season) {
      case "WINTER":
        setSeason("/Home/Winter")
        setLoaded(false)
        break;
      case "SPRING":
        setSeason("/Home/Spring")
        setLoaded(false)
        break;
      case "SUMMER":
        setSeason("/Home/Summer")
        setLoaded(false)
        break;
      case "FALL":
        setSeason("/Home/Fall")
        setLoaded(false)
        break;
    }
  }, [season])

// if (isLoading === true){
//   return(
// <CardViewSkeleton />
//   )
// }
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
