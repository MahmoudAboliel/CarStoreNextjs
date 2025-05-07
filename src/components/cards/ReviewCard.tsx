
import { IoStarSharp, BiSolidQuoteSingleRight } from "@/lib/utils";

interface ReviewProps {
  name: string;
  text: string;
  stars: number;
}

const ReviewCard = ({ name, text, stars }: ReviewProps) => {
const clientStars = [...Array(5)]
  
  return (
    // 
    <div className="w-full  sm:min-w-[320px] min-w-[280px] bg-white p-6 rounded-3xl relative shadow-type2 mx-2 flex flex-col h-full">
      {/* Quotes decoration */}
      <div className="absolute flex items-center top-0 right-0 text-9xl text-gray-100 z-0">
        <BiSolidQuoteSingleRight className="" />
      </div>
      
      {/* Client image */}
      {/* <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-red-600 border-t-transparent border-r-transparent overflow-hidden">
        <Image
          width={96}
          height={96}
          className="w-full h-full object-cover rounded-full border-4 border-white"
          src={img} 
          alt={`${name}'s profile`}
        />
      </div> */}
      
      {/* Content */}
      <div className="text-center flex flex-col flex-grow z-1">
        <h2 className="text-xl font-bold text-gray-800 mb-1">
          {name}
        </h2>
        <h3 className="text-md text-red-600 font-semibold mb-4">
          Customer
        </h3>
        
        <p className="text-gray-600 mb-6 flex-grow">
          {text}
        </p>
        
        {/* Stars rating */}
        <div className="flex justify-center">
          {clientStars.map((_, index) => (
            <IoStarSharp 
              key={index}
              className={`text-2xl ${index < stars ? 'text-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;