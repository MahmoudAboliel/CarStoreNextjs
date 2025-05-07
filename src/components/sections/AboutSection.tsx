import Image from "next/image";
import { IoCarSport } from "@/lib/utils"

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
        <div className="flex items-center justify-end gap-3">
          <span className="uppercase font-semibold text-cc-red tracking-wider text-sm md:text-base">
            من نحن
          </span>
          <IoCarSport className="text-cc-red text-2xl" />
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-right font-bold leading-tight">
          أكبر سوق <span className="text-cc-red"> لتجار السيارات </span>
        </h2>
        
        <p className="text-gray-600 leading-relaxed text-right text-base md:text-lg">
        وجهتك الأولى لشراء وبيع السيارات الجديدة والمستعملة في العالم العربي! نقدم لكم منصة متكاملة تتيح لك تصفح آلاف السيارات من مختلف الماركات والموديلات، مع تفاصيل دقيقة حول المواصفات والأسعار وفحص الجودة.
        </p>
        {/* <CustomLink 
            href=""
            label="Learn More"
            classes="w-fit m rounded-[9999px!important]"
        /> */}
      </div>
    </div>
  </div>
</section>
  );
}

export default AboutSection;