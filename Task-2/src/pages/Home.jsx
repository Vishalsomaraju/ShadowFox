import React from "react";
import Carousel from "../components/Carousel";
import MidBanner from "../components/MidBanner";
import Features from "../components/Features";

export default function Home() {
  return (
    <div>
      <Carousel />
      <MidBanner />
      <Features />
    </div>
  );
}
