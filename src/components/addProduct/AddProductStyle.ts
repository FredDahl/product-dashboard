import styled from 'styled-components';
import { CONTENT_WIDTH } from '../../styles/SharedStyledComponents';

export const AddProductContainer = styled.div`
  width: 100%;
  max-width: ${CONTENT_WIDTH.max};
  min-width: ${CONTENT_WIDTH.min};
  padding: ${({ theme }) => theme.spacing.sm};
  
  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
  
  h2 {
    font-size: 1.25rem;
    
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;