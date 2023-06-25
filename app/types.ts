export type ReviewType = {
  id: string,
  name: string,
  text: string,
  rating: number,
}

export type FilmType = {
  title: string,
  posterUrl: string,
  releaseYear: number,
  description: string,
  genre: GenreType,
  id: string,
  rating: number,
  director: string,
  reviewIds: string[],
}

export type GenreType = 'fantasy' | 'horror' | 'action' | 'comedy'
export const genres: OptionsType = [
  { name: 'Убрать', value: '' },
  { name: 'Фантастика', value: 'fantasy' },
  { name: 'Ужасы', value: 'horror' },
  { name: 'Экшен', value: 'action' },
  { name: 'Комедия', value: 'comedy' },
]

export type OptionsType = { name: string, value: string }[]

export type CinemaType = {
  id: string,
  name: string,
  movieIds: string[],
}

export type FilmCartUnitType = {
  title: string,
  amount: number,
  genre: GenreType,
  posterUrl: string,
}