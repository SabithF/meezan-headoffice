"use client";

import {Carousel} from "../components/other_components/carousel.jsx";

export default function PortfolioCarousel() {
  const slideData = [
    {
      title: "Meezan Plantation",
      button: "Explore",
      src: "/assets/img/img-6.jpg",
    },
    {
      title: "Meezan Tea Factory",
      button: "Explore",
      src: "/assets/img/img-1.jpg",
    },
    {
      title: "MEEZAN HARDWARE & PLANTATION DIVISION",
      button: "Explore",
      src: "/assets/img/img-2.jpg",
    },
    {
      title: "Meezan Plantation",
      button: "Explore",
      src: "/assets/img/img-3.jpg",
    },
    {
      title: "Meezan Hospitality",
      button: "Explore",
      src: "/assets/img/img-4.jpg",
    },
    {
      title: "Meezan Education",
      button: "Explore",
      src: "/assets/img/img-5.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20 font-urbanist ">
      <Carousel slides={slideData} />
    </div>
  );
}
