import {useState} from "react";

function NavBar() {
    const  [isMenuOpen, setIsMenuOpen] = useState(false);

return(
    <>
       <header className=" w-full h-full  text-white  flex justify-between py-3 ">
             <div className="flex items-center gap-5">
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
        {/*Desktop View */}
            <nav  className="hidden lg:block space-x-4 mt-1 uppercase text-[14px]" >
            <a href="#product">The Product</a>
            <a href="#feature">Feature</a>
            <a href="#testimonial">Testimonal</a>
             <a href="#screen">Screen</a>
            <a href="#content">Content</a>
        </nav>

          {/*Mobile View */}
        <button 
             onClick={() => {setIsMenuOpen(true)}}
             className="absolute right-5  p-2 text-3xl cursor-pointer lg:hidden "
             aria-label="Open menu"> ☰  
        </button>     
           {isMenuOpen && (
               <div className="fixed inset-0 flex justify-end bg-black/50 lg:hidden">
                    <div className= "bg-linear-to-b from-[#5d03d3] to-[#ff00ff] backdrop-blur-lg shadow-lg transition-transform duration-500 ease-in-out z-40 h-full w-70 p-6 flex flex-col">
                       <button
                        onClick={() => setIsMenuOpen(false)}
                        className="self-start p-2 text-2xl hover:text-red-500 cursor-pointer"
                        aria-label="Close search menu"
                        >
                        ✕
                        </button>
                        <nav  className="lg:hidden items-center uppercase flex flex-col justify-center h-full gap-16" >
                            <a href="#product">The Product</a>
                            <a href="#feature">Feature</a>
                            <a href="#screen">Sreen</a>
                            <a href="#testimonial">Testimonal</a>
                            <a href="#content">Content</a>
                         </nav>


                    </div>
               </div>
           )}

       
        </header>
    </>
);
}


export default NavBar;