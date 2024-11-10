// ProductListItem.tsx
// Interfaces
import * as I from "../../interfaces/interfaces"
// Styled Components
import { ProductItem } from './ProductListItemStyle'

  function ProductListItem({ product }: { product: I.Product }) {
    return (
      <ProductItem>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <p>{product.description}</p>
      </ProductItem>
    );
  }
  
  export default ProductListItem;