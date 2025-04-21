"use client"; 

import InputField from "@/components/froms/InputField";
import Button from "@/components/Button";
import { IoSend } from "@/lib/utils";
import { RegisterUserSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import Image from "next/image";
import { registerFunc } from "@/lib/apiCalls/authApiCalls";


type FormData = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  number: string;
  city: string;
  avatar?: FileList | null;
};

const RegisterForm = () => {

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
      
      registerFunc(formData, reset)

  }

  const [preview, setPreview] = useState<string | null>(null);

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
                className="rounded-lg object-fit w-20 h-20"
              />
            ) : (
              <div className="rounded-lg bg-gray-200 w-20 h-20 flex items-center justify-center">
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