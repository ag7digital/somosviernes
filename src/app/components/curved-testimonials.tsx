"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

interface CurvedTestimonialsProps {
  testimonials: Testimonial[];
  autoRotate?: boolean;
  rotationInterval?: number;
}

export function CurvedTestimonials({
  testimonials,
  autoRotate = true,
  rotationInterval = 5000,
}: CurvedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, testimonials.length]);

  const prevTestimonial = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, testimonials.length]);

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate || isPaused) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, isPaused, nextTestimonial, rotationInterval]);

  return (
    <div className="relative">
      {/* Curved top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden h-16">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M0 0V80H1440V0C1440 0 1320 50 720 50C120 50 0 0 0 0Z"
            fill="white"
          />
        </svg>
      </div>

      <div
        className="bg-emerald-500 pt-16 pb-24 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="container mx-auto px-4">
          {/* Testimonial Cards */}
          <div className="max-w-4xl mx-auto overflow-hidden relative">
            <div
              className="transition-all duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 p-8 md:p-12 bg-white rounded-xl shadow-lg"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="flex-shrink-0">
                      <div className="relative w-24 h-24 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-emerald-100 shadow-md">
                        <Image
                          src={testimonial.avatar}
                          alt={`${testimonial.name}'s avatar`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="mb-4 text-emerald-500">
                        <Quote className="w-10 h-10 opacity-30" />
                      </div>
                      <p className="text-gray-700 text-lg mb-4 italic">
                        {testimonial.content}
                      </p>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between absolute top-1/2 left-0 right-0 -mt-6 px-2">
              <button
                onClick={prevTestimonial}
                disabled={isAnimating}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextTestimonial}
                disabled={isAnimating}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  activeIndex === index
                    ? "bg-white w-6"
                    : "bg-emerald-300 hover:bg-emerald-200",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Curved bottom */}
      <div className="relative h-16 overflow-hidden">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute top-0 w-full h-full"
        >
          <path
            d="M0 0V80H1440V0C1440 0 1320 50 720 50C120 50 0 0 0 0Z"
            fill="#10b981"
          />
        </svg>
      </div>
    </div>
  );
}
