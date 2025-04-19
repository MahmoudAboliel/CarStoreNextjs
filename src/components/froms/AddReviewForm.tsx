"use client";

import InputField from "@/components/froms/InputField";
import Button from "@/components/Button";
import { IoSend, IoStarSharp } from "@/lib/utils";
import { AddReviewSchema } from "@/lib/validation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { loginFunc } from "@/lib/apiCalls/authApiCalls";
import { useState } from "react";

type FormData = {
    userName: string;
    content: string;
    phoneNumber: string;
}
interface AddReviewForm {
    userId: string;
}

const AddReviewForm = ({ userId }: AddReviewForm) => {

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
        console.log(data, userId)
        
    }   

  return (
    <form 
        className="flex flex-col gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
        noValidate>
        <div>
            <label className="text-sm text-gray-600 ">Your Rating</label>
            <div className="flex gap-2 items-center my-2">
                {[...Array(5)].map((_, index) => 
                <button key={index}
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
            label="Name"
            id="userName"
            type="text"
            register={register}
            error={errors.userName}
        />
        <InputField 
            label="Phone Number"
            id="phoneNumber"
            type="text"
            register={register}
            error={errors.phoneNumber}
        />
        <InputField 
            label="Content"
            id="content"
            type="text"
            register={register}
            error={errors.content}
        />
        <Button 
            text="Add"
            type="submit"
            Icon={IoSend}
            disabled={isSubmitting}
            reverse={true}
        />
    </form>
  );
}

export default AddReviewForm;