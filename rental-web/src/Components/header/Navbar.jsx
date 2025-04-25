import {NavLink} from "react-router-dom";
import { MdOutlineAdd } from "react-icons/md";

const navLinkStyles =
  "relative group text-blue-950 font-semibold text-[1.1rem]  hover:text-black transition-colors max-[875px]:text-[1rem] max-[395px]:text-[0.9rem] max-[360px]:text-[0.75rem]";

const underlineStyles =
  "absolute left-0  mt-[25px] h-[2px] w-0 bg-blue-950 transition-all duration-300 group-hover:w-full origin-left";

const activeStyles = "text-black";

export const  Navbar = () => {
    return (
        <div className="nav-tab p-1 flex gap-5 justify-between flex-wrap max-[545px]:fixed max-[545px]:bottom-0 max-[545px]:left-0 max-[545px]:right-0 max-[545px]:w-[100%] max-[545px]:bg-white max-[545px]:border-t-2 max-[545px]:border-blue-950  max-[545px]:p-[10px] max-[545px]:py-[18px] max-[545px]:border-b-2 max-[545px]:border-b-blue-950 max-[545px]:rounded-t-xl">

            <nav className="flex items-center  gap-5 max-[545px]:justify-between max-[545px]:w-[100%] max-[315px]:gap-1">

                <NavLink to="/" end className={({ isActive }) =>
                      `${navLinkStyles} ${isActive ? activeStyles : ""}`
                    }>
                      {({ isActive }) => (
                        <>
                          Home
                          <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-950 transition-all duration-300 origin-left ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </>
                      )}
                </NavLink>

                <NavLink to="/myads" className={({ isActive }) =>
                      `${navLinkStyles} ${isActive ? activeStyles : ""}`
                    }>
                      {({ isActive }) => (
                        <>
                          My Ads
                          <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-950 transition-all duration-300 origin-left ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </>
                      )}
                </NavLink>

                <NavLink to="/products" className={({ isActive }) =>
                      `${navLinkStyles} ${isActive ? activeStyles : ""}`
                    }>
                      {({ isActive }) => (
                        <>
                          Products
                          <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-950 transition-all duration-300 origin-left ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </>
                  )}
                </NavLink>

                <NavLink to="/about" className={({ isActive }) =>
                      `${navLinkStyles} ${isActive ? activeStyles : ""}`
                    }>
                      {({ isActive }) => (
                        <>
                          About Us
                          <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-950 transition-all duration-300 origin-left ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </>
                  )}
                </NavLink>

                <NavLink to="/contact" className={({ isActive }) =>
                      `${navLinkStyles} ${isActive ? activeStyles : ""}`
                    }>
                      {({ isActive }) => (
                        <>
                          Contact
                          <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-950 transition-all duration-300 origin-left ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                        </>
                  )}
                </NavLink>
            </nav>
            <div className="flex items-center gap-5 right-nav-tab max-[735px]:hidden">
                <NavLink to="/login" className="text-blue-950 border-l-2 border-l-blue-950 pl-2  font-semibold text-[1.1rem]  hover:text-black">Login</NavLink>
                <NavLink 
                  to="/sell"
                  className="flex items-center gap-1 text-blue-950 font-semibold text-[1.2rem] border-4 rounded-3xl 
                             border-t-blue-800 border-l-blue-950 border-b-blue-800 border-e-blue-950 px-2.5 pr-4 py-0.5 
                             hover:border-t-blue-950 hover:border-l-blue-800 hover:border-b-blue-950 hover:border-e-blue-800 hover:text-black transition duration-300
                             max-[875px]:text-[1.1rem] max-[875px]:pr-3 max-[875px]:px-2  max-[875px]:gap-0.5"
                        
                >
                  <MdOutlineAdd className="text-[1.4rem] max-[875px]:text-[1.2rem]" />
                     Sell
                </NavLink>

            </div>
        </div>
    )
}

