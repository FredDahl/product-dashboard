// ProductListItemStyle.ts
import styled from 'styled-components'

export const ProductItem = styled.div`
    border: 2px solid #fff;
    border-radius: 4px;
    padding: 20px;
    margin: 10px 0 20px 0;
    position: relative;

    button:hover {
      background-color: #ff0000;
    }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  background-color: #2a2a2a;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;

  h3 {
    margin-top: 0;
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 20px;
  }

  button {
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    
    &.confirm {
      background-color: #ff4444;
      color: white;
    }
    
    &.cancel {
      background-color: #666;
      color: white;
    }
  }
`
