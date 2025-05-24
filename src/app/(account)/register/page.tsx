import Image from "next/image";
import RegisterForm from "@/components/froms/RegisterForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

const RegisterPage = async () => {
   const token = (await cookies()).get('token')?.value
     if (token) 
       redirect('/')
  return (
    <section dir="rtl" className="min-h-[calc(100vh-86px)] -mt-17 flex flex-col justify-center items-center py-7">
        <div className="flex flex-col items-start bg-cc-white rounded-3xl p-7 shadow-type2 overflow-y-auto w-4/5 ">
            <Image 
                className="rounded-2xl mb-3 mx-auto w-50 md:w-100 "
                src="/images/login.webp" width={400} height={400} alt="logo image" />
            <h1 className="text-medium2 md:text-large2 text-start w-full text-gray-600 font-semibold mb-7">إنشاء حساب جديد</h1>
            <RegisterForm />
            <Link href="/login" className="text-cc-blue text-start mt-4 text-sm">لديك حساب بالفعل؟</Link>
        </div>
    </section>
  );
}

export default RegisterPage;