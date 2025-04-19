import Image from "next/image";
import Link from "next/link";
import { AiOutlineDollar, IoEye } from "@/lib/utils";
import CarAttributes from "@/components/cards/CarAttributes";
import { CarCardProps } from "@/lib/types";

const CarCard = ({
  brand,
  price,
  isNew = false,
  attributes,
  detailsLink,
  imageUrl
}: CarCardProps) => {

  return (
    <div className="flex flex-col p-4 gap-3 bg-white mx-auto rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 group w-full max-w-md md:max-w-2xl">
      {/* Image Container */}
      <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden relative rounded-xl">
        <Image
          className="rounded-xl object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          src={imageUrl}
          width={600}
          height={400}
          alt="car image"
          priority
        />
        <span className={`${isNew ? 'bg-green-500' : 'bg-red-500'} text-white py-1 px-3 absolute top-3 left-3 rounded-md font-semibold text-sm -translate-x-[100px] group-hover:translate-x-0 transition-all duration-300`}>
          {isNew ? 'New' : 'Used'}
        </span>  
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-gray-800">
          {brand}
        </h3>
        {/* Attributes Grid */}
        <CarAttributes
          attributes={attributes}
        />
        {/* Footer */}
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2">
            <AiOutlineDollar className="text-red-500 text-lg" />
            <span className="text-gray-700 font-medium">{price}</span>
          </p>
          <Link
            href={detailsLink}
            className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >
            <span className="text-sm md:text-base">Details</span>
            <IoEye className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;