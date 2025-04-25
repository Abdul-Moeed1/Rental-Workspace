import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { fetchProductData } from "./ProductsApiData";

export const Products = () => {
  const [productData, setProductData] = useState([]);
  const [error, setError]         = useState(null);
  const [loading, setLoading]     = useState(true);
  const navigate                  = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProductData();
        setProductData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <section className="flex flex-col space-y-4 px-4 py-6 pt-40 pb-40 overflow-hidden  max-[907px]:pt-41 max-[735px]:pt-28 max-[535px]:pt-24 ">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">Our Products</h1>
        <p className="text-gray-600">Browse through our available items</p>
      </div>

      {/* Cards Container: flex wrap */}
      {loading ? (
        <div className="flex flex-wrap gap-6 justify-center pt-40 pb-40 overflow-hidden  max-[907px]:pt-41 max-[735px]:pt-28 max-[535px]:pt-24">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="w-48 h-64 bg-gray-200 animate-pulse rounded-lg flex flex-col"
              >
                <div className="h-40 bg-gray-300 rounded-t-lg"></div>
                <div className="p-4 space-y-2 flex-1">
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
        </div>
      ) : error ? (
        <p className="text-red-500 text-center">Error: {error.message}</p>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {productData.length > 0 ? (
            productData.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))
          ) : (
            <p className="text-gray-500 text-center">No products found.</p>
          )}
        </div>
      )}

      {/* See More */}
      <div
        className="mt-6 text-center text-blue-600 hover:underline cursor-pointer"
        onClick={() => navigate("/products")}
      >
        See more products
      </div>
    </section>
  );
};