
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
    label: string;
    id: string;
    value?: string;
    placehoalder?: string;
    setValue?: (val: string) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: UseFormRegister<any>;
    error?: FieldError;
    validate?: (value: string) => string | boolean;

}
const Textarea = ({ label, id, error, register, validate, placehoalder, value, setValue }:InputFieldProps) => {
  
  return (
    <div className="w-full">
        <label 
            className="text-small mb-2 block"
            htmlFor={id}>{label}</label>
        {register 
          ? <textarea 
              className="outline-none resize-none border border-gray-400 rounded-lg w-full p-2 text-small text-gray-700 focus:border-cc-red focus:shadow focus:shadow-cc-red/40 "
              id={id} 
              rows={4}
              {...register(id, {validate})}
              placeholder={placehoalder}
            />
          : <textarea 
              className="outline-none resize-none border border-gray-400 rounded-lg w-full p-2 text-small text-gray-700 focus:border-cc-red focus:shadow focus:shadow-cc-red/40 "
              id={id} 
              rows={4}
              value={value}
              onChange={e => setValue && setValue(e.target.value)}
              placeholder={placehoalder}
            />
           }
      <p className=" text-sm">
            {error 
            ? (<span className="text-cc-red">{error.message}</span>) 
            : (<span className="text-gray-400">-</span>)
            }
      </p>
    </div>
  )
}

export default Textarea