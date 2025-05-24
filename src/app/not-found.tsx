import Image from "next/image"
import Link from "next/link"

const NotFoundPage = () => {
  return (
    <div className='fixed top-0 left-0 h-full w-full z-1000 bg-white flex flex-col justify-center items-center'>
      <Image 
        className="rounded-lg w-50 md:w-100"
        src="/images/not-found.jpg" 
        alt="not found" 
        priority
        width={400} 
        height={400} 
      />
      <Link className="block text-lg font-semibold text-cc-gray-900 hover:underline" href='/'>الصفحة الرئيسية</Link>
    </div>
  )
}

export default NotFoundPage
