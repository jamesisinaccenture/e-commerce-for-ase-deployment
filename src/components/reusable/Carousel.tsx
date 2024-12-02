import { useState, useEffect } from "react";
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
    setCurrentSlide(
      (prev) => (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[300px] rounded-lg">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex transition-opacity duration-1000 rounded-lg ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Text Section */}
          <div className="flex flex-col justify-center p-8 text-left space-y-4 rounded-s-3xl text-white bg-[#1A1E3A] w-full md:w-1/2 h-auto md:h-full">
            <p className="text-sm md:text-lg">{item.description}</p>
            <h1 className="text-2xl md:text-5xl font-bold">{item.title}</h1>
            <p className="text-base md:text:lg font-semibold">
              {item.discount}
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-auto md:h-full flex items-center rounded-e-3xl justify-center bg-[#1A1E3A]">
            <img
              src={item.image}
              alt={item.title}
              className="h-3/4 w-auto object-contain"
            />
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="bg-white absolute -left-6 top-[43%] z-10 rounded-full p-1">
        <Button
          variant="ghost"
          className=" bg-[#F3F9FB] rounded-full"
          size="icon"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6 text-[#008ECC]" />
        </Button>
      </div>

      <div className="bg-white absolute -right-6 top-[43%] z-10 rounded-full p-1">
        <Button
          variant="ghost"
          className="bg-[#F3F9FB] rounded-full"
          size="icon"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6 text-[#008ECC]" />
        </Button>
      </div>

      {/* Dots for Slide Navigation */}
      <div className="absolute bottom-4 left-4 p-8 flex space-x-1">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`h-2  rounded-full transition-all ${
              index === currentSlide ? "bg-white w-6" : "bg-gray-500 w-2"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
