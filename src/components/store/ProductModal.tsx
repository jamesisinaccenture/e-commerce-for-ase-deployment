import React, { useState } from "react";

import ProductModalProps from "@/components/store/ProductModal";

type Product = {
  id: string;
  name: string;
  image: string;
  brand: string;
  battery: string;
  ram: string;
  variants: string[];
  description: string;
};

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          X
        </button>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} className="product-image" />
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>Battery:</strong> {product.battery}
        </p>
        <p>
          <strong>RAM:</strong> {product.ram}
        </p>
        <p>
          <strong>Variants:</strong> {product.variants.join(", ")}
        </p>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

interface AllProductsProps {
  products: Product[];
}

const AllProducts: React.FC<AllProductsProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="all-products">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleProductClick(product)}
          className="product-card"
        >
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h3 className="product-name">{product.name}</h3>
        </div>
      ))}

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default AllProducts;
