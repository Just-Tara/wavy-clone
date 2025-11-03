import PhoneMockup from "./PhoneMockup";
import { faRotate, faLock, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Screen () {

    return(
        <>
            <div className=" lg:flex items-center  justify-center gap-40 px-60" id="screen">
               <div>
                <PhoneMockup/>
               </div>
                <div className="">
                    <h1 className="text-4xl font-bold mb-1 ">Featured Screens</h1>
                    <p className="text-gray-400 mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    <div className="flex justify-between mb-4">
                        <p className="text-green-400 underline underline-offset-6">lorem</p>
                        <p className="text-green-400 underline underline-offset-6">lorem</p>
                        <p className="text-green-400 underline underline-offset-6">lorem</p>
                    </div>
                   <div className="lg:flex flex-col gap-10">
                     <div className="flex gap-10">
                        <FontAwesomeIcon icon={faRotate} className="bg-[#5d03d3] text-white rounded-full text-[25px] p-4"/>
                       
                        <div>
                             <h3 className="text-[18px] font-bold">Sync across your device</h3>
                                <p className="text-gray-400 text-[12px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Non nobis accusantium dignissimos, 
                                harum ipsa quos eveniet dolorum molestiae quod natus sed 
                                blanditiis impedit nam repudiandae quasi.
                                </p>
                        </div>

                    </div>

                     <div className="flex gap-10">
                        <FontAwesomeIcon icon={faLock} className="bg-[#ff00ff] text-white rounded-full text-[25px] p-4"/>
                         <div>
                             <h3 className="text-[18px] font-bold">Secure Connection</h3>
                                <p className="text-gray-400 text-[12px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Non nobis accusantium dignissimos, 
                                harum ipsa quos eveniet dolorum molestiae quod natus sed 
                                blanditiis impedit nam repudiandae quasi.
                                </p>
                        </div>
                    </div>

                     <div className="flex gap-10">
                        <FontAwesomeIcon icon={faBell} className="bg-green-500 text-white rounded-full text-[25px] p-4"/>
                          <div>
                             <h3 className="text-[18px] font-bold">Notification</h3>
                                <p className="text-gray-400 text-[12px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Non nobis accusantium dignissimos, 
                                harum ipsa quos eveniet dolorum molestiae quod natus sed 
                                blanditiis impedit nam repudiandae quasi.
                                </p>
                        </div>

                    </div>
                   </div>
                </div>
            </div>
        </>
    );
}
export default Screen;