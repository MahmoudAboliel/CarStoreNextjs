import Image from "next/image";
import Link from "next/link";

interface AdCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
  isFeatured?: boolean;
  isUrgent?: boolean;
}

const AdCard = ({
  id,
  title,
  description,
  imageUrl,
  category,
  date,
  isFeatured = false,
  isUrgent = false,
}: AdCardProps) => {
  return (
    <div className={`relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${isFeatured ? 'border-2 border-yellow-400' : ''}`}>
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex gap-2">
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
      </div>

      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm text-blue-600 font-medium">{category}</span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <Link
          href={`/ads/${id}`}
          className="block w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-md transition-colors duration-200"
        >
          عرض التفاصيل
        </Link>
      </div>
    </div>
  );
};

export default AdCard;