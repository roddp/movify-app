import { useState } from "react";
import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import { useAppContext } from "../context/appContext";
const Navbar = () => {
  const { setLocation, location } = useAppContext();
  const [active, setActive] = useState("home");
  return (
    <header>
      <nav className="bg-gray-700 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BiCameraMovie size={"2em"} />
              <div className="text-xl font-bold">Moviefy</div>
            </div>

            <div>
              <ul className="flex space-x-4">
                <li
                  className={`${
                    location === "home" ? "text-[#6C63FF]" : "text-secondary"
                  } hover:text-blue-200 cursor-pointer`}
                  onClick={() => setLocation("home")}
                >
                  <Link to="/movify-app">Home</Link>
                </li>
                <li
                  className={`${
                    location === "movies" ? "text-[#6C63FF]" : "text-secondary"
                  } hover:text-blue-200 cursor-pointer`}
                  onClick={() => setLocation("movies")}
                >
                  <Link to="/movies">Movies</Link>
                </li>
                <li
                  className={`${
                    location === "contact" ? "text-[#6C63FF]" : "text-secondary"
                  } hover:text-blue-200 cursor-pointer`}
                  onClick={() => setLocation("contact")}
                >
                  <Link to="/contact">Contact</Link>
                </li>
                <li
                  className={`${
                    location === "about" ? "text-[#6C63FF]" : "text-secondary"
                  } hover:text-blue-200 cursor-pointer`}
                  onClick={() => setLocation("about")}
                >
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
