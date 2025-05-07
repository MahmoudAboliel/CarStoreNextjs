"use client";

import Link from "next/link";
import Image from "next/image";
import { IoLogoFacebook, IoLogoWhatsapp, IoLogoInstagram, MdArrowRight, IoSend } from "@/lib/utils";
import { DOMAINImage, mainLinks } from "@/lib/constance";
import Button from "../Button";
import { usePathname } from "next/navigation";
import { useSettingsStore } from "@/stores/useSettingStore";


const Footer = () => {
  const { settings, loading } = useSettingsStore()

  const pathName = usePathname();

  const communications = [
    {
      label: 'Facebook',
      Icon: IoLogoFacebook,
      href: settings?.facebook
    },
    {
      label: 'Whatsapp',
      Icon: IoLogoWhatsapp,
      href: settings?.whatsapp
    },
    {
      label: 'Instagram',
      Icon: IoLogoInstagram,
      href: settings?.instagram
    }
  ];

  return (
    (pathName !== '/login' && pathName !== '/register') 
    ? (
      loading ||
      <footer className="bg-cc-dark text-cc-bg-light overflow-hidden relative">
      <Background />
      <div className="container mx-auto relative z-10">
        <div className="p-5 md:p-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> 
          {/* first column */}
          <div className="space-y-3">
            {/* logo */}
            <Link href="/"
              className="flex items-center gap-2">
              <Image 
                width={100}
                height={100}
                className="w-[100px!important] h-[50px] rounded-lg"
                src={`${DOMAINImage}/${settings?.logo}`} alt="logo" />
              <span className="text-large1 text-cc-red uppercase font-bold">{settings?.siteName}</span>
            </Link>

            <p className="text-right">{settings?.description}</p>

            <div className="text-medium1 flex flex-col gap-3 my-4">
              {communications.map(link => (
                <a 
                  href={link.href}  
                  key={link.label}
                  className="flex gap-2 items-center text-small hover:text-cc-red transition-colors duration-150 group">
                    <link.Icon className="text-large2 bg-cc-red p-1 rounded-md text-cc-white "/>
                    {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* second column */}
          <div>
            <Subtitle title="روابط سريعة" />
            {mainLinks.map(link => (
              <Link 
                className="flex items-center text-small gap-2 hover:pl-2 hover:text-cc-red transition-all duration-150"
                href={link.href}
                key={link.href}>
                  <MdArrowRight 
                    className="text-cc-red text-medium2"
                  />
                  {link.label}
              </Link>))}
          </div>
          {/* third column */}
          <div>
            <Subtitle title="أحدث الأخبار" />
            <p>اشترك في النشرة الإخبارية لدينا للحصول على آخر التحديثات والأخبار</p>
            <form className="mt-4 space-y-4" action="">
              <input 
                className="outline-none bg-cc-white p-3 text-gray-900 text-medium1 rounded-2xl md:w-full"
                type="email" 
                placeholder="الإيميل"
                // value={''}
              />
              <Button text="اشترك الآن" Icon={IoSend} reverse classes="hover:bg-cc-white hover:text-cc-red rounded-full" />
            </form>
          </div>

        </div>
      </div>
      <div className="p-5 md:p-7 bg-[#181818] cli relative">
          <p className="text-small md:text-medium1 z-1 relative">{'© Copyright 2025 MOTOX All Rights Reserved.'}</p>
          <span className="absolute block z-0 w-full h-full top-0 bg-cc-red/75" 
            style={{ clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 45% 100%)'}}
          />
      </div>
    </footer>
    )
    : (
      <div className="p-5 md:p-7 text-cc-bg-light bg-[#181818] cli relative">
          <p className="text-small md:text-medium1 z-1 relative">{'© Copyright 2025 MOTOX All Rights Reserved.'}</p>
          <span className="absolute block z-0 w-full h-full top-0 bg-cc-red/75" 
            style={{ clipPath: 'polygon(65% 0, 100% 0, 100% 100%, 45% 100%)'}}
          />
      </div>
    )
    
  );
}

export default Footer;

const Subtitle = ({ title }: { title: string }) => {
  return (
    <h2 className="text-large1 font-semibold relative w-fit mb-5">
      {title}
      <span className="absolute h-[2.7px] w-7/10 bg-gray-700 left-1/2 -translate-x-1/2 -bottom-2">
        <span className="absolute h-[2.7px] w-2/5 bg-cc-red left-1/5 -bottom-0" ></span>
      </span>          
    </h2>
  );
}

const Background = () => {
  const styles = "absolute z-0 rotate-45 -top-25 w-50 h-50 bg-cc-red/20";
  return (
    <div>
      <span className={`${styles} right-23`} />
      <span className={`${styles} right-10`} />
    </div>
  );
}