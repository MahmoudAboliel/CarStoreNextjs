"use client"; 

import InputField from "@/components/froms/InputField";
import Button from "@/components/Button";
import { IoSend } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputImageField from "./InputImageField";
import { AddAdSchema } from "@/lib/validation";
import { addAd } from "@/lib/apiCalls/adminAPIsCall";


type FormData = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  img?: FileList;  
  url: string;
};

interface Props {
  token: string;
}
const AddAdForm = ({ token }: Props) => {

//   const router = useRouter();

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    watch,
    // setValue,
    reset 
  } = useForm<FormData>({
    resolver: zodResolver(AddAdSchema)
  });


  const onSubmit = async (data: Omit<FormData, "confirmPassword">) => {
    const formData = new FormData()
    formData.append("name", data.title)
    formData.append("Description", data.description)
    formData.append("Url", data.url)
    if (data.img?.[0])
    formData.append("File1", data.img[0])
  formData.append("StartDate", data.startDate.toString())
    formData.append("EndDate", data.endDate.toString())

    await addAd(formData, token)
    reset()
  }

  return (
    <form 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
        noValidate>

        {/*  */}
        <div className="col-span-full">
          <InputImageField 
            label="صورة الإعلان"
            id="img"
            register={register}
            error={errors.img}
            watch={watch}
          />
        </div>
        {/*  */}

        <InputField 
            label="العنوان"
            id="title"
            type="text"
            register={register}
            error={errors.title}
        />
        
        <InputField 
            label="الوصف"
            id="description"
            type="text"
            register={register}
            error={errors.description}
        />
        
        <InputField 
            label="تاريخ البداية"
            id="startDate"
            type="date"
            register={register}
            error={errors.startDate}
        />
        <InputField 
            label="تاريخ الإنتهاء"
            id="endDate"
            type="date"
            register={register}
            error={errors.endDate}
        />
        <InputField 
            label="الرابط"
            id="url"
            type="text"
            register={register}
            error={errors.url}
        />
        
        <Button 
            text="إضافة"
            type="submit"
            Icon={IoSend}
            reverse
            disabled={isSubmitting}
        />
    </form>
  );
}

export default AddAdForm;