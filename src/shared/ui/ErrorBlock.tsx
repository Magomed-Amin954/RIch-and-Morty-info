import styled from 'styled-components'
export const ErrorBlock = styled.div`
  color: ${({ theme }) => theme.colors.error};
  text-align: center;
  padding: 16px 12px;
  background: rgba(231, 76, 60, 0.06);
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.radii.sm};
`
