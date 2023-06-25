'use client'

import { selectAllIds, selectCinemaFilter, selectGenreFilter, selectNameFilter } from '@/Utils/Redux/selector'
import Card from './Card/Card'
import styles from './Cards.module.sass'
import { useGetMoviesQuery } from '@/Utils/Redux/services/movieApi'
import { useDispatch, useSelector } from 'react-redux'
import { StateType } from '@/Utils/Redux/store'
import { useEffect } from 'react'
import { filterActions } from '@/Utils/Redux/features/filter'

type Props = {
  isBasket?: boolean,
}

function Cards({ isBasket = false }: Props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(filterActions.reset())
  }, [dispatch])

  const ids = useSelector(state => selectAllIds(state as StateType))
  const genreFilter = useSelector(state => selectGenreFilter(state as StateType))
  const nameFilter = useSelector(state => selectNameFilter(state as StateType))
  const cinemaFilter = useSelector(state => selectCinemaFilter(state as StateType))

  let { data, isLoading, error } = useGetMoviesQuery(cinemaFilter)


  if (isLoading) {
    return <h2 className={styles.loading}>Загрузка...</h2>
  }

  if (error || !data) {
    return <h2>Error</h2>
  }

  if (isBasket) {
    data = data.filter(film => ids.includes(film.id))
  } else {
    if (genreFilter) {
      data = data.filter(film => film.genre === genreFilter)
    }

    if (nameFilter) {
      data = data.filter(film => film.title.toLowerCase().includes(nameFilter.toLowerCase()))
    }
  }

  return (
    <div className={styles.cards}>
      {Boolean(data.length)
        ?
        data.map(film => <Card isBasket={isBasket} film={film} key={film.id} />)
        :
        <h1 className={styles.empty}>Пусто</h1>}
    </div>
  )
}

export default Cards