import { ICustomInput } from "@/models/store.model";
import { Input } from "../ui/input";

const CustomInput = ({ label, name, type }: ICustomInput) => {
  return (
    <div>
      <Input name={name} type={type} placeholder={label} />
    </div>
  );
};

export default CustomInput;
