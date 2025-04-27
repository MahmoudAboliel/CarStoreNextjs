"use client";

import { CgProfile, MdLogout, RiAddCircleLine, RiDashboard3Line } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProfileSidebarProps {
    classes?: string;
    name: string;
    email: string;
    img: string;

}
const Sidebar = ({ classes, name, email, img }: ProfileSidebarProps) => {

    const profileLinks = [
        {
          id: 1,
          label: 'لوحة التحكم', 
          link: '/user/dashboard',
          icon: RiDashboard3Line,
        },
        {
          id: 2,
          label: 'الملف الشخصي', 
          link: '/user',
          icon: CgProfile
        },
        {
          id: 4,
          label: 'إضافة منتج', 
          link: '/user/addProduct',
          icon: RiAddCircleLine
        },
        {
          id: 6,
          label: 'تسجيل الخروج', 
          link: '/',
          icon: MdLogout
        },
      ];

    const pathName = usePathname();
  
    return (
    <nav className={`${classes} bg-cc-white rounded-3xl p-5 md:p-7 shadow-type1 space-y-5`}>

        <div className="border-b border-gray-300 flex flex-col items-center justify-center pb-4 space-y-4">
            <Image 
                className="rounded-full w-20 h-20 "
                width={100}
                height={120}
                priority
                src={img} 
                alt="profile Image" />
            <div>
                <h3 className="font-semibold text-base md:text-md">{name}</h3>
                <p className="text-sm md:base text-gray-600">{email}</p>
            </div>
        </div>
        <div>
            {profileLinks.map(link => (
            <Link 
                className={`flex items-center gap-3 text-base ${pathName === link.link && 'text-cc-white bg-cc-red rounded-md pl-5'} px-3 py-2 hover:pl-5 transition-all duration-150`}
                key={link.id} 
                href={link.link}>
                <link.icon className={`${pathName !== link.link && 'text-cc-red'} text-xl`}  />
                {link.label}
            </Link>
            ))}
        </div>
    </nav>
  );
}

export default Sidebar;