// AddProduct.tsx
import { useState } from 'react';
import * as I from '../../interfaces/interfaces';
import { AddProductContainer } from './AddProductStyle';
import { BaseInput, BaseTextArea, BaseButton } from '../../styles/SharedStyledComponents';

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
        <BaseInput
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) => setProduct({...product, name: e.target.value})}
        />
        <BaseInput
          type="number"
          placeholder="Price"
          value={product.price || ''}
          onFocus={() => product.price === 0 && setProduct({...product, price: null as any})}
          onChange={(e) => setProduct({...product, price: Number(e.target.value)})}
          // Prevents the user from entering 'e' or 'E' (HTML type="number") in the price input
          onKeyDown={(e) => {
            if (e.key === 'e' || e.key === 'E') {
              e.preventDefault();
            }
          }}
        />
        <BaseInput
          type="text"
          placeholder="Category"
          value={product.category}
          onChange={(e) => setProduct({...product, category: e.target.value})}
        />
        <BaseTextArea
          placeholder="Description"
          value={product.description}
          onChange={(e) => setProduct({...product, description: e.target.value})}
        />
        <BaseButton type="submit">Add Product</BaseButton>
        {error && <p style={{ color: 'red', fontWeight: 'bold', margin: '10px 0 0' }}>{error}</p>}
      </form>
    </AddProductContainer>
  );
}

export default AddProduct;