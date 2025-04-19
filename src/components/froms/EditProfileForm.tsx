"use client"; 

import InputField from "@/components/froms/InputField";
import Button from "@/components/Button";
import { IoSend } from "@/lib/utils";
import { EditProfileSchema } from "@/lib/validation";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
// import Image from "next/image";
import { useUserStore } from "@/stores/useUserStore";



type FormData = {
  userName: string;
  email: string;
  number: string;
  country: string;
  city: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  avatar?: any;
};

interface EditProfileFormProps {
    classes?: string
}
const EditProfileForm = ({ classes }: EditProfileFormProps) => {

  const profile = useUserStore(state => state.user);
  const router = useRouter();

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    // setValue,
    reset 
  } = useForm<FormData>({
    resolver: zodResolver(EditProfileSchema)
  });


  const onSubmit = async (data: Omit<FormData, "confirmPassword">) => {
    try {


      console.log('sss');
      const response = await axios.post(
        "http://rentacar.somee.com/api/Account/Register",
        {
          Name: data.userName,
          Email: data.email,
          Number: data.number,
          City: data.city
        }
      );

      console.log(response)
      
      toast.success("Account created successfully!");
      reset();
      router.refresh();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Registration Failed!!");
        console.log(error)
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  }


  return (
    <div className={`${classes} `}>
        <form 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-4 w-full "
            onSubmit={handleSubmit(onSubmit)}
            noValidate>

            
            <InputField 
                label="Full Name"
                id="userName"
                type="text"
                defaultValue={profile?.userName}
                register={register}
                error={errors.userName}
            />
            <InputField 
                label="Email"
                id="email"
                type="email"
                defaultValue={profile?.email}
                register={register}
                error={errors.email}
            />
            
            <InputField 
                label="Mobile Number"
                id="number"
                type="text"
                defaultValue={profile?.phoneNumber}
                register={register}
                error={errors.number}
            />

            <InputField 
                label="City"
                id="city"
                type="text"
                defaultValue={profile?.city}
                register={register}
                error={errors.city}
            />
            <Button 
                text="Save"
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