"use client";
import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";

const index = () => {
  return (
    <div id="feedback" className="mx-auto max-w-7xl sm:py-4 lg:px-8 m-32">
      <h2 className="text-4xl sm:text-65xl font-bold text-center ">
        Chúng tôi tin rằng bạn xứng đáng có <span className="text-blue">  dịch vụ tốt nhất.</span>
      </h2>
      <div className="grid grid-cols-1 my-16 aspect-video aspect-w-16 aspect-h-9">
        <iframe
          width="1200"
          height="500"
          src="https://www.youtube.com/embed/zJSgG0wBrCw"
          title="YouTube video player"
          allow="autoplay; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default index;
