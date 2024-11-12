import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const carouselItems = [
  {
    title: "SMART WEARABLE",
    description: "Best Deal Online on smart watches",
    discount: "UP to 70% OFF",
    image: "https://images.unsplash.com/photo-1523755735410-574a35419d8b?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "LATEST SMARTPHONES",
    description: "The latest tech, now within your reach",
    discount: "UP to 50% OFF",
    image: "https://images.unsplash.com/photo-1625887725174-ac938d8700ce?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "HOME APPLIANCES",
    description: "Smart devices to enhance every corner of your home",
    discount: "UP to 30% OFF",
    image: "https://media.istockphoto.com/id/1396952649/photo/kitchen-home-appliances-different-household-appliances-on-white-background.jpg?s=612x612&w=0&k=20&c=0nIFunVt0ixnjl4OEPQ-uV-Ro2lk_99cTQw9zRrp_7I=",
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
    <div className="relative mb-12 h-[400px] overflow-hidden rounded-lg">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative h-full w-full">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40">
              <div className="flex h-full items-center justify-start p-12">
                <div className="max-w-lg space-y-4 text-white">
                  <p className="text-sm font-medium">{item.description}</p>
                  <h1 className="text-4xl font-bold">{item.title}</h1>
                  <p className="text-xl">{item.discount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Button
        variant="ghost"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white"
        size="icon"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white"
        size="icon"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
