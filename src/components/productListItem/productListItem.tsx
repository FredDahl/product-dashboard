// ProductListItem.tsx
import { useState } from 'react';
// Interfaces
import * as I from "../../interfaces/interfaces"
// Styled Components
import { 
  ProductItem, 
  ProductItemContent,
  ProductItemTitle,
  ProductItemDescription,
  ModalOverlay, 
  ModalContent, 
  DeleteButton, 
  EditButton, 
  ModalButton 
} from './ProductListItemStyle'
import { BaseInput, BaseTextArea } from '../../styles/SharedStyledComponents'

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
      <DeleteButton onClick={handleDeleteClick}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
        </svg>
      </DeleteButton>
      <EditButton onClick={handleEditClick}>
        ✎
      </EditButton>
      <ProductItemContent>
        <ProductItemTitle>{product.name}</ProductItemTitle>
        <ProductItemTitle>Price: ${product.price}</ProductItemTitle>
        <ProductItemTitle>Category: {product.category}</ProductItemTitle>
        <ProductItemDescription>{product.description}</ProductItemDescription>
      </ProductItemContent>

      {showEditModal && (
        <ModalOverlay>
          <ModalContent>
            <h3>Edit Product</h3>
            <form onSubmit={(e) => { e.preventDefault(); handleConfirmEdit(); }}>
              <BaseInput
                type="text"
                value={editedProduct.name}
                onChange={(e) => setEditedProduct({...editedProduct, name: e.target.value})}
                placeholder="Product Name"
              />
              <BaseInput
                type="number"
                value={editedProduct.price}
                onChange={(e) => setEditedProduct({...editedProduct, price: Number(e.target.value)})}
                placeholder="Price"
              />
              <BaseInput
                type="text"
                value={editedProduct.category}
                onChange={(e) => setEditedProduct({...editedProduct, category: e.target.value})}
                placeholder="Category"
              />
              <BaseTextArea
                value={editedProduct.description}
                onChange={(e) => setEditedProduct({...editedProduct, description: e.target.value})}
                placeholder="Description"
              />
              <div className="button-group">
                <ModalButton type="submit" className="confirm">Save Changes</ModalButton>
                <ModalButton type="button" className="cancel" onClick={() => setShowEditModal(false)}>Cancel</ModalButton>
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
              <ModalButton className="confirm" onClick={handleConfirmDelete}>Yes, Delete</ModalButton>
              <ModalButton className="cancel" onClick={() => setShowModal(false)}>Cancel</ModalButton>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </ProductItem>
  );
}

export default ProductListItem;