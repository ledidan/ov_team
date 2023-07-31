"use client";
import React from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
  imgSrc: string;
}

const data: Data[] = [
  {
    imgSrc: "/images/Companies/trithongreal.png",
  },
  {
    imgSrc: "/images/Companies/Group-117.png",
  },
  {
    imgSrc: "/images/Companies/hoasapnhapkhau.svg",
  },
  {
    imgSrc: "/images/Companies/ilift_logoArtboard-4.webp",
  },
  {
    imgSrc: "/images/Companies/thammythanhtuyen.png",
  },
  {
    imgSrc: "/images/Companies/Logo-Fast-Learning.png",
  },
];

const data_1: Data[] = [
  {
    imgSrc: "/images/Companies/lOGO-web_Trang.png",
  },
  {
    imgSrc: "/images/Companies/logobrodarrd.png",
  },
  {
    imgSrc: "/images/Companies/namvietluat.png",
  },
  {
    imgSrc: "/images/Companies/next2.png",
  },
  {
    imgSrc: "/images/Companies/saigonviettravel.png",
  },
  {
    imgSrc: "/images/Companies/tai-lieu-giao-duc-header.png",
  },
];

const data_2: Data[] = [
  {
    imgSrc: "/images/Companies/logo_cuhai999.jpg",
  },
  {
    imgSrc: "/images/Companies/fitsta.jpg",
  },
  {
    imgSrc: "/images/Companies/vuvuchoco.png",
  },
  {
    imgSrc: "/images/Companies/Wordpress_Ultimate.jpeg",
  },
  {
    imgSrc: "/images/Companies/gaco.jpeg",
  },
  {
    imgSrc: "/images/Companies/du_lich_cap_doi.jpeg",
  },
];
// CAROUSEL SETTINGS
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

export default function Partners() {
  return (
    <div className="text-center bg-lightpink mx-2">
      <div className="mx-auto max-w-2xl px-4s sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-8xl sm:text-65xl font-bold text-center mb-24 leading-4">
          <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl lg:text-6xl md:4px lh-96">
            <span className="text-blue font-bold">Khách hàng </span>của chúng tôi
          </h1>
        </h2>
        <div>
          <Slider {...settings}>
            {data.map((item, i) => (
              <div key={i}>
                <img src={item.imgSrc} alt={item.imgSrc} className="w-40" />
              </div>
            ))}
          </Slider>
          <Slider {...settings} className="mt-20">
            {data_1.map((item, i) => (
              <div key={i}>
                <img src={item.imgSrc} alt={item.imgSrc} className="w-40" />
              </div>
            ))}
          </Slider>
          <Slider {...settings} className="mt-20">
            {data_2.map((item, i) => (
              <div key={i}>
                <img src={item.imgSrc} alt={item.imgSrc} className="w-40" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
