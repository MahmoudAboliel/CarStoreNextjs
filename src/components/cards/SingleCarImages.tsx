"use client";

import { useState } from "react";
import Image from "next/image";

type Images = {
    id: number;
    src: string;
}
interface SingleCarImagesProps {
    images: Images[];
}

const SingleCarImages = ({ images }: SingleCarImagesProps) => {

    const [currentIndex, setCurrentIndex] = useState(0);


    return (
        <div className="space-y-4">
            <div className="flex rounded-2xl overflow-hidden">
                {images.map(img => (
                <div
                    key={img.id}
                    className="w-full h-80 flex-shrink-0 md:h-100 transition-transform duration-300"
                    style={{
                    transform: `translateX(${currentIndex * -100}%)`
                    }}
                    >
                    <Image
                    className="w-full h-full  object-cover"
                    src={img.src}
                    alt=""
                    width={450}
                    height={350}
                    priority
                    />
                </div>
                ))}
            </div>
            
            <div className="flex items-center gap-3 overflow-x-auto py-2 px-1">
                {images.map(img => (
                <button
                    className="ursor-pointer min-w-[80px] h-20 flex-shrink-0 transition-transform hover:scale-105 focus:outline-none " 
                    key={img.id}
                    onClick={() => setCurrentIndex(img.id)}
                    aria-label={`View ${img.src.split('/').pop()} as preview`}
                >
                    <Image 
                    className="w-full h-full object-cover rounded-xl"
                    src={img.src}
                    alt="Product thumbnail"
                    width={120}
                    height={100}
                    priority
                    loading="eager"
                    />
                </button>
                ))}
            </div>
        </div>
    );
}

export default SingleCarImages;