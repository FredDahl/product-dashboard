// ProductListInterfaceStyle.ts
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid red;
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  padding: 1rem;
`

export const FilterRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`

const baseInputStyles = `
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }

  &:hover {
    border-color: #999;
  }
`

export const FilterSelect = styled.select`
  ${baseInputStyles}
  cursor: pointer;
`

export const FilterInput = styled.input`
  ${baseInputStyles}
`