import Image from "next/image";
import RegisterForm from "@/components/froms/RegisterForm";

const RegisterPage = () => {
   
  return (
    <section className="min-h-[calc(100vh-86px)] flex flex-col justify-center items-center py-7">
        <div className="flex flex-col items-start bg-cc-white rounded-3xl p-7 shadow-type2 overflow-y-auto w-4/5 ">
            <Image 
                className="rounded-2xl mb-3 mx-auto max-w-[200px!important] h-[150px]"
                src="/images/logo.png" width={400} height={400} alt="logo image" />
            <h1 className="text-medium2 md:text-large2 text-center w-full text-gray-600 font-semibold mb-7">Create your motex account</h1>
            <RegisterForm />
        </div>
    </section>
  );
}

export default RegisterPage;