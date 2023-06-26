'use client'

import Input from '@/UI/Input/Input'
import styles from './Search.module.sass'
import Select from '@/UI/Select/Select'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { OptionsType, genres } from '@/app/types'
import { filterActions } from '@/Utils/Redux/features/filter'
import { useGetCinemasQuery } from '@/Utils/Redux/services/movieApi'

function Search() {

  const dispatch = useDispatch()
  const [currentOpen, setCurrentOpen] = useState('')
  const { data, isLoading, error } = useGetCinemasQuery()

  if (isLoading) {
    return
  }

  if (error || !data) {
    return <p>Error</p>
  }

  const cinemas: OptionsType = [{ name: 'Убрать', value: '' }]
    .concat(data.map(cinema => {
      return { name: cinema.name, value: cinema.id }
    }))



  const handleClick = (name: string) => {
    if (name === currentOpen) {
      setCurrentOpen('')
    } else {
      setCurrentOpen(name)
    }
  }

  return (
    <div className={styles.search}>
      <h3 className={styles.header}>Фильтр поиска</h3>
      <Input name='Название' placeholder='Введите название' />
      <Select
        action={(value: string) => dispatch(filterActions.setGenre(value))}
        currentOpen={currentOpen}
        setCurrentOpen={handleClick}
        name='Жанр'
        options={genres}
      />
      <Select
        action={(value: string) => dispatch(filterActions.setCinema(value))}
        currentOpen={currentOpen}
        setCurrentOpen={handleClick}
        name='Кинотеатр'
        options={cinemas}
      />
    </div>
  )
}

export default Search