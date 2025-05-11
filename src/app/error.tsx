"use client";
import Link from "next/link";
import Image from "next/image";

interface Props {
    error:Error;
    reset: () => void;
}

const Error = ({error, reset}: Props) => {
  return (
    <div className="h-[calc(100vhd-546px)] flex flex-col p-17 justify-center items-center">
         <div className="container mx-auto ">
          <Image 
            className="rounded-2xl mb-3 mx-auto max-w-170 h-[150px]"
            src="/images/error.png" width={700} height={700} alt="logo image" />
          <p className="text-lg font-semibold max-w-1/2 text-gray-500">{error.message}</p>
          <button 
              onClick={() => reset()}
              className="text-lg font-semibold bg-red-500 hover:bg-red-700 text-white py-2 px-4 my-4 rounded-full">
              حاول مرة أخرى
          </button>
          <Link className="block text-lg font-semibold text-cc-red/90 underline" href='/'>الرئيسية</Link>
         </div>
    </div>
    
  );
}

export default Error