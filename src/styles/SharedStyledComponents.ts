// SharedStyledComponents.ts
import styled, { css } from 'styled-components'

export const CONTENT_WIDTH = {
    max: '500px',
    min: '280px'
  };

const baseInputStyles = css`
  box-sizing: border-box;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.secondary};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primaryLight};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
  }

  &[type="number"] {
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  }
`

export const BaseInput = styled.input`
  ${baseInputStyles}
`

export const BaseTextArea = styled.textarea`
  ${baseInputStyles}
  min-height: 100px;
  resize: vertical;
  scrollbar-width: none;  /* Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none;  /* Chrome, Safari, Opera */
  }
`

export const BaseSelect = styled.select`
  ${baseInputStyles}
  cursor: pointer;
`

export const BaseButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.colors.text};
`