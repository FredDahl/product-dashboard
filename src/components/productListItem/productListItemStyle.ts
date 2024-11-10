// ProductListItemStyle.ts
import styled from 'styled-components'
import { BaseButton } from '../../styles/SharedStyledComponents'
import { CONTENT_WIDTH } from '../../styles/Layout'
import { mediaQuery } from '../../styles/MediaQueries'
import { Z_INDEX } from '../../styles/Layout'

export const ProductItem = styled.div`
    width: calc(100% - ${({ theme }) => theme.spacing.xs});
    max-width: ${CONTENT_WIDTH.MAX};
    min-width: auto;
    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.small};
    padding: ${({ theme }) => theme.spacing.xs};
    margin: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.xs};
    position: relative;
    box-sizing: border-box;
    overflow-wrap: break-word;
    word-wrap: break-word;
    
    ${mediaQuery.tablet} {
        width: 100%;
        padding: ${({ theme }) => theme.spacing.lg};
        margin: ${({ theme }) => theme.spacing.sm} 0;
        min-width: ${CONTENT_WIDTH.MIN};
    }
`

export const ProductItemContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;

`

export const ProductItemTitle = styled.h3`
    margin-top: 0;
`

export const ProductItemDescription = styled.p`
    margin-top: 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    width: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    scrollbar-width: none;  /* Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    
    &::-webkit-scrollbar {
        display: none;  /* Chrome, Safari, Opera */
    }
    
    @media (max-width: 768px) {
        font-size: 0.9rem;
        line-height: 1.4;
        padding-left: ${({ theme }) => theme.spacing.md};
        padding-right: ${({ theme }) => theme.spacing.md};
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
  z-index: ${Z_INDEX.MODAL};
`

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: 90%;
  max-width: 300px;
  text-align: center;
  margin: 0 ${({ theme }) => theme.spacing.sm};

  h3 {
    margin-top: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
    margin-top: ${({ theme }) => theme.spacing.md};
  }

  .button-group {
    display: flex;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.xl};
    margin-top: ${({ theme }) => theme.spacing.lg};
  }
`

export const ModalButton = styled(BaseButton)`
  &.confirm {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  
  &.cancel {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`

export const IconButton = styled(BaseButton)`
  position: absolute;
  width: 24px;
  height: 24px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${({ theme }) => theme.spacing.xs};
`

export const DeleteButton = styled(IconButton)`
  right: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ theme }) => theme.colors.danger};
`

export const EditButton = styled(IconButton)`
  right: calc(${({ theme }) => theme.spacing.xs} + 32px);
  background-color: ${({ theme }) => theme.colors.primary};
`