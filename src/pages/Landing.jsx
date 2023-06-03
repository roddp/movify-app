import main from "../assets/main.svg";

const Landing = () => {
  return (
    <main className="flex-grow bg-gray-700 text-white">
      <div className="container mx-auto px-4 py-6 ">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2">
            <div className="flex flex-col h-full justify-center">
              <h1 className="text-4xl font-bold mb-4">
                Musify <span className="text">App</span>
              </h1>
              <p className="text-lg mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex h-full justify-center">
              <img src={main} alt="Landing Page Image" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
