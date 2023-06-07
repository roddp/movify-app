import main2 from "../assets/main2.svg";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const Landing = () => {
  const navigate = useNavigate();
  const { setLocation } = useAppContext();
  return (
    <main className="flex-grow bg-gray-700 text-white">
      <div className="container mx-auto px-4 py-6 h-full flex items-center justify-center">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col h-full justify-center">
              <h1 className="text-4xl font-bold mb-4">
                Musify <span className="text-[#6C63FF]">App</span>
              </h1>
              <p className="text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <button
                className="bg-[#6C63FF] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/5"
                onClick={() => {
                  navigate("/products");
                  setLocation("products");
                }}
              >
                Browse
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex h-full justify-center">
              <img
                src={main2}
                alt="Landing Page Image"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
