import { Input } from "../ui/input";
import { ICustomInput } from "@/models/store.model";

const CustomInput = ({ label }: ICustomInput) => {
  return (
    <div>
      <label>{label}</label>
      <Input />
    </div>
  );
};

export default CustomInput;
