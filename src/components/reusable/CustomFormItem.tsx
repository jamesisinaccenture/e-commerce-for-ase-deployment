import { FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";

interface IFormItem {
  label: string;
  children: any;
}

const CustomFormItem = ({ label, children }: IFormItem) => {
  return (
    <FormItem className="relative ">
      <FormLabel>{label}</FormLabel>
      <FormControl>{children}</FormControl>
      <div className="absolute -bottom-4 right-0">
        <FormMessage className="text-[10px] italic" />
      </div>
    </FormItem>
  );
};

export default CustomFormItem;
