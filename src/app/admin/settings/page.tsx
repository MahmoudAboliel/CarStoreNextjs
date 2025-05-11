import EditSettingsForm from "@/components/froms/EditSettingsForm"
import SectionHeader from "@/components/sections/SectionHeader"
import { cookies } from "next/headers"

const SettingsPage = async () => {

  const token = (await cookies()).get('token')?.value || ''
  return (
    <section>
        <SectionHeader 
            subtitle="المسؤول"
            title="لوحة التحكم"
            span="الإعدادات"
        />
      
        <EditSettingsForm token={token} />
    </section>
  )
}

export default SettingsPage