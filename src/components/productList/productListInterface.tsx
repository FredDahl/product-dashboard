// productListInterface.tsx
import { useState } from 'react'
// Components
import ProductListItem from '../productListItem/productListItem'
// Styled Components
import { Container } from './productListInterfaceStyle'
// Mockup Data
import { products } from '../../mockupData/mockupData';

function ProductListInterface() {
  const [count, setCount] = useState(0)

  return (
      <Container>
        <h1>Product List</h1>
        <div className="products-grid">
        {products.map((product, index) => (
          <ProductListItem 
            key={index}
            product={product}
          />
        ))}
      </div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
      </Container>
  )
}

export default ProductListInterface
