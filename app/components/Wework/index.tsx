"use client";
import Slider from "react-slick";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
// CAROUSEL DATA

interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
  linkProfile: string;
}

const postData: DataType[] = [
  {
    profession: "Software engineer",
    name: "Nguyen Phu",
    imgSrc: "/images/wework/team_1.jpg",
    linkProfile: "profile/profile-1",
  },
  {
    profession: "Software engineer",
    name: "Le Di Dan",
    imgSrc: "/images/wework/team_2.jpg",
    linkProfile: "profile/profile-2",
  },
  {
    profession: "Data and IT Advisor ",
    name: "Le Dai",
    imgSrc: "/images/wework/team_3.png",
    linkProfile: "profile/profile-3",
  },
  {
    profession: "Software engineer",
    name: "Tran Thai Hoa",
    imgSrc: "/images/wework/team_4.png",
    linkProfile: "profile/profile-4",
  },
  {
    profession: "Sale & Marketing",
    name: "Cong Thanh",
    imgSrc: "/images/wework/team_5.png",
    linkProfile: "profile/profile-5",
  },
];

// CAROUSEL SETTINGS
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  // centerMode: true,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};
export default function MultipleItems() {


  return (
    <div className="bg-wework py-32">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 ">
        <div className="text-center">
          <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
            Đam mê, chuyên nghiệp, sáng tạo
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">
            Đồng lòng, thành công cùng nhau.
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">
            Đổi mới & vươn tới tương lai.
          </h3>
        </div>
      </div>

      <Slider {...settings}>
        {postData.map((items, i) => (
          <div key={i}>
            <div className="bg-white m-3 py-11 my-10 text-center shadow-xl rounded-3xl">
              <div className="relative">
                <Image
                  src={items.imgSrc}
                  alt="gaby"
                  width={502}
                  height={282}
                  className="inline-block m-auto  "
                  style={{}}
                />
              </div>
              <h4 className="text-4xl font-bold pt-14">{items.name}</h4>
              <h3 className="text-2xl font-normal pt-4 pb-2 opacity-50">
                {items.profession}
              </h3>
              <Link
                href={items.linkProfile}
                className="text-lg font-semibold group-hover:text-white text-blue hover-underline"
              >
                View profile
                <ChevronRightIcon width={20} height={20} />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
