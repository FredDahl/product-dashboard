// ProductListInterfaceStyle.ts
import styled from 'styled-components'
import { BaseInput, BaseSelect } from '../../styles/SharedStyledComponents'
import { CONTENT_WIDTH } from '../../styles/SharedStyledComponents'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: ${CONTENT_WIDTH.max};
  min-width: ${CONTENT_WIDTH.min};
  padding: ${({ theme }) => theme.spacing.sm};
  
  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

export const FilterRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
  
  label {
    font-size: 0.9rem;
    
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`

export const ProductListContainer = styled.div`
  width: 100%;
  max-width: ${CONTENT_WIDTH.max};
  min-width: ${CONTENT_WIDTH.min};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FilterSelect = styled(BaseSelect)``
export const FilterInput = styled(BaseInput)``

