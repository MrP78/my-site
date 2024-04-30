import React from "react";
import Image from "next/image";
import "./Hero.scss";

const Hero = () => {
  return (
    <div>
      <Image
        src="/bg_sligro.jpg"
        alt="hero image"
        width={10000}
        height={1000}
        style={{
          //   position: "fixed",
          height: "10rem",
          zIndex: "-8",
          //   filter: "grayscale(50%)",
        }}
      ></Image>
    </div>
  );
};

export default Hero;
