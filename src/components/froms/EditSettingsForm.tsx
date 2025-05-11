"use client"; 

import InputField from "@/components/froms/InputField";
import Button from "@/components/Button";
import { IoSend } from "@/lib/utils";
import InputImageField2 from "./InputImageField2";
// import { EditSettingsSchema } from "@/lib/validation";
import { editSettings } from "@/lib/apiCalls/adminAPIsCall"
import Textarea from "./Textarea";
import Image from "next/image";
import { useSettingsStore } from "@/stores/useSettingStore";
import { DOMAINImage } from "@/lib/constance";
import { useState } from "react";

const EditSettingsForm = ({ token }: { token: string }) => {

  const settings = useSettingsStore(state => state.settings)
  
  const [logo, setLogo] = useState<File | null>(null)
  const [favicon, setFavicon] = useState<File | null>(null)
  const [img1, setImg1] = useState<File | null>(null)
  const [img2, setImg2] = useState<File | null>(null)
  const [img3, setImg3] = useState<File | null>(null)
  const [siteName, setSiteName] = useState(settings?.siteName)
  const [description, setDescription] = useState(settings?.description)
  const [text1, setText1] = useState(settings?.homeTxt1)
  const [text2, setText2] = useState(settings?.homeTxt2)
  const [text3, setText3] = useState(settings?.homeTxt3)
  const [facebook, setFacebook] = useState(settings?.facebook)
  const [instagram, setInstagram] = useState(settings?.instagram)
  const [whatsapp, setWhatsapp] = useState(settings?.whatsapp)
  


  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData();
    if (logo)
      formData.append("Logo", logo)
    if (favicon)
      formData.append("favicon", favicon)
    if (img1)
      formData.append("HomeImg1", img1)
    if (img2)
      formData.append("HomeImg2", img2)
    if (img3)
      formData.append("HomeImg3", img3)
    if (siteName)
    formData.append("SiteName", siteName)
    if (description)
      formData.append("Description", description)
    if (facebook)
      formData.append("Facebook", facebook)
    if (instagram)  
      formData.append("Instagram", instagram)
    if (whatsapp)
      formData.append("Whatsapp", whatsapp)
    if (text1)
      formData.append("HomeTxt1", text1)
    if (text2)
      formData.append("HomeTxt2", text2)
    if (text3)
      formData.append("HomeTxt3", text3)
    
    
    await editSettings(token, formData)
  }

  const images = [
    {
      id: 1,
      label: 'Logo',
      href: `${DOMAINImage}/${settings?.logo}`
    },
    {
      id: 2,
      label: 'Favicon',
      href: `${DOMAINImage}/${settings?.favicon}`
    },
    {
      id: 3,
      label: 'الصورة الأولى',
      href: `${DOMAINImage}/${settings?.homeImg1}`
    },
    {
      id: 4,
      label: 'الصورة الثانية',
      href: `${DOMAINImage}/${settings?.homeImg2}`
    },
    {
      id: 5,
      label: 'الصورة الثالثة',
      href: `${DOMAINImage}/${settings?.homeImg3}`
    },
  ]

  return (
    <form 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-4 w-full"
        onSubmit={onSubmit}
        >
          <div className="col-span-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-stretch spce-y-3">
              {images.map(img => 
              <div key={img.id}>
                <label htmlFor="">{img.label}</label>
                <Image className=" rounded-lg" width={250} height={250} src={img.href} alt="الصورة الأولى" />
                
              </div>
              )}
            </div>
          </div>
        {/*  */}
        <div className="col-span-full">  
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 w-full">
            
            <InputImageField2 
              label="Logo"
              id="logo"
              onChange={setLogo}
            />
            <InputImageField2 
              label="Favicon"
              id="favicon"
              onChange={setFavicon}
            />
            
          </div>
        </div>
        <div className="col-span-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 w-full">
            <InputImageField2 
              label="الصورة الأولى"
              id="img1"
              onChange={setImg1}
            />
            <InputImageField2 
              label="الصورة الثانية"
              id="img2"
              onChange={setImg2}
            />
            <InputImageField2 
              label="الصورة الثالثة"
              id="img3"
              onChange={setImg3}
            />
          </div>
        </div>
        {/*  */}


        <InputField 
            label="اسم الموقع"
            id="siteName"
            type="text"
            value={siteName}
            setValue={setSiteName}
        />
        <InputField 
            label="Facebook"
            id="facebook"
            type="text"
            value={facebook}
            setValue={setFacebook}
        />
        <InputField 
            label="Instagram"
            id="instagram"
            type="text"
            value={instagram}
            setValue={setInstagram}
        />
        <InputField 
            label="Whatsapp"
            id="whatsapp"
            type="text"
            value={whatsapp}
            setValue={setWhatsapp}
        />
        <div className="col-span-full">
          <Textarea 
            label="النص الأول"
            id="text1"
            value={text1}
            setValue={setText1}
          />
          <Textarea 
            label="النص الثاني"
            id="text2"
            value={text2}
            setValue={setText2}
          />
          <Textarea 
            label="النص الثالث"
            id="text3"
            value={text3}
            setValue={setText3}
          />
          <Textarea 
              label="الوصف"
              id="description"
              value={description}
              setValue={setDescription}
          />
        </div>
        <Button 
            text="تعديل"
            type="submit"
            Icon={IoSend}
            reverse
        />
    </form>
  );
}

export default EditSettingsForm;