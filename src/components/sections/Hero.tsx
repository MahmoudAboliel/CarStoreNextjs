"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Button from '../Button';
import { IoArrowForward, IoArrowBack } from "@/lib/utils";

interface Slide {
  id: number;
  src: string;
  alt: string;
  subtitle: string;
  title: string;
  description: string;
}

interface HeroProps {
  slides: Slide[];
  interval?: number;
  aspectRatio?: string; // مثال: "16/9"
}

const Hero = ({ slides, interval = 3000, aspectRatio = "16/9" }:HeroProps) => {
  
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(nextSlide, interval);
        return () => clearInterval(timer);
    }, [currentSlide, isPaused, interval, nextSlide]);

    // حساب نسبة العرض إلى الارتفاع
    const [widthRatio, heightRatio] = aspectRatio.split('/').map(Number);

    return (
        <div 
        className="relative w-full h-[80vh] overflow-hidden group"
        style={{
            aspectRatio: `${widthRatio}/${heightRatio}`,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        >
        {/* Slides Container */}
        <div 
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
            {slides.map((slide) => (
            <div 
                key={slide.id} 
                className="w-full h-full shrink-0 relative"
            >
                <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={currentSlide === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-r from-black/80 to-transparent p-6 text-white">
                    <div className='md:w-1/2 h-full flex flex-col justify-center'>
                        <h4 className='text-[24px] md:text-[32px] font-semibold text-cc-red mb-4'>
                            welcome to Motox   
                        </h4>
                        <h2 className="text-[30px] md:text-[40px] sm:text-[40px] font-bold mb-2">
                            {slide.title}
                        </h2>
                        <p className="text-base text-gray-100">
                            {slide.description}
                        </p>
                        <div className='flex flex-wrap gap-3 mt-5'>
                            <Button 
                                text='About More' 
                                Icon={IoArrowForward}
                                reverse={true}
                            />
                            <Button 
                                text='Learn More' 
                                Icon={IoArrowForward}
                                color={true}
                                reverse={true}
                                classes=''
                            />
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>

        {/* Navigation Arrows */}
        <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white text-2xl p-4 rounded-full hover:bg-black/70 transition opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
        >
            <IoArrowBack />
        </button>
        <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white text-2xl p-4 rounded-full hover:bg-black/70 transition opacity-0 group-hover:opacity-100"
            aria-label="Next slide"
        >
            <IoArrowForward />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-[50px] left-[50px] -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
            <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
            />
            ))}
        </div>
        </div>
    );
};

export default Hero;