"use client";
import Slider from "react-slick";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// CAROUSEL DATA

interface DataType {
  heading: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    heading: "XE NÂNG ILIFT",
    imgSrc: "/images/featured/ilift_case.jpg",
  },
  {
    heading: "THỂ THAO SOSSPORTS",
    imgSrc: "/images/featured/sossportsvn_case.jpg",
  },
];
const postData2: DataType[] = [
  {
    heading: "THẢO MỘC VŨ HẢI 9999",
    imgSrc: "/images/featured/vuhai999_case.jpg",
  },
  {
    heading: "THẨM MỸ THANH TUYỀN",
    imgSrc: "/images/featured/Group-193.jpg",
  },
];
const postData3: DataType[] = [
  {
    heading: "TÀI LIỆU GIÁO DỤC",
    imgSrc: "/images/featured/Group-200.jpg",
  },
  {
    heading: "SODIA AGENCY",
    imgSrc: "/images/featured/Group-187.jpg",
  },
];
const postData4: DataType[] = [
  {
    heading: "NEXT2 PRODUCTION",
    imgSrc: "/images/featured/Group-198.jpg",
  },
  {
    heading: "BẤT ĐỘNG SẢN IRA",
    imgSrc: "/images/featured/irabdsnew.jpg",
  },
];
const postData5: DataType[] = [
  {
    heading: "HOA SÁP NHẬP KHẨU HSNK",
    imgSrc: "/images/featured/hoasapnhapkhau.jpg",
  },
  {
    heading: "ĐÀO TẠO FAST LEARNING VN",
    imgSrc: "/images/featured/fastlearning_case-2.jpg",
  },
];

// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.3)",
        padding: "28px",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.3)",
        padding: "28px",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}

export default function MultipleItems() {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    // centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    speed: 500,
    // nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
    // prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const titleProject = {
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
  };
  return (
    <div id="features" className="bg-bgLightYellow bg-wework py-20">
      <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
        <div className="text-center pb-10 md:pt-36 pt-32">
          <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
            Đây là những
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-blue text-opacity-50 lg:mr-48 my-2">
            dự án của
          </h3>
          <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-2">
            chúng tôi.
          </h3>
        </div>
        <Slider {...settings}>
          {postData.map((items, i) => (
            <div key={i}>
              <div className="bg-transparent m-3 my-10 rounded-3xl imageContainer ">
                <Image
                  src={items.imgSrc}
                  alt="gaby"
                  width={635}
                  height={625}
                  className="rounded-2xl "
                />

                <Link href={`${items.imgSrc}`} target="_blank">
                  <button
                    className="hidden text-white font-semibold absolute z-10 text-4xl w-100"
                    style={titleProject}
                  >
                    {items.heading}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
        <Slider {...settings}>
          {postData2.map((items, i) => (
            <div key={i}>
              <div className="bg-transparent m-3 my-10 rounded-3xl imageContainer">
                <Image
                  src={items.imgSrc}
                  alt="gaby"
                  width={635}
                  height={625}
                  className="rounded-2xl "
                />

                <Link href={`${items.imgSrc}`} target="_blank">
                  <button
                    className="hidden text-white font-semibold absolute z-10 text-4xl w-100"
                    style={titleProject}
                  >
                    {items.heading}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>

        {showMore ? (
          <>
            <Slider {...settings}>
              {postData3.map((items, i) => (
                <div key={i}>
                  <div className="bg-transparent m-3 my-10 rounded-3xl imageContainer">
                    <Image
                      src={items.imgSrc}
                      alt="gaby"
                      width={635}
                      height={625}
                      className="rounded-2xl "
                    />

                    <Link href={`${items.imgSrc}`} target="_blank">
                      <button
                        className="hidden text-white font-semibold absolute z-10 text-4xl w-100"
                        style={titleProject}
                      >
                        {items.heading}
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
            <Slider {...settings}>
              {postData4.map((items, i) => (
                <div key={i}>
                  <div className="bg-transparent m-3 my-10 rounded-3xl imageContainer">
                    <Image
                      src={items.imgSrc}
                      alt="gaby"
                      width={635}
                      height={625}
                      className="rounded-2xl "
                    />

                    <Link href={`${items.imgSrc}`} target="_blank">
                      <button
                        className="hidden text-white font-semibold absolute z-10 text-4xl w-100"
                        style={titleProject}
                      >
                        {items.heading}
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>{" "}
            <Slider {...settings}>
              {postData5.map((items, i) => (
                <div key={i}>
                  <div className="bg-transparent m-3 my-10 rounded-3xl imageContainer">
                    <Image
                      src={items.imgSrc}
                      alt="gaby"
                      width={635}
                      height={625}
                      className="rounded-2xl "
                    />

                    <Link href={`${items.imgSrc}`} target="_blank">
                      <button
                        className="hidden text-white font-semibold absolute z-10 text-4xl w-100"
                        style={titleProject}
                      >
                        {items.heading}
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </>
        ) : (
          <></>
        )}
        {showMore ? (
          <>
            <div className="flex justify-center">
              <button onClick={handleShowMore} className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">
                Thu gọn
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center">
              <button onClick={handleShowMore}  className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">
                Xem thêm
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
