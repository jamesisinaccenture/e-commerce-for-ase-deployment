import { ICustomInput } from "@/models/store.model";
import { Input } from "../ui/input";
import { forwardRef } from "react";

const CustomInput = forwardRef<HTMLInputElement, ICustomInput>(
  ({ label, name, type, onChange, isRequired, value = "", ...props }, ref) => {
    return (
      <div>
        <Input
          ref={ref}
          name={name}
          type={type}
          value={value}
          placeholder={label}
          onChange={onChange}
          required={isRequired}
          {...props}
        />
      </div>
    );
  }
);

export default CustomInput;
