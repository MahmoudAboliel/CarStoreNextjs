"use client";

import { useState, useEffect, useCallback } from "react";
import AdCard from "@/components/cards/AdCard";
import SectionHeader from "@/components/sections/SectionHeader";
// import CustomLink from "@/components/CustomLink";
import { IoArrowForward, IoArrowBack } from "@/lib/utils";
import { fetchAds } from "@/lib/apiCalls/PublicAPIsCall";
import { Ad } from "@/lib/Dto"; 

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
  const interval = 3000;

  // Moving slides
  const nextIndex = useCallback(() => {
      setCurrentIndex((prev) => (prev + 1) % ads.length);
  }, [ads.length]);

  const prevIndex = () => {
      setCurrentIndex((prev) => (prev - 1 + ads.length) % ads.length);
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
    <section className="relative py-5 bg-cc-bg-light shadow-type1 group">
      <div className="container mx-auto px-4">
        
        <SectionHeader 
            subtitle="أحدث الإعلانات"
            title="تصفح أحدث الإعلانات"
            span="في مختلف المجالات"
        />
        {ads === null 
          ? (<div className="flex justify-center items-center ">
              <p className="text-3xl font-bold text-gray-800">لا يوجد إعلانات</p>
            </div>
            ) 
          : (
            <>
              <div className="flex gap-2 mt-20 py-2 overflow-hidden">
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
              {/* <CustomLink 
                label="Show more"
                href="/ads"
                classes="w-fit mx-auto mt-8 rounded-[9999px!important]"
              /> */}
            </>
          )}
      </div>
    </section>
  );
};

export default AdsSection;