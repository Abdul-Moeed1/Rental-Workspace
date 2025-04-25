// import { FaBasketShopping } from "react-icons/fa6";
import { LuHeart } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";

export const ElectronicsCard = ({ curdata }) => {
  return (
    <li className="flex-none w-48 bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between">
      <img
        src={curdata.images?.[0]?.replace(/[\["\\]]/g, '') || 'fallback.jpg'}
        alt={curdata.title}
        loading="lazy"
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h4 className="text-md font-medium text-center h-14 overflow-hidden line-clamp-2">{curdata.title}</h4>
          <p className="text-sm text-gray-500 text-center">
            <b className="text-blue-950">Rent:</b> {curdata.price}$/day 
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <button className="flex items-center space-x-1 bg-blue-950 text-white px-4 py-2 rounded-md cursor-pointer">
            <span className="text-sm">Rent it</span>
            {/* <FaBasketShopping /> */}
            <MdArrowOutward/>
          </button>
          <button className="text-xl cursor-pointer">
            <LuHeart />
          </button>
        </div>
      </div>
    </li>
  );
};