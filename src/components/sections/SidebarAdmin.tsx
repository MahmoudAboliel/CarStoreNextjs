"use client";

import { CgProfile, RiAddCircleLine, RiDashboard3Line, RiStackLine } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GrSettingsOption } from "react-icons/gr";
import { MdOutlineRateReview } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import Logout from "@/components/Logout";

interface ProfileSidebarProps {
    classes?: string;
}
const Sidebar = ({ classes }: ProfileSidebarProps) => {

    const profileLinks = [
        {
          id: 1,
          label: 'لوحة التحكم', 
          link: '/admin',
          icon: RiDashboard3Line,
        },
        {
          id: 2,
          label: 'المستخدمين', 
          link: '/admin/users?pageNumber=1',
          icon: CgProfile
        },
        {
          id: 3,
          label: 'المنتجات', 
          link: '/admin/products?pageNumber=1',
          icon: RiStackLine
        },
        {
          id: 4,
          label: 'الإعلانات', 
          link: '/admin/ads?pageNumber=1',
          icon: TbSpeakerphone
        },
        {
          id: 5,
          label: 'التعليقات', 
          link: '/admin/reviews?pageNumber=1',
          icon: MdOutlineRateReview
        },
        {
          id: 6,
          label: 'إضافة إعلان', 
          link: '/admin/addAd',
          icon: RiAddCircleLine
        },
        {
          id: 7,
          label: 'الإعدادات', 
          link: '/admin/settings',
          icon: GrSettingsOption
        },
      ];

    const pathName = usePathname();
  
    return (
    <nav className={`${classes} bg-cc-white rounded-3xl p-5 md:p-7 shadow-type1 space-y-5`}>

        <div className="border-b border-gray-300 flex flex-col items-center justify-center pb-4 space-y-4">
            <Image 
                className="rounded-full w-20 h-20 "
                width={120}
                height={120}
                priority
                src={'/images/logo.png'} 
                alt="profile Image" />
            <div>
                <h3 className="font-semibold text-base md:text-md">{}</h3>
                <p className="text-sm md:base text-gray-600"></p>
            </div>
        </div>
        <div className="space-y-3">
            {profileLinks.map(link => (
            <Link 
                className={`flex items-center gap-3 text-base ${pathName === link.link.split('?')[0] && 'text-cc-white bg-cc-red rounded-md pl-5'} px-3 py-2 hover:pl-5 transition-all duration-150`}
                key={link.id} 
                href={link.link}>
                <link.icon className={`${pathName !== link.link.split('?')[0] && 'text-cc-red'} text-xl`}  />
                {link.label}
            </Link>
            ))}
            <Logout /> 
        </div>
    </nav>
  );
}

export default Sidebar;