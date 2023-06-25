import { createSlice } from '@reduxjs/toolkit'

const initialState = { name: '', genre: '', cinema: '' }

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setGenre: (state, { payload }: { payload: string }) => {
      state.genre = payload
    },
    setName: (state, { payload }: { payload: string }) => {
      state.name = payload
    },
    setCinema: (state, { payload }: { payload: string }) => {
      state.cinema = payload
    },
    reset: () => initialState,
  }
})

export const filterReducer = filterSlice.reducer
export const filterActions = filterSlice.actions