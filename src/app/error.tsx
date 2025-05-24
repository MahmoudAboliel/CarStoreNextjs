"use client";
import Link from "next/link";
import Image from "next/image";

interface Props {
    error:Error;
    reset: () => void;
}

const Error = ({error, reset}: Props) => {
  return (
    <div className="fixed top-0 left-0 z-1000 bg-white w-full h-full p-17">
         <div className="container mx-auto ">
          <div className="flex flex-col justify-center items-center">
            <Image 
              className="rounded-2xl mb-2 mx-auto w-50 md:w-100"
              src="/images/error.webp" priority width={400} height={400} alt="error image" 
            />
            <p className="text-lg font-semibold max-w-1/2 text-center text-gray-500">{error.message}</p>
            <button 
                onClick={() => reset()}
                className="text-lg font-semibold bg-red-500 hover:bg-red-700 text-white py-2 px-4 my-4 rounded-full">
                حاول مرة أخرى
            </button>
            <Link className="block text-lg font-semibold text-cc-red/90 hover:underline" href='/'>الصفحة الرئيسية</Link>
          </div>
         </div>
    </div>
    
  );
}

export default Error