import React, { useEffect, useMemo } from "react";
import { getData } from "../context/DataContext";

export default function Category() {
  const { data, fetchAllProducts } = getData();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const categoryOnlyData = useMemo(() => {
    const newVal = data?.map((curElem) => curElem["category"]);
    return [...new Set(newVal)];
  }, [data]);

  return (
    <section className="bg-[#101829] w-full pt-0 mt-0">
      <div
        className="
          max-w-7xl mx-auto flex gap-4 items-center justify-around py-7 px-3 
            overflow-x-auto scrollbar-hide snap-x snap-mandatory whitespace-nowrap scrollbar-hide
        "
      >
        {categoryOnlyData?.map((item, index) => (
          <button
            key={index}
            className="
              bg-gradient-to-r from-red-500 to-purple-500
              text-white rounded-md
              px-4 py-2 text-sm sm:text-base
              uppercase
              hover:from-red-600 hover:scale-105 hover:to-purple-600 transition-colors duration-300
              cursor-pointer
              snap-start
            "
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
