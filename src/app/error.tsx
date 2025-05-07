"use client";
import Link from "next/link";

interface Props {
    error:Error;
    reset: () => void;
}

const Error = ({error, reset}: Props) => {
  return (
    <div className="container mx-auto ">
        <div className="h-[calc(100vh-150px)] flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-cc-red">عذراً حدث خطأ</h1>
            <p className="text-lg font-semibold text-gray-500">رسالة الخطأ: {error.message}</p>
            <button 
                onClick={() => reset()}
                className="text-lg font-semibold bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 my-4 rounded-full">
                حاول مرة أخرى
            </button>
            <Link className="block text-lg font-semibold text-blue-500 underline" href='/'>إذهب إلى الصفحة الرئيسية</Link>
        </div>
    </div>
  );
}

export default Error