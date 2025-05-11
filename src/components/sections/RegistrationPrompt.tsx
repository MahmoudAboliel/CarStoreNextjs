import { IoCarSport } from "@/lib/utils"
import { cookies } from "next/headers"
import AwesomeLink from "../AwesomeLink"

const RegistrationPrompt = async () => {

  const token = (await cookies()).get('token')?.value
  const link = token ? '/user/addProduct' : '/login'

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
          <span 
            className="text-base md:text-lg font-bold tracking-wider uppercase">
            جاهز للبدأ
          </span>
          <IoCarSport className="text-3xl md:text-4xl mr-3" />
        </div>

        <h3
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 group/start">
          دعنا <span className="inline-block text-cc-red group-hover/start:scale-115 group-hover/start:px-1 transition-all duration-300">نبدأ</span> بإضافة سياراتك
        </h3>

        <p className="text-lg md:text-xl mb-8 mx-auto max-w-2xl text-gray-600">
        انضم إلى أكبر شبكة لتجار السيارات، واحصل على فرصة الوصول إلى آلاف المشترين
        <br />
        سجّل الآن واعرض سيارتك في دقائق
        </p>

        <AwesomeLink link={link} />
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