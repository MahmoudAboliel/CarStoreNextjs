"use client"; 

import InputField from "@/components/froms/InputField";
import Button from "@/components/Button";
import { IoSend } from "@/lib/utils";
import { RegisterUserSchema } from "@/lib/validation";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";


type FormData = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  number: string;
  country: string;
  city: string;
  avatar?: FileList | null;
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
    try {


      console.log('sss');
      const formData = new FormData();
      const userData = {
        name: data.userName,
        email: data.email,
        password: data.password,
        city: data.city,
        country: data.country,
        number: data.number,
      }
      formData.append('userData', JSON.stringify(userData));
      if (data.avatar?.[0])
        formData.append('avatar', data.avatar[0])
      
      const response = await axios.post(
        "/Account/Register",
        
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      console.log(response)
      document.cookie = `token=${response.data.data}; max-age=${60 * 60 * 24 * 7}; path=/`;

      localStorage.setItem('token', response.data.data);
      
      toast.success("Account created successfully!");
      reset();
      router.replace("/");

    } catch (error) {

      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Registration Failed!!");
        console.log(error)
      } else {
        toast.error("An unexpected error occurred");
      }

    }
  }

  // داخل مكون RegisterForm
const [preview, setPreview] = useState<string | null>(null);

// إضافة هذا التأثير لمعاينة الصورة
useEffect(() => {
  const file = watch("avatar")?.[0];
  if (file) {
    const reader = URL.createObjectURL(file);
    setPreview(reader);
    return () => URL.revokeObjectURL(reader);
  } else {
    setPreview(null);
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [watch("avatar")]);

  return (
    <form 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
        noValidate>

        {/*  */}
        <div className="col-span-full">
          <label className="block text-gray-800 text-small mb-2">Profile Picture</label>
          <div className="flex items-center gap-4">
            {preview ? (
              <Image
                src={preview}
                alt="Preview"
                width={80}
                height={80}
                className="rounded-full object-fit w-20 h-20"
              />
            ) : (
              <div className="rounded-full bg-gray-200 w-20 h-20 flex items-center justify-center">
                <span className="text-gray-500">No image</span>
              </div>
            )}
            <label
              htmlFor="avatar"
              className="cursor-pointer bg-cc-red text-white px-4 py-2 rounded-lg hover:bg-cc-dark transition"
            >
              Choose Image
            </label>
            <input
              type="file"
              id="avatar"
              accept="image/*"
              className="hidden"
              {...register("avatar")}
            />
          </div>
          {errors.avatar && (
            <p className="text-cc-red text-sm mt-1">{errors.avatar.message}</p>
          )}
        </div>
        {/*  */}

        <InputField 
            label="Full Name"
            id="userName"
            type="text"
            register={register}
            error={errors.userName}
        />
        <InputField 
            label="Email"
            id="email"
            type="email"
            register={register}
            error={errors.email}
        />
        <InputField 
            label="Password"
            id="password"
            type="password"
            register={register}
            error={errors.password}
        />
        <InputField 
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            register={register}
            error={errors.confirmPassword}
            validate={(value) => 
              value === watch("password") || "Passwords don't match"
            }
        />
        <InputField 
            label="Mobile Number"
            id="number"
            type="text"
            register={register}
            error={errors.number}
        />
        <InputField 
            label="Country"
            id="country"
            type="text"
            register={register}
            error={errors.city}
        />
        <InputField 
            label="City"
            id="city"
            type="text"
            register={register}
            error={errors.city}
        />
        <Button 
            text="Register"
            type="submit"
            Icon={IoSend}
            reverse
            disabled={isSubmitting}
        />
    </form>
  );
}

export default RegisterForm;