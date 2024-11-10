// AddProduct.tsx
import { useState } from 'react';
import * as I from '../../interfaces/interfaces';
import { AddProductContainer } from './AddProductStyle';

interface AddProductProps {
  onAddProduct: (product: I.Product) => void;
}

function AddProduct({ onAddProduct }: AddProductProps) {
  const [product, setProduct] = useState<I.Product>({
    name: '',
    price: 0,
    category: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({ name: '', price: 0, category: '', description: '' });
  };

  return (
    <AddProductContainer>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) => setProduct({...product, name: e.target.value})}
        />
        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({...product, price: Number(e.target.value)})}
        />
        <input
          type="text"
          placeholder="Category"
          value={product.category}
          onChange={(e) => setProduct({...product, category: e.target.value})}
        />
        <textarea
          placeholder="Description"
          value={product.description}
          onChange={(e) => setProduct({...product, description: e.target.value})}
        />
        <button type="submit">Add Product</button>
      </form>
    </AddProductContainer>
  );
}

export default AddProduct;