import { BsFuelPumpFill, FaCalendar, FaRoad, GiSteeringWheel, IoCarSport, IoColorPaletteSharp, PiEngineFill } from "@/lib/utils";
import { myConfig } from "../../next.config";


export const DOMAIN = `${myConfig.protocol}://${myConfig.hostname}:${myConfig.port}/api`
export const DOMAINImage = `${myConfig.protocol}://${myConfig.hostname}:${myConfig.port}/Upload`
// export const DOMAINImage = "http://rentacar.somee.com/Upload"
// export const DOMAIN = "http://rentacar.somee.com/api"

export const ARTICLE_PER_PAGE = 8;
export const interval = 3000;

export const mainLinks = [
      {
          label: 'الرئيسية',
          href: '/',
      },
      {
          label: 'المنتجات',
          href: '/product?pageNumber=1',
      },
      {
          label: 'البحث',
          href: '/product/search',
      },
      {
          label: 'الملف الشخصي',
          href: '/user',
      },
      {
          label: 'المسؤول',
          href: '/admin',
      },
      {
          label: 'تسجيل الدخول',
          href: '/login',
      },
      {
          label: 'إنشاء حساب',
          href: '/register',
      },
]

export const CAR_ATTRIBUTES = [
  {
    id: 'system',
    label: 'System',
    icon: GiSteeringWheel,
  },
  {
    id: 'model',
    label: 'Model',
    icon: IoCarSport,
  },
  {
    id: 'year',
    label: 'Year',
    icon: FaCalendar,
  },
  {
    id: 'kilometers',
    label: 'Kilometers',
    icon: FaRoad,
  },
  {
    id: 'fuel',
    label: 'Fuel',
    icon: BsFuelPumpFill,
  },
  {
    id: 'engine',
    label: 'Engine',
    icon: PiEngineFill,
  },
  {
    id: 'color',
    label: 'Color',
    icon: IoColorPaletteSharp,
  }
] as const;

export const categories = [
    { id: "all", name: "الكل" },
    { id: "سيارات", name: "سيارات" },
    { id: "عقارات", name: "عقارات" },
    { id: "إلكترونيات", name: "إلكترونيات" },
    { id: "أثاث", name: "أثاث" },
    { id: "وظائف", name: "وظائف" },
    { id: "خدمات", name: "خدمات" },
];