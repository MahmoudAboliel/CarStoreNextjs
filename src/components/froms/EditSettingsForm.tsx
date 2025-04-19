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
  siteName: string;
  logo: FileList;
  favicon: FileList;
  img1: FileList;
  img2: FileList;
  img3: FileList;
  text1: string;
  text2: string;
  text3: string;
  facebook: string;
  instagram: string;
  whatsapp: string;
};

const EditSettingsForm = () => {

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
const [logo, setLogo] = useState<string | null>(null);
const [favicon, setFavicon] = useState<string | null>(null);
const [preview1, setPreview1] = useState<string | null>(null);
const [preview2, setPreview2] = useState<string | null>(null);
const [preview3, setPreview3] = useState<string | null>(null);

useEffect(() => {
  const logoImg = watch("logo")?.[0];

  if (logoImg) {
    const readerLogo = URL.createObjectURL(logoImg);
    setLogo(readerLogo);
    return () => URL.revokeObjectURL(readerLogo);
  } else {
    setLogo(null);
  }

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [watch("logo")]);

useEffect(() => {
  const favIconImg = watch("favicon")?.[0];

  if (favIconImg) {
    const readerFavIcon = URL.createObjectURL(favIconImg);
    setFavicon(readerFavIcon);
    return () => URL.revokeObjectURL(readerFavIcon);
  } else {
    setFavicon(null);
  }

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [watch("img1")]);

useEffect(() => {
  const file1 = watch("img1")?.[0];

  if (file1) {
    const reader1 = URL.createObjectURL(file1);
    setPreview1(reader1);
    return () => URL.revokeObjectURL(reader1);
  } else {
    setPreview1(null);
  }

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [watch("img1")]);

useEffect(() => {
  const file2 = watch("img2")?.[0];

  if (file2) {
    const reader2 = URL.createObjectURL(file2);
    setPreview2(reader2);
    return () => URL.revokeObjectURL(reader2);
  } else {
    setPreview2(null);
  }

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [watch("img2")]);

useEffect(() => {
  const file3 = watch("img3")?.[0];

  if (file3) {
    const reader3 = URL.createObjectURL(file3);
    setPreview3(reader3);
    return () => URL.revokeObjectURL(reader3);
  } else {
    setPreview3(null);
  }

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [watch("img3")]);


  return (
    <form 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
        noValidate>

        {/*  */}
        <div className="col-span-full">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 w-full">
                <div>
                    <label className="block text-gray-800 text-small mb-2">Logo Image</label>
                    <div className="flex items-center gap-4">
                        {logo ? (
                        <Image
                            src={logo}
                            alt="logo"
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
                        htmlFor="logo"
                        className="cursor-pointer bg-cc-red text-white px-4 py-2 rounded-lg hover:bg-cc-dark transition"
                        >
                        Choose Image
                        </label>
                        <input
                        type="file"
                        id="logo"
                        accept="image/*"
                        className="hidden"
                        {...register("logo")}
                        />
                    </div>
                    {errors.logo && (
                        <p className="text-cc-red text-sm mt-1">{errors.logo.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-800 text-small mb-2">Favicon</label>
                    <div className="flex items-center gap-4">
                        {favicon ? (
                        <Image
                            src={favicon}
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
                        htmlFor="favicon"
                        className="cursor-pointer bg-cc-red text-white px-4 py-2 rounded-lg hover:bg-cc-dark transition"
                        >
                        Choose Image
                        </label>
                        <input
                        type="file"
                        id="favicon"
                        accept="image/*"
                        className="hidden"
                        {...register("favicon")}
                        />
                    </div>
                    {errors.favicon && (
                        <p className="text-cc-red text-sm mt-1">{errors.favicon.message}</p>
                    )}
                </div>
            </div>
        </div>

        <div className="col-span-full">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 w-full">
                <div>
                    <label className="block text-gray-800 text-small mb-2">Image One</label>
                    <div className="flex items-center gap-4">
                        {preview1 ? (
                        <Image
                            src={preview1}
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
                        htmlFor="img1"
                        className="cursor-pointer bg-cc-red text-white px-4 py-2 rounded-lg hover:bg-cc-dark transition"
                        >
                        Choose Image
                        </label>
                        <input
                        type="file"
                        id="img1"
                        accept="image/*"
                        className="hidden"
                        {...register("img1")}
                        />
                    </div>
                    {errors.img1 && (
                        <p className="text-cc-red text-sm mt-1">{errors.img1.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-800 text-small mb-2">Image Two</label>
                    <div className="flex items-center gap-4">
                        {preview2 ? (
                        <Image
                            src={preview2}
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
                        htmlFor="img2"
                        className="cursor-pointer bg-cc-red text-white px-4 py-2 rounded-lg hover:bg-cc-dark transition"
                        >
                        Choose Image
                        </label>
                        <input
                        type="file"
                        id="img2"
                        accept="image/*"
                        className="hidden"
                        {...register("img2")}
                        />
                    </div>
                    {errors.img2 && (
                        <p className="text-cc-red text-sm mt-1">{errors.img2.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-gray-800 text-small mb-2">Image Three</label>
                    <div className="flex items-center gap-4">
                        {preview3 ? (
                        <Image
                            src={preview3}
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
                        htmlFor="img3"
                        className="cursor-pointer bg-cc-red text-white px-4 py-2 rounded-lg hover:bg-cc-dark transition"
                        >
                        Choose Image
                        </label>
                        <input
                        type="file"
                        id="img3"
                        accept="image/*"
                        className="hidden"
                        {...register("img3")}
                        />
                    </div>
                    {errors.img3 && (
                        <p className="text-cc-red text-sm mt-1">{errors.img3.message}</p>)}
                </div>
            </div>
        </div>
        {/*  */}

        <InputField 
            label="Site Name"
            id="siteName"
            type="text"
            register={register}
            error={errors.siteName}
        />
        <InputField 
            label="Hero Text One"
            id="text1"
            type="text"
            register={register}
            error={errors.text1}
        />
        <InputField 
            label="Hero Text Two"
            id="text2"
            type="text"
            register={register}
            error={errors.text2}
        />
        <InputField 
            label="Hero Text Three"
            id="text3"
            type="text"
            register={register}
            error={errors.text3}
        />
        <InputField 
            label="Facebook"
            id="facebook"
            type="text"
            register={register}
            error={errors.facebook}
        />
        <InputField 
            label="Instagram"
            id="instagram"
            type="text"
            register={register}
            error={errors.instagram}
        />
        <InputField 
            label="Whatsapp"
            id="whatsapp"
            type="text"
            register={register}
            error={errors.whatsapp}
        />
        
        <Button 
            text="Edit"
            type="submit"
            Icon={IoSend}
            reverse
            disabled={isSubmitting}
        />
    </form>
  );
}

export default EditSettingsForm;