import CarCard from "@/components/cards/CarCard";
import Pagination from "@/components/Pagination";
import { transformData } from "@/lib/functions";
import { ARTICLE_PER_PAGE, DOMAINImage } from "@/lib/constance";
import { CarCardProps } from "@/lib/types";
import { fetchProductsByUser, fetchProductsCountByUser } from "@/lib/apiCalls/PublicAPIsCall"
import Image from "next/image";

interface Props {
      params: Promise<{ userId: string }>,
      searchParams: Promise<{ pageNumber: string }>
}

const ProductsPage = async ({ params, searchParams }: Props) => {

    const { userId } = await params
    const { pageNumber } = await searchParams

    const products = await fetchProductsByUser(pageNumber, userId)
    const count = await fetchProductsCountByUser(userId)
    const pages:number = Math.ceil(count / ARTICLE_PER_PAGE);
  
    const data: CarCardProps[] = products.cars
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
                <div className="bg-cc-white rounded-3xl p-5 md:p-7 shadow-type2 flex gap-4 items-center">
                    <Image 
                    className="rounded-lg w-20 h-20"
                    src={`${DOMAINImage}/${products.user.picture}`} 
                    alt="owner image" 
                    width={200} 
                    height={300} />
                    
                    <div>
                    <h2 className="font-bold text-xl">{products.user.name}</h2>
                    <p className="text-base text-gray-600 ">{products.user.phone}</p>
                    <p className="text-gray-800 text-lg">{products.user.city || 'سوريا'}</p>
                    </div>
                </div>
            
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
                    route={`/product/byUser/${userId}`}
                />
            </div>
        </section>
    )
  );
}

export default ProductsPage;