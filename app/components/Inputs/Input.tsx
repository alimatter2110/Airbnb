"use client";

import { FieldErrors, UseFormRegister, FieldValues } from "react-hook-form";
import { FaDollarSign } from "react-icons/fa";

interface InputProps {
  id: string;
  type?: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  formatedPrice?: boolean;
  errors: FieldErrors;
  register?: UseFormRegister<FieldValues>;
}

const Input: React.FC<InputProps> = ({
  id,
  type = "text",
  label,
  errors,
  required,
  disabled,
  register,
  formatedPrice,
}) => {
  return (
    <div className="w-full relative">
      {formatedPrice ? (
        <FaDollarSign className="absolute top-7 left-1.5 text-zinc-400" />
      ) : null}

      <input
        id={id}
        className={` pl-4 w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed 
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${
            errors[id] ? "focus:border-rose-500" : "focus:border-neutral-300"
          } `}
        placeholder=""
        type={type}
        {...register(id, { required })}
        disabled={disabled}
      />
      <label
        className={`left-4 absolute text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus-translate-y-4
            ${errors[id] ? "text-rose-500" : "text-zinc-400"}
            `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
