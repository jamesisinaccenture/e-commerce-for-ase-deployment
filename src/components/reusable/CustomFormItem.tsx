import { FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";

interface IFormItem {
  label: string;
  className?: string;
  children: any;
}

const CustomFormItem = ({ label, className, children }: IFormItem) => {
  return (
    <FormItem className="relative">
      <FormLabel>{label}</FormLabel>
      <FormControl className={className}>{children}</FormControl>
      <div className="absolute -bottom-4 right-0">
        <FormMessage className="text-[10px] italic" />
      </div>
    </FormItem>
  );
};

export default CustomFormItem;
