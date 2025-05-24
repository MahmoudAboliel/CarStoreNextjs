"use client"

import { useState, useEffect, useCallback } from "react"
import AdCard from "@/components/cards/AdCard"
import SectionHeader from "@/components/sections/SectionHeader"
import { fetchAds } from "@/lib/apiCalls/PublicAPIsCall"
import { Ad } from "@/lib/Dto"
import { interval } from "@/lib/constance"
import ArrowButton from '@/components/ArrowButton'

const AdsSection = () => {

  const [ads, setAds] = useState<Ad[]>([])

  useEffect(() => {
    async function getAds() {
      const ads = await fetchAds()
      setAds(ads)
    }
    getAds()
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isPaused, setIsPaused] = useState(false);

  // Moving slides
  const nextIndex = useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
  }, [ads.length]);

  const prevIndex = () => {
      setCurrentIndex((prev) => (prev - 1 + ads.length) % ads.length);
  };

  const goToIndex = (index: number) => {
      setCurrentIndex(index);
  };

  useEffect(() => {
      // if (isPaused) return;

      const timer = setInterval(nextIndex, interval);
      return () => clearInterval(timer);
  }, [currentIndex, nextIndex]);

  return (
    ads.length !== 0 &&
    <section className="relative py-5 bg-cc-bg-light shadow-type1 group">
      <div className="container mx-auto p-4">
        
        <SectionHeader 
            subtitle="أحدث الإعلانات"
            title="تصفح أحدث الإعلانات"
            span="في مختلف المجالات"
        />
        
        <div className="flex gap-2 mt-20 p-2 overflow-x-auto"
          
        >
          {ads.map((ad) => (
            <div
              className="transition-transform duration-500 ease-in-out"
              key={ad.id}
              style={{
                transform: `translateX(calc(-${(currentIndex * 100)}% - ${currentIndex * 8}px))`
              }}>
              <AdCard 
                isLine  
                data={ad}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {
          ads.length > 1 &&
          <>
            <ArrowButton func={prevIndex} position="left" />
            <ArrowButton func={nextIndex} position="right" />
          </>
        }
        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: ads.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-red-600' : 'bg-gray-300'}`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
        {/* زر عرض المزيد */}
        {/* <CustomLink 
          label="Show more"
          href="/ads"
          classes="w-fit mx-auto mt-8 rounded-[9999px!important]"
        /> */}
            
      </div>
    </section>
  );
};

export default AdsSection;