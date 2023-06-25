'use client'

import { useDispatch } from 'react-redux'
import styles from './Input.module.sass'
import { filterActions } from '@/Utils/Redux/features/filter'
import { ChangeEvent, useEffect, useState } from 'react'
import { useDebounce } from '@/Utils/hooks/useDebounce'

type Props = {
  placeholder: string,
  name: string,
  type?: string
}

function Input({ placeholder, name, type = 'search' }: Props) {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const searchName = useDebounce(value, 500)

  useEffect(() => {
    dispatch(filterActions.setName(searchName))
  }, [searchName, dispatch])

  return (
    <div>
      <p className={styles.header}>{name}</p>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      />
    </div>
  )
}

export default Input