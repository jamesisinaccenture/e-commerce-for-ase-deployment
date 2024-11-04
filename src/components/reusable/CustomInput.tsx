import { Input } from "../ui/input";
import { ICustomInput } from "@/models/store.model";

const CustomInput = ({ label, name, type }: ICustomInput) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Input name={name} type={type} required />
    </div>
  );
};

export default CustomInput;
