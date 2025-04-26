"use client";

import Button from "@/components/Button";
import InputField from "./InputField";
import { IoAddCircle } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddProductSchema } from "@/lib/validation";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import InputImageField from "./InputImageField";

interface AddProductFormProps {
    classes: string;
}

type FormData = {
    img1?: FileList;
    img2?: FileList;
    img3?: FileList;
    status: string;
    brand: string;
    model: string;
    year: string;
    kilometers: string;
    transmission: string;
    fuelType: string;
    engineSize: string;
    color: string;
    price: string;
}
const AddProductForm = ({ classes }:AddProductFormProps) => {

    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting },
        // reset 
        watch
      } = useForm<FormData>({
        resolver: zodResolver(AddProductSchema)
      });

    const onSubmit = async (data: FormData) => {
        console.log(data);

        await axios.post("");
    }

    const [preview1, setPreview1] = useState<string | null>(null);
    const [preview2, setPreview2] = useState<string | null>(null);
    const [preview3, setPreview3] = useState<string | null>(null);
    
    useEffect(() => {
      const file1 = watch("img1")?.[0];
    
      if (file1) {
        const reader1 = URL.createObjectURL(file1);
        setPreview1(reader1);
        return () => URL.revokeObjectURL(reader1);
      } else {
        setPreview1(null);
      }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watch("img1")]);
    
    useEffect(() => {
      const file2 = watch("img2")?.[0];
    
      if (file2) {
        const reader2 = URL.createObjectURL(file2);
        setPreview2(reader2);
        return () => URL.revokeObjectURL(reader2);
      } else {
        setPreview2(null);
      }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watch("img2")]);
    
    useEffect(() => {
      const file3 = watch("img3")?.[0];
    
      if (file3) {
        const reader3 = URL.createObjectURL(file3);
        setPreview3(reader3);
        return () => URL.revokeObjectURL(reader3);
      } else {
        setPreview3(null);
      }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watch("img3")]);
    
  return (
    <div className={`${classes} overflow-y-auto mx-auto`}>
        <form onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-2.5">
            <div className="col-span-full">
                        
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 w-full">
                    <InputImageField 
                        label="Image Test"
                        id="img1"
                        preview={preview1}
                        register={register}
                        error={errors.img1}
                    />
                    <div>
                        <label className="block text-gray-800 text-small mb-2">Image One</label>
                        <div className="flex items-center gap-4">
                            {preview1 ? (
                            <Image
                                src={preview1}
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
                            htmlFor="img1"
                            className="cursor-pointer bg-cc-red text-white px-4 py-2 rounded-lg hover:bg-cc-dark transition"
                            >
                            Choose Image
                            </label>
                            <input
                            type="file"
                            id="img1"
                            accept="image/*"
                            className="hidden"
                            {...register("img1")}
                            />
                        </div>
                        {errors.img1 && (
                            <p className="text-cc-red text-sm mt-1">{errors.img1.message}</p>
                        )}
                    </div>
    
                    <div>
                        <label className="block text-gray-800 text-small mb-2">Image Two</label>
                        <div className="flex items-center gap-4">
                            {preview2 ? (
                            <Image
                                src={preview2}
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
                            htmlFor="img2"
                            className="cursor-pointer bg-cc-red text-white px-4 py-2 rounded-lg hover:bg-cc-dark transition"
                            >
                            Choose Image
                            </label>
                            <input
                            type="file"
                            id="img2"
                            accept="image/*"
                            className="hidden"
                            {...register("img2")}
                            />
                        </div>
                        {errors.img2 && (
                            <p className="text-cc-red text-sm mt-1">{errors.img2.message}</p>
                        )}
                    </div>
    
                    <div>
                        <label className="block text-gray-800 text-small mb-2">Image Three</label>
                        <div className="flex items-center gap-4">
                            {preview3 ? (
                            <Image
                                src={preview3}
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
                            htmlFor="img3"
                            className="cursor-pointer bg-cc-red text-white px-4 py-2 rounded-lg hover:bg-cc-dark transition"
                            >
                            Choose Image
                            </label>
                            <input
                            type="file"
                            id="img3"
                            accept="image/*"
                            className="hidden"
                            {...register("img3")}
                            />
                        </div>
                        {errors.img3 && (
                            <p className="text-cc-red text-sm mt-1">{errors.img3.message}</p>)}
                    </div>
                </div>
            </div>
            <div className="w-full">
                <label 
                    className="text-gray-800 text-small mb-2 block"
                    htmlFor="transmission">Transmission</label>
                <select 
                    className="outline-none border border-gray-400 rounded-lg w-full p-2 text-small text-gray-700 focus:border-cc-red focus:shadow focus:shadow-cc-red/40"
                    id="transmission"
                    {...register("transmission")}
                >
                    <option value="autometic" defaultChecked>Autometic</option>
                    <option value="manual">Manual</option>
                </select>
                {errors.transmission && (
                    <p className="mt-1 text-sm text-cc-red">
                        {errors.transmission.message}
                    </p>
                )}
            </div>

            <div className="w-full">
                <label 
                    className="text-gray-800 text-small mb-2 block"
                    htmlFor="fuelType">Fuel Type</label>
                <select 
                    className="outline-none border border-gray-400 rounded-lg w-full p-2 text-small text-gray-700 focus:border-cc-red focus:shadow focus:shadow-cc-red/40"
                    id="fuelType"
                    {...register("fuelType")}
                >
                    <option value="gasoline" defaultChecked>{'Gasoline (Petrol)'}</option>
                    <option value="diesel">{'Diesel'}</option>
                    <option value="electricity">{'Electricity'}</option>
                    <option value="hybrid">{'Hybrid'}</option>
                    <option value="PHEV">{'Plug-in Hybrid'}</option>
                    <option value="LPG">{'Liquefied Petroleum Gas'}</option>
                    <option value="CNG">{'Compressed Natural Gas'}</option>
                    <option value="FCEV">{'Hydrogen Fuel Cell'}</option>
                    <option value="biofuels">{'Biofuels'}</option>
                    <option value="e85">{'E85 (Ethanol Flex fuel)'}</option>
                </select>
                {errors.fuelType && (
                    <p className="mt-1 text-sm text-cc-red">
                        {errors.fuelType.message}
                    </p>
                )}
            </div>

            <div className="w-full">
                <label 
                    className="text-gray-800 text-small mb-2 block"
                    htmlFor="status">Car Status</label>
                <select 
                    className="outline-none border border-gray-400 rounded-lg w-full p-2 text-small text-gray-700 focus:border-cc-red focus:shadow focus:shadow-cc-red/40"
                    id="status"
                    {...register("status")}
                >
                    <option value="new" defaultChecked>New Car</option>
                    <option value="used">Used Car</option>
                </select>
                {errors.status && (
                    <p className="mt-1 text-sm text-cc-red">
                        {errors.status.message}
                    </p>
                )}
            </div>

            <InputField 
                label="Brand Name"
                id="brand"
                type="text"
                register={register}
                error={errors.brand}
            />

            <InputField 
                label="Car Model"
                id="model"
                type="text"
                register={register}
                error={errors.model}

            />

            <InputField 
                label="Year"
                id="year"
                type="text"
                register={register}
                error={errors.year}

            />

            <InputField 
                label="Price"
                id="price"
                type="text"
                register={register}
                error={errors.price}

            />

            <InputField 
                label="Kilometers"
                id="kilometers"
                type="text"
                register={register}
                error={errors.kilometers}
            />

            <InputField 
                label="Engine Size"
                id="engineSize"
                type="text"
                register={register}
                error={errors.engineSize}
            />
            
            <InputField 
                label="Color"
                id="color"
                type="text"
                register={register}
                error={errors.color}
            />
            
            <Button 
                text="Add"
                Icon={IoAddCircle}
                type="submit"
                disabled={isSubmitting}
            />
        </form>
    </div>
  );
}

export default AddProductForm;