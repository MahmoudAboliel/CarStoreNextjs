import CarCard from "@/components/cards/CarCard";
import SectionHeader from "@/components/sections/SectionHeader";
import { transformData } from "@/lib/functions";
import { CarCardProps } from "@/lib/types";
import { fetchSearchProducts } from "@/lib/apiCalls/PublicAPIsCall"
import FilterForm from "@/components/froms/FilterForm";

interface Props {
    searchParams: Promise<{ 
      Status?: string;
      Brand?: string;
      Model?: string;
      Kilometrage?: string;
      Transmission?: string;
      Fuel?: string;
      Color?: string;
      Year?: string;
      Price?: string;
    }>
}

const SearchProductsPage = async ({ searchParams }: Props) => {

    const { Status, Brand, Model, Kilometrage, Transmission, Fuel, Color, Year, Price } = await searchParams

    const products = await fetchSearchProducts({ Status, Brand, Model, Kilometrage, Transmission, Fuel, Color, Year, Price })
    // console.log(products)

    const data: CarCardProps[] = products
        .map(product => {
            return transformData(product)
        });
    
  return (
    products.length === 0 
    ? (
        <div className="w-full h-full flex items-center justify-center">
            <h1 className="font-bold text-5xl">لا يوجد سيارات مطابقة</h1>
        </div>
    ) 
    : (
        <section className=" w-full p-6">
            <div className="container mx-auto">
                <SectionHeader 
                    subtitle="البحث"
                    title="إبحث عن أفضل"
                    span="السيارات"
                />
                <FilterForm 
                  classes="relative"
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
            </div>
        </section>
    )
  );
}

export default SearchProductsPage;