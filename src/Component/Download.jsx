import { faApple } from "@fortawesome/free-brands-svg-icons/faApple";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DownloadSection() {
  return (
    <>
      <div className="relative w-full min-h-screen text-white overflow-hidden">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="w-full h-auto absolute bottom-0 rotate-180"
          version="1.1"
        >
          <rect x="0" y="0" width="900" height="600" fill="#fff" />
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
                    750 301.8C800 309 850 332 875 343.5L900 355L900 0L875 0C850 0 800 0 750 
                    0C700 0 650 0 600 0C550 0 500 0 450 0C400 0 350 0 300 0C250 0 200 0 150 
                    0C100 0 50 0 25 0L0 0Z"
            fill="url(#waveGradient)"
            strokeLinecap="round"
            strokeLinejoin="miter"
          ></path>
        </svg>

        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center gap-3">
          <h2 className="text-3xl font-bold">Download the App</h2>
          <p className="text-gray-200">
            Download our amazing app from the App Store now!
          </p>

          <div className="flex gap-4 mt-4">
            <div className="flex gap-1 bg-gray-950 pr-3 pl-2 py-1 rounded-md items-center">
              <img
                src="./src/assets/google-play.png"
                alt="google-image"
                className="w-7 h-7"
              />
              <div className="text-white">
                <p className="text-[8px] uppercase leading-tight">Get it on</p>
                <h3 className="font-semibold text-lg">Google Play</h3>
              </div>
            </div>

            <div className="flex gap-1 bg-gray-950 pr-3 pl-1 py-1 rounded-md items-center">
              <FontAwesomeIcon icon={faApple} className="text-3xl" />
              <div className="text-white">
                <p className="text-[8px] uppercase leading-tight">Download on</p>
                <h3 className="font-semibold text-lg">App Store</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
