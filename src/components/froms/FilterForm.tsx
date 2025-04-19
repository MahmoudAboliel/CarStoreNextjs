"use client";

import Button from "@/components/Button";
import InputField from "./InputField";
import { IoSearch } from "@/lib/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface FilterFormProps {
    classes: string;
}
const FilterForm = ({ classes }:FilterFormProps) => {

    const { 
        register, 
        // handleSubmit, 
        formState: { errors, isSubmitting },
        // watch,
        // reset 
      } = useForm<FormData>();

    const [status, setStatus] = useState('any');
    const [brand, setBrand] = useState('any');
    const [model, setModel] = useState('any');
    const [kilometers, setKilometers] = useState('any');
    const [transmission, settransmission] = useState('any');
    const [fuelType, setFuelType] = useState('any');
    const [engineSize, setEngineSize] = useState('any');
    const [color, setColor] = useState('any');
    const [year, setYear] = useState('any');
    const [price, setPrice] = useState('any');

    const submitHandler = async (e:React.FormEvent) => {
        setBrand('')
        setModel('')
        setKilometers(kilometers)
        setEngineSize(engineSize)
        setColor(color)
        setYear(year)
        setPrice(price)
        e.preventDefault();
        console.log("selected value: ", {
            status,
            brand,
            model,
            year,
            price,
            errors,
            isSubmitting
        });
    }
  return (
    <div className={`${classes} w-8/10 p-7 bg-cc-white rounded-3xl shadow-type2 overflow-y-auto mx-auto`}>
        <h2 className="text-large2 text-center mb-5">{`Let's`} Find Your Perfect Car</h2>
        <form onSubmit={submitHandler}
            className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-end gap-2.5">
            
            <div className="w-full">
                <label 
                    className="text-gray-800 text-small mb-2 block"
                    htmlFor="transmission">Transmission</label>
                <select 
                    className="outline-none border border-gray-400 rounded-lg w-full p-2 text-small text-gray-700 focus:border-cc-red focus:shadow focus:shadow-cc-red/40"
                    id="transmission"
                    value={transmission}
                    onChange={e => settransmission(e.target.value)}
                >
                    <option value="any">Any</option>
                    <option value="autometic">Autometic</option>
                    <option value="manual">Manual</option>
                </select>
            </div>

            <div className="w-full">
                <label 
                    className="text-gray-800 text-small mb-2 block"
                    htmlFor="fuelType">Fuel Type</label>
                <select 
                    className="outline-none border border-gray-400 rounded-lg w-full p-2 text-small text-gray-700 focus:border-cc-red focus:shadow focus:shadow-cc-red/40"
                    id="fuelType"
                    value={fuelType}
                    onChange={e => setFuelType(e.target.value)}
                >
                    <option value="any">Any</option>
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
                    htmlFor="condition">Car Condition</label>
                <select 
                    className="outline-none border border-gray-400 rounded-lg w-full p-2 text-small text-gray-700 focus:border-cc-red focus:shadow focus:shadow-cc-red/40"
                    id="condition"
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                >
                    <option value="any">Any</option>
                    <option value="new">New Car</option>
                    <option value="used">Used Car</option>
                </select>
            </div>

            <InputField 
                label="Brand Name"
                id="brand"
                type="text"
                register={register}
            />

            <InputField 
                label="Car Model"
                id="model"
                type="text"
                register={register}

            />

            <InputField 
                label="Year"
                id="year"
                type="text"
                register={register}

            />

            <InputField 
                label="Price"
                id="price"
                type="text"
                register={register}

            />

            <InputField 
                label="Kilometers"
                id="kilometers"
                type="text"
                register={register}
            />

            <InputField 
                label="Fuel Type"
                id="fuelType"
                type="text"
                register={register}
            />

            <InputField 
                label="Engine Size"
                id="engineSize"
                type="text"
                register={register}
            />
            
            <InputField 
                label="Color"
                id="color"
                type="text"
                register={register}
            />
            
            <Button 
                text="Search"
                Icon={IoSearch}
                type="submit"
            />
        </form>
    </div>
  )
}

export default FilterForm