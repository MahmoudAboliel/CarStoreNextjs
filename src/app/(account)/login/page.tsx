import Image from "next/image";
import LoginForm from "@/components/froms/LoginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const LoginPage = async () => {
  const token = (await cookies()).get('token')?.value
  if (token) 
    redirect('/')
  return (
    <section className="min-h-[calc(100vh-86px)] -mt-10 flex flex-col justify-center items-center pb-4">
        <div className="flex flex-col items-start bg-cc-white rounded-3xl p-7 shadow-type2 overflow-y-auto w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3">
            <Image 
                className="rounded-2xl mb-3 mx-auto max-w-[200px!important] h-[150px]"
                src="/images/logo.png" width={400} height={400} alt="logo image" />
            <h1 className="text-medium2 md:text-large2 text-center text-gray-600 font-semibold mb-7">تسجيل الدخول</h1>
            <LoginForm />
        </div>
    </section>
  );
}

export default LoginPage;