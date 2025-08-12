import { Card, AvatarWrap, Avatar, Content, Name, Status, FavButton } from './CharacterCard.styles'
import type { Character } from '../types'

interface Props {
  character: Character
  isFavorite: boolean
  onToggleFavorite: (id: number) => void
}

export const CharacterCard = ({ character, isFavorite, onToggleFavorite }: Props) => (
  <Card>
    <AvatarWrap>
      <Avatar src={character.image} alt={character.name} />
    </AvatarWrap>
    <Content>
      <Name title={character.name}>{character.name}</Name>
      <Status $alive={character.status === 'Alive'}>{character.status}</Status>
      <FavButton onClick={() => onToggleFavorite(character.id)} $active={isFavorite}>
        {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
      </FavButton>
    </Content>
  </Card>
)
