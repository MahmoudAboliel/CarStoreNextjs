"use client"

import { useState, useEffect, useCallback } from 'react'
import ReviewCard from '@/components/cards/ReviewCard'
import SectionHeader from '@/components/sections/SectionHeader'
import { Reviews } from '@/lib/Dto'
import { fetchReviews } from '@/lib/apiCalls/PublicAPIsCall'
import { interval } from '@/lib/constance'
import ArrowButton from '@/components/ArrowButton'

const ReviewsSection = () => {

    const [reviews, setReviews] = useState<Reviews[]>([])
    
      useEffect(() => {
        async function getReviews() {
          const response = await fetchReviews()
          setReviews(response)
          console.log(response, response.length)
        }
        getReviews()
      }, [])

    const [currentIndex, setCurrentIndex] = useState(0);
    // const [isPaused, setIsPaused] = useState(false);

    const nextIndex = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length)
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
    }, [currentIndex, nextIndex]);

    return (
        reviews.length !== 0 &&
        <section className="py-16 w-full bg-white relative group">
            <div className="container mx-auto px-4">
                <SectionHeader 
                    subtitle="تعليقات المستخدمين"
                    title="عملائنا ماذا"
                    span={"يقولون"}
                />
            
                <div className="flex gap-2 py-2 overflow-x-auto"
                    // onMouseEnter={() => setIsPaused(true)}
                    // onMouseLeave={() => setIsPaused(false)}
                >
                    {reviews.map((review) => (
                    <div
                        className="transition-transform duration-500 ease-in-out"
                        key={review.id}
                        style={{
                        transform: `translateX(calc(-${(currentIndex * 100)}% - ${currentIndex * 8}px))`
                        }}>
                        <ReviewCard  
                            name={review.name}
                            text={review.contentMsg}
                            stars={review.stars}
                        />
                    </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                {reviews.length > 1 && 
                 <>
                    <ArrowButton func={prevIndex} position='left' />
                    <ArrowButton func={nextIndex} position='right' />
                 </>}
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