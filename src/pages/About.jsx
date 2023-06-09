import { FaReact } from "react-icons/fa";
import { SiVite, SiRedux, SiTailwindcss } from "react-icons/si";

const About = () => {
  return (
    <main className="flex-grow bg-gray-700 text-white">
      <div className="container mx-auto px-4 py-6 h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg mb-8">
            Hi, I'm Rodrigo Pereira, a passionate web developer with experience
            in building modern web applications using various technologies. Here
            are some of the technologies I work with:
          </p>
          <div className="flex justify-center">
            <div className="flex items-center mr-4 mb-2">
              <FaReact className="text-3xl mr-2 text-blue-400" />
              <span>React</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiVite className="text-3xl mr-2 text-yellow-300" />
              <span>Vite</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiTailwindcss className="text-3xl mr-2 text-[#38BDF8]" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center mb-2">
              <SiRedux className="text-3xl mr-2 text-[#764ABC]" />
              <span>Redux</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
