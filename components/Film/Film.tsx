'use client'

import Image from 'next/image'
import React from 'react'
import FilmDetails from './FilmDetails/FilmDetails'
import styles from './Film.module.sass'
import { useGetMovieQuery } from '@/Utils/Redux/services/movieApi'

type Props = {
  id: string
}

function Film({ id }: Props) {
  const { data, isLoading, error } = useGetMovieQuery(id)

  if (isLoading) {
    return <h2 className={styles.loading}>Загрузка...</h2>
  }

  if (error || !data) {
    return <h2>Error</h2>
  }

  return (
    <div className={styles.film}>
      <Image
        className={styles.poster}
        alt={data.title}
        src={data.posterUrl}
        width={400}
        height={500}
      />
      <FilmDetails film={data} />
    </div>
  )
}

export default Film