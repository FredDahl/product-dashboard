// ProductListInterfaceStyle.ts
import styled from 'styled-components'
import { BaseInput, BaseSelect } from '../../styles/SharedStyledComponents'
import { mediaQuery } from '../../styles/MediaQueries';
import { BREAKPOINTS, CONTENT_WIDTH, LAYOUT, LayoutMode } from '../../styles/Layout';

interface ContainerProps {
  layoutMode: LayoutMode;
}

export const Container = styled.div<ContainerProps>`
  // CSS that applies to both compact and expanded layouts
  width: 100%;
  margin: 0 auto;
  padding: 20px;

  // CSS that applies to either the compact or expanded layout
  ${({ layoutMode }) => layoutMode === 'compact' ? `
    max-width: ${CONTENT_WIDTH.MAX};
  ` : `
    max-width: ${CONTENT_WIDTH.CONTAINER_MAX};
    display: grid;
    grid-template-columns: ${CONTENT_WIDTH.SIDEBAR_WIDTH} minmax(${CONTENT_WIDTH.MAIN_CONTENT_MIN}, 1fr);
    gap: ${LAYOUT.GRID.PRODUCTS.SIDEBAR_GAP};
  `}
`;

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

export const ProductListContainer = styled.div<ContainerProps>`
  display: grid;
  gap: ${LAYOUT.GRID.PRODUCTS.GAP};
  
  ${({ layoutMode }) => layoutMode === 'expanded' && `
    @media (min-width: ${BREAKPOINTS.DESKTOP}px) {
      grid-template-columns: repeat(${LAYOUT.GRID.PRODUCTS.COLUMNS_DESKTOP}, 1fr);
    }
  `}
`;

export const FilterSelect = styled(BaseSelect)``
export const FilterInput = styled(BaseInput)``

export const LayoutToggle = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
  padding: 8px 16px;
  border-radius: 4px;
  
  // Hide for mobile and tablet
  display: none;
  
  // Only show for desktop and above
  @media (min-width: ${BREAKPOINTS.DESKTOP}px) {
    display: block;
  }
  background-color: #007bff;
  color: white;
  border: none;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const SidebarContainer = styled.div`
  width: 300px;
  min-width: 300px;
  padding-right: 45px;
  border-right: 2px solid #808080;
`;

export const MainContentContainer = styled.div`
  padding-left: 20px;
`;

