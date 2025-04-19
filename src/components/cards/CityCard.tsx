import Image, { StaticImageData} from "next/image";
import { IoLocation } from "@/lib/utils";

interface CityCardProps {
    img: StaticImageData;
    name: string;
    count: number;
}
const CityCard = ({ img, name, count }:CityCardProps) => {
  return (
    <div className="size-[400px] relative rounded-3xl overflow-hidden">
        {/* <span className="absolute top-0 left-0 size-full bg-cc-dark/20" /> */}
        <Image 
            className="h-full object-fill transition-transform duration-150 hover:scale-110" 
            src={img} alt="city's image" />
        <div className="absolute bottom-2.5 left-2.5 text-cc-white">
            <h2 className="mb-1.5 font-bold text-large2">{name}</h2>
            <p className="flex items-center justify-center gap-1.5 bg-cc-red py-1.5 px-4 rounded-full text-small">
                <IoLocation />
                <span>{count} Cars</span>
            </p>
        </div>
    </div>

  );
}

export default CityCard;