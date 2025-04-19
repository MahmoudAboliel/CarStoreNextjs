"use client"; 

import InputField from "@/components/froms/InputField";
import Button from "@/components/Button";
import { IoSend } from "@/lib/utils";
// import { RegisterUserSchema } from "@/lib/validation";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Image from "next/image";


type FormData = {
  title: string;
  startDate: Date;
  endDate: Date;
  img: FileList | null;  
  url: string;
};

const AddAdForm = () => {

//   const router = useRouter();

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    watch,
    // setValue,
    // reset 
  } = useForm<FormData>();


  const onSubmit = async (data: Omit<FormData, "confirmPassword">) => {
    console.log(data)
  }

  // داخل مكون RegisterForm
const [preview, setPreview] = useState<string | null>(null);

// إضافة هذا التأثير لمعاينة الصورة
useEffect(() => {
  const file = watch("img")?.[0];
  if (file) {
    const reader = URL.createObjectURL(file);
    setPreview(reader);
    return () => URL.revokeObjectURL(reader);
  } else {
    setPreview(null);
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [watch("img")]);

  return (
    <form 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
        noValidate>

        {/*  */}
        <div className="col-span-full">
          <label className="block text-gray-800 text-small mb-2">Image Ad</label>
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
              {...register("img")}
            />
          </div>
          {errors.img && (
            <p className="text-cc-red text-sm mt-1">{errors.img.message}</p>
          )}
        </div>
        {/*  */}

        <InputField 
            label="Title"
            id="title"
            type="text"
            register={register}
            error={errors.title}
        />
        <InputField 
            label="Start Date"
            id="startDate"
            type="date"
            register={register}
            error={errors.startDate}
        />
        <InputField 
            label="End Date"
            id="endDate"
            type="date"
            register={register}
            error={errors.endDate}
        />
        <InputField 
            label="URL"
            id="url"
            type="text"
            register={register}
            error={errors.url}
        />
        
        <Button 
            text="Add"
            type="submit"
            Icon={IoSend}
            reverse
            disabled={isSubmitting}
        />
    </form>
  );
}

export default AddAdForm;