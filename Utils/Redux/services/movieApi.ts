import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CinemaType, FilmType, ReviewType } from '@/app/types'

export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
  endpoints: (builder) => ({
    getMovies: builder.query<FilmType[], string>({
      query: (cinemaId = '') => {
        if (!cinemaId) {
          return 'movies'
        }

        return `movies?cinemaId=${cinemaId}`
      }
    }),
    getMovie: builder.query<FilmType, string>({
      query: (filmId) => `movie?movieId=${filmId}`
    }),
    getReviews: builder.query<ReviewType[], string>({
      query: (filmId) => `reviews?movieId=${filmId}`
    }),
    getCinemas: builder.query<CinemaType[], void>({
      query: () => 'cinemas'
    })
  }),
})

export const { useGetMoviesQuery, useGetMovieQuery, useGetReviewsQuery, useGetCinemasQuery } = movieApi