import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
 return(
    <>
      <footer className="bg-blue-950 text-gray-400">
  <div className="flex flex-col items-center justify-center p-10 gap-4">
    <h1 className="text-white text-[20px] font-semibold">Get in touch!</h1>
    <div>
      <FontAwesomeIcon icon={faLocationDot} /> 23, Avenue Street, New York, USA
    </div>
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <p><FontAwesomeIcon icon={faPhone} /> +00 123 456 789</p>
      <p><FontAwesomeIcon icon={faEnvelope} /> support@wavy.com</p>
    </div>
  </div>

 <div className="border-t border-gray-700 py-6 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
  <div className="flex items-center text-center gap-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 20"
        className="w-10 h-5"
      >
        <path
          d="M0 10 Q10 0 20 10 Q30 20 40 10 Q50 0 60 10"
          fill="none"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-white font-semibold text-xl tracking-wide">
        WAVY
      </span>
    </div>
  <p className="text-center">©copyright 2024 Wavy. All rights reserved.</p>
  <div className="flex gap-4 text-white text-lg ">
    <FontAwesomeIcon icon={faFacebook} />
    <FontAwesomeIcon icon={faYoutube} />
    <FontAwesomeIcon icon={faTwitter} />
    <FontAwesomeIcon icon={faInstagram} />
  </div>
</div>

</footer>

    </>
 );
}