"use client"

import SectionHeader from "@/components/sections/SectionHeader";
import FilterForm from "@/components/froms/FilterForm";
import CarCard from "@/components/cards/CarCard";
import { CarCardProps } from "@/lib/types";
import { transformData } from "@/lib/functions";
import { fetchLatestProducts } from "@/lib/apiCalls/PublicAPIsCall";
import { useEffect, useState } from "react";
import AwesomeLink from "@/components/AwesomeLink";

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

  return (
    <section className="bg-cc-white w-full p-6">
        <div className="container mx-auto text-center">
            <FilterForm 
                classes="relative -top-15"
            />
            <SectionHeader 
                subtitle="المنتجات"
                title="تحقق من أحدث"
                span="السيارات"
            />
            <div className="my-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {data.map((car) => (
                    <CarCard 
                        id={car.id}
                        key={car.id} 
                        brand={car.brand}
                        price={car.price}
                        isNew={car.isNew}
                        attributes={car.attributes}
                        detailsLink={car.detailsLink}
                        imageUrl={car.imageUrl}
                    />
                ))}
            </div>
            <AwesomeLink link="/product" />
        </div>
    </section>
  );
}

export default LatestCars;