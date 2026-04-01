import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Anasayfa from "./pages/Anasayfa"; // Burayı bu şekilde düzelt
import FilmListesi from "./pages/FilmListesi";
import FilmDetay from "./pages/FilmDetay";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Anasayfa />} />
          <Route path="/filmler" element={<FilmListesi />} />
          <Route path="/film/:filmSlug" element={<FilmDetay />} />
          <Route path="*" element={<h2>404 - Sayfa Yok</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;