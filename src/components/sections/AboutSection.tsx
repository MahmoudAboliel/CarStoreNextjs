import Image from "next/image";
import { IoCarSport } from "@/lib/utils"
import CustomLink from "../CustomLink";

const AboutSection = () => {
  return (
    <section className="py-12 px-5 md:px-8 lg:px-12 bg-cc-bg-light shadow-type1">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
      {/* Image Section */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] mx-auto">
        <Image 
          className="object-cover rounded-full border-2 border-cc-red/70 shadow-lg"
          src="/images/about.png" 
          alt="About our company" 
          fill
          priority
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
        />
      </div>
      
      {/* Content Section */}
      <div className="space-y-4 md:space-y-6">
        <div className="flex items-center gap-3">
          <IoCarSport className="text-cc-red text-2xl" />
          <span className="uppercase font-semibold text-cc-red tracking-wider text-sm md:text-base">
            About us
          </span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {"World's"} Largest <span className="text-cc-red">Car Dealer</span> Marketplace
        </h2>
        
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
          alteration in some form, by injected humour, or randomised words which {"don't"} look even slightly 
          believable.
        </p>
        <CustomLink 
            href=""
            label="Learn More"
            classes="w-fit rounded-[9999px!important]"
        />
      </div>
    </div>
  </div>
</section>
  );
}

export default AboutSection;