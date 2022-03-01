import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AnimePage from "./pages/AnimePage";
import MangaPage from "./pages/MangaPage";
import LightNovelPage from "./pages/LightNovelPage";
import WinterPage from "./pages/seasonsPages/WinterPage";
import SpringPage from "./pages/seasonsPages/SpringPage";
import SummerPage from "./pages/seasonsPages/SummerPage";
import FallPage from "./pages/seasonsPages/FallPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" exact element={<HomePage />} />
        <Route path="/Anime" element={<AnimePage />} />
        <Route path="/Manga" element={<MangaPage />} />
        <Route path="/LightNovel" element={<LightNovelPage />} />

        <Route path="/Home/Winter" element={<WinterPage />} />
        <Route path="/Home/Spring" element={<SpringPage />} />
        <Route path="/Home/Summer" element={<SummerPage />} />
        <Route path="/Home/Fall" element={<FallPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
