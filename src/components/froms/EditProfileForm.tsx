"use client"; 

import InputField from "@/components/froms/InputField";
import Button from "@/components/Button";
import { IoSend } from "@/lib/utils";
import { EditProfileSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputImageField from "./InputImageField";
import { editProfile, fetchProfile } from "@/lib/apiCalls/authAPIsCall";
import { getCookie } from "cookies-next";

type FormData = {
  userName: string;
  email: string;
  number: string;
  city: string;
  avatar?: FileList;
};

interface EditProfileFormProps {
    classes?: string
}
const EditProfileForm = ({ classes }: EditProfileFormProps) => {

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    // setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(EditProfileSchema)
  });


  const onSubmit = async (data: Omit<FormData, "confirmPassword">) => {
    const token = getCookie('token')?.toString() || ''

    console.log(token);
          const formData = new FormData();
          
          formData.append("Name", data.userName);
          formData.append("Email", data.email);
          formData.append("City", data.city);
          formData.append("Number", data.number);
          if (data.avatar?.[0])
            formData.append('File1', data.avatar[0])
          
          await editProfile(formData, token)
          await fetchProfile(token)
          
  }


  return (
    <div className={`${classes} `}>
        <form 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-4 w-full "
          onSubmit={handleSubmit(onSubmit)}
          noValidate>
          
          <InputImageField 
            label="الصورة الشخصية"
            id="avatar"
            register={register}
            error={errors.avatar}
            watch={watch}
          />
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
              text="حفظ"
              type="submit"
              Icon={IoSend}
              reverse
              disabled={isSubmitting}
          />
        </form>

    </div>
  );
}

export default EditProfileForm;