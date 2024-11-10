// AddProduct.tsx
import { useState } from 'react';
import * as I from '../../interfaces/interfaces';
import { AddProductContainer } from './AddProductStyle';

interface AddProductProps {
  onAddProduct: (product: I.Product) => void;
}

function AddProduct({ onAddProduct }: AddProductProps) {
  const [product, setProduct] = useState<I.Product>({
    id: 0,
    name: '',
    price: 0,
    category: '',
    description: ''
  });
  const [error, setError] = useState<string>('');

  const validateForm = (): boolean => {
    if (!product.name.trim()) {
      setError('Product name is required');
      return false;
    }
    if (product.price <= 0) {
      setError('Price must be greater than 0');
      return false;
    }
    if (!product.category.trim()) {
      setError('Category is required');
      return false;
    }
    if (!product.description.trim()) {
      setError('Description is required');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onAddProduct(product);
      setProduct({ id: 0, name: '', price: 0, category: '', description: '' });
      setError('');
    }
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
        <button type="submit" style={{ fontWeight: 'bold' }}>Add Product</button>
        {error && <p style={{ color: 'red', fontWeight: 'bold', margin: '10px 0 0' }}>{error}</p>}
      </form>
    </AddProductContainer>
  );
}

export default AddProduct;