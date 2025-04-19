

import { GiSteeringWheel } from "react-icons/gi";
import { BsFuelPumpFill } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { PiEngineFill } from "react-icons/pi";
import { FaRoad } from "react-icons/fa";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { MdArrowRight, MdLogout, MdEdit } from "react-icons/md";
import { RiDashboard3Line, RiStackLine, RiAddCircleLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { FaEye, FaEyeSlash, FaTrashAlt, FaCalendar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { 
    IoStarSharp, 
    IoLocation, 
    IoSearch, 
    IoCarSport, 
    IoSend,
    IoMenu,
    IoClose,
    IoArrowForward,
    IoArrowBack,
    IoHeartCircleOutline,
    IoColorPaletteSharp,
    IoEye,
    IoLogoFacebook,
    IoLogoWhatsapp,
    IoLogoInstagram,
    IoAdd,
    IoAddCircle,
    
} from "react-icons/io5";

export { 
    IoStarSharp, 
    IoLocation,
    IoSearch,
    IoCarSport,
    IoSend,
    IoMenu,
    IoClose,
    IoArrowForward,
    IoArrowBack,
    IoHeartCircleOutline,
    IoColorPaletteSharp,
    IoEye,
    GiSteeringWheel,
    BsFuelPumpFill,
    PiEngineFill,
    AiOutlineDollar,
    FaRoad,
    BiSolidQuoteSingleRight,
    IoLogoFacebook,
    IoLogoWhatsapp,
    IoLogoInstagram,
    MdArrowRight,
    IoAdd,
    IoAddCircle,
    FaEye,
    FaEyeSlash,
    MdEdit,
    FaTrashAlt,
    IoTimeOutline,
    IoMdTime,
    FaCalendar,
    RiDashboard3Line,
    CgProfile,
    RiStackLine,
    RiAddCircleLine,
    MdLogout,
 };

export const slides = [
    {
      id: 1,
      src: '/images/slider-1.png',
      alt: 'Description for slide 1',
      subtitle: 'welcome to Motox',
      title: 'We offer best way to find dream car',
      description: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form the great explorer of the truth by injected humour.'
    },
    {
      id: 2,
      src: '/images/slider-9.jpeg',
      alt: 'Description for slide 2',
      subtitle: 'welcome to Motox',
      title: 'We offer best way to find dream car',
      description: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form the great explorer of the truth by injected humour.'
    },
    {
      id: 3,
      src: '/images/slider-7.jpeg',
      alt: 'Description for slide 3',
      subtitle: 'welcome to Motox',
      title: 'We offer best way to find dream car',
      description: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form the great explorer of the truth by injected humour.'
    }
];

export const headerData = {
    logo: '/images/logo.png',
    name: 'Motox',
    description: 'We are many variations of passages available but the majority have suffered alteration in some form by injected humour words believable.',
    links: [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Products',
            href: '/product?pageNumber=1',
        },
        {
            label: 'Profile',
            href: '/user',
        },
        {
            label: 'Admin',
            href: '/admin',
        },
        {
            label: 'Login',
            href: '/login',
        },
        {
            label: 'Register',
            href: '/register',
        },
    ]
};

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

export const carsData = [
    {
      id: "1",
      imageUrl: "/images/car-1.jpg",
      brand: "Mercedes-Benz S-Class 2023",
      price: "120,000",
      isNew: true,
      attributes: {
        system: "Automatic",
        model: "S500",
        kilometers: "500",
        fuel: "Petrol",
        engine: "3000",
        color: "Black"
      },
      detailsLink: "/product/1"
    },
    {
      id: "2",
      imageUrl: "/images/car-1.jpg",
      brand: "Toyota Camry 2022",
      price: "35,000",
      isNew: true,
      attributes: {
        system: "Automatic",
        model: "LE",
        kilometers: "15,000",
        fuel: "Hybrid",
        engine: "2500",
        color: "Silver"
      },
      detailsLink: "/product/2"
    },
    {
      id: "3",
      imageUrl: "/images/car-1.jpg",
      brand: "BMW X5 2021",
      price: "65,000",
      isNew: false,
      attributes: {
        system: "Automatic",
        model: "xDrive40i",
        kilometers: "25,000",
        fuel: "Petrol",
        engine: "3000",
        color: "Blue"
      },
      detailsLink: "/product/3"
    },
    {
      id: "4",
      imageUrl: "/images/car-1.jpg",
      brand: "Audi A4 2020",
      price: "42,000",
      isNew: true,
      attributes: {
        system: "Automatic",
        model: "Premium",
        kilometers: "30,000",
        fuel: "Petrol",
        engine: "2000",
        color: "White"
      },
      detailsLink: "/product/4"
    },
    {
      id: "5",
      imageUrl: "/images/car-1.jpg",
      brand: "Honda Civic 2023",
      price: "28,500",
      isNew: false,
      attributes: {
        system: "CVT",
        model: "Touring",
        kilometers: "1,200",
        fuel: "Petrol",
        engine: "1800",
        color: "Red"
      },
      detailsLink: "/product/5"
    },
    {
      id: "6",
      imageUrl: "/images/car-1.jpg",
      brand: "Ford Mustang 2022",
      price: "55,000",
      isNew: true,
      attributes: {
        system: "Manual",
        model: "GT",
        kilometers: "8,000",
        fuel: "Petrol",
        engine: "5000",
        color: "Yellow"
      },
      detailsLink: "/product/6"
    }
];


export const reviews = [
  {
    id: 1,
    img: '/images/client.jpg',
    name: 'Ahmed Mohamed',
    phone: '0938293299',
    text: 'Excellent service! The car was in perfect condition and the process was very smooth. Highly recommended!',
    stars: 5
  },
  {
    id: 2,
    img: '/images/client-2.jpg',
    name: 'Sarah Johnson',
    phone: '0938293299',
    text: 'Very professional team. They helped me find exactly what I was looking for at a great price.',
    stars: 4
  },
  {
    id: 3,
    img: '/images/client-3.jpg',
    name: 'Michael Brown',
    phone: '0938293299',
    text: 'Best car rental experience I\'ve had. Will definitely use their service again in the future.',
    stars: 5
  },
  {
    id: 4,
    img: '/images/client.jpg',
    name: 'Emily Wilson',
    phone: '0938293299',
    text: 'The vehicle was clean and well-maintained. Customer service was outstanding!',
    stars: 5
  },
  {
    id: 5,
    img: '/images/client-2.jpg',
    name: 'David Lee',
    phone: '0938293299',
    text: 'Smooth transaction and great communication throughout the whole process.',
    stars: 4
  },
];

export const categories = [
    { id: "all", name: "الكل" },
    { id: "سيارات", name: "سيارات" },
    { id: "عقارات", name: "عقارات" },
    { id: "إلكترونيات", name: "إلكترونيات" },
    { id: "أثاث", name: "أثاث" },
    { id: "وظائف", name: "وظائف" },
    { id: "خدمات", name: "خدمات" },
];

export const adsData = [
    {
      id: "1",
      title: "سيارة تويوتا كامري 2022 للبيع",
      description: "سيارة بحالة ممتازة، موديل 2022، فل كامل، كمبيوتر، ضمان الوكالة باقي سنتين",
      imageUrl: "/images/slider-2.jpeg",
      category: "سيارات",
      date: "منذ يومين",
      isFeatured: true,
    },
    {
      id: "2",
      title: "شقة للايجار في حي الربيع",
      description: "شقة 3 غرف، صالة، مطبخ، 2 حمام، مساحة 150م، تشطيب سوبر لوكس",
      imageUrl: "/images/slider-3.jpeg",
      category: "عقارات",
      date: "منذ 5 أيام",
      isUrgent: true,
    },
    {
      id: "3",
      title: "لابتوب ديل جديد",
      description: "مواصفات عالية، Core i7، 16GB RAM، 512 SSD، شاشة 15 بوصة",
      imageUrl: "/images/slider-4.jpeg",
      category: "إلكترونيات",
      date: "منذ أسبوع",
    },
    {
      id: "4",
      title: "أثاث منزلي كامل للبيع",
      description: "أثاث بحالة جيدة جداً يتكون من صالون، غرف نوم، طاولة طعام",
      imageUrl: "/images/slider-5.jpeg",
      category: "أثاث",
      date: "منذ 3 أيام",
    },
    {
      id: "5",
      title: "وظيفة محاسب",
      description: "مطلوب محاسب خبرة لا تقل عن 3 سنوات، راتب مجزي + تأمينات",
      imageUrl: "/images/slider-6.jpeg",
      category: "وظائف",
      date: "منذ يوم",
      isFeatured: true,
      isUrgent: true,
    },
    {
      id: "6",
      title: "خدمة نقل عفش",
      description: "نقدم خدمات نقل العفش بأسعار تنافسية، عمالة مدربة، سيارات مجهزة",
      imageUrl: "/images/slider-7.jpeg",
      category: "خدمات",
      date: "منذ أسبوع",
    },
];

export const usersData = [
  {
    id: 1,
    name: "Ahmad ali",
    email: "ahmad@gmail.com",
    city: "Damascus",
    img: '/images/logo-1.jpg',
    phone: '0938293299'
  },
  {
    id: 2,
    name: "Kreem omar",
    email: "kreem@gmail.com",
    city: "Damascus",
    img: '/images/services.jpg',
    phone: '0938293299'
  },
  { id: 3,
    name: "Malik khalil",
    email: "malik@gmail.com",
    city: "Damascus",
    img: '/images/logo.png',
    phone: '0938293299'
  },
];