import { Link } from "react-router-dom"
import { styled } from "styled-components"

export const TopBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxContentWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.pagePadding};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const Brand = styled(Link)`
  font-weight: 700;
  letter-spacing: 0.2px;
  padding: 14px 0;
`

export const NavLinks = styled.nav`
  display: flex; gap: 16px;
`

export const NavLink = styled(Link)`
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.text};
  &:hover { background: ${({ theme }) => theme.colors.background}; }
`

export const Main = styled.main`
  padding: 24px 0 48px;
`
