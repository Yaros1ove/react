import { StateType } from "./store"

const selectCartModule = (state: StateType) => state.cart
const selectFilterModule = (state: StateType) => state.filter

export const selectFilmTicketsAmount = (state: StateType, id: string) => selectCartModule(state)[id] || 0
export const selectAllTicketsAmount = (state: StateType) => {
  const cart = selectCartModule(state)
  let sum = 0

  for (const amount of Object.values(cart)) {
    sum += amount
  }

  return sum
}
export const selectAllIds = (state: StateType) => {
  const cart = selectCartModule(state)
  const ids: string[] = []

  for (const id of Object.keys(cart)) {
    ids.push(id)
  }

  return ids
}

export const selectNameFilter = (state: StateType) => selectFilterModule(state).name
export const selectGenreFilter = (state: StateType) => selectFilterModule(state).genre
export const selectCinemaFilter = (state: StateType) => selectFilterModule(state).cinema