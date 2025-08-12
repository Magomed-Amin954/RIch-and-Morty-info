import { useQuery } from '@tanstack/react-query'
import { api } from '@/shared/api/axios'
import type { CharactersResponse } from '../types'

export const useCharacters = (nameFilter: string) =>
  useQuery<CharactersResponse>({
    queryKey: ['characters', nameFilter],
    queryFn: async () => {
      const normalized = nameFilter?.trim().replace(/\s+/g, ' ')
      const path = normalized
        ? `/character/?name=${encodeURIComponent(normalized)}`
        : '/character'
      return (await api.get(path)).data
    },
    staleTime: 300_000,
  })
