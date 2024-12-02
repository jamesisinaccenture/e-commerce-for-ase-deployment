import { forwardRef } from "react";

import { ICustomInput } from "@/models/store.model";

const CustomCheckBox = forwardRef<HTMLInputElement, ICustomInput>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        className="shadow-md accent-store-primary cursor-pointer hover:accent-store-primary/80"
        {...props}
      />
    );
  }
);

export default CustomCheckBox;
