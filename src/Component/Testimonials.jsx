import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import fourth from "../assets/fourth.png";
import fifth from "../assets/fifth.png";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Testimonials() {
  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      <svg
        id="visual"
        viewBox="0 0 900 600"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto absolute top-0 left-0"
        version="1.1"
      >
        <rect x="0" y="0" width="900" height="600" fill="#fff"></rect>
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
        ></path>
      </svg>
 
      <div className="relative z-10 flex flex-col items-center gap-3 mt-5" id="testimonial">
        <h1 className="text-white text-3xl font-bold">Testimonials</h1>
        <p className="text-gray-200 px-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

      
         <div className="flex gap-5 items-center p">
          <img src={first} alt="first" className="lg:w-30 lg:h-30 w-20 h-20 rounded-full" />
          <img src={second} alt="second" className="lg:w-30 lg:h-30 w-20 h-20 rounded-full" />
          <img src={fifth} alt="fifth" className="lg:w-45 lg:h-45 w-30 h-30 rounded-full" />
          <img src={third} alt="third" className="lg:w-30 lg:h-30 w-20 h-20 rounded-full" />
          <img src={fourth} alt="fourth" className="lg:w-30 lg:h-30 w-20 h-20 rounded-full" />
        </div>

       
        <div>
          <p className="text-center mb-3 text-yellow-500 lg:text-2xl">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </p>
          <p className="text-white px-8  text-center mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Delectus, recusandae minima commodi.
          </p>
          <p className="text-white text-center text-[22px] font-bold">Debbie Harry</p>
        </div>
        
      </div>
  
    </div>
  );
}
