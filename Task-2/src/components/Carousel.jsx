import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "./Category";

export default function Carousel() {
  const { data, fetchAllProducts } = getData();
  useEffect(() => {
    fetchAllProducts();
  }, []);
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 -translate-y-1/2 left-4 z-20 cursor-pointer"
      >
        <AiOutlineArrowLeft className="bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-full p-2 w-10 h-10 shadow-lg hover:from-red-600 hover:scale-105 hover:to-purple-600 transition-colors duration-300" />
      </div>
    );
  };
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute top-1/2 -translate-y-1/2 right-4 z-20 cursor-pointer"
      >
        <AiOutlineArrowRight className="bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-full p-2 w-10 h-10 shadow-lg hover:from-red-600 hover:scale-105 hover:to-purple-600 transition-colors duration-300" />
      </div>
    );
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="relative overflow-hidden bg-[#101829]">
      <Slider {...settings}>
        {data?.slice(0, 7).map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden min-h-[550px] flex items-center"
          >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-8 px-4 sm:px-8 md:px-16 min-h-[550px]">
              {/* Text Section */}
              <div className="text-white max-w-xl text-center md:text-left animate-fade-in-up">
                <h3 className="text-red-400 text-sm uppercase font-semibold tracking-wide mb-2">
                  Powering Your World with the Best Electronics
                </h3>
                <h1 className="text-2xl sm:text-3xl md:text-4xl line-clamp-3 md:w-[500px] text-white uppercase font-bold leading-snug mb-4">
                  {item.title}
                </h1>
                <p className="text-gray-300 text-sm md:text-base line-clamp-3 md:w-[500px] pr-7">
                  {item.description}
                </p>
                <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-4 py-1 rounded-md mt-4 hover:from-red-600 hover:scale-105 hover:to-purple-600 transition-colors duration-300 cursor-pointer">
                  Shop Now
                </button>
              </div>
              {/* Image Section */}
              <div className="">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-full w-full max-w-[300px] sm:max-w-[400px] md:max-w-[550px] hover:scale-105 transition-all shadow-2xl shadow-red-500 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Category />
    </div>
  );
}
