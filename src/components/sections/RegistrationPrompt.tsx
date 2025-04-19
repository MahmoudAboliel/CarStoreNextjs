import Link from "next/link";
import { IoCarSport, IoArrowForward } from "@/lib/utils";

const RegistrationPrompt = () => {
  return (
    <div 
      className="relative p-8 md:p-12 shadow-type1 overflow-hidden bg-cc-white">
      {/* Animated Background Elements */}
      <div 
        className="absolute top-10  left-10 w-20 h-20 bg-cc-red opacity-15"
        style={{
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        }}
      />
      
      <div 
        className="absolute bottom-8 right-8 w-24 h-24 bg-cc-red opacity-15"
        style={{
          borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center text-cc-red mb-6 hover:scale-105 transition-transform duration-300">
          <IoCarSport className="text-3xl md:text-4xl mr-3" />
          <span 
            className="text-sm md:text-base font-bold tracking-wider uppercase">
            Ready to Begin?
          </span>
        </div>

        <h3
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 group/start">
          {"Let's"} <span className="inline-block text-cc-red group-hover/start:scale-115 group-hover/start:px-1 transition-all duration-300">start</span> adding your cars!
        </h3>

        <p className="text-base md:text-lg mb-8 mx-auto max-w-2xl text-gray-600">
          Become part of the largest car dealer network and get access to thousands of buyers. 
          Register now and showcase your inventory in minutes.
        </p>

        <div className="hover:scale-102 active:scale-98 transition-transform duration-300">
          <Link
            href="/register"
            className="inline-flex items-center justify-center bg-cc-red shadow-md shadow-cc-red px-10 py-4 md:px-12 md:py-5 rounded-full font-bold text-white transition-all duration-300 group">
            <span className="inline-flex items-center group-hover:translate-x-1 transition-transform duration-300">
              Get Started Now
              <IoArrowForward className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
        </div>
      </div>

      {/* Floating Cars Animation */}
      <div 
        className="absolute bottom-10 left-5 opacity-15 text-cc-red">
        <IoCarSport className="text-6xl" />
      </div>
    </div>
  );
};

export default RegistrationPrompt;