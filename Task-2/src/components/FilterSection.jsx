import React, { useMemo, useState } from "react";
import { getData } from "../context/DataContext";
import { IoFilter } from "react-icons/io5";

export default function FilterSection() {
  const [price, setPrice] = useState(5000);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [showFilters, setShowFilters] = useState(false); // toggle for dropdown

  const { data } = getData();

  const categoryOnlyData = useMemo(() => {
    const newVal = data?.map((curElem) => curElem["category"]);
    return ["All", ...new Set(newVal)];
  }, [data]);

  const brandOnlyData = useMemo(() => {
    const brands = data?.map((curElem) => curElem["brand"]);
    return ["All", ...new Set(brands)];
  }, [data]);

  const FilterContent = () => (
    <div className="bg-gray-100 p-4 rounded-md mt-4 lg:mt-0">
      <input
        type="text"
        placeholder="Search.."
        className="bg-white p-2 rounded-md border-gray-400 border-2 hover:scale-105 w-full"
      />

      {/* Category Filter */}
      <h1 className="mt-5 font-semibold text-xl">Category</h1>
      <div className="flex flex-col gap-2 mt-3">
        {categoryOnlyData?.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={selectedCategory === item}
              onChange={() => setSelectedCategory(item)}
            />
            <button
              className="cursor-pointer uppercase hover:scale-105"
              onClick={() => setSelectedCategory(item)}
            >
              {item}
            </button>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <h1 className="mt-5 font-semibold text-xl">Brand</h1>
      <select
        className="bg-white w-full p-2 rounded-md border-gray-200 border-2 mt-3 cursor-pointer hover:scale-105"
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
      >
        {brandOnlyData?.map((item, index) => (
          <option key={index} value={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>

      {/* Price Filter */}
      <h1 className="mt-5 font-semibold text-xl">Price Range</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="priceRange">Price range: $0 - ${price}</label>
        <input
          id="priceRange"
          type="range"
          min={0}
          max={5000}
          step={100}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="hover:scale-105"
        />
      </div>

      {/* Reset Button */}
      <button
        className="bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer hover:scale-105 hover:bg-red-600"
        onClick={() => {
          setPrice(5000);
          setSelectedCategory("All");
          setSelectedBrand("All");
        }}
      >
        Reset Filters
      </button>
    </div>
  );

  return (
    <div className="w-full">
      {/* Mobile/Tablet Toggle Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-black font-semibold px-4 py-2 rounded-md w-full"
        >
          <IoFilter className="text-xl" />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        {showFilters && <FilterContent />}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <FilterContent />
      </div>
    </div>
  );
}
