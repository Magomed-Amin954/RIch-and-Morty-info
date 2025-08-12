import styled from 'styled-components'

export const SearchWrap = styled.div`
  margin-bottom: 16px;
`

export const SearchInput = styled.input`
  width: 100%;
  max-width: 520px;
  padding: 12px 14px;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  outline: none;
  transition: border-color 0.2s ease;
  &::placeholder { color: ${({ theme }) => theme.colors.muted}; }
  &:focus { border-color: ${({ theme }) => theme.colors.primary}; }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(4, 1fr);
  }
`


