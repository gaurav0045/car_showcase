"use client";

import Image from "next/image";

import CustomButton from "./CustomButton";
// import { CustomButton } from "@/components";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Effortlessly search, book, or rent a car in no time!
        </h1>

        <p className="hero__subtitle">
          Enjoy a stress-free car rental experience through our simplified
          booking process.
        </p>
        <CustomButton
                  title="Explore Cars"
                  containerStyle="bg-primary-blue text-white rounded-full mt-10"
                  handleClick={handleScroll} btnType={"button"}        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
