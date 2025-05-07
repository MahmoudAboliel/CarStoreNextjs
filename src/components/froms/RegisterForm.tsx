"use client"; 

import InputField from "@/components/froms/InputField";
import Button from "@/components/Button";
import { IoSend } from "@/lib/utils";
import { RegisterUserSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFunc } from "@/lib/apiCalls/authAPIsCall";
import InputImageField from "./InputImageField";
import { useRouter } from "next/navigation";


type FormData = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  number: string;
  city: string;
  avatar?: FileList;
};

const RegisterForm = () => {

  const router = useRouter();

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    watch,
    // setValue,
    reset 
  } = useForm<FormData>({
    resolver: zodResolver(RegisterUserSchema)
  });


  const onSubmit = async (data: Omit<FormData, "confirmPassword">) => {
      console.log('sss');
      const formData = new FormData();
      
      formData.append("Name", data.userName);
      formData.append("Email", data.email);
      formData.append("Password", data.password);
      formData.append("City", data.city);
      formData.append("Number", data.number);
      if (data.avatar?.[0])
        formData.append('File1', data.avatar[0])
      
      registerFunc(formData, reset, router.push, router.refresh)

  }

  return (
    <form 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
        noValidate>

        {/*  */}
        <div className="col-span-full">
          <InputImageField 
            label="الصورة الشخصية"
            id="avatar"
            register={register}
            error={errors.avatar}
            watch={watch}
          />
        </div>
        {/*  */}

        <InputField 
            label="الاسم الكامل"
            id="userName"
            type="text"
            register={register}
            error={errors.userName}
        />
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
        <InputField 
            label="تأكيد كلمة السر"
            id="confirmPassword"
            type="password"
            register={register}
            error={errors.confirmPassword}
            validate={(value) => 
              value === watch("password") || "Passwords don't match"
            }
        />
        <InputField 
            label="رقم الهاتف"
            id="number"
            type="text"
            register={register}
            error={errors.number}
        />
        <InputField 
            label="المدينة"
            id="city"
            type="text"
            register={register}
            error={errors.city}
        />
        <Button 
            text="إنشاء حساب"
            type="submit"
            Icon={IoSend}
            reverse
            disabled={isSubmitting}
        />
    </form>
  );
}

export default RegisterForm;