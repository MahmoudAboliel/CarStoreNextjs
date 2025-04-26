
import { FieldError, UseFormRegister } from "react-hook-form";
import Image from "next/image";

interface InputImageFieldProps {
    label: string;
    id: string;
    preview: string | null;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: UseFormRegister<any>;
    error?: FieldError;
}

const InputImageField = ({ label, id, preview, register, error }: InputImageFieldProps) => {
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
            <div className="rounded-lg bg-gray-200 w-20 h-20 flex items-center justify-center">
                <span className="text-gray-500">No image</span>
            </div>
            )}
            <label
            htmlFor={id}
            className="cursor-pointer bg-cc-red text-white px-4 py-2 rounded-lg hover:bg-cc-dark transition"
            >
                Choose Image
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