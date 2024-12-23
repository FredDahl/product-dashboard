// ProductListInterface.tsx
import { useState, useMemo } from 'react'
// Components
import ProductListItem from '../productListItem/ProductListItem'
import AddProduct from '../addProduct/AddProduct'
// Interfaces
import * as I from '../../interfaces/interfaces'
// Layout
import { LayoutMode } from '../../styles/Layout'
// Styled Components
import { Container, FilterContainer, FilterRowContainer, FilterSelect, FilterInput, ProductListContainer, LayoutToggle, SidebarContainer, MainContentContainer } from './ProductListInterfaceStyle'
// Mockup Data
import { products as initialProducts } from '../../mockupData/mockupData';
// Imported Hooks
import { useProductFilters } from '../../hooks/UseProductFilters';


const ProductListInterface: React.FC = () => {
  const [products, setProducts] = useState<I.Product[]>(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [nameFilter, setNameFilter] = useState<string>('');
  const [priceFilter, setPriceFilter] = useState<string>('');
  const [layoutMode, setLayoutMode] = useState<LayoutMode>('compact');

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
  const filteredProducts = useProductFilters({
    products,
    selectedCategory,
    nameFilter,
    priceFilter
  });

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

  const toggleLayout = () => {
    setLayoutMode(prev => prev === 'compact' ? 'expanded' : 'compact');
  };

  return (
    <>
      <LayoutToggle onClick={toggleLayout}>
        {layoutMode === 'compact' ? 'Switch to Expanded' : 'Switch to Compact'}
      </LayoutToggle>
      <Container layoutMode={layoutMode}>
        {layoutMode === 'expanded' ? (
          // Expanded Layout
          <>
            <SidebarContainer>
              <h1>Product List</h1>
              <AddProduct onAddProduct={handleAddProduct} />
              <FilterContainer>
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
            </SidebarContainer>

            <MainContentContainer>
              <ProductListContainer layoutMode={layoutMode}>
                {filteredProducts.map((product, index) => (
                  <ProductListItem
                    key={index}
                    product={product}
                    onDelete={() => handleDeleteProduct(product)}
                    onUpdate={handleUpdateProduct}
                  />
                ))}
              </ProductListContainer>
            </MainContentContainer>
          </>
        ) : (
          // Compact Layout
          <>
            <h1>Product List</h1>
            <AddProduct onAddProduct={handleAddProduct} />
            <FilterContainer>
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
            <ProductListContainer layoutMode={layoutMode}>
              {filteredProducts.map((product, index) => (
                <ProductListItem
                  key={index}
                  product={product}
                  onDelete={() => handleDeleteProduct(product)}
                  onUpdate={handleUpdateProduct}
                />
              ))}
            </ProductListContainer>
          </>
        )}
      </Container>
    </>
  );
};

export default ProductListInterface
