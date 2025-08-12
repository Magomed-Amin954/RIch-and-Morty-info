import styled from 'styled-components'

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const AvatarWrap = styled.div`
  aspect-ratio: 16 / 12;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Content = styled.div`
  padding: 12px;
  display: grid;
  gap: 8px;
`

export const Name = styled.h3`
  margin: 0;
  font-size: 16px;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Status = styled.p<{ $alive: boolean }>`
  margin: 0;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textSecondary};
  &:before {
    content: '';
    display: inline-block;
    width: 8px; height: 8px;
    margin-right: 8px;
    border-radius: 50%;
    background: ${({ $alive, theme }) => ($alive ? theme.colors.success : theme.colors.error)};
  }
`

export const FavButton = styled.button<{ $active: boolean }>`
  margin-top: 4px;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid
    ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.border)};
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.surface)};
  color: ${({ $active, theme }) => ($active ? '#fff' : theme.colors.text)};
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ $active, theme }) => ($active ? theme.colors.primaryHover : theme.colors.background)};
  }
`


