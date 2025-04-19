"use client";

import { useState, useEffect, useCallback } from 'react';
import ReviewCard from '@/components/cards/ReviewCard';
import { reviews, IoArrowForward, IoArrowBack } from '@/lib/utils';
import SectionHeader from '@/components/sections/SectionHeader';

const ReviewsSection = () => {

    const interval = 3000;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextIndex = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reviews.length]);

    const prevIndex = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    const goToIndex = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        // if (isPaused) return;

        const timer = setInterval(nextIndex, interval);
        return () => clearInterval(timer);
    }, [currentIndex, interval, nextIndex]);

    return (
        <section className="py-16 w-full">
            <div className="container mx-auto px-4">
                <SectionHeader 
                    subtitle="Customer Reviews"
                    title="What Our Client"
                    span={"Say's"}
                />
            
                <div className="flex gap-2 mt-20 py-2 overflow-hidden">
                    {reviews.map((review) => (
                    <div
                        className="transition-transform duration-500 ease-in-out"
                        key={review.id}
                        style={{
                        transform: `translateX(calc(-${(currentIndex * 100)}% - ${currentIndex * 8}px))`
                        }}>
                        <ReviewCard {...review} />
                    </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button 
                    onClick={prevIndex}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white text-2xl p-4 rounded-full hover:bg-black/70 transition opacity-0 group-hover:opacity-100"
                    aria-label="Previous slide"
                >
                    <IoArrowBack />
                </button>
                <button 
                    onClick={nextIndex}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white text-2xl p-4 rounded-full hover:bg-black/70 transition opacity-0 group-hover:opacity-100"
                    aria-label="Next slide"
                >
                    <IoArrowForward />
                </button>
            </div>
            {/* Navigation Dots */}
            <div className="flex justify-center mt-8">
              {Array.from({ length: reviews.length }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-red-600' : 'bg-gray-300'}`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
        </section>
      );

    };

    export default ReviewsSection;