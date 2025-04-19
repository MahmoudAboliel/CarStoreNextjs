"use client";

import { useEffect, useRef } from "react";
import { IoCarSport } from "@/lib/utils";
import gsap from "gsap";

interface SectionHeaderProps {
    subtitle: string;
    title: string;
    span: string;
}

const SectionHeader = ({ subtitle, title, span }:SectionHeaderProps) => {

    const doteRef = useRef(null);

    useEffect(() => {
        const dote = doteRef.current;
        gsap.to(dote, { 
            left: '85%', 
            duration: 3, 
            yoyo: true, 
            repeat: -1, 
            ease: 'sine.inOut' 
        });
    }, []);

  return (
    <div className="text-center mb-6">
        <div className="flex justify-center items-center gap-1.5">
            <IoCarSport className="text-cc-red text-large1" />
            <p className="uppercase text-cc-red text-[16px] font-semibold">{subtitle}</p>
        </div>
        <h2 className="text-large2 font-semibold">{title} <span className="text-cc-red">{span}</span></h2>
        <div className="relative w-[150px] h-2.5 border-[3px] border-cc-red rounded-3xl mx-auto">
            <span ref={doteRef} className="absolute -top-2 left-[5%] w-4 h-2 bg-cc-white " />
        </div>
    </div>
  );
}

export default SectionHeader;