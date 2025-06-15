import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Carousel() {
  const { data, fetchAllProducts } = useContext(DataContext);

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
        <AiOutlineArrowLeft className="bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-full p-2 w-10 h-10 shadow-lg hover:scale-105 transition-transform" />
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
        <AiOutlineArrowRight className="bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-full p-2 w-10 h-10 shadow-lg hover:scale-105 transition-transform" />
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
    <div className="w-full max-w-screen-2xl mx-auto my-8 px-2 sm:px-4 md:px-6">
      <Slider {...settings}>
        {data?.slice(0, 7).map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-lg overflow-hidden"
          >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12 px-6 sm:px-12 md:px-16 h-full">
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
                <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md mt-4 hover:from-red-600 hover:scale-105 hover:to-purple-600 transition-colors duration-300 cursor-pointer">
                  Shop Now
                </button>
              </div>
              {/* Image Section */}
              <div className="">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-full w-[550px] hover:scale-105 transition-all shadow-2xl shadow-red-500"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
