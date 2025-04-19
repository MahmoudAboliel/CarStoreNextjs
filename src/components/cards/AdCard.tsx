import Image from "next/image";
import { toast } from "react-toastify";

interface AdCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
  isFeatured?: boolean;
  isUrgent?: boolean;
  isLine?: boolean;
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
  isLine,
}: AdCardProps) => {

    const incrementHits = async () => {
        try {
            await fetch(`/api/ad/${id}/Hit`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
            });
            toast.success('increment successfully');
            console.log('increment successfully')
          
        } catch (error) {
          console.error('Failed to increment hits:', error);
        }
      };

  return (
    <div className={`${isLine && 'w-full sm:min-w-[320px] min-w-[280px]'} relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg`}>
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

        <a
          href=''
          onClick={incrementHits}
          className="block w-full py-2 px-4 bg-cc-red hover:bg-cc-dark text-white text-center rounded-md transition-colors duration-200"
        >
          عرض التفاصيل
        </a>
      </div>
    </div>
  );
};

export default AdCard;