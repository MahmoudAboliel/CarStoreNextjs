"use client";

import { DOMAINImage } from "@/lib/constance";
import { CgProfile, RiAddCircleLine, RiDashboard3Line, RiStackLine } from "@/lib/utils";
import { useUserStore } from "@/stores/useUserStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logout from "@/components/Logout";
import { GrSettingsOption } from "react-icons/gr";
import { MdOutlineRateReview } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";

interface ProfileSidebarProps {
    classes?: string;
    role: string;
}
const Sidebar = ({ classes, role }: ProfileSidebarProps) => {

  const profile = useUserStore(state => state.user)

    const userLinks = [
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

    const adminLinks = [
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
    // console.log(pathName)
  
    return (
    <nav className={`${classes} bg-cc-white rounded-3xl p-5 md:p-7 shadow-type1 space-y-5`}>
      <div dir="rtl" className="border-b border-gray-300 flex flex-col items-start justify-start pb-4 space-y-4">
          <Image 
              className="rounded-md w-40 h-40 "
              width={160}
              height={160}
              priority
              src={`${profile?.profileImage ? `${DOMAINImage}/${profile?.profileImage}` : '/images/logo.png'}`} 
              alt="profile Image" />
          <div dir="rtl" className="text-right text-gray-800 text-lg space-y-1">
              <p className="text-sm text-gray-400">الاسم</p>
              <h3 className="text-lg text-gray-900">{profile?.fullName}</h3>
              <p className="text-sm text-gray-400">الايميل</p>
              <h3 className="text-lg text-gray-900">{profile?.email}</h3>
              <p className="text-sm text-gray-400">المدينة</p>
              <h3 className="text-lg text-gray-900">{profile?.city}</h3>
              <p className="text-sm text-gray-400">رقم الهاتف</p>
              <h3 className="text-lg text-gray-900">{profile?.phoneNumber}</h3>
          </div>
      </div>
      <div dir="rtl" className="space-y-3">
        { role === 'user'
          ? userLinks.map(link => (
              <Link 
                  className={`flex items-center gap-3 text-base ${pathName === link.link.split('?')[0] && 'text-cc-white bg-cc-red rounded-md pl-5'} px-3 py-2 hover:pl-5 transition-all duration-150`}
                  key={link.id} 
                  href={link.link}>
                  <link.icon className={`${pathName !== link.link.split('?')[0] && 'text-cc-red'} text-xl`}  />
                  {link.label}
              </Link>))
          : adminLinks.map(link => (
            <Link 
                className={`flex items-center gap-3 text-base ${pathName === link.link.split('?')[0] && 'text-cc-white bg-cc-red rounded-md pl-5'} px-3 py-2 hover:pl-5 transition-all duration-150`}
                key={link.id} 
                href={link.link}>
                <link.icon className={`${pathName !== link.link.split('?')[0] && 'text-cc-red'} text-xl`}  />
                {link.label}
            </Link>))}
        <Logout /> 
      </div>
    </nav>
  );
}

export default Sidebar;