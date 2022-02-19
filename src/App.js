import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AnimePage from "./pages/AnimePage";
import MangaPage from "./pages/MangaPage";
import LightNovelPage from "./pages/LightNovelPage";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/animePage" element={<AnimePage />} />
        <Route path="/mangaPage" element={<MangaPage />} />
        <Route path="/lightNovelPage" element={<LightNovelPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
