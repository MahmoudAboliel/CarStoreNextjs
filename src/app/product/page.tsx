import CarCard from "@/components/cards/CarCard";
import Pagination from "@/components/Pagination";
import SectionHeader from "@/components/sections/SectionHeader";
import { transformData } from "@/lib/functions";
import { ARTICLE_PER_PAGE } from "@/lib/constance";
import { CarCardProps } from "@/lib/types";
import { fetchProducts, fetchProductsCount } from "@/lib/apiCalls/PublicAPIsCall"

interface Props {
    searchParams: Promise<{ pageNumber: string }>
}

const ProductsPage = async ({ searchParams }: Props) => {

    const { pageNumber } = await searchParams;

    
    const products = await fetchProducts(pageNumber)
    const count = await fetchProductsCount()
    const pages:number = Math.ceil(count / ARTICLE_PER_PAGE);
    console.log(products, count)
    const data: CarCardProps[] = products
        .map(product => {
            return transformData(product)
        });
    
  return (
    count === 0 
    ? (
        <div className="w-full h-full flex items-center justify-center">
            <h1 className="font-bold text-5xl">لا يوجد سيارات حالياً</h1>
        </div>
    ) 
    : (
        <section className=" w-full p-6">
            <div className="container mx-auto">
                <SectionHeader 
                    subtitle="New arrivals"
                    title="Let's check best"
                    span="cars"
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

                <Pagination 
                    pageNumber={parseInt(pageNumber)}
                    pages={pages}
                    route="/product"
                />
            </div>
        </section>
    )
  );
}

export default ProductsPage;