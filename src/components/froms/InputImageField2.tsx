import Image from "next/image";
import { useState, ChangeEvent } from "react";

interface Props {
  label: string;
  id: string;
  onChange: (file: File | null) => void;

}

const InputImageField2 = ({ label, id, onChange }: Props) => {

  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    
    if (file) {
      const reader = URL.createObjectURL(file);
      setPreview(reader);
      onChange(file);
    } else {
      setPreview(null);
      onChange(null);
    }
  };

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
          onChange={handleFileChange}
        />
      </div>
    </div>  
  );
};

export default InputImageField2;