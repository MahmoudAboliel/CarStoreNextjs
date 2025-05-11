import SectionHeader from "@/components/sections/SectionHeader";
import EditProductForm from "@/components/froms/EditProductForm";

const EditProduct = () => {
  return (
    <section>
        <div className="container mx-auto">
            <SectionHeader 
                subtitle="المستخدم"
                title="لوحة التحكم"
                span="تعديل المنتج"
            />
            <EditProductForm 
              defaultValue={{
                img1: "",
                img2: "",
                img3: "",
                brand: "",
                model: "",
                year: "",
                price: "",
                status: "",
                description: "",
                kilometers: '',
                transmission: '',
                fuelType: '',
                engineSize: '',
                color: '',
                city: ''

              }} 
              other={{
                classes: 'relative',
                token: ''
              }}              
              
            />
        </div>
    </section>
  );
}

export default EditProduct;