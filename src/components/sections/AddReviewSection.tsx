import AddReviewForm from "@/components/froms/AddReviewForm";

interface AddReviewSectionProps {
    carId: number;
}

const AddReviewSection = ({ carId }: AddReviewSectionProps) => {
  return (
    <div className="">
        <h2 className="font-semibold text-right text-2xl md:text-3xl mb-3">أترك تعليقاً</h2>
        <AddReviewForm 
            carId={carId}
        />
    </div>
  );
}

export default AddReviewSection;