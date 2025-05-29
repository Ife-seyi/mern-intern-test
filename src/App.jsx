import React from "react";
import "./index.css";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="mx-auto mb-6 w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center text-white text-5xl font-bold">
          VG
        </div>

        <h1 className="text-4xl font-extrabold text-blue-700 mb-2">
          Archibong Victoria Grace
        </h1>

        <p className="text-gray-700 mb-6">
          Aspiring MERN Stack Developer | Passionate about building web
          apps and learning new technologies.
        </p>

        <div className="flex justify-center space-x-6 mb-6 text-blue-600 text-2xl">
          <a
            href="https://www.linkedin.com/in/archibong-victoria-4a2109319/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-800 transition"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Ife-seyi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
            className="hover:text-gray-800 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/petalbloomskincare/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-800 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://x.com/VictoriaV90922"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="XTwitter"
            className="hover:text-blue-400 transition"
          >
            <FaXTwitter />
          </a>
        </div>

        <a
          href="mailto:archibongvictoria44@gmail.com"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default App;
