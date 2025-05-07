"use client";

import { DOMAINImage } from "@/lib/constance";
import { CgProfile, RiAddCircleLine, RiDashboard3Line } from "@/lib/utils";
import { useUserStore } from "@/stores/useUserStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logout from "@/components/Logout";

interface ProfileSidebarProps {
    classes?: string;
}
const Sidebar = ({ classes }: ProfileSidebarProps) => {

  const profile = useUserStore(state => state.user)

    const profileLinks = [
        {
          id: 1,
          label: 'لوحة التحكم', 
          link: '/user/dashboard?pageNumber=1',
          icon: RiDashboard3Line,
        },
        {
          id: 2,
          label: 'المنتجات المباعة', 
          link: '/user/soldProducts?pageNumber=1',
          icon: RiDashboard3Line,
        },
        {
          id: 3,
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
      ];

    const pathName = usePathname();
    // console.log(pathName)
  
    return (
    <nav className={`${classes} bg-cc-white rounded-3xl p-5 md:p-7 shadow-type1 space-y-5`}>

        <div className="border-b border-gray-300 flex flex-col items-center justify-end pb-4 space-y-4">
            <Image 
                className="rounded-md w-40 h-40 "
                width={160}
                height={160}
                priority
                src={`${DOMAINImage}/${profile?.profileImage}`} 
                alt="profile Image" />
            <div className="text-right text-gray-800 text-lg space-y-1">
                <h3 className="">{profile?.fullName}</h3>
                <p className="">{profile?.email}</p>
                <p className="">{profile?.city}</p>
                <p className="">{profile?.phoneNumber}</p>
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