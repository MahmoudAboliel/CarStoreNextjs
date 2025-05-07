import Image from "next/image";
import { IoMdTime } from "@/lib/utils";
import SingleCarImages from "@/components/cards/SingleCarImages";
import CarAttributes from "@/components/cards/CarAttributes";
import ReviewCard2 from "@/components/cards/ReviewCard2";
import AddReviewSection from "@/components/sections/AddReviewSection";
import { fetchSingleProduct } from "@/lib/apiCalls/PublicAPIsCall"
import { DOMAINImage } from "@/lib/constance";

interface SingleProductPageProps {
  params: Promise<{ productID: string }>
}

const SingleProductPage = async ({ params }: SingleProductPageProps) => {

  const { productID } = await params;
  const data = await fetchSingleProduct(productID)

  const carImages = [
    { id: 0, src: `${DOMAINImage}/${data.car.img1}` },
    { id: 1, src: `${DOMAINImage}/${data.car.img2}` },
    { id: 2, src: `${DOMAINImage}/${data.car.img3}` },
  ];

  const carAttributes = {
    system: data.car.transmission,
    model: data.car.model,
    year: data.car.year,
    kilometers: data.car.kiloMetrage.toLocaleString(),
    fuel: data.car.fuel,
    engine: data.car.engine,
    color: data.car.color
  };

  return (
    <section className="p-5 md:p-7">
      <div className="container mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-5">
          {/* clumn one */}
          <div className="lg:col-span-4 space-y-5">  
            <div className="bg-cc-white rounded-3xl p-5 md:p-7 space-y-2 shadow-type2">
              <h2 className="font-semibold text-2xl md:text-3xl">{data.car.brand}</h2>
              <p className="flex items-center gap-2 text-base text-gray-700">
                <IoMdTime className="text-cc-red text-xl" />
                Listed On: <span className="text-gray-600">{new Date(data.car.createDate).toDateString()}</span>
              </p>
              <SingleCarImages 
                images={carImages}
              />
            </div>
            <div className="bg-cc-white rounded-3xl p-5 md:p-7 shadow-type2 text-right">
              <h2 className="font-semibold text-2xl md:text-3xl mb-4">المعلومات الرئيسية</h2>
              {/* Attributes Grid */}
              <CarAttributes 
                attributes={carAttributes}
              />
            </div>
            <div className="bg-cc-white rounded-3xl p-5 md:p-7 shadow-type2 text-right">
              <h2 className="font-semibold text-2xl md:text-3xl mb-4">الوصف</h2>
              <p className="text-base leading-6 text-gray-600">
                {data.car.description} 
              </p>
            </div>
            <div className="bg-cc-white rounded-3xl p-5 md:p-7 shadow-type2 text-right">
              <h2 className="font-semibold text-2xl md:text-3xl mb-4">التعليقات</h2>
              {data.reviews.length > 0 
              ? (
                  data.reviews.map(review =>
                  <ReviewCard2 
                    key={review.id}
                    name={review.name}
                    text={review.contentMsg}
                    stars={review.stars}
                  />
                )
              ) 
              : (
                  <p className="text-gray-600 text-xl ">لا يوجد تعليقات بعد، كن أول من يعلق</p>
              )}
            </div>

          </div>

          {/* clumn two */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-cc-white rounded-3xl p-5 md:p-7 shadow-type2 flex gap-4 items-center">
              <Image 
                className="rounded-full w-20 h-20"
                src={`${DOMAINImage}/${data.user.picture}`} 
                alt="owner image" 
                width={100} 
                height={100} />
              
              <div>
                <h3 className="font-bold text-xl  ">{data.user.name}</h3>
                <p className="text-base text-gray-600 ">{data.user.phone}</p>
                <p className="text-gray-800 text-lg">{data.user.city || 'غير محدد'}</p>
              </div>
            </div>
            <div className="bg-cc-white rounded-3xl p-5 md:p-7 shadow-type2">
              <AddReviewSection 
                carId={data.car.id}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SingleProductPage;