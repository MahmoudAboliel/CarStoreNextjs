import SectionHeader from "@/components/sections/SectionHeader";
import AddProductForm from "@/components/froms/AddProductForm";
import { cookies } from "next/headers";

const AddProduct = async () => {
  const token = (await cookies()).get('token')?.value || ''
  return (
    <section>
        <div className="container mx-auto">
            <SectionHeader 
                subtitle="المستخدم"
                title="لوحة التحكم"
                span="إضافة منتج"
            />
            <AddProductForm 
                classes="relative"
                token={token}
            />
        </div>
    </section>
  );
}

export default AddProduct;