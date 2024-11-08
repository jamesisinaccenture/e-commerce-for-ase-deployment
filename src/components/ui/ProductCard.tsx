// src/components/ui/ProductCard.tsx
import React from "react";

interface ProductCardProps {
  className?: string;
  children: React.ReactNode;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  className = "",
  children,
}) => (
  <div className={`bg-white shadow-md rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

interface CardHeaderProps {
  children: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children }) => (
  <div className="p-4 border-b border-gray-200">{children}</div>
);

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = "",
}) => (
  <div className={`p-4 border-t border-gray-200 ${className}`}>{children}</div>
);
