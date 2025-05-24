"use client";

import InputField from "@/components/froms/InputField";
import Button from "@/components/Button";
import { IoSend } from "@/lib/utils";
import { LoginUserSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { loginFunc } from "@/lib/apiCalls/authAPIsCall";

type FormData = {
    email: string;
    password: string;
}
const LoginForm = () => {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<FormData>({
        resolver: zodResolver(LoginUserSchema)
    });

    
    const onSubmit = async (data: FormData) => {
        console.log('sss');
        loginFunc(data.email, data.password, reset, router.push);
        console.log('eee');
    }   

  return (
    <form 
        className="flex flex-col gap-4 w-full text-right"
        onSubmit={handleSubmit(onSubmit)}
        noValidate>
        <InputField 
            label="الإيميل"
            id="email"
            type="email"
            register={register}
            error={errors.email}
        />
        <InputField 
            label="كلمة السر"
            id="password"
            type="password"
            register={register}
            error={errors.password}
        />
        <Button 
            text="تسجيل الدخول"
            type="submit"
            Icon={IoSend}
            disabled={isSubmitting}
            reverse={true}
        />
    </form>
  );
}

export default LoginForm;