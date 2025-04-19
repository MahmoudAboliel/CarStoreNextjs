import AddReviewForm from "@/components/froms/AddReviewForm";

interface AddReviewSectionProps {
    userId: string;
}

const AddReviewSection = ({ userId }: AddReviewSectionProps) => {
  return (
    <div className="">
        <h2 className="font-semibold text-2xl md:text-3xl mb-3">Leave A Review</h2>
        <AddReviewForm 
            userId={userId}
        />
    </div>
  );
}

export default AddReviewSection;