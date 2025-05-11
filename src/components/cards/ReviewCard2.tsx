import { IoStarSharp } from "@/lib/utils";

interface ReviewCard2Props {
    name: string;
    text: string;
    stars: number;
    date: string;
}

const ReviewCard2 = ({ name, text, stars, date }: ReviewCard2Props) => {
    return (
        <div className="border border-gray-300 rounded-lg bg-gray-200 mb-3 p-4 space-y-2"> 
            <h3 className="text-xl flex justify-between items-center">
                <span className="font-semibold">{name}</span>
                <span className=" py-1 px-2 rounded-md">{new Date(date).toDateString()}</span>
                
            </h3>
            <p className="text-gray-800 text-xl">{text}</p>
            {/* Stars rating */}
            <div className="flex justify-end">
            {[...Array(5)].map((_, index) => (
                <IoStarSharp 
                key={index}
                className={`text-2xl ${index < stars ? 'text-yellow-400' : 'text-gray-600'}`} 
                />
            ))}
            </div>
        </div>
    );
}

export default ReviewCard2;