import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFileMusicFill } from "react-icons/bs";
const Navbar = () => {
  const [active, setActive] = useState("");
  return (
    <header>
      <nav className="bg-gray-700 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BsFileMusicFill size={"2em"} />
              <div className="text-xl font-bold">Musify</div>
            </div>

            <div>
              <ul className="flex space-x-4">
                <li
                  className={`${
                    active === "home" ? "text-blue-600" : "text-secondary"
                  } hover:text-blue-200 cursor-pointer`}
                  onClick={() => setActive("home")}
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  className={`${
                    active === "products" ? "text-blue-600" : "text-secondary"
                  } hover:text-blue-200 cursor-pointer`}
                  onClick={() => setActive("products")}
                >
                  <Link to="/products">Products</Link>
                </li>
                <li
                  className={`${
                    active === "contact" ? "text-blue-600" : "text-secondary"
                  } hover:text-blue-200 cursor-pointer`}
                  onClick={() => setActive("contact")}
                >
                  <Link to="/contact">Contact</Link>
                </li>
                <li
                  className={`${
                    active === "about" ? "text-blue-600" : "text-secondary"
                  } hover:text-blue-200 cursor-pointer`}
                  onClick={() => setActive("about")}
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
