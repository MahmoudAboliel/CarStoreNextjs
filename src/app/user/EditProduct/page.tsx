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
              classes="relative" 
              token="asdf"
              // img1={""} 
              // img2={""} 
              // img3={""} 
              // status={""} 
              // brand={""} 
              // model={""} 
              // year={""} 
              // kilometers={""} 
              // transmission={""} 
              // fuelType={""} 
              // engineSize={""} 
              // color={""} 
              // price={""}
            />
        </div>
    </section>
  );
}

export default EditProduct;