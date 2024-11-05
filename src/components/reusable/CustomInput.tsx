import { Input } from "../ui/input";
import { ICustomInput } from "@/models/store.model";

const CustomInput = ({ label, name, type }: ICustomInput) => {
  return (
    <div>
      <Input name={name} type={type} placeholder={label} required />
    </div>
  );
};

export default CustomInput;
