import styled, { keyframes } from 'styled-components'
const spin = keyframes`to { transform: rotate(360deg); }`
export const Loader = styled.div`
  width: 40px; height: 40px;
  border: 3px solid #ccc;
  border-top-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: 24px auto;
`
