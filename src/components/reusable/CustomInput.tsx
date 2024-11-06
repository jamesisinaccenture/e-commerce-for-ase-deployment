import { ICustomInput } from "@/models/store.model";
import { Input } from "../ui/input";

const CustomInput = ({ label, name, type, onChange }: ICustomInput) => {
  return (
    <div>
      <Input name={name} type={type} placeholder={label} onChange={onChange} />
    </div>
  );
};

export default CustomInput;
