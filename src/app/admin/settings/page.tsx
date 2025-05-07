import EditSettingsForm from "@/components/froms/EditSettingsForm"
import SectionHeader from "@/components/sections/SectionHeader"
import { cookies } from "next/headers"

const SettingsPage = async () => {
  const token = (await cookies()).get('token')?.value || ''
  return (
    <section>
        <SectionHeader 
            subtitle="Admin"
            title="Dashboard"
            span="Settings"
        />
        <EditSettingsForm token={token} />
    </section>
  )
}

export default SettingsPage