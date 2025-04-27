import SectionHeader from "@/components/sections/SectionHeader";
import EditProductForm from "@/components/froms/EditProductForm";

const EditProduct = () => {
  return (
    <section>
        <div className="container mx-auto">
            <SectionHeader 
                subtitle="Edit Product"
                title="Edit your"
                span="Product"
            />
            {/* <EditProductForm 
                classes="relative"

            /> */}
        </div>
    </section>
  );
}

export default EditProduct;