
import { FieldError, UseFormRegister } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

interface InputFieldProps {
    label: string;
    id: string;
    type: string;
    accept?: string;
    defaultValue?: string;
    value?: string;
    setValue?: (val: string) => void;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: UseFormRegister<any>;
    error?: FieldError;
    validate?: (value: string) => string | boolean;

}
const InputField = ({ label, id, type = "text", accept, defaultValue, register, error, validate, value, setValue }:InputFieldProps) => {
  
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="w-full">
        <label 
            className="text-gray-800 text-small mb-2 block"
            htmlFor={id}>{label}</label>
        <div className="relative">
          {register 
            ? <input 
                className="outline-none border border-gray-400 rounded-lg w-full p-2 text-small text-gray-700 focus:border-cc-red focus:shadow focus:shadow-cc-red/40 "
                type={type !== 'password' ? type : showPassword ? 'text' : type} 
                accept={accept}
                id={id} 
                defaultValue={defaultValue}
                
                {...register(id, {validate})}
                placeholder={label}
              />
            : <input 
                className="outline-none border border-gray-400 rounded-lg w-full p-2 text-small text-gray-700 focus:border-cc-red focus:shadow focus:shadow-cc-red/40 "
                type={type !== 'password' ? type : showPassword ? 'text' : type} 
                accept={accept}
                id={id} 
                value={value}
                onChange={e => {
                  if (setValue)
                    setValue(e.target.value)
                }}
                defaultValue={defaultValue}
                placeholder={label}
              />}
          {type === 'password' && (
            <button
              className="absolute right-3 top-1/2 outline-none -translate-y-1/2 text-gray-600 text-xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword 
              ? <FaEyeSlash />
              : <FaEye />
              }
            </button>
          )}
        </div>
        <p className=" text-sm">
          {error 
          ? (<span className="text-cc-red">{error.message}</span>) 
          : (<span className="text-gray-600">-</span>)
          }
        </p>
        
    </div>
  )
}

export default InputField