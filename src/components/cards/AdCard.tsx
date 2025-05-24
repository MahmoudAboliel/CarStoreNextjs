import Image from "next/image";
import { Ad } from "@/lib/Dto";
import { DOMAINImage } from "@/lib/constance";
import { hitAd } from "@/lib/apiCalls/PublicAPIsCall";

interface Props {
  data: Ad;
  isLine?: boolean;
}

const AdCard = ({ data: {id , name, description, startDate, endDate, imgName, url}, isLine }: Props) => {

  const handleClicking = async (id: number) => {
    await hitAd(id)
  }
  return (
    <div className={`${isLine && 'w-full sm:min-w-[320px] min-w-[280px]'} relative bg-white rounded-xl shadow-type2 overflow-hidden transition-all duration-300 `}>
      {/* Badges */}
      {/* <div className="absolute top-3 left-3 z-10 flex gap-2">
        {isFeatured && (
          <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
            مميز
          </span>
        )}
        {isUrgent && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            عاجل
          </span>
        )}
      </div> */}

      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={`${DOMAINImage}/${imgName}`}
          alt={name}
          fill
          className="object-fill"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2 text-right">
          <p className="text-sm text-blue-600 font-medium">
            <span className="block">إلى</span>
            <span className="block">{new Date(endDate).toDateString()}</span>
          </p>
          <p className="text-sm text-blue-600 font-medium">
            <span className="block">من</span>
            <span className="block">{new Date(startDate).toDateString() || '22 - 2'}</span>
          </p>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1 text-right">
          {name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 text-right">
          {description}
        </p>

        <a
          href={url}
          onClick={() => {handleClicking(id)}}
          className="block w-full py-2 px-4 bg-cc-red hover:bg-cc-dark text-white text-center rounded-md transition-colors duration-200"
        >
          عرض التفاصيل
        </a>
      </div>
    </div>
  );
};

export default AdCard;