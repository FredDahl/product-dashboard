// ProductListItem.tsx
import { useState } from 'react';
// Interfaces
import * as I from "../../interfaces/interfaces"
// Styled Components
import { ProductItem, ModalOverlay, ModalContent } from './ProductListItemStyle'


function ProductListItem({ product, onDelete }: { product: I.Product; onDelete: () => void }) {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete();
    setShowModal(false);
  };

  return (
    <ProductItem>
      <div style={{ position: 'relative' }}>
        <button 
          onClick={handleDeleteClick}
          style={{
            position: 'absolute',
            right: '8px',
            top: '-8px',
            width: '24px',
            height: '24px',
            padding: '0',
            backgroundColor: '#ff4444',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
          </svg>
        </button>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <p>{product.description}</p>
      </div>

      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <h3>Confirm Delete</h3>
            <p>Are you sure you want to delete "{product.name}"?</p>
            <div className="button-group">
              <button className="confirm" onClick={handleConfirmDelete}>Yes, Delete</button>
              <button className="cancel" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </ProductItem>
  );
}

export default ProductListItem;