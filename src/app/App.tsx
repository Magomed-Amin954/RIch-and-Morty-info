import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CharactersPage } from '@/pages/CharactersPage/CharactersPage'
import { CharacterPage } from '@/pages/CharacterPage/CharacterPage'
import { FavoritesPage } from '@/pages/FavoritesPage/FavoritesPage'
import { TopBar, Container, Brand, NavLinks, NavLink, Main } from './App.styles'
 
export const App = () => (
  <BrowserRouter>
    <TopBar>
      <Container>
        <Brand to="/">Rick and Morty</Brand>
        <NavLinks>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/favorites">Избранное</NavLink>
        </NavLinks>
      </Container>
    </TopBar>
    <Main>
      <Container>
        <Routes>
          <Route path="/" element={<CharactersPage />} />
          <Route path="/characters/:id" element={<CharacterPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Container>
    </Main>
  </BrowserRouter>
)
