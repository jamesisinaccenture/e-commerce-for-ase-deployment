import { forwardRef } from "react";

import { ICustomInput } from "@/models/store.model";
import { Input } from "../ui/input";

const CustomInput = forwardRef<HTMLInputElement, ICustomInput>(
  (
    { label, name, type, onChange, isRequired, value, className, ...props },
    ref
  ) => {
    return (
      <div className="w-full">
        <Input
          className={`${className} w-full`}
          ref={ref}
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={label}
          required={isRequired}
          {...props}
        />
      </div>
    );
  }
);

export default CustomInput;
