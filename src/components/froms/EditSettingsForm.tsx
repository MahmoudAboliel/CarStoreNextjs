"use client"; 

import InputField from "@/components/froms/InputField";
import Button from "@/components/Button";
import { IoSend } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputImageField from "./InputImageField";
import { EditSettingsSchema } from "@/lib/validation";
import { editSettings } from "@/lib/apiCalls/adminAPIsCall"
import { useRouter } from "next/navigation";

type FormData = {
  siteName: string;
  logo?: FileList;
  favicon?: FileList;
  img1?: FileList;
  img2?: FileList;
  img3?: FileList;
  text1: string;
  text2: string;
  text3: string;
  facebook: string;
  instagram: string;
  whatsapp: string;
  description: string;
};

const EditSettingsForm = ({ token }: { token: string}) => {

const router = useRouter()

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    watch,
    // setValue,
    // reset 
  } = useForm<FormData>({
    resolver: zodResolver(EditSettingsSchema)
  });


  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    if (data.logo?.[0])
      formData.append("Logo", data.logo[0])
    if (data.favicon?.[0])
      formData.append("favicon", data.favicon[0])
    if (data.img1?.[0])
      formData.append("HomeImg1", data.img1[0])
    if (data.img2?.[0])
      formData.append("HomeImg2", data.img2[0])
    if (data.img3?.[0])
      formData.append("HomeImg3", data.img3[0])
    formData.append("SiteName", data.siteName)
    formData.append("Description", data.description)
    formData.append("Facebook", data.facebook)
    formData.append("Instagram", data.instagram)
    formData.append("Whatsapp", data.whatsapp)
    formData.append("HomeTxt1", data.text1)
    formData.append("HomeTxt2", data.text2)
    formData.append("HomeTxt3", data.text3)
    console.log(data)
    
    await editSettings(token, formData)
    
    router.refresh()
  }

  return (
    <form 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
        noValidate>

        {/*  */}
        <div className="col-span-full">  
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 w-full">
            <InputImageField 
              label="Logo"
              id="logo"
              register={register}
              error={errors.logo}
              watch={watch}
            />
            <InputImageField 
              label="Favicon"
              id="favicon"
              register={register}
              error={errors.favicon}
              watch={watch}
            />
          </div>
        </div>
        <div className="col-span-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 w-full">
          <InputImageField 
              label="Image One"
              id="img1"
              register={register}
              error={errors.img1}
              watch={watch}
            />
          <InputImageField 
              label="Image Two"
              id="img2"
              register={register}
              error={errors.img2}
              watch={watch}
            />
          <InputImageField 
              label="Image Three"
              id="img3"
              register={register}
              error={errors.img3}
              watch={watch}
            />
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
        <InputField 
            label="الوصف"
            id="description"
            type="text"
            register={register}
            error={errors.description}
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