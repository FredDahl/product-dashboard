// ProductListInterfaceStyle.ts
import styled from 'styled-components'
import { BaseInput, BaseSelect } from '../../styles/SharedStyledComponents'
import { mediaQuery } from '../../styles/MediaQueries';
import { CONTENT_WIDTH } from '../../styles/Layout';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  
  ${mediaQuery.tablet} {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: ${CONTENT_WIDTH.MAX};
  min-width: ${CONTENT_WIDTH.MIN};
  padding: ${({ theme }) => theme.spacing.sm};
  
  ${mediaQuery.tablet} {
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
    
    ${mediaQuery.tablet} {
      font-size: 1rem;
    }
  }
`

export const ProductListContainer = styled.div`
  width: 100%;
  max-width: ${CONTENT_WIDTH.MAX};
  min-width: ${CONTENT_WIDTH.MIN};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FilterSelect = styled(BaseSelect)``
export const FilterInput = styled(BaseInput)``

