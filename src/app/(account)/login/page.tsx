import Image from "next/image";
import LoginForm from "@/components/froms/LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
const LoginPage = async () => {
  const token = (await cookies()).get('token')?.value
  if (token) 
    redirect('/')
  return (
    <section dir="rtl" className="min-h-[calc(100vh-86px)] -mt-10 flex flex-col justify-center items-center pb-4">
        <div className="flex flex-col items-start bg-cc-white rounded-3xl p-7 shadow-type2 overflow-y-auto w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3">
            <Image 
                className="rounded-2xl mb-3 mx-auto max-w-100"
                src="/images/login.webp" width={400} height={400} alt="logo image" />
            <h1 className="text-medium2 md:text-large2 text-start text-gray-600 font-semibold mb-7">تسجيل الدخول</h1>
            <LoginForm />
            <Link href="/register" className="text-cc-blue text-start mt-4 text-sm">ليس لديك حساب؟</Link>
        </div>
    </section>
  );
}

export default LoginPage;