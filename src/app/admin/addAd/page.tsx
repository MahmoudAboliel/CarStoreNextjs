import AddAdForm from "@/components/froms/AddAdForm"
import SectionHeader from "@/components/sections/SectionHeader"
import { cookies } from "next/headers"

const AddAdPage = async () => {

  const token = (await cookies()).get('token')?.value
  return (
    <section>
        <SectionHeader 
            subtitle="المسؤول"
            title="لوحة التحكم"
            span="إضافة إعلان"
        />
        <AddAdForm 
          token={token || ''}
        />
    </section>
  )
}

export default AddAdPage