import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Movies from "./pages/Movies";
import Details from "./pages/Details";

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-900 text-white">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="movify-app" element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<Details />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
