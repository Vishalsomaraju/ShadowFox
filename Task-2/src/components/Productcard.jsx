import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Productcard({ product }) {
  return (
    <div className="border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max">
      <img src={product.image} alt="" className="bg-gray-100 aspect-square" />
      <h1 className="line-clamp-2 p-1 font-semibold">{product.title}</h1>
      <p className="my-1 text-ld text-gray-800 font-bold">${product.price}</p>
      <button className="bg-red-500 hover:bg-red-600 text-white w-full font-semibold py-2 px-4 md:py-3 md:px-6 flex gap-2 items-center justify-center rounded-md text-lg transition duration-300 cursor-pointer">
        Add to cart
        <MdOutlineShoppingCart className="w-6 h-6" />
      </button>
    </div>
  );
}
