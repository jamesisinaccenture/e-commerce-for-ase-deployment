// src/components/ui/ProductBadge.tsx
import React from "react";

interface ProductBadgeProps {
  className?: string;
  children: React.ReactNode;
}

const ProductBadge: React.FC<ProductBadgeProps> = ({
  className = "",
  children,
}) => (
  <span
    className={`inline-block px-2 py-1 text-xs font-semibold text-white rounded ${className}`}
  >
    {children}
  </span>
);

export default ProductBadge;
