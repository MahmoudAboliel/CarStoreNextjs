import SectionHeader from "@/components/sections/SectionHeader";
import AddProductForm from "@/components/froms/AddProductForm";

const AddProduct = () => {
  return (
    <section>
        <div className="container mx-auto">
            <SectionHeader 
                subtitle="New Product"
                title="Add your latest"
                span="cars"
            />
            <AddProductForm 
                classes="relative"
            />
        </div>
    </section>
  );
}

export default AddProduct;