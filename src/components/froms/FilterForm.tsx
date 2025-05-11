"use client";

import Button from "@/components/Button";
import InputField from "./InputField";
import { IoSearch } from "@/lib/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
    classes: string;
}

const FilterForm = ({ classes }: Props) => {

    const router = useRouter()

    const [status, setStatus] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [kilometers, setKilometers] = useState('');
    const [transmission, settransmission] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [color, setColor] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');

    const submitHandler = async (e:React.FormEvent) => {
        e.preventDefault()
     
        const filters = {
            Status: status,
            Brand: brand,
            Model: model,
            Kilometrage: kilometers,
            Transmission: transmission,
            Fuel: fuelType,
            Color: color,
            Year: year,
            Price: price,
        }
        const params = new URLSearchParams()
        Object.entries(filters).forEach(([key, value]) => {
            if (value !== '') {
                params.append(key, value.trim());
            }
        });
        router.push(`/product/search?${params.toString()}`)
    }
  return (
    <div className={`${classes} w-8/10 p-7 bg-cc-white rounded-3xl shadow-type2 mx-auto max-h-[550px] overflow-y-auto`}>
        <h2 className="text-large2 text-center mb-5">دعنا نجد سيارتك المفضلة</h2>
        <form onSubmit={submitHandler}
            className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-2.5">
            
            <div className="w-full">
                <label 
                    className="text-gray-800 text-small mb-2 block"
                    htmlFor="transmission">النظام</label>
                <select 
                    className="outline-none border border-gray-400 rounded-lg w-full p-2 text-small text-gray-700 focus:border-cc-red focus:shadow focus:shadow-cc-red/40"
                    id="transmission"
                    value={transmission}
                    onChange={e => settransmission(e.target.value)}
                >
                    <option value="">غير محدد</option>
                    <option value="autometic">أوتوماتيكي</option>
                    <option value="manual">يدوي</option>
                </select>
            </div>

            <div className="w-full">
                <label 
                    className="text-gray-800 text-small mb-2 block"
                    htmlFor="fuelType">نوع الوقود</label>
                <select 
                    className="outline-none border border-gray-400 rounded-lg w-full p-2 text-small text-gray-700 focus:border-cc-red focus:shadow focus:shadow-cc-red/40"
                    id="fuelType"
                    value={fuelType}
                    onChange={e => setFuelType(e.target.value)}
                >
                    <option value="">غير محدد</option>
                    <option value="gasoline">{'Gasoline (Petrol)'}</option>
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
            </div>

            <div className="w-full">
                <label 
                    className="text-gray-800 text-small mb-2 block"
                    htmlFor="condition">حالة السيارة</label>
                <select 
                    className="outline-none border border-gray-400 rounded-lg w-full p-2 text-small text-gray-700 focus:border-cc-red focus:shadow focus:shadow-cc-red/40"
                    id="condition"
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                >
                    <option value="">غير محدد</option>
                    <option value="new">جديدة</option>
                    <option value="used">مستعملة</option>
                </select>
            </div>


            <InputField 
                label="الماركة"
                id="brand"
                type="text"
                value={brand}
                setValue={setBrand}
            />

            <InputField 
                label="الموديل"
                id="model"
                type="text"
                value={model}
                setValue={setModel}
            />

            <InputField 
                label="سنة الصنع"
                id="year"
                type="text"
                value={year}
                setValue={setYear}
            />

            <InputField 
                label="السعر"
                id="price"
                type="text"
                value={price}
                setValue={setPrice}
            />

            <InputField 
                label="عدد الكيلومترات"
                id="kilometers"
                type="text"
                value={kilometers}
                setValue={setKilometers}
            />
            
            <InputField 
                label="اللون"
                id="color"
                type="text"
                value={color}
                setValue={setColor}
            />
            
            <Button 
                text="بحث"
                Icon={IoSearch}
                type="submit"
            />
        </form>
    </div>
  )
}

export default FilterForm