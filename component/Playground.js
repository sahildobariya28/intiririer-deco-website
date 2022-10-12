import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    className: "reviews",
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div className="text-center slide-1">
        <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
          <div className="hero-content 2xl:max-w-[59%] xl:max-w-[65%] lg:max-w-[87%] sm:max-w-[70%] mx-auto max-w-full">
            <h2 className="lg:text-2xl text-white font-bold text-lg sm:text-xl">
              WELCOME TO HOME INTERIOR
            </h2>
            <h1 className="2xl:text-6xl font-bold text-white my-5 text-xl sm:text-4xl md:text-5xl md:leading-[56px] lg:text-[52px]">
              THE <span className="text-[#e0ac26]">FUTURIST</span> DOOR FOR YOU!
            </h1>
            <p className="lg:text-lg lg:leading-8 text-white font-normal text-sm sm:text-base leading-7 sm:leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum is simply dummy text of the printing and
              typesetting industry..
            </p>
          </div>
        </div>
      </div>
      <div className="text-center slide-2">
        <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
          <div className="hero-content 2xl:max-w-[59%] xl:max-w-[65%] lg:max-w-[87%] sm:max-w-[70%] mx-auto max-w-full">
            <h2 className="lg:text-2xl text-white font-bold text-lg sm:text-xl">
              WELCOME TO HOME INTERIOR
            </h2>
            <h1 className="2xl:text-6xl font-bold text-white my-5 text-xl sm:text-4xl md:text-5xl md:leading-[56px] lg:text-[52px]">
              THE <span className="text-[#e0ac26]">FUTURIST</span> DOOR FOR YOU!
            </h1>
            <p className="lg:text-lg lg:leading-8 text-white font-normal text-sm sm:text-base leading-7 sm:leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum is simply dummy text of the printing and
              typesetting industry..
            </p>
          </div>
        </div>
      </div>
      <div className="text-center slide-3">
        <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
          <div className="hero-content 2xl:max-w-[59%] xl:max-w-[65%] lg:max-w-[87%] sm:max-w-[70%] mx-auto max-w-full">
            <h2 className="lg:text-2xl text-white font-bold text-lg sm:text-xl">
              WELCOME TO HOME INTERIOR
            </h2>
            <h1 className="2xl:text-6xl font-bold text-white my-5 text-xl sm:text-4xl md:text-5xl md:leading-[56px] lg:text-[52px]">
              THE <span className="text-[#e0ac26]">FUTURIST</span> DOOR FOR YOU!
            </h1>
            <p className="lg:text-lg lg:leading-8 text-white font-normal text-sm sm:text-base leading-7 sm:leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum is simply dummy text of the printing and
              typesetting industry..
            </p>
          </div>
        </div>
      </div>
      <div className="text-center slide-4">
        <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
          <div className="hero-content 2xl:max-w-[59%] xl:max-w-[65%] lg:max-w-[87%] sm:max-w-[70%] mx-auto max-w-full">
            <h2 className="lg:text-2xl text-white font-bold text-lg sm:text-xl">
              WELCOME TO HOME INTERIOR
            </h2>
            <h1 className="2xl:text-6xl font-bold text-white my-5 text-xl sm:text-4xl md:text-5xl md:leading-[56px] lg:text-[52px]">
              THE <span className="text-[#e0ac26]">FUTURIST</span> DOOR FOR YOU!
            </h1>
            <p className="lg:text-lg lg:leading-8 text-white font-normal text-sm sm:text-base leading-7 sm:leading-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem Ipsum is simply dummy text of the printing and
              typesetting industry..
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
}
