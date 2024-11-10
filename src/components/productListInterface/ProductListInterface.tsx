// ProductListInterface.tsx
import { useState, useMemo } from 'react'
// Components
import ProductListItem from '../productListItem/ProductListItem'
import AddProduct from '../addProduct/AddProduct'
// Interfaces
import * as I from '../../interfaces/interfaces'
// Styled Components
import { Container, FilterContainer, FilterRowContainer, FilterSelect, FilterInput } from './ProductListInterfaceStyle'
// Mockup Data
import { products as initialProducts } from '../../mockupData/mockupData';

function ProductListInterface() {
  const [products, setProducts] = useState<I.Product[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [nameFilter, setNameFilter] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState<string>('');

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
    return products.filter(product => {
      // Category filter
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

      // Name filter (case-insensitive)
      const matchesName = product.name.toLowerCase().includes(nameFilter.toLowerCase());

      // Price filter (less than or equal to entered price)
      const matchesPrice = !priceFilter || product.price <= Number(priceFilter);

      return matchesCategory && matchesName && matchesPrice;
    });
  }, [products, selectedCategory, nameFilter, priceFilter]);

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

      <FilterContainer>
        {/* Using select for category as it has a finite set of predefined options,
            while name and price filters use inputs to allow for flexible, user-defined search criteria */}
        <FilterRowContainer>
          <label>Filter by Category: </label>
          <FilterSelect
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
            <option key={category} value={category} >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
          </FilterSelect>
        </FilterRowContainer>

        <FilterRowContainer>
          <label>Filter by Name: </label>
          <FilterInput
            type="text"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            placeholder="Search by product name"
          />
        </FilterRowContainer>

        <FilterRowContainer>
          <label>Filter by Max Price: </label>
          <FilterInput
            type="number"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            placeholder="Maximum price"
            onKeyDown={(e) => {
              if (e.key === 'e' || e.key === 'E') {
                e.preventDefault();
              }
            }}
          />
        </FilterRowContainer>
      </FilterContainer>

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
