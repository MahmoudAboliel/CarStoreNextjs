import { IoArrowForward } from "@/lib/utils"
import Link from "next/link"

interface Props {
      link: string;
}
const AwesomeLink = ({ link }: Props) => {
  return (
      <div className="hover:scale-102 active:scale-98 transition-transform duration-300">
            <Link
            href={link}
            className="inline-flex items-center justify-center bg-cc-red shadow-md shadow-cc-red px-6 py-2 md:px-8 md:py-3 rounded-full font-bold text-white transition-all duration-300 group">
            <span className="inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
            عرض المزيد
            <IoArrowForward className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            </Link>
      </div>
  )
}

export default AwesomeLink
