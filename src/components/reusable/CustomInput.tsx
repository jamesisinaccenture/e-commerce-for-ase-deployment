import { Input } from "../ui/input";
import { ICustomInput } from "@/models/store.model";

const CustomInput = ({ label, name }: ICustomInput) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Input name={name} />
    </div>
  );
};

export default CustomInput;
