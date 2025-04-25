import { LuHeart } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";

export const ProductCard = ({ data }) => (
  <li className="flex-none w-48 bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between">
    <img
      src={data.images?.[0]?.replace(/[\["\\]]/g, '') || 'fallback.jpg'}
      alt={data.title}
      loading="lazy"
      className="w-full h-40 object-cover"
    />
    <div className="p-4 flex flex-col justify-between flex-1">
      <div>
        <h4 className="text-md font-medium text-center h-14 overflow-hidden line-clamp-2">
          {data.title}
        </h4>
        <p className="text-sm text-gray-500 text-center">
          <b className="text-blue-950">Rent:</b> {data.price}$/day
        </p>
      </div>
      <div className="flex items-center justify-center space-x-4 mt-4">
        <button className="flex items-center space-x-1 bg-blue-950 text-white px-4 py-2 rounded-md">
          <span className="text-sm">Rent it</span>
          <MdArrowOutward />
        </button>
        <button className="text-xl" aria-label="Add to favorites">
          <LuHeart />
        </button>
      </div>
    </div>
  </li>
);