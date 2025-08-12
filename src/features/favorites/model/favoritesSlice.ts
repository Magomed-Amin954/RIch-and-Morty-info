
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
const initialState: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const updated = state.includes(id)
        ? state.filter((i) => i !== id)
        : [...state, id]

      localStorage.setItem('favorites', JSON.stringify(updated))
      return updated
    },
  },
})

export const { toggleFavorite } = slice.actions
export default slice.reducer
