import NavBar from "./NavBar";
import PhoneMockup from "./PhoneMockup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlack, faSpotify, faJava, faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function Product() {
  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      <svg
        id="visual"
        viewBox="0 0 900 600"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto absolute top-0 left-0"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5d03d3" />
            <stop offset="100%" stopColor="#ff00ff" />
          </linearGradient>
        </defs>
        <path
          d="M0 243L25 252.7C50 262.3 100 281.7 
             150 286.7C200 291.7 250 282.3 300 290.8C350 299.3 
             400 325.7 450 332.2C500 338.7 550 325.3 600 314.3C650 303.3 700 294.7 
             750 301.8C800 309 850 332 875 343.5L900 355L900 0L0 0Z"
          fill="url(#waveGradient)"
        />
      </svg>

    
      <div className="relative z-10 flex flex-col items-center px-6 sm:px-10 mb-15">
        <NavBar />

      
        <div className="flex flex-col lg:flex-row justify-center gap-40 px-50">
          <div className="max-w-md mt-12">
            <p className="text-blue-300 underline underline-offset-4 mb-3">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <h1 className="font-semibold text-3xl sm:text-4xl leading-snug">
              Try out our <br /> awesome mobile <br /> application
            </h1>
            <button className="p-2 px-6 mt-5 font-semibold bg-yellow-500 rounded-full hover:bg-yellow-400 transition">
              Download the App
            </button>
          </div>

          <div className="mt-10 lg:mt-0">
            <PhoneMockup />
          </div>
        </div>
  
        <div className="mt-16 text-gray-300 max-w-3xl flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl sm:text-3xl mb-2 text-black">
            Welcome to Wavy
          </h1>
          <p className="text-gray-500 text-base sm:text-lg">
            An Amazing Landing Page App
          </p>
          <p className="mt-5 text-gray-500 text-sm sm:text-base leading-relaxed text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Doloribus provident rem deserunt quo quod reprehenderit voluptates,
            repellat inventore distinctio quidem accusamus ipsa error eligendi 
            in excepturi natus enim at quasi.
          </p>
        </div>

        {/* Brands Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-gray-500 text-base sm:text-lg">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faSlack} /> <span>Slack</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faSpotify} /> <span>Spotify</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faJava} /> <span>JAW</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Adobe</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faGoogle} /> <span>Google</span>
          </div>
        </div>
      </div>
    </div>
  );
}
