import { useEffect, useState, useRef } from "react";
import { ElectronicsCard } from "./ElectronicsCard";
import { useNavigate } from "react-router-dom";
import { fetchElectronicsData } from "./ElectronicsApiData";

export const Electronics = () => {
  const [electronicsData, setElectronicsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchElectronicsData();
        setElectronicsData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleScroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth;
    el.scrollBy({ left: dir === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="flex flex-col space-y-4 px-4 py-6">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">Cutting-Edge Electronics</h1>
        <p className="text-gray-600">Discover the Latest in Tech Innovation</p>
      </div>

      {/* Carousel Buttons Top Right */}
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => handleScroll("left")}
          className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center shadow"
        >
          ‹
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center shadow"
        >
          ›
        </button>
      </div>

      {/* Cards List */}
      {loading ? (
        <div className="flex space-x-4 overflow-hidden">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="w-48 h-64 bg-gray-200 animate-pulse  rounded-lg" > <div className="h-40 border-2 border-gray-200"></div> 
               <div className="flex flex-col  h-20 gap-5">
                  <div className="h-4  border-2 border-gray-100"></div>
                  <div className="h-4  border-2 border-gray-100"></div>
                  <div className="h-4  border-2 border-gray-100"></div>
              </div> 
               </div>
            ))}
        </div>
      ) : error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <ul
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth py-4 hide-scrollbar"
        >
          {electronicsData.length > 0 ? (
            electronicsData.slice(0, 8).map((item) => (
              <ElectronicsCard key={item.id} curdata={item} />
            ))
          ) : (
            <p className="text-gray-500">No Electronics found.</p>
          )}
        </ul>
      )}

      {/* See More */}
      <div
        className="mt-4 text-center text-blue-600 hover:underline cursor-pointer"
        onClick={() => navigate("/products")}
      >
        See more
      </div>
    </section>
  );
};