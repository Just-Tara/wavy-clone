import womanWithPhone from "../assets/womanWithPhone.png";
import { faBolt, faHeadset, faArrowRight, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Features() {
    return(
        <>
            <div className="w-full lg:flex mb-15">
                <div className="bg-linear-to-b from-[#5d03d3] to-[#ff00ff] flex-2  h-[500px] ">
                    <div className=" px-5 lg:px-18 flex flex-col gap-2 py-15">
                        <p className="text-blue-500 text-[20px] underline underline-offset-6" id="feature">The Feature</p>
                    <h1 className="text-white text-5xl flex-2  pb-5">Outstanding app feature</h1>
                    <p className="text-white text-[12px] ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                         Non nobis accusantium dignissimos, 
                         harum ipsa quos eveniet dolorum molestiae quod natus sed 
                         blanditiis impedit nam repudiandae quasi.</p>
                    <button className="p-2  mt-5 font-semibold bg-yellow-500 rounded-[20px]">Download the App</button>
                    
                    </div>
                </div>
              <img src={womanWithPhone} alt="woman with phone" className="flex-3 bg-cover h-[500px]" />
            </div>

            <div>
                <div className="flex flex-col items-center gap-1">
                    <h1 className="bg-gray-100 text-3xl font-bold p-2 rounded-[10px] mb-1">Awesome Features</h1>   
                    <p className="text-gray-400 mb-15 px-8 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                         Non nobis accusantium dignissimos,</p>
                </div>
                <div className="flex flex-col px-8 lg:flex gap-8 lg:gap-6 md:px-30 lg:px-30 mb-15">
                    <div className="flex flex-col items-center gap-2">
                    <div className="bg-linear-to-b from-[#5d03d3] to-[#ff00ff] rounded-full p-5"> 
                        <FontAwesomeIcon icon={faPalette} className="text-3xl text-white" />   
                    </div>
                    <p className="text-green-300 underline underline-offset-6">lorem</p>
                    <h1 className="font-bold text-[20px]">Beatiful interface</h1>
                    <p className="text-gray-300 text-[12px] text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                         Non nobis accusantium dignissimos, 
                         harum ipsa quos eveniet dolorum molestiae quod natus sed 
                         blanditiis impedit nam repudiandae quasi.
                    </p>

                    <a href="#" className="text-blue-500 uppercase">Learn more  <FontAwesomeIcon icon={faArrowRight}   /></a>
                </div>

                 <div className="flex flex-col items-center gap-2">
                    <div className="bg-linear-to-b from-[#5d03d3] to-[#ff00ff] rounded-full p-5"> 
                        <FontAwesomeIcon icon={faBolt} className="text-3xl text-white " />   
                    </div>
                    <p className="text-green-300 underline underline-offset-6">lorem</p>
                    <h1 className="font-bold text-[20px]">With the speed of light</h1>
                    <p className="text-gray-300 text-[12px] text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                         Non nobis accusantium dignissimos, 
                         harum ipsa quos eveniet dolorum molestiae quod natus sed 
                         blanditiis impedit nam repudiandae quasi.
                    </p>

                    <a href="#" className="text-blue-500 uppercase">Learn more  <FontAwesomeIcon icon={faArrowRight} /></a>

                </div>

                 <div className="flex flex-col items-center gap-2">
                    <div className="bg-linear-to-b from-[#5d03d3] to-[#ff00ff] rounded-full p-5"> 
                        <FontAwesomeIcon icon={faHeadset} className="text-3xl text-white " />   
                    </div>
                    <p className="text-green-300 underline underline-offset-6">lorem</p>
                    <h1 className="font-bold text-[20px]">Professional E-support</h1>
                    <p className="text-gray-300 text-[12px] text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                         Non nobis accusantium dignissimos, 
                         harum ipsa quos eveniet dolorum molestiae quod natus sed 
                         blanditiis impedit nam repudiandae quasi.
                    </p>

                    <a href="#" className="text-blue-500 uppercase">Learn more  <FontAwesomeIcon icon={faArrowRight} /></a>

                </div>
                </div>
                 
            </div>


            </>
    );
}
