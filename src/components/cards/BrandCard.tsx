import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BrandCardProps {
    link: string;
    img: StaticImageData;
    name: string
}

const BrandCard = ({ img, link, name }:BrandCardProps) => {
  return (
    <Link 
        href={link}
        className="block size-[300px] p-4 bg-cc-bg-red rounded-3xl">
        <Image 
            className="rounded-3xl h-6/7"
            src={img} alt="brand's image" />
        <h2 className="text-center mt-2.5 text-medium2 font-semibold hover:text-cc-red transition-colors duration-150">{name}</h2>
    </Link>

  )
}

export default BrandCard