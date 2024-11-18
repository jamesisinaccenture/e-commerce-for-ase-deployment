import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

import homeAppliances from "@/assets/images/homeAppliances.png";
import latestSmartphones from "@/assets/images/latestSmartphones.png";
import smartWearable from "@/assets/images/smartWearable.png"; 
import { Button } from "@/components/ui/button";

const carouselItems = [
  {
    title: "SMART WEARABLE",
    description: "Best Deal Online on smart watches",
    discount: "UP to 80% OFF",
    image: smartWearable,
  },
  {
    title: "LATEST SMARTPHONES",
    description: "The latest tech, now within your reach",
    discount: "UP to 50% OFF",
    image: latestSmartphones,
  },
  {
    title: "HOME APPLIANCES",
    description: "Smart devices to enhance every corner of your home",
    discount: "UP to 30% OFF",
    image: homeAppliances,
  },
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mb-12 h-[300px] overflow-hidden rounded-lg">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Text Section */}
          <div className="flex flex-col justify-center p-8 text-left space-y-4 text-white bg-[#1A1E3A] w-1/2 h-full">
            <p className="text-lg">{item.description}</p>
            <h1 className="text-5xl font-bold">{item.title}</h1>
            <p className="text-lg font-semibold">{item.discount}</p>
          </div>

          {/* Image Section */}
          <div className="w-1/2 h-full flex items-center justify-center bg-[#1A1E3A]">
            <img
              src={item.image}
              alt={item.title}
              className="h-3/4 w-auto object-contain"
            />
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 text-white p-2 rounded-full"
        size="icon"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 text-white p-2 rounded-full"
        size="icon"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots for Slide Navigation */}
      <div className="absolute bottom-4 left-4 p-8 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-500'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
