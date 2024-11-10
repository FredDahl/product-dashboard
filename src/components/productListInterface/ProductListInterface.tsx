// ProductListInterface.tsx
import { useState, useMemo } from 'react'
// Components
import ProductListItem from '../productListItem/ProductListItem'
import AddProduct from '../addProduct/AddProduct'
// Interfaces
import * as I from '../../interfaces/interfaces'
// Styled Components
import { Container } from './ProductListInterfaceStyle'
// Mockup Data
import { products as initialProducts } from '../../mockupData/mockupData';

function ProductListInterface() {
  const [products, setProducts] = useState<I.Product[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = new Set(products.map(product => product.category));
    return ['all', ...Array.from(uniqueCategories)];
  }, [products]);

  // Handle Add Product
  // put the new product first and then spread the existing products,
  // so the new product is at the top of the list.
  const handleAddProduct = (newProduct: I.Product) => {
    setProducts([newProduct, ...products]);
  };

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') return products;
    return products.filter(product => product.category === selectedCategory);
  }, [products, selectedCategory]);

  const handleDeleteProduct = (productToDelete: I.Product) => {
    setProducts(products.filter(product => product !== productToDelete));
  };

  // Updates a single product in the products array by matching IDs.
  // Creates a new array with the updated product replacing the old one.
  const handleUpdateProduct = (updatedProduct: I.Product) => {
    setProducts(products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };

  return (
    <Container>
      <h1>Product List</h1>
      <AddProduct onAddProduct={handleAddProduct} />
      
      <div style={{ margin: '20px 0' }}>
        <label>Filter by Category: </label>
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category} >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div>
        {filteredProducts.map((product, index) => (
          <ProductListItem 
            key={index}
            product={product}
            onDelete={() => handleDeleteProduct(product)}
            onUpdate={handleUpdateProduct}
          />
        ))}
      </div>
    </Container>
  )
}

export default ProductListInterface
