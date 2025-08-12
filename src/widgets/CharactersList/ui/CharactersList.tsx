    import { useState } from 'react'
import { SearchWrap, SearchInput, Grid } from './CharactersList.styles'
import { useCharacters } from '@/entities/character/api/useCharacters'
import { CharacterCard } from '@/entities/character/ui/CharacterCard'
import { useDebounce } from '@/shared/lib/useDebounce'
import { useAppSelector, useAppDispatch } from '@/shared/hooks/redux'
import { toggleFavorite } from '@/features/favorites/model/favoritesSlice'
import { Loader } from '@/shared/ui/Loader'
import { ErrorBlock } from '@/shared/ui/ErrorBlock'

export const CharactersList = () => {
  const dispatch = useAppDispatch()
  const favorites = useAppSelector((state) => state.favorites)
  const [search, setSearch] = useState('')
  const debounced = useDebounce(search.trim(), 1000)

  const { data, isLoading, isError } = useCharacters(debounced)

  return (
    <section>
      <SearchWrap>
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск персонажей..."
        />
      </SearchWrap>
      {isLoading && <Loader />}
      {isError && <ErrorBlock>Ошибка загрузки</ErrorBlock>}
      <Grid>
        {data?.results.map((char) => (
          <CharacterCard
            key={char.id}
            character={char}
            isFavorite={favorites.includes(char.id)}
            onToggleFavorite={(id) => dispatch(toggleFavorite(id))}
          />
        ))}
      </Grid>
    </section>
  )
}

