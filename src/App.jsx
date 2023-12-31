import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Locations from "./pages/Locations";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/scoot-multipage-website/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/scoot-multipage-website/about" element={<About />} />
          <Route
            path="/scoot-multipage-website/careers"
            element={<Careers />}
          />
          <Route
            path="/scoot-multipage-website/locations"
            element={<Locations />}
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
