"use client";

import Button from "@/components/Button";
import InputField from "./InputField";
import { IoAddCircle } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddProductSchema } from "@/lib/validation";
import InputImageField from "./InputImageField";
import { editSettings } from "@/lib/apiCalls/adminAPIsCall";

interface EditProductFormProps {
    img1: string;
    img2: string;
    img3: string;
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
    description: string;
    city: string;
}

interface Props {
    classes: string;
    token: string;
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
    description: string;
    city: string;
}
interface AllProps {
    defaultValue: EditProductFormProps;
    other: Props;
}
const EditProductForm = ({ other: { classes, token }, defaultValue }: AllProps) => {

    const { 
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting },
        // reset 
        watch
      } = useForm<FormData>({
        resolver: zodResolver(AddProductSchema),
        defaultValues: {
            brand: defaultValue.brand,
            model: defaultValue.model,
            price: defaultValue.price,
            year: defaultValue.year,
            color: defaultValue.color,
            status: defaultValue.status,
            kilometers: defaultValue.kilometers,
            transmission: defaultValue.transmission,
            fuelType: defaultValue.fuelType,
            engineSize: defaultValue.engineSize,
            description: defaultValue.description,
            city: defaultValue.city,
        }
      });

    const onSubmit = async (data: FormData) => {
        console.log(data, token);
        const formData = new FormData();

        if (data.img1?.[0])
            formData.append("File1", data.img1[0])
        if (data.img2?.[0])
            formData.append("File2", data.img2[0])
        if (data.img3?.[0])
            formData.append("File3", data.img3[0])
        formData.append("Brand", data.brand)
        formData.append("Model", data.model)
        formData.append("Price", data.price)
        formData.append("Year", data.year)
        formData.append("Status", data.status)
        formData.append("Color", data.color)
        formData.append("Kilomtrage", data.kilometers)
        formData.append("Fuel", data.fuelType)
        formData.append("Engine", data.engineSize)
        formData.append("Transmission", data.transmission)
        formData.append("City", data.city)
        formData.append("Description", data.description)
        
        await editSettings(token, formData)
        // window.location.reload()
    }
    
  return (
    <div className={`${classes} overflow-y-auto mx-auto`}>
        <form onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-2.5">
            <div className="col-span-full">
                        
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 w-full">
                    <InputImageField 
                        label="الصورة الأولى"
                        id="img1"
                        watch={watch}
                        register={register}
                        error={errors.img1}
                    />
                    <InputImageField 
                        label="الصورة الثانية"
                        id="img2"
                        watch={watch}
                        register={register}
                        error={errors.img2}
                    />
                    <InputImageField 
                        label="الصورة الثالثة"
                        id="img3"
                        watch={watch}
                        register={register}
                        error={errors.img3}
                    />                    
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

export default EditProductForm;