import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { MdOutlineAdd } from "react-icons/md";
export default function AnimatedSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const toggleSearch = () => {
    setIsOpen((prev) => !prev);
    setQuery("");
  };

  return ( 
    <div className="flex justify-end items-center   space-x-2 max-[735px]:mt-1  max-[535px]:flex-col-reverse max-[535px]:items-end max-[535px]:gap-2.5">
      {/* Animated input container */} 
      <div className="flex items-center gap-2 max-[535px]:w-[100%] max-[535px]:justify-end">

      <div
        className={`flex items-center transition-all border border-blue-950 rounded-lg duration-500 overflow-hidden ${
          isOpen ? "w-64 opacity-100 max-[335px]:w-50" : "w-0 opacity-0 "
        }`}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full px-3 py-1.5  rounded-l-md text-sm outline-none"
        />
        <button className="bg-blue-950 text-white px-3 py-1.5 rounded-r-md text-sm">
          Search
        </button>
      </div>

      {/* Toggle icon */}
      <button
        onClick={toggleSearch}
        className="text-blue-950 text-xl hover:text-black transition-colors"
      >
        {isOpen ? <FiX /> : <FiSearch />}
      </button>
      </div>

      <div className=" items-center gap-5 hidden right-nav-tab max-[735px]:flex max-[545px]:">
                <NavLink to="/login" className="text-blue-950 border-l-2 border-l-blue-950 pl-2  font-semibold text-[1.1rem]  hover:text-black max-[535px]:text-[1rem] max-[535px]:border-l-0 max-[535px]:border-r-2 max-[535px]:pr-2">Login</NavLink>
                <NavLink 
                  to="/sell"
                  className="flex items-center gap-1 text-blue-950 font-semibold text-[1.2rem] border-4 rounded-3xl 
                             border-t-blue-800 border-l-blue-950 border-b-blue-800 border-e-blue-950 px-2.5 pr-4 py-0.5 
                             hover:border-t-blue-950 hover:border-l-blue-800 hover:border-b-blue-950 hover:border-e-blue-800 hover:text-black transition duration-300
                             max-[875px]:text-[1.1rem] max-[875px]:pr-3 max-[875px]:px-2  max-[875px]:gap-0.5
                             max-[535px]:text-[1rem] max-[535px]:pr-2.5 max-[535px]:px-1 max-[535px]:border-[3.5px]"
                             
                >
                  <MdOutlineAdd className="text-[1.4rem] max-[875px]:text-[1.2rem] max-[535px]:text-[1.1rem]" />
                     Sell
                </NavLink>

            </div>
    </div>
  );
}
