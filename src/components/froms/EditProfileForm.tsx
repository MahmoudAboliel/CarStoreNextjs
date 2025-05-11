"use client"; 

import InputField from "@/components/froms/InputField"
import Button from "@/components/Button"
import { IoSend } from "@/lib/utils"
import { editProfile } from "@/lib/apiCalls/authAPIsCall"
import { useUserStore } from "@/stores/useUserStore"
import { useState } from "react"
import InputImageField2 from "./InputImageField2"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"


interface EditProfileFormProps {
    classes?: string;
    token: string;
}
const EditProfileForm = ({ classes, token }: EditProfileFormProps) => {
  const router = useRouter()
  const user = useUserStore(state => state.user)

    const [img, setImg] = useState<File | null>(null)
    const [userName, setUserName] = useState(user?.fullName)
    const [email, setEmail] = useState(user?.email)
    const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber)
    const [city, setCity] = useState(user?.city)

  


  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!token || token === '') {
      toast.error('يرجى تسجيل الدخول')
      router.replace('/login')
    }

    const formData = new FormData()
    if (img)
      formData.append("File1", img)
    if (userName)
      formData.append("Name", userName)
    if (email)
      formData.append("Email", email)
    if (city)
      formData.append("City", city)
    if (phoneNumber)
      formData.append("Number", phoneNumber)
    
    await editProfile(formData, token)
    
}


  return (
    <div className={`${classes} `}>
        <form 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-4 w-full "
          onSubmit={onSubmit}
        >
          <InputImageField2 
            label="الصورة الشخصية"
            id="img"
            onChange={setImg}
          />
          
          <InputField 
              label="الاسم الكامل"
              id="userName"
              type="text"
              value={userName}
             setValue={setUserName}
          />
          <InputField 
            label="الإيميل"
            id="email"
            type="email"
            value={email}
            setValue={setEmail}
          />
          
          <InputField 
              label="رقم الهاتف"
              id="number"
              type="text"
              value={phoneNumber}
             setValue={setPhoneNumber}
          />

          <InputField 
              label="المدينة"
              id="city"
              type="text"
              value={city}
             setValue={setCity}
          />
          <Button 
              text="حفظ"
              type="submit"
              Icon={IoSend}
              reverse
          />
        </form>

    </div>
  );
}

export default EditProfileForm;