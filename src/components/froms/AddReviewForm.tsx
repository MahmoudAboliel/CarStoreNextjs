"use client";

import InputField from "@/components/froms/InputField";
import Button from "@/components/Button";
import { IoSend, IoStarSharp } from "@/lib/utils";
import { AddReviewSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { addReview } from "@/lib/apiCalls/PublicAPIsCall";
import Textarea from "./Textarea";

type FormData = {
    userName: string;
    content: string;
    phoneNumber: string;
}
interface Props {
    carId: number;
    classes?: string;
}

const AddReviewForm = ({ carId, classes }: Props) => {

    // const router = useRouter();
    const [stars, setStars] = useState(1);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        // reset
    } = useForm<FormData>({
        resolver: zodResolver(AddReviewSchema)
    });

    
    const onSubmit = async (data: FormData) => { 
        await addReview(data.userName, data.phoneNumber, data.content, stars, carId)
    }   

  return (
    <form 
        className={`${classes} flex flex-col gap-4 w-full text-right`}
        onSubmit={handleSubmit(onSubmit)}
        noValidate>
        <div>
            <label className="text-sm text-gray-600 ">تقييمك</label>
            <div className="flex gap-2 items-center justify-end my-2">
                {[...Array(5)].map((_, index) => 
                <button type="button" key={index}
                    onClick={() => setStars(index + 1)}
                >
                    <IoStarSharp 
                    className={`${index < stars ? 'text-yellow-500' : 'text-gray-400'} text-xl`}
                    />
                </button>
                )}
            </div>
        </div>
        <InputField 
            label="الاسم"
            id="userName"
            type="text"
            register={register}
            error={errors.userName}
        />
        <InputField 
            label="رقم الهاتف"
            id="phoneNumber"
            type="text"
            register={register}
            error={errors.phoneNumber}
        />
        <Textarea 
            label="المحتوى"
            id="content"
            register={register}
            error={errors.content}
        />
        <Button 
            text="إرسال"
            type="submit"
            Icon={IoSend}
            disabled={isSubmitting}
            reverse={true}
        />
    </form>
  );
}

export default AddReviewForm;