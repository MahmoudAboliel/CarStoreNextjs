"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoMenu, IoClose } from "@/lib/utils";
import { DOMAINImage, mainLinks } from "@/lib/constance";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { getCookie } from "cookies-next";
import { useSettingsStore } from "@/stores/useSettingStore";
import Logout from "@/components/Logout";
import { fetchSettings } from "@/lib/apiCalls/PublicAPIsCall";
import { fetchProfile } from "@/lib/apiCalls/authAPIsCall";
import { useUserStore } from "@/stores/useUserStore";

const Header = () => {

  const { settings, setSettings, setLoading } = useSettingsStore()
  const { setUser } = useUserStore()
  const isAdmin = getCookie('isAdmin')?.toString()

  useEffect(() => {
    const token = getCookie('token')?.toString()
    const fetchSetting = async () => {
      setLoading(true)
      if (token) {
        const user = await fetchProfile(token)
        setUser(user)

      }
      
      const settingsRes = await fetchSettings()
      if (settingsRes !== undefined)
        setSettings(settingsRes)

      setLoading(false)
    };



    fetchSetting();
  }, [setLoading, setSettings, setUser]);

  const navRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const pathName = usePathname()
  

  const [token, setToken] = useState<string | null>(null)
  useEffect(() => {
    setToken(getCookie('token')?.toString() || null)
  }, [setToken])

  const styles = {
    link: 'text-medium1 rounded-md hover:text-cc-red transition-all duration-150',
    activeLink: 'text-cc-red font-semibold',
  };


  useEffect(() => {
    gsap.from(headerRef.current, { 
      y: -500,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out', 
    })
  }, [])

  useEffect(() => {
    if (openMenu) {
      gsap.to(navRef.current, {
        x: 0,
        opacity: 1,
        duration: 2,
        ease: 'power3.out'
      })
    } else {
      gsap.to(navRef.current, {
        x: '100%',
        opacity: 0,
        duration: 2,
        ease: 'power3.out'
      })
    }
  }, [openMenu])

  useEffect(() => {
    setOpenMenu(false)
  }, [pathName])
  
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
            src={`${DOMAINImage}/${settings?.logo}`} alt="logo" />
          <span className="text-large1 text-cc-red uppercase font-bold">{settings?.siteName}</span>
          
        </Link>
        
        {/* Main Navbar */}
        <nav className="hidden md:flex items-center gap-3 text-gray-900">
          {mainLinks.map(link => 
            token 
            ? (
              isAdmin === 'true' 
              ? link.href !== '/user' &&
                (link.href !== '/login' && link.href !== '/register') &&
                  <MainNavLink 
                    key={link.href}
                    href={link.href.split('?')[0]}
                    pathName={pathName}
                    stylesActive={styles.activeLink}
                    stylesLink={styles.link}
                    label={link.label}
                  />
                : link.href !== '/admin' &&
                  (link.href !== '/login' && link.href !== '/register') &&
                  <MainNavLink 
                    key={link.href}
                    href={link.href.split('?')[0]}
                    pathName={pathName}
                    stylesActive={styles.activeLink}
                    stylesLink={styles.link}
                    label={link.label}
                  />
              )
            : (
              (link.href !== '/user' && link.href !== '/admin') &&
              <MainNavLink 
                key={link.href}
                href={link.href.split('?')[0]}
                pathName={pathName}
                stylesActive={styles.activeLink}
                stylesLink={styles.link}
                label={link.label}
              />
              )
          )}
          {token &&
            <Logout 
              setToken={setToken}
            />}
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
          {mainLinks.map(link => 
            token 
            ? (
              isAdmin === 'true' 
              ? link.href !== '/user' &&
                (link.href !== '/login' && link.href !== '/register') &&
                  <SecondaryNavLink 
                    key={link.href}
                    href={link.href.split('?')[0]}
                    pathName={pathName}
                    stylesActive={styles.activeLink}
                    stylesLink={styles.link}
                    label={link.label}
                  />
                : link.href !== '/admin' &&
                  (link.href !== '/login' && link.href !== '/register') &&
                  <SecondaryNavLink 
                    key={link.href}
                    href={link.href.split('?')[0]}
                    pathName={pathName}
                    stylesActive={styles.activeLink}
                    stylesLink={styles.link}
                    label={link.label}
                  />
            )
            : (
              (link.href !== '/user' && link.href !== '/admin') &&
              <SecondaryNavLink 
                key={link.href}
                href={link.href.split('?')[0]}
                pathName={pathName}
                stylesActive={styles.activeLink}
                stylesLink={styles.link}
                label={link.label}
              />
            )  
          )}
          {token &&
          <Logout 
            setToken={setToken}
          />}
        </nav>

      </div>
    </header>
    )
    
  )
}

export default Header

interface MainNavLinkProps {
  href: string; 
  pathName: string; 
  stylesActive: string; 
  stylesLink: string;
  label: string;

}
const MainNavLink = ({ href, pathName, stylesActive, stylesLink, label}: MainNavLinkProps) => {
  return (
    <Link 
      href={href}
      className={`${pathName === href && `${stylesActive} -translate-y-1`} ${stylesLink} hover:-translate-y-1 relative`}>
      {label}
      <span className={`${pathName === href && 'absolute -bottom-1 w-2/5 h-[3px] left-1/2 -translate-x-1/2 bg-cc-red'}`} />
    </Link>
  )
}

const SecondaryNavLink = ({ href, pathName, stylesActive, stylesLink, label}: MainNavLinkProps) => {
  return (
    <Link 
      href={href}
      className={`${pathName === href && `${stylesActive} pl-2`} ${stylesLink} hover:pl-2`}>
            {label}
    </Link>
  )
}