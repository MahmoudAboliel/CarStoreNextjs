"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { headerData, IoMenu, IoClose } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Header = () => {

  const navRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const pathName = usePathname();

  const styles = {
    link: 'text-medium1 rounded-md hover:text-cc-red hover:bg-cc-red/5 transition-all duration-150',
    activeLink: 'text-cc-red font-semibold',
  };

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    gsap.from(headerRef.current, { 
      y: -500,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out', 
    });
  }, []);

  useEffect(() => {
    if (openMenu) {
      gsap.to(navRef.current, {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: 'power3.out'
      });
    } else {
      gsap.to(navRef.current, {
        x: '100%',
        opacity: 0,
        duration: 2,
        ease: 'power3.out'
      });
    }
  }, [openMenu]);

  useEffect(() => {
    setOpenMenu(false);
  }, [pathName]);
  
  return (
    (pathName !== '/login' && pathName !== '/register') 
    && (
      <header
      ref={headerRef} 
      className="fixed top-0 left-0 right-0 z-50 h-[66px] bg-cc-white shadow-type1 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/"
          className="flex items-center gap-2">
          <Image 
            width={100}
            height={100}
            className="w-[55px!important] h-[40px] rounded-lg"
            src={headerData.logo} alt="logo" />
          <span className="text-large1 text-cc-red uppercase font-bold">{headerData.name}</span>
          
        </Link>
        
        {/* Main Navbar */}
        <nav className="hidden md:flex items-center gap-3 text-gray-900">
          {headerData.links.map(link => 
            <Link 
              href={link.href}
              key={link.href}
              className={`${pathName === link.href && `${styles.activeLink} -translate-y-1`} ${styles.link} hover:-translate-y-1 relative`}>
                {link.label}
                <span className={`${pathName === link.href && 'absolute -bottom-1 w-2/5 h-[3px] left-1/2 -translate-x-1/2 bg-cc-red'}`} />
            </Link>
          )}
        </nav>
        
        {/* Toggle for Mobile */}
        <button 
          onClick={() => setOpenMenu(!openMenu)}
          aria-label="navigation menu"
          className="md:hidden text-gray-600 p-1 text-2xl border rounded-full cursor-pointer hover:bg-cc-red hover:text-cc-white transition-all duration-150">
            {openMenu ? <IoClose /> : <IoMenu />}
        </button>

        {/* Mobile Navbar */}
        <nav ref={navRef}
          className={`fixed md:hidden left-0 top-[66px] h-fit right-0 bottom-0 flex flex-col bg-cc-white shadow-type2 transform translate-x-full opacity-0 p-6 gap-1 rounded-2xl`}>
            {headerData.links.map(link => 
                <Link 
                  href={link.href}
                  key={link.href}
                  className={`${pathName === link.href && `${styles.activeLink} pl-2`} ${styles.link} hover:pl-2`}>
                    {link.label}
                </Link>
              )}
        </nav>

      </div>
    </header>
    )
    
  );
}

export default Header;