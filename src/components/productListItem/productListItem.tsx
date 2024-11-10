// ProductListItem.tsx
import { useState } from 'react';
// Interfaces
import * as I from "../../interfaces/interfaces"
// Styled Components
import { ProductItem, ModalOverlay, ModalContent } from './ProductListItemStyle'

interface ProductListItemProps {
  product: I.Product;
  onDelete: () => void;
  onUpdate: (updatedProduct: I.Product) => void;
}

function ProductListItem({ product, onDelete, onUpdate }: ProductListItemProps) {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedProduct, setEditedProduct] = useState<I.Product>(product);

  const handleDeleteClick = () => setShowModal(true);
  const handleEditClick = () => {
    setEditedProduct(product);
    setShowEditModal(true);
  };

  const handleConfirmDelete = () => {
    onDelete();
    setShowModal(false);
  };

  const handleConfirmEdit = () => {
    onUpdate({
      ...editedProduct,
      id: product.id
    });
    setShowEditModal(false);
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
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
          </svg>
        </button>
        <button
          onClick={handleEditClick}
          style={{
            position: 'absolute',
            right: '40px',
            top: '-8px',
            width: '24px',
            height: '24px',
            padding: '0',
            backgroundColor: '#4444ff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ✎
        </button>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Category: {product.category}</p>
        <p>{product.description}</p>
      </div>

      {showEditModal && (
        <ModalOverlay>
          <ModalContent>
            <h3>Edit Product</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleConfirmEdit(); }}>
              <input
                type="text"
                value={editedProduct.name}
                onChange={(e) => setEditedProduct({...editedProduct, name: e.target.value})}
                placeholder="Product Name"
              />
              <input
                type="number"
                value={editedProduct.price}
                onChange={(e) => setEditedProduct({...editedProduct, price: Number(e.target.value)})}
                placeholder="Price"
              />
              <input
                type="text"
                value={editedProduct.category}
                onChange={(e) => setEditedProduct({...editedProduct, category: e.target.value})}
                placeholder="Category"
              />
              <textarea
                value={editedProduct.description}
                onChange={(e) => setEditedProduct({...editedProduct, description: e.target.value})}
                placeholder="Description"
              />
              <div className="button-group">
                <button type="submit" className="confirm">Save Changes</button>
                <button type="button" className="cancel" onClick={() => setShowEditModal(false)}>Cancel</button>
              </div>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}

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