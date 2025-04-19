import SectionHeader from "@/components/sections/SectionHeader";
import FilterForm from "@/components/froms/FilterForm";
import { carsData } from "@/lib/utils";
import CarCard from "@/components/cards/CarCard";

const LatestCars = () => {

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
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {carsData.map((car) => (
                    <CarCard
                        id={parseInt(car.id)}
                        key={car.id}
                        imageUrl={car.imageUrl}
                        brand={car.brand}
                        price={car.price}
                        isNew={car.isNew}
                        attributes={car.attributes}
                        detailsLink={car.detailsLink}
                    />
                ))}
            </div>
        </div>
    </section>
  );
}

export default LatestCars;