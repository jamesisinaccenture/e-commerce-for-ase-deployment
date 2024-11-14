import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode; // Optional icon prop
  isSearch?: boolean; // Determines if it's a search input
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", icon, isSearch = false, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <span
            className={cn(
              "absolute inset-y-0 left-3 top-2 flex items-center text-muted-foreground",
              isSearch ? "hidden md:inline-block" : "bg-transparent"
            )}>
            {icon}
          </span>
        )}
        <input
          type={type}
          className={cn(
            "h-9 rounded-md border border-input px-3 py-1 pl-10 text-sm shadow-sm transition-all duration-300 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            isSearch ? "bg-[#f3f8fb] hidden md:inline-block" : "bg-transparent",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
