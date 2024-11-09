// productList.tsx
import { useState } from 'react'
// Styled Components
import { Container } from './productListStyle'

function ProductList() {
  const [count, setCount] = useState(0)

  return (
      <Container>
        <h1>Product List</h1>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
      </Container>
  )
}

export default ProductList
