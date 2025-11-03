export default function PhoneMockup() {
  return (
    <>
      <div className="relative w-[250px] h-[470px] rounded-3xl border-[6px] border-white bg-linear-to-b from-indigo-600 to-purple-700 shadow-[0_0_40px_rgba(124,58,237,0.6)]">
       
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[22px] border-t-2 border-[#ccc] bg-white rounded-b-xl">
          <div className="flex gap-1 justify-center items-center h-full">
            <p className="border border-[#eee] bg-[#eee] rounded-full w-2 h-2"></p>
            <p className="border border-[#eee] bg-[#eee] rounded-full w-2 h-2"></p>
            <p className="border border-[#eee] bg-[#eee] rounded-full w-8 h-2"></p>
          </div>
        </div>
            <div className="absolute -right-2 top-[140px] w-1 h-[50px] bg-gray-100 rounded-full shadow-md"></div>

            <div className="absolute -left-2 top-[50px] w-1 h-7 bg-gray-100 rounded-full shadow-md"></div>
            <div className="absolute -left-2 top-[100px] w-1 h-[35px] bg-gray-100 rounded-full shadow-md"></div>
            <div className="absolute -left-2 top-[150px] w-1 h-[35px] bg-gray-100 rounded-full shadow-md"></div>
      </div>
    </>
  );
}
