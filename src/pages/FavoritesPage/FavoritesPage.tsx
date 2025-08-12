import { Container, Title, Grid } from './FavoritesPage.styles'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux'
import { toggleFavorite } from '@/features/favorites/model/favoritesSlice'
import { CharacterCard } from '@/entities/character/ui/CharacterCard'
import { Loader } from '@/shared/ui/Loader'
import { ErrorBlock } from '@/shared/ui/ErrorBlock'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/shared/api/axios'
import type { Character } from '@/entities/character/types'

export const FavoritesPage = () => {
  const dispatch = useAppDispatch()
  const favoriteIds = useAppSelector((state) => state.favorites)

  const { data, isLoading, isError } = useQuery<Character[]>({
    queryKey: ['favorite-characters', favoriteIds],
    enabled: favoriteIds.length > 0,
    queryFn: async () => {
      const path = `/character/${favoriteIds.join(',')}`
      const res = await api.get(path)
      const raw = res.data
      const list: Character[] = Array.isArray(raw) ? raw : [raw]
      // Отображаем в обратном порядке: последний добавленный будет первым
      const byId = new Map(list.map((c) => [c.id, c]))
      return favoriteIds
        .slice()
        .reverse()
        .map((id) => byId.get(id))
        .filter(Boolean) as Character[]
    },
    staleTime: 300_000,
  })

  return (
    <Container>
      <Title>Избранное</Title>
      {favoriteIds.length === 0 && <ErrorBlock>Нет избранных персонажей</ErrorBlock>}
      {isLoading && <Loader />}
      {isError && <ErrorBlock>Ошибка загрузки избранных</ErrorBlock>}
      <Grid>
        {data?.map((char) => (
          <CharacterCard
            key={char.id}
            character={char}
            isFavorite={favoriteIds.includes(char.id)}
            onToggleFavorite={(id) => dispatch(toggleFavorite(id))}
          />
        ))}
      </Grid>
    </Container>
  )
}
