import { DOMAINImage } from "@/lib/constance"
import Link from "next/link"
import Image from "next/image"

interface Props {
      logo: string;
      siteName: string;
}
const Logo = ({ logo, siteName }: Props) => {
  return (
      <Link href="/"
            className="flex items-center gap-2">
            <Image 
            width={100}
            height={100}
            className="w-[55px!important] h-[40px] rounded-lg"
            src={`${DOMAINImage}/${logo}`} alt="logo" />
            <span className="text-large1 text-cc-red uppercase font-bold">{siteName}</span>
            
      </Link>
  )
}

export default Logo
