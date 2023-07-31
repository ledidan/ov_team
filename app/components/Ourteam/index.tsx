"use client";
import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";

const index = () => {
  return (
    <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 m-32">
      <h2 className="text-4xl sm:text-65xl font-bold text-center">
        Our team belives you deserve <br /> only the best.
      </h2>
      <h3 className="text-2xl font-medium text-center pt-10 opacity-50">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />{" "}
        eiusmod tempor.
      </h3>
      <div className="grid grid-cols-1 my-16">
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
