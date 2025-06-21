import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import FilterSection from "../components/FilterSection";
import Loading from "../assets/src_assets_Loading4.webm";
import Productcard from "../components/Productcard";

export default function Products() {
  const { data, fetchAllProducts } = getData();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto mb-10">
        {data?.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mt-10">
            {/* Filter Sidebar */}
            <div className="w-full lg:w-1/4">
              <FilterSection />
            </div>

            {/* Product Grid */}
            <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {data.map((product, index) => (
                <Productcard key={index} product={product} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-[400px]">
            <video muted autoPlay loop className="w-32 h-32 md:w-48 md:h-48">
              <source src={Loading} type="video/webm" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
}
