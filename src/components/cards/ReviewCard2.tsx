import { IoStarSharp } from "@/lib/utils";

interface ReviewCard2Props {
    name: string;
    text: string;
    stars: number;
}

const ReviewCard2 = ({ name, text, stars }: ReviewCard2Props) => {
    return (
        <div className="border-b border-gray-500 mb-3 p-4 space-y-3"> 
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-600 text-sm">{text}</p>
            {/* Stars rating */}
            <div className="flex justify-center">
            {[...Array(5)].map((_, index) => (
                <IoStarSharp 
                key={index}
                className={`text-2xl ${index < stars ? 'text-yellow-400' : 'text-gray-300'}`} 
                />
            ))}
            </div>
        </div>
    );
}

export default ReviewCard2;