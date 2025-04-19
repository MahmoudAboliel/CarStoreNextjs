"use client";

import { useState, useEffect, useCallback } from "react";
import AdCard from "@/components/cards/AdCard";
import SectionHeader from "@/components/sections/SectionHeader";
import CustomLink from "@/components/CustomLink";
import { adsData, IoArrowForward, IoArrowBack } from "@/lib/utils";

const AdsSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 3000;

  // Moving slides
  const nextIndex = useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % adsData.length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adsData.length]);

  const prevIndex = () => {
      setCurrentIndex((prev) => (prev - 1 + adsData.length) % adsData.length);
  };

  // const goToIndex = (index: number) => {
  //     setCurrentIndex(index);
  // };

  useEffect(() => {
      // if (isPaused) return;

      const timer = setInterval(nextIndex, interval);
      return () => clearInterval(timer);
  }, [currentIndex, interval, nextIndex]);

  return (
    <section className="relative py-5 bg-gray-50 group">
      <div className="container mx-auto px-4">
        
        <SectionHeader 
            subtitle="latest ads"
            title="Browse the latest ads"
            span="In various fields"
        />

        {/* قائمة الإعلانات */}
        <div className="flex gap-2 mt-20 py-2 overflow-hidden">
          {adsData.map((ad) => (
            <div
              className="transition-transform duration-500 ease-in-out"
              key={ad.id}
              style={{
                transform: `translateX(calc(-${(currentIndex * 100)}% - ${currentIndex * 8}px))`
              }}>
              <AdCard isLine {...ad} />
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

        {/* زر عرض المزيد */}
        <CustomLink 
          label="Show more"
          href="/ads"
          classes="w-fit mx-auto mt-8 rounded-[9999px!important]"
        />
      </div>
    </section>
  );
};

export default AdsSection;