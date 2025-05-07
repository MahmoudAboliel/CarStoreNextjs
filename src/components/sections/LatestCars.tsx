"use client"

import SectionHeader from "@/components/sections/SectionHeader";
import FilterForm from "@/components/froms/FilterForm";
import CarCard from "@/components/cards/CarCard";
import { CarCardProps } from "@/lib/types";
import { transformData } from "@/lib/functions";
import { fetchLatestProducts } from "@/lib/apiCalls/PublicAPIsCall";
import { useCallback, useEffect, useState } from "react";

const LatestCars = () => {

    const [data, setData] = useState<CarCardProps[]>([])

    useEffect(() => {
        async function getData() {
            const products = await fetchLatestProducts()
            const transform: CarCardProps[] = products
                .map(product => {
                    return transformData(product)
                });
            setData(transform)
        }
        getData()
    }, [])

    const [currentIndex, setCurrentIndex] = useState(0);
    const interval = 3000;

    // Moving slides
    const nextIndex = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % data.length)
    }, [data.length]);

    // const prevIndex = () => {
    //     setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    // };

    // const goToIndex = (index: number) => {
    //     setCurrentIndex(index);
    // };

    useEffect(() => {
        // if (isPaused) return;

        const timer = setInterval(nextIndex, interval);
        return () => clearInterval(timer);
    }, [currentIndex, interval, nextIndex]);
    

  return (
    <section className="bg-cc-white w-full p-6">
        <div className="container mx-auto">
            <FilterForm 
                classes="relative -top-15"
            />
            <SectionHeader 
                subtitle="New arrivals"
                title="Let's check latest"
                span="cars"
            />
            <div className="flex gap-2 mt-20 py-2 overflow-hidden">
                {data.map((car) => (
                    <div 
                        className="transition-transform duration-500 ease-in-out"
                        key={car.id}
                        style={{
                        transform: `translateX(calc(-${(currentIndex * 100)}% - ${currentIndex * 8}px))`
                        }}>
                        <CarCard 
                            isLine
                            id={car.id}
                            imageUrl={car.imageUrl}
                            brand={car.brand}
                            price={car.price}
                            isNew={car.isNew}
                            attributes={car.attributes}
                            detailsLink={car.detailsLink}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default LatestCars;