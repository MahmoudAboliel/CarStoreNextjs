import CarCard from "@/components/cards/CarCard";
import { transformData } from "@/lib/functions";
import { CarCardProps } from "@/lib/types";
import { fetchSearchProducts } from "@/lib/apiCalls/PublicAPIsCall"
import FilterForm from "@/components/froms/FilterForm"

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
    // throw new Error('تحقق من الصفحة')
  return (
    <section className=" w-full p-6">
        <div className="container mx-auto">
            <FilterForm 
                classes="relative"
            />
            {products.length === 0 
              ? <div className="w-full min-h-[50vh] flex items-center justify-center">
                    <h2 className="font-semibold text-2xl border border-gray-200 rounded-lg bg-gray-100 py-7 px-10">لا يوجد نتائج مطابقة</h2>
                </div>
              : <div className="my-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                </div>}
        </div>
    </section>
    
  );
}

export default SearchProductsPage;