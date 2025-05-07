
import { FieldError, UseFormRegister, UseFormWatch } from "react-hook-form";
import Image from "next/image";
import { useEffect, useState } from "react";

interface InputImageFieldProps {
    label: string
    id: string
    defaultImage?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: UseFormRegister<any>
    error?: FieldError
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    watch: UseFormWatch<any>
}

const InputImageField = ({ label, id, defaultImage, register, error, watch }: InputImageFieldProps) => {
    
    const [preview, setPreview] = useState<string | null>(defaultImage || null);

    useEffect(() => {
        const file = watch(id)?.[0];
      
        if (file) {
          const reader = URL.createObjectURL(file);
          setPreview(reader);
          return () => URL.revokeObjectURL(reader);
        } else {
          setPreview(null);
        }
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [watch(id)]);

    return (
        <div>
            <label className="block text-gray-800 text-small mb-2">{label}</label>
            <div className="flex items-center gap-4">
                {preview ? (
                <Image
                    src={preview}
                    alt="Preview"
                    width={80}
                    height={80}
                    className="rounded-lg object-fit w-20 h-20"
                />
                ) : (
                <div className="rounded-lg bg-gray-200 w-20 h-20 text-center flex items-center justify-center">
                    <span className="text-gray-500">لا يوجد صورة</span>
                </div>
                )}
                <label
                htmlFor={id}
                className="cursor-pointer bg-cc-red text-center text-white px-4 py-2 rounded-lg hover:bg-cc-dark transition"
                >
                اختر صورة
                </label>
                <input
                type="file"
                id={id}
                accept="image/*"
                className="hidden"
                {...register(id)}
                />
            </div>
            {error && (
                <p className="text-cc-red text-sm mt-1">{error.message}</p>
            )}
        </div>  
    )
}

export default InputImageField