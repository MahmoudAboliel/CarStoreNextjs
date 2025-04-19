import AddAdForm from "@/components/froms/AddAdForm"
import SectionHeader from "@/components/sections/SectionHeader"

const AddAdPage = () => {
  return (
    <section>
        <SectionHeader 
            subtitle="Admin"
            title="Dashboard"
            span="Add Ad"
        />
        <AddAdForm />
    </section>
  )
}

export default AddAdPage