import Image from "next/image";
import { reviews, IoMdTime } from "@/lib/utils";
import { getSingleProduct } from "@/lib/apiCalls/prductsApiCalls";
import { SingleProductApiResponse } from "@/lib/Dto";
import SingleCarImages from "@/components/cards/SingleCarImages";
import CarAttributes from "@/components/cards/CarAttributes";
import ReviewCard2 from "@/components/cards/ReviewCard2";
import AddReviewSection from "@/components/sections/AddReviewSection";

interface SingleProductPageProps {
  params: Promise<{ productId: string }>
}

const SingleProductPage = async ({ params }: SingleProductPageProps) => {

  const productId = parseInt((await params).productId);
  console.log(productId)
  const getProduct = await getSingleProduct(productId) as SingleProductApiResponse;
  const data = getProduct.data;
  console.log(data)

  // const carImages = [
  //   { id: 0, src: data.car.img1 },
  //   { id: 1, src: data.car.img2 },
  //   { id: 2, src: data.car.img3 },
  // ];
  const carImages = [
    { id: 0, src: '/images/slider-4.jpeg' },
    { id: 1, src: '/images/slider-2.jpeg' },
    { id: 2, src: '/images/slider-3.jpeg' },
  ];

  // const carAttributes = {
  //   system: data.car.transmission,
  //   model: data.car.model,
  //   year: data.car.year,
  //   kilometers: data.car.kiloMetrage.toLocaleString(),
  //   fuel: data.car.fuel,
  //   engine: data.car.engine,
  //   color: data.car.color
  // };
  const carAttributes = {
    system: 'Automatic',
    model: 'S3000',
    year: '2020',
    kilometers: '5000',
    fuel: 'Desal',
    engine: '4000',
    color: 'Red'
  };

  return (
    <section className="p-5 md:p-7 ">
      <div className="container mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
          {/* clumn one */}
          <div className="lg:col-span-4 space-y-5">  
            <div className="bg-cc-white rounded-3xl p-5 md:p-7 shadow-type2">
              {/* <h2 className="font-semibold text-2xl md:text-3xl">{data.car.brand}</h2> */}
              <h2 className="font-semibold text-2xl md:text-3xl">BMW</h2>
              <p className="flex items-center gap-2 text-base text-gray-700">
                <IoMdTime className="text-cc-red text-xl" />
                {/* Listed On: <span className="text-gray-600">{data.car.createDate}</span> */}
                Listed On: <span className="text-gray-600">jan 22, 2025</span>
              </p>
              <SingleCarImages 
                images={carImages}
              />
            </div>
            <div className="bg-cc-white rounded-3xl p-5 md:p-7 shadow-type2">
              <h2 className="font-semibold text-2xl md:text-3xl mb-4">Key Information</h2>
              {/* Attributes Grid */}
              <CarAttributes 
                attributes={carAttributes}
              />
            </div>
            <div className="bg-cc-white rounded-3xl p-5 md:p-7 shadow-type2">
              <h2 className="font-semibold text-2xl md:text-3xl mb-4">Description</h2>
              <p className="text-base leading-6 text-gray-600">
                {/* {data.car.description}  */}
                some details about this car some details about this car some details about this car some details about this car some details about this car  
              </p>
            </div>
            <div className="bg-cc-white rounded-3xl p-5 md:p-7 shadow-type2">
              <h2 className="font-semibold text-2xl md:text-3xl mb-4">Reviews</h2>
              {reviews.map(review =>
                <ReviewCard2 
                  key={review.id}
                  name={review.name}
                  text={review.text}
                  stars={review.stars}
                />
              )}
              
            </div>

          </div>

          {/* clumn two */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-cc-white rounded-3xl p-5 md:p-7 shadow-type2 flex gap-4 items-center">
              <Image 
                className="rounded-full w-20 h-20"
                src="/images/logo.png" 
                alt="owner image" 
                width={100} 
                height={100} />
              
              <div>
                {/* <h3 className="font-bold text-xl  ">{data.user.name}</h3> */}
                <h3 className="font-bold text-xl  ">Mahmoud Abu Lail</h3>
                <p className="text-base text-gray-600 border-b border-gray-500 pb-1 mb-1">mahmoud@gmail.com</p>
                {/* <p className="text-base text-gray-600 ">{data.user.phone} <span className="text-gray-800 text-lg">Damascus</span></p> */}
                <p className="text-base text-gray-600 ">0938293299 <span className="text-gray-800 text-lg">Damascus</span></p>
              </div>
            </div>
            <div className="bg-cc-white rounded-3xl p-5 md:p-7 shadow-type2">
              <AddReviewSection 
                // userId={data.user.id}
                userId=""
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SingleProductPage;