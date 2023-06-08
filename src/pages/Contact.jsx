import { FaLinkedin, FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="flex-grow bg-gray-700 text-white">
      <div className="container mx-auto px-4 py-6 h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-lg mb-8">
            Feel free to reach out to me through any of the following channels:
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/rodrigo-pereira99"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl mr-4 hover:text-purple-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:rodrigodomingospereira99@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl mr-4 hover:text-purple-500"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://roddp.github.io/portfolio-web/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-purple-500"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
