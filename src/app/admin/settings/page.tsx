import EditSettingsForm from "@/components/froms/EditSettingsForm"
import SectionHeader from "@/components/sections/SectionHeader"

const SettingsPage = () => {
  return (
    <section>
        <SectionHeader 
            subtitle="Admin"
            title="Dashboard"
            span="Settings"
        />
        <EditSettingsForm />
    </section>
  )
}

export default SettingsPage